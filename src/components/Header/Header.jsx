import { Link } from 'react-router-dom';

import './Header.css'

// ASSETS
import learnupLogo from "../../assets/learnup-logo.png"

const Header = () => {
    return (
        <header className="w-full flex justify-center items-center mx-auto max-w-[1440px]">
            <nav className='flex w-full flex-wrap gap-[24px] justify-center md:justify-between items-center px-[24px] py-[12px] shadow'>
                <Link className="flex w-[200px] hover:scale-105 transition ease-in-out delay-150 duration-300" to="/">
                    <img
                        src={learnupLogo}
                        alt="Logo da LearnUp"
                        title="Logo da LearnUp"
                        className='w-full'
                    />
                </Link>
                <div className='flex gap-[12px] md:gap-[24px]'>
                    <ul className='flex gap-[12px] md:gap-[24px] items-center'>
                        <li className='hover:scale-105 transition ease-in-out delay-150 duration-300'>
                            <a
                                href="#"
                                className='font-bold text-[14px] md:text-[18px] hover:scale-105 transition ease-in-out delay-150 duration-300'
                            >
                                CURSOS
                            </a>
                        </li>
                        <li className='hover:scale-105 transition ease-in-out delay-150 duration-300'>
                            <a
                                href="#"
                                className='font-bold text-[14px] md:text-[18px] hover:scale-105 transition ease-in-out delay-150 duration-300'
                            >
                                QUEM SOMOS
                            </a>
                        </li>
                    </ul>
                    <a
                        href="#"
                        className='font-bold text-[14px] md:text-[18px] hover:scale-105 cursor-pointer transition ease-in-out delay-150 duration-300 bg-[#2C3E50] text-[white] px-[24px] py-[12px] rounded'
                    >
                            LOGIN
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;