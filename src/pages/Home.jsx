import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I'm Roshan.</h2>
        <div className="prompt">
          <p>A web developer for passion for learning and creations.</p>
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <LinkedInIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJs, Redux, HTMl, CSS, React Native, NPM, BootStrap, Material
              Ui, Yarn, StyledComponent
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Nodejs, ExpressJs, MongoDb, SQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript, Python, C, C++, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
