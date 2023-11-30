/**
 * User entity
 */
export interface Expenses {
    /**
     * Expense id
     */
    id: number;

    /**
     * Expense category
     */
    category?: string;

    /**
     * Expense amount
     */
    amount: number;

    /**
     * Expense date
     */
    date: string;

    /**
     * Expense description
     */
    description?: string;
  }