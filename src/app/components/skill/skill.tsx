"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import "./skill.scss";

interface SkillProps {
  image: string;
  years: string;
  measure: number;
}

export function Skill(props: SkillProps) {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Dispara a animação quando o componente monta
  }, []);
  
  const styles = useSpring({
    from: { width: "0%" },
    to: { width: `${props.measure}%` },
    config: { tension: 30, friction: 20 },
  });

  return (
    <div className="experience-language">
      <Image
        src={props.image}
        alt="Skill Logo"
        width={25}
        height={25}
        priority
      />
      <div className="experience-unit">
        <animated.div style={styles} className="experience-measure"/>
      </div>
    </div>
  );
}
