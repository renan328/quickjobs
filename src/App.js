import "./App.css";
import logo from './img/qjlogo.png';
import logoSimple from './img/qjlogoSimple.png';
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
        <h1 className="homeText">Ache o trampo <g>perfeito</g><br /> com a <g>QuickJobs</g></h1>
      </div>
      <div className="inputArea">
        <form>
          <h1>Com o que você trabalha?</h1>
          <input type="text" placeholder="Área ou localização da vaga desejada" id="jobSearch"></input>
          <input type="submit" value="Buscar vagas" id="jobSearchButton"></input>
        </form>
      </div>
      <Jobs></Jobs>
      <footer>
        <span><img src={logoSimple} className="logo-footer" alt="logo" /></span>
        <ul>
          <li>Criadores: </li>
          <li>Lucas</li>
          <li>Marcos</li>
          <li>Otávio</li>
          <li>Raul</li>
          <li>Romário</li>
          <li>Renan</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
