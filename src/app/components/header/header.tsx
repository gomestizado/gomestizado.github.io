"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <div className="header-text">
        <h1>
          <TypeAnimation
            sequence={["Olá, eu sou o Matheus! 👋"]}
            wrapper="span"
            speed={34}
            repeat={0}
          />
        </h1>
        <h2>
          {"Analista de "}
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              "Sistemas",
              1800,
              "Dados",
              1800,
              "BI",
              1800,
              "Automação",
              1800,
              "Infraestrutura",
              1800,
              "Cloud",
              1800,
            ]}
            repeat={Infinity}
            speed={40}
            cursor={false}
          />
        </h2>
      </div>
      <Image src="/me.jpg" alt="Foto de Matheus Coelho" width={300} height={300} />
    </div>
  );
}
