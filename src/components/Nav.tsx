import React, { useRef } from 'react'


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
            <span><a href='about'>About <span className='arrow'>/&gt;</span></a></span>
            <span><a href='skills'>Skills <span className='arrow'>/&gt;</span></a></span>
            <span><a href='projects'>Projects<span className='arrow'>/&gt;</span></a></span>
            <span><a href='contact'>Contact<span className='arrow'>/&gt;</span></a></span>
        </div>
       
       <div className='nav-btn nav-close' onClick={showNav}>
       <svg width="40" height="40" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H7.5C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </div>
    </nav>
  )
}

export default Nav