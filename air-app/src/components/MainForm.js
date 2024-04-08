import Form from 'react-bootstrap/Form';
import '../css/MainForm.css';
import Axios from 'axios';
import { useState } from 'react';
import '../css/MainForm.css';

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
  const [hum, setHum] = useState("");

  const [selectedItem, setSelectedItem] = useState("")
  
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

      document.searchForm.reset();
    
  }

  return (
    <>
    <div className='container'>
      <div className="titleText">
          <h2>Welcome to AirCheck</h2>
          <p>Please enter location details below for the city whose air quality you want to check </p>
      </div>
      <Form name="searchForm">
          <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="City" onChange={(event) => {setCity(event.target.value)}}/>
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="State" onChange={(event) => {setState(event.target.value)}} />
          </Form.Group>
          <Form.Group className="mb-3">
          {/* <Form.Control type="text" placeholder="Country" onChange={(event) => {setCountry(event.target.value)}} /> */}
            <Form.Select placeholder="Country" value={selectedItem} onChange={(event) => {setSelectedItem(setCountry(event.target.value))}}>
            <option> Country</option>
            <option value="usa">USA</option>
            <option value="united kingdom">United Kingdom</option>
            <option value="canada">Canada</option>
            </Form.Select>
          </Form.Group>
      </Form>   
      <button className="generateBtn" onClick={fetchData}>
          Generate Data
      </button>
    </div>

    <div className='displayContainer' style={{display: resultCity ? '' : 'none'}}>
      <div className='displayData'>
        <h5 style={{display: resultCity ? '' : 'none'}}> Data for {resultCity}, {resultState}, {resultCountry}: </h5>
        <ul style={{display: temp ? '' : 'none'}}> Temp: {temp}° C</ul>
        <ul style={{display: hum ? '' : 'none'}}> Humidity: {hum}%</ul>
        <ul style={{display: aqi ? '' : 'none'}}> AQI: {aqi} </ul>
      </div>
    </div>
    </>
        
  );
}

export default MainForm;