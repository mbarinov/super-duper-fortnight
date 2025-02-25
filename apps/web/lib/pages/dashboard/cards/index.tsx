import CreditCard from "./card";

const cards = [
  {
    balance: 5756,
    currency: "USD",
    cardHolder: "Eddy Cusuma",
    cardNumber: "3778 **** **** 1234",
    validThru: "12/25",
    type: "mastercard",
    isPremium: true,
  },
  {
    balance: 5756,
    currency: "USD",
    cardHolder: "Eddy Cusuma",
    cardNumber: "4242 **** **** 1234",
    validThru: "12/25",
    isPremium: false,
  },
];

export async function Cards() {
  return (
    <div className="flex flex-row gap-4">
      {cards.map((card) => (
        <CreditCard key={card.cardNumber} {...card} />
      ))}
    </div>
  );
}
