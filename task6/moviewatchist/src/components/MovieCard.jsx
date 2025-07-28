
export default function MovieCard({ movie, onSave, isSaved }) {
  const { name, image, summary } = movie.show;

  return (
    <div className="movie-card">
      <img src={image?.medium} alt={name} className="movie-image" />
      <div className="movie-details">
        <h3 className="movie-title">{name}</h3>
        <p
          className="movie-summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        ></p>
        {!isSaved && (
          <button className="add-button" onClick={() => onSave(movie)}>
            Add to Watchlist
          </button>
        )}
      </div>
    </div>
  );
}
