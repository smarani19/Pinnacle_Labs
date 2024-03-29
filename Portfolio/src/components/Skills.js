import webdev from "../assets/img/webdev.png";
import java from "../assets/img/java.png";
import cysec from "../assets/img/cybersec.png";
import mysql from "../assets/img/mysql.png";
import others from "../assets/img/others.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
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
                        <h2>Skills</h2>
                        <p>I am well versed in Java, HTML ,CSS , Bootstrap , React , Mysql and Javascript along with the basics of cyber security, C++ and python.  </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={webdev} alt="Webdev" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="java" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={cysec} alt="cybersec" />
                                <h5>Cyber security</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Mysql" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={others} alt="others" />
                                <h5>Other languages</h5>
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
