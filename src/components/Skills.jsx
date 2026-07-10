import { useLanguage } from '../context/LanguageContext';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiNginx,
  SiLinux,
  SiVite
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const Skills = () => {
  const { t } = useLanguage();

  const skills = [
    { name: "React", icon: SiReact, category: "Frontend", iconColor: "#61DAFB" },
    { name: "React Native", icon: SiReact, category: "Mobile", iconColor: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, category: "Frontend", iconColor: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, category: "Frontend", iconColor: "#3178C6" },
    { name: ".NET", icon: SiDotnet, category: "Backend", iconColor: "#512BD4" },
    { name: "C#", icon: TbBrandCSharp, category: "Backend", iconColor: "#9B4F96" },
    { name: "Node.js", icon: SiNodedotjs, category: "Backend", iconColor: "#5FA04E" },
    { name: "Express", icon: SiExpress, category: "Backend", iconColor: "#F5F5F7" },
    { name: "PostgreSQL", icon: SiPostgresql, category: "Database", iconColor: "#4169E1" },
    { name: "SQL Server", icon: SiMysql, category: "Database", iconColor: "#CC2927" },
    { name: "MongoDB", icon: SiMongodb, category: "Database", iconColor: "#47A248" },
    { name: "Git", icon: SiGit, category: "DevOps", iconColor: "#F05032" },
    { name: "GitHub", icon: SiGithub, category: "DevOps", iconColor: "#F5F5F7" },
    { name: "Nginx", icon: SiNginx, category: "DevOps", iconColor: "#009639" },
    { name: "Linux", icon: SiLinux, category: "DevOps", iconColor: "#FCC624" },
    { name: "Vite", icon: SiVite, category: "Tools", iconColor: "#B073FF" },
  ];

  // Triplicamos las habilidades para un scroll infinito más suave
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-24 px-8 overflow-hidden relative border-t" style={{borderColor: 'rgba(255, 255, 255, 0.08)'}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 font-semibold tracking-tight" style={{color: '#F5F5F7'}}>
          {t('skills.title')}
        </h2>
        <p className="text-center mb-16 text-lg" style={{color: '#86868B'}}>
          {t('skills.subtitle')}
        </p>

        <div className="relative">
          <div className="flex gap-4 animate-scroll-carousel">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-44 h-48 rounded-2xl border flex flex-col items-center justify-center gap-3 transition-colors duration-200"
                style={{ backgroundColor: '#1d1d1f', borderColor: 'rgba(255, 255, 255, 0.08)' }}
              >
                <skill.icon
                  className="text-5xl"
                  style={{ color: skill.iconColor }}
                />
                <h3 className="font-medium text-base text-center" style={{color: '#F5F5F7'}}>
                  {skill.name}
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-full" style={{color: '#86868B', backgroundColor: 'rgba(255, 255, 255, 0.06)'}}>
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradientes de fade en los bordes */}
      <div className="absolute top-0 left-0 w-32 h-full pointer-events-none z-10" style={{background: 'linear-gradient(to right, #000000, transparent)'}}></div>
      <div className="absolute top-0 right-0 w-32 h-full pointer-events-none z-10" style={{background: 'linear-gradient(to left, #000000, transparent)'}}></div>
    </section>
  );
};

export default Skills;
