import React from 'react';
import Background from '../../../assets/images/home-background.jpeg'
import CalenderInput from '../../../components/CalenderInput/CalenderInput';

const CustomerHomePage = () => {
  return(
    <div style={{backgroundImage: `url(${Background})`,height: '100vh', backgroundPosition: 'center'}}>
      <div style={{width: 500, paddingTop: 100, paddingLeft: 50}}>
        <h1 style={{color: 'white', fontWeight: 600, fontSize: 60}}>
          Welcome to Sri Booking!
        </h1>
        <div>
          <div style={{backgroundColor: 'white', padding: 6, borderRadius: 12, textAlign: 'center'}}>
            Where are you going
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: 16}}>
            <div>
              <CalenderInput title='Arrival'/>
            </div>
            <div>
              <CalenderInput title='Departure'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerHomePage
