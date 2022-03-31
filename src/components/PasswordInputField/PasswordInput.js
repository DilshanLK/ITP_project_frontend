import React from 'react';
import styles from './PasswordInput.module.css'

const PasswordInput = (props) => {
  return(
    <div>
      <label>{props.label}</label>
      <input onChange={(e) => props.onTextChange(e.target.value)} className={styles.textInput} type="password"/>
    </div>
  )
}

export default PasswordInput
