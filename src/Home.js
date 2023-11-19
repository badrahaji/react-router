// items we imported for our app component
import { useState } from "react";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import './components/style.css'
import data from './components/Data'
function Home() {
  // our movies objects data 
let  [movies,setMovies] = useState(data)
// delete movie function 
 const handleDelete = (id) =>{
   const index = movies.findIndex((element)=>{
  return element.id===id
})
console.log(index)
// movies.slice(index,1)
 }
//  declaration des variable pour preparer pour filter 
const [titleFiltre, setTitleFiltre] = useState("");
  const [rateFiltre, setRateFiltre] = useState(0);

const handleTitleChange = (event) => {
  setTitleFiltre(event.target.value);
};

const handleRateChange = (event) => {
  setRateFiltre(event.target.value);
};
// filter dans une nouveau tableau 
const moviesFiltres = movies.filter(
  (film) =>
    film.title.toLowerCase().includes(titleFiltre.toLowerCase()) &&
    film.rate >= rateFiltre
);
// function addmovie using spread method to push the new movie to our movie list
const handleAddMovie = (newMovie)=>{
  setMovies([newMovie,...movies])
}
  return (
    <div className="App">
      <div className="filter">
      <h1> welcome to My Movie Store </h1> 

      </div> 
{/* filter composant que contient les input de filter */}
     
      <Filter  handleTitleChange={handleTitleChange} handleRateChange={handleRateChange} />
     {/* addmovie composant que contient les input pour l'ajoute d'un nouveau movie */}
      <AddMovie handleAddMovie={handleAddMovie}/>
      {/* movie list contient notre movie list  */}
      <MovieList movies={moviesFiltres} handleDelete={handleDelete} />
     
         </div>
  ); 
 }
export default Home;