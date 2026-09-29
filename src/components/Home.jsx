function Home() {
  return (
    <section id="home" className="home">
      <div className="grid-background"></div>

      <div className="orb orb-one"></div>
      <div className="orb orb-two"></div>

      <div className="home-content">
        <p className="welcome">HELLO, I'M</p>

        <h1>
          Souvik <span>Roy</span>
        </h1>

        <h2>
          BCA Student <span>|</span> Aspiring Full Stack Developer
        </h2>

        <p className="home-description">
          I create modern, responsive and user-friendly web applications
          using Java, Spring Boot, React, JavaScript and MySQL.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn primary-btn">
            View Projects
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="scroll-down">
          <span>↓</span> Scroll to explore
        </div>
      </div>

      <div className="code-card">
        <div className="code-header">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <pre>
{`const developer = {
  name: "Souvik Roy",
  degree: "BCA",
  skills: [
    "Java",
    "React",
    "Spring Boot",
    "MySQL"
  ],
  passion: "Building ideas 🚀"
};`}
        </pre>
      </div>
    </section>
  );
}

export default Home;