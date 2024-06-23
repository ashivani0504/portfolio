import React from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <h1>My Portfolio</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        Hello! I'm a beginner front-end developer with a passion for creating
        beautiful and functional web applications.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <Project
          title="Project 1"
          description="This is a brief description of my first project."
        />
        <Project
          title="Project 2"
          description="This is a brief description of my second project."
        />
        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

function Project({ title, description }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>You can reach me at myemail@example.com</p>
    </section>
  );
}

export default App;
