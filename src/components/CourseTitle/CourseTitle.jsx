
// ASSETS
import figmaLogo from "../../assets/figma-logo.png"
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import StarIcon from '@mui/icons-material/Star';
import ApplicationForm from "../ApplicationForm/ApplicationForm";

const CourseTitle = (props) => {
    return (
        <section className="bg-[#2C3E50] text-white w-full max-w-[1440px] flex flex-wrap">
            <div className="py-[64px] pl-[48px] pr-[48px] flex flex-col items-center md:flex-row gap-[72px] max-w-[1000px] ">
                <div className="w-[300px] md:w-[600px]">
                    <img src={figmaLogo} alt="Logo do Figma" className="w-full" />
                </div>
                <div className="flex flex-col gap-[12px]">
                    <h1 className="font-bold text-[54px] leading-[52px] text-center md:text-start"> {props.titulo} </h1>
                    <p className="text-justify"> {props.poster} </p>
                    <div className="flex flex-col md:flex-row items-center gap-[12px]">
                        <div className="flex gap-[6px]">
                            <AccessTimeFilledIcon />
                            <p> {props.duracao} Horas </p>
                        </div>
                        <div className="flex gap-[6px] items-center">
                            <div>
                                <StarIcon style={{ color: 'orange' }} />
                                <StarIcon style={{ color: 'orange' }} />
                                <StarIcon style={{ color: 'orange' }} />
                                <StarIcon style={{ color: 'orange' }} />
                                <StarIcon style={{ color: 'orange' }} />
                            </div>
                            <p> <span className="text-[#FF9842] font-bold">{props.avaliacao.toFixed(1)}</span> ({props.quantidadeAvaliacao} avaliações) </p>
                        </div>
                    </div>
                </div>

            </div>
            <ApplicationForm />

        </section>
    );
}

export default CourseTitle;