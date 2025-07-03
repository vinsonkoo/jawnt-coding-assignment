import { Geist, Geist_Mono } from "next/font/google";
import Card from "@/components/Card";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AdminDashboard() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* page header */}
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        {/* connected bank accounts */}
        <Card title="Connected Bank Accounts" description="View and manage connected bank accounts" link="/bank-accounts" />
        {/* payments */}
        <Card title="Payments" description="View and manage payments" link="/payments" />
      </main>
      
    </div>
  );
}
