import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
import NavBar from './components/NavBar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar/>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
