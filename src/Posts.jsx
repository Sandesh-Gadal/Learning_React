import React from 'react'
import {useLocation, useParams} from 'react-router-dom'

const Posts = () => {
  const location = useLocation()
 const {id}= useParams(); //to get the pass parameters 
  return (
    <div>
     This is a  Posts<br/>
     {id}
     {/* {location.hash} */}
     {/* {location.pathname} */}
     {/* {location.search} */}
     
     </div>
  )
}

export default Posts