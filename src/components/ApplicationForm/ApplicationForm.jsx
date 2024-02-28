import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ASSETS
import './ApplicationForm.css'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: ""
    })

    // Função para formatar o telefone
    const formatarTelefone = (telefone) => {
        const onlyNumbers = telefone.replace(/[^\d]/g, "");

        const telefoneFormatado = onlyNumbers.slice(0, 11);

        const displayTelefone = telefoneFormatado.replace(
            /^(\d{2})(\d{4,5})(\d{4})$/,
            "($1) $2-$3"
        );

        setFormData({
            ...formData,
            telefone: telefoneFormatado,
            displayTelefone,
        });
    };

    // Função para verificar se o email é valido (algo@algo.algo)
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

    // Função para armazenar os valores no formData (XX XXXXX-XXXX)
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === "telefone") {
            formatarTelefone(value);
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Função de Submit
    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Verificação de campos vazios
        if (!formData.nome || !formData.email || !formData.telefone) {
            toast.warn("Por favor, preencha todos os campos do formulário.");
            return;
        }

        // Verificacao email
        if (!isValidEmail(formData.email)) {
            toast.warn("Por favor, verifique o seu e-mail e tente novamente!");
            return;
        }

        toast.success("Inscrição realizada com sucesso!")
    }


    return (
        <form className="flutuando flex flex-col border-[1px] border-solid border-[#BDC3C7] h-[500px] w-[400px] md:m-[12px] shadow-lg rounded bg-white py-[48px] px-[24px]">
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
                        className="ml-[6px] w-full outline-none text-[#2C3E50]"
                        placeholder='NOME COMPLETO'
                        type="text"
                        name='nome'
                        id='nome'
                        value={formData.nome}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="w-[350px] py-[12px] border-[1px] border-solid border-[#BDC3C7] outline-none rounded flex items-center px-[24px]">
                    <EmailIcon style={{ color: '#2C3E50' }} />
                    <input
                        className="ml-[6px] w-full outline-none text-[#2C3E50]"
                        placeholder='EMAIL'
                        type="text"
                        name='email'
                        id='email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="w-[350px] py-[12px] border-[1px] border-solid border-[#BDC3C7] outline-none rounded flex items-center px-[24px]">
                    <PhoneIcon style={{ color: '#2C3E50' }} />
                    <input
                        className="ml-[6px] w-full outline-none text-[#2C3E50]"
                        placeholder='(XX) XXXXX-XXXX'
                        type="text"
                        name='telefone'
                        id='telefone'
                        value={formData.displayTelefone}
                        onChange={handleInputChange}
                    />
                </div>

                <button
                    type='submit'
                    onClick={handleFormSubmit}
                    className='bg-[#2C3E50] py-[16px] text-white font-bold rounded hover:scale-105 cursor-pointer transition ease-in-out delay-150 duration-300'>
                    INSCREVER-SE
                </button>
            </div>
            <ToastContainer />
        </form>
    );
}

export default ApplicationForm;