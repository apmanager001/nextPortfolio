"use client";
import React, { useState } from "react";
import Cheboygan from "./cheboygan";
import Thailand from "./thailand";
import Cambodia from "./cambodia";
import { MapPin, Camera, ImageIcon } from "lucide-react";

const PhotoMain = () => {
  const [visibleComponent, setVisibleComponent] = useState("Cheboygan");
  const [activeTab, setActiveTab] = useState("Cheboygan");

  const handleContentChange = (component) => {
    setVisibleComponent(component);
    setActiveTab(component);
  };

  const locations = [
    {
      name: "Cheboygan",
      icon: <MapPin className="w-4 h-4" />,
      description: "Local adventures and nature photography",
    },
    {
      name: "Thailand",
      icon: <Camera className="w-4 h-4" />,
      description: "Southeast Asian culture and landscapes",
    },
    {
      name: "Cambodia",
      icon: <ImageIcon className="w-4 h-4" />,
      description: "Ancient temples and cultural heritage",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* Enhanced Tab Navigation */}
      <div className="w-full max-w-4xl mb-8">
        <div className="tabs tabs-boxed bg-base-200 p-2 flex justify-center">
          {locations.map((location) => (
            <button
              key={location.name}
              role="tab"
              className={`tab tab-lg flex items-center gap-2 transition-all duration-300 ${
                activeTab === location.name
                  ? "tab-active bg-primary text-primary-content shadow-lg"
                  : "hover:bg-base-300"
              }`}
              onClick={() => handleContentChange(location.name)}
            >
              {location.icon}
              <span className="font-medium">{location.name}</span>
            </button>
          ))}
        </div>

        {/* Location Description */}
        <div className="text-center mt-4">
          <p className="text-base-content/70 italic">
            {locations.find((loc) => loc.name === activeTab)?.description}
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="w-full max-w-6xl">
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body p-8">
            {visibleComponent === "Cheboygan" && <Cheboygan />}
            {visibleComponent === "Thailand" && <Thailand />}
            {visibleComponent === "Cambodia" && <Cambodia />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoMain;
