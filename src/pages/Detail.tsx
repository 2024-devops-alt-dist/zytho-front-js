import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Beer } from "../entities";

function Detail() {
  const { id } = useParams();

  const [beer, setBeer] = useState<Beer>({id:0, name:"name", description:"description", abv:0, id_brewery:0, id_category:0});

  useEffect(() => {
    if(!id) {
      return;
    } 
    const fetchBeer  = async () => {
    const response = await fetch(
      `http://localhost:3000/api/v1/beers/${id}`
    );
    const res = await response.json();
    setBeer(res.data);
  };
    fetchBeer();
  }, [id]);

  return (
    
    <div className="w-full h-screen pt-3 bg-gray-800">
       <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12  bg-gray-900 rounded-lg shadow-lg">
       <div className="text-center pb-12">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
        {beer?.name}
      </h1>
      </div>
     
      <div className=" py-8 sm:py-6">
        <p className="text-xl text-white font-bold mb-2">Category : {beer?.category}</p> 
        <p className="text-xl text-white font-normal mb-2">{beer?.description}</p>
        <p className="text-base text-gray-400 font-normal  mb-2">{beer?.brewery}, country : {beer?.country}</p>
        <p className="text-base text-gray-200  mb-2">Abv : {beer?.abv}</p>
      </div>
      
      </section>
    </div>
  );
}

export default Detail;
