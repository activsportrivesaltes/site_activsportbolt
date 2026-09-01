// Serveur de production du site Activ' Sport Rivesaltes.
//
// Sert les fichiers statiques du build Vite (dist/) — remplace le paquet
// "serve" utilisé auparavant — et expose l'API d'envoi d'emails du
// formulaire de contact (SMTP ksuite / Infomaniak via Nodemailer).
//
// Démarrage attendu sur le serveur Infomaniak (paramètres avancés Node.js) :
//   node --env-file=.env server.js
// (le fichier .env doit être déposé manuellement sur le serveur, jamais
// commité — voir .env.example)

import express from 'express';
import nodemailer from 'nodemailer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '20kb' }));

// ---------------------------------------------------------------------------
// Anti-spam basique : limite de fréquence par IP (fenêtre glissante en mémoire)
// ---------------------------------------------------------------------------
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const requestLog = new Map(); // "bucket:ip" -> timestamps[]

// bucket sépare la limite par formulaire (contact / inscription), pour
// qu'une rafale sur l'un n'affecte pas l'autre.
function isRateLimited(bucket, ip) {
  const key = `${bucket}:${ip}`;
  const now = Date.now();
  const timestamps = (requestLog.get(key) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT_MAX) {
    requestLog.set(key, timestamps);
    return true;
  }
  timestamps.push(now);
  requestLog.set(key, timestamps);
  return false;
}

// ---------------------------------------------------------------------------
// Transport SMTP (ksuite / Infomaniak) — mot de passe d'application requis
// ---------------------------------------------------------------------------
function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'mail.infomaniak.com',
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true', // false = STARTTLS sur 587, true = SSL implicite sur 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const BRAND = {
  purple900: '#3E2559',
  purple700: '#653C9E',
  green500: '#3FA34D',
  yellow400: '#F5B700',
};

