import logo from '../../logo.svg';
import './Home.css';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Logo da LearnUp" title='Logo da LearnUp' />
        <p>
          LearnUp
        </p>
        <Link
          className="App-link underline"
          to="/curso-figma"
          target="_blank"
        >
          Curso de Figma
        </Link>
      </header>
    </div>
  );
}

export default Home;
