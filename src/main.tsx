import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./home.tsx"
import About from './about.tsx'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)