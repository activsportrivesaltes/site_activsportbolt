import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, FileText, Download } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { activities } from '@/data/activities';
import ficheInscriptionUrl from '@/assets/documents/Fiche_Inscription.pdf';
import questionnaireSanteUrl from '@/assets/documents/Questionnaire_Sante.pdf';

// Formulaire d'inscription — interface uniquement.
// handleSubmit centralisé pour faciliter le futur branchement Supabase.
async function handleSubmit(_data: Record<string, string>): Promise<void> {
  // TODO: brancher à Supabase (table "registrations") plus tard.
  await new Promise((r) => setTimeout(r, 600));
}

type Status = 'idle' | 'submitting' | 'success';

export default function InscriptionPage() {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = String(value);
    });
    setStatus('submitting');
    try {
      await handleSubmit(data);
      setStatus('success');
      e.currentTarget.reset();
    } catch {
      setStatus('idle');
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
      Une question ? N'hésitez pas à nous envoyer un message, nous reviendrons vers vous rapidement.<br />Les inscriptions  auront lieu les mercredi 9 et jeudi 10 septembre de 15h à 19h à l'Ami&#8209;Club.
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
                  pour finaliser votre inscription.
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
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Prénom" name="firstName" required />
                  <Field label="Nom" name="lastName" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Téléphone" name="phone" type="tel" required />
                </div>

                <div className="mt-5">
                  <label htmlFor="activity" className="block text-sm font-medium text-gray-700">
                    Activité souhaitée
                  </label>
                  <select
                    id="activity"
                    name="activity"
                    required
                    defaultValue=""
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:border-brand-purple-400 focus:outline-none focus:ring-2 focus:ring-brand-purple-100"
                  >
                    <option value="" disabled>Choisissez une activité…</option>
                    {activities.map((a) => (
                      <option key={a.slug} value={a.name}>{a.name}</option>
                    ))}
                  </select>
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
