import * as z from "zod";

export const TransferSchema = z.object({
  amount: z.string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(Number(val)), "Must be a valid number")
    .refine((val) => Number(val) > 0, "Amount must be greater than 0"),
  
  recipientId: z.string()
    .min(1, "Recipient is required"),
  
  note: z.string()
    .max(100, "Note must be less than 100 characters")
    .optional(),
  
  bankId: z.string()
    .min(1, "Bank account is required"),
}); 