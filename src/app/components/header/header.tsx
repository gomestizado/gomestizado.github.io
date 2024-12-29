import Image from "next/image";

import "./header.scss";

export function Header() {
    return (
<div className="header">
    <div>
        <h1>Hi, i'm Matheus! 👋</h1>
        <h2>Full-stack Developer</h2>
    </div>
    <Image src="/me.jpg" alt="Vercel logomark" width={400} height={400} />
</div>
    );
}