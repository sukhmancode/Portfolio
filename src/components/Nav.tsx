import React, { useRef } from 'react'

import { FaBars} from "react-icons/fa";

const Nav :React.FC= () => {
  const navref=useRef<HTMLDivElement>(null);

  const showNav=()=>{
    console.log('navref.current:', navref.current);

    navref.current?.classList.toggle('responsive-nav')
}
  return (
    <nav>
        <div className="heading">
            <p><span className='arrow'>&lt;</span>SUKHMAN <span> / </span><span className='arrow'>&gt;</span></p>
        </div>
        <div className="nav-elements" ref={navref}>
            <span>About <span className='arrow'>/&gt;</span></span>
            <span>Skills <span className='arrow'>/&gt;</span></span>
            <span>Projects<span className='arrow'>/&gt;</span></span>
            <span>Contact<span className='arrow'>/&gt;</span></span>
        </div>
       
       <div className='nav-btn nav-close' onClick={showNav}>
        <FaBars size={30} />
        </div>
    </nav>
  )
}

export default Nav