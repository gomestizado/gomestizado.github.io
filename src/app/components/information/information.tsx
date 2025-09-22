import { SectionTitle } from "../sectionTitle/section-title";
import "./information.scss";

export function Info() {
    return (
    <div className="infos">
        <div className="personal-info">
            <SectionTitle text="Educação 🎓"/>
            <div className="educational-info">
                <span>Sistemas de Informação (Concluído)</span>
                <span>Universidade Veiga de Almeida</span>
            </div>
        </div>
                
        <div className="personal-info">
            <SectionTitle text="Languages 💬"/>
            <div className="languages-info">
                <span>EN - Intermediário (B1)</span>
                <span>PT-BR - Nativo</span>
            </div>
        </div>
    </div>
    )
}