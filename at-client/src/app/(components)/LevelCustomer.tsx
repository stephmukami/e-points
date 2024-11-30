
import React from 'react'
import Link from 'next/link'

type Props = object

function LevelCustomer({}: Props) {
  return (
<div className="border w-full h-screen flex flex-col items-center justify-center">
  <div className="text-center mb-4">
    <h3>Are you a rider or a passenger?</h3>
  </div>
  <div className="flex gap-4">
    <Link href="/rider">
      <button className="bg-black text-white w-[140px] h-[36px] rounded-md">
        Rider
      </button>
    </Link>
    <Link href="/passenger">
      <button className="bg-black text-white w-[140px] h-[36px] rounded-md">
        Passenger
      </button>
    </Link>
  </div>
</div>

  )
}

export default LevelCustomer