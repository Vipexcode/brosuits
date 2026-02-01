import React from 'react';

const LowerPanels = ({ panels, ctaIcon: CtaIcon }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {panels.map((panel) => {
        const Icon = panel.icon;
        return (
          <div key={panel.title} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Icon className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mt-4">{panel.title}</h3>
            <p className="text-sm text-slate-500 mt-2">{panel.description}</p>
            <button className="mt-5 text-indigo-600 text-sm font-semibold flex items-center">
              {panel.cta}
              <CtaIcon className="w-4 h-4 ml-1" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default LowerPanels;
