// In frontend/src/components/Navbar.jsx

import React from 'react';

// The Navbar now accepts 'activeSection' as a prop
export default function Navbar({ onNavClick, activeSection }) {
  const navItems = ['home', 'about', 'projects', 'contact'];

  return (
    // FIX: Position the navbar container away from the top and center it.
    // left-1/2 -translate-x-1/2 is a standard trick for perfect centering.
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      
      {/* FIX: This div is the pill itself, with rounded corners, backdrop blur, and padding. */}
      <div className="bg-white/70 backdrop-blur-md rounded-full shadow-lg p-2">
        <ul className="flex space-x-2">
          {navItems.map((item) => {
            // Determine if this item is the currently active one
            const isActive = activeSection === item;

            return (
              <li key={item}>
                <button
                  onClick={() => onNavClick(item)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300
                    ${isActive 
                      ? 'bg-cyan-500 text-white' // Styles for the active (highlighted) item
                      : 'text-gray-600 hover:text-cyan-600' // Styles for inactive items
                    }
                  `}
                >
                  <span className="capitalize">{item}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}