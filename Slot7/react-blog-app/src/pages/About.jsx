// src/pages/About.jsx
import { Container, Card, Row, Col, Badge } from 'react-bootstrap';

function About() {
  const techs = [
    { name: 'React 19', badgeClass: 'badge-cat-react' },
    { name: 'React Router v7', badgeClass: 'badge-cat-routing' },
    { name: 'React-Bootstrap v2', badgeClass: 'badge-cat-ui' },
    { name: 'Bootstrap v5', badgeClass: 'badge-cat-hooks' },
  ];

  return (
    <Container className="py-5 animate-fade-in" style={{ maxWidth: 720 }}>
      <Card className="border-0 shadow-sm overflow-hidden bg-glow-wrapper mb-4">
        <div className="bg-glow"></div>
        <Card.Body className="bg-glow-content p-4 p-md-5 text-center">
          <div className="avatar-circle mx-auto mb-3" style={{ width: 72, height: 72, fontSize: '1.8rem' }}>
            👨‍💻
          </div>
          <h3 className="fw-bold mb-2">DevBlog Project</h3>
          <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: '500px' }}>
            Một trang blog chia sẻ kiến thức công nghệ hiện đại, được thiết kế và tối ưu giao diện nhằm tăng tính trải nghiệm và tăng tính thẩm mỹ cao.
          </p>
          
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {techs.map(t => (
              <Badge key={t.name} className={`px-3 py-2 rounded-pill fs-7 ${t.badgeClass}`}>
                {t.name}
              </Badge>
            ))}
          </div>
        </Card.Body>
      </Card>

      <Card className="border-0 shadow-sm mb-4">
        <Card.Body className="p-4 p-md-5">
          <h4 className="fw-bold mb-3">🎯 Mục tiêu dự án</h4>
          <p className="text-secondary mb-4">
            Dự án này được xây dựng như một bài thực hành môn <strong>SBA301</strong>. Mục tiêu cốt lõi là làm quen với việc định tuyến bằng <code>React Router</code>, truyền nhận dữ liệu thông qua <code>state/props</code>, xây dựng giao diện tùy chỉnh kế thừa từ <code>React-Bootstrap</code>, và cách thức tái cấu trúc mã nguồn một cách tối ưu.
          </p>

          <h4 className="fw-bold mb-3">✨ Tính năng nổi bật</h4>
          <Row className="g-3">
            <Col sm={6}>
              <div className="p-3 rounded-3 bg-secondary border border-color h-100">
                <h6 className="fw-bold text-primary-theme">⚡ Hiệu năng vượt trội</h6>
                <p className="small text-muted mb-0">Xây dựng trên nền tảng Vite giúp khởi động nhanh chóng và tối ưu code bundle cực kỳ mượt mà.</p>
              </div>
            </Col>
            <Col sm={6}>
              <div className="p-3 rounded-3 bg-secondary border border-color h-100">
                <h6 className="fw-bold text-primary-theme">🎨 Giao diện Sleek Slate</h6>
                <p className="small text-muted mb-0">Chế độ Dark/Light cao cấp với hiệu ứng ánh sáng neon mờ tự động đồng bộ theo hệ thống.</p>
              </div>
            </Col>
            <Col sm={6}>
              <div className="p-3 rounded-3 bg-secondary border border-color h-100">
                <h6 className="fw-bold text-primary-theme">🔍 Tìm kiếm thông minh</h6>
                <p className="small text-muted mb-0">Hỗ trợ tìm kiếm theo tiêu đề thời gian thực kết hợp bộ lọc danh mục trực quan.</p>
              </div>
            </Col>
            <Col sm={6}>
              <div className="p-3 rounded-3 bg-secondary border border-color h-100">
                <h6 className="fw-bold text-primary-theme">📱 Chuẩn Responsive</h6>
                <p className="small text-muted mb-0">Hiển thị sắc nét và linh hoạt trên tất cả mọi kích thước thiết bị: mobile, tablet hay desktop.</p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      
      <div className="text-center pt-2">
        <p className="small text-muted">DevBlog © 2026. Made with ❤️ for learning purpose.</p>
      </div>
    </Container>
  );
}

export default About;
