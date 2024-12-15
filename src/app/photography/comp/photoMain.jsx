'use client'
import React, { useState } from "react";
import Cheboygan from "./cheboygan";
import Thailand from "./thailand";
import Cambodia from "./cambodia";

const PhotoMain = () => {
    const [visibleComponent, setVisibleComponent] = useState("Cheboygan");
    const [activeTab, setActiveTab] = useState("Cheboygan");

    const handleContentChange = (component) => {
      setVisibleComponent(component);
      setActiveTab(component);
    };
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div role="tablist" className="tabs tabs-boxed flex justify-center mt-10">
        <>
          <button
            role="tab"
            className={`tab ${activeTab === "Cheboygan" ? "tab-active" : ""}`}
            onClick={() => handleContentChange("Cheboygan")}
          >
            Cheboygan
          </button>
          <button
            role="tab"
            className={`tab ${activeTab === "Thailand" ? "tab-active" : ""}`}
            onClick={() => handleContentChange("Thailand")}
          >
            Thailand
          </button>
          <button
            role="tab"
            className={`tab ${activeTab === "Cambodia" ? "tab-active" : ""}`}
            onClick={() => handleContentChange("Cambodia")}
          >
            Cambodia
          </button>
        </>
      </div>
      <div className="min-h-screen-minus-75 w-full flex justify-center">
        {visibleComponent === "Cheboygan" && <Cheboygan />}
        {visibleComponent === "Thailand" && <Thailand />}
        {visibleComponent === "Cambodia" && <Cambodia />}
      </div>
    </div>
  );
};

export default PhotoMain;
