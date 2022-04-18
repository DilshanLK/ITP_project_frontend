import React, {useState} from 'react'
import {Button, Card, CardBody, Col, Container, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import TextInput from '../../components/TextInputField/TextInput';
import styles from './Login.module.css'
import { login } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSignIn = () => {
    if (!email.length) {
      return toastr.error("Please enter your email!", "Error!");
    }

    if (!password.length) {
      return toastr.error("Please enter your password!", "Error!");
    }

    dispatch(login(email, password));
  };

  return(
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages py-5 pt-sm-5" style={{ marginTop: 50}}>
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card style={{ padding: 50 }} className="overflow-hidden">
                <div style={{fontSize: 24, textAlign: 'center'}}>Login form</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: 30,
                  }}
                >
                  {/*<img style={{ width: 200 }} src={Logo} alt="" />*/}
                </div>
                <CardBody className={`${styles.login_card_wrapper}`}>
                  <div>
                    <TextInput onTextChange={(value) => setEmail(value)} label="Email"/>
                  </div>
                  <div className="pt-4">
                    <TextInput onTextChange={(value) => setPassword(value)} label="Password"/>
                  </div>
                  <div className='mt-4' style={{display:"flex", justifyContent: 'center'}}>
                    <button onClick={() => handleSignIn()} className="btn btn-primary">Login button</button>
                  </div>
                  <div style={{paddingTop:12}}>
                    <Link to='/register'>If you haven't account, please signup here</Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Login
