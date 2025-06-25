// In frontend/src/pages/Contact.jsx

import React from 'react';

const Contact = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="contact" className="min-h-screen flex items-center justify-center bg-slate-800 text-white">
      <h2 className="text-6xl font-bold">Contact Section</h2>
    </section>
  );
});

export default Contact;