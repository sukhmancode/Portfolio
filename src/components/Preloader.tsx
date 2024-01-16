import React, { useEffect } from 'react'

const Preloader:React.FC= () => {
    const PreLoad=()=>{
        useEffect(()=>{ 
            PreLoad()
        },[])
    }
  return (
    <div className='preloader'>
    <div className='pac-man'></div> 
    <p>LOAD1NG...</p>
    <div/>
    </div>
  )
}

export default Preloader