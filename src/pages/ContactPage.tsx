import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertTriangle, MapPin, Phone, Mail, Facebook, Globe } from 'lucide-react';
import PageHero from '@/components/PageHero';

// Formulaire de contact — envoie les données à l'API /api/contact (serveur
// Express + Nodemailer, voir server.js), qui notifie l'association et
// confirme la réception à l'expéditeur.
async function handleSubmit(data: Record<string, string>): Promise<void> {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  let json: { ok?: boolean } | null = null;
  try {
    json = await res.json();
  } catch {
    // réponse non-JSON (ex: erreur serveur brute) — gérée via res.ok plus bas
  }

  if (!res.ok || !json?.ok) {
    throw new Error("Une erreur est survenue lors de l'envoi de votre message.");
  }
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Capturé avant l'"await" : après une attente asynchrone, l'événement DOM
    // est terminé et e.currentTarget redevient null (comportement standard
    // du DOM, rien à voir avec React) — on garde donc la référence ici.
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = String(value);
    });
    setStatus('submitting');
    try {
      await handleSubmit(data);
      setStatus('success');
      form.reset();
    } catch (err) {
      // Logué pour le diagnostic (jamais affiché tel quel à l'utilisateur) :
      // permet de distinguer une vraie panne réseau d'un souci de parsing, etc.
      console.error('[contact] Échec de la soumission du formulaire :', err);
      setStatus('error');
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Une question ? Contactez-nous"
        subtitle="Le club est animé par une équipe de bénévoles. N'hésitez pas à nous écrire ou à nous appeler."
      />

      <section className="container-page py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Coordonnées */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-purple-900">Nos coordonnées</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-purple-100 text-brand-purple-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Adresse</p>
                  <p className="text-sm text-gray-600">Mairie de Rivesaltes (66600), France</p>
                  <p className="text-sm text-gray-500">Cours à l'Ami-Club, à l'ancienne mairie et en extérieur.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green-100 text-brand-green-700">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Téléphone</p>
                  <p className="text-sm text-gray-600">Gisèle : <a href="tel:+33698099977" className="text-brand-purple-700 hover:underline">06 98 09 99 77</a></p>
                  <p className="text-sm text-gray-600">Marie-Thérèse : <a href="tel:+33601986388" className="text-brand-purple-700 hover:underline">06 01 98 63 88</a></p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-yellow-100 text-brand-yellow-700">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <a href="mailto:contact@activsportrivesaltes.fr" className="text-sm text-brand-purple-700 hover:underline">
                    contact@activsportrivesaltes.fr
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-purple-100 text-brand-purple-700">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Site internet</p>
                  <a href="https://activsportrivesaltes.fr" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-purple-700 hover:underline">
                    activsportrivesaltes.fr
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Facebook className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Facebook</p>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-purple-700 hover:underline">
                    Suivez-nous sur Facebook
                  </a>
                </div>
              </li>
            </ul>

            {/* Carte (Google Maps embed placeholder) */}
            <div className="mt-8 overflow-hidden rounded-2xl shadow-soft ring-1 ring-black/5">
              <img
  src="images/Plan.jpg"
  alt="Plan de Rivesaltes"
  width="100%"
  height="320"
  loading="lazy"
  style={{ border: 0, objectFit: 'cover' }}
/>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            {status === 'success' ? (
              <div className="card flex flex-col items-center p-10 text-center">
                <CheckCircle2 className="h-16 w-16 text-brand-green-500" />
                <h2 className="mt-4 font-heading text-2xl font-bold text-brand-purple-900">Message envoyé !</h2>
                <p className="mt-2 max-w-md text-gray-600">
                  Merci de nous avoir écrit. Un membre du bureau vous répondra dans les meilleurs délais.
                  Vous allez recevoir un email de confirmation.
                </p>
                <button type="button" onClick={() => setStatus('idle')} className="btn btn-outline mt-6">
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="card p-6 sm:p-8">
                <h2 className="font-heading text-2xl font-bold text-brand-purple-900">Écrivez-nous</h2>
                <p className="mt-1 text-sm text-gray-500">Nous répondons à tous les messages.</p>

                {status === 'error' && (
                  <div className="mt-4 flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
                    <AlertTriangle className="h-5 w-5 shrink-0" />
                    <p>
                      Une erreur est survenue lors de l'envoi de votre message. Merci de réessayer,
                      ou de nous appeler directement si le problème persiste.
                    </p>
                  </div>
                )}

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <Field label="Prénom" name="firstName" required />
                  <Field label="Nom" name="lastName" required />
                </div>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Téléphone" name="phone" type="tel" />
                </div>
                <div className="mt-5">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Sujet</label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:border-brand-purple-400 focus:outline-none focus:ring-2 focus:ring-brand-purple-100"
                  />
                </div>
                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:border-brand-purple-400 focus:outline-none focus:ring-2 focus:ring-brand-purple-100"
                  />
                </div>

                {/* Honeypot anti-spam : champ invisible, doit rester vide (les bots le remplissent) */}
                <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Site web</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <button type="submit" disabled={status === 'submitting'} className="btn btn-primary mt-6 w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  {status === 'submitting' ? 'Envoi en cours…' : 'Envoyer le message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-brand-purple-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:border-brand-purple-400 focus:outline-none focus:ring-2 focus:ring-brand-purple-100"
      />
    </div>
  );
}
