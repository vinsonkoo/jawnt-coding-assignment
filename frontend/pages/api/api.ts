// fetch connected bank accounts
export const fetchBankAccounts = async () => {
  try {
    const response = await fetch('/api/external-accounts');
    if (!response.ok) {
      throw new Error('Failed to fetch bank accounts');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
// create bank account after connection
export const createBankAccount = async (plaidData) => {
  try {
    const response = await fetch('/api/external-accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plaidData),
    });
    if (!response.ok) {
      throw new Error('Failed to create bank account');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// fetch payments
export const fetchPayments = async () => {
  try {
    const response = await fetch('/api/payments');
    if (!response.ok) {
      throw new Error('Failed to fetch payments');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};