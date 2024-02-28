
import './ApplicationForm.css'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { useEffect, useState } from 'react';

const ApplicationForm = () => {
    return (
        <form className= "flutuando flex flex-col border-[1px] border-solid border-[#BDC3C7] h-[500px] w-[400px] md:m-[12px] shadow-lg rounded bg-white py-[48px] px-[24px]">
            <div className='flex justify-between gap-[48px] text-[#2C3E50]'>
                <p>Início: 07 de Abril</p>
                <p>Restam: 10 vagas</p>
            </div>
            <h1 className='font-bold text-[32px] text-center text-[#2C3E50]'>
                Faça sua <br></br>inscrição para o curso
            </h1>
            <div className='mt-[24px] flex flex-col gap-[12px]'>
                <div className="w-[350px] py-[12px] border-[1px] border-solid border-[#BDC3C7] outline-none rounded flex items-center px-[24px]">
                    <PersonIcon style={{ color: '#2C3E50' }} />
                    <input
                        className="ml-[6px] w-full outline-none"
                        placeholder='NOME COMPLETO'
                        type="text"
                    />
                </div>

                <div className="w-[350px] py-[12px] border-[1px] border-solid border-[#BDC3C7] outline-none rounded flex items-center px-[24px]">
                    <EmailIcon style={{ color: '#2C3E50' }} />
                    <input
                        className="ml-[6px] w-full outline-none"
                        placeholder='EMAIL'
                        type="text"
                    />
                </div>

                <div className="w-[350px] py-[12px] border-[1px] border-solid border-[#BDC3C7] outline-none rounded flex items-center px-[24px]">
                    <PhoneIcon style={{ color: '#2C3E50' }} />
                    <input
                        className="ml-[6px] w-full outline-none"
                        placeholder='(XX) X XXXX-XXXX'
                        type="text"
                    />
                </div>

                <button className='bg-[#2C3E50] py-[16px] text-white font-bold rounded hover:scale-105 cursor-pointer transition ease-in-out delay-150 duration-300'>
                    INSCREVER-SE
                </button>
            </div>
        </form>
    );
}

export default ApplicationForm;