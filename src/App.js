import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react';

function App() {
  const [pass,setPass] = useState(true)
  const showPassword = () => {
    setPass(!pass)
    document.getElementById('password').type = (pass) ?   'text' :  'password';
  }
  function Authorizing(e){
    e.preventDefault();
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    console.log(email)
    console.log(password)
  }
  return (
    <div>
      <br /><br /><br /><br /><br /><br />
      <Container fluid="md">
        <Row className="justify-content-md-center"> 
          <Col md='6'>
            <form onSubmit={Authorizing}>
              <h3>Log in</h3>
              <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" id='email' placeholder="Enter email" />
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" id='password' placeholder="Enter password" />
              </div>
              <div className="form-group">
                  <div className="custom-control custom-checkbox">
                      <input onChange={showPassword} type="checkbox" className="custom-control-input" id="customCheck1" />
                      <label className="custom-control-label" htmlFor="customCheck1">Show Password</label>
                  </div>
              </div>
              <button type="submit"  className="btn btn-dark btn-lg btn-block">Sign in</button>
         
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default App;