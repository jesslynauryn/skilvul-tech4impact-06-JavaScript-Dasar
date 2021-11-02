import MovieCard from "../components/MovieCard";
import MovieListFilter from "../components/MovieListFilter";
import { useLocation } from "react-router-dom";
import movies from "../dummy-data";
import qs from "qs";

const MovieList = () => {
  const shows = [10, 20, 30];
  const categories = ["TV", "Movie"];
  const fields = ["title", "score"];

  // Variable yang akan menampung parameter yang telah diberikan oleh user
  const location = useLocation();
  const params = qs.parse(location.search);

  // Variable yang kita gunakan untuk melakukan penyaringan data
  const filter = {
    show: shows[0] || params.show,
    category: categories[0] || params.category,
    sort: fields[0] || params.sort
  };

  // Variable yang akan menyimpan data-data yang sudah difilter menggunakan variable filter diatas
  const filteredMovies = movies
    .filter((i) => i.type === filter.category)
    .sort(
      filter.sort === "title"
        ? (a, b) => (a[filter.sort] > b[filter.sort] ? 1 : -1)
        : (a, b) => (a[filter.sort] > b[filter.sort] ? -1 : 1)
    )
    .slice(0, filter.show);

  return (
    <div className="row">
      <MovieListFilter />
      {filteredMovies.map((movie) => (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={movie.mal_id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
