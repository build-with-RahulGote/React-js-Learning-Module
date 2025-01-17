import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Componants/card'
import Card from './Componants/card'
function App() {
  let someobject={
    username:'pratik',
    contact:956722873,
    city:'kolhapur',
}

  return (
    <>
      <h1 className='bg-green-400 text-black  p-4 rounded-3xl'> TailWinadCss Test</h1>
      <h2 className='bg-transparent'>Cloud</h2>
      <Card  username="Full Stack Developer" object={someobject}/>


      
    </>
  )
}

export default App
