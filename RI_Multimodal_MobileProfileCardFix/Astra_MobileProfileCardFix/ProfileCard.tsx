import React from 'react';
import './style.css';
import profileImg from './profile.jpg';

export default function ProfileCard() {
  return (
    <article className="profile-card">
      <img className="profile-photo" src={profileImg} alt="Profile" />
      <header className="profile-heading">
        <h1>Alex Morgan</h1>
        <p className="role">Full Stack Developer</p>
      </header>
      <p className="bio">Building clean, accessible web experiences with React and TypeScript.</p>
      <div className="actions">
        <button>View Profile</button>
        <button className="secondary">Contact Me</button>
      </div>
    </article>
  );
}
