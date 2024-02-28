// COMPONENTS
import CourseAnnoucement from "../../components/CourseAnnoucement/CourseAnnoucement";
import CourseDescription from "../../components/CourseDescription/CourseDescription";
import CourseTitle from "../../components/CourseTitle/CourseTitle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Copyright/Copyright";
import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";

const CursoFigma = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#f7f7f7]">
            <Header />
            <CourseTitle
                titulo="Curso de Figma para iniciantes"
                poster="Quer se tornar um mestre na criação de designs incríveis e colaborativos? O curso online de Figma da LearnUp é a
                sua porta de entrada para o mundo do design de alta qualidade!"
                duracao={8}
                avaliacao={5.0}
                quantidadeAvaliacao={9899}
            />
            <CourseAnnoucement />
            <CourseDescription />
            <Footer />
            <Copyright />
        </div>
    );
}

export default CursoFigma;