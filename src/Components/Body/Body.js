import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { coursesData } from "../coursesData";
import { Link } from "react-router-dom";
import "./Body.css";

const Body = () => {
  const [courses, setCourses] = useState(coursesData);
  return (
    <section id="course" className="course-body">
      <div className="container">
        <h1>Our Courses</h1>
        <div className="course">
          <Row xs={1} md={2} className="g-4">
            {courses.map((course, index) => (
              <Col key={index}>
                <Card>
                  <Link to={`/course/${course.id}`}>
                    <div className="imagesCard">
                      <Card.Img variant="top" src={course.image} />
                    </div>
                  </Link>
                  <Card.Body>
                    <Card.Title>
                      <h2>
                        <Link to={`/course/${course.id}`}>{course.name}</Link>
                      </h2>
                    </Card.Title>
                    <Card.Text>
                      <h5>Price- ${course.price}</h5>
                      <span>
                        Instructor- <strong>{course.instructor}</strong>
                        <small>
                          {" "}
                          <i>duration- {course.duration}</i>
                        </small>
                      </span>
                      <br />

                      <small>{course.description}</small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Body;
