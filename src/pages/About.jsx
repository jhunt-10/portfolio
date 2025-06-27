import React, { useState, useEffect, useRef } from 'react';

const text = "Hi, I am James. I am a recent graduate of Duke University, where I earned a B.S. with a double major in Mathematics and Computer Science. My academic and project work has been centered at the intersection of machine learning, software engineering and quantitative finance. I love applying these skills to challenging problems, whether it's building automated trading systems or architecting data-driven web applications. I am fascinated by math and its applications, I love to play and listen to music, I am an athlete at heart, and if I could pursue anything just for fun, it would be cooking. I have a passion for learning languages and I believe History is the most underappreciated subject. If you wish to learn more about me, feel free to reach out below!"

const About = React.forwardRef((props, ref) => {
  const [spotlightY, setSpotlightY] = useState(0); // Vertical position of the spotlight
  const spotlightRadius = 300; // Increased spotlight radius to match the visual size in your screenshot

  // Define the size of the circular text container. This will be the area the text fills.
  const circleContainerSize = spotlightRadius * 2; // e.g., 600px diameter for text

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { scrollTop, clientHeight, scrollHeight } = ref.current;
        const scrollableHeight = scrollHeight - clientHeight;
        let scrollProgress = 0;
        if (scrollableHeight > 0) {
            scrollProgress = scrollTop / scrollableHeight;
        }
        
        // Map scroll progress to a vertical position within the section
        // The spotlight should move from the top of the visible area to the bottom
        // We want spotlightY to be from 0% (top) to 100% (bottom) of the container's height
        // Convert percentage to pixels relative to the container height
        setSpotlightY(scrollProgress * clientHeight);
      }
    };

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      // Initialize spotlight position on mount/render
      handleScroll();
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [ref]); // Depend on ref to ensure listener is set up correctly

  return (
    <section 
      ref={ref} 
      id="about" 
      className="min-h-screen flex items-center justify-center bg-slate-800 text-white relative overflow-hidden"
      style={{ overflowY: 'scroll', scrollSnapAlign: 'start' }} // Make the section scrollable
    >
      {/* Container for the circular text and the spotlight effect */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: `${circleContainerSize}px`,
          height: `${circleContainerSize}px`,
          borderRadius: '50%', // Makes this div a circle
          overflow: 'hidden', // Ensures content stays within the circle boundaries
          backgroundColor: 'transparent',
        }}
      >
        {/* The actual text content */}
        <div 
          className="absolute inset-0 p-16 flex items-center justify-center" // Adjust padding to control text flow
          style={{
            // This div acts as the actual content area for the text.
            // We use padding to visually constrain the text within the circle.
            // The text itself will wrap naturally within this padded container.
          }}
        >
          <p className="text-white font-serif text-lg md:text-xl lg:text-2xl leading-relaxed text-justify">
            {text}
          </p>
        </div>

        {/* Spotlight overlay (covers everything except the spotlighted area) */}
        <div
          className="absolute inset-0 bg-slate-800 transition-all duration-75 ease-out"
          style={{
            WebkitMaskImage: `radial-gradient(circle at 50% ${spotlightY}px, black 0%, black ${spotlightRadius}px, transparent ${spotlightRadius + 80}px)`,
            maskImage: `radial-gradient(circle at 50% ${spotlightY}px, black 0%, black ${spotlightRadius}px, transparent ${spotlightRadius + 80}px)`,
            filter: 'blur(5px)', // Increased blur for stronger effect
            // Optional: If you want a softer shadow/darkness, use rgba for bg-color here.
            // backgroundColor: 'rgba(30, 41, 59, 0.9)', // Adjust opacity for desired darkness
          }}
        ></div>
      </div>
    </section>
  );
});

export default About;