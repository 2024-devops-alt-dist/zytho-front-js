import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Beer, Brewery } from "../entities";

function DetailBrewery() {
  const { id } = useParams();

  const [brewery, setBrewery] = useState<Brewery>({id:0, name:"name",country:"country"});

  useEffect(() => {
    if(!id) {
      return;
    } 
    const fetchBrewery  = async () => {
    const response = await fetch(
      `http://localhost:3000/api/v1/breweries/${id}`
    );
    const res = await response.json();
    setBrewery(res.data);
  };
    fetchBrewery();
  }, [id]);

  return (
    
    <div className="w-full h-screen pt-3 bg-gray-800">
       <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12  bg-gray-900 rounded-lg shadow-lg">
       <div className="text-center pb-12">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
        {brewery?.name}
      </h1>
      </div>
     
      <div className=" py-8 sm:py-6">
        <p className="text-xl text-white font-bold mb-2">Country : {brewery?.country}</p> 
        <p className="text-xl text-white font-normal mb-2">This is the description of the brewery. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus veniam quas enim eveniet qui, in a voluptatibus, necessitatibus ratione amet molestias, non delectus eos deserunt assumenda porro nemo! Aspernatur, temporibus.</p>
        
      </div>
      
      </section>
    </div>
  );
}

export default DetailBrewery;
