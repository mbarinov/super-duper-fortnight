export interface TransactionType {
  id: number;
  amount: number;
  currency: string;
  date: string;
  type: "credit" | "debit";
  category: "deposit" | "paypal" | "transfer";
  description: string;
}
