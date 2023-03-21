import React, { useState } from 'react'

import { Button } from 'react-bootstrap'; 
import Modal from 'react-bootstrap/Modal';


const CreateNote = ({modals,toggle, save}) => {
    const [note, setNoteName] = useState('')
    const [description, setDescription] = useState('')

    // default parameter event(e)
    const onHandleChanged = (e) =>{
        // const name = e.target.name
        // const value = e.target.value

        //targeting the user input values
        const {name, value} = e.target
        if(name === "noteName"){
            setNoteName(value)
        }else{
            setDescription(value)
        }

    }
    //method to saved note
    const handleSaved = () =>{
        let taskObj = {}
        taskObj["Name"] = note;
        taskObj["Description"] = description;
        taskObj["Today"] = getTodayDate();
        save(taskObj)
    }


   
   
  return (
        //Modal 
        <Modal
                isOpen={modals}
                show={modals}
                backdrop="static"
                keyboard={false}
                toggle = {toggle}
                    >
                        
                        <Modal.Header >
                            <Modal.Title >Create New Note</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='form-group'>
                                <h4>Note Title</h4>
                                <input placeholder='Enter title' className='input-group inputEdit' name="noteName" autocomplete="off" value={note} onChange={onHandleChanged} required />
                            </div>
                            <div className='form-group'>
                                <h4>Description</h4>
                                <textarea rows="5" placeholder='Text goes here...' className='input-group inputEdit' name="noteDescription" value={description} onChange={onHandleChanged} required />
                            </div>
                        
                        </Modal.Body>
                        <Modal.Footer >
                            <Button variant="danger" onClick={toggle}>
                                Close
                            </Button>
                            <Button type='button' variant="primary" onClick={handleSaved}>Create</Button>
                        </Modal.Footer>
        </Modal>

  )
}


//this method will get the current date when called
function getTodayDate(){
    let date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    let monthName = '';


    switch(month){
        case 1:
            monthName = "January"
            break
        case 2:
            monthName = "February"
            break
        case 3:
            monthName = "March"
            break
        case 4:
            monthName = "April"
            break
        case 5:
            monthName = "May"
            break
        case 6:
            monthName = "June"
            break
        case 7:
            monthName = "July"
            break
        case 8:
            monthName = "August"
            break
        case 9:
            monthName = "September"
            break
        case 10:
            monthName = "October"
            break
        case 11:
            monthName = "November"
            break
        case 12:
            monthName = "December"
            break
        default:
            monthName = "No date"
            break
    }

    return monthName +' '+ day + ', ' + year;
}

export default CreateNote