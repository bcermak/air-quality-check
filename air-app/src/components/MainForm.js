import Form from 'react-bootstrap/Form';
import '../css/MainForm.css';
import Axios from 'axios';
import { useState } from 'react';

function MainForm() {

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [resultCity, setResultCity] = useState("");
  const [resultState, setResultState] = useState("");
  const [resultCountry, setResultCountry] = useState("");
  
  const fetchData = () => {
      Axios.get(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=621185cb-506f-4175-b71d-3a54e5e6b691`)
      .then( (res) => {  
      setResultCity(res.data.data.city);
      setResultState(res.data.data.state);
      setResultCountry(res.data.data.country)
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

      <p> Data for {resultCity} {resultState} {resultCountry} </p>
      <p></p>
      <p></p>
    </>
        
  );
}

export default MainForm;