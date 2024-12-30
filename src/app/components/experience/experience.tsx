import { SectionTitle } from "../sectionTitle/section-title";
import Image from "next/image";
import "./experience.scss";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>2 years as an intern in systems analysis.</p>
      <div className="experience-time">
        <div className="experience-language">
          <Image src="/react.png" alt="React logo" width={40} height={40} />
          <div className="experience-unit">
            <div className="experience-measure measure-2">
                <span>2 years</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <Image src="/ts.png" alt="TypeScript logo" width={40} height={40} />
          <div className="experience-unit">
            <div className="experience-measure measure-3">
                <span>3 years</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <Image src="/js.png" alt="JavaScript logo" width={40} height={40} />
          <div className="experience-unit">
            <div className="experience-measure measure-3">
                <span>3 years</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <Image src="/java.png" alt="Java logo" width={40} height={40} />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
                <span>1 years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
