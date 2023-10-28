import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [value, setValue] = useState(10); 
  const [con1, setCon1] = useState('USD'); 
  const [con2, setCon2] = useState('CHF'); 
  const [display, setDisplay] = useState(0); 

  const handleValue = (e) => { 
    setValue(e.target.value); 
  }

  const handleCon1 = (e) => { 
    setCon1(e.target.value); 
  }
  const handleCon2 = (e) => { 
    setCon2(e.target.value); 
  }
  useEffect(() => {   
    async function getData() { 
      let convertedValue = 0; 
      if(con1 !== con2) { 
        const response = await axios.get(`https://api.frankfurter.app/latest?amount=${value}&from=${con1}&to=${con2}`); 
        convertedValue = response.data.rates[con2]; 
        setDisplay(convertedValue); 
      }else{
        setDisplay(value); 
      }
    }
    getData(); 
  },[value,con1,con2])
  return (
    <div className="App">
        <h2>Currency Converter</h2>
        <input input="number" value={value} onChange={handleValue} /> 
        <select value={con1} onChange={handleCon1} >
          <option value="USD">USD</option>
          <option value="MXN">MXN</option>
          <option value="CHF">CHF</option>
          <option value="INR">INR</option>
        </select>
        <select value={con2} onChange={handleCon2}>
          <option value="USD">USD</option>
          <option value="MXN">MXN</option>
          <option value="CHF">CHF</option>
          <option value="INR">INR</option>
        </select>
        <h2>{display}</h2>
    </div>
  );
}

export default App;
