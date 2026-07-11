import { motion } from 'framer-motion';
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
  SiVite,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const stack = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: '.NET', icon: SiDotnet, color: '#512BD4' },
  { name: 'C#', icon: TbBrandCSharp, color: '#9B4F96' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express', icon: SiExpress, color: '#ffffff' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'SQL Server', icon: SiMysql, color: '#CC2927' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
  { name: 'Nginx', icon: SiNginx, color: '#009639' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  { name: 'Vite', icon: SiVite, color: '#B073FF' },
];

const cardBase = {
  backgroundColor: '#121212',
  borderColor: 'rgba(255, 255, 255, 0.08)',
};

const revealProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
  viewport: { once: true },
};

const Card = ({ className = '', children, delay = 0 }) => (
  <motion.div
    className={`rounded-[20px] border p-8 transition-colors duration-300 ${className}`}
    style={cardBase}
    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    {...revealProps}
    transition={{ ...revealProps.transition, delay }}
  >
    {children}
  </motion.div>
);

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 lg:py-48 px-8 border-t" style={{borderColor: 'rgba(255, 255, 255, 0.05)'}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-white">
          {t('about.title')}
        </h2>
        <p className="text-center mb-16 text-lg" style={{color: '#a1a1aa'}}>
          {t('about.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-fr gap-4">
          <Card className="md:col-span-2 md:row-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">{t('about.serviceTitle')}</h3>
              <p className="leading-relaxed" style={{color: '#a1a1aa'}}>{t('about.serviceDescription')}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {[t('about.serviceTag1'), t('about.serviceTag2'), t('about.serviceTag3')].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-sm font-medium" style={{backgroundColor: 'rgba(0, 112, 243, 0.1)', color: '#0070F3'}}>
                  {tag}
                </span>
              ))}
            </div>
          </Card>

          <Card className="md:col-span-2" delay={0.1}>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide" style={{color: '#a1a1aa'}}>{t('about.stackTitle')}</h3>
            <div className="flex flex-wrap gap-3">
              {stack.map((tech) => (
                <div key={tech.name} title={tech.name} className="w-10 h-10 rounded-xl border flex items-center justify-center" style={{backgroundColor: '#161616', borderColor: 'rgba(255, 255, 255, 0.08)'}}>
                  <tech.icon size={18} style={{ color: tech.color }} />
                </div>
              ))}
            </div>
          </Card>

          <Card delay={0.15} className="flex flex-col justify-center items-center text-center">
            <h3 className="text-4xl font-extrabold mb-1" style={{color: '#0070F3'}}>3+</h3>
            <p className="text-sm" style={{color: '#a1a1aa'}}>{t('about.yearsExp')}</p>
          </Card>

          <Card delay={0.2} className="flex flex-col justify-center items-center text-center">
            <h3 className="text-4xl font-extrabold mb-1" style={{color: '#0070F3'}}>20+</h3>
            <p className="text-sm" style={{color: '#a1a1aa'}}>{t('about.projectsCompleted')}</p>
          </Card>

          <Card className="md:col-span-4 flex items-center justify-between flex-wrap gap-4" delay={0.25}>
            <h3 className="text-xl font-bold text-white">{t('about.locationTitle')}</h3>
            <p style={{color: '#a1a1aa'}}>{t('about.locationDescription')}</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
