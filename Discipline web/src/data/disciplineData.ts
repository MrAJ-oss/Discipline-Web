export interface FeatureItem {
  id: string;
  symbol: string;
  colorClass: string;
  number: string;
  title: string;
  description?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface TeamMember {
  initials: string;
  name: string;
  role?: string;
  tag?: string;
  tags?: string[];
  image?: string;
  link?: {
    label: string;
    url: string;
  };
}

export const FEATURES: FeatureItem[] = [
  {
    id: 'wake',
    symbol: '◷',
    colorClass: 'orange',
    number: '01 / WAKE',
    title: 'Alarms with a purpose',
    description: 'Create one-time or repeating alarms and choose missions such as math, memory, or QR scanning to help make waking up more intentional.',
  },
  {
    id: 'focus',
    symbol: '⌁',
    colorClass: 'blue',
    number: '02 / FOCUS',
    title: 'Study Mode',
    description: 'Set a study duration, choose allowed apps, track your session, and reduce distractions using supported Android capabilities.',
  },
  {
    id: 'play',
    symbol: '◇',
    colorClass: 'purple',
    number: '03 / PLAY',
    title: 'Gaming Mode',
    description: 'Choose permitted games and a session duration while reducing unnecessary interruptions where your device allows it.',
  },
  {
    id: 'plan',
    symbol: '▦',
    colorClass: 'green',
    number: '04 / PLAN',
    title: 'Routines & schedules',
    description: 'Connect alarms, study sessions, breaks, and gaming time into a daily routine that fits your plan.',
  },
  {
    id: 'improve',
    symbol: '↗',
    colorClass: 'yellow',
    number: '05 / IMPROVE',
    title: 'Goals & streaks',
    description: 'Track consistency, study time, successful alarms, goals, streaks, achievements, and activity statistics.',
  },
  {
    id: 'motivate',
    symbol: '✦',
    colorClass: 'pink',
    number: '06 / MOTIVATE',
    title: 'Progress & motivation',
    description: 'Use reminders and achievement notifications to stay aware of your progress. AI motivation depends on the configured backend.',
  },
  {
    id: 'companion',
    symbol: '✧',
    colorClass: 'amber',
    number: '07 / AI COMPANION',
    title: 'Zeni — AI Pet',
    description: 'Meet your 8-bit cyber companion. Zeni talks with you, suggests personalized daily timetables, launches study sessions, sets alarms with voice commands, and reacts with expressive pixel-art animations to keep you accountable.',
  },
];

export const STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Wake',
    description: 'Set an alarm and complete your selected wake-up mission.',
  },
  {
    number: '02',
    title: 'Focus',
    description: 'Start a timed study session and keep distractions reduced.',
  },
  {
    number: '03',
    title: 'Play',
    description: 'Schedule recreation with a defined gaming session.',
  },
  {
    number: '04',
    title: 'Review & repeat',
    description: 'Review goals, streaks, achievements, and routine progress.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    initials: 'AJ',
    name: 'Anuj Joshi',
    tags: ['App Designer', 'Developer'],
    image: '/team/anuj-joshi.jpeg',
    link: {
      label: 'OSK Fun ↗',
      url: 'https://oskfun.in',
    },
  },
  {
    initials: 'AT',
    name: 'Ashish Tat',
    tags: ['Website Designer'],
    image: '/team/ashish-tat.jpeg',
  },
  {
    initials: 'AN',
    name: 'Atharva Nikam',
    tags: ['Presentation Helper'],
    image: '/team/atharva-nikam.jpeg',
  },
  {
    initials: 'KC',
    name: 'Kashyap Chavan',
    tags: ['Presentation Helper'],
    image: '/team/kashyap-chavan.jpeg',
  },
];
