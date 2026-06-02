// src/pages/PostDetail.jsx
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button, Alert } from 'react-bootstrap';
import { posts } from '../data/posts';

function PostDetail() {
  const { id } = useParams();         // Lấy :id từ URL
  const navigate = useNavigate();

  // Tìm bài viết theo id (ép kiểu vì useParams trả String)
  const post = posts.find(p => p.id === Number(id));

  // Bài trước và bài sau
  const prevPost = posts.find(p => p.id === Number(id) - 1);
  const nextPost = posts.find(p => p.id === Number(id) + 1);

  // Ánh xạ category thành class CSS cụ thể
  const getCategoryClass = (category) => {
    const cat = category.toLowerCase();
    if (cat === 'react') return 'badge-cat-react';
    if (cat === 'hooks') return 'badge-cat-hooks';
    if (cat === 'routing') return 'badge-cat-routing';
    if (cat === 'ui') return 'badge-cat-ui';
    return '';
  };

  // Không tìm thấy bài
  if (!post) {
    return (
      <Container className="py-5 text-center animate-fade-in">
        <Alert variant="danger" className="border-0 shadow-sm p-5 max-width-md mx-auto" style={{ maxWidth: 600 }}>
          <div className="fs-1 mb-3">⚠️</div>
          <Alert.Heading className="fw-bold">Không tìm thấy bài viết!</Alert.Heading>
          <p className="text-secondary mb-4">Bài viết với ID {id} không tồn tại hoặc đã bị gỡ bỏ.</p>
          <Button onClick={() => navigate('/posts')} variant="danger" className="rounded-pill px-4">
            ← Quay lại danh sách bài viết
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5 animate-fade-in" style={{ maxWidth: 800 }}>
      {/* Nút quay lại */}
      <Button
        variant="outline-secondary"
        size="sm"
        onClick={() => navigate('/posts')}
        className="mb-4 rounded-pill px-3"
      >
        ← Quay lại danh sách
      </Button>

      {/* Nội dung bài viết */}
      <Card className="border-0 shadow-sm overflow-hidden">
        <Card.Body className="p-4 p-md-5">
          <div className="d-flex flex-wrap gap-2 mb-3">
            <Badge className={`px-2 py-1 ${getCategoryClass(post.category)}`}>
              {post.category}
            </Badge>
            {post.tags.map(tag => (
              <Badge key={tag} className="bg-secondary text-secondary fw-normal">
                #{tag}
              </Badge>
            ))}
          </div>

          <h1 className="fw-bold mb-3 lh-sm text-primary-theme" style={{ fontSize: '2.2rem' }}>
            {post.title}
          </h1>

          <div className="d-flex align-items-center gap-3 pt-2 pb-4 mb-4 border-bottom border-color text-muted small">
            <div className="d-flex align-items-center gap-2">
              <div className="avatar-circle">
                {post.author.charAt(0)}
              </div>
              <span className="fw-semibold text-secondary">{post.author}</span>
            </div>
            <span>|</span>
            <span>📅 {post.date}</span>
            <span>|</span>
            <span>⏱️ 5 phút đọc</span>
          </div>

          <div className="post-body text-secondary" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
            <p className="mb-4">{post.body}</p>
            
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar elementum erat, ut tempus metus varius vulputate. Morbi in urna volutpat, varius felis at, semper leo. In feugiat ac sapien vel convallis. Sed a tincidunt leo. Cras volutpat scelerisque lorem non iaculis.
            </p>
            
            <blockquote className="border-start border-3 border-primary ps-3 my-4 text-muted fst-italic">
              "Việc viết mã nguồn sạch không chỉ giúp đồng nghiệp của bạn dễ bảo trì, mà còn giúp chính bạn hiểu mã nguồn đó sau 6 tháng."
            </blockquote>
            
            <p>
              Hy vọng qua bài chia sẻ ngắn này, các bạn có cái nhìn trực quan và dễ tiếp cận hơn về chủ đề này. Hãy tiếp tục thực hành và xây dựng các dự án nhỏ để nhớ kiến thức lâu hơn. Chúc các bạn học tốt!
            </p>
          </div>
        </Card.Body>
      </Card>

      {/* Điều hướng bài trước / sau */}
      <Row className="mt-5 g-3">
        <Col xs={12} md={6}>
          {prevPost ? (
            <Link to={`/posts/${prevPost.id}`} className="text-decoration-none text-reset">
              <div className="nav-card d-flex flex-column justify-content-between p-3 animate-fade-in h-100">
                <span className="text-muted small mb-2 d-block">← BÀI TRƯỚC</span>
                <span className="fw-bold text-secondary small text-truncate d-block">{prevPost.title}</span>
              </div>
            </Link>
          ) : (
            <div className="nav-card d-flex flex-column justify-content-center p-3 h-100 opacity-50 bg-tertiary">
              <span className="text-muted small text-center">Không có bài viết trước đó</span>
            </div>
          )}
        </Col>
        
        <Col xs={12} md={6}>
          {nextPost ? (
            <Link to={`/posts/${nextPost.id}`} className="text-decoration-none text-reset">
              <div className="nav-card d-flex flex-column justify-content-between p-3 text-md-end animate-fade-in h-100">
                <span className="text-muted small mb-2 d-block">BÀI TIẾP THEO →</span>
                <span className="fw-bold text-secondary small text-truncate d-block">{nextPost.title}</span>
              </div>
            </Link>
          ) : (
            <div className="nav-card d-flex flex-column justify-content-center p-3 h-100 opacity-50 bg-tertiary">
              <span className="text-muted small text-center">Đã là bài viết mới nhất</span>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default PostDetail;
