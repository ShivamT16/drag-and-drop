import React, { useContext } from 'react';
import {useDroppable} from '@dnd-kit/core';
import { MainContext } from './MainContext';

export const Droppable = (props) => {
  const { setNodeRef} = useDroppable({
    id: "cart-droppable",
  });
  const {cartItems, setcartItems} = useContext(MainContext)

  return (
    <div ref={setNodeRef}>
      <div >
      {props.items.map((item, idx) => (
        <div key={`${item}-${idx}`} > 
            {item} 
            <span onClick={() => setcartItems(cartItems.filter((i,_index) => _index !== idx ))} >X</span>
        </div>
      ) ) 
      }

      </div>
    </div>
  );
}
