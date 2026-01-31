export default function About() {
  return (
    <section className="page">
      <h2>About Me</h2>

      <div className="card">
        <p>
          Hi! I am a Computer Engineering student and aspiring software developer
          with a strong interest in building modern, scalable applications.
          I enjoy working across frontend, backend, and problem-solving domains,
          and continuously improving my technical skills.
        </p>
      </div>

      {/* Education */}
      <h2>Education</h2>

      <div className="education-card">
        <h3>Rizvi College of Engineering (RCOE)</h3>
        <p><strong>B.E in Computer Engineering</strong></p>
        <p>University of Mumbai | 2023 – 2027</p>
        <p>CGPA: 7.55</p>
        <p>Bandra (W), Mumbai, India</p>
      </div>

      <div className="education-card">
        <h3>St. Joseph’s High School (RYAN Panvel)</h3>
        <p>Ryan International Group of Institutions</p>
        <p>2009 – 2020</p>
        <p>New Panvel, Navi Mumbai, India</p>
        <p>Percentage: 92.2%</p>
      </div>

      {/* Technical Skills */}
      <h2>Technical Skills</h2>

      <div className="card">
        <p><strong>Programming Languages</strong></p>
        <div className="tech-stack">
          <span className="tech">Java</span>
          <span className="tech">Python</span>
          <span className="tech">C</span>
          <span className="tech">C++</span>
        </div>

        <p><strong>Web Development</strong></p>
        <div className="tech-stack">
          <span className="tech">HTML</span>
          <span className="tech">CSS</span>
          <span className="tech">JavaScript</span>
          <span className="tech">TypeScript</span>
          <span className="tech">React</span>
        </div>

        <p><strong>Backend</strong></p>
        <div className="tech-stack">
          <span className="tech">FastAPI</span>
          <span className="tech">REST APIs</span>
        </div>

        <p><strong>Databases</strong></p>
        <div className="tech-stack">
          <span className="tech">SQL</span>
          <span className="tech">PostgreSQL</span>
        </div>

        <p><strong>Tools & Platforms</strong></p>
        <div className="tech-stack">
          <span className="tech">Git</span>
          <span className="tech">GitHub</span>
          <span className="tech">VS Code</span>
          <span className="tech">LaTeX</span>
        </div>

        <p><strong>Concepts</strong></p>
        <div className="tech-stack">
          <span className="tech">OOP</span>
          <span className="tech">Data Structures</span>
          <span className="tech">Machine Learning Basics</span>
        </div>
      </div>

      {/* Languages */}
      <h2>Languages</h2>
      <div className="card">
        <div className="tech-stack">
          <span className="tech">English</span>
          <span className="tech">Hindi</span>
          <span className="tech">Sanskrit</span>
          <span className="tech">Marathi</span>
        </div>
      </div>

      {/* Certifications */}
      <h2>Certifications</h2>
      <div className="card">
        <ul className="list">
          <li>
            <strong>Mastering Python Scripting & AI</strong> — Data Analysis and
            Visualization using Power BI (MSME)
          </li>
          <li>
            <strong>Amazon Junior Software Developer</strong> — Coursera
          </li>
        </ul>
      </div>
    </section>
  );
}
