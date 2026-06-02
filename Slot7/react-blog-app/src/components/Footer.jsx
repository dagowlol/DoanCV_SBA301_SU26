// src/components/Footer.jsx
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="mt-auto py-4 border-top border-color">
      <Container className="text-center">
        <p className="footer-text mb-0">
          DevBlog © {new Date().getFullYear()} — Được xây dựng bằng React &amp; Bootstrap
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
