import { Transaction } from '@/lib/types';

interface TransactionItemProps {
  transaction: Transaction;
}

export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div>
        <p className="font-medium">{transaction.type}</p>
        <p className="text-sm text-gray-500">{transaction.date}</p>
      </div>
      <div className="text-right">
        <p className={`font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {transaction.amount > 0 ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
        </p>
        <p className="text-sm text-gray-500">{transaction.status}</p>
      </div>
    </div>
  );
}; 