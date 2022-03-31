import React,{useState} from 'react';
import {Card, CardBody, Col, Container, Row} from 'reactstrap';
import styles from '../Login/Login.module.css';
import TextInput from '../../components/TextInputField/TextInput';
import {Link} from 'react-router-dom';
import PasswordInput from '../../components/PasswordInputField/PasswordInput';
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import {post} from '../../helpers/api_helper';

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [birthday, setBirthday] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegisterButtonClick = async () => {
    if (!email) {
      return toastr.warning("Please enter your email!", "Warning!");
    }

    if (!name) {
      return toastr.warning("Please enter your name!", "Warning!");
    }

    if (!phone) {
      return toastr.warning("Please enter your phone number!", "Warning!");
    }

    if (!address) {
      return toastr.warning("Please enter your address!", "Warning!");
    }

    if (!birthday) {
      return toastr.warning("Please enter your birthday!", "Warning!");
    }

    if (!password) {
      return toastr.warning("Please enter your password!", "Warning!");
    }

    if (!confirmPassword) {
      return toastr.warning("Please enter your confirm password!", "Warning!");
    }

    if (password !== confirmPassword) {
      return toastr.warning("Your passwords don't match!", "Warning!");
    }

  //  API calls here

    try {
      const res = await post("user/signup", {
        email,
        name,
        phone,
        address,
        birthday,
        password,
      });
    } catch (e) {
      console.log(e)
    }

  }

  return(
    <div className="account-pages py-5 pt-sm-5" style={{ marginTop: 50}}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <Card style={{ padding: 50 }} className="overflow-hidden">
              <div style={{fontSize: 24, textAlign: 'center'}}>Register form</div>
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
                  <TextInput onTextChange={(e) => setEmail(e)} label="Email"/>
                </div>
                <div className="pt-4">
                  <TextInput onTextChange={(e) => setName(e)} label="Name"/>
                </div>
                <div className="pt-4">
                  <TextInput onTextChange={(e) => setPhone(e)} label="Phone"/>
                </div>
                <div className="pt-4">
                  <TextInput onTextChange={(e) => setAddress(e)} label="Address"/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}} className="pt-4">
                  <label>Birthday</label>
                  <input onChange={(e) => setBirthday(e.target.value)} type="date"/>
                </div>
                <div className="pt-4">
                  <PasswordInput onTextChange={(e) => setPassword(e)} label="Password"/>
                </div>
                <div className="pt-4">
                  <PasswordInput onTextChange={(e) => setConfirmPassword(e)} label="Confirm Password"/>
                </div>
                <div style={{fontSize: 10, textAlign: 'center', paddingTop: 12}}>I accept the terms and conditions and proceed with the registration process</div>
                <div className='mt-4' style={{display:"flex", justifyContent: 'center'}}>
                  <button onClick={() => handleRegisterButtonClick()} className="btn btn-primary">Login button</button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RegisterPage
