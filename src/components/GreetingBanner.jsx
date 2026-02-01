import React from 'react';

const GreetingBanner = ({ greeting, accentIcon: AccentIcon }) => {
  return (
    <header className="px-6 lg:px-10 pt-8 pb-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl text-white px-6 py-8 lg:px-10 lg:py-10 shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-indigo-100 text-sm uppercase tracking-widest">{greeting.eyebrow}</p>
            <h1 className="text-3xl lg:text-4xl font-bold mt-2">{greeting.title}</h1>
            <p className="text-indigo-100 mt-3 max-w-xl">{greeting.subtitle}</p>
          </div>
          <button className="inline-flex items-center justify-center bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold shadow-sm">
            <AccentIcon className="w-5 h-5 mr-2" />
            {greeting.cta}
          </button>
        </div>
      </div>
    </header>
  );
};

export default GreetingBanner;
