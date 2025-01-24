"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient } from "@/lib/appwrite.config";
import { parseStringify } from "@/lib/utils";
import { GetTransactionsParams, Transaction } from "@/lib/types";

const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_TRANSACTION_COLLECTION_ID: TRANSACTION_COLLECTION_ID,
} = process.env;

export const createTransaction = async (transaction: CreateTransactionProps) => {
  try {
    const { database } = await createAdminClient();

    const newTransaction = await database.createDocument(
      DATABASE_ID!,
      TRANSACTION_COLLECTION_ID!,
      ID.unique(),
      {
        channel: 'online',
        category: 'Transfer',
        ...transaction
      }
    )

    return parseStringify(newTransaction);
  } catch (error) {
    console.log(error);
  }
}

export const getTransactionsByBankId = async ({bankId}: getTransactionsByBankIdProps) => {
  try {
    const { database } = await createAdminClient();

    const senderTransactions = await database.listDocuments(
      DATABASE_ID!,
      TRANSACTION_COLLECTION_ID!,
      [Query.equal('senderBankId', bankId)],
    )

    const receiverTransactions = await database.listDocuments(
      DATABASE_ID!,
      TRANSACTION_COLLECTION_ID!,
      [Query.equal('receiverBankId', bankId)],
    );

    const transactions = {
      total: senderTransactions.total + receiverTransactions.total,
      documents: [
        ...senderTransactions.documents, 
        ...receiverTransactions.documents,
      ]
    }

    return parseStringify(transactions);
  } catch (error) {
    console.log(error);
  }
}

export const getTransactions = async ({
  userId,
  page = 1,
  limit = 10,
  bankId,
}: GetTransactionsParams) => {
  try {
    const { database } = await createAdminClient();
    
    const queries = [Query.equal("userId", [userId])];
    if (bankId) queries.push(Query.equal("bankId", [bankId]));
    
    const totalCount = await database.listDocuments(
      DATABASE_ID!,
      TRANSACTION_COLLECTION_ID!,
      queries
    );

    const transactions = await database.listDocuments(
      DATABASE_ID!,
      TRANSACTION_COLLECTION_ID!,
      [
        ...queries,
        Query.limit(limit),
        Query.offset((page - 1) * limit),
        Query.orderDesc("$createdAt")
      ]
    );

    return {
      data: transactions.documents as Transaction[],
      metadata: {
        total: totalCount.total,
        page,
        pageSize: limit,
      }
    };
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};