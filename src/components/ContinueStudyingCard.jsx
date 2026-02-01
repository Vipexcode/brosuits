import React from 'react';

const ContinueStudyingCard = ({ continueStudying }) => {
  const CtaIcon = continueStudying.ctaIcon;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">{continueStudying.title}</h2>
          <p className="text-sm text-slate-500 mt-1">{continueStudying.subtitle}</p>
          <div className="mt-4 w-full max-w-md bg-slate-100 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{ width: `${continueStudying.progressPercent}%` }}
            ></div>
          </div>
          <p className="text-xs text-slate-500 mt-2">{continueStudying.progressLabel}</p>
        </div>
        <button className="inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-sm">
          <CtaIcon className="w-5 h-5 mr-2" />
          {continueStudying.cta}
        </button>
      </div>
    </div>
  );
};

export default ContinueStudyingCard;
