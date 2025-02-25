import { CardType } from "./types";

/**
 * Mock cards data for API simulation
 * In a real application, this would come from an API endpoint
 */
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
    balance: 5756,
    currency: "USD",
    cardHolder: "Eddy Cusuma",
    cardNumber: "4242 **** **** 1234",
    validThru: "12/25",
    isPremium: false,
  },
];

/**
 * API error for handling fetch failures
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number = 500
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/**
 * Simulates an API call to fetch credit cards with a 3-second delay
 * In a real implementation, this would call an external API endpoint
 *
 * @returns {Promise<CardType[]>} A promise that resolves to an array of cards
 * @throws {ApiError} If the request fails (simulated randomly)
 */
export const fetchCards = async (): Promise<CardType[]> => {
  // Simulate network delay (3 seconds)
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Simulate occasional API failures (10% chance)
  const shouldFail = Math.random() < 0.1;
  if (shouldFail) {
    throw new ApiError("Failed to fetch cards data. Please try again.", 503);
  }

  return mockCards;
};
