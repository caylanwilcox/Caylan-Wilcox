import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This imports default carousel styles
import './FullScreenWithCarousel.css'; // This imports your custom styles
import fullscreenBackground from './fullscreen-background.jpg'; // Ensure the path to your image is correct
import htmlcss from './htmlcss.png';
import js from './js.jpg';
import rect from './rect.png';
import npm from './npm-logo.png'
import GitHub from './GitHub-logo.png'
import Figma from './Figma.png'
import Ubuntu from './Ubuntu.png'
import vsc from './vs.png'
import aws from './AWS.png'
import git from './gits.jpg'
import prof from './teams.png'
// Define your slide component
const Slide = ({ title, content }) => {
  return (
    <div className="slide-container">
      <h2>{title}</h2>
      {typeof content === 'string' ? <p>{content}</p> : content}
    </div>
  );
};

// The FullScreenWithCarousel component
const FullScreenWithCarousel = () => {
 const [showSlides, setShowSlides] = useState(false);

  // Correctly place function here
  const handleArrowClick = () => setShowSlides(true);


  return (
    <div className="fullscreen-container" style={{ backgroundImage: `url(${fullscreenBackground})` }}>
<div className={`hero-text ${showSlides ? 'hidden' : ''}`}>Journey <h4> by Caylan Wilcox</h4></div>

      {!showSlides && (
        <button onClick={handleArrowClick} className="start-slideshow-arrow">→</button>
      )}
      <div className={showSlides ? "carousel-visible" : "carousel-hidden"}>
        <Carousel
          showArrows={true}
          autoPlay={false}
          infiniteLoop={true}
          showThumbs={false}
          // Ensure onClickItem is not needed or correctly used if intended
        >
         <Slide title="My Passion for Software Development" content="My passion is having ideas and solving how to bring them to life. I love self growth and talking about it because I would not be building applications today without it. I am gravited with the challenges associated with being on the bleeding edge of technology. Being a software engineer at tesla would mean the impossible to me. Please take a look through my portfolio and thank you for your time." />
         
          <div className="slide-container">
              <div className="header-container">
    <h1>I'M Caylan Wilcox</h1>
    <p>Frontend WebDeveloper</p>
    <button className="contact-me-btn">Contact Me</button>
    {/* Include social icons if needed */}
  </div>
 <div className="skills-header">
    <h2>Skills and Technologies</h2>
  </div>
  <div className="skills-grid">
    {/* Row of 4 items */}
    <div className="skill-item">
      <img src={htmlcss} alt="HTML & CSS" />
      <p>HTML & CSS</p>
    </div>
    <div className="skill-item">
      <img src={js} alt="Javascript" />
      <p>Javascript</p>
    </div>
    <div className="skill-item">
      <img src={rect} alt="React" />
      <p>React</p>
    </div>
    <div className="skill-item">
      <img src={npm} alt="npm" />
      <p>npm</p>
    </div>
    {/* Row of 3 items */}
    <div className="skill-item">
      <img src={GitHub} alt="GitHub" />
      <p>GitHub</p>
    </div>
    <div className="skill-item">
      <img src={Figma} alt="Figma" />
      <p>Figma</p>
    </div>
    <div className="skill-item">
      <img src={Ubuntu} alt="Ubuntu" />
      <p>Ubuntu</p>
    </div>
    {/* Row of 2 items */}
    <div className="skill-item">
      <img src={aws} alt="AWS Cloud9" />
      <p>AWS Cloud9</p>
    </div>
    <div className="skill-item">
      <img src={vsc} alt="Visual Studio Code" />
      <p>Visual Studio Code</p>
    </div>
    {/* Row of 1 item */}
    <div className="skill-item">
       <img src={git} alt="git" />
      <p>Git Source Control</p>
    </div>
  </div>
</div>

          <Slide title="Project Highlights" content={
            <ul>
              <li>Developed a real-time chat application using WebSocket</li>
              <li>Created a personal finance tracking app with React Native</li>
              <li>Built a machine learning model to predict stock prices</li>
            </ul>
          } />
          <Slide title="Hobbies and Interests" content={
            <p>In my free time, I enjoy hiking, reading about new technology trends, and participating in hackathons to challenge myself and learn from others.</p>
          } />
          <Slide title="Future Goals" content={
            <p>Looking forward, I aim to deepen my knowledge in cloud computing and cybersecurity, areas that are rapidly evolving and critical to the future of technology.</p>
          } />
       </Carousel>
        </div>
    </div>
  );
};

export default FullScreenWithCarousel;
