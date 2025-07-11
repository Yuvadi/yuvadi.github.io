import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

const NavBar = ({ toggleTheme, darkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-0a0f1b shadow-md z-50 p-4 h-16 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-ff6347">Aditya Bhagchandani</a>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="nav-link text-lg text-00ced1 hover:text-ff69b4 transition-colors duration-300">Home</a>
          <a href="#about" className="nav-link text-lg text-00ced1 hover:text-ff69b4 transition-colors duration-300">About</a>
          <a href="#projects" className="nav-link text-lg text-00ced1 hover:text-ff69b4 transition-colors duration-300">Projects</a>
          <a href="#experience" className="nav-link text-lg text-00ced1 hover:text-ff69b4 transition-colors duration-300">Experience</a>
          <a href="#contact" className="nav-link text-lg text-00ced1 hover:text-ff69b4 transition-colors duration-300">Contact</a>
          <button onClick={toggleTheme} className="text-lg text-00ced1 hover:text-ff69b4 transition-colors duration-300">
            <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>
        </div>
        <button className="md:hidden text-00ced1 hover:text-ff69b4 transition-colors duration-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mobile-nav p-4 bg-0a0f1b w-full absolute top-16 left-0 z-50">
          <a href="#home" className="nav-link text-lg text-ff6347 block py-2 hover:text-ff69b4 transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="nav-link text-lg text-ff6347 block py-2 hover:text-ff69b4 transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#projects" className="nav-link text-lg text-ff6347 block py-2 hover:text-ff69b4 transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          <a href="#experience" className="nav-link text-lg text-ff6347 block py-2 hover:text-ff69b4 transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
          <a href="#contact" className="nav-link text-lg text-ff6347 block py-2 hover:text-ff69b4 transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <button onClick={toggleTheme} className="text-lg text-ff6347 block py-2 hover:text-ff69b4 transition-colors duration-300">
            <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>
        </div>
      )}
    </nav>
  );
};

const Home = ({ data }) => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-8b3e4e/50 via-3498db/50 to-ff4500/50 text-ffffff pt-16">
    <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-d4a017/50 hover:shadow-xl transition-all duration-300" data-aos="fade-in">
      <img src={data.profileImage} alt="Aditya" className="w-32 h-32 sm:w-48 sm:h-48 rounded-full mx-auto mb-6 border-4 border-ff6347 shadow-md hover:scale-105 transition-transform duration-300" />
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-ff6347" data-aos="fade-in" data-aos-delay="100">Aditya Bhagchandani</h1>
      <p className="text-xl sm:text-2xl mb-6 text-00ced1" data-aos="fade-in" data-aos-delay="200">{data.title}</p>
      <div className="flex justify-center space-x-6" data-aos="fade-in" data-aos-delay="300">
        <a href={data.linkedin} target="_blank" className="text-3xl text-00ced1 hover:text-ff69b4 transition-colors duration-300"><i className="fab fa-linkedin"></i></a>
        <a href={data.github} target="_blank" className="text-3xl text-00ced1 hover:text-ff69b4 transition-colors duration-300"><i className="fab fa-github"></i></a>
        <a href={data.portfolio} target="_blank" className="text-3xl text-00ced1 hover:text-ff69b4 transition-colors duration-300"><i className="fas fa-globe"></i></a>
      </div>
    </div>
  </section>
);

