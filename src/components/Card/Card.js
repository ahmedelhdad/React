import React from 'react'
import styles from './Card.module.css'

const Card = ({name , addrees, age, type,deleteFun , id}) => {
  return (
    <div className={styles.cardWrapper}
         style = {{backgroundColor: type === "boy"?"red" :"pink"}}>
           <div>Name : {name}</div>
           <div>Age : {age}</div>
           <div>Addrees : {addrees}</div>
           <div className={styles.deletedBtn} onClick = {(event) => deleteFun(event , id)}
           >X</div>
        </div>
  )
}

export default Card;