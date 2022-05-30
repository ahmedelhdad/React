import React from 'react'
import styles from '../Layet/From.module.css'



const Button = (props) => {    
  return (
     
    <button className={styles.button} onClick={props.showAndHidenNames} type={`${props.type ? props.type :""}`}>
        {props.children}
    </button>
  )
}

export default Button

