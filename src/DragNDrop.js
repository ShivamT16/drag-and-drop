import { useContext } from 'react';
import { DndContext } from '@dnd-kit/core';
import './App.css';
import { Droppable } from './Components/Droppable';
import { Draggable } from './Components/Draggable';
import { MainContext } from './Components/MainContext';
import { Link } from 'react-router-dom';

export const DragAndDrop = () => {
    const {cartItems, setcartItems, handleInput, handlePreview} = useContext(MainContext)
    const addItems = (event) => {
       const newItem = event.active.data.current?.title[1];
       const temp = [...cartItems];
       temp.push(newItem);
       setcartItems(temp) 
    }
   
   return (
     <DndContext onDragEnd={addItems} >
 
     <div style={{display: "flex"}} >
     <div style={{padding: "0rem 1rem"}}>
       <h2>Sides</h2>
       <div className='sidebar-Item'>
 
       Text
       <Draggable key={"Text"} > <input type="text" name="text" onChange={handleInput} autoComplete='off' /> </Draggable>
       Textarea
       <Draggable key={"Textarea"} > <textarea placeholder='Textarea' name="textArea" onChange={handleInput} /> </Draggable>
       Number
       <Draggable key={"Number"} > <input type="number" placeholder='Number' name="number" onChange={handleInput} /> </Draggable>
       Date
       <Draggable key={"Date"} > <input type="date" name="date" onChange={handleInput} /> </Draggable>
       Date & Time
       <Draggable key={"Time"} > <input type="datetime-local" /> </Draggable>
       Checkbox
       <Draggable key={"Checkbox"} > <input type="checkbox" /> </Draggable>
       Email
       <Draggable key={"Email"} > <input type="email" placeholder='Email' autoComplete='off' name="email" onChange={handleInput}/> </Draggable>
       Dropdown
       <Draggable key={"Dropdown"} > <select> <option>Select Dropdown</option> </select> </Draggable>
       Radio Button
       <Draggable key={"Radio"} > <input type="radio" /> </Draggable>
 
       </div>
     </div>
     <div>
       <h2>Section</h2>
       <p>+ Drag any field or Click on sides to add a new field below</p>

       <Link to="/preview" ><button onClick={handlePreview} >Preview</button> </Link>
       
       { cartItems.length > 0 && <Droppable items={cartItems} />}
     </div>
 
     </div>
     
     </DndContext>
   )
}