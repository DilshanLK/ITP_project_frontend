import React from 'react';
import {Card, CardBody, Col, Container, Row} from 'reactstrap';
import styles from './Login/Login.module.css';
import TextInput from '../components/TextInputField/TextInput';
import {Link} from 'react-router-dom';

const LandingPage = () => {
  return(
    <div>
      <h1>Landing page</h1>
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card style={{ padding: 50 }} className="overflow-hidden">
                <CardBody className={`${styles.login_card_wrapper}`}>
                  <div className='mt-4' style={{display:"flex", justifyContent: 'center'}}>
                    <Link to='/login' className="btn btn-primary">Login</Link>
                    <div style={{marginLeft: 12}}>
                      <Link to='/register' className="btn btn-danger">Register</Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default LandingPage
