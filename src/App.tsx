import "./App.css";
import Home from "./pages/home.tsx"
import About from './pages/about.tsx'
import Detail from './pages/Detail.tsx'
import { Routes, Route } from "react-router";
import Beers from "./pages/Beers.tsx";
import Breweries from "./pages/Breweries.tsx";
import DetailBrewery from "./pages/DetailBrewery.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/beers/:id" element={<Detail />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/breweries" element={<Breweries />} />
        <Route path="/breweries/:id" element={<DetailBrewery />} />


      </Routes>
    </>
  );
}

export default App;