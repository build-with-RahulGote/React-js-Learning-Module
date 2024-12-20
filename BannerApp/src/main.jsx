import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
     <ul>
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Services</a></li>
      <li><a href="">Placement</a></li>
      <li><a href="">Contact Us</a></li>
     </ul>

     <div className="banner" >
    
     </div >

     <div className='coursecontainer'>
       <div className='java'>
        <h1>JavaFullstack</h1>
      
       </div>

       <div className='dotnet'>
        <h1>Dot net</h1>
       </div>

       <div className='python'>
        <h1>Python</h1>
       </div>
     </div>

    </>
  </StrictMode>,
)
