import React, { startTransition } from "react";

const Timeline = () => {
  const resume = [
    {
      start: "August 2025",
      end: "Present",
      type: "Career",
      company: "Prepify",
      title: "Frontend Developer, Intern",
      description:
        "Sole frontend developer for Prepify’s AI-powered learning platform, connecting students with personalized study guides. Started the frontend structure and collaborated with backend and design teams to deliver a responsive, user-friendly interface.",
    },
    {
      start: "June 2025",
      end: null,
      type: "Education",
      company: "Codecademy",
      title: "Full Stack Engineer Certificate",
      description: null,
    },
    {
      start: "May 2015",
      end: "May 2022",
      type: "Career",
      company: "Rocket Mortgage",
      title: "Executive Mortgage Banker",
      description:
        "Consistently exceeded sales goals through strong communication and quick client responses. Maintained high client satisfaction and retention due to meticulous attention to detail in all communication. Resolved financing issue by applying problem-solving skills to meet regulatory guidelines.",
    },
    {
      start: "November 2013",
      end: "February 2015",
      type: "Career",
      company: "Discover Financial Services",
      title: "Sr. Account Manager",
      description:
        "Proactively advised clients on various financial products and services, leveraging in-depth knowledge of Discover's offerings. Cultivated strong client relationships through clear and concise communication, resulting in increased product adoption and satisfaction.",
    },
    {
      start: "January 2009",
      end: "December 2010",
      type: "Education",
      company: "Lee University, Cleveland, TN",
      title: "B.S. Business Degree",
      description: null,
    },
    {
      start: "August 2005",
      end: "December 2007",
      type: "Education",
      company: "Henry Ford College, Dearborn, MI",
      title: "Business Administration",
      description: null,
    },
  ];

  return (
    <div className="flex justify-center">
      <ul className="timeline timeline-vertical lg:timeline-horizontal max-w-4xl">
        {resume.map((item, index) => (
          <li key={index} className="max-w-40">
            {index > 0 && <hr />}
            <div className="timeline-start">
              <div className="timeline-box text-center p-4 bg-base-200 rounded-lg shadow-md">
                <p className="font-semibold text-sm">
                  {item.start} {item.end ? `- ${item.end}` : ""}
                </p>
              </div>
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end">
              <div className="timeline-box text-center p-4 bg-base-100 rounded-lg shadow-md">
                <h3 className="font-bold text-accent mb-2">{item.type}</h3>
                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                <p className="opacity-70 text-sm">{item.company}</p>
                {/* {item.description && (
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip={item.description}
                  >
                    <button className="btn btn-ghost btn-xs mt-2">
                      Details
                    </button>
                  </div>
                )} */}
              </div>
            </div>
            {index < resume.length - 1 && <hr />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
