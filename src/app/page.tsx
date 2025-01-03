import { Header } from "./components/header/header";
import { Experience } from "./components/experience/experience";
import { Info } from "./components/information/information";
import { Buttons } from "./components/buttons/buttons";

import "./styles/home.scss";

export default function Home() {
  return (
    <main className="body">
      <div className="container">
        <Header/>
        <Experience/>
        <Info/>
        <Buttons/>
      </div>
    </main>
  );
}
