import React from "react";
import Link from "next/link";
import { ExternalLink, Github, Globe, Package } from "lucide-react";
import Script from "next/script";

const ProjectSection = () => {
  const projects = [
    {
      title: "NPM Package: simple-react-heatcalendar",
      href: "https://www.npmjs.com/package/simple-react-heatcalendar",
      imgSrc: "/projects/npm.jpg",
      type: "package",
      badges: [
        "React",
        "NPM",
        "Calendar",
        <img
          src="https://img.shields.io/npm/dw/simple-react-heatcalendar"
          alt="NPM Downloads"
        />,
      ],
      description:
        "This is a public npm package that allows users to use a full customizable calendar component. You can change the year and month and pass a value for which days to highlight on the calendar.",
    },
    {
      title: "Quilted Chronicles",
      href: "https://quiltedchronicles.org",
      imgSrc: "/projects/adventure.jpg",
      type: "website",
      badges: ["React", "Mongo DB", "Express", "Node"],
      description:
        "This project was a group effort. I worked on the frontend and someone else worked on backend. This project gave me experience working and communicating with someone else. It was important to communicate what data was needed from backend for the site to work.",
    },
    {
      title: "My Trip Map",
      href: "https://mytripmaps200.netlify.app/",
      imgSrc: "/projects/tripmap.jpg",
      type: "website",
      badges: ["React", "Mongo DB", "Express", "Map Leaflet"],
      description:
        "This project was great learning how map leaflets work. The idea of the site is users can upload photos and it uses metadata to find the location and pin that location on the map. I also added using an API to find the top 10 closest Points of interest add it on the map.",
    },
    {
      title: "LM Treasure Trove",
      href: "https://lmtreasuretrove.com",
      imgSrc: "/projects/lmtreasure.jpg",
      type: "ecommerce",
      badges: ["React", "Mongo DB", "Express", "Stripe API"],
      description:
        "This project was built specific for a client and their currently ran business. They needed a working cart that adds items. When the client is ready to checkout the payment is processed through Stripe. Fully functional Store.",
    },
    {
      title: "Coup Group",
      href: "https://www.coupgroup.com",
      imgSrc: "/projects/coup.jpg",
      type: "saas",
      badges: ["React", "Mongo DB", "Express", "Node"],
      description:
        "This project was built for a client and changed to a SAAS. I had close communication with the client on what was needed to help manage their clients. Specifically, what information needs to be stored and explaining how secure their clients data is.",
    },
    {
      title: "Habiting",
      href: "https://habiting.netlify.app/",
      imgSrc: "/projects/habiting.jpg",
      type: "app",
      badges: ["React", "Supabase", "Oauth"],
      description:
        "This project was a passion project for me. I wanted to build a project that allowed me to track habits that I want to build. It allows users to focus on a few core habits to build that muscle to continue consistency.",
    },
  ];

  const getProjectIcon = (type) => {
    switch (type) {
      case "package":
        return <Package className="w-5 h-5" />;
      case "ecommerce":
        return <Globe className="w-5 h-5" />;
      case "saas":
        return <Globe className="w-5 h-5" />;
      case "app":
        return <Globe className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  // Structured data for portfolio projects
  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio Projects",
    description:
      "A collection of full-stack development projects by Robert Foley",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.href,
        image: `https://robertfoley.dev${project.imgSrc}`,
        author: {
          "@type": "Person",
          name: "Robert Foley",
        },
        creator: {
          "@type": "Person",
          name: "Robert Foley",
        },
        dateCreated: "2023-01-01", // You can add actual dates
        keywords: project.badges
          .filter((badge) => typeof badge === "string")
          .join(", "),
        genre: project.type,
      },
    })),
  };

  return (
    <>
      <Script
        id="portfolio-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioStructuredData),
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-base-300 group"
          >
            <figure className="relative overflow-hidden">
              <img
                src={project.imgSrc}
                className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                alt={`${project.title} preview`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit
                </Link>
              </div>
            </figure>

            <div className="card-body">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {getProjectIcon(project.type)}
                  <h2 className="card-title text-lg leading-tight">
                    {project.title}
                  </h2>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.badges.map((badge, badgeIndex) =>
                  typeof badge === "string" ? (
                    <div
                      key={badgeIndex}
                      className="badge badge-primary badge-outline"
                    >
                      {badge}
                    </div>
                  ) : (
                    <div key={badgeIndex} className="badge badge-secondary">
                      {badge}
                    </div>
                  )
                )}
              </div>

              <p className="text-sm text-base-content/70 leading-relaxed">
                {project.description}
              </p>

              <div className="card-actions justify-end mt-4">
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
