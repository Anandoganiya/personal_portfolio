import React from "react";
import "./projects.scss";

const Projects = () => {
  return (
    <div className="project" id="project">
      <div className="project_title">Projects</div>
      <div className="card_container">
        <div className="card_item">
          <img src="/images/bloggingImage.jpeg" alt="project" />
          <span>Blogging Web App</span>
          <div className="links">
            <a href="https://blogging-day.vercel.app/">visit</a>
            <a href="https://github.com/Anandoganiya/bloggingDay">GitHub</a>
          </div>
        </div>
        <div className="card_item">
          <img src="/images/insta.jpg" alt="project" />
          <span>Instagram Clone</span>
          <div className="links">
            <a href="https://insta-ochre.vercel.app/">visit</a>
            <a href="https://github.com/Anandoganiya/instagram_clone">GitHub</a>
          </div>
        </div>
        <div className="card_item">
          <img src="/images/movie.jpg" alt="project" />
          <span>Movie Web App</span>
          <div className="links">
            <a href="https://movie-app-anandoganiya.vercel.app/">visit</a>
            <a href="https://github.com/Anandoganiya/Movie-app">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
