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
          Dev
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              1300,
              "",
              500,
              "Front-end",
              500,
              "Back-end",
              500,
              "Full-stack",
              500,
              "Ops/Cloud"
            ]}
            repeat={0}
            speed={40}
            cursor={false}
          />
        </h2>
      </div>
      <Image src="/me.jpg" alt="Vercel logomark" width={300} height={300} />
    </div>
  );
}
