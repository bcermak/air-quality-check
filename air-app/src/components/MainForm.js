import Form from 'react-bootstrap/Form';
import '../css/MainForm.css';

function MainForm() {
  return (
    <Form>
        <div className="MainForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Where do you want to go?</Form.Label>
        <Form.Control type="email" placeholder="Enter city" />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>What day?</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
        </div>
    </Form>
  );
}

export default MainForm;