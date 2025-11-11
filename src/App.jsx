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

  <div className='container mt-5'>
      <form>




      </form>


  </div>




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
