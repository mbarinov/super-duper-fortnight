export interface BalanceData {
  month: string;
  balance: number;
}

const MOCK_BALANCE: BalanceData[] = [
  { month: "Jul", balance: 250 },
  { month: "Aug", balance: 400 },
  { month: "Sep", balance: 750 },
  { month: "Oct", balance: 800 },
  { month: "Nov", balance: 450 },
  { month: "Dec", balance: 300 },
  { month: "Jan", balance: 650 },
];

export const fetchBalanceData = async (): Promise<BalanceData[]> => {
  const delay = Math.floor(Math.random() * 500) + 500;
  await new Promise((resolve) => setTimeout(resolve, delay));

  return MOCK_BALANCE;
};
