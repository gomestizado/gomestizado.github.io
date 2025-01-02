import { SocialBtns } from "../social-btns/social-btns";
import { EmailIcon } from "../icons/email-icon";

import "./buttons.scss";

export function Buttons() {
  return (
    <div className="buttons">
      <SocialBtns />
      <a className="btn-primary" href="mailto:matheus_mgc@yahoo.com.br">
        contact me
        <EmailIcon />
      </a>
    </div>
  );
}
