import dynamic from "next/dynamic";

export const DepositIcon = dynamic(
  () => import("@repo/icons").then((mod) => ({ default: mod.DepositIcon })),
  { ssr: true }
);

export const MoneyIcon = dynamic(
  () => import("@repo/icons").then((mod) => ({ default: mod.MoneyIcon })),
  { ssr: true }
);

export const PaypalIcon = dynamic(
  () => import("@repo/icons").then((mod) => ({ default: mod.PaypalIcon })),
  { ssr: true }
);
