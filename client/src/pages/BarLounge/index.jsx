// src/pages/BarLounge/index.jsx
import LinkList from './components/LinksList.jsx';
import StatsList from './components/StatsList.jsx';
import InfoList from './components/InfosList.jsx';
import DrinkMenu from './components/DrinkMenu.jsx';

import { IoCall } from 'react-icons/io5';

import PictureBar from '../../assets/img/PictureBar.webp';
import BgBarlounge from '../../assets/img/Bar-Lounge.webp';

export default function BarLounge() {
  return (
    <div className="bg-sky-50">
      <section className="relative h-full pb-12 lg:h-screen bg-zinc-900 sm:pt-32">
        <img
          alt="Picture Background Bar-lounge"
          src={BgBarlounge}
          loading="lazy"
          className="absolute z-0 inset-0 object-cover w-full h-full"
        />
        <div className="relative px-6 pt-35 md:pt-20 z-10 mx-auto max-w-7xl lg:px-12">
          <h1 className="text-4xl font-bold tracking-tight text-sky-50 sm:text-6xl">
            Découvrez notre Bar
          </h1>
          <p className="my-6 text-lg text-zinc-300">
            Que ce soit pour un apéritif décontracté ou une soirée festive,
            laissez-vous séduire par notre sélection de boissons.
          </p>
          <LinkList />
          <StatsList />
        </div>
      </section>

      <section className="relative mx-6 md:mx-0 py-24 overflow-hidden isolate sm:py-32 lg:overflow-visible lg:pl-12">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:pr-4" id="a-propos-bar-lounge">
            <p className="text-base font-semibold leading-7 text-sky-600">
              A propos du
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 font-kreon sm:text-4xl">
              BAR-LOUNGE
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-700">
              Prenez un verre, détendez-vous et laissez-vous emporter par
              l&apos;ambiance de notre lieu avec un grand “L”.
            </p>
          </div>{' '}
          <div className="lg:p-12 lg:-mt-12 lg:-ml-12 lg:sticky lg:top-20 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              loading="lazy"
              alt="Picture Bar"
              src={PictureBar}
              className="lg:w-[40rem] lg:max-w-none 2xl:w-[80rem] rounded-xl bg-zinc-900 shadow-xl ring-1 ring-zinc-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="lg:pr-4 max-w-xl text-base leading-7 text-zinc-700 lg:max-w-lg">
            <p>
              Luminescence est un lieu incontournable du Bassin d&apos;Arcachon,
              vous pourrez découvrir un lieu chaleureux avev un Open-space et un
              Rooftop situé au cœur de Gujan-Mestras.
            </p>
            <InfoList />
            <p className="mt-8">
              Notre bar dispose d&apos;une{' '}
              <a
                href="https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006155036"
                target="_blank"
                aria-label={'Lois de texte sur la License'}
                className="font-semibold font-kreon text-sky-600 underline lg:underline-none hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
              >
                license III
              </a>{' '}
              pour que vous puissiez vous détendre tout en modération.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-zinc-900 font-kreon">
              Vous êtes en groupe ? Pas de problème.
            </h2>
            <p className="mt-6">
              Appelez-nous ! Nous vous accueillerons avec plaisir pour passer un
              moment convivial autour de nos tables.
            </p>
          </div>
          <a
            href="tel:+33 6 46 84 93 52"
            target="_blank"
            aria-label="Appeler l'entreprise."
            className="flex flex-row   md:mt-0 justify-center items-center -mt-8 w-full md:w-52 text-center py-2.5 text-sm font-semibold text-white bg-sky-500 rounded-md hover:bg-sky-600"
          >
            Nous appeler
            <IoCall className="size-4 ml-4 text-sky-50" />
          </a>
        </div>
      </section>

      <section className="mx-6 lg:mx-12">
        <div className="lg:max-w-xl" id="la-carte-des-boissons">
          <p className="text-base font-semibold text-sky-600">La Carte des</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            BOISSONS
          </h2>
          <p className="mt-6 text-gray-700">
            Consultez et téléchargez notre carte pour choisir vos boissons
            préférées !
          </p>
        </div>

        <DrinkMenu />
      </section>
    </div>
  );
}
