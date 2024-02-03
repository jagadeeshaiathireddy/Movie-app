import './index.css'

const SimilarMovieItem = props => {
  const {similarMovieDetails} = props
  const {posterPath, title} = similarMovieDetails
  return (
    <img
      // eslint-disable-next-line react/no-unknown-property
      testid="movieItem"
      alt={title}
      className="similar-movie-image"
      src={posterPath}
    />
  )
}

export default SimilarMovieItem
