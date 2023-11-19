import { Link } from 'react-router-dom';
import './style.css'
const Movie =({id,title,description,rate,imgUrl,handleDelete})=>{
    return(
<div className="movieCard" >
    
    <Link to={`Movie/${id}/`}> 
    <img src={imgUrl} className='imgs' alt='pho'/>
    <h3 className='title'>{title}</h3>
    <h4 className='desc'>description : {description}</h4>
    <h4> rate  {rate}/10</h4>

    </Link>
    <button className='remove' onClick={handleDelete}> Remove from list </button>
</div>
    )
}
export default Movie;