import { Link } from "react-router-dom";
import learnupLogoDarktheme from "../../assets/learnup-logo-darktheme.png"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    }

    return (
        <footer className="bg-[#2C3E50] relative w-full flex flex-col justify-center h-[180px] max-w-[1440px]">
            <div className="flex flex-col justify-center items-center">
                <img src={learnupLogoDarktheme} alt="" />
                <p className="text-white font-bold text-center">Comece sua jornada de aprendizado e leve suas habilidades para o próximo nível!</p>
            </div>
            <button onClick={scrollToTop} className="absolute top-[-30px] left-[50%] md:right-[240px] w-[60px] h-[60px] flex justify-center items-center rounded bg-[#FF9842] hover:scale-105 hover:translate-y-[-12px] transition ease-in-out delay-150 cursor-pointer duration-300">
                <ArrowUpwardIcon style={{ color: 'white', fontSize: '40px' }} />
            </button>
        </footer>
    );
}

export default Footer;