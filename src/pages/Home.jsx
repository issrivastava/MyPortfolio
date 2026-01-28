import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <section className="hero hero-layout">
      <div className="hero-text">
        <h1>
          Hi, I'm <span>Sagarika Srivastava</span>
        </h1>
        <p>
          Computer Engineering Student 
        </p>

        <a href="/projects" className="btn">
          View My Work
        </a>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Your Name" />
      </div>
    </section>
  );
}