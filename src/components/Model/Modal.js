import React,{Fragment} from 'react'
import ReactDom from "react-dom";
import styles from './Modal.module.css'
import Adduser from '../Adduser/Adduser'





const Modal = ({show , setShowModel,addNewUserHandler}) => {



    const BackDrop = () => {
        return <div className={`${styles.backDrop} ${show ? styles.show : ""}`} onClick={() => setShowModel(false) } ></div>
    }
    const Overlay = function()
    {
        return <div className={`${styles.overlay}`}>
             <Adduser addNewUserHandler={addNewUserHandler} setShowModel={setShowModel}/>
        </div>
    }

  return (
   show&&
    <Fragment>
    
        {
            ReactDom.createPortal(
                <Fragment>
                <BackDrop/>
                <Overlay/>
                </Fragment>,
                document.getElementById('model')
            )
        }
    </Fragment>

  )
}

export default Modal