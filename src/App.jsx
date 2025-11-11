import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Dati iniziali dei film

const initialMovies = [

  { id: 1, title: 'Inception', genre: 'Fantascienza' },
  { id: 2, title: 'Il Padrino', genre: 'Thriller' },
  { id: 3, title: 'Titanic', genre: 'Romantico' },
  { id: 4, title: 'Batman', genre: 'Azione' },
  { id: 5, title: 'Interstellar', genre: 'Fantascienza' },
  { id: 6, title: 'Pulp Fiction', genre: 'Thriller' },
];

function MovieFilter() {

const [filteredMovies, setFilteredMovies] = useState(initialMovies);

return (
      <>
  <div className="container mt-5">
    <h1 className="mb-4">Lista Film 🍿</h1>

    {/* Controlli di Filtro */}
    <div className="mb-3">
      <label htmlFor="genre-select" className="form-label">Filtra per Genere:</label>
      <select
        id="genre-select"
        className="form-select w-auto" // Aggiunge classi Bootstrap per lo stile
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        >
        {/* Opzione per mostrare tutti i film */}
        <option value="">Tutti i Generi</option>

        {/* Mappa i generi disponibili */}
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    </div>

    <hr />

  </div>
      </>
)




}






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    </>
  )
}

export default MovieFilter
