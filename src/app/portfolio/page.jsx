import React from "react";
import ProjectSection from "./comp/projects";
import Frameworks from "./comp/frameworks";
import { Code2, Briefcase, Award, BriefcaseBusiness } from "lucide-react";
import Timeline from "./comp/timeline";

export const metadata = {
  title: "Portfolio",
  description:
    "Explore my portfolio of full-stack development projects. From React applications to NPM packages, see my work with technologies like Next.js, MongoDB, Express, and more.",
  keywords: [
    "Portfolio",
    "Projects",
    "React Projects",
    "Next.js Projects",
    "Full Stack Projects",
    "Web Development Portfolio",
    "JavaScript Projects",
    "MongoDB Projects",
    "Express Projects",
  ],
  openGraph: {
    title: "Portfolio | Robert Foley - Full Stack Developer",
    description:
      "Explore my portfolio of full-stack development projects. From React applications to NPM packages, see my work with technologies like Next.js, MongoDB, Express, and more.",
    url: "https://robertfoley.dev/portfolio",
    images: [
      {
        url: "/projects/npm.jpg",
        width: 1200,
        height: 630,
        alt: "Robert Foley Portfolio - Full Stack Development Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Robert Foley - Full Stack Developer",
    description:
      "Explore my portfolio of full-stack development projects and see my work with React, Next.js, MongoDB, and more.",
    images: ["/projects/npm.jpg"],
  },
  alternates: {
    canonical: "https://robertfoley.dev/portfolio",
  },
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* Hero Section */}
      <div className="hero min-h-[40vh] bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <div className="flex justify-center mb-6">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-24 flex justify-center items-center">
                  <span className="text-3xl">
                    <Code2 className="w-12 h-12" />
                  </span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Portfolio
            </h1>
            <p className="py-6 text-lg opacity-80">
              Full-stack developer passionate about creating innovative web
              applications
            </p>
            <div className="flex justify-center gap-4">
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="stat-title">Projects</div>
                  <div className="stat-value text-primary">6+</div>
                </div>
              </div>
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="stat-title">Experience</div>
                  <div className="stat-value text-secondary">3+</div>
                  <div className="stat-desc">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            Skills & Technologies
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            A comprehensive toolkit of frameworks, languages, and services I use
            to bring ideas to life
          </p>
        </div>
        <Frameworks />
      </div>
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        <div className="text-center mb-12 md:mb-0">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <BriefcaseBusiness className="w-8 h-8 text-primary" />
            Resume
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            My professional journey, education, and accomplishments my career
          </p>
        </div>
        <Timeline />
      </div>
      {/* Projects Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-secondary" />
            Featured Projects
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            A collection of my best work, showcasing full-stack development
            skills and creative problem-solving
          </p>
        </div>
        <ProjectSection />
      </div>
    </div>
  );
};

export default Portfolio;
