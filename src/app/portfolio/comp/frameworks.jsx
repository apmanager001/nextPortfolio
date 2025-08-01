import React from "react";
import Link from "next/link";
import {
  Code2,
  Database,
  Globe,
  Palette,
  Server,
  Shield,
  Cloud,
  Package,
  ExternalLink,
} from "lucide-react";

const Frameworks = () => {
  const skillCategories = [
    {
      title: "Frameworks",
      icon: <Code2 className="w-6 h-6" />,
      color: "primary",
      skills: [
        { name: "Vite React", icon: "⚡" },
        { name: "Next.JS React", icon: "▲" },
        { name: "Mongo DB", icon: "🍃" },
        { name: "Express", icon: "🚀" },
        { name: "OAuth", icon: "🔐" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Daisy UI", icon: "🌼" },
        { name: "Shadcn/ui", icon: "🎯" },
      ],
    },
    {
      title: "Languages",
      icon: <Palette className="w-6 h-6" />,
      color: "secondary",
      skills: [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "📜" },
        { name: "SQL", icon: "🗄️" },
      ],
    },
    {
      title: "Services",
      icon: <Cloud className="w-6 h-6" />,
      color: "accent",
      skills: [
        { name: "Stripe API", icon: "💳", link: "https://stripe.com/en-in/payments/checkout" },
        { name: "Supabase", icon: "🔥", link: "https://supabase.com/" },
        { name: "Amazon S3", icon: "☁️", link: "https://aws.amazon.com/s3/" },
        { name: "Heroku", icon: "🚀", link: "https://www.heroku.com/" },
        { name: "Cloudflare R2", icon: "☁️", link: "https://developers.cloudflare.com/r2/" },
      ],
    },
    {
      title: "Libraries",
      icon: <Package className="w-6 h-6" />,
      color: "info",
      skills: [
        {
          name: "Nivo Charts",
          icon: "📊",
          link: "https://www.npmjs.com/package/@nivo/line",
        },
        {
          name: "Leaflet",
          icon: "🗺️",
          link: "https://www.npmjs.com/package/leaflet",
        },
        { name: "Heroku", icon: "🚀", link: "https://www.heroku.com/" },
        { name: "Lucide React", icon: "🌐", link: "https://lucide.dev/icons/" },
        { name: "React Hot Toast", icon: "🍞", link: "https://www.npmjs.com/package/react-hot-toast" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skillCategories.map((category, index) => (
        <div
          key={index}
          className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-base-300"
        >
          <div className="card-body">
            <div className="flex items-center gap-3 mb-4">
              <div className={`text-${category.color}`}>{category.icon}</div>
              <h3 className="card-title text-lg">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  {skill.link ? (
                    <Link
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="badge badge-soft badge-primary hover:badge-accent transition-colors cursor-pointer group">
                        <span className="mr-1">{skill.icon}</span>
                        {skill.name}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Link>
                  ) : (
                    <div className="badge badge-soft badge-primary">
                      <span className="mr-1">{skill.icon}</span>
                      {skill.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Frameworks;
