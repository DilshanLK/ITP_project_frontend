import React from 'react';
import Calender from '../../assets/images/calendar-icon-png-2.jpeg'

const CalenderInput = (props) => {
  return(
    <div style={{width: 200, borderRadius: 12,display: 'flex', alignItems: 'center',justifyContent: 'space-between', backgroundColor: 'white', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10}}>
      <div>{props.title}</div>
      <div><img style={{width: 25}} src={Calender} alt=""/></div>
    </div>
  )
}

export default CalenderInput
