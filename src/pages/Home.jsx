import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <section className="page home-cards">
      
      {/* Intro / Hero Card */}
      <div className="card home-intro">
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

      {/* Profile Picture Card */}
      <div className="card home-profile">
        <img src={profile} alt="Your Name" />
      </div>

    </section>
  );
}
