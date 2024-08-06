import './App.css';
import { Section } from './Section';
import { Sidebar } from './SideBar';

function App() {
  return (
    <div className="App">
      {/* <h1>Blaash</h1> */}

    <div style={{display: "flex", flexWrap: "wrap"}}>
     <Sidebar />
     <Section /> 
    </div>

    </div>
  );
}

export default App;
