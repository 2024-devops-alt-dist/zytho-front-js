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
      <h1>Détails de la bière {id}</h1>
      <p>{beer?.name}</p>
      <p>{beer?.description}</p>
      <p>{beer?.abv}</p>
    </div>
  );
}

export default Detail;

/* function Detail() {
  const { id } = useParams();

  const [todo, setTodo] = useState({});

  const fetchTodo = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const data = await response.json();
    setTodo(data);
  };

  useEffect(() => {
    fetchTodo();
  }, [id]);

  return (
    <div>
      <h1>Détails de la tâche {id}</h1>
      <p>{todo.title}</p>
      <p>{todo.userId}</p>
    </div>
  );
}

export default Detail; */