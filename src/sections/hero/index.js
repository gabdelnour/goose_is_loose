import React from "react";
import "./styles.scss";
import { StaticQuery, graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Particles from "react-particles-js";
import Glitch from "components/glitch";
import ThemeContext from "../../context";
class Hero extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="hero"
        style={{ height: this.context.height }}
      >
        {this.particles()}
        <Row>
          <Col md={6} className="content">
            <div className="content-text">
              <div className="line-text">
                <h4>Hello, I'm</h4>
              </div>
              <Glitch text="Gustavo Abdelnour" />
              <Typewriter
                options={{
                  strings: [
                    "Data Scientist",
                    "Software Developer",
                    "Photographer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <a href="https://bit.ly/3jC0mec" target="_blank">
                <button className="hover-button">
                  <span>DOWNLOAD CV</span>
                </button>
              </a>
            </div>
            {this.icons()}
          </Col>
          <Col md={6} className="img">
            <img
              src={this.props.mainImg.childImageSharp.fluid.src}
              alt="person"
            />
          </Col>
        </Row>
      </section>
    );
  }

  icons() {
    return this.props.icons.edges.map((value, index) => {
      return (
        <img
          src={value.node.childImageSharp.fluid.src}
          className={`animated fadeIn move-${
            Math.floor(Math.random() * 10) % 2 === 0 ? "up" : "down"
          } float-image`}
          style={{
            left: `${index * 10}%`,
            bottom: `${
              Math.random() *
                (+(index % 2 === 0 ? 80 : 20) - +(index % 2 === 0 ? 70 : 10)) +
              +(index % 2 === 0 ? 70 : 10)
            }%`,
          }}
          alt="shape"
          key={index}
        />
      );
    });
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

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        icons: allFile(
          filter: {
            extension: { regex: "/(png)/" }
            relativeDirectory: { eq: "icons" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 100) {
                  src
                }
              }
            }
          }
        }
        Img: file(relativePath: { eq: "gooseAvatar.png" }) {
          childImageSharp {
            fluid(
              maxWidth: 2000
              duotone: { highlight: "#EAD136", shadow: "#D51A35" }
            ) {
              src
            }
          }
        }
      }
    `}
    render={({ icons, Img }) => <Hero icons={icons} mainImg={Img} {...props} />}
  />
);
