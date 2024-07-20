import React from 'react'
import { Link } from 'react-router-dom' ;
import ImageLazyLoading from "./ImageLazyLoading";

const Logos = [
  require("../../Assets/Images/logonovo.png"),
  require("../../Assets/Images/logonovo.png"),
]





function Logo({type}) {
  let t =  type*1;

  return (
    <div>
       <Link to="/"><div className="logo"><ImageLazyLoading height={60} source={Logos[t >= 1 ? 1 : 0]} /></div></Link>
    </div>
  )
}

export default Logo