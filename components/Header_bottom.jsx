import React from "react";
import Link from "next/link";
import Image from "next/image";
import beach1 from "../public/images/sea3.jpg";

export default function Header_bottom() {
  return (
    <div
      id="aboutus"
      className="relative flex  flex-col-reverse bg-gray-100 py-16 lg:pt-0 lg:flex-col lg:pb-0"
    >
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        {/* -------------------------------------------- */}

        <Image src={beach1} alt="beach" width={1000} />

        {/* -------------------------------------------- */}
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-2.5	 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:leading-tight">
            VOYAGO, votre partenaire pour des voyages sur mesure
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            VOYAGO est une agence de voyage qui offre des expériences de voyage
            uniques et personnalisées. Nous nous spécialisons dans la
            planification de voyages sur mesure pour les individus, les groupes
            et les entreprises. Avec notre expertise en matière de destinations,
            d'hébergements et de modes de transport, nous créons des itinéraires
            qui répondent aux besoins et aux souhaits de nos clients. Nous
            sommes déterminés à offrir un service à la clientèle exceptionnel
            pour que chaque voyage soit mémorable. .
          </p>
          <div className="flex items-center">
            <Link
              href="/whyus"
              className=" inline-flex bg-red-500 items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Why VOYAGO?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
