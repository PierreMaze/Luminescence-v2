import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';

export default function GoogleMap() {
  return (
    <div className="relative w-full overflow-hidden bg-cover group bg-clip-border group">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d363386.112792384!2d-1.620140075683558!3d44.638857000172976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5499415bca91f7%3A0x1f53aae507216527!2sLUMINESCENCE!5e0!3m2!1sfr!2sfr!4v1738676498802!5m2!1sfr!2sfr"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <a
          href="https://www.google.fr/maps/place/LUMINESCENCE/@44.638864,-1.0605077,19z/data=!3m1!4b1!4m6!3m5!1s0xd5499415bca91f7:0x1f53aae507216527!8m2!3d44.638863!4d-1.059864!16s%2Fg%2F11y43t5xvv?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          label="Où nous trouver ?"
          rel={'noopener noreferrer'}
          aria-label={'Où nous trouver ?'}
          className={`inline-flex pointer-events-auto duration-300 ease-in-out delay-100 leading-7 py-2.5 px-2 lg:py-3 2xl:px-4 2xl:py-3.5 text-sm lg:text-base font-medium text-black bg-zinc-50 group-hover:bg-zinc-900 group-hover:text-white ring-2 outline-none ring-zinc-800 rounded-md text-center  `}
        >
          Ouvrir dans maps
          <HiMiniArrowTopRightOnSquare className="text-current size-5 ml-2 mt-1" />
        </a>
      </div>
    </div>
  );
}
