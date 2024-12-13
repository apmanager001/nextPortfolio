import React from "react";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <div className="flex flex-col my-4">
      <div className="flex flex-wrap justify-center py-10 gap-6 max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-2 w-72 sm:w-1/4">
          <Link href="https://quiltedchronicles.org" target="_blank">
            <h2 className="text-center text-white text-xl">
              Quilted Chronicles
            </h2>
            <img
              src="/projects/adventure.jpg"
              className="h-32 border border-x-gray-600 border-y-gray-600 hover:border-white my-2"
              alt="project image"
            />
            <div className="w-full flex flex-col gap-2 px-2">
              <div className="flex gap-2 flex-wrap justify-center">
                <div className="badge badge-primary">React</div>
                <div className="badge badge-primary">Mongo DB</div>
                <div className="badge badge-primary">Express</div>
                <div className="badge badge-primary">Node</div>
              </div>
              <div className="text-sm text-gray-500 ">
                This project was a group effort. I worked on the frontend and
                someone else worked on backend. This project gave me experience
                working and communicating with someone else. It was important to
                communicate what data was needed from backend for the site to
                work.
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-2 w-72 sm:w-1/4">
          <Link href="https://mytripmaps200.netlify.app/" target="_blank">
            <h2 className="text-center text-white text-xl">My Trip Map</h2>
            <img
              src="/projects/tripmap.jpg"
              className="h-32 border border-x-gray-600 border-y-gray-600 hover:border-white my-2"
              alt="project image"
            />
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="badge badge-primary">React</div>
              <div className="badge badge-primary">Mongo DB</div>
              <div className="badge badge-primary">Express</div>
              <div className="badge badge-primary">Map Leaflet</div>
            </div>
            <div className="text-sm text-gray-500 ">
              This project was great learning how map leaflets work. The idea of
              the site is users can uplaod photos and it uses metadata to find
              the location and pin that location on the map. I also added using
              an API to find the top 10 closest Points of interest add it on the
              map.
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-2 w-72 sm:w-1/4">
          <Link href="https://lmtreasuretrove.com" target="_blank">
            <h2 className="text-center text-white text-xl">
              LM Treasure Trove
            </h2>
            <img
              src="/projects/lmtreasure.jpg"
              className="h-32 border border-x-gray-600 border-y-gray-600 hover:border-white my-2"
              alt="project image"
            />
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="badge badge-primary">React</div>
              <div className="badge badge-primary">Mongo DB</div>
              <div className="badge badge-primary">Express</div>
              <div className="badge badge-primary">Stripe API</div>
            </div>
            <div className="text-sm text-gray-500 ">
              This project was built specific for a client and their currently
              ran business. They needed a working cart that adds items. When the
              client is ready to checkout the payment is processed through
              Stripe. Fully functional Store.
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-2 w-72 sm:w-1/4">
          <Link href="https://www.coupgroup.com" target="_blank">
            <h2 className="text-center text-white text-xl">Coup Group</h2>
            <img
              src="/projects/coup.jpg"
              className="h-32 border border-x-gray-600 border-y-gray-600 hover:border-white my-2"
              alt="project image"
            />
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="badge badge-primary">React</div>
              <div className="badge badge-primary">Mongo DB</div>
              <div className="badge badge-primary">Express</div>
              <div className="badge badge-primary">Node</div>
            </div>
            <div className="text-sm text-gray-500 ">
              This project was built for a client and changed to a SAAS. I had
              close communication with the client on what was needed to help
              manage their clients. Specifically, what information needs to be
              stored and explaing how secure their clients data is.
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-2 w-72 sm:w-1/4">
          <Link href="https://habiting.netlify.app/" target="_blank">
            <h2 className="text-center text-white text-xl">Habiting</h2>
            <img
              src="/projects/habiting.jpg"
              className="h-32 border border-x-gray-600 border-y-gray-600 hover:border-white my-2"
              alt="project image"
            />
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="badge badge-primary">React</div>
              <div className="badge badge-primary">Mongo DB</div>
              <div className="badge badge-primary">Express</div>
              <div className="badge badge-primary">Node</div>
            </div>
            <div className="text-sm text-gray-500 ">
              This project was a passion project for me. I wanted to build a
              project that allowed me to track habits that I want to build. It
              allows users to focus on a few core habits to build that muscle to
              continue consistancy.
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
