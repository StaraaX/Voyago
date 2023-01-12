import React from "react";
import Link from "next/link";

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
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://acnews.blob.core.windows.net/imgnews/medium/NAZ_c3db44d493434dc48e7fb9ef520dc6fc.jpg"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:leading-tight">
            Société de fabrication et de transformation du caoutchouc
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Technoflex est une societe de production et transformation des
            elastomeres et polymetres pour application industrielle et technique
            .
          </p>
          <div className="flex items-center">
            <Link
              href="/whyus"
              className="inline-flex bg-red-500 items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Pourquoi nous ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
