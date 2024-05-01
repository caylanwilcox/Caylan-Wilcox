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

const Slide = ({ title, content,handleCloseSlides  }) => (
  <div className="slide-container">
    <h2>{title}</h2>
    {typeof content === 'string' ? <p>{content}</p> : content}
     <button onClick={handleCloseSlides} className="close-button">×</button>
  </div>
);

const Project = ({ title, image, link }) => (
  <div className="project-item" onClick={(e) => {
    e.preventDefault(); // Prevent default and stop propagation if needed
    console.log('Opening link:', link); // Debugging output
    window.open(link, '_blank'); // Ensure the link opens in a new tab
  }}>
    <img src={image} alt={title} style={{ cursor: 'pointer' }} />
    <p>{title}</p>
  </div>
);
const projectDetails = [
  { title: 'Realtime Tesla Fleet Manager', image: project1Img, id: 'project1', link:'https://tesla-test-drive.vercel.app/',  technologies: ['React', 'css', 'MongoDB'] },
  { title: 'Luxury Jewelers Website', image: project2Img, id: 'project2',link:'https://jewelry-business-react.vercel.app/' },
  { title: 'Car Detailing Website Night Mode', image: project3Img, id: 'project3',link:'https://window-tints.vercel.app/' },
  { title: 'Tesla Online Proposal', image: project4Img, id: 'project4',link:'https://tesla-online-etxg.vercel.app/' }
];



const handleProjectClick = (link) => {
  console.log("Link to open:", link); // Check if the link is correct
  window.open(link, '_blank');
};
const ProjectHighlightsSlide = ({ handleCloseSlides }) => (
  <div className="slide-container">
    <h2>Project Highlights</h2>
    <div className="projects-grid">
      {projectDetails.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          image={project.image}
          link={project.link}
          onClick={handleProjectClick} // Passing the function directly
        />
      ))}
    </div>
    <button onClick={handleCloseSlides} className="close-button">×</button>
  </div>
);

const FullScreenWithCarousel = () => {
  const [showSlides, setShowSlides] = useState(false);
  const handleCloseSlides = () => setShowSlides(false);
  const handleArrowClick = () => setShowSlides(true);
const [email, setEmail] = useState('');
const handleEmailChange = (e) => {
  setEmail(e.target.value);
};
const handleEmailSubmit = async () => {
  try {
    const response = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    });
    const data = await response.json();
    console.log(data);
    alert('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Failed to send email.');
  }
};

  return (
    <div className="fullscreen-container" style={{ backgroundImage: `url(${fullscreenBackground})`,backgroundPosition: ' center' }}>
      {!showSlides && (
        <div className="hero-text">
          <h1>Hello, my name is</h1>
          <h2 className="name">Caylan Wilcox</h2>
          <h3>I'm a <span className="">Developer</span> Dedicated to Connecting<br /><span className="name"> Users </span>to <span className="name">Technology</span>.</h3>
         <div className="email-input-container">
  <input type="email" placeholder="Enter Your Email" value={email} onChange={handleEmailChange} />
  <button onClick={handleEmailSubmit}>Let's Connect</button>
</div>
        </div>
      )}
      {!showSlides && (
        <button onClick={handleArrowClick} className="start-slideshow-arrow">→</button>
      )}
      {showSlides && (
        <div className={showSlides ? "carousel-visible" : "carousel-hidden"}>
          <Carousel showArrows={true} autoPlay={false} infiniteLoop={true} showThumbs={false}>
            <Slide title="My Passion for Software Development" content="My passion is having ideas and solving how to bring them to life. I love self growth and talking about it because I would not be building applications today without it. I am gravited with the challenges associated with being on the bleeding edge of technology. Being a software engineer at tesla would mean the impossible to me. Please take a look through my portfolio and thank you for your time." handleCloseSlides={handleCloseSlides} />
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
            <ProjectHighlightsSlide handleCloseSlides={handleCloseSlides} />
            <Slide title="Hobbies and Interests" content="In my free time I love working on my art which is music and technology. If not I am watching Joe Rogan science podcasts, spending time with the family, thinking about cool inventions or helping those around me." handleCloseSlides={handleCloseSlides} />
            <Slide title="Future Goals" content="Looking forward, I aim to deepen my knowledge in 3d web and app development, areas that are rapidly evolving and critical to the future of technology."handleCloseSlides={handleCloseSlides} />
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default FullScreenWithCarousel;
