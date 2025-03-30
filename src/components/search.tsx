"use client"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function Search() {
    const searchParams=useSearchParams()
    const router=useRouter()
    const [search,setSearch]=useState("")
    const handleSearch=()=>{
        const currentSearchParams=new URLSearchParams(searchParams.toString())
        currentSearchParams.set("title",search)
        router.push(`/store?${currentSearchParams.toString()}`)
    }
  return (
    <div>
        <input type="text" placeholder='جستجو' className='bg-slate-400' onChange={(e)=>{setSearch(e.target.value)}}/>
        <button className='bg-sky-500 text-white p-2 rounded' onClick={handleSearch}>جستجو</button>
    </div>
  )
}

export default Search