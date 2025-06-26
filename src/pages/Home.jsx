import React, { useState, useEffect, useRef } from 'react';

const Home = React.forwardRef(({globalMouseX, globalMouseY}, ref) => {
  // State to manage the horizontal translation (offset) for "James" and "Hunt"
  const [jamesOffset, setJamesOffset] = useState(0);
  const [huntOffset, setHuntOffset] = useState(0);
  const [shineYPercent, setShineYPercent] = useState(50);
  const [shineXPercent, setShineXPercent] = useState(50);

  // Ref for the container element that will capture mouse movement events
//   const containerRef = useRef(null);

  // Define the maximum amount (in pixels) each word can slide horizontally.
  // This value helps control the "boundary" aspect, ensuring they don't slide
  // too far or completely overlap in an undesired way.
  // Adjust this value to control the slide intensity and how close/far the words get.
  const maxSlideOffset = 100;

  useEffect(() => {
    // Function to handle mouse movement
    if (ref.current) {
        const sectionRect = ref.current.getBoundingClientRect();
        const mouseX = globalMouseX;
        const mouseXRelativeToSection = mouseX - sectionRect.left;
        const normalizedX = Math.max(0, Math.min(1, mouseXRelativeToSection/sectionRect.width));
        const newOffset = (normalizedX - 0.5) * 2 * maxSlideOffset;
        setJamesOffset(newOffset);
        setHuntOffset(-newOffset);
        const mouseYRelativeToSection = globalMouseY - sectionRect.top;
        // Normalize Y position to a 0-1 range within the section height
        const normalizedY = Math.max(0, Math.min(1, mouseYRelativeToSection / sectionRect.height));
        // Map normalizedY to a percentage for background-position-y
        // 0% means the top of the background image is at the top of the container
        // 100% means the bottom of the background image is at the top of the container
        // To make the center of the gradient follow the mouse, we need to adjust
        // For a 300% height background, 0-100% corresponds to moving the center from top to bottom
        const newShineYPercent = normalizedY * 100;
        const newShineXPercent = normalizedX * 100;
        setShineYPercent(newShineYPercent);
        setShineXPercent(newShineXPercent);
    }
  }, [globalMouseX, globalMouseY, ref]); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <section
      ref={ref} // This ref is forwarded from the parent component, allowing external access if needed.
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden relative"
      style={{ perspective: '100px' }}
    >
      
        <div
        className="absolute inset-0 z-0 pointer-events-none" // z-0 ensures it's behind text
        style={{
          // Radial gradient for the shine effect
          background: 'radial-gradient(circle at center, rgba(0,255,255,0.4) 0%, transparent 60%)',
          // Make the background image taller than the div to allow vertical movement of the shine point
          backgroundSize: '300% 300%', // 100% width, 300% height
          backgroundRepeat: 'no-repeat',
          // Dynamically position the background image vertically based on mouse Y
          backgroundPosition: `${shineXPercent}% ${shineYPercent}%`,
          willChange: 'background-position', // Optimize for animation
        }}
      ></div>
      
      <div
        className="relative text-center w-full h-full flex flex-col items-center justify-center cursor-ew-resize select-none"
        // `cursor-ew-resize` provides a visual cue that horizontal dragging is possible.
        // `select-none` prevents text from being accidentally selected while moving the mouse.
        // `perspective` is a good practice for elements undergoing 3D transforms, even for 2D translateX,
        // as it sets up a 3D rendering context for potential future effects.
        style={{ perspective: '1000px' }}
      >
        <h1
          className="text-[11rem] md:text-[15rem] font-extrabold text-slate-800 relative z-10 will-change-transform pointer-events-none"
          // `will-change-transform` hints to the browser that this element's transform property
          // will change, allowing for potential performance optimizations.
          // `pointer-events-none` ensures that mouse events pass through this element to the
          // `containerRef`, allowing consistent tracking even when the cursor is over the text.
          style={{ transform: `translateX(${jamesOffset}px)` }} // Apply the dynamic horizontal translation
        >
          James
        </h1>

        {/* "Hunt" text element, positioned below "James". */}
        <h1
          className="text-[11rem] md:text-[15rem] font-extrabold text-slate-800 relative z-10 will-change-transform pointer-events-none -mt-[5rem] md:-mt-[10rem]"
          // Negative margin-top (`-mt-8 md:-mt-12`) is used to pull "Hunt" upwards,
          // reducing the vertical gap between "James" and "Hunt" and making them appear closer.
          style={{ transform: `translateX(${huntOffset}px)` }} // Apply the dynamic horizontal translation
        >
          Hunt
        </h1>
      </div>
    </section>
  );
});

// Export the component as default for easy import in other parts of your application.
export default Home;
