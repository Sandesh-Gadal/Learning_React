import React, { useState } from 'react'
import {Outlet} from 'react-router-dom'


const Home = () => {
//  console.log(useState({
//   name : "Sandesh",
//   Age : 22
//  }))

// const state = useState("Sandesh")
// console.log(state)
// const firstitem = state[0]
// const Seconditem = state[1]

const count = useState(0)
// var count = 0// var doesnot get re-render in the UI

// const number = useState (0)
// const firstitem = number[0]
// const seconditem = number[1]

const [number , setNumber ] = useState(0)
const increasecount = () =>{
 setNumber(number+1)
}
const decreasecount = ()=>{
 setNumber(number-1)
}

  return (
    <div>
      {/* <h1>{number}</h1>
      <button onClick={increasecount}>+</button>
      <button onClick={decreasecount}>-</button> */}

      Home Page 
      <br/>
      Navbar
      <br/>
    

     <Outlet/>
    </div>
    
  )
}

export default Home