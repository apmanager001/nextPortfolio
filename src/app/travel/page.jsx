import React from "react";
import Map from "./comp/map";
import { Globe, MapPin, Plane, Compass } from "lucide-react";

export const metadata = {
  title: "Travel",
  description:
    "Explore my travel adventures around the world. Interactive map showing 15+ countries visited across 4 continents, from France to Japan, Thailand to Cambodia.",
  keywords: [
    "Travel",
    "Travel Map",
    "World Travel",
    "Travel Adventures",
    "Countries Visited",
    "Travel Photography",
    "International Travel",
    "Travel Blog",
    "Travel Destinations",
  ],
  openGraph: {
    title: "Travel Adventures | Robert Foley",
    description:
      "Explore my travel adventures around the world. Interactive map showing 15+ countries visited across 4 continents, from France to Japan, Thailand to Cambodia.",
    url: "https://robertfoley.dev/travel",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "Robert Foley Travel Map - World Travel Adventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Adventures | Robert Foley",
    description:
      "Explore my travel adventures around the world with an interactive map showing 15+ countries visited.",
    images: ["/globe.svg"],
  },
  alternates: {
    canonical: "https://robertfoley.dev/travel",
  },
};

const Travel = () => {
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
                    <Globe className="w-12 h-12" />
                  </span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Travel Adventures
            </h1>
            <p className="py-6 text-lg opacity-80">
              Exploring the world one country at a time. Here's where my journey
              has taken me.
            </p>
            <div className="flex justify-center gap-4">
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="stat-title">Countries</div>
                  <div className="stat-value text-primary">15</div>
                  <div className="stat-desc">Visited</div>
                </div>
              </div>
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <Plane className="w-6 h-6" />
                  </div>
                  <div className="stat-title">Continents</div>
                  <div className="stat-value text-secondary">4</div>
                  <div className="stat-desc">Explored</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Compass className="w-8 h-8 text-primary" />
            Interactive Travel Map
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Hover over countries to see when I visited and explore my travel
            timeline
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body">
            <Map />
          </div>
        </div>
      </div>

      {/* Travel Stats */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-xl border border-base-300">
            <div className="card-body text-center">
              <div className="text-primary mb-2">
                <Plane className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="card-title justify-center">Longest Trip</h3>
              <p className="text-2xl font-bold text-primary">France</p>
              <p className="text-sm opacity-70">8 months living abroad</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl border border-base-300">
            <div className="card-body text-center">
              <div className="text-secondary mb-2">
                <MapPin className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="card-title justify-center">Most Recent</h3>
              <p className="text-2xl font-bold text-secondary">
                Japan & Taiwan
              </p>
              <p className="text-sm opacity-70">May-June 2024</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl border border-base-300">
            <div className="card-body text-center">
              <div className="text-accent mb-2">
                <Globe className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="card-title justify-center">Favorite Region</h3>
              <p className="text-2xl font-bold text-accent">Southeast Asia</p>
              <p className="text-sm opacity-70">Thailand & Cambodia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
