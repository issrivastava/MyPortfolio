import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "AirSential – IoT Air Quality Monitoring System",
    description:
      "Designed and built an IoT-based air quality monitoring system using Arduino and C++. Integrated gas sensors to detect hazardous leaks and trigger real-time alerts. Improved response time for unsafe air conditions through automated notifications. Selected for IDEATHON conducted by the University of Mumbai for an innovative IoT solution.",
    tech: ["Arduino", "C++", "Gas Sensors", "IoT"],
  },
  {
    title: "DesertDinoDash – D3 (2D Unity Game)",
    description:
      "Developed a 2D game in Unity featuring collision detection, obstacle behavior, and level progression. Implemented player movement mechanics, scoring system, and increasing difficulty across levels.",
    tech: ["Unity", "C#"],
  },
  {
    title: "MedRec – Medical Record Management System",
    description:
      "Developed a secure full-stack medical record management system using React and FastAPI. Designed RESTful APIs for efficient data storage and retrieval. Implemented data visualization to analyze long-term health trends. Improved record accessibility and reduced manual tracking.",
    tech: ["React", "FastAPI", "Python", "SQL"],
  },
  {
    title: "Customer Segmentation using K-Means Clustering",
    description:
      "Implemented K-Means clustering to segment customers based on behavioral data. Identified distinct customer groups to support targeted marketing strategies. Visualized clustering results for improved business insights.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
  },
];

export default function Projects() {
  return (
    <section className="page">
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}
