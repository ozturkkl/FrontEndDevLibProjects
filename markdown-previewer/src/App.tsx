import './App.css';
import Canvas from './comps/Canvas';

function App() {
  return (
    <div className="App">
      <Canvas type="editor"/>
      <Canvas type="preview"/>
    </div>
  );
}

export default App;
