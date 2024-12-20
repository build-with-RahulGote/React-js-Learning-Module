import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Register from "./Components/Register"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Register/>
  </StrictMode>,
)
