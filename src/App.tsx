import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Preloader from './components/Preloader'
import Body from './components/Body'

function App() {
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1500)
  })
  return (
<>
  <div className="wrapper">
    {loading ? <Preloader /> : (
      <div>
        <Nav />
        <Body />
      </div>
    )}
  </div>
</>
  )
}

export default App
