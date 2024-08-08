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
    <div ref={setNodeRef}>
      <div >
      {props.items.map((item, idx) => (
        <div key={`${item}-${idx}`} > 
            {/* {idx} */}
            {item} 
        </div>
      ) ) 
      }
      </div>
    </div>
  );
}