const About = ({ data }) => (
  <section id="about" className="py-16 bg-gradient-to-br from-8b3e4e/20 via-00ced1/20 to-ff6347/20 backdrop-blur-sm" data-aos="fade-in">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-00ced1 mb-8 text-center" data-aos="fade-in">About Me</h2>
      <p className="text-lg text-center max-w-3xl mx-auto mb-10 text-ffffff" data-aos="fade-in" data-aos-delay="100">{data.summary}</p>
      <h3 className="text-3xl font-semibold text-ff4500 mb-6" data-aos="fade-in" data-aos-delay="200">Education</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.education.map((edu, index) => (
          <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg border border-d4a017/50 transition-all duration-300" data-aos="fade-in" data-aos-delay={index * 100}>
            <h4 className="text-xl font-bold text-ff6347">{edu.title}</h4>
            <p className="italic text-00ced1">{edu.institution}, {edu.duration}</p>
            <ul className="list-disc pl-5 text-ffffff mt-4">
              {edu.details.map((detail, i) => <li key={i}>{detail}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <h3 className="text-3xl font-semibold text-ff4500 mt-12 mb-6" data-aos="fade-in" data-aos-delay="300">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.skills.map((skill, index) => (
          <div key={index} className="p-5 bg-white/10 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg border border-d4a017/50 transition-all duration-300" data-aos="fade-in" data-aos-delay={index * 100}>
            <strong className="text-xl text-ff6347">{skill.category}:</strong>
            <p className="text-ffffff mt-2">{skill.items}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = ({ data }) => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'bg-ff6347',
        bulletActiveClass: 'bg-ff69b4'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 40 },
      },
    });
  }, []);

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-3498db/20 via-ff6347/20 to-00ced1/20 backdrop-blur-sm" data-aos="fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-00ced1 mb-8 text-center" data-aos="fade-in">Key Projects</h2>
        <div className="swiper">
          <div className="swiper-wrapper">
            {data.map((project, index) => (
              <div key={index} className="swiper-slide">
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl border border-d4a017/50 transition-all duration-300" data-aos="fade-in" data-aos-delay={index * 100}>
                  <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-2xl font-semibold text-ff6347">{project.name}</h3>
                  <p className="text-ffffff text-base mb-4">{project.description}</p>
                  <a href={project.link} target="_blank" className="text-00ced1 hover:text-ff69b4 transition-colors duration-300 inline-flex items-center"><i className="fab fa-github mr-2"></i> View Project</a>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next text-ff6347 hover:text-ff69b4"></div>
          <div className="swiper-button-prev text-ff6347 hover:text-ff69b4"></div>
        </div>
      </div>
    </section>
  );
};

const Experience = ({ data }) => (
  <section id="experience" className="py-16 bg-gradient-to-br from-ff4500/20 via-00ced1/20 to-ff6347/20 backdrop-blur-sm" data-aos="fade-in">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-00ced1 mb-8 text-center" data-aos="fade-in">Professional Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((exp, index) => (
          <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg border border-d4a017/50 transition-all duration-300" data-aos="fade-in" data-aos-delay={index * 100}>
            <h4 className="text-xl font-bold text-ff6347">{exp.title}</h4>
            <p className="italic text-00ced1">{exp.institution}, {exp.duration}</p>
            <ul className="list-disc pl-5 text-ffffff mt-4">
              {exp.details.map((detail, i) => <li key={i}>{detail}</li>)}
            </ul>
            <a href={exp.link} target="_blank" className="text-00ced1 hover:text-ff69b4 mt-4 inline-flex items-center transition-colors duration-300">About <i className="fas fa-arrow-right ml-2"></i></a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '885e7244-1d71-4396-8ee3-5bd2639cbe91',
          ...formData
        })
      });
      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-16a085/20 via-ff6347/20 to-00ced1/20 backdrop-blur-sm" data-aos="fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-00ced1 mb-8 text-center" data-aos="fade-in">Contact Me</h2>
        <div className="max-w-lg mx-auto p-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-d4a017/50">
          <div className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              style={{ color: '#000000' }} // Inline style to force black text
              className="w-full p-4 rounded-lg bg-ff6347/20 border-2 border-d4a017/50 focus:outline-none focus:ring-2 focus:ring-ff6347 transition-all duration-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              style={{ color: '#000000' }} // Inline style to force black text
              className="w-full p-4 rounded-lg bg-ff6347/20 border-2 border-d4a017/50 focus:outline-none focus:ring-2 focus:ring-ff6347 transition-all duration-300"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              style={{ color: '#000000' }} // Inline style to force black text
              className="w-full p-4 rounded-lg bg-ff6347/20 border-2 border-d4a017/50 focus:outline-none focus:ring-2 focus:ring-ff6347 transition-all duration-300"
              rows="3"
              required
            />
            <button
              type="submit"
              className="w-full p-4 rounded-lg custom-submit-button shadow-md"
              onClick={handleSubmit}
            >Send Message</button>
            {status && <p className="text-center text-ff4500 mt-4 animate-fade-in" data-aos="fade-in">{status}</p>}
            <p className="text-center text-ff4500 mt-4 animate-fade-in" data-aos="fade-in">For additional inquiries: <a href="mailto:aditya.yuvadi@gmail.com" className="underline">aditya.yuvadi@gmail.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [homeData, setHomeData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [projectsData, setProjectsData] = useState(null);
  const [experienceData, setExperienceData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fallbackData = {
    home: {
      name: "Aditya Prakash Bhagchandani",
      title: "Robotics & Automation Engineer | B.Sc. Graduate (Expected Sept. 2025)",
      profileImage: "https://via.placeholder.com/150?text=Aditya+Photo",
      linkedin: "https://linkedin.com/in/aditya-bhagchandani",
      github: "https://github.com/Yuvadi",
      portfolio: "https://yuvadi.github.io"
    },
    about: {
      summary: "Robotics and Automation Engineering graduate (expected September 2025) with expertise in AI-driven automation, machine learning, and autonomous systems.",
      education: [],
      skills: []
    },
    projects: [],
    experience: []
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const fetchData = async (url, setter, fallback) => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch ${url}`);
        const data = await response.json();
        setter(data);
      } catch (err) {
        console.error(`Error fetching ${url}:`, err);
        setter(fallback);
        setError(`Failed to load some data. Using fallback content.`);
      }
    };

    const loadData = async () => {
      await Promise.all([
        fetchData('./home.json', setHomeData, fallbackData.home),
        fetchData('./about.json', setAboutData, fallbackData.about),
        fetchData('./projects.json', setProjectsData, fallbackData.projects),
        fetchData('./experience.json', setExperienceData, fallbackData.experience)
      ]);
      setLoading(false);
    };

    loadData();
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
    document.body.classList.toggle('light-mode', darkMode);
  };

  if (loading) {
    return <div className="loading text-ffffff text-2xl text-center py-20" data-aos="fade-in">Loading...</div>;
  }

  if (error) {
    console.warn(error);
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      {error && <div className="error text-ff4500 text-center py-4" data-aos="fade-in">{error}</div>}
      <NavBar toggleTheme={toggleTheme} darkMode={darkMode} />
      <Home data={homeData} />
      <About data={aboutData} />
      <Projects data={projectsData} />
      <Experience data={experienceData} />
      <Contact />
      <footer className="bg-gradient-to-r from-8b3e4e to-00ced1 py-6 text-center">
        <p className="text-00ced1">© 2025 Aditya Prakash Bhagchandani. All rights reserved. contact: <a href="mailto:aditya.yuvadi@gmail.com" className="underline">aditya.yuvadi@gmail.com</a></p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);