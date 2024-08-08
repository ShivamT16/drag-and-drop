import './App.css';
import { Route, Routes } from 'react-router-dom';
import { DragAndDrop } from './DragNDrop';
import { Preview } from './Preview';

function App() {
   return (
    <div>
      <Routes >
       <Route path="/" element={<DragAndDrop />} />
       <Route path="/preview" element={<Preview />} />
     </Routes>
    </div>
  );
}

export default App;
