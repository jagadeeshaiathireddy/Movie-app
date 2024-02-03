import {Link} from 'react-router-dom'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {id, backdropPath, title} = movieDetails
  return (
    <Link to={`/movies/${id}`}>
      <img
        // eslint-disable-next-line react/no-unknown-property
        testid="movieItem"
        className="movie-image"
        src={backdropPath}
        alt={title}
      />
    </Link>
  )
}

export default MovieItem
