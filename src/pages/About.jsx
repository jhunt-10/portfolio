import React from 'react';

const About = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" className="min-h-screen flex items-center justify-center bg-slate-800 text-white">
      <h2 className="text-6xl font-bold">About Section</h2>
    </section>
  );
});

export default About;