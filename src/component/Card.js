import React, { useState } from 'react'

import EditNote from '../modal/EditNote'

const Card = ({taskObj, index, deleteNote, updateList}) => {
    const [modal, setModal] = useState(false)
    // color array for cards
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        },
        {
            primaryColor : "#FFFFFF",
            secondaryColor : "#FFFFFF"
        }
    ]

    //this method will do a delete action
    const handleDelete=()=>{
        deleteNote(index);
    }

    const updateNote =(obj)=>{
        updateList(obj, index)
    }

    const toggle =()=>{
        setModal(!modal)
    }




  return (
    <>
        <div className='user-card' style={{"background-color": colors[index%5].primaryColor}}>
            <div className='task-holder'>
                <h4 class = "card-title" style={{"border-radius": "10px", "fontWeight": "bold"}}>{taskObj.Name}</h4>
                
                <textarea className='card-desc mt-3 readTextArea' readOnly style={{"background-color": colors[index%5].primaryColor}} rows = "5">{taskObj.Description}</textarea>
                
                <div>
                    <p className='pl-3 mt-3 date' style={{"font-weight" : "bold"}} >{taskObj.Today}</p> 
                    <div className='icons' style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                               
                            <i class = "far fa-edit mr-3" style={{"color" : colors[5].primaryColor, "cursor" : "pointer", "font-size" : "32px"}} onClick={()=>setModal(true)}></i>

                            <i class="fas fa-trash-alt" style = {{"color" : colors[5].primaryColor, "cursor" : "pointer", "font-size" : "32px"}} onClick={handleDelete}></i>
                    </div>
                </div>
                
                
            </div>
             <EditNote modals={modal} toggle={toggle} updateNote ={updateNote} taskObj={taskObj}/>
        </div>
    </>

  )
}

export default Card
