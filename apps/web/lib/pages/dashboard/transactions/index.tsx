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
];

export default function Transactions() {
  return (
    <div className="flex-1 h-full rounded-[25px] md:bg-white">
      <div className="flex flex-col gap-2">
        {data.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </div>
    </div>
  );
}
