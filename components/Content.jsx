import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import sea2 from "../public/images/sea2.jpg";

export default function Content() {
  useEffect(() => {
    AOS.init(
      {
        debounceDelay: 50,

        once: true,
        mirror: true, //
      },
      []
    );
  });
  return (
    <div className="">
      <div className="aos-item max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2
          data-aos="fade-right"
          data-aos-mirror="true"
          data-aos-duration="1000"
          className="mt-10
          max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight
          text-gray-900 sm:text-4xl md:mx-auto"
        >
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="27df4f81-c854-45de-942a-fe90f7a300f9"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
            </svg>
            <span className="relative ">{"P"}</span>
          </span>
          {""}
          rocédés de planification de voyage utilisés par VOYAGO{" "}
        </h2>
      </div>
      <div
        data-aos="fade-left"
        data-aos-mirror="true"
        data-aos-duration="1500"
        className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 z-0 w-full h-full bg-gray-100 lg:w-3/4" />
        </div>

        <div className="relative">
          <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
            <div className="grid gap-12 row-gap-5 md:grid-cols-2">
              <div className="relative">
                <div className="relative">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400"></div>
                  <h6 className="mb-2 font-semibold leading-5">
                    VOYAGO, votre partenaire pour des voyages sur mesure{" "}
                  </h6>
                  <p className="text-sm text-gray-900">
                    VOYAGO est une agence de voyage qui se distingue par son
                    offre de voyages sur mesure pour les individus, les groupes
                    et les entreprises. Avec notre expertise en matière de
                    destinations, d'hébergements et de modes de transport, nous
                    créons des itinéraires qui répondent aux besoins et aux
                    souhaits de nos clients. Nous nous engageons à offrir un
                    service à la clientèle exceptionnel pour que chaque voyage
                    soit mémorable.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400"></div>
                <h6 className="mb-2 font-semibold leading-5">
                  Notre expertise en matière de planification de voyages
                </h6>
                <p className="text-sm text-gray-900">
                  Notre équipe de professionnels expérimentés est spécialisée
                  dans la planification de voyages d'affaires, de vacances en
                  famille, de lune de miel, de voyages de groupe et de voyages
                  d'aventure. Nous sommes en mesure de proposer des options de
                  voyage adaptées à tous les budgets et à tous les styles de
                  voyage.
                </p>
              </div>
            </div>

            <Image className="rounded-3xl	" src={sea2} />
          </div>
        </div>
      </div>
    </div>
  );
}
