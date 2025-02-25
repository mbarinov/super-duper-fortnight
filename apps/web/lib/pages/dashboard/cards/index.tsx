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
    <div className="flex flex-row gap-5 md:gap-4 overflow-x-auto pb-4 md:overflow-visible snap-x scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
      {cards.map((card) => (
        <div key={card.cardNumber} className="snap-center flex-shrink-0">
          <CreditCard {...card} />
        </div>
      ))}
    </div>
  );
}