function renderEmailShell(title, bodyHtml) {
  const logoUrl = process.env.MAIL_LOGO_URL || 'https://activsportrivesaltes.fr/images/Logo_ActivSportRiv.jpg';
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${escapeHtml(title)}</title></head>
<body style="margin:0; padding:0; background-color:#F1FAF1; font-family: Arial, Helvetica, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F1FAF1; padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 40px rgba(0,0,0,0.08);">
        <tr>
          <td style="background: linear-gradient(135deg, ${BRAND.purple900}, ${BRAND.purple700}); padding:28px 24px; text-align:center;">
            <img src="${escapeHtml(logoUrl)}" width="64" height="64" alt="Activ' Sport Rivesaltes" style="display:block; margin:0 auto 12px auto; border-radius:12px; background:#ffffff; padding:4px;">
            <div style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size:20px; font-weight:700; color:#ffffff;">
              Activ<span style="color:${BRAND.yellow400};">'</span>Sport <span style="color:${BRAND.green500};">Rivesaltes</span>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 28px 8px 28px;">
            <h1 style="margin:0 0 16px 0; font-size:19px; color:${BRAND.purple900};">${escapeHtml(title)}</h1>
            ${bodyHtml}
          </td>
        </tr>
        <tr>
          <td style="padding:20px 28px 28px 28px;">
            <hr style="border:none; border-top:1px solid #eee; margin:0 0 16px 0;">
            <p style="margin:0; font-size:12px; color:#9aa0a6; line-height:1.6;">
              Association Activ' Sport Rivesaltes — Ami-Club, Mairie de Rivesaltes (66600)<br>
              Cet email a été généré automatiquement depuis le site activsportrivesaltes.fr.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function renderRow(label, value) {
  return `<tr>
    <td style="padding:6px 0; font-size:13px; color:#8A5E00; font-weight:700; width:140px; vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:6px 0; font-size:14px; color:#333333; vertical-align:top;">${escapeHtml(value).replace(/\n/g, '<br>')}</td>
  </tr>`;
}

function renderAdminEmail(data) {
  const rows = [
    renderRow('Prénom', data.firstName),
    renderRow('Nom', data.lastName),
    renderRow('Email', data.email),
    renderRow('Téléphone', data.phone || '—'),
    renderRow('Sujet', data.subject),
  ].join('');

  const body = `
    <p style="margin:0 0 16px 0; font-size:14px; color:#555;">Nouveau message reçu via le formulaire de contact du site :</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">${rows}</table>
    <div style="background:#F6F2FC; border-radius:10px; padding:14px 16px; font-size:14px; color:#333; line-height:1.6;">
      ${escapeHtml(data.message).replace(/\n/g, '<br>')}
    </div>`;

  return renderEmailShell('Nouveau message de contact', body);
}

function renderConfirmationEmail(data) {
  const body = `
    <p style="margin:0 0 14px 0; font-size:14px; color:#333; line-height:1.6;">Bonjour ${escapeHtml(data.firstName)},</p>
    <p style="margin:0 0 14px 0; font-size:14px; color:#333; line-height:1.6;">
      Nous avons bien reçu votre message et nous vous en remercions. Un membre du bureau
      de l'association vous répondra dans les meilleurs délais.
    </p>
    <p style="margin:0 0 4px 0; font-size:13px; color:#8A5E00; font-weight:700;">Récapitulatif de votre message</p>
    <div style="background:#F6F2FC; border-radius:10px; padding:14px 16px; font-size:14px; color:#333; line-height:1.6; margin-bottom:14px;">
      ${escapeHtml(data.message).replace(/\n/g, '<br>')}
    </div>
    <p style="margin:0; font-size:14px; color:#333; line-height:1.6;">À bientôt,<br>L'équipe Activ' Sport Rivesaltes</p>`;

  return renderEmailShell('Votre message a bien été reçu', body);
}

function renderInscriptionAdminEmail(data) {
  const rows = [
    renderRow('Prénom', data.firstName),
    renderRow('Nom', data.lastName),
    renderRow('Email', data.email),
    renderRow('Téléphone', data.phone),
    renderRow('Activités', data.activities.join(', ')),
  ].join('');

  const messageBlock = data.message
    ? `<p style="margin:16px 0 4px 0; font-size:13px; color:#8A5E00; font-weight:700;">Message</p>
       <div style="background:#F6F2FC; border-radius:10px; padding:14px 16px; font-size:14px; color:#333; line-height:1.6;">
         ${escapeHtml(data.message).replace(/\n/g, '<br>')}
       </div>`
    : '';

  const body = `
    <p style="margin:0 0 16px 0; font-size:14px; color:#555;">Nouvelle demande d'inscription reçue via le site :</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
    ${messageBlock}`;

  return renderEmailShell("Nouvelle demande d'inscription", body);
}

function renderInscriptionConfirmationEmail(data) {
  const activitiesList = data.activities.map((a) => `<li>${escapeHtml(a)}</li>`).join('');

  const body = `
    <p style="margin:0 0 14px 0; font-size:14px; color:#333; line-height:1.6;">Bonjour ${escapeHtml(data.firstName)},</p>
    <p style="margin:0 0 14px 0; font-size:14px; color:#333; line-height:1.6;">
      Merci pour votre intérêt ! Nous avons bien reçu votre demande d'inscription pour :
    </p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:14px; color:#333; line-height:1.8;">${activitiesList}</ul>
    <p style="margin:0 0 14px 0; font-size:14px; color:#333; line-height:1.6;">
      Un membre du bureau vous contactera très prochainement pour la finaliser. Pour accélérer
      les choses, pensez à apporter la fiche d'inscription et le questionnaire de santé remplis
      (téléchargeables sur la page Inscription du site).
    </p>
    <p style="margin:0; font-size:14px; color:#333; line-height:1.6;">À bientôt,<br>L'équipe Activ' Sport Rivesaltes</p>`;

  return renderEmailShell("Votre demande d'inscription a bien été reçue", body);
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------
function str(body, key, maxLength = 500) {
  const value = body?.[key];
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function strArray(body, key, maxItems = 20, maxLength = 150) {
  const value = body?.[key];
  if (!Array.isArray(value)) return [];
  return value
    .filter((v) => typeof v === 'string')
    .map((v) => v.trim().slice(0, maxLength))
    .filter((v) => v !== '')
    .slice(0, maxItems);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ---------------------------------------------------------------------------
// Route : POST /api/contact
// ---------------------------------------------------------------------------
app.post('/api/contact', async (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';

  if (isRateLimited('contact', ip)) {
    return res.status(429).json({ ok: false, error: 'too_many_requests' });
  }

  const body = req.body || {};

  // Honeypot anti-spam : champ caché côté front, doit rester vide.
  if (str(body, 'website') !== '') {
    return res.status(200).json({ ok: true });
  }

  const data = {
    firstName: str(body, 'firstName', 100),
    lastName: str(body, 'lastName', 100),
    email: str(body, 'email', 200),
    phone: str(body, 'phone', 40),
    subject: str(body, 'subject', 200),
    message: str(body, 'message', 4000),
  };

  const errors = [];
  if (!data.firstName) errors.push('firstName');
  if (!data.lastName) errors.push('lastName');
  if (!isValidEmail(data.email)) errors.push('email');
  if (!data.subject) errors.push('subject');
  if (!data.message) errors.push('message');

  if (errors.length > 0) {
    return res.status(422).json({ ok: false, error: 'validation_failed', fields: errors });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('[contact] SMTP_USER / SMTP_PASS manquants dans les variables d\'environnement.');
    return res.status(500).json({ ok: false, error: 'server_misconfigured' });
  }

  const transporter = getTransporter();
  const fromAddress = process.env.MAIL_FROM || process.env.SMTP_USER;
  const toClub = process.env.MAIL_TO || 'activsportrivesaltes@etik.com';

  try {
    // 1. Notification au club
    await transporter.sendMail({
      from: `"Activ' Sport Rivesaltes" <${fromAddress}>`,
      to: toClub,
      replyTo: `"${data.firstName} ${data.lastName}" <${data.email}>`,
      subject: `Nouveau message de contact — ${data.firstName} ${data.lastName}`,
      html: renderAdminEmail(data),
    });
  } catch (err) {
    console.error('[contact] Échec envoi notification club :', err);
    return res.status(502).json({ ok: false, error: 'mail_send_failed' });
  }

  // 2. Confirmation à l'expéditeur : envoyée en tâche de fond, sans faire
  // attendre le navigateur (la notification au club, ci-dessus, suffit à
  // valider la requête). Deux allers-retours SMTP séquentiels avant de
  // répondre pouvaient dépasser plusieurs secondes et déclencher une erreur
  // réseau côté client alors que les emails partaient bien.
  transporter.sendMail({
    from: `"Activ' Sport Rivesaltes" <${fromAddress}>`,
    to: `"${data.firstName} ${data.lastName}" <${data.email}>`,
    subject: "Votre message a bien été reçu — Activ' Sport Rivesaltes",
    html: renderConfirmationEmail(data),
  }).catch((err) => {
    console.error('[contact] Échec envoi confirmation utilisateur :', err);
  });

  return res.status(200).json({ ok: true });
});

// ---------------------------------------------------------------------------
// Route : POST /api/inscription
// ---------------------------------------------------------------------------
app.post('/api/inscription', async (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';

  if (isRateLimited('inscription', ip)) {
    return res.status(429).json({ ok: false, error: 'too_many_requests' });
  }

  const body = req.body || {};

  // Honeypot anti-spam (même principe que /api/contact)
  if (str(body, 'website') !== '') {
    return res.status(200).json({ ok: true });
  }

  const data = {
    firstName: str(body, 'firstName', 100),
    lastName: str(body, 'lastName', 100),
    email: str(body, 'email', 200),
    phone: str(body, 'phone', 40),
    activities: strArray(body, 'activities'),
    message: str(body, 'message', 4000),
  };

  const errors = [];
  if (!data.firstName) errors.push('firstName');
  if (!data.lastName) errors.push('lastName');
  if (!isValidEmail(data.email)) errors.push('email');
  if (!data.phone) errors.push('phone');
  if (data.activities.length === 0) errors.push('activities');

  if (errors.length > 0) {
    return res.status(422).json({ ok: false, error: 'validation_failed', fields: errors });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('[inscription] SMTP_USER / SMTP_PASS manquants dans les variables d\'environnement.');
    return res.status(500).json({ ok: false, error: 'server_misconfigured' });
  }

  const transporter = getTransporter();
  const fromAddress = process.env.MAIL_FROM || process.env.SMTP_USER;
  const toClub = process.env.MAIL_TO || 'activsportrivesaltes@etik.com';

  try {
    // 1. Notification au club (critique : la requête échoue si celle-ci échoue)
    await transporter.sendMail({
      from: `"Activ' Sport Rivesaltes" <${fromAddress}>`,
      to: toClub,
      replyTo: `"${data.firstName} ${data.lastName}" <${data.email}>`,
      subject: `Nouvelle demande d'inscription — ${data.firstName} ${data.lastName}`,
      html: renderInscriptionAdminEmail(data),
    });
  } catch (err) {
    console.error('[inscription] Échec envoi notification club :', err);
    return res.status(502).json({ ok: false, error: 'mail_send_failed' });
  }

  // 2. Confirmation à la personne inscrite, en tâche de fond (voir /api/contact
  // pour l'explication : ne pas faire attendre le navigateur sur ce 2e envoi).
  transporter.sendMail({
    from: `"Activ' Sport Rivesaltes" <${fromAddress}>`,
    to: `"${data.firstName} ${data.lastName}" <${data.email}>`,
    subject: "Votre demande d'inscription a bien été reçue — Activ' Sport Rivesaltes",
    html: renderInscriptionConfirmationEmail(data),
  }).catch((err) => {
    console.error('[inscription] Échec envoi confirmation utilisateur :', err);
  });

  return res.status(200).json({ ok: true });
});

// ---------------------------------------------------------------------------
// Fichiers statiques du build (remplace "serve -s dist -l 3000")
// ---------------------------------------------------------------------------
app.use(express.static(DIST_DIR));

app.listen(PORT, () => {
  console.log(`Activ' Sport Rivesaltes — serveur démarré sur le port ${PORT}`);
});
