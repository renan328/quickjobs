import "./App.css";
import logo from './img/qjlogo.png';
import Jobs from "./Components/Jobs/Jobs";

function App() {
  return (
    <div className="App">
      <header>
        <div className="imgBox">
          <img src={logo} className="logo" />
        </div>
        <nav>
          <ul>
            <li>Lorem</li>|
            <li>Lorem</li>|
            <li>Lorem</li>|
            <li>Lorem</li>|
            <li>Lorem</li>
          </ul>
          <div className="navButtons">
            <button id="entrar">Entrar</button>
            <button id="cadastrar">Cadastrar</button>
          </div>
        </nav>
      </header>
      <div className="home">
        <h1 className="homeText">Ache o trampo <g>perfeito</g><br/> com a <g>QuickJobs</g></h1>
      </div>
      <Jobs></Jobs>
    </div>
  );
}

export default App;
