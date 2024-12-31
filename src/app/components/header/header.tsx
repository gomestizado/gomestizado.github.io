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
            sequence={["Hi, i'm Matheus! 👋"]}
            wrapper="span"
            speed={40}
            repeat={0}
          />
        </h1>
        <h2>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              1300,
              "Front-end",
              500,
              "Back-end",
              500,
              "Full-stack",
              500,
            ]}
            repeat={0}
            cursor={false}
          />
          &nbsp;
          Developer
        </h2>
      </div>
      <Image src="/me.jpg" alt="Vercel logomark" width={300} height={300} />
    </div>
  );
}
