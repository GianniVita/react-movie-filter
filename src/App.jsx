import React, { useState, useEffect} from 'react';

const initialMovies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {
    const [count,setCount] = useState(0);



return (
<>
<div className='container'>
  <h1>Lista dei Film 🍿</h1>
  <ul>
    <li>{initialMovies}</li>
  </ul>

</div>




</>



);

}



export default function App(){

  return <initialMovies title={title.id} />


}
