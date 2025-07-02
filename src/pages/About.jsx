import React, { useState, useEffect, useRef } from 'react';

const About = React.forwardRef((props, ref) => {
  const [spotlightY, setSpotlightY] = useState(0);
  const containerRef = useRef(null);
  const [spotlightRadius, setSpotlightRadius] = useState(0);

  useEffect(() => {
    const calculateRadius = () => {
      if (containerRef.current) {
        setSpotlightRadius(containerRef.current.offsetWidth / 2);
      }
    };

    calculateRadius();

    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
          return;
        }
        
        const newY = (window.innerHeight / 20) - rect.top;
        setSpotlightY(newY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateRadius, { passive: true });
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateRadius);
    };
  }, [ref]);

  const TextContent = () => (
    <div className="font-serif text-xl md:text-2xl text-center leading-loose">
      <p className="mb-10">Hi, I am James.</p>
      <p className="mb-10">
        I am a recent graduate of Duke University, where I earned a B.S. with a
        double major in Mathematics and Computer Science. My academic and project work has
        been centered at the intersection of machine learning, software engineering and
        quantitative finance.
      </p>
      <p className="mb-10">
        I am fascinated by math and its applications, I love to play and listen to music, I am an athlete at heart,
        and if I could pursue anything just for fun, it would be cooking. I have a passion for learning
        languages and I believe History is the most underappreciated subject.
      </p>
      <p>If you wish to learn more about me, feel free to reach out below!</p>
    </div>
  );

  return (
    <section 
      ref={ref}
      id="about" 
      className="min-h-screen flex items-center justify-center bg-slate-800 p-8"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div ref={containerRef} className="max-w-6xl mx-auto relative">
        <div className="text-slate-800">
          <TextContent />
        </div>

        <div 
          className="absolute top-0 left-0 w-full h-full text-white pointer-events-none"
          style={{
            WebkitMaskImage: `radial-gradient(circle at 50% ${spotlightY}px, black ${spotlightRadius}px, transparent ${spotlightRadius}px)`,
            maskImage: `radial-gradient(circle at 50% ${spotlightY}px, black ${spotlightRadius}px, transparent ${spotlightRadius}px)`,
          }}
        >
          <TextContent />
        </div>
      </div>
    </section>
  );
});

export default About;