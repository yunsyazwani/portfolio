import { useState, useEffect } from 'react';
import './App.css';
import { FaSun, FaMoon, FaLinkedin, FaEnvelope, FaVideo, FaExternalLinkAlt, FaEye, FaTimes } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
            <li><a href="#achievements">Achievements</a></li>
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
            Hi, I'm <span className="highlight">Nurul Syazwani Binti Samsudin</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer</p>
          <p className="hero-tagline">
            Skudai, Johor, Malaysia | yunsyazwani@gmail.com
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
              My coding journey began at 16 when I fell down the Blogspot rabbit hole - designing my own blog
              taught me HTML, and I've been in love with code ever since! That early spark led me to pursue
              web development as my career goal.
            </p>
            <p className="about-text">
              During my studies, I wasn't content with just web dev - I dove into game development and VR as
              electives because, hey, why not learn about all the cool tools out there? This curiosity paid
              off when I landed my first job on an AI team. Plot twist: I successfully delivered a machine
              learning project even though it wasn't my main expertise. That's just how I roll - give me
              something new, and I'll figure it out!
            </p>
            <p className="about-text">
              Fast forward through nearly 5 years of professional experience, and I'm back doing what I love
              most - web development! Specializing in Java (Spring Boot) and Angular, I build scalable
              applications with clean architecture. My latest adventure? Leading a team on a project that
              meets Customs requirements. From Blogspot themes to Customs compliance - now that's a journey!
            </p>
            <p className="about-text">
              Bottom line: I'm a fast learner who thrives on tackling new challenges. Whether it's AI, VR,
              or making sense of government regulations, I'm always ready to dive in and make it work.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <ul>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>Angular</li>
                <li>React JS</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Backend</h3>
              <ul>
                <li>Java</li>
                <li>Spring Boot (RESTful APIs)</li>
                <li>PHP</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Database</h3>
              <ul>
                <li>MySQL</li>
                <li>Oracle SQL</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Tools</h3>
              <ul>
                <li>Git</li>
                <li>Postman</li>
                <li>Visual Studio Code</li>
                <li>DBeaver</li>
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
              <h3>Focus Kitty</h3>
              <p>A 2D game made with Unity 3D for my final year project, integrated with an EEG device. Players control the character by focusing their mind - the more focused you are, the faster the kitty runs forward!</p>
              <a href="https://drive.google.com/file/d/1HczZQmAdP5EYz2J89j13drpmkOtixBBj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaVideo /> Watch Demo
              </a>
            </div>
            <div className="project-card">
              <h3>Hot Trend</h3>
              <p>An NLP project that finds key impactful words from sentences and categorizes them using Part-of-Speech (POS) tagging to identify trending topics and sentiment patterns.</p>
              <a href="https://colab.research.google.com/drive/1BYJmZrEkh-wWmhwT67SanEJXeqm__LXr?authuser=2" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaExternalLinkAlt /> Try It on Colab
              </a>
            </div>
            <div className="project-card">
              <h3>Jurong Port Website</h3>
              <p>A professional web application designed using Angular for frontend and Java for backend. Due to credential requirements, only the login page is shown as preview.</p>
              <button onClick={openModal} className="project-link">
                <FaEye /> View Preview
              </button>
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
                <p className="timeline-company">MC Consulting Malaysia Sdn Bhd</p>
                <p className="timeline-period">Nov 2020 – July 2025</p>
                <ul className="timeline-description">
                  <li>Developed and maintained a full-stack internal system using Spring Boot (RESTful APIs) and Angular.</li>
                  <li>Implemented reusable Angular components, reducing frontend development time.</li>
                  <li>Integrated Oracle SQL for complex data handling and optimized reporting processes.</li>
                  <li>Collaborated closely with clients to resolve issues, improving satisfaction and system adoption.</li>
                  <li>Conducted module and integration testing for quality assurance.</li>
                  <li>Enhanced data entry efficiency with Excel upload functionality and row-level validation.</li>
                </ul>
                <div className="timeline-tech">
                  <span>Spring Boot</span>
                  <span>Angular</span>
                  <span>Oracle SQL</span>
                  <span>RESTful APIs</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>IT Engineer</h3>
                <p className="timeline-company">OK Blockchain Centre Sdn Bhd</p>
                <p className="timeline-period">July 2019 – Nov 2020</p>
                <ul className="timeline-description">
                  <li>Developed AI-driven sentiment analysis models using Python, NLTK, and scikit-learn.</li>
                  <li>Built predictive pipelines for text preprocessing, model training, and evaluation.</li>
                  <li>Improved customer sentiment reporting accuracy and decision-making support.</li>
                </ul>
                <div className="timeline-tech">
                  <span>Python</span>
                  <span>NLTK</span>
                  <span>scikit-learn</span>
                  <span>AI/ML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-item">
              <h3>Bachelor of Computer Science (Software Engineering)</h3>
              <p className="education-school">Universiti Malaysia Pahang Al-Sultan Abdullah</p>
              <p className="education-location">Gambang, Kuantan, Pahang</p>
              <p className="education-period">2016 – 2019</p>
            </div>
            <div className="education-item">
              <h3>Diploma in Computer Science</h3>
              <p className="education-school">Universiti Malaysia Pahang Al-Sultan Abdullah</p>
              <p className="education-location">Gambang, Kuantan, Pahang</p>
              <p className="education-period">2013 – 2016</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section achievements">
        <div className="container">
          <h2 className="section-title">Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-item">
              <h3>3rd Place – FYPro-Com Exhibition UMP</h3>
              <p className="achievement-year">2018</p>
              <p className="achievement-description">
                Serious Game to Improve Attention Using EEG-Biofeedback
              </p>
            </div>
            <div className="achievement-item">
              <h3>Dean's List</h3>
              <p className="achievement-year">2015 – 2018</p>
              <p className="achievement-description">
                Recognized for academic excellence throughout undergraduate studies
              </p>
            </div>
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
            <a href="https://www.linkedin.com/in/nurul-syazwani-samsudin-811b76170/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:yunsyazwani@gmail.com" className="social-link">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Nurul Syazwani. All rights reserved.</p>
      </footer>

      {/* Image Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <img src="%PUBLIC_URL%/ss1.png" alt="Jurong Port Website Preview" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
