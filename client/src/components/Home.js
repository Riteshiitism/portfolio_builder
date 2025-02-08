import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div>
      <div>
        <h1>Welcome to Digital Portfolio Builder</h1>
        <p>Showcase your work and achievements with a modern portfolio</p>
        <div>
          <div>
            <i className="fas fa-palette"></i>
            <h3>Beautiful Themes</h3>
            <p>Choose from professionally designed themes to match your style</p>
          </div>
          <div>
            <i className="fas fa-code"></i>
            <h3>Seamless Code Integration</h3>
            <p>Embed live code snippets and GitHub projects effortlessly</p>
          </div>
          <div>
            <i className="fas fa-images"></i>
            <h3>Rich Media Support</h3>
            <p>Enhance your portfolio with videos, images, and interactive elements</p>
          </div>
          <div>
            <i className="fas fa-award"></i>
            <h3>Showcase Achievements</h3>
            <p>Highlight certifications, skills, and accomplishments</p>
          </div>
          <div>
            <i className="fas fa-share-alt"></i>
            <h3>Easy Sharing</h3>
            <p>Share your portfolio with a unique link to impress potential employers</p>
          </div>
          <div>
            <i className="fas fa-users"></i>
            <h3>Community Engagement</h3>
            <p>Connect with like-minded professionals and showcase your work</p>
          </div>
        </div>
        <div>
          <Link to="/create">Build Your Portfolio</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
