import "./App.css";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import Button from "react-bootstrap/Button";
function Form() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" className="image"></MDBCol>
        <MDBCol md="6">
          <form>
            <p className="text_style h5 text-center mb-4">Login</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
            </div>
            <div className="text-center">
              <Button variant="danger">Login</Button>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Form;
