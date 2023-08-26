import Button from "react-bootstrap/esm/Button";
import '../css/SubmitButton.css'

function SubmitButton () {
    return (
        <div className="SubmitButton">
            <Button variant="primary" type="submit" onSubmit={console.log("clicked")}>
                Generate Data
            </Button>
        </div>
    );
}

export default SubmitButton;