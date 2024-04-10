import React from 'react'
import {useNavigate} from  'react-router-dom'
import { useEffect } from 'react'
const Contact = () => {
  const navigate = useNavigate()

  // useEffect(()=>{
  //   if(true){
  //  navigate("/about")
  //   }
  // })
  
  return(
 <div>
     <div>Contact</div>
    <button onClick={()=>navigate("/posts/1234",{replace:true,state:{id:1234}})}>Go to about</button>
    {/* replace remove the origin page through which we navigate to another  */}

 </div>
  )
}

export default Contact