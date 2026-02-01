import React from 'react';

const TodayPlanCard = ({ todayPlan, ctaIcon: CtaIcon }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">{todayPlan.title}</h2>
          <p className="text-sm text-slate-500 mt-1">{todayPlan.schedule}</p>
        </div>
        <span className="text-xs font-semibold bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">
          {todayPlan.tag}
        </span>
      </div>
      <div className="mt-6 space-y-4">
        {todayPlan.tasks.map((task) => {
          const Icon = task.icon;
          return (
            <div
              key={task.label}
              className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{task.label}</p>
                  <p className="text-sm text-slate-500">{task.detail}</p>
                </div>
              </div>
              <button className="text-indigo-600 text-sm font-semibold flex items-center">
                {todayPlan.taskCta}
                <CtaIcon className="w-4 h-4 ml-1" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodayPlanCard;
