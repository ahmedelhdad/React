import React from 'react'
import styles from '../Layet/From.module.css'


const From = (props) => {
  return (
    <form onSubmit={props.onSubmit}>{props.children}</form>
    
  )
}
const Controller = (props) => {
  return (
      
    <div className={styles.control}>{props.children}</div>
  )
}
From.Controller = Controller

export default From;