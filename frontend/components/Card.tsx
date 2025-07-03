import React from 'react'
import Link from 'next/link'


type CardProps = {
  title: string;
  description: string;
  link: string;
}

export default function Card({ title, description, link }: CardProps) {
  return (
    <div className="bg-white rounded-md p-4 shadow-md">
      <Link href={link}>
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </Link>
    </div>
  )
}