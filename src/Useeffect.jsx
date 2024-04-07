import React, { useEffect, useState } from 'react'

const Useeffect = () => {
const [count,setcount]=useState(0)
const [count2,setcount2]=useState(100)
// first type of useeffect
// useEffect(()=>{
//     console.log("hello inside from Useeffect")
// },[])
console.log(count)
// second type of useeffect
// useEffect(()=>{
//     console.log("hello inside from Useeffect")
// },[count,count2])

useEffect(()=>{
    console.log("third type of effect")
})
  return (
 <div>
       <h1>{count}</h1>
   <button onClick={()=>{
     setcount(count+1)
   }}>+</button>
       <h1>{count2}</h1>
     <button onClick={()=>{
     setcount2(count2-1)
   }}>-</button>
 </div>
  )
}

export default Useeffect