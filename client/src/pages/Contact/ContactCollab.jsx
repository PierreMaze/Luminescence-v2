import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import ContactCollabForm from '../../components/form/ContactCollabForm.jsx';
import SocialNetwork from '../../features/social-networks/LinkForm.jsx';

import { MdAttachEmail, MdLocationPin, MdPhoneInTalk } from 'react-icons/md';

import { useContactForm } from '../../hooks/useContactForm.jsx';
import ContactPicture from '../../assets/img/ContactPicture.svg';

export default function ContactCollab() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const environment = import.meta.env.VITE_ENV;
  const keyCaptcha = import.meta.env.VITE_SITE_KEY;
  const fakeKeyCaptcha = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

  const initialState = {
    name: '',
    email: '',
    phone: '',
    category: 'atelier',
    message: '',
    conditionsAccepted: false,
  };

  // Définition des champs sous forme de tableau
  const contactFields = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Nom / Entreprise',
      autoComplete: 'name',
      label: 'Nom / Entreprise',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'johndoe@example.com',
      autoComplete: 'email',
      label: 'Email',
    },
    {
      name: 'phone',
      type: 'text',
      placeholder: '06 06 06 06 06',
      autoComplete: 'tel',
      label: 'Téléphone',
    },
    {
      name: 'message',
      type: 'textarea',
      placeholder: 'Dîtes-nous en plus...',
      autoComplete: 'off',
      label: 'Message',
    },
  ];

  const {
    formData,
    handleChange,
    handleSubmit,
    message,
    recaptchaRef,
    isLoading,
  } = useContactForm(initialState);

  return (
    <section className="min-h-screen bg-sky-50">
      <div className="container px-8 lg:px-16 py-10 mx-auto">
        <div className="mt-24 lg:mt-32 lg:flex lg:items-start lg:justify-between">
          {/* Formulaire */}
          <div className="lg:w-1/2 lg:pr-10">
            <h1 className="text-2xl font-semibold font-kreon text-zinc-800 lg:text-3xl">
              Comment nous contacter ?
            </h1>
            <p className="mt-4 text-zinc-500">
              Pour toutes questions, n&apos;hésitez pas à nous écrire. Nous vous
              contacterons dans les plus brefs délais.
            </p>
            <p className="mt-4 text-zinc-500">
              Pour un devis personnalisé,{' '}
              <Link
                className="duration-300 ease-linear delay-75 hover:underline hover:text-sky-600 hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600 text-sky-600"
                to="/location/#votre-devis-personnalisé"
              >
                cliquez ici
              </Link>
              .
            </p>

            <ContactCollabForm
              fields={contactFields}
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
              recaptchaRef={recaptchaRef}
              siteKey={
                environment === 'production' ? keyCaptcha : fakeKeyCaptcha
              }
              message={message}
              isLoading={isLoading}
            />
          </div>

          {/* Détails de contact et image */}
          <div className="lg:w-1/2 lg:pl-10">
            <div className="mt-6">
              <img
                className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
                src={ContactPicture}
                alt="Image de contact"
              />
            </div>
            {/* <!-- Contact details container --> */}
            <div className="mt-6 space-y-8 md:mt-8 px-2 lg:px-3">
              {/* <!-- Adresse container --> */}
              <p className="flex items-start -mx-2 group">
                <MdLocationPin
                  aria-hidden="true"
                  className="flex-none w-5 h-5 mt-1 text-zinc-800 group-hover:text-sky-600"
                />
                <a
                  href="https://www.google.fr/maps/place/LUMINESCENCE/@44.638864,-1.0605077,19z/data=!3m1!4b1!4m6!3m5!1s0xd5499415bca91f7:0x1f53aae507216527!8m2!3d44.638863!4d-1.059864!16s%2Fg%2F11y43t5xvv?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center mx-2 cursor-pointer text-zinc-700 w-72 text-wrap md:justify-start group-hover:underline group-hover:underline-offset-2 group-hover:decoration-2 group-hover:decoration-sky-600"
                >
                  108 Place de la Claire, 2 ème étage (Ascenseur), 33470
                  Gujan-Mestras
                </a>
              </p>
              {/* <!-- Phone container --> */}
              <p className="flex items-start -mx-2 group">
                <MdPhoneInTalk
                  aria-hidden="true"
                  className="flex-none w-5 h-5 mt-1 text-zinc-800 group-hover:text-sky-600"
                />

                <a
                  href="tel:+33 6 46 84 93 52"
                  rel="noreferrer"
                  className="flex mx-2 truncate cursor-pointer text-zinc-700 w-72 tabular-nums md:justify-start group-hover:underline group-hover:underline-offset-2 group-hover:decoration-2 group-hover:decoration-sky-600"
                >
                  (+33) 06 46 84 93 52
                </a>
              </p>
              {/* <!-- Email container --> */}
              <p className="flex items-start -mx-2  group">
                <MdAttachEmail
                  aria-hidden="true"
                  className="flex-none w-5 h-5 mt-1 text-zinc-800 group-hover:text-sky-600"
                />

                <a
                  href="mailto:contact@luminescence33.com"
                  rel="noreferrer"
                  className="flex mx-2 mb-4 truncate cursor-pointer text-zinc-700 w-72 md:justify-start group-hover:underline group-hover:underline-offset-2 group-hover:decoration-2 group-hover:decoration-sky-600"
                >
                  contact@luminescence33.com
                </a>
              </p>
            </div>
            <div className="mt-4">
              <SocialNetwork />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
