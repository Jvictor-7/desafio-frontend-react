
import './Header.css'

// ASSETS
import learnupLogo from "../../assets/learnup-logo.png"

const Header = () => {
    return (
        <header className="flex w-[1440px] h-[80px] max-w-[1440px] mx-auto my-0 justify-between items-center">
            <img src={ learnupLogo } width={200} alt="Logo da LearnUp" title="Logo da LearnUp" />
            <nav>
                <ul className='flex '>
                    <li><a href="#">Cursos</a></li>
                    <li><a href="#">Quem Somos</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;