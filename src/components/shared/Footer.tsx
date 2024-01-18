import React from "react";
import { FaFacebook } from 'react-icons/fa'; // Import the Facebook icon from a popular icon library like react-icons

const Footer = () => {
  return (
    <section className="relative bg-black dark:bg-gray-900 text-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 relative z-10">
          {}
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            DU RINGER, VI BRINGER.
          </h1>

<h5 className="max-w-2xl mb-4 text-lg font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
    Tlf: 902 82 011 <small className="text-funny-font text-sm">(The man himself)</small>
</h5>

 

    <a href="https://www.facebook.com/profile.php?id=100093964800494&locale=nb_NO" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
        Høitomt Service <FaFacebook className="ml-2 inline-block h-6 w-6" /> {}
    </a>

<br />
<br />
          
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
    🛫✨ Velkommen ombord hos Høitomt Service! Fullstack programvareutvikler Siggen i cockpiten her, og vi er klare for å utvikle en nettside for en spennende reise. Med guttas ekspertise innenfor Reparasjoner & Vedlikehold, Industri, Landbruk, Anlegg og Leiekjøring, er Høitomt gutta klare for alt! Sikkerhetsbeltene er festet, og vi lover å levere topp service og pålitelighet på hvert ENESTE stopp.
</p>

<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
    🔩 Utforsk våre Mekaniske Tjenester – presisjon, ekspertise og dedikasjon er vår drivkraft. Fra Reparasjoner & Vedlikehold til Industri, Landbruk og Anlegg.
</p>

<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
    🚜 Landbruk, Anlegg og Leiekjøring er våre spesialiteter. Vi sår vekst, bygger fremtiden og tilbyr det du trenger når du trenger det.
</p>

<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
✨ Takk for at du valgte Høitomt Service.</p>

<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
   Hold fast, for FrognerDevelopmentApartments // <small>Avdeling - Jesnes Design </small> , med fullstack developer Siggen i førersete, jobber han fortløpende for å levere kvalitet og innovative løsninger for Høitomt gutta 🚀🔧✈️ Taræ ei ventebolle a!
</p>

          <a
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Høitomt Service
            <svg
              className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 transform hover:scale-110"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="/Kontakt"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Kontakt
          </a>
        </div>
        <div className="absolute inset-0 z-0 lg:mt-0 lg:col-span-5 lg:flex">
          {/* Video element with Tailwind classes */}
          <video
            className="w-full h-full object-cover brightness-150"
            autoPlay
            loop
            muted
            playsInline
          >
            {/* Replace 'your-video.mp4' with the actual video file path */}
            <source src="your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Footer;
