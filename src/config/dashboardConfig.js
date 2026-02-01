import {
  LayoutDashboard,
  BookOpen,
  FolderOpen,
  ClipboardCheck,
  TrendingUp,
  Bookmark,
  Settings,
  Sparkles,
  CalendarCheck,
  Timer,
  Target,
  BarChart3,
  Flame,
  ArrowUpRight,
  PlayCircle,
  FileText
} from 'lucide-react';

export const dashboardConfig = {
  appName: 'StudyHub',
  greeting: {
    title: 'Good morning, Aanya',
    subtitle: 'You are 78% toward your weekly goal. Keep going!',
    cta: 'Review today’s plan',
    ctaIcon: Sparkles,
    eyebrow: 'Dashboard'
  },
  navigation: {
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, active: true },
      { label: 'Blog', icon: BookOpen },
      { label: 'Resources', icon: FolderOpen },
      { label: 'Mock Tests', icon: ClipboardCheck },
      { label: 'Progress Tracker', icon: TrendingUp },
      { label: 'Bookmarks', icon: Bookmark },
      { label: 'Settings', icon: Settings }
    ]
  },
  sidebar: {
    brandIcon: BookOpen,
    highlight: {
      title: 'Next mock test',
      schedule: 'Friday, 9:00 AM',
      cta: 'Schedule reminder',
      icon: CalendarCheck
    }
  },
  todayPlan: {
    title: 'Today’s Plan',
    schedule: 'Wednesday, 10:30 AM',
    tag: 'Priority focus',
    taskCta: 'Start',
    tasks: [
      { label: 'Vocabulary sprint', detail: '25 new words • 15 min', icon: Sparkles },
      { label: 'Reading practice', detail: '1 editorial • 20 min', icon: FileText },
      { label: 'Mock quiz', detail: '10 questions • 12 min', icon: ClipboardCheck }
    ]
  },
  quickStats: {
    title: 'Quick Stats',
    timeframe: 'Last 7 days',
    items: [
      { label: 'Accuracy', value: '86%', change: '+4%', icon: Target },
      { label: 'Study streak', value: '12 days', change: '+2', icon: Flame },
      { label: 'Time spent', value: '6h 40m', change: '+45m', icon: Timer },
      { label: 'Vocabulary goal', value: '180 / 250', change: '+24', icon: BarChart3 }
    ]
  },
  continueStudying: {
    title: 'Continue Studying',
    subtitle: 'Last session: Grammar fundamentals',
    progressLabel: '65% complete',
    progressPercent: 65,
    cta: 'Resume lesson',
    ctaIcon: PlayCircle
  },
  lowerPanels: [
    {
      title: 'Study Blog',
      description: 'Daily strategies for smarter revision and exam confidence.',
      cta: 'Read latest posts',
      icon: BookOpen
    },
    {
      title: 'Resources',
      description: 'Downloadable worksheets, flashcards, and topic checklists.',
      cta: 'Browse library',
      icon: FolderOpen
    },
    {
      title: 'Mock Tests',
      description: 'Full-length tests with detailed performance analytics.',
      cta: 'Start a mock test',
      icon: ClipboardCheck
    }
  ],
  sharedIcons: {
    arrowUpRight: ArrowUpRight
  }
};
