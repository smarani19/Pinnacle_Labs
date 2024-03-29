import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "TedX VIT Bhopal (Ongoing)",
      description: "The official website of TEDx VIT Bhopal chapter using React ",
      imgUrl: projImg1,
      proj_link: "https://github.com/TEDxVITBhopal/tedxvitbhopal",
    },
    {
      title: "InYourBelly (OnGoing) ",
      description: "A food ordering delivery app built for UnderBelly - the VIT Bhopal food zone using React",
      imgUrl: projImg2,
      proj_link:"https://github.com/smarani19",
    },
    {
      title: "Friendly Footprint",
      description: "A website for selling eco friendly products using HTML,CSS, Bootstrap,Python,SQLalchemy,Flask",
      imgUrl: projImg3,
      proj_link:"https://github.com/smarani19/friendly-footprint",
    },
    {
      title: "IDS for DOS Attack",
      description: "Development of a scanner to detect DOS attack on a website using our own developed algorithm",
      imgUrl: projImg5,
      proj_link:"" ,
    },
 
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p className="project-p"> My interest in both web development and security has pushed me to build projects in both the domain. So, have a look at some of my projects !</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
               
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane> 
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
