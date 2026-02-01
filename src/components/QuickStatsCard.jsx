import React from 'react';

const QuickStatsCard = ({ quickStats }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{quickStats.title}</h2>
        <span className="text-xs text-slate-500">{quickStats.timeframe}</span>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4">
        {quickStats.items.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <p className="text-lg font-semibold text-slate-900">{stat.value}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-emerald-600">{stat.change}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickStatsCard;
