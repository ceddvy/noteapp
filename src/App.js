import React, {useState, useEffect} from 'react'
import './App.css';
import './AppMedia.css'



import HomePage from './HomePage';
import Card from './component/Card';
import CreateNote from './modal/CreateNote';


const App = () => {
  const [modal, setModal] = useState(false);
    const [noteList, setNoteList] = useState([])
    
    //set the modal pop up
    const toggle = () =>{
        setModal(!modal);
    }

    //this will save the note and past to the card component
    const saveNote = (taskObj) =>{
        let tempList = noteList
        tempList.push(taskObj)

        localStorage.setItem("noteList", JSON.stringify(tempList))
        setNoteList(tempList)
        setModal(false);
    }

    //store the input in the local storage
    useEffect(()=>{
      let arr = localStorage.getItem("noteList")
      
      if(arr){
          let obj = JSON.parse(arr)
          setNoteList(obj)
      }
    }, []) //[] parameter to run one time only

    //this will delete the index where the note is selected
    const deleteNote =(index)=>{
      let tempList= noteList

      tempList.splice(index, 1)
      localStorage.setItem("noteList", JSON.stringify(tempList))
      setNoteList(tempList)
      window.location.reload();
    }

    //update the list when the user edit the note
    const updateList =(obj, index)=>{
      let tempList = noteList
      tempList[index] = obj
      localStorage.setItem("noteList", JSON.stringify(tempList))
      setNoteList(tempList)
      window.location.reload()
    }
    
  return (
    <>
    
    <div className='main-container'>
     
      <div className='app-main'>
        {/* Adding HomePage component to the app to render */}
          <HomePage/>
          <div className='action-container'>
            <a className='float' href='#index' onClick={()=>setModal(true)}>
                <i class="fa fa-plus my-float" ></i>
            </a>
            <h3>New Notes</h3>
            
         </div>
          
        </div>
        
        {/* The card component will go here after adding a new note */}
        <div className='list-app'>
           
          <h2>Notes</h2>
          <div className='cards-container'>
            {/* putting all existing input of the user to the list
            using the card component */}
          {noteList && noteList.map((obj, index)=>
                
                <Card taskObj = {obj} index = {index} deleteNote={deleteNote} updateList={updateList}></Card>
                )              
                }
          </div>
          
          
        </div>

        <a className='float2' href='#index' onClick={()=>setModal(true)}>
                <i class="fa fa-plus my-float2" ></i>
            </a>

        {/* calling CreateNote component */}
         <CreateNote toggle={toggle} modals ={modal} save={saveNote} />
        
    </div>
    
    </>
  );
}

export default App;
