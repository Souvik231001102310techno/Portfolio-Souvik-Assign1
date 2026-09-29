function About() {
  return (
    <section id="about" className="section about">
      <div className="section-title">
        <span>01</span>
        <p>WHO I AM</p>
        <h2>
          About <b>Me</b>
        </h2>
      </div>

      <div className="about-container">
        <div className="profile-area">
          <div className="profile-ring">
            <div className="profile">
              SR
            </div>
          </div>

          <div className="floating-card card-one">
            💻 Developer
          </div>

          <div className="floating-card card-two">
            🚀 Learner
          </div>
        </div>

        <div className="about-card">
          <h3>Turning ideas into digital experiences.</h3>

          <p>
            I am a BCA student passionate about software development,
            problem solving and modern web technologies. I enjoy creating
            practical applications with clean interfaces and reliable
            backend systems.
          </p>

          <p>
            My current focus is strengthening my skills in Java, Spring Boot,
            React, databases and full-stack application development.
          </p>

          <div className="stats">
            <div>
              <strong>08+</strong>
              <span>Technologies</span>
            </div>

            <div>
              <strong>03+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Passion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;