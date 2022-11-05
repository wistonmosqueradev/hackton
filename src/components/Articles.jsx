import React,{useEffect,useState} from 'react'
import'./Nuws.css'
const Articles = () => {
    const [consumiendoApi, setConsumiendoApi] = useState([]);

    const consumoApi = async () => {
      const response = await fetch(
        "https://pre-hackathon-jrsz.herokuapp.com/api/articles/"
      );
  
      const data = await response.json();
      setConsumiendoApi(data.articles);
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
            <p className="fecha">{mostrandoApi.createdAt}</p>
          </div>
        ))}
      </div>
    );
}

export default Articles