<section className="w-full h-[80dvh] flex flex-col-reverse md:flex-row">
  <div className=" bg-white md:w-[40%] ml-8 w-full flex flex-col items-center md:items-start justify-center h-[90dvh]">
    <h1 className="mb-4  text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        CREATE
      </span>{" "}
      AND <br />
      SHARE YOUR
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        PHOTO STORIES.
      </span>{" "}
    </h1>
    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
      Photosnap is a platform for photographers and visual <br /> storytellers.
      We make it easy to share photos, tell <br /> stories and connect with
      others.
    </p>
    <button
      // href="#"
      className="inline-flex mt-10   py-3 px-5 text-base font-medium  text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
    >
      Get An Invite
      <svg
        aria-hidden="true"
        className="ml-2 -mr-1 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  </div>

  <Image
    //
    quality={100}
    loading="lazy"
    width={0}
    height={0}
    sizes="100vw"
    src="/assets/beautiful-stories.jpg"
    className="w-full md:w-[60%] h-[90dvh] object-cover object-center"
    alt="photosnap logo"
  />
</section>;
