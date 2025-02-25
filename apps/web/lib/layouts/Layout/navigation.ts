import {
  HomeIcon,
  AccountIcon,
  CreditCardIcon,
  InvestmentIcon,
  LoanIcon,
  PrivilegesIcon,
  ServiceIcon,
  SettingsIcon,
  TransactionsIcon,
} from "@repo/icons";

export const NAV_ITEMS = [
  { label: "Dashboard", href: "/", icon: HomeIcon },
  { label: "Transactions", href: "/transactions", icon: TransactionsIcon },
  { label: "Accounts", href: "/accounts", icon: AccountIcon },
  { label: "Investments", href: "/investments", icon: InvestmentIcon },
  { label: "Credit Cards", href: "/credit-cards", icon: CreditCardIcon },
  { label: "Loans", href: "/loans", icon: LoanIcon },
  { label: "Services", href: "/services", icon: ServiceIcon },
  { label: "My Privileges", href: "/privileges", icon: PrivilegesIcon },
  { label: "Settings", href: "/settings", icon: SettingsIcon },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
