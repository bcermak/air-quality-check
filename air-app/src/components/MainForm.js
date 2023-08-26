import Form from 'react-bootstrap/Form';
import '../css/MainForm.css';
import Axios from 'axios';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

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
  const [hum, setHum] = useState("")
  
  const fetchData = () => {
      Axios.get(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=621185cb-506f-4175-b71d-3a54e5e6b691`)
      .then( (res) => {  
      setResultCity(res.data.data.city);
      setResultState(res.data.data.state);
      setResultCountry(res.data.data.country);
      setTemp(res.data.data.current.weather.tp);
      setAqi(res.data.data.current.pollution.aqius);
      setHum(res.data.data.current.weather.hu)
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
        <Form.Group className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="State" onChange={(event) => {setState(event.target.value)}} />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Country" onChange={(event) => {setCountry(event.target.value)}} />
        </Form.Group>
    </Form>
         
      <Button className="primary" onClick={fetchData}>
          Generate Data
      </Button>

      <h5 style={{display: resultCity ? '' : 'none'}}> Data for {resultCity} {resultState} {resultCountry} </h5>
      <ul style={{display: temp ? '' : 'none'}}> Temp: {temp}° C</ul>
      <ul style={{display: hum ? '' : 'none'}}> Humidity: {hum}%</ul>
      <ul style={{display: aqi ? '' : 'none'}}> AQI: {aqi} </ul>
    </>
        
  );
}

export default MainForm;