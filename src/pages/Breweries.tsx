import { useEffect, useState } from "react";
import { Brewery } from "../entities";

function Breweries() {

    const [breweries, setBreweries] = useState<Brewery[]>();

  useEffect(() => {
    const fetchBeers  = async () => {
    const response = await fetch(
      `http://localhost:3000/api/v1/breweries`
    );
    const res = await response.json();
    setBreweries(res.data);
  };
    fetchBeers();
  }, []);

    return (
<div className="w-full bg-gray-800">
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
            <h2 className="text-base font-bold text-yellow-300 ">
                Enter our breweries database
            </h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                Discover all breweries            
            </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {breweries && breweries.map((brewery) =>
        <div key={brewery.id} className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div>
                    <img className="object-center object-cover h-auto w-full" src="https://images.unsplash.com/photo-1532634733-cae1395e440f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="photo" />
                </div>
                <div className="text-center py-8 sm:py-6">
                    <p className="text-xl text-white font-bold mb-2">{brewery.name}</p>
                    <p className="text-base text-gray-400 font-normal">{brewery.country}</p>
                </div>
            </div>)}
    </div>
</section>
</div>

    )
    }
  
  export default Breweries;