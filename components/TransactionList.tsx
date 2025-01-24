'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { getTransactions } from '@/lib/actions/transaction.actions';
import { Transaction } from '@/lib/types';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { TransactionItem } from '@/components/TransactionItem';

export const TransactionList = ({ bankId }: { bankId: string }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const fetchTransactions = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getTransactions({ bankId, userId: 'current-user' }); // Replace with actual user ID
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    } finally {
      setIsLoading(false);
    }
  }, [bankId]);

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      if (mounted) {
        await fetchTransactions();
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, [fetchTransactions]);

  // Clear intervals and subscriptions when component unmounts
  useEffect(() => {
    const cleanup = () => {
      // Clear any intervals
      // Unsubscribe from any subscriptions
      // Clear any timeouts
    };

    return cleanup;
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="transaction-list">
          {transactions.map((transaction) => (
            <TransactionItem 
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </div>
      )}
    </div>
  );
}; 