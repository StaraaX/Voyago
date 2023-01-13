import Link from "next/link";
import { attributes } from "../content/contactus.md";
import Image from "next/image";
import image from "../public/images/logo.png";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import { GMap } from "primereact/gmap";
export default function Footer() {
  let { adress, phone, email } = attributes;

  const options = {
    center: { lat: 36.801321376311634, lng: 3.0426153423289035 },
    zoom: 15,
    mapTypeId: "hybrid",
    labels: true,
  };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBCf6EVyDj9192Ovx7864CAwdmA3CtJXr8",
  });
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-2">
        <div className="col-auto">
          <Link href="/" className="inline-flex items-center">
            <Image src={image} alt="alt" width={80} />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              VOYAGO
            </span>
          </Link>
          <hr />
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Voyago est une agence de voyage leader dans l'organisation de
              voyages personnalisés pour des destinations à travers le monde.
              Nous sommes spécialisés dans les domaines suivants: les voyages de
              luxe, les voyages d'affaires, les voyages de groupe, les voyages
              de noces et les voyages de vacances en famille. Nous proposons
              également un service personnalisé pour la planification de voyages
              sur mesure, adaptés aux besoins et aux budgets de nos clients.
              Notre entreprise a pour objectif de fournir des services de voyage
              de haute qualité à des prix compétitifs. Nous mettons tout en
              œuvre pour améliorer sans cesse nos services de voyage en vue
              d'atteindre la satisfaction optimale de nos clients.
            </p>
          </div>
        </div>
        <div className="col-auto space-y-2 text-sm flex flex-col" id="contacts">
          <div>
            <div>
              <p className="text-base font-bold tracking-wide text-gray-900">
                Contacts:
              </p>
              <div className="flex">
                <p className="mr-1 text-gray-800">Phone:</p>

                {phone}
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-800">Email:</p>
                <Link
                  href="mailto:info@lorem.mail"
                  aria-label="Our email"
                  title="Our email"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  {email}
                </Link>
              </div>

              <div className="flex">
                <p className="mr-1 text-gray-800">Address:</p>
                <Link
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our address"
                  title="Our address"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  {adress}
                </Link>
              </div>
            </div>
          </div>
          <hr />

          <GMap
            options={options}
            style={{
              width: "100%",
              minHeight: "320px",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright {new Date().getFullYear()}
          <strong> Voyago</strong>. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row text-sm">
          <li>F.A.Q</li>
          <li>Privacy Policy</li>
          <li>Terms &amp; Conditions</li>
        </ul>
      </div>
    </div>
  );
}
