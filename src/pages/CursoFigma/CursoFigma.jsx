

// COMPONENTS
import CourseTitle from "../../components/CourseTitle/CourseTitle";
import Header from "../../components/Header/Header";

const CursoFigma = () => {
    return (
        <div className="flex flex-col items-center h-screen">
            <Header />
            <CourseTitle
                titulo="Curso de Figma para iniciantes"
                poster="Quer se tornar um mestre na criação de designs incríveis e colaborativos? O curso online de Figma da LearnUp é a
                sua porta de entrada para o mundo do design de alta qualidade!"
                duracao={8}
                avaliacao={4.7}
                quantidadeAvaliacao={9899}
            />
        </div>
    );
}

export default CursoFigma;