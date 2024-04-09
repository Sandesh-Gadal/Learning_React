import React from 'react'
import {useNavigate } from 'react-router-dom'
const Contact = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    if(true){
   navigate("/about")
    }
  })
  
  return(
    <div>Contact</div>
  )
}

export default Contact