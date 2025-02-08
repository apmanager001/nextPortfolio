import React from "react";
import Link from "next/link";

const ProjectSection = () => {

  const projects = [
    {
      title: "NPM Package: simple-react-heatcalendar",
      href: "https://www.npmjs.com/package/simple-react-heatcalendar",
      imgSrc: "/projects/npm.jpg",
      badges: [
        "React",
        "NPM",
        "Calendar",
        <img
          src="https://img.shields.io/npm/dw/simple-react-heatcalendar"
          alt="NPM Downloads"
        />,
      ],
      description: "This is a public npm package that allows users to use a full customizable calendar component. You can change the year and month and pass a value for which days to highlight on the calendar.",
    },
    {
      title: "Quilted Chronicles",
      href: "https://quiltedchronicles.org",
      imgSrc: "/projects/adventure.jpg",
      badges: ["React", "Mongo DB", "Express", "Node"],
      description:
        "This project was a group effort. I worked on the frontend and someone else worked on backend. This project gave me experience working and communicating with someone else. It was important to communicate what data was needed from backend for the site to work.",
    },
    {
      title: "My Trip Map",
      href: "https://mytripmaps200.netlify.app/",
      imgSrc: "/projects/tripmap.jpg",
      badges: ["React", "Mongo DB", "Express", "Map Leaflet"],
      description:
        "This project was great learning how map leaflets work. The idea of the site is users can upload photos and it uses metadata to find the location and pin that location on the map. I also added using an API to find the top 10 closest Points of interest add it on the map.",
    },
    {
      title: "LM Treasure Trove",
      href: "https://lmtreasuretrove.com",
      imgSrc: "/projects/lmtreasure.jpg",
      badges: ["React", "Mongo DB", "Express", "Stripe API"],
      description:
        "This project was built specific for a client and their currently ran business. They needed a working cart that adds items. When the client is ready to checkout the payment is processed through Stripe. Fully functional Store.",
    },
    {
      title: "Coup Group",
      href: "https://www.coupgroup.com",
      imgSrc: "/projects/coup.jpg",
      badges: ["React", "Mongo DB", "Express", "Node"],
      description:
        "This project was built for a client and changed to a SAAS. I had close communication with the client on what was needed to help manage their clients. Specifically, what information needs to be stored and explaining how secure their clients data is.",
    },
    {
      title: "Habiting",
      href: "https://habiting.netlify.app/",
      imgSrc: "/projects/habiting.jpg",
      badges: ["React", "Supabase", "Oauth"],
      description:
        "This project was a passion project for me. I wanted to build a project that allowed me to track habits that I want to build. It allows users to focus on a few core habits to build that muscle to continue consistency.",
    },
  ];

  return (
    <div className="flex flex-col my-4">
      <div className="flex flex-wrap justify-center py-10 gap-8 max-w-screen-lg mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 w-3/4 md:w-80 border border-gray-600 hover:border-gray-400 rounded-2xl hover:shadow-2xl bg-neutral hover:bg-gradient-to-br from-neutral to-base-100 hover:scale-110 "
          >
            <Link
              href={project.href}
              target="_blank"
              className="flex flex-col items-center"
            >
              <div className="w-full">
                <img
                  src={project.imgSrc}
                  className="h-36 w-full border-b-2 border-gray-400 mb-2 rounded-t-2xl"
                  alt="project image"
                />
              </div>
              <div className="w-full flex flex-col gap-2 px-10 pb-2">
                <div className="flex gap-2 flex-wrap justify-center">
                  {project.badges.map((badge, index) =>
                    typeof badge === "string" ? (
                      <div key={index} className="badge badge-primary">
                        {" "}
                        {badge}{" "}
                      </div>
                    ) : (
                      <div key={index}> {badge} </div>
                    )
                  )}
                </div>
                <h2 className="text-center text-white text-xl">
                  {project.title}
                </h2>
                <div className="text-sm text-gray-500 ">
                  {project.description}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
