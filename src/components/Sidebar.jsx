import React from 'react';

const Sidebar = ({ appName, navigation, sidebar }) => {
  const BrandIcon = sidebar.brandIcon;
  const HighlightIcon = sidebar.highlight.icon;

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-slate-200 min-h-screen">
      <div className="px-6 py-6 border-b border-slate-100">
        <div className="flex items-center space-x-2 text-slate-900 font-semibold text-xl">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
            <BrandIcon className="w-5 h-5" />
          </div>
          <span>{appName}</span>
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                item.active
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="px-6 pb-6">
        <div className="rounded-2xl bg-slate-900 text-white p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{sidebar.highlight.title}</span>
            <HighlightIcon className="w-4 h-4" />
          </div>
          <p className="text-lg font-semibold mt-3">{sidebar.highlight.schedule}</p>
          <button className="mt-4 w-full bg-white text-slate-900 py-2 rounded-lg text-sm font-semibold">
            {sidebar.highlight.cta}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
