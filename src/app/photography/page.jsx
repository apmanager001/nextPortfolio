import React from "react";
import PhotoMain from "./comp/photoMain";
import { Camera, Image, GalleryHorizontalEnd } from "lucide-react";

export const metadata = {
  title: "Photography",
  description:
    "Explore my photography portfolio featuring travel photos from Thailand, Cambodia, and local adventures in Cheboygan. Capturing moments from around the world.",
  keywords: [
    "Photography",
    "Travel Photography",
    "Photo Gallery",
    "Thailand Photography",
    "Cambodia Photography",
    "Cheboygan Photography",
    "Travel Photos",
    "Photo Portfolio",
    "Landscape Photography",
  ],
  openGraph: {
    title: "Photography Portfolio | Robert Foley",
    description:
      "Explore my photography portfolio featuring travel photos from Thailand, Cambodia, and local adventures in Cheboygan. Capturing moments from around the world.",
    url: "https://robertfoley.dev/photography",
    images: [
      {
        url: "/photos/1.jpg",
        width: 1200,
        height: 630,
        alt: "Robert Foley Photography Portfolio - Travel Photos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography Portfolio | Robert Foley",
    description:
      "Explore my photography portfolio featuring travel photos from Thailand, Cambodia, and local adventures.",
    images: ["/photos/1.jpg"],
  },
  alternates: {
    canonical: "https://robertfoley.dev/photography",
  },
};

const Photography = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* Hero Section */}
      <div className="hero min-h-[40vh] bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <div className="flex justify-center mb-6">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-24">
                  <span className="text-3xl">
                    <Camera className="w-12 h-12" />
                  </span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Photography Portfolio
            </h1>
            <p className="py-6 text-lg opacity-80">
              Capturing moments from my travels and adventures around the world
            </p>
            <div className="flex justify-center gap-4">
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <Image className="w-6 h-6" />
                  </div>
                  <div className="stat-title">Collections</div>
                  <div className="stat-value text-primary">3</div>
                  <div className="stat-desc">Locations</div>
                </div>
              </div>
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <GalleryHorizontalEnd className="w-6 h-6" />
                  </div>
                  <div className="stat-title">Photos</div>
                  <div className="stat-value text-secondary">50+</div>
                  <div className="stat-desc">Captured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <GalleryHorizontalEnd className="w-8 h-8 text-primary" />
            Photo Collections
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Explore my photography from different locations and experiences
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body">
            <PhotoMain />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
