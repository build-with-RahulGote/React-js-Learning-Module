import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import NavBar from './components/NavBar'
import MainBanner from './components/MainBanner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <NavBar/>
   <MainBanner/>
  </StrictMode>,
)
