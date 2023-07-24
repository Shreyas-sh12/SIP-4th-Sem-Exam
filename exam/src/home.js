import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import food1 from '../assets/images/food1.jpg';
import food2 from '../assets/images/food2.jpg';
import food3 from '../assets/images/food3.jpg';

const Home = () => {
  return (
    <div>
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img src={food1} alt="Food 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={food2} alt="Food 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={food3} alt="Food 3" />
        </Carousel.Item>
      </Carousel>

      {/* Cards */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={food1} />
              <Card.Body>
                <Card.Title>Food Item 1</Card.Title>
                <Card.Text>Price: $10</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={food2} />
              <Card.Body>
                <Card.Title>Food Item 2</Card.Title>
                <Card.Text>Price: $15</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={food3} />
              <Card.Body>
                <Card.Title>Food Item 3</Card.Title>
                <Card.Text>Price: $12</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
