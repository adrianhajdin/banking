export interface Transaction {
  id: string;
  amount: number;
  date: string;
  type: string;
  status: string;
  bankId: string;
  userId: string;
}

export interface GetTransactionsParams {
  userId: string;
  page?: number;
  limit?: number;
  bankId?: string;
}

export interface TransactionItemProps {
  transaction: Transaction;
} 