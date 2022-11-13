import "./App.css";
import logo from './img/qjlogo.png';
import Jobs from "./Components/Jobs/Jobs";

function App() {
  return (
    <div className="App">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Jobs></Jobs>
    </div>
  );
}

export default App;
