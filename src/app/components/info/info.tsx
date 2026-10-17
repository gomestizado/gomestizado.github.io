import { SectionTitle } from "../sectionTitle/section-title";
import "./info.scss";

type Badge = { name: string; src: string };
type SkillGroup = { title: string; badges: Badge[] };

const skillGroups: SkillGroup[] = [
  {
    title: "Dados",
    badges: [
      { name: "Python", src: "https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" },
      { name: "Pandas", src: "https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white" },
      { name: "Power BI", src: "https://img.shields.io/badge/Power%20BI-F2C811?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzFhMWExYSI%2BPHJlY3QgeD0iMyIgeT0iMTMiIHdpZHRoPSI0LjUiIGhlaWdodD0iOCIgcng9IjEiLz48cmVjdCB4PSI5Ljc1IiB5PSI4IiB3aWR0aD0iNC41IiBoZWlnaHQ9IjEzIiByeD0iMSIvPjxyZWN0IHg9IjE2LjUiIHk9IjMiIHdpZHRoPSI0LjUiIGhlaWdodD0iMTgiIHJ4PSIxIi8%2BPC9zdmc%2B" },
      { name: "Power Query", src: "https://img.shields.io/badge/Power%20Query-2E7D32?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZmZmZiI%2BPHBhdGggZD0iTTMgNGgxOGwtNyA4LjZWMTlsLTQgMnYtOC40eiIvPjwvc3ZnPg%3D%3D" },
      { name: "DAX", src: "https://img.shields.io/badge/DAX-A67C00?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZmZmZiI%2BPHBhdGggZD0iTTUgM2gxNHY1aC0yLjJWNS40SDkuM2w1LjQgNi42LTUuNCA2LjZoNy41VjE2SDE5djVINXYtMmw1LjgtN0w1IDV6Ii8%2BPC9zdmc%2B" },
      { name: "SQL", src: "https://img.shields.io/badge/SQL-0F6CBD?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIuMiI%2BPGVsbGlwc2UgY3g9IjEyIiBjeT0iNSIgcng9IjgiIHJ5PSIzIi8%2BPHBhdGggZD0iTTQgNXYxNGMwIDEuNyAzLjYgMyA4IDNzOC0xLjMgOC0zVjUiLz48cGF0aCBkPSJNNCAxMmMwIDEuNyAzLjYgMyA4IDNzOC0xLjMgOC0zIi8%2BPC9zdmc%2B" },
      { name: "MySQL", src: "https://img.shields.io/badge/Mysql-4479A1.svg?style=flat-square&logo=mysql&logoColor=white" },
    ],
  },
  {
    title: "Web",
    badges: [
      { name: "JavaScript", src: "https://img.shields.io/badge/Javascript-%23f7a71e.svg?style=flat-square&logo=javascript&logoColor=white" },
      { name: "TypeScript", src: "https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white" },
      { name: "React", src: "https://img.shields.io/badge/React-%2320232a.svg?style=flat-square&logo=react&logoColor=white" },
      { name: "Next.js", src: "https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white" },
      { name: "Node.js", src: "https://img.shields.io/badge/Node.js-6DA55F?style=flat-square&logo=node.js&logoColor=white" },
      { name: "Java", src: "https://img.shields.io/badge/Java-%235382a1.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTEuNjIyIDI0Ljc0cy0xLjIzLjc0OC44NTUuOTYyYzIuNTEuMzIgMy44NDcuMjY3IDYuNjI1LS4yNjdhMTAuMDIgMTAuMDIgMCAwIDAgMS43NjMuODU1Yy02LjI1IDIuNjcyLTE0LjE2LS4xNi05LjI0NC0xLjU1em0tLjgtMy40NzNzLTEuMzM2IDEuMDE1Ljc0OCAxLjIzYzIuNzI1LjI2NyA0Ljg2Mi4zMiA4LjU1LS40MjdhMy4yNiAzLjI2IDAgMCAwIDEuMjgyLjgwMWMtNy41MzQgMi4yNDQtMTUuOTc2LjIxNC0xMC41OC0xLjYwM3ptMTQuNzQ3IDYuMDlzLjkwOC43NDgtMS4wMTUgMS4zMzZjLTMuNTggMS4wNy0xNS4wMTQgMS4zOS0xOC4yMiAwLTEuMTIyLS40OCAxLjAxNS0xLjE3NSAxLjctMS4yODIuNjk1LS4xNiAxLjA3LS4xNiAxLjA3LS4xNi0xLjIzLS44NTUtOC4xNzUgMS43NjMtMy41MjYgMi41MSAxMi43NyAyLjA4NCAyMy4yOTYtLjkwOCAxOS45ODMtMi40MDR6TTEyLjIgMTcuNjMzcy01LjgyNCAxLjM5LTIuMDg0IDEuODdjMS42MDMuMjE0IDQuNzU1LjE2IDcuNjk0LS4wNTMgMi40MDQtLjIxNCA0LjgxLS42NCA0LjgxLS42NHMtLjg1NS4zNzQtMS40NDMuNzQ4Yy01LjkzIDEuNTUtMTcuMzEyLjg1NS0xNC4wNTItLjc0OCAyLjc3OC0xLjMzNiA1LjA3Ni0xLjE3NSA1LjA3Ni0xLjE3NXptMTAuNDIgNS44MjRjNS45ODQtMy4xIDMuMjA2LTYuMDkgMS4yODItNS43MTctLjQ4LjEwNy0uNjk1LjIxNC0uNjk1LjIxNHMuMTYtLjMyLjUzNC0uNDI3YzMuNzk0LTEuMzM2IDYuNzg2IDQuMDA3LTEuMjMgNi4wOSAwIDAgLjA1My0uMDUzLjEwNy0uMTZ6bS05LjgzIDguNDQyYzUuNzcuMzc0IDE0LjU4Ny0uMjE0IDE0LjgtMi45NCAwIDAtLjQyNyAxLjA3LTQuNzU1IDEuODctNC45MTYuOTA4LTExLjAwNy44LTE0LjU4Ny4yMTQgMCAwIC43NDguNjQgNC41NDIuODU1eiIgZmlsbD0iI2ZmZmZmZiIvPjxwYXRoIGQ9Ik0xOC45OTYuMDAxczMuMzEzIDMuMzY2LTMuMTUyIDguNDQyYy01LjE4MyA0LjExNC0xLjE3NSA2LjQ2NSAwIDkuMTM3LTMuMDQ2LTIuNzI1LTUuMjM2LTUuMTMtMy43NC03LjM3M0MxNC4yOTQgNi44OTMgMjAuMzMyIDUuMyAxOC45OTYuMDAxem0tMS43IDE1LjMzNWMxLjU1IDEuNzYzLS40MjcgMy4zNjYtLjQyNyAzLjM2NnMzLjk1NC0yLjAzIDIuMTM3LTQuNTQyYy0xLjY1Ni0yLjQwNC0yLjk0LTMuNTggNC4wMDctNy41ODcgMCAwLTEwLjk1MyAyLjcyNS01LjcxNyA4Ljc2M3oiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=&logoColor=white" },
      { name: "SASS", src: "https://img.shields.io/badge/SASS-hotpink.svg?style=flat-square&logo=SASS&logoColor=white" },
      { name: "Tailwind CSS", src: "https://img.shields.io/badge/Tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white" },
      { name: "Firebase", src: "https://img.shields.io/badge/Firebase-%23e24329.svg?style=flat-square&logo=firebase&logoColor=white" },
    ],
  },
  {
    title: "Infra & Cloud",
    badges: [
      { name: "AWS", src: "https://custom-icon-badges.demolab.com/badge/AWS-%23FF9900.svg?style=flat-square&logo=aws&logoColor=white" },
      { name: "Google Cloud", src: "https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=flat-square&logo=google-cloud&logoColor=white" },
      { name: "Docker", src: "https://img.shields.io/badge/Docker-%230db7ed.svg?style=flat-square&logo=docker&logoColor=white" },
      { name: "Kubernetes", src: "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=flat-square&logo=kubernetes&logoColor=white" },
      { name: "Terraform", src: "https://img.shields.io/badge/Terraform-844FBA?style=flat-square&logo=terraform&logoColor=white" },
      { name: "Ansible", src: "https://img.shields.io/badge/ansible-%231A1918.svg?style=flat-square&logo=ansible&logoColor=white" },
      { name: "GitHub Actions", src: "https://img.shields.io/badge/Github%20Actions-%232671E5.svg?style=flat-square&logo=githubactions&logoColor=white" },
      { name: "GitLab", src: "https://img.shields.io/badge/Gitlab-%23e24329.svg?style=flat-square&logo=gitlab&logoColor=white" },
      { name: "Bash", src: "https://img.shields.io/badge/Bash-%23121011.svg?style=flat-square&logo=gnu-bash&logoColor=white" },
    ],
  },
];

export function Info() {
    return (
          <div className="experience-skills">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <span className="skill-group-title">{group.title}</span>
                <div className="skill-group-badges">
                  {group.badges.map((badge) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={badge.name} src={badge.src} alt={badge.name} />
                  ))}
                </div>
              </div>
            ))}
          </div>
    )
}