import React from "react";
import { Button } from "./Button.js";
import "../components/HeroSection.css";
import "../App.css";
import "./Button.css";

export const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAIT</h1>
      <p>What are you waiting for</p>
      <div className="hero-btns">
        <Button buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button buttonSize="btn--large">
          WATCH TRAILER
          <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
};
