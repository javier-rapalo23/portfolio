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
import { BiLogoPostgresql } from 'react-icons/bi';

const Skills = () => {
  const { t } = useLanguage();

  const skills = [
    { name: "React", icon: SiReact, category: "Frontend", color: "from-cyan-400 to-blue-500", iconColor: "#FFFFFF" },
    { name: "React Native", icon: SiReact, category: "Mobile", color: "from-blue-500 to-purple-500", iconColor: "#FFFFFF" },
    { name: "JavaScript", icon: SiJavascript, category: "Frontend", color: "from-yellow-300 to-yellow-500", iconColor: "#ffffffff" },
    { name: "TypeScript", icon: SiTypescript, category: "Frontend", color: "from-blue-500 to-blue-700", iconColor: "#FFFFFF" },
    { name: ".NET", icon: SiDotnet, category: "Backend", color: "from-purple-500 to-purple-700", iconColor: "#FFFFFF" },
    { name: "C#", icon: TbBrandCSharp, category: "Backend", color: "from-purple-600 to-pink-500", iconColor: "#FFFFFF" },
    { name: "Node.js", icon: SiNodedotjs, category: "Backend", color: "from-green-500 to-green-700", iconColor: "#FFFFFF" },
    { name: "Express", icon: SiExpress, category: "Backend", color: "from-gray-600 to-gray-800", iconColor: "#FFFFFF" },
    { name: "PostgreSQL", icon: SiPostgresql, category: "Database", color: "from-blue-400 to-blue-600", iconColor: "#FFFFFF" },
    { name: "SQL Server", icon: SiMysql, category: "Database", color: "from-red-500 to-red-700", iconColor: "#FFFFFF" },
    { name: "MongoDB", icon: SiMongodb, category: "Database", color: "from-green-500 to-green-700", iconColor: "#FFFFFF" },
    { name: "Git", icon: SiGit, category: "DevOps", color: "from-orange-500 to-red-600", iconColor: "#FFFFFF" },
    { name: "GitHub", icon: SiGithub, category: "DevOps", color: "from-gray-600 to-gray-900", iconColor: "#FFFFFF" },
    { name: "Nginx", icon: SiNginx, category: "DevOps", color: "from-green-400 to-green-600", iconColor: "#FFFFFF" },
    { name: "Linux", icon: SiLinux, category: "DevOps", color: "from-yellow-400 to-orange-500", iconColor: "#ffffffff" },
    { name: "Vite", icon: SiVite, category: "Tools", color: "from-purple-400 to-purple-600", iconColor: "#FFFFFF" },
  ];

  // Triplicamos las habilidades para un scroll infinito más suave
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-24 px-8 overflow-hidden relative" style={{backgroundColor: '#020617'}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-center mb-4 bg-gradient-primary bg-clip-text text-transparent font-bold">
          {t('skills.title')}
        </h2>
        <p className="text-center mb-12 text-lg" style={{color: '#94A3B8'}}>
          Tecnologías y herramientas que domino
        </p>

        <div className="relative">
          <div className="flex gap-6 animate-scroll-carousel group">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-56"
              >
                <div className={`
                  relative h-full bg-gradient-to-br ${skill.color} 
                  rounded-2xl p-6 shadow-lg
                  transform transition-all duration-300
                  hover:scale-110 hover:shadow-2xl hover:shadow-primary-500/50
                  hover:z-10
                  flex flex-col items-center justify-center
                  border border-white/10
                  group/card
                `}>
                  <skill.icon 
                    className="text-7xl mb-4 transform group-hover/card:scale-125 transition-transform duration-300"
                    style={{ color: skill.iconColor }}
                  />
                  <h3 className="text-white font-bold text-xl text-center mb-2">
                    {skill.name}
                  </h3>
                  <span className="text-white/80 text-sm px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                    {skill.category}
                  </span>
                  
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicador de interacción */}
        <div className="text-center mt-8 text-sm" style={{color: '#94A3B8'}}>
          🎯 Pasa el cursor sobre las tarjetas para verlas mejor
        </div>
      </div>

      {/* Gradientes de fade en los bordes - fuera del contenedor */}
      <div className="absolute top-0 left-0 w-48 h-full pointer-events-none z-10" style={{background: 'linear-gradient(to right, #020617, rgba(2, 6, 23, 0.7), transparent)'}}></div>
      <div className="absolute top-0 right-0 w-48 h-full pointer-events-none z-10" style={{background: 'linear-gradient(to left, #020617, rgba(2, 6, 23, 0.7), transparent)'}}></div>
    </section>
  );
};

export default Skills;
