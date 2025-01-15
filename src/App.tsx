import "./App.css";
import Home from "./pages/home.tsx"
import About from './pages/about.tsx'
import Detail from './pages/Detail.tsx'
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;