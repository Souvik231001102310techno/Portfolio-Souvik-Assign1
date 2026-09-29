function Skills() {
  const skills = [
    ["Java", "☕"],
    ["Python", "🐍"],
    ["JavaScript", "JS"],
    ["React", "⚛"],
    ["Spring Boot", "SB"],
    ["MySQL", "DB"],
    ["HTML", "◇"],
    ["CSS", "#"],
    ["Git & GitHub", "G"],
    ["Node.js", "N"],
    ["MongoDB", "M"],
    ["REST API", "API"]
  ];

  return (
    <section id="skills" className="section">
      <div className="section-title">
        <span>03</span>
        <p>WHAT I USE</p>
        <h2>
          Technical <b>Skills</b>
        </h2>
      </div>

      <div className="skills-container">
        {skills.map(([name, icon], index) => (
          <div
            className="skill-card"
            key={name}
            style={{
              "--delay": `${index * 0.08}s`
            }}
          >
            <div className="skill-icon">
              {icon}
            </div>

            <h3>{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;