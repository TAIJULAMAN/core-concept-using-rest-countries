import './App.css';
import {useEffect, useState} from "react";
function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries(){
  const [countries,setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>console.log(data))
    // .then(data => setCountries(data))
  },[])
return(
  <div>
<h1>TRAVEL WHOLE WORLD</h1>
{
  countries.map(country =><Country name ={country.name.common} population={country.population} capital={country.capital} region={country.region}></Country>)
}
  </div>
)
}
function Country (props){
  return(
    <div>
      <h1>Name:{props.name}</h1>
      <p>Population:{props.population}</p>
      <p>Capital:{props.capital}</p>
      <p>Region:{props.region}</p>
    </div>
  )
}

export default App;
