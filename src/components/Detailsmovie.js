import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
import movies from "./Data"
import './style.css'

const Detailsmovies = () =>{
  let {id}=useParams()
  
  // Find the movie based on the id of pur movie
  const movie = movies.find((movie) => movie.id === parseInt(id));
    return (
    <div className="details">
    <iframe frameborder="0" width="320" height="315" title="trailor"
    src={movie.trailer}>
    </iframe>
    <h3 className='title'>{movie.title}</h3>
    <h4 className='desc'>description : {movie.description}</h4>
    <h4> rate  {movie.rate}/10</h4>
    <Link to="/"> Back to Home Page </Link>
    </div>
    )
}
export default Detailsmovies;