export default function About() {
  return (
    <section className="page">
      <h2>About Me</h2>

      <p>
      Hi!! I am a Computer Engineering Student with hands-on experience in full-stack web development, REST APIs, and data-driven applications.
      Strong foundation in React, FastAPI, Python, and SQL, with experience building real-world projects from scratch.
      Actively seeking software development internships to apply problem-solving and system design skills.
      </p>

      {/* Education */}
      <h2>Education</h2>

      <div className="education-card">
        <h3>Rizvi College of Engineering (RCOE)</h3>
        <p><strong>Degree:</strong> B.E in Computer Engineering</p>
        <p><strong>University:</strong> University of Mumbai</p>
        <p><strong>CGPA:</strong> 7.55</p>
        <p><strong>Duration:</strong> 2023 – 2027</p>
        <p><strong>Location:</strong> Bandra (W), Mumbai, India</p>
      </div>

      <div className="education-card">
        <h3>St. Joseph’s High School (RYAN Panvel)</h3>
        <p><strong>Duration:</strong> 2009 – 2020</p>
        <p><strong>Location:</strong> New Panvel, Navi Mumbai, India</p>
        <p><strong>Institution Group:</strong> Ryan International Group of Institutions</p>
        <p><strong>Percentage:</strong> 92.2%</p>
      </div>

      {/* Languages */}
      <h2>Languages</h2>
      <ul className="list">
        <li>English</li>
        <li>Hindi</li>
      </ul>

      {/* Technical Skills */}
      <h2>Technical Skills</h2>

      <div className="skills">
        <p><strong>Programming Languages:</strong> Java, Python, C, C++</p>
        <p><strong>Web Development:</strong> HTML, CSS, JavaScript, TypeScript, React</p>
        <p><strong>Backend:</strong> FastAPI, REST APIs</p>
        <p><strong>Databases:</strong> SQL, PostgreSQL</p>
        <p><strong>Tools & Platforms:</strong> Git, GitHub, VS Code, LaTeX</p>
        <p><strong>Concepts:</strong> OOP, Data Structures, Machine Learning Basics</p>
      </div>

      {/* Certifications */}
      <h2>Certifications</h2>
      <ul className="list">
        <li>
          <strong>Mastering Python Scripting & AI</strong> — Data Analysis and
          Visualization using Power BI (MSME)
        </li>
        <li>
          <strong>Amazon Junior Software Developer</strong> — Coursera
        </li>
      </ul>
    </section>
  );
}
