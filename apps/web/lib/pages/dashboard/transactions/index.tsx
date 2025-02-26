import Transaction from "./transaction";

const data = [
  {
    id: 1,
    amount: 850,
    currency: "USD",
    date: new Date(),
    type: "credit",
    category: "deposit",
    description: "Deposit from my Card",
  },
  {
    id: 2,
    amount: 2500,
    currency: "USD",
    date: new Date(),
    type: "debit",
    category: "paypal",
    description: "Deposit Paypal",
  },
  {
    id: 3,
    amount: 5400,
    currency: "USD",
    date: new Date(),
    type: "debit",
    category: "transfer",
    description: "Jemi Wilson",
  },
  {
    id: 4,
    amount: 5400,
    currency: "USD",
    date: new Date(),
    type: "debit",
    category: "deposit",
    description: "Deposit from my Card",
  },
];

export default function Transactions() {
  return (
    <div className="flex-1 h-full md:bg-white overflow-y-auto scrollbar-hide">
      <div className="flex flex-col gap-2">
        {data.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </div>
    </div>
  );
}
