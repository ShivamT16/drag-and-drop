import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export const Droppable = (props) => {
  const {isOver, setNodeRef} = useDroppable({
    id: "cart-droppable",
    
  });

  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <ul ref={setNodeRef}>
      <div style={{border: "2px solid black", height: "max-content"}} >
      {props.items.map((item, idx) => (
        <div key={`${item}-${idx}`} > 
            {item}
        </div>
      ) ) 
      }
      </div>
    </ul>
  );
}
  