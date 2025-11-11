import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useState, useEffect } from 'react';

// Dati iniziali dei film
const initialMovies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function MovieFilterSimple() {
  // 1. Stato per i film che vengono visualizzati
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);
  
 
export default MovieFilterSimple;