import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Projects = () => {
  return (
    <div className="projects">
      <TailSpin
        height="80"
        width="80"
        color="#ffffff"
        ariaLabel="loading"
      />
      <p className="coming-soon">Projects Coming Soon</p>
    </div>
  );
}

export default Projects;
