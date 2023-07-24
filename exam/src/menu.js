import React from 'react';
import { Card } from 'react-bootstrap';
import menuData from '../assets/data/menuData';

const Menu = () => {
  return (
    <div className="container">
      <div className="row">
        {menuData.map((item, index) => (
          <div className="col-md-4" key={index}>
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: ${item.price}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
