export interface TransactionData {
  labels: string[];
  depositData: number[];
  withdrawData: number[];
}

export const fetchTransactionData = async (): Promise<TransactionData> => {
  // Simulating API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        depositData: [300, 200, 150, 400, 250, 320, 280],
        withdrawData: [450, 350, 220, 420, 300, 410, 470],
      });
    }, 500);
  });
};
