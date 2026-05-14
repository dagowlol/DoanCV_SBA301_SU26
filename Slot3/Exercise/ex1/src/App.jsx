import 'bootstrap/dist/css/bootstrap.min.css';

import orchids from './data/orchidsData';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import OrchidCarousel from '/components/Carousel';

function App() {


  return (
    <>
      <Navbar expand="lg" bg="light">

        <Container>

          <Navbar.Brand>
            Single Page Application
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">

              <Nav.Link href="#home">
                Home
              </Nav.Link>

              <Nav.Link href="#link">
                Link
              </Nav.Link>

            </Nav>

          </Navbar.Collapse>

        </Container>

      </Navbar>

      <OrchidCarousel />

      <Container className="mt-4">

        <Row>

          {
            orchids.map((orchid) => (

              <Col md={3} className="mb-4" key={orchid.id}>

                <Card>

                  <Card.Img
                    variant="top"
                    src={orchid.image}
                    height="300"
                    style={{ objectFit: "cover" }}
                  />

                  <Card.Body>

                    <Card.Title>
                      {orchid.name}
                    </Card.Title>

                    <Card.Text>
                      Category: {orchid.category}
                    </Card.Text>

                    <Button variant="primary">
                      Detail
                    </Button>

                  </Card.Body>

                </Card>

              </Col>

            ))
          }

        </Row>

      </Container>
    </>
  );
}

export default App;