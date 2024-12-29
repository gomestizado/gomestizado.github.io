import { Experience } from "./components/experience/experience";
import { SocialBtns } from "./components/social-btns/social-btns";
import { Header } from "./components/header/header";
import { EmailIcon } from "./components/icons/email-icon";
import { Info } from "./components/information/information";

import "./styles/home.scss";


export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      <Info/>

        <div className="buttons">
          <SocialBtns/>
          <a className="btn-primary" href="mailto:matheus_mgc@yahoo.com.br">
            contact me
            <EmailIcon/>
          </a>
        </div>
    </main>
  );
}
