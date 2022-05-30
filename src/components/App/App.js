import React , {useState} from 'react'
import styles from './App.module.css'
import CardList from '../CardList/CardList'
import Filter from '../Filter/Filter'
import Modal from '../Model/Modal'
import Button from '../Layet/Button'
import'./App.css'



const App = () => {
  const [cardToggle ,setCardToggle ] = useState(false)
  const [showModel,setShowModel] = useState(false)
  const [filter , setFilter] = useState("")
  const [state , setState ] = useState([
    {
      id : 10000,
      name : "Ahmed",
      age : 21 , 
      addrees : "Fayoum",
      type : "boy"
    },
    {
      id : 2000,
      name : "farah",
      age : 22 , 
      addrees : "Alex",
      type : "girl"
    },
    {
      id : 3000,
      name : "Sayed",
      age : 24 , 
      addrees : "Cairo",
      type : "boy"
    },
    {
      id : 4000,
      name : "mariem",
      age : 24 , 
      addrees : "Cairo",
      type : "girl"
    }
  ]);
  
 
 const deletHinder = function(e , selectId)
 {
  setState(function(e) {
    return e.filter((el) => el.id !== selectId)
  })
 }
  const filterNames = function(name)
  {
      setFilter(name)
  }
  const namesHandker = function()
  {    
    if(filter.length > 0)
    {
      return state.filter((el) => el.name.includes(filter))
    }
    return state;
    
  }
  const newRecord = function(e)
  {
    setShowModel(!showModel)   
  }
  const addNewUserHandler = function(data)
  {
    console.log(data)
    setState((prevState) => setState([...prevState , data]))
  }
  return (
        
        <div className={styles.mainContainer}>
        <Modal show ={showModel} setShowModel = {setShowModel} addNewUserHandler={addNewUserHandler}/>
        <h1>List of Data</h1>
        <div>
        <Button showAndHidenNames={() => setCardToggle(!cardToggle)}>
            {cardToggle? "hidenNames": "showNames"}
        </Button>
        <button className='button' onClick={newRecord}>New Record</button>
        </div>
        <div className={cardToggle? 'show':'hiden'}>       
        <Filter filtertion= {filterNames}/>
        <CardList namesList ={namesHandker()} type = "boy" deleteFun= {deletHinder}/>
        </div>
        </div>
  )
}
export default App;