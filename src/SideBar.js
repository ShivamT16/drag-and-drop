import { Draggable } from "./Components/Draggable"

export const Sidebar = () => {
    return(
        <div style={{textAlign: "left", padding: "0rem 2rem",borderRight: "2px solid black"}} >

         <h2>All Details</h2>
         <h3>BASIC</h3>

         <Draggable id="draggable">
         <p>Text</p>
    </Draggable>
    
         <p>Text</p>   
         <p>Text Area</p>   
         <p>Number</p>   
         <p>Date</p>   
         <p>Date and Time</p>   
         <p>Dropdown</p>   
         <p>Yes/No</p>   
         <p>Multi-select dropdown</p>   
         <p>Checkbox</p>   
         <p>Currency</p>   
         <p>Email</p>   
         <p>User</p>   
         <p>Radio Button</p>

         <h3>DATA LOOKUP</h3>
         <p>Lookup</p>
         <p>Remote Lookup</p>
         
        </div>
    )
}