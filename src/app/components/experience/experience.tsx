import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss";

export function Experience() {
  return (
    <div className="experience">
      <div className="experience-header">
        <SectionTitle text="Experience 💻" />
        <p>4 years managing servers, networks and infrastructure, 5 years as a front-end developer and 2 years of internship in systems analysis.</p>
      </div>
      <div className="experience-skills">
        <img src="https://img.shields.io/badge/ansible-%231A1918.svg?style=flat-square&logo=ansible&logoColor=white" alt="Ansible" />
        <img src="https://img.shields.io/badge/Bash-%23121011.svg?style=flat-square&logo=gnu-bash&logoColor=white" alt="Bash" />
        <img src="https://img.shields.io/badge/Docker-%230db7ed.svg?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
        <img src="https://img.shields.io/badge/ESLint-4B3263?style=flat-square&logo=eslint&logoColor=white" alt="ESLint" />
        <img src="https://img.shields.io/badge/Firebase-%23e24329.svg?style=flat-square&logo=firebase&logoColor=white" alt="Firebase" />
        <img src="https://img.shields.io/badge/Github-%23545DF0.svg?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
        <img src="https://img.shields.io/badge/Github%20Actions-%232671E5.svg?style=flat-square&logo=githubactions&logoColor=white" alt="GitHub Actions" />
        <img src="https://img.shields.io/badge/GitHub%20Pages-121013?style=flat-square&logo=github&logoColor=white" alt="GitHub Pages" />
        <img src="https://img.shields.io/badge/Gitlab-%23e24329.svg?style=flat-square&logo=gitlab&logoColor=white" alt="GitLab" />
        <img src="https://img.shields.io/badge/Go-%2300ADD8.svg?style=flat-square&logo=go&logoColor=white" alt="GoLang" />
        <img src="https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=flat-square&logo=google-cloud&logoColor=white" alt="Coogle Cloud" />
        <img src="https://img.shields.io/badge/Hibernate-59666C?style=flat-square&logo=Hibernate&logoColor=white" alt="Hibernate" />
        <img src="https://img.shields.io/badge/Javascript-%23f7a71e.svg?style=flat-square&logo=javascript&logoColor=white" alt="JavaScript" />
        <img src="https://img.shields.io/badge/Java-%235382a1.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTEuNjIyIDI0Ljc0cy0xLjIzLjc0OC44NTUuOTYyYzIuNTEuMzIgMy44NDcuMjY3IDYuNjI1LS4yNjdhMTAuMDIgMTAuMDIgMCAwIDAgMS43NjMuODU1Yy02LjI1IDIuNjcyLTE0LjE2LS4xNi05LjI0NC0xLjU1em0tLjgtMy40NzNzLTEuMzM2IDEuMDE1Ljc0OCAxLjIzYzIuNzI1LjI2NyA0Ljg2Mi4zMiA4LjU1LS40MjdhMy4yNiAzLjI2IDAgMCAwIDEuMjgyLjgwMWMtNy41MzQgMi4yNDQtMTUuOTc2LjIxNC0xMC41OC0xLjYwM3ptMTQuNzQ3IDYuMDlzLjkwOC43NDgtMS4wMTUgMS4zMzZjLTMuNTggMS4wNy0xNS4wMTQgMS4zOS0xOC4yMiAwLTEuMTIyLS40OCAxLjAxNS0xLjE3NSAxLjctMS4yODIuNjk1LS4xNiAxLjA3LS4xNiAxLjA3LS4xNi0xLjIzLS44NTUtOC4xNzUgMS43NjMtMy41MjYgMi41MSAxMi43NyAyLjA4NCAyMy4yOTYtLjkwOCAxOS45ODMtMi40MDR6TTEyLjIgMTcuNjMzcy01LjgyNCAxLjM5LTIuMDg0IDEuODdjMS42MDMuMjE0IDQuNzU1LjE2IDcuNjk0LS4wNTMgMi40MDQtLjIxNCA0LjgxLS42NCA0LjgxLS42NHMtLjg1NS4zNzQtMS40NDMuNzQ4Yy01LjkzIDEuNTUtMTcuMzEyLjg1NS0xNC4wNTItLjc0OCAyLjc3OC0xLjMzNiA1LjA3Ni0xLjE3NSA1LjA3Ni0xLjE3NXptMTAuNDIgNS44MjRjNS45ODQtMy4xIDMuMjA2LTYuMDkgMS4yODItNS43MTctLjQ4LjEwNy0uNjk1LjIxNC0uNjk1LjIxNHMuMTYtLjMyLjUzNC0uNDI3YzMuNzk0LTEuMzM2IDYuNzg2IDQuMDA3LTEuMjMgNi4wOSAwIDAgLjA1My0uMDUzLjEwNy0uMTZ6bS05LjgzIDguNDQyYzUuNzcuMzc0IDE0LjU4Ny0uMjE0IDE0LjgtMi45NCAwIDAtLjQyNyAxLjA3LTQuNzU1IDEuODctNC45MTYuOTA4LTExLjAwNy44LTE0LjU4Ny4yMTQgMCAwIC43NDguNjQgNC41NDIuODU1eiIgZmlsbD0iI2ZmZmZmZiIvPjxwYXRoIGQ9Ik0xOC45OTYuMDAxczMuMzEzIDMuMzY2LTMuMTUyIDguNDQyYy01LjE4MyA0LjExNC0xLjE3NSA2LjQ2NSAwIDkuMTM3LTMuMDQ2LTIuNzI1LTUuMjM2LTUuMTMtMy43NC03LjM3M0MxNC4yOTQgNi44OTMgMjAuMzMyIDUuMyAxOC45OTYuMDAxem0tMS43IDE1LjMzNWMxLjU1IDEuNzYzLS40MjcgMy4zNjYtLjQyNyAzLjM2NnMzLjk1NC0yLjAzIDIuMTM3LTQuNTQyYy0xLjY1Ni0yLjQwNC0yLjk0LTMuNTggNC4wMDctNy41ODcgMCAwLTEwLjk1MyAyLjcyNS01LjcxNyA4Ljc2M3oiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=&logoColor=white" alt="Java" />
        <img src="https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white" alt="Jenkins" />
        <img src="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=flat-square&logo=kubernetes&logoColor=white" alt="Kubernetes" />
        <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
        <img src="https://img.shields.io/badge/Mysql-4479A1.svg?style=flat-square&logo=mysql&logoColor=white" alt="MySQL" />
        <img src="https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white" alt="Next JS" />
        <img src="https://img.shields.io/badge/Node.js-6DA55F?style=flat-square&logo=node.js&logoColor=white" alt="NodeJS" />
        <img src="https://img.shields.io/badge/PowerShell-%235391FE.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyBjbGFzcz0ic3ZnLWljb24iIHN0eWxlPSJ3aWR0aDogMWVtO2hlaWdodDogMWVtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ZmlsbDogY3VycmVudENvbG9yO292ZXJmbG93OiBoaWRkZW47IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkyOS40MDggMTcyLjMzMDY2N2MyMC44MjEzMzMgMCAzMy45NjI2NjcgMTYuOTgxMzMzIDI4LjQ1ODY2NyAzNy43NmwtMTM0LjE4NjY2NyA2MDMuNzc2Yy00LjY5MzMzMyAyMC44MjEzMzMtMjUuMDQ1MzMzIDM3LjgwMjY2Ny00NS44NjY2NjcgMzcuODAyNjY2SDk0LjYzNDY2N2MtMjAuNzc4NjY3IDAtMzMuOTYyNjY3LTE2Ljk4MTMzMy0yOC40MTYtMzcuODAyNjY2bDEzNC4xNDQtNjAzLjczMzMzNGM0LjY5MzMzMy0yMC44MjEzMzMgMjUuMDQ1MzMzLTM3LjgwMjY2NyA0NS44NjY2NjYtMzcuODAyNjY2aDY4My4xNzg2NjdNNjc0LjY0NTMzMyA2ODEuODEzMzMzaC0xNjkuODEzMzMzYTM1LjQ5ODY2NyAzNS40OTg2NjcgMCAwIDAtMzUuMjg1MzMzIDM1LjY2OTMzNGMwIDE5LjkyNTMzMyAxNS43NDQgMzYuMDUzMzMzIDM1LjI0MjY2NiAzNi4wNTMzMzNoMTY5Ljg1NmEzNi4wNTMzMzMgMzYuMDUzMzMzIDAgMCAwIDM2LjA5Ni0zNi4wNTMzMzMgMzUuOTY4IDM1Ljk2OCAwIDAgMC0zNi4wOTYtMzUuNjY5MzM0bS00MjYuNzA5MzMzIDExLjg2MTMzNGEzNi45OTIgMzYuOTkyIDAgMCAwLTguOTE3MzMzIDUxLjc5NzMzMyAzNy43MTczMzMgMzcuNzE3MzMzIDAgMCAwIDUyLjY1MDY2NiA5LjgxMzMzM2MzMTIuMTA2NjY3LTIxOS41NjI2NjcgMzE0LjE5NzMzMy0yMjIuMDggMzE2LjMzMDY2Ny0yMjMuMzZhMzYuMDEwNjY3IDM2LjAxMDY2NyAwIDAgMCAxMS45MDQtMjUuNDcyIDM4LjUyOCAzOC41MjggMCAwIDAtNi44MjY2NjctMjMuODA4TDQwNC4xODEzMzMgMjU4LjU2YTM2LjgyMTMzMyAzNi44MjEzMzMgMCAwIDAtNTMuMDc3MzMzLTEuMjggMzcuMDM0NjY3IDM3LjAzNDY2NyAwIDAgMC0yLjEzMzMzMyA1Mi42NTA2NjdsMTc2LjIxMzMzMyAxODguNTAxMzMzeiIgZmlsbD0iI2ZmZmZmZiIgLz48L3N2Zz4=" alt="PowerShell" />
        <img src="https://img.shields.io/badge/React-%2320232a.svg?style=flat-square&logo=react&logoColor=white" alt="React" />
        <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=flat-square&logo=SASS&logoColor=white" alt="SASS" />
        <img src="https://img.shields.io/badge/Tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
        <img src="https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
        <img src="https://img.shields.io/badge/Vercel-%23000000.svg?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
        <img src="https://img.shields.io/badge/WordPress-%23117AC9.svg?style=flat-square&logo=WordPress&logoColor=white" alt="WordPress" />
      </div>
    </div>
  );
}
