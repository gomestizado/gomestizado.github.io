import { SocialBtns } from "../social-btns/social-btns";
import { DownloadIcon } from "../icons/download-icon";


import "./buttons.scss";

export function Buttons() {
  return (
    <div className="buttons">
      <SocialBtns />
      <a className="btn-primary" href="/curriculoMatheusCoelho.pdf" target="_blank" rel="noopener noreferrer">
        Currículo
        <DownloadIcon />
      </a>
    </div>
  );
}
