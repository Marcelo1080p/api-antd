import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Details.css"

const Details = () => {
  const [perso, setPerso] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => setPerso(res.data));
  }, [id]);

  const cores = (status) =>
    status === "Alive" ? "green" : status === "Dead" ? "red" : "gray";

  return (
    <div className="container">
        <img className="imagem" src={perso.image} alt={perso.name}/>
        <section className="informations">
            <h3>{perso.name}</h3>
            <div className="dados">
                <p style={{color: cores(perso.status)}}>{perso.status}</p>
                -
                <p>{perso.species}</p>
            </div>
        </section>
    </div>
  );
};

export default Details;