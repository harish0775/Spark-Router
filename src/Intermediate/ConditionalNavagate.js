import React from 'react'
import {  } from 'react-router-dom'
export default function main() {

  const [params,setSearchParams] = useSearchParams()
  return (
    <div>
      <h1>Hello params{params}</h1>

      <button onClick={()=>setSearchParams({age:10})}>Button</button>
    </div>
  
  )
}
