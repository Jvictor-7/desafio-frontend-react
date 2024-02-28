import { Link } from 'react-router-dom';

// ASSETS
import logo from '../../logo.svg';
import './Home.css';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Logo da LearnUp" title='Logo da LearnUp' />
        <h1 className='font-bold'>
          Learn<span className='text-[#FF9842]'>Up</span>
        </h1>
        <p className='px-[24px]'>
          Este projeto foi desenvolvido por João Victor Cavalcante Lima com o intuito de completar o Desafio Front-end/Design UI/UX
        </p>
        <p className='px-[24px] text-[#95A5A6]'>
          "Prototipar e desenvolver uma landing page voltada para inscrição de cursos online"
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
