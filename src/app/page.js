import Image from "next/image";
import Me from "./me/page";
import TopBlogs from "./homePage/topBlog";
import Newsletter from "./homePage/comp/newsletter";

export const metadata = {
  title: "Home",
  description:
    "Welcome to Robert Foley's portfolio. Full-stack developer passionate about creating innovative web applications. Explore my work, travel adventures, and photography.",
  keywords: [
    "Robert Foley",
    "Full Stack Developer",
    "Portfolio",
    "Web Development",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
  ],
  openGraph: {
    title: "Robert Foley - Full Stack Developer & Traveler",
    description:
      "Welcome to Robert Foley's portfolio. Full-stack developer passionate about creating innovative web applications. Explore my work, travel adventures, and photography.",
    url: "https://robertfoley.dev",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Robert Foley - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Foley - Full Stack Developer & Traveler",
    description:
      "Welcome to Robert Foley's portfolio. Full-stack developer passionate about creating innovative web applications.",
    images: ["/profile.jpg"],
  },
  alternates: {
    canonical: "https://robertfoley.dev",
  },
};

export default function Home() {
  return (
    <div className="">
      <Me />
      <Newsletter />
      <TopBlogs />
    </div>
  );
}
