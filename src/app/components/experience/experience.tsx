import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss";
import { Skill } from "../skill/skill";

export function Experience() {
  return (
    <div className="experience">
      <div className="experience-header">
        <SectionTitle text="Experience 💻" />
        <p>3 years managing servers, networks and infrastructure, <br/> 3 years as a front-end developer and 2 years of internship in systems analysis.</p>
      </div>
      <div className="experience-skills">
        <div className="experience-time">
          <Skill image="/logo-react.png" measure={80} years="2 years" />
          <Skill image="/logo-typescript.png" measure={60} years="3 years" />
          <Skill image="/logo-tailwind.png" measure={60} years="3 years" />
        </div>
        <div className="experience-time">
          <Skill image="/logo-java.png" measure={50} years="2 years" />
          <Skill image="/logo-node.png" measure={80} years="3 years" />
          <Skill image="/logo-bd.png" measure={50} years="3 years" />
        </div>
        <div className="experience-time">
        <Skill image="/logo-docker.png" measure={50} years="2 years" />
        <Skill image="/logo-git.png" measure={80} years="3 years" />
        <Skill image="/logo-linux.png" measure={70} years="3 years" />
        </div>
      </div>
    </div>
  );
}
