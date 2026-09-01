import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertTriangle, FileText, Download, ChevronDown, Check, X } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { activities } from '@/data/activities';
import ficheInscriptionUrl from '@/assets/documents/Fiche_Inscription.pdf';
import questionnaireSanteUrl from '@/assets/documents/Questionnaire_Sante.pdf';

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? '';

type InscriptionPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  activities: string[];
  website: string; // honeypot
};

// Envoie le formulaire à l'API (/api/inscription, voir server.js), qui
// notifie l'association et confirme la réception à la personne inscrite.
async function handleSubmit(data: InscriptionPayload): Promise<void> {
  const res = await fetch(`${API_BASE}/api/inscription`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  // Lu une seule fois en texte brut, puis parsé nous-mêmes : permet de logger
  // le vrai corps de réponse même s'il n'est pas du JSON valide.
  const rawBody = await res.text();
  let json: { ok?: boolean } | null = null;
  try {
    json = JSON.parse(rawBody);
  } catch {
    // réponse non-JSON — gérée via res.ok plus bas, rawBody reste disponible pour le log
  }

  if (!res.ok || !json?.ok) {
    throw new Error(`Échec de l'envoi — HTTP ${res.status} ${res.statusText} — réponse : ${rawBody.slice(0, 300)}`);
  }
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function InscriptionPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [activitiesError, setActivitiesError] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Capturé avant l'"await" : après une attente asynchrone, l'événement DOM
    // est terminé et e.currentTarget redevient null (comportement standard
    // du DOM, rien à voir avec React).
    const form = e.currentTarget;

    if (selectedActivities.length === 0) {
      setActivitiesError(true);
      return;
    }
    setActivitiesError(false);

    const formData = new FormData(form);
    const payload: InscriptionPayload = {
      firstName: String(formData.get('firstName') || ''),
      lastName: String(formData.get('lastName') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      message: String(formData.get('message') || ''),
      activities: selectedActivities,
      website: String(formData.get('website') || ''), // honeypot
    };

    setStatus('submitting');
    try {
      await handleSubmit(payload);
      setStatus('success');
      form.reset();
      setSelectedActivities([]);
    } catch (err) {
      console.error("[inscription] Échec de la soumission du formulaire :", err);
      setStatus('error');
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Inscription"
        title={
      <>
        Rejoignez <span className="text-green-600">Activ'</span>{" "}
        <span className="text-yellow-500">Sport</span>{" "}
        <span className="text-purple-800">Rivesaltes</span>
      </>
    }
        subtitle={
    <>
      Pour vous inscrire, plus rapidement, apportez la fiche d'inscription et le formulaire de santé que vous pouvez télécharger ci-dessous.<br />Prévoyez 3 enveloppes timbrées à votre adresse si vous n'avez pas d'adresse mail.<br />
      Une question ? N'hésitez pas à nous envoyer un message, nous reviendrons vers vous rapidement.<br />Les inscriptions  auront lieu les mercredi 9 et jeudi 10 septembre de 15h à 19h à l'Ami-Club.
    </>
  }

   />


      <section className="container-page py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Formulaire */}
          <div className="lg:col-span-2">
            {status === 'success' ? (
              <div className="card flex flex-col items-center p-10 text-center">
                <CheckCircle2 className="h-16 w-16 text-brand-green-500" />
                <h2 className="mt-4 font-heading text-2xl font-bold text-brand-purple-900">
                  Demande envoyée !
                </h2>
                <p className="mt-2 max-w-md text-gray-600">
                  Merci pour votre intérêt. Un membre du bureau vous contactera très prochainement
                  pour finaliser votre inscription. Vous allez recevoir un email de confirmation.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn btn-outline mt-6"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="card p-6 sm:p-8">
                {status === 'error' && (
                  <div className="mb-5 flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
                    <AlertTriangle className="h-5 w-5 shrink-0" />
                    <p>
                      Une erreur est survenue lors de l'envoi de votre demande. Merci de réessayer,
                      ou de nous appeler directement si le problème persiste.
                    </p>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Prénom" name="firstName" required />
                  <Field label="Nom" name="lastName" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Téléphone" name="phone" type="tel" required />
                </div>

                <div className="mt-5">
                  <ActivityMultiSelect
                    selected={selectedActivities}
                    onChange={(next) => {
                      setSelectedActivities(next);
                      if (next.length > 0) setActivitiesError(false);
                    }}
                    error={activitiesError}
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Une question, une précision…"
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
                  {status === 'submitting' ? 'Envoi en cours…' : 'Envoyer ma demande'}
                </button>
                <p className="mt-3 text-xs text-gray-400">
                  Vos données ne sont utilisées que pour traiter votre demande d'inscription.
                </p>
              </form>
            )}
          </div>

          {/* Documents à télécharger */}
          <aside className="space-y-4">
            <div className="card p-6">
              <h3 className="font-heading text-base font-semibold text-brand-purple-900">
                Documents à télécharger
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Pour finaliser votre inscription, vous pouvez remplir la fiche et le questionnaire de santé.
              </p>
              <div className="mt-4 space-y-3">
                <a
                  href={ficheInscriptionUrl}
                  download="Fiche_Inscription.pdf"
                  className="flex items-center gap-3 rounded-xl bg-brand-purple-50 p-4 text-sm font-medium text-brand-purple-800 transition-colors hover:bg-brand-purple-100"
                >
                  <FileText className="h-5 w-5" />
                  Fiche d'inscription (PDF)
                  <Download className="ml-auto h-4 w-4" />
                </a>
                <a
                  href={questionnaireSanteUrl}
                  download="Questionnaire_Sante.pdf"
                  className="flex items-center gap-3 rounded-xl bg-brand-green-50 p-4 text-sm font-medium text-brand-green-800 transition-colors hover:bg-brand-green-100"
                >
                  <FileText className="h-5 w-5" />
                  Questionnaire de santé (PDF)
                  <Download className="ml-auto h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-heading text-base font-semibold text-brand-purple-900">Besoin d'aide ?</h3>
              <p className="mt-2 text-sm text-gray-500">
                Une question sur l'inscription ? Contactez-nous directement :
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                <li>Gisèle : 06 98 09 99 77</li>
                <li>Marie-Thérèse : 06 01 98 63 88</li>
              </ul>
            </div>
          </aside>
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

// Sélecteur multiple d'activités : liste déroulante à puces cliquables, avec
// les activités choisies affichées en dessous sous forme de badges verts
// (croix pour retirer un choix).
function ActivityMultiSelect({
  selected,
  onChange,
  error,
}: {
  selected: string[];
  onChange: (next: string[]) => void;
  error?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function toggle(name: string) {
    if (selected.includes(name)) {
      onChange(selected.filter((n) => n !== name));
    } else {
      onChange([...selected, name]);
    }
  }

  function remove(name: string) {
    onChange(selected.filter((n) => n !== name));
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Activités souhaitées <span className="text-brand-purple-500">*</span>
      </label>
      <p className="mt-0.5 text-xs text-gray-400">Vous pouvez sélectionner plusieurs activités.</p>

      <div className="relative mt-1.5" ref={containerRef}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={`flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3 text-left text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple-100 ${
            error ? 'border-red-300' : 'border-gray-200 focus:border-brand-purple-400'
          }`}
        >
          <span className={selected.length === 0 ? 'text-gray-400' : 'text-gray-800'}>
            {selected.length === 0
              ? 'Choisissez une ou plusieurs activités…'
              : `${selected.length} activité${selected.length > 1 ? 's' : ''} sélectionnée${selected.length > 1 ? 's' : ''}`}
          </span>
          <ChevronDown className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>

        {open && (
          <ul
            role="listbox"
            aria-multiselectable="true"
            className="absolute z-10 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-gray-200 bg-white py-1 shadow-card"
          >
            {activities.map((a) => {
              const checked = selected.includes(a.name);
              return (
                <li key={a.slug}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={checked}
                    onClick={() => toggle(a.name)}
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-brand-purple-50"
                  >
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                        checked ? 'border-brand-green-500 bg-brand-green-500' : 'border-gray-300 bg-white'
                      }`}
                    >
                      {checked && <Check className="h-3 w-3 text-white" />}
                    </span>
                    {a.name}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {error && (
        <p className="mt-1.5 text-xs text-red-600">Choisissez au moins une activité.</p>
      )}

      {selected.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {selected.map((name) => (
            <span
              key={name}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-100 px-3 py-1 text-xs font-medium text-brand-green-800"
            >
              {name}
              <button
                type="button"
                onClick={() => remove(name)}
                aria-label={`Retirer ${name}`}
                className="rounded-full p-0.5 hover:bg-brand-green-200"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
