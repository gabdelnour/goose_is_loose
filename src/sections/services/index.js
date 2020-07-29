import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BaffleText from "components/baffle-text";
import AnimationContainer from "components/animation-container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython, faAws } from "@fortawesome/free-brands-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import Particles from "react-particles-js";
import ThemeContext from "../../context";
import "./styles.scss";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.show = this.show.bind(this);
  }

  static contextType = ThemeContext;

  show() {
    this.setState({ show: true });
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="services"
        style={{ height: this.context.height }}
      >
        {this.particles()}
        <Row
          className="top"
          style={{
            maxHeight:
              this.context.height !== "auto"
                ? this.context.height * 0.8
                : "inherit",
          }}
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Services</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="What I Do"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight:
                    this.context.height !== "auto"
                      ? this.context.height * 0.6
                      : "inherit",
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
      </section>
    );
  }

  services() {
    if (this.state.show || this.context.height === "auto") {
      return (
        <Row>
          <Col md={4} className="service  border-side">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <h4>
                {" "}
                <Typewriter
                  options={{
                    strings: ["Front-End React Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h4>
              <p>
                What I love most about React is the ability to create cool apps
                with a very quick workflow. I am currently working on an app to
                visualize pathfinding and sorting algorithms. Can't wait for you
                to check it out! I also have an app I developed for my coding
                bootcamp at Wyncode to display data from a Financial API.
              </p>
            </AnimationContainer>
          </Col>
          <Col></Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon">
                <FontAwesomeIcon icon={faPython} />
              </div>
              <h4>
                {" "}
                <Typewriter
                  options={{
                    strings: ["Data Science with Python"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h4>
              <p>
                Data Science with Python is definitely one of my favorie skills
                to have. I love learning about Python libraries, I'm currently
                developing Financial trading algorithms with Quantopian. I use
                libraries like matplotlib to visualize my analysis and explain
                my investment philosophies.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service  border-side">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faAws} />
              </div>
              <h4>
                {" "}
                <Typewriter
                  options={{
                    strings: ["AWS Management"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h4>
              <p>
                During my time at Limbik I dealt with many AWS tools such as EC2
                instances, S3 Buckets, Redshift queries, Athena, AI APIs and
                their data, YOU NAME IT!!! I'm currently taking a course of
                Systemst Informations to understand more about Cloud Management,
                ETL Protocols, and DevOps.
              </p>
            </AnimationContainer>
          </Col>
          <Col></Col>
          <Col md={4} className="service  border-side">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faRobot} className="solid" />
              </div>
              <h4>
                {" "}
                <Typewriter
                  options={{
                    strings: ["Artificial Intelligence"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h4>
              <p>
                If you're reading this paragraph then thank you for your
                attention!!! ALthough I have used AWS and IBM AI APIs I'm by no
                means an expert, but I do try everyday to learn more about how
                computers are able to learn. I'm currently taking a course on
                Mathematical Thinking in Computer Science to build a foundation
                of mathematics and then become a true AI EXPERT!
              </p>
            </AnimationContainer>
          </Col>
        </Row>
      );
    }
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
                value_area: 4000,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.5,
              color: "#ead136",
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

export default Services;
