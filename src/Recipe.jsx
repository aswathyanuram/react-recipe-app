import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Recipe() {
  const [data, setData] = useState({
    id: "",
    name: "",
    ingredients: [],
    instructions: [],
  });

  let { recipeId } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipe/${recipeId}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error Occurred");
      });
  }, []);

  return (
    <div>
      <div>{data?.name}</div>
      <div>{data?.ingredients}</div>
      <div>{data?.instructions}</div>
    </div>
  );
}
