import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import StarRatings from "react-star-ratings";
export default class Comments extends Component {
  state = {
    text: "",
    name: "",
    rating: 0,
    anonymous: false,
    fromProfile: false,
    isAuthenticated: false,
  };

  checkName = () => {
    const { anonymous, fromProfile, name } = this.state;

    if (fromProfile) return "Miguel";

    if (anonymous) return "Anonymous";

    return name;
  };

  resetForm = () => {
    this.setState({
      name: "",
      text: "",
      rating: 0,
      anonymous: false,
      fromProfile: false,
    });
    this.refs.from_profile_check.checked = false;
    this.refs.anonymous.checked = false;
  };

  render() {
    const { submit } = this.props;
    const {
      name,
      text,
      rating,
      anonymous,
      fromProfile,
      isAuthenticated,
    } = this.state;
    return (
      <Row>
        <Col lg={"12"} xs={"12"} md={"12"}>
          <h3>Submit a review</h3>
        </Col>
        <Col lg={"12"} xs={"12"} md={"12"}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              // Check if Anonymous is set true or Check if name is needed from profile
              const mname = this.checkName();
              submit({ mname, text, rating });
              this.resetForm();
            }}
          >
            <Form.Group>
              <Form.Check
                style={{ padding: 0 }}
                onChange={(e) => {
                  this.setState({ ...this.state, anonymous: !anonymous });
                }}
                label={"Comment anonymously"}
                type="checkbox"
                ref={"anonymous"}
              />
            </Form.Group>
            {!isAuthenticated && (
              <Form.Group>
                <Form.Check
                  style={{ padding: 0 }}
                  onChange={(e) => {
                    this.setState({
                      ...this.state,
                      fromProfile: !fromProfile,
                    });
                  }}
                  label={"Use profile nickname"}
                  type="checkbox"
                  ref={"from_profile_check"}
                />
              </Form.Group>
            )}
            <Form.Group>
              <Form.Label style={{ display: "block" }}>Rating</Form.Label>
              <StarRatings
                starRatedColor="#FFCC00"
                starHoverColor="#FFCC00"
                starDimension="25px"
                rating={rating}
                changeRating={(rate) =>
                  this.setState({ ...this.state, rating: rate })
                }
                numberOfStars={5}
                name="rating"
              />
            </Form.Group>
            {!anonymous && !fromProfile && (
              <Form.Group>
                <Form.Label>Nickname</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) =>
                    this.setState({ ...this.state, name: e.target.value })
                  }
                  placeholder={"Enter your nickname"}
                ></Form.Control>
              </Form.Group>
            )}
            <Form.Group>
              <Form.Label>Review</Form.Label>
              <Form.Control
                as={"textarea"}
                value={text}
                onChange={(e) =>
                  this.setState({ ...this.state, text: e.target.value })
                }
                style={{ resize: "none" }}
                rows={"8"}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Button
                type={"submit"}
                style={{
                  width: "100%",
                  backgroundColor: "#111111",
                  color: "#FFCC00",
                  border: "0px",
                  padding: "10px",
                  fontSize: "20px",
                }}
                size={"lg"}
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    );
  }
}
