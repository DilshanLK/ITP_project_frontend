import React, {useEffect, useState} from 'react';
import {Card, CardBody, Col, Container, Row} from 'reactstrap';
import styles from '../Login/Login.module.css';
import TextInput from '../../components/TextInputField/TextInput';
import { useDispatch, useSelector } from "react-redux";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import {updateUserInfo, logout} from '../../redux/actions/userActions';
import {get, put} from '../../helpers/api_helper';
import history from '../../routes/history';
import MyProfileBGImage from '../../assets/images/hotels.jpeg'
import Background from '../../assets/images/home-background.jpeg';

const CustomerMyProfile = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [birthday, setBirthday] = useState('')

  const userState = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userState) {
      getUser()
    }
  }, [])

  console.log('user', userState)

  const getUser = async () => {
    let res = await get(`/user/${userState._id}`)
    console.log('res', res)
     if (!res.error) {
       setEmail(res.data.email)
       setName(res.data.name)
       setPhone(res.data.phone)
       setBirthday(res.data.birthday)
       setAddress(res.data.address)
     }
  }

  const handleEditButtonClick = () => {
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

    let payload = {
      name,
      phone,
      address,
      birthday
    }

    try {
      let res = put(`/user/${userState._id}`, payload)

      if (!res.error) {
        history.push("/home-customer");

        return toastr.success("Info updated successfully!", "Success!");
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleAccountDeleteButtonClick = () => {
    let payload = {
      ...userState,
      isDeleted: true
    }

    try {
      let res = put(`/user/${userState._id}`, payload)

      history.push("/login");
    } catch (e) {
      console.log(e)
    }
  }

  const handleLogoutButtonClick = () => {
    dispatch(logout());
  }

  return(
    <div style={{backgroundImage: `url(${MyProfileBGImage})`, paddingTop: 50}} className="account-pages py-5 pt-sm-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <Card style={{ padding: 50 }} className="overflow-hidden">
              <div style={{fontSize: 24, textAlign: 'center'}}>My profile Info</div>
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
                  <TextInput disabled={true} value={email} label="Email"/>
                </div>
                <div className="pt-4">
                  <TextInput onTextChange={(value) => setName(value)} value={name} label="Name"/>
                </div>
                <div className="pt-4">
                  <TextInput onTextChange={(value) => setPhone(value)} value={phone} label="Phone"/>
                </div>
                <div className="pt-4">
                  <TextInput onTextChange={(value) => setAddress(value)} value={address} label="Address"/>
                </div>
                <div className="mt-4" style={{display: 'flex', flexDirection: 'column'}}>
                  <label>DOB</label>
                  <input onChange={(e) => setBirthday(e.target.value)} value={birthday} type="date"/>
                </div>
                <div className='mt-4' style={{display:"flex", justifyContent: 'center'}}>
                  <button onClick={() => handleEditButtonClick()} className="btn btn-primary">Edit info</button>
                  <div style={{marginLeft: 12}}>
                    <button onClick={() => handleAccountDeleteButtonClick()} className="btn btn-danger">Delete</button>
                  </div>
                  <div style={{marginLeft: 12}}>
                    <button onClick={() => handleLogoutButtonClick()} className="btn btn-warning">Log out</button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CustomerMyProfile
