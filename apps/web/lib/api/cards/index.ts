import { CardType } from "./types";

const mockCards: CardType[] = [
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
    balance: 14512,
    currency: "USD",
    cardHolder: "Max Barinov",
    cardNumber: "4242 **** **** 4242",
    validThru: "12/25",
    isPremium: false,
  },
];

export const fetchCards = async (): Promise<CardType[]> => {
  const delay = Math.floor(Math.random() * 500) + 500;
  await new Promise((resolve) => setTimeout(resolve, delay));

  return mockCards;
};
