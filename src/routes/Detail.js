import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movie);
        setLoading(false);
      });
  });
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Movie
            key={movies.id}
            id={movies.id}
            coverImg={movies.medium_cover_image}
            title={movies.title}
            summary={movies.summary}
            genres={movies.genres}
            description={movies.description_full}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
