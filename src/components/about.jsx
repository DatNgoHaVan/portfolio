import React from "react";
import htmlImage from '../img/html5.svg';
import cssImage from '../img/css3.svg';
import gitImage from '../img/git.svg';
import javascriptImage from '../img/javascript.svg';
import reactImage from '../img/react.svg';
import reduxImage from '../img/redux.svg';
import sassImage from '../img/sass.svg';
import typescriptImage from '../img/typescript.svg';
import Zoom from 'react-reveal/Zoom';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80", img: htmlImage },
        {
          id: "CSS_skill",
          content: "CSS",
          porcentage: "80%",
          value: "80", img: cssImage
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90", img: javascriptImage
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80", img: reactImage
        },
        {
          id: "Git_skill",
          content: "Git",
          porcentage: "80%",
          value: "80", img: gitImage
        },
        {
          id: "Redux_skill",
          content: "Redux",
          porcentage: "80%",
          value: "80", img: reduxImage
        },
        {
          id: "SASS_skill",
          content: "SASS",
          porcentage: "80%",
          value: "80", img: sassImage
        },
        {
          id: "Typescript_skill",
          content: "Typescript",
          porcentage: "80%",
          value: "80", img: typescriptImage
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hi there 👋, I am Dat Ngo. A young software developer with young energy and a progressive spirit."
        },
        {
          id: "second-p-about",
          content:
            "I have two years experience as a Front-end developer with React. And working and living in Da Nang, Viet Nam."
        },
        {
          id: "third-p-about",
          content:
            "Moreover, I love to make some beautiful and modern websites, listening to music and reading technical articles is my passionate. Nice to work and share stories with you."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Skills</h5>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            {/* <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span> */}
                            <Zoom bottom>
                              <img className="col-md-10" style={{ width: '80px', height: '80px', padding: '0px 10px' }} src={skill.img} alt={skill.content} />
                            </Zoom>
                            {/* <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div> */}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
