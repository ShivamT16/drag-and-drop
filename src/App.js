import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import './App.css';
import { Droppable } from './Components/Droppable';
import { Draggable } from './Components/Draggable';

function App() {
   const sides = ["Text",'Text Area', "Number", "Date", "Date and Time", "Dropdown", "Yes/No", "Multi-select dropdown"]
   const [cartItems, setcartItems] = useState(["Test"])

   const addItems = (event) => {
      const newItem = event.active.data.current?.title[1];
      const temp = [...cartItems];
      temp.push(newItem);
      setcartItems(temp)
   }
  
  return (
    <DndContext onDragEnd={addItems} >
    <div style={{display: "flex", border: "2px solid black"}} >
    <div style={{ border: "2px solid black"}}>
      <h2>Sides</h2>
      <ul>
      {sides.map((item) => <Draggable key={item} > {item} </Draggable> )}
      </ul>
    </div>
    <div style={{ border: "2px solid black"}}>
      <h2>Section</h2>
      <Droppable items={cartItems} />
    </div>

    </div>
    </DndContext>
  );
}

export default App;
