import React from "react";
import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills_title">Skills</div>
      <div className="">
        <div className="skills_items">
          <div className="skills_item">
            <img src="/svg_icons/svg_icons/html5.svg" alt="skills" />
          </div>
          <div className="skills_item">
            <img src="/svg_icons/svg_icons/css.svg" alt="skills" />
          </div>
          <div className="skills_item">
            <img src="/svg_icons/svg_icons/sass.svg" alt="skills" />
          </div>
          <div className="skills_item">
            <img src="/svg_icons/svg_icons/react.svg" alt="skills" />
          </div>
          <div className="skills_item">
            <img src="/svg_icons/svg_icons/tailwind.svg" alt="skills" />
          </div>
          <div className="skills_item">
            <img src="/svg_icons/svg_icons/firebase.svg" alt="skills" />
          </div>
          <div className="skills_item">
            <img src="/svg_icons/svg_icons/nextjs.svg" alt="skills" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
