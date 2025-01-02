import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from "./components/Navbar";
import "./assets/css/globals.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
  </StrictMode>
)
