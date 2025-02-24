export const NAV_ITEMS = [
  { label: 'Dashboard', href: '/dashboard', icon: 'HomeIcon' },
  { label: 'Profile', href: '/profile', icon: 'UserIcon' },
  { label: 'Settings', href: '/settings', icon: 'CogIcon' },
  { label: 'Help', href: '/help', icon: 'QuestionMarkCircleIcon' },
] as const;

export type NavItem = typeof NAV_ITEMS[number]; 