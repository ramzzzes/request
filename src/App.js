import logo from './logo.svg';
import './App.css';
import { useEffect, useState,useMemo, useRef} from 'react';
import axios from 'axios';

 
function App() {

  const [movies,setMovies] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')
  const [movie,setMovie] = useState({})
  const [value,setValue] = useState()

  const fetchMedicamets = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`https://swapi.dev/api/planets/${value}`);
      setMovie(response.data);
      
    } catch (error) {
      alert(error?.message);
    } finally {
      setLoading(false)
    }


    // try {
    //   const response = await axios.get(
    //     'https://swapi.dev/api/planets'
    //     );
    //    setMovies(response.data.results);
    // } catch (error) {
    //   console.log(error.response)
    // // alert(error?.message);
    // }

    // setLoading(false)


   
  

    // axios.get('https://swapi.dev/api/planets')
    //   .then(function (response) {
    //     setMovies(response.data.results);
    //   })
    //   .catch(function (error) {
    //     setError('we could not receive data : ' + error.message)
    //   })
    //   .finally(function () {
    //     setLoading(false)
    //   });

    // const response = await fetch('https://swapi.dev/api/planets');
    // const moviesData = await response.json();
    // setMovies(moviesData.results)
    // setLoading(false)

    // fetch('https://swapi.dev/api/planets')
    // .then(response => { // it returns PROMISE
    //     return response.json()
    // })
    // .then(data => {
    //   setMovies(data.results)
    //   setLoading(false)
    // })
  }


  return (
      <div>
        <p>{loading ? 'its loading' : movie?.climate}</p>

        <input placeholder='type id' onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => fetchMedicamets()}>get data</button>
        
      </div>
  );

}

export default App;
