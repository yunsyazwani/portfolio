import { useState, useEffect } from 'react';
import './App.css';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">YUN</h2>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Nurul Syazwani</span>
          </h1>
          <p className="hero-subtitle">Fullstack Developer</p>
          <p className="hero-tagline">
            Nickname Yun, 30 years old, based in Johor Bahru
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p className="about-text">
              Bachelor's Degree graduate of Software Engineering with over 5 years of experience
              as a software engineer. I'm passionate about building scalable web applications
              and delivering high-quality solutions that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Backend</h3>
              <ul>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Frontend</h3>
              <ul>
                <li>Angular</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Styling</h3>
              <ul>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>CSS3</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Python JSON</h3>
              <p>A Python project working with JSON data structures and manipulation.</p>
              <a href="https://github.com/yunsyazwani/python-json" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> View on GitHub
              </a>
            </div>
            <div className="project-card">
              <h3>Bitcoinj</h3>
              <p>Bitcoin-related Java application leveraging the Bitcoinj library.</p>
              <a href="https://github.com/yunsyazwani/Bitcoinj" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> View on GitHub
              </a>
            </div>
            <div className="project-card">
              <h3>Library Records</h3>
              <p>A library management system for tracking books and records.</p>
              <a href="https://github.com/yunsyazwani/LibraryRecords" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> View on GitHub
              </a>
            </div>
            <div className="project-card">
              <h3>Pocket Budget</h3>
              <p>A personal budget management application to track expenses and income.</p>
              <a href="https://github.com/yunsyazwani/Pocket_Budget" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Software Engineer</h3>
                <p className="timeline-period">5+ Years of Experience</p>
                <p className="timeline-description">
                  Developed and maintained full-stack applications using Java, Spring Boot,
                  Angular, and modern web technologies. Collaborated with cross-functional
                  teams to deliver robust and scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-item">
            <h3>Bachelor's Degree in Software Engineering</h3>
            <p className="education-description">
              Graduated with a comprehensive understanding of software development principles,
              algorithms, data structures, and modern development practices.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-text">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="social-links">
            <a href="https://github.com/yunsyazwani" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/nurul-syazwani-samsudin-811b76170/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="social-link">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Nurul Syazwani. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
