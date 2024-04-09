import React from 'react'
import {useLocation} from 'react-router-dom'

const Posts = () => {
  const location = useLocation()
  return (
    <div>
     This is a  Posts<br/>
     {/* {location.hash} */}
     {/* {location.pathname} */}
     {/* {location.search} */}
     
     </div>
  )
}

export default Posts