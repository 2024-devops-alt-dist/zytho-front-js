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
    <div>
      <img src="https://plus.unsplash.com/premium_photo-1725075086810-37e14268e5ec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <h1>Détails de la bière {id}</h1>
      <p>{beer?.name}</p>
      <p>{beer?.description}</p>
      <p>{beer?.abv}</p>
    </div>
  );
}

export default Detail;
