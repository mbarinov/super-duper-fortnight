/**
 * Represents a credit card with its details
 */
export interface CardType {
  balance: number;
  currency: string;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
  type?: string;
  isPremium?: boolean;
}
