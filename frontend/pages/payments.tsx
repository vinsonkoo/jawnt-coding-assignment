import React, { useCallback, useEffect, useState } from 'react'
import { fetchPayments } from './api/api'

type PaymentsProps = {}

type Payment = {
  id: number
  uuid: string
  source_routing_number: number
  destination_routing_number: number
}
type Payments = Payment[]

export default function Payments({ }: PaymentsProps) {
  const [payments, setPayments] = useState<Payments>([])

  const getPayments = useCallback(async () => {
    const payments = await fetchPayments()
    setPayments(payments)
  }, [])

  useEffect(() => {
    getPayments()
  }, [getPayments])

  return (
      <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Payments</h1>
        <div>
          {payments.map((payment: Payment) => (
            <div key={payment.id}>
              <p>{payment.source_routing_number}</p>
              <p>{payment.destination_routing_number}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}