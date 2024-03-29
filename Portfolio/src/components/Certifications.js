import udemy from "../assets/img/udemy.png";
import ibm from "../assets/img/ibm.png";
import google from "../assets/img/google.jpg";
import gc from "../assets/img/gc.jpg";
import ceh from "../assets/img/ceh.jpg";
import linkedin from "../assets/img/linkedin.png";
import codered from "../assets/img/codered.jpeg";
import aws from "../assets/img/aws.png";
import fortinet from "../assets/img/fortinet.jpg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Certifications = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Courses & Certifications</h2>
                        <p>I have earned some certifications in both Web development and Cyber Security domains. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={udemy} alt="Webdev" />
                                <h5>Full Stack Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={ibm} alt="ibm" />
                                <h5>Relational Databases</h5>
                            </div>
                            <div className="item">
                                <img src={google} alt="google" />
                                <h5>Foundations of UX Design</h5>
                            </div>
                            <div className="item">
                                <img src={gc} alt="GoogleCloud" />
                                <h5>Google Cloud Skills Boost</h5>
                            </div>
                            <div className="item">
                                <img src={ceh} alt="EthicalHacking" style={{height:'160px', width:'250px'}} />
                                <h5>Certified Ethical Hacker</h5>
                            </div>
                            <div className="item">
                                <img src={linkedin} alt="Frontend" />
                                <h5>Frontend Developer</h5>
                            </div>
                            <div className="item">
                                <img src={codered} alt="DFE" />
                                <h5>Digital Forensic Essentials</h5>
                            </div>
                            <div className="item">
                                <img src={fortinet} alt="EthicalHacking" />
                                <h5>NSE1 , NSE2</h5>
                            </div>
                            <div className="item">
                                <img src={aws} alt="EthicalHacking" />
                                <h5>AWS Security Fundamentals</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
