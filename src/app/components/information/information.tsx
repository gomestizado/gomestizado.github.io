import { SectionTitle } from "../sectionTitle/section-title";
import "./information.scss";

export function Info() {
    return (
    <div className="infos">
        <div className="personal-info">
            <SectionTitle text="Education 🎓"/>
            <div className="educational-info">
                <span>Information Systems Bachelor's Degree</span>
                <span>Universidade Veiga de Almeida</span>
            </div>
        </div>

        <div className="personal-info">
            <SectionTitle text="Languages 💬"/>
            <div className="languages-info">
                <span>EN - Intermediate</span>
                <span>PT-BR - Native Speaker</span>
            </div>
        </div>
    </div>
    )
}