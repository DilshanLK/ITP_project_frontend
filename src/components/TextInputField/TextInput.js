import React from 'react';
import styles from './TextInput.module.css'

const TextInput = (props) => {
  return(
    <div>
      <label>{props.label}</label>
      <input disabled={props.disabled} value={props.value} onChange={(e) => props.onTextChange(e.target.value)} className={styles.input_box} type="text"/>
    </div>
  )
}

export default TextInput
