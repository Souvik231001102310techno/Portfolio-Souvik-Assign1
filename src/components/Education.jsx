function Education() {
  const education = [
    {
      year: "Current",
      title: "Bachelor of Computer Applications",
      institute: "Techno India University",
      description: "BCA(H) • 4th Year"
    },
    {
      year: "Higher Secondary",
      title: "Higher Secondary Education",
      institute: "Haldibari High School • WBCHSE",
      description: "74%"
    },
    {
      year: "Secondary",
      title: "Secondary Education",
      institute: "Haldibari High School • WBBSE",
      description: "90%"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="section-title">
        <span>02</span>
        <p>MY JOURNEY</p>
        <h2>
          My <b>Education</b>
        </h2>
      </div>

      <div className="timeline">
        {education.map((item, index) => (
          <div className="timeline-item" key={item.title}>
            <div className="timeline-number">
              {index + 1}
            </div>

            <div className="education-card">
              <span className="education-year">
                {item.year}
              </span>

              <h3>{item.title}</h3>

              <h4>{item.institute}</h4>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;