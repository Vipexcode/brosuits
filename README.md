# StudyHub Dashboard UI

A polished, education-focused dashboard UI with a left navigation rail, greeting hero banner, study planning cards, and analytics panels. The layout is fully label-driven via a centralized configuration object so you can quickly repurpose it for any learning domain.

![StudyHub dashboard preview](assets/dashboard.svg)

## ✨ Highlights
- **Config-driven content**: Update labels, icons, and panel copy in one place for rapid reuse.
- **Dashboard-ready layout**: Sidebar navigation, hero banner, and multi-card grid sections.
- **Education-first framing**: Vocabulary goals, mock tests, streaks, and accuracy metrics.

## 📁 Project Structure
```
.
├── assets/
│   └── dashboard.svg
├── output.txt
├── preview/
│   └── index.html
└── src/
    ├── App.jsx
    ├── components/
    │   ├── ContinueStudyingCard.jsx
    │   ├── GreetingBanner.jsx
    │   ├── LowerPanels.jsx
    │   ├── QuickStatsCard.jsx
    │   ├── Sidebar.jsx
    │   └── TodayPlanCard.jsx
    └── config/
        └── dashboardConfig.js
```

## ⚙️ Customizing Labels
Update all displayed labels, stats, and calls-to-action in `src/config/dashboardConfig.js`.

```js
export const dashboardConfig = {
  greeting: {
    title: 'Good morning, Aanya',
    subtitle: 'You are 78% toward your weekly goal. Keep going!',
    cta: 'Review today’s plan'
  },
  todayPlan: {
    tasks: [
      { label: 'Vocabulary sprint', detail: '25 new words • 15 min' }
    ]
  }
};
```

## 🖥️ Preview
A static preview is available at `preview/index.html` for quick visual reference without a build pipeline.

## 🧩 Components
Each major UI section is split into a dedicated component for clean reuse:
- `Sidebar`
- `GreetingBanner`
- `TodayPlanCard`
- `QuickStatsCard`
- `ContinueStudyingCard`
- `LowerPanels`

---

Built for education products, exam prep platforms, and skill-tracking dashboards.
