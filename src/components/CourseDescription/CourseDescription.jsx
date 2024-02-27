import { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const CourseDescription = () => {
    const [listaAvaliacoes, setListaAvalicoes] = useState([])

    // GET LISTA DE AVALIAÇÕES
    useEffect(() => {
        const carregarAvaliacoes = async () => {
            try {
                const data = require("./avaliations.json");
                setListaAvalicoes(data);
            } catch (error) {
                console.error("Erro ao carregar Lista de Avaliações:", error);
            }
        };

        carregarAvaliacoes();
    }, [setListaAvalicoes]);

    console.log(listaAvaliacoes)

    return (
        <section className="bg-white w-full max-w-[1440px] py-[24px] px-[48px] flex flex-col gap-[62px]">
            <div className="max-w-[850px] text-[#2C3E50]">
                <h1 className="font-bold text-[32px]">
                    Curso de Figma para Iniciantes: Descubra o Mundo do
                    Design Digital!
                </h1>
                <p className="text-[24px] text-justify">
                    Se você é novo no mundo do design digital e está ansioso para mergulhar de cabeça, nosso Curso de Figma para Iniciantes é a sua porta de entrada para essa jornada emocionante! Projetado especificamente para iniciantes sem experiência prévia em design, este curso abrange tudo o que você precisa saber para começar a criar designs incríveis usando o Figma.
                </p>
            </div>

            <div className="max-w-[850px] text-[#2C3E50]">
                <h1 className="font-bold text-[32px]">
                    Horas de Duração:
                </h1>
                <p className="text-[24px] text-justify">
                    Com uma duração total de apenas <span className="font-bold">8 horas</span>, este curso condensado oferece uma experiência de aprendizado eficiente e prática, permitindo que você adquira habilidades essenciais em um curto período de tempo.
                </p>
            </div>

            <div className="max-w-[850px] text-[#2C3E50]">
                <h1 className="font-bold text-[32px]">
                    O que você aprenderá:
                </h1>
                <p className="text-[24px] text-justify">
                    <span className="font-bold">Introdução ao Figma:</span> Familiarize-se com a interface intuitiva do Figma e aprenda a navegar facilmente pelo software.
                </p>
                <p className="text-[24px] text-justify">
                    <span className="font-bold">Fundamentos do Design:</span> Entenda os princípios básicos do design, incluindo layout, tipografia, cores e hierarquia visual.
                </p>
                <p className="text-[24px] text-justify">
                    <span className="font-bold">Criação de Designs:</span> Aprenda a criar designs simples e eficazes, desde layouts de página até elementos de interface de usuário.
                </p>
                <p className="text-[24px] text-justify">
                    <span className="font-bold">Fundamentos do Design:</span> Entenda os princípios básicos do design, incluindo layout, tipografia, cores e hierarquia visual.
                </p>
                <p className="text-[24px] text-justify">
                    <span className="font-bold">Prototipagem Básica:</span> Explore as noções básicas de prototipagem para transformar seus designs estáticos em experiências interativas.
                </p>
            </div>

            <div className="max-w-[850px] text-[#2C3E50] flex flex-col gap-[24px]">
                <h1 className="font-bold text-[32px]">
                    Classificações: <span className="text-[#FF9842]">4.7</span><span className="text-[#95A5A6] font-normal">(9948 avaliações)</span>
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px]'>
                    {
                        listaAvaliacoes.map((avaliacao, index) => (
                            <div className='max-w-[400px] flex gap-[24px]'>
                                <div className='w-[80px] h-[80px] rounded-full bg-[#2C3E50] flex justify-center items-center text-white font-bold text-[24px]'>
                                    {
                                        avaliacao.usuario.split(' ').map(nome => nome.charAt(0)).join('')
                                    }
                                </div>

                                <div className='flex flex-col'>
                                    <h2 className='font-bold text-[18px]'>
                                        {avaliacao.usuario}
                                    </h2>
                                    <div className='flex items-center'>
                                        <div>
                                            <StarIcon style={{ color: 'orange' }} />
                                            <StarIcon style={{ color: 'orange' }} />
                                            <StarIcon style={{ color: 'orange' }} />
                                            <StarIcon style={{ color: 'orange' }} />
                                            <StarIcon style={{ color: 'orange' }} />
                                        </div>
                                        <p>
                                            <span className="text-[#FF9842] font-bold">
                                                {avaliacao.nota.toFixed(1)}
                                            </span>
                                        </p>
                                    </div>
                                    <p className='text-[18px]'>
                                        {avaliacao.comentario}
                                    </p>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <Link to="#" className='border-[1px] py-[16px] border-solid border-[#2C3E50] text-center rounded font-bold transition ease-in-out delay-150 duration-300 hover:bg-[#2C3E50] hover:text-white'>
                    MOSTRAR MAIS AVALIAÇÕES
                </Link>
            </div>

        </section>
    );
}

export default CourseDescription;