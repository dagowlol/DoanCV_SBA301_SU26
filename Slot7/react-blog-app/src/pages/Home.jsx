// src/pages/Home.jsx
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

function Home() {
  // Lấy 2 bài mới nhất hiển thị preview
  const latestPosts = posts.slice(0, 2);

  // Ánh xạ category thành class CSS cụ thể
  const getCategoryClass = (category) => {
    const cat = category.toLowerCase();
    if (cat === 'react') return 'badge-cat-react';
    if (cat === 'hooks') return 'badge-cat-hooks';
    if (cat === 'routing') return 'badge-cat-routing';
    if (cat === 'ui') return 'badge-cat-ui';
    return '';
  };

  return (
    <Container className="py-5 animate-fade-in">
      {/* Hero section */}
      <Row className="mb-5">
        <Col>
          <Card className="border-0 bg-glow-wrapper p-4 p-md-5 text-center shadow-lg">
            <div className="bg-glow"></div>
            <Card.Body className="bg-glow-content py-4">
              <Badge bg="primary" className="mb-3 px-3 py-2 rounded-pill">
                🚀 Cập nhật liên tục
              </Badge>
              <h1 className="display-4 fw-extrabold mb-3">
                Chào mừng tới <span className="text-gradient">DevBlog</span>
              </h1>
              <p className="lead text-secondary mx-auto mb-4" style={{ maxWidth: '600px', fontSize: '1.15rem' }}>
                Nơi chia sẻ kiến thức chuyên sâu về React, Hooks, Frontend Architecture và xu hướng công nghệ mới nhất.
              </p>
              <div className="d-flex justify-content-center gap-3 align-items-center flex-wrap">
                <Badge bg="secondary" className="px-3 py-2 fs-6 rounded-pill">
                  📚 {posts.length} Bài viết chất lượng
                </Badge>
                <Badge bg="secondary" className="px-3 py-2 fs-6 rounded-pill">
                  ⚡ Tải nhanh &amp; Nhẹ
                </Badge>
              </div>
              <div className="mt-4 pt-2">
                <Button as={Link} to="/posts" variant="primary" size="lg" className="px-4 py-2 shadow">
                  Khám phá bài viết ngay →
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Bài viết mới nhất */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0 fw-bold">🔥 Bài viết mới nhất</h3>
        <Link to="/posts" className="text-decoration-none fw-semibold">
          Xem tất cả ({posts.length})
        </Link>
      </div>

      <Row>
        {latestPosts.map((post, idx) => (
          <Col md={6} key={post.id} className="mb-4">
            <Card className="h-100 border-0 shadow-sm overflow-hidden" style={{ animationDelay: `${idx * 150}ms` }}>
              <Card.Body className="p-4 d-flex flex-column h-100">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Badge className={`px-2 py-1 ${getCategoryClass(post.category)}`}>
                    {post.category}
                  </Badge>
                  <span className="text-muted small">📅 {post.date}</span>
                </div>
                <Card.Title className="fw-bold mb-3 fs-4 text-primary-theme">
                  <Link to={`/posts/${post.id}`} className="text-decoration-none text-reset hover-accent">
                    {post.title}
                  </Link>
                </Card.Title>
                <Card.Text className="text-secondary flex-grow-1" style={{ fontSize: '0.95rem' }}>
                  {post.body.substring(0, 110)}...
                </Card.Text>
                
                <div className="d-flex flex-wrap gap-1 mb-4">
                  {post.tags.map(tag => (
                    <Badge key={tag} className="badge-pill bg-secondary text-secondary fw-normal">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <div className="d-flex justify-content-between align-items-center pt-3 mt-auto border-top border-color">
                  <div className="d-flex align-items-center gap-2">
                    <div className="avatar-circle">
                      {post.author.charAt(0)}
                    </div>
                    <span className="small fw-semibold text-secondary">{post.author}</span>
                  </div>
                  <Button as={Link} to={`/posts/${post.id}`} variant="outline-primary" size="sm" className="rounded-pill">
                    Đọc tiếp
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
