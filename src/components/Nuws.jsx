import React from "react";
import "../components/Nuws.css";
import { useEffect, useState } from "react";

const Nuws = () => {
  const [consumiendoApi, setConsumiendoApi] = useState([]);

  const consumoApi = async () => {
    const response = await fetch(
      "https://pre-hackathon-jrsz.herokuapp.com/api/novelties/"
    );

    const data = await response.json();
    setConsumiendoApi(data.novelties);
  };

  useEffect(() => {
    consumoApi();
  }, []);
  return (
    <div id="noticias" className="contenedorgeneral">
      {consumiendoApi.map((mostrandoApi, index) => (
        <div className="noticia" key={index}>
          <img
            className="imagen"
            src="https://cdn.pixabay.com/photo/2017/07/31/11/44/laptop-2557576__340.jpg"
          />
          <h1 className="titulo">{mostrandoApi.title}</h1>
          <p className="descri">{mostrandoApi.description}</p>
        
        </div>
      ))}
    </div>
  );
};

export default Nuws;
