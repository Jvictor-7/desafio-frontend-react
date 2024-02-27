import logo from '../../logo.svg';
import './Home.css';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          LearnUp
        </p>
        <Link
          className="App-link"
          to="/curso-figma"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curso de Figma
        </Link>
      </header>
    </div>
  );
}

export default Home;
