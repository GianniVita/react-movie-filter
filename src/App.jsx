import React, { useState, useEffect } from 'react';

const initialMovies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function MovieFilterClean() {
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);
  const [selectedGenre, setSelectedGenre] = useState('');

  const genres = [...new Set(initialMovies.map(movie => movie.genre))];

  useEffect(() => {
    if (!selectedGenre) {
      setFilteredMovies(initialMovies);
      return;
    }

    const newFilteredMovies = initialMovies.filter(
      movie => movie.genre === selectedGenre
    );

    setFilteredMovies(newFilteredMovies);
  }, [selectedGenre]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista Film 🍿</h1>

      <div className="mb-3">
        <label htmlFor="genre-select" className="form-label">Filtra per Genere:</label>
        <select
          id="genre-select"
          className="form-select w-auto"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">Tutti i Generi</option>

          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <hr />

      <h2 className="mt-4">Risultati ({filteredMovies.length})</h2>

      <ul className="list-group">
        {filteredMovies.map((movie, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <strong>{movie.title}</strong>
            <span className="badge bg-primary rounded-pill">{movie.genre}</span>
          </li>
        ))}
      </ul>

      {filteredMovies.length === 0 && (
        <p className="mt-3 text-warning">Nessun film trovato per il genere selezionato.</p>
      )}
    </div>
  );
}

export default MovieFilterClean;