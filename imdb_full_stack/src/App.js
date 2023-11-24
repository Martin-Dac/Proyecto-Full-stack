import './App.css';
import React, { useState } from 'react';
import { InputPeli } from './components/InputPeli';
import { Peliculas } from './components/Peliculas';

function App() {
  const [datosFetch, setDatosFetch] = useState(null);

  const handleFetchSuccess = (data) => {
    console.log(data)
    setDatosFetch(data);
  };
  
  return (
    <div className="App">
      <InputPeli onFetchSuccess={handleFetchSuccess}/>
      {datosFetch && datosFetch.length>0 &&<Peliculas peliculas={datosFetch} />}
    </div>
  );
}

export default App;
