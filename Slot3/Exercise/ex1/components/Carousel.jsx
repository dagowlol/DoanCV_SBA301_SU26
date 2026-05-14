import Carousel from 'react-bootstrap/Carousel';
import images from '../src/data/banner';
function OrchidCarousel() {


  return (
    <Carousel interval={2000} fade>
      {
        images.map((image, index) => (
          <Carousel.Item key={index}>

            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${index + 1}`}
              height="500"
              style={{ objectFit: "cover" }}
            />

            <Carousel.Caption>
              <h3>Orchid {index + 1}</h3>
              <p>Beautiful orchid collection</p>
            </Carousel.Caption>

          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default OrchidCarousel;