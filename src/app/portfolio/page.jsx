import React from 'react'
import ProjectSection from './comp/projects'
import Frameworks from './comp/frameworks'

const Portfolio = () => {
  return (
    <div>
      <div className="text-2xl text-center mt-4">Projects</div>
      <ProjectSection />
      <div className="text-2xl text-center mt-4">FrameWorks I Use</div>
      <Frameworks />
    </div>
  );
}

export default Portfolio