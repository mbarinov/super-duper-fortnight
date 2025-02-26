import { TransactionType } from "./types";

const mockTransactions: TransactionType[] = [
  {
    id: 1,
    amount: 850,
    currency: "USD",
    date: new Date().toISOString(),
    type: "credit",
    category: "deposit",
    description: "Deposit from my Card",
  },
  {
    id: 2,
    amount: 2500,
    currency: "USD",
    date: new Date().toISOString(),
    type: "debit",
    category: "paypal",
    description: "Deposit Paypal",
  },
  {
    id: 3,
    amount: 5400,
    currency: "USD",
    date: new Date().toISOString(),
    type: "debit",
    category: "transfer",
    description: "Jemi Wilson",
  },
  {
    id: 4,
    amount: 5400,
    currency: "USD",
    date: new Date().toISOString(),
    type: "credit",
    category: "deposit",
    description: "Deposit from my Card",
  },
];
export const fetchTransactions = async (): Promise<TransactionType[]> => {
  const delay = Math.floor(Math.random() * 500) + 500;
  await new Promise((resolve) => setTimeout(resolve, delay));

  return mockTransactions;
};
