import React, {useState} from "react";
import { Film } from "../Component/Film";
import { Search } from "../Component/Search";
import filmsData from "../data/films.json";


const Home = () => {
    const [films,setFilms] = useState(filmsData);

    const [searchFilm, setSearchFilm] = useState('');

    const userSearch = e => {
        setSearchFilm(e.target.value);
    };

    const filteredFilms = films.filter(film =>
        film.title.toLowerCase().includes(searchFilm.toLowerCase())
    );

    const noFilmsFound = filteredFilms.length === 0;
  return (
    <>
      <h1 className="text-center my-3 text-info">Bienvenue à notre platforme de films </h1>
      <div className="container my-5">
        <div className="row">
          <Search value={searchFilm} onChange={userSearch}/>
        </div>
        <div className="row">
          { 
            noFilmsFound ? ( <p className="fw-bold fs-5 mt-3 text-center text-white">Aucun film ne correspond à votre recherche.</p>) : 
            (
              filteredFilms.map((film,key)=>{
                return <Film key={key} title={film.title} price={film.price} duration={film.duration} description={film.description} image={film.image}/>
              })
            )
          }
        </div>
      </div>
      
  
  </>
  )
}
export default Home;
