export default function ProjectCard({ title, description, link, tech }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      {tech && (
        <div className="tech-stack">
          {tech.map((item, index) => (
            <span key={index} className="tech">
              {item}
            </span>
          ))}
        </div>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        View Project
      </a>
    </div>
  );
}
