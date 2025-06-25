import React from 'react';

const Home = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* Placeholder for the background logo from your sketch */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-96 h-96 border-4 border-dashed border-gray-400 rounded-full"></div>
        </div>
        <h1 className="text-7xl md:text-9xl font-extrabold text-slate-800 relative">
          James Hunt
        </h1>
      </div>
    </section>
  );
});

export default Home;