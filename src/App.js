
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from './Product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import { Card, Row, Col } from 'react-bootstrap';

const App = () => {
  const firstName = "YourFirstName";

  return (
    <div className="App" style={{ padding: '20px' }}>
      <Row>
        {products.map((product, index) => (
          <Col key={index} md={4}>
            <Card style={{ margin: '10px' }}>
              <Card.Body>
                <Image image={product.image} alt={product.name} />
                <Name name={product.name} />
                <Price price={product.price} />
                <Description description={product.description} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h4>Hello, {firstName || "there!"}</h4>
        {firstName && <img src="https://th.bing.com/th/id/OIP.yYwUC6m1pg-mcJuYJyUJcAHaEK?rs=1&pid=ImgDetMain" alt="Profile" style={{ borderRadius: '50%' }} />}
      </div>
    </div>
  );
};

export default App;
