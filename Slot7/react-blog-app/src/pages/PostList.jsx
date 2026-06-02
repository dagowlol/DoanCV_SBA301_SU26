// src/pages/PostList.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Form, InputGroup, Button } from 'react-bootstrap';
import { posts } from '../data/posts';

function PostList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  // Lấy danh sách category không trùng
  const categories = ['Tất cả', ...new Set(posts.map(p => p.category))];

  // Lọc theo tìm kiếm và category
  const filtered = posts.filter(post => {
    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === 'Tất cả' || post.category === activeCategory;
    return matchSearch && matchCat;
  });

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
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-2">📚 Danh sách bài viết</h2>
        <p className="text-secondary">Tìm kiếm và lọc các chủ đề lập trình hữu ích dành cho bạn</p>
      </div>

      {/* Thanh tìm kiếm & Lọc */}
      <Row className="justify-content-center mb-4">
        <Col md={8} lg={6}>
          <InputGroup className="shadow-sm rounded-pill overflow-hidden border border-color">
            <InputGroup.Text className="bg-secondary border-0 px-3">🔍</InputGroup.Text>
            <Form.Control
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Nhập tiêu đề bài viết cần tìm..."
              className="border-0 bg-secondary"
              style={{ fontSize: '0.95rem' }}
            />
            {search && (
              <Button variant="outline-secondary" className="border-0 px-3 bg-secondary" onClick={() => setSearch('')}>
                ✕
              </Button>
            )}
          </InputGroup>
        </Col>
      </Row>

      {/* Bộ lọc category */}
      <div className="mb-5 d-flex gap-2 flex-wrap justify-content-center">
        {categories.map(cat => {
          const isActive = activeCategory === cat;
          return (
            <Button
              key={cat}
              variant={isActive ? "primary" : "outline-secondary"}
              className="rounded-pill px-3 py-1.5 fs-7"
              size="sm"
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          );
        })}
      </div>

      {/* Kết quả */}
      {filtered.length === 0 ? (
        <div className="text-center py-5 bg-glow-wrapper rounded-4 border border-color p-4">
          <div className="fs-1 mb-3">📭</div>
          <h5 className="fw-semibold">Không tìm thấy bài viết nào</h5>
          <p className="text-secondary small">Hãy thử tìm kiếm với từ khóa khác, chuyển sang trang khác hoặc chuyển danh mục.</p>
        </div>
      ) : (
        <Row>
          {filtered.map((post, idx) => (
            <Col md={6} lg={4} key={post.id} className="mb-4">
              <Card
                className="h-100 border-0 shadow-sm"
                style={{ cursor: 'pointer', animationDelay: `${idx * 100}ms` }}
                onClick={() => navigate(`/posts/${post.id}`)}
              >
                <Card.Body className="p-4 d-flex flex-column h-100">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Badge className={`px-2 py-1 ${getCategoryClass(post.category)}`}>
                      {post.category}
                    </Badge>
                    <small className="text-muted">📅 {post.date}</small>
                  </div>
                  
                  <Card.Title className="text-secondary fw-bold mb-3 fs-5">
                    {post.title}
                  </Card.Title>
                  
                  <Card.Text className="text-secondary small flex-grow-1" style={{ lineHeight: '1.6' }}>
                    {post.body.substring(0, 85)}...
                  </Card.Text>
                  
                  <div className="d-flex flex-wrap gap-1 mt-3">
                    {post.tags.map(tag => (
                      <Badge key={tag} className="bg-secondary text-secondary fw-normal">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
                
                <Card.Footer className="d-flex align-items-center gap-2 border-top border-color">
                  <div className="avatar-circle">
                    {post.author.charAt(0)}
                  </div>
                  <div className="d-flex flex-column">
                    <span className="small fw-semibold text-secondary">{post.author}</span>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default PostList;
