import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div className="container">
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Organization Name
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>Address: Shreehari Restaurant 2nd cross Adyar Mangalore</p>
              <p>Location: abcd@gmapss</p>
              <p>Contact: 9986356463</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default AboutUs;
