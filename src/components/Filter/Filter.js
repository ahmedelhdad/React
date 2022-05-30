import React, {useState} from 'react'
import styles from '../Filter/Filter.module.css'
const Filter = ({filtertion}) => {
    const [Filter , setFilter] = useState()
    const valueFilter = function(e)
    {
        const name = e.target.value
        setFilter(name)  
        filtertion(name)      
    }
  return (
    <div className='test'>
    <input className={styles.test} placeholder='Test ref' onChange={valueFilter} ></input>
    </div>
  )
}
export default Filter;