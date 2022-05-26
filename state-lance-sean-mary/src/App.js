import logo from './logo.svg';
import './App.css';
import ColorChange from './components/ColorChange';

function App() {
  return (
    <div id="square" onclick="changeColor()">
      <ColorChange/>
      <ColorChange/>
      <ColorChange/>
    </div>
  );
}

export default App;
