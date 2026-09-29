function Projects() {
  const projects = [
    {
      number: "01",
      title: "Online Hospital Management System",
      description:
        "A web-based system for managing patients, doctors, appointments and hospital information.",
      technologies: ["Java", "Spring Boot", "MySQL"]
    },
    {
      number: "02",
      title: "College Management System",
      description:
        "A responsive application designed to manage students, courses, departments and college operations.",
      technologies: ["React", "Spring Boot", "MySQL"]
    },
    {
      number: "03",
      title: "Journal Application",
      description:
        "A journal application for creating, storing and managing personal journal entries.",
      technologies: ["Java", "Spring Boot", "MySQL"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-title">
        <span>04</span>
        <p>SELECTED WORK</p>
        <h2>
          My <b>Projects</b>
        </h2>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.number}>
            <div className="project-top">
              <span>{project.number}</span>
              <span className="arrow">↗</span>
            </div>

            <div className="project-icon">
              &lt;/&gt;
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="technology-list">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;