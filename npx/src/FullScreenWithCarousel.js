import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This imports default carousel styles
import './FullScreenWithCarousel.css'; // This imports your custom styles
import fullscreenBackground from './fullscreen-background.jpg'; // Ensure the path to your image is correct

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
  return (
    <div className="fullscreen-container" style={{ backgroundImage: `url(${fullscreenBackground})` }}>
      <Carousel showArrows={true} autoPlay={false} infiniteLoop={true} showThumbs={false}>
        <Slide title="My Passion for Software Development" content="I've always been fascinated by the power of code to transform ideas into reality. My journey in software development started with..." />
        <Slide title="Skills and Technologies" content={
          <ul>
            <li>Proficient in Python, JavaScript, and C#</li>
            <li>Experience with React, Node.js, and .NET</li>
            <li>Strong understanding of RESTful APIs and microservices</li>
          </ul>
        } />
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
  );
};

export default FullScreenWithCarousel;
