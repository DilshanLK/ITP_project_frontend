import React from 'react';
import {Card, CardBody, Col, Container, Row} from 'reactstrap';
import styles from '../Login/Login.module.css';
import TextInput from '../../components/TextInputField/TextInput';

const CustomerMyProfile = () => {
  return(
    <div className="account-pages py-5 pt-sm-5" style={{ marginTop: 50}}>
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
                  <TextInput  label="Email"/>
                </div>
                <div className="pt-4">
                  <TextInput label="Name"/>
                </div>
                <div className="pt-4">
                  <TextInput label="Phone"/>
                </div>
                <div className="mt-4" style={{display: 'flex', flexDirection: 'column'}}>
                  <label>DOB</label>
                  <input type="date"/>
                </div>
                <div className='mt-4' style={{display:"flex", justifyContent: 'center'}}>
                  <button className="btn btn-primary">Edit info</button>
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
