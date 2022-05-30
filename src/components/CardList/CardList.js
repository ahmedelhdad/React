import React from 'react'
import Card from "../Card/Card"


const CardList = ({namesList , deleteFun}) => {
  const cards =namesList.map(({id , ...otherProps}) => (
    <Card key={id} deleteFun={deleteFun} {...otherProps} id ={id}/>
  ))

  return (
    <div>{cards}</div>
  )
}

export default CardList