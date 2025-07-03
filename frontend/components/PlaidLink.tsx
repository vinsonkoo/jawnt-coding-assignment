import React from 'react'

type PlaidLinkProps = {
  onConnectSuccess: () => void
}

export default function PlaidLink({ onConnectSuccess }: PlaidLinkProps) {
  
  const handleConnectBankAccount = async () => {
    // TODO: Implement Plaid Link
    onConnectSuccess()
  }

  return (
    <div>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleConnectBankAccount}>Connect Bank Account</button>
    </div>
  )
}