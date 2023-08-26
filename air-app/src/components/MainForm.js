import Form from 'react-bootstrap/Form';
import '../css/MainForm.css';
import Axios from 'axios';
import { useState } from 'react';

console.log(process.env.REACT_APP_API_KEY)

function MainForm() {

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [resultCity, setResultCity] = useState("");
  const [resultState, setResultState] = useState("");
  const [resultCountry, setResultCountry] = useState("");
  const [temp, setTemp] = useState("");
  const [aqi, setAqi] = useState("");
  
  const fetchData = () => {
      Axios.get(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${process.env.REACT_APP_API_KEY}`)
      .then( (res) => {  
      setResultCity(res.data.data.city);
      setResultState(res.data.data.state);
      setResultCountry(res.data.data.country);
      setTemp(res.data.data.current.weather.tp);
      setAqi(res.data.data.current.pollution.aqius);
      console.log(res.data.data);
      }
      ).catch((err)=> {
      console.log(err)
      });
    
  }
  
  return (
    <>
    <Form>
        <Form.Group className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="City" onChange={(event) => {setCity(event.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="State" onChange={(event) => {setState(event.target.value)}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Country" onChange={(event) => {setCountry(event.target.value)}} />
        </Form.Group>
    </Form>
         
      <button onClick={fetchData}>
          Generate Data
      </button>

      <h5> Data for {resultCity} {resultState} {resultCountry} </h5>
      <ul> Temp: {temp}° C</ul>
      <ul> AQI: {aqi} </ul>
    </>
        
  );
}

export default MainForm;