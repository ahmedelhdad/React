import React ,{useState} from 'react'
import Button from '../Layet/Button';
import From from '../Layet/From'
import style from './Adduse.module.css'




const Adduser = ({addNewUserHandler,setShowModel}) => {
  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const [addrees,setAddrees] = useState('')   
  const [type,setType] = useState('')   
  
    const onSubmitHandler = function(event)
    {
      event.preventDefault()
      addNewUserHandler({
        id : Math.floor(Math.random() * 100),
        name ,
        age , 
        addrees,
        type,
      })
      setShowModel(false)
    }
    

  return (
    <form onSubmit={onSubmitHandler}>
    <From.Controller>
    <label htmlFor='name'>Name</label>
    <input type='text' id='name'  placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
    </From.Controller>

    <From.Controller>
    <label htmlFor='age'>Age</label>
    <input type='text' id='age'  placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)}/>
    </From.Controller>

    <From.Controller>
    <label htmlFor='addrees'>Addrees</label>
    <input type='text' id='addrees'  placeholder='Enter Addrees' value={addrees} onChange={(e) => setAddrees(e.target.value)}/>
    </From.Controller>

    <From.Controller>
    <label htmlFor='type'>Type</label>
    <input type='text' id='type'  placeholder='Enter Type' value={type} onChange={(e) => setType(e.target.value)}/>
    </From.Controller>

    <div className={style.allSaRe}>
        <Button type='submit'>submit</Button>
        <Button type='rest'>Rest</Button>
    </div>

    </form>
  )
}

export default Adduser