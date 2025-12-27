import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "React Native", level: 85 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "Vite", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: ".NET (C#)", level: 85 },
        { name: "Node.js/Express", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "Entity Framework", level: 80 }
      ]
    },
    {
      title: "Database & DevOps",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "SQL Server", level: 80 },
        { name: "Linux/Nginx/PM2", level: 85 },
        { name: "Git/GitHub", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
