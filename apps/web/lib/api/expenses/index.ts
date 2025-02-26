export interface ExpenseData {
  category: string;
  percentage: number;
  color: string;
}

const MOCK_EXPENSES: ExpenseData[] = [
  { category: "Entertainment", percentage: 30, color: "#343C6A" },
  { category: "Bill Expense", percentage: 15, color: "#232323" },
  { category: "Investment", percentage: 20, color: "#396AFF" },
  { category: "Others", percentage: 35, color: "#FC7900" },
];

export const fetchExpenseData = async (): Promise<ExpenseData[]> => {
  const delay = Math.floor(Math.random() * 500) + 500;
  await new Promise((resolve) => setTimeout(resolve, delay));

  return MOCK_EXPENSES;
};
