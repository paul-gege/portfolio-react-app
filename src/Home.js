import React, {Fragment} from 'react';
import "./styles.css";
import {Link} from "react-router-dom";
import styled from "styled-components";
import profile from "./Profile.jpg"
import strengths from "./strength.png"
import skills from "./skills.png";
import learning from "./learning.png";
import construction from "./construction.png";

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
        <div className="card">
          <a className="grid-points project front" href="http://www.magnyx.com">
            <ProjectDiv> 
                <div className="headings">
                  <img src={learning} alt="Learning"/>
                  <h3 className="header">Project 1</h3>
                </div>
                <div className="content">
                  <h2>E-commerce Store</h2>
                  <div>(Full-Stack) Hover for more details</div>
                  <div>Click here view project</div>

                </div>
            </ProjectDiv>
          </a>
          <a className="grid-points project back" href="http://www.magnyx.com">
            <ProjectDiv> 
                <div className="headings">
                  <img src={learning} alt="Learning"/>
                  <h3 className="header">Project 1</h3>
                </div>
                <div className="content">
                  <div>Developed from start to finish showcasing knowledge of the Mongo Express React and Node.js (MERN) stack. This store comes with functionalities such as CRUD on store products and categories as well as other items. There are 2 types of users; admin and regular users. Regular users are can add items to their cart filter database for products and much more. (click here to try it out) 
                  </div>
                </div>
            </ProjectDiv>
          </a>
        </div>

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
        <div className="card">
          <a className="grid-points project front" href="https://arcane-taiga-53595.herokuapp.com/">
            <ProjectDiv> 
                <div className="headings">
                  <img src={learning} alt="Learning"/>
                  <h3 className="header">Project 2</h3>
                </div>
                <div className="content">
                  <h2>Sign-in/Sign-up page</h2>
                  <div>(Front-end) Hover for more details</div>
                  <div>Click here view project</div>
                </div>
            </ProjectDiv>
          </a>
          <a className="grid-points project back" href="https://arcane-taiga-53595.herokuapp.com/">
            <ProjectDiv> 
                <div className="headings">
                  <img src={learning} alt="Learning"/>
                  <h3 className="header">Project 2</h3>
                </div>
                <div className="content">
                  <div>
                    This project showcases a responsive sign-up/sign-in (using React and CSS) that displays the appropriate content for all screen sizes. The page is also dynamic and serves as both the sign-up and sign-in page with simple buttons to help switch states between the sign-up form and sign-in form. The forms however do not have any functional purpose.(click here test how it renders on different screen sizes - simply adjust your browser size)  
                  </div>
                </div>
            </ProjectDiv>
          </a>
        </div>

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
      
        <div className="card">
          <a className="grid-points project front" href="https://shielded-dawn-21297.herokuapp.com/">
            <ProjectDiv> 
                <div className="headings">
                  <img src={learning} alt="Learning"/>
                  <h3 className="header">Project 3</h3>
                </div>
                <div className="content">
                  <h2>Sign-in/Sign-up page (Another)</h2>
                  <div>(Front-end) Hover for more details</div>
                  <div>Click here view project</div>

                </div>
            </ProjectDiv>
          </a>
          <a className="grid-points project back" href="https://shielded-dawn-21297.herokuapp.com/">
            <ProjectDiv> 
                <div className="headings">
                  <img src={learning} alt="Learning"/>
                  <h3 className="header">Project 3</h3>
                </div>
                <div className="content">
                  <div>
                    This is another project which showcases a responsive sign-in/sign-up page (using React and CSS) that displays the appropriate content for all screen sizes. (click here test how it renders on different screen sizes - simply adjust your browser size) 
                  </div>
                </div>
            </ProjectDiv>
          </a>
        </div>

        <div className="grid-points">
          <div className="headings">
            <img src={construction} alt="Under construction"/>
            <h3 className="header">Working towards more...</h3>
          </div>
        </div>


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

      .card {
        width: 100%;
        height: 100%;
        position: relative;
        perspective: 800px;
      }

      .front, .back {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        backface-visibility: hidden;
      }

      .front {
        background-color: black;
        color: white;
        transition: transform 0.8s;
      }

      .back {
        background-color: white;
        color: black;
        transform: rotateY(180deg);
        transition: transform 0.8s;
      }

      .card:hover .back {
        transform: rotateY(0deg);
      }

      .card:hover .front {
        transform: rotateY(-180deg);
      }

  .grid-points {
    box-shadow: 0px 5px 7px #E5E5E5;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .project{
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
