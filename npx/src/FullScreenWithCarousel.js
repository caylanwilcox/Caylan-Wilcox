import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './FullScreenWithCarousel.css';
import fullscreenBackground from './fullscreen-background.jpg';
import htmlcss from './htmlcss.png';
import js from './js.jpg';
import rect from './rect.png';
import npm from './npm-logo.png';
import GitHub from './GitHub-logo.png';
import Figma from './Figma.png';
import Ubuntu from './Ubuntu.png';
import vsc from './vs.png';
import aws from './AWS.png';
import git from './gits.jpg';
import project1Img from './project1.png'; // Placeholder, replace with actual paths
import project2Img from './project2.jpg';
import project3Img from './project3.png';
import project4Img from './project4.jpg';

const Slide = ({ title, content }) => (
  <div className="slide-container">
    <h2>{title}</h2>
    {typeof content === 'string' ? <p>{content}</p> : content}
  </div>
);

const Project = ({ title, image, link }) => (
  <a href={link} className="project-item">
    <img src={image} alt={title} />
    <p>{title}</p>
  </a>
);


const projectDetails = [
  { title: 'Realtime Tesla Fleet Manager', image: project1Img, id: 'project1',  technologies: ['React', 'css', 'MongoDB'] },
  { title: 'Luxury Jewelers Website', image: project2Img, id: 'project2' },
  { title: 'Car Detailing Website Night Mode', image: project3Img, id: 'project3' },
  { title: 'Tesla Online Proposal', image: project4Img, id: 'project4' }
];



const handleProjectClick = (projectId) => {
  const project = projectDetails.find(p => p.id === projectId);
  if (project && project.link) {
    window.open(project.link, '_blank'); // This will open the link in a new tab
  }
};

const ProjectHighlightsSlide = () => (
  <div className="slide-container">
    <h2>Project Highlights</h2>
    <div className="projects-grid">
      {projectDetails.map((project) => (
        <Project
          key={project.id}
          
          title={project.title}
          image={project.image}
          onClick={() => handleProjectClick(project.id)}
        />
      ))}
    </div>
  </div>
);

const FullScreenWithCarousel = () => {
  const [showSlides, setShowSlides] = useState(false);
  const handleCloseSlides = () => setShowSlides(false);
  const handleArrowClick = () => setShowSlides(true);

  return (
    <div className="fullscreen-container" style={{ backgroundImage: `url(${fullscreenBackground})` }}>
      {!showSlides && (
        <div className="hero-text">
          <h1>Hello, my name is</h1>
          <h2>Caylan Wilcox</h2>
          <h3>I'm a Web Developer.</h3>
          <div className="email-input-container">
            <input type="email" placeholder="Enter Your Email" />
            <button>Let's Connect</button>
          </div>
        </div>
      )}
      {!showSlides && (
        <button onClick={handleArrowClick} className="start-slideshow-arrow">→</button>
      )}
      {showSlides && (
        <div className={showSlides ? "carousel-visible" : "carousel-hidden"}>
          <Carousel showArrows={true} autoPlay={false} infiniteLoop={true} showThumbs={false}>
            <Slide title="My Passion for Software Development" content="My passion is having ideas and solving how to bring them to life. I love self growth and talking about it because I would not be building applications today without it. I am gravited with the challenges associated with being on the bleeding edge of technology. Being a software engineer at tesla would mean the impossible to me. Please take a look through my portfolio and thank you for your time." />
            <div className="slide-container">
              <div className="skills-header">
                <h2>Skills and Technologies</h2>
              </div>
              <div className="skills-grid">
                <div className="skill-item"><img src={htmlcss} alt="HTML & CSS" /><p>HTML & CSS</p></div>
                <div className="skill-item"><img src={js} alt="Javascript" /><p>Javascript</p></div>
                <div className="skill-item"><img src={rect} alt="React" /><p>React</p></div>
                <div className="skill-item"><img src={npm} alt="npm" /><p>npm</p></div>
                <div className="skill-item"><img src={GitHub} alt="GitHub" /><p>GitHub</p></div>
                <div className="skill-item"><img src={Figma} alt="Figma" /><p>Figma</p></div>
                <div className="skill-item"><img src={Ubuntu} alt="Ubuntu" /><p>Ubuntu</p></div>
                <div className="skill-item"><img src={aws} alt="AWS Cloud9" /><p>AWS Cloud9</p></div>
                <div className="skill-item"><img src={vsc} alt="Visual Studio Code" /><p>Visual Studio Code</p></div>
                <div className="skill-item"><img src={git} alt="git" /><p>Git Source Control</p></div>
              </div>
              <button onClick={handleCloseSlides} className="close-button">×</button>
            </div>
            <ProjectHighlightsSlide />
            <Slide title="Hobbies and Interests" content="In my free time, I enjoy hiking, reading about new technology trends, and participating in hackathons to challenge myself and learn from others." />
            <Slide title="Future Goals" content="Looking forward, I aim to deepen my knowledge in cloud computing and cybersecurity, areas that are rapidly evolving and critical to the future of technology." />
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default FullScreenWithCarousel;
