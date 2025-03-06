import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { EmailIcon } from "../icons/email-icon";


import "./social-btns.scss";

export function SocialBtns(){
    return(
    <div className="social">
        <a href="https://www.linkedin.com/in/gomesmatheus/" target="_blank">
            <LinkedInIcon/>
        </a>
        <a href="https://github.com/gomestizado" target="_blank">
            <GitHubIcon/>
        </a>
        <a href="mailto:matheus_mgc@yahoo.com.br">
            <EmailIcon/>
        </a>
    </div>
    )
}