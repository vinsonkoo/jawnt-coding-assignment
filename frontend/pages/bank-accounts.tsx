import React, { useEffect, useState } from 'react'
import PlaidLink from '@/components/PlaidLink'

type BankAccount = {
  id: number
  uuid: string
  type: "funding" | "claims"
  account_number: number
  routing_number: number
}

type BankAccounts = BankAccount[]


export default function BankAccounts({ }: BankAccounts) {
  const [bankAccounts, setBankAccounts] = useState<BankAccounts[]>([])

  useEffect(() => {
    // fetch connected bank accounts on mount
  }, [])
  
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Connected Bank Accounts</h1>
        {/* list fetched bank accounts */}
        <PlaidLink onConnectSuccess={() => {}} />
      </main>
    </div>
  )
}