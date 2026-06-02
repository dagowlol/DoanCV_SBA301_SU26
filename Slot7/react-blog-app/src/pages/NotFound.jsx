// src/pages/NotFound.jsx
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container className="py-5 text-center d-flex flex-column align-items-center justify-content-center flex-grow-1 animate-fade-in">
      <div className="bg-glow-wrapper p-5 rounded-4 mb-4 border border-color shadow-sm" style={{ maxWidth: 450 }}>
        <div className="bg-glow"></div>
        <div className="bg-glow-content">
          <h1 className="fw-extrabold text-gradient" style={{ fontSize: '7rem', lineHeight: 1 }}>
            404
          </h1>
          <h4 className="fw-bold mb-3">Đường dẫn không tồn tại</h4>
          <p className="text-secondary small mb-4">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị đổi địa chỉ. Vui lòng quay trở lại trang chủ.
          </p>
          <Button as={Link} to="/" variant="primary" className="rounded-pill px-4 shadow">
            🏠 Quay về Trang chủ
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default NotFound;
