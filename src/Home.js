import React, {Fragment} from 'react';
import "./styles.css";
import {Link} from "react-router-dom";
import styled from "styled-components";
import profile from "./Profile.jpg"
import strengths from "./strength.png"
import skills from "./skills.png";
import learning from "./learning.png"

function Home() {
  return (
    <Fragment>
      <Announcement>Currently still available for full-time/co-op/internship opportunities</Announcement>
      <ContainerDiv>
        <AboutDiv>
          <div className="profile-image">
            <img src={profile} alt="profile-picture"/>
          </div>
          <h2>Paul Femi-Gege</h2>
          <div className="career">Software Engineer (Final Year at UOIT)</div>
          <div> gege.temi@gmail.com </div>
        </AboutDiv>
        <div className="grid-points">
          <div className="headings">
            <img src={strengths} alt="strengths"/>
            <h3 className="header">Strengths</h3>
          </div>
          <div className="content">
            <div>Full-Stack Development (Reactjs & Node.js)</div>
            <div>Experience with Python</div>
            <div>In-depth understanding of CSS</div>
          </div>
        </div>

        <a className="grid-points project" href="http://www.magnyx.com">
          <ProjectDiv> 
              <div className="headings">
                <img src={learning} alt="Learning"/>
                <h3 className="header">Project 1</h3>
              </div>
              <div className="content">
                <h2>E-commerce Store</h2>
                <div>Complete functional demo store (Full-Stack)</div>
                <div>Click here view project</div>

              </div>
          </ProjectDiv>
        </a>

        <div className="grid-points">
          <div className="headings">
            <img src={skills} alt="Other skills"/>
            <h3 className="header">Other Attributes</h3>
          </div>
          <div className="content">
            <div>Willingness to learn</div> 
            <div>Excellent troubleshooting skills</div> 
            <div>Team player</div> 
            <div>Effective communication and interpersonal skills</div> 
          </div>
        </div>

        <a className="grid-points project" href="https://arcane-taiga-53595.herokuapp.com/">
          <ProjectDiv> 
              <div className="headings">
                <img src={learning} alt="Learning"/>
                <h3 className="header">Project 2</h3>
              </div>
              <div className="content">
                <h2>Sign-in/Sign-up page</h2>
                <div>Toggle between signin and signup (click buttons in transparent box - not actual form) - (Front-end)</div>
                <div>Click here view project</div>
              </div>
          </ProjectDiv>
        </a>

        <div className="grid-points">
          <div className="headings">
            <img src={learning} alt="Learning"/>
            <h3 className="header">Future Continuous Learning:</h3>
          </div>
          <div className="content">
            <div>React Native</div>
            <div>Hadoop Ecosystem</div>
            <div>Data Analytics</div>  
          </div>
        </div>

        <a className="grid-points project" href="https://shielded-dawn-21297.herokuapp.com/">
          <ProjectDiv> 
              <div className="headings">
                <img src={learning} alt="Learning"/>
                <h3 className="header">Project 3</h3>
              </div>
              <div className="content">
                <h2>Sign-in/Sign-up page (Another)</h2>
                <div>Functional demo - (Front-end)</div>
                <div>Click here view project</div>

              </div>
          </ProjectDiv>
        </a>


      </ContainerDiv>
    </Fragment>
  );
}

const Announcement = styled.div`
  width: 100%;
  text-align: center; 
  background-color: #FF6966;
  font-size: 20px;
`

const ContainerDiv = styled.div`
  width: 80%;
  margin: 70px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 20px;

  .grid-points {
    box-shadow: 0px 5px 7px #E5E5E5;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .project:hover  {
    background-color: white;
    color: black;
  }

  .project{
    background-color: black;
    color: white;
    text-decoration: none;
  }
  
  .headings {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }


  .headings img {
    width: 10%;
    min-width: 40px;
  }

  .headings h3 {
    margin: 0;
    text-align: center;
  }

  .content {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    font-size: 17px;
  }

  .content div {
    margin-bottom: 10px;
    width: 100%;
    text-align: center;

  }
  .content h2 {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const AboutDiv = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 5px 7px #E5E5E5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;


  h2 {
    width: 100%
    text-align: center;
    margin: 0;
    margin-bottom: 10px;
  }

  .profile-image img {
    width: 150%;
  }

  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .career {
    width: 100%;
    text-align: center;
  }
`

const ProjectDiv = styled.div`

`


export default Home;
