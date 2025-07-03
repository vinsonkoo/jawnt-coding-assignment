import React from 'react'

type PaymentsProps = {}

type Payment = {
  id: number
  uuid: string
  source_routing_number: number
  destination_routing_number: number
}
type Payments = Payment[]

export default function Payments({ }: PaymentsProps) {
  const [payments, setPayments] = useState<Payments[]>([])

  useEffect(() => {
    // fetch payments on mount
  }, [])

  return (
      <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Payments</h1>
      </main>
    </div>
  )
}