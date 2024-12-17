import React from 'react'
import ProjectSection from './comp/projects'
import Frameworks from './comp/frameworks'

const Portfolio = () => {
  return (
    <div>
      <div className="text-2xl text-center mt-4">Experience</div>
      <Frameworks />
      <div className="text-2xl text-center mt-4">Projects</div>
      <ProjectSection />
      
    </div>
  );
}

export default Portfolio