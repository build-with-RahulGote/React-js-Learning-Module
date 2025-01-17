import { useState } from 'react'


import './App.css'

function App() {
  let [counter ,setcounter]=useState(0)
  
function Addvalue()
{
  setcounter(precounter=>precounter+1)
  setcounter(precounter=>precounter+1)
  setcounter(precounter=>precounter+1)
}

function RemoveValue()
{
  if(counter>0)
  {
    setcounter(counter-1)
  }
  else{
    alert("Value is Z ero")
    
  }
 
}
  return (
    <>
      <div>
        <h1>WelCome! Students</h1>
        <h3>Counter Value:{counter}</h3>
       <input type="button" value="Add Value" onClick={Addvalue} />
       <br /><br />
       <input type="button" value="Remove Value" onClick={RemoveValue}/>

      </div>
    </>
  )
}

export default App
