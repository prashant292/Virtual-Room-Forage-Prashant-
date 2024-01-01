"use client"

import React from 'react'
import { useUser, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

function UserInfo() {
    
    const {user} = useUser()

  return !user ?  (
    <Link href={"/room"} className='bg-teal-500 hover:opacity-90 rounded-lg text-white font-semibold px-5 py-3
    transition duration-300 ease-in-out
    '>
        Sign in
    </Link>
  ): (
    <UserButton />
  )
}

export default UserInfo