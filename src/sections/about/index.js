import React from "react";
import Particles from "react-particles-js";
import Typewriter from "typewriter-effect";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ThemeContext from "../../context";
import "./styles.scss";

class Hero extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="about"
        style={{ height: this.context.height }}
      >
        {this.particles()}
        <Row>
          <Col md={6} className="content">
            <div className="content-text">
              <div className="line-text">
                <h4>
                  <Typewriter
                    options={{
                      strings: ["Hi there!"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h4>
              </div>
              <h3>Here is a little about me</h3>
              <div className="separator" />
              <p>
                I was born and raised in Caracas, Venezuela. At 14 I moved to
                Miami Florida. Upon graduating High School I attended Santa
                Clara University where I was a D1 rower. By Junior year, I
                transfered to George Washington University where I graduated
                with a double major on Economics and Political Science.
                <br></br>
                <br></br>
                My passion for software development arrised from my love for
                data analysis. Being limited by BI tools and their default
                features. I realized I needed to learn craft of software
                development, to enhance my ability to handle data and create
                beautiful displays.
              </p>
              <div className="social social_icons">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="social_icon"
                  onClick={() => window.open("https://github.com/gabdelnour")}
                />
                {/* <FontAwesomeIcon
                  icon={faTwitter}
                  className="social_icon"
                  onClick={() => window.open("https://www.twitter.com")}
                />
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="social_icon"
                  onClick={() => window.open("https://www.youtube.com")}
                /> */}
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="social_icon"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/gustavo-abdelnour/"
                    )
                  }
                />
              </div>
            </div>
          </Col>
        </Row>
      </section>
    );
  }

  particles() {
    return (
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: false,
                value_area: 5000,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.5,
              color: "#76D395",
            },
            size: {
              value: 0.5,
            },
          },
          retina_detect: true,
        }}
      />
    );
  }
}

export default Hero;
