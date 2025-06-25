import React from 'react';

const Projects = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="projects" className="min-h-screen flex items-center justify-center bg-gray-100">
      <h2 className="text-6xl font-bold">Projects Section</h2>
    </section>
  );
});

export default Projects;