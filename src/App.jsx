import React from 'react';
import { dashboardConfig } from './config/dashboardConfig';
import Sidebar from './components/Sidebar';
import GreetingBanner from './components/GreetingBanner';
import TodayPlanCard from './components/TodayPlanCard';
import QuickStatsCard from './components/QuickStatsCard';
import ContinueStudyingCard from './components/ContinueStudyingCard';
import LowerPanels from './components/LowerPanels';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex">
        <Sidebar
          appName={dashboardConfig.appName}
          navigation={dashboardConfig.navigation}
          sidebar={dashboardConfig.sidebar}
        />

        <main className="flex-1">
          <GreetingBanner greeting={dashboardConfig.greeting} accentIcon={dashboardConfig.greeting.ctaIcon} />

          <section className="px-6 lg:px-10 pb-10 space-y-8">
            <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-6">
              <TodayPlanCard
                todayPlan={dashboardConfig.todayPlan}
                ctaIcon={dashboardConfig.sharedIcons.arrowUpRight}
              />
              <QuickStatsCard quickStats={dashboardConfig.quickStats} />
            </div>

            <ContinueStudyingCard continueStudying={dashboardConfig.continueStudying} />

            <LowerPanels panels={dashboardConfig.lowerPanels} ctaIcon={dashboardConfig.sharedIcons.arrowUpRight} />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
