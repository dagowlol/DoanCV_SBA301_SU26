// src/pages/Registration.jsx
import { useState } from 'react';
import { Container, Card, Form, Button, Row, Col, Alert, Badge, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Registration() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    gender: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Xóa lỗi khi người dùng bắt đầu nhập lại
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // Họ và tên
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập họ và tên.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Họ và tên phải có ít nhất 3 ký tự.';
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ.';
    }

    // Mật khẩu
    if (!formData.password) {
      newErrors.password = 'Vui lòng nhập mật khẩu.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự.';
    }

    // Xác nhận mật khẩu
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Vui lòng xác nhận mật khẩu.';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp.';
    }

    // Số điện thoại
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại.';
    } else if (!/^(0[3|5|7|8|9])+([0-9]{8})$/.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại không hợp lệ (VD: 0901234567).';
    }

    // Giới tính
    if (!formData.gender) {
      newErrors.gender = 'Vui lòng chọn giới tính.';
    }

    // Đồng ý điều khoản
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Bạn cần đồng ý với điều khoản sử dụng.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      gender: '',
      agreeTerms: false,
    });
    setErrors({});
    setSubmitted(false);
  };

  // Hiển thị thông báo đăng ký thành công
  if (submitted) {
    return (
      <Container className="py-5 animate-fade-in" style={{ maxWidth: 600, color: 'white' }}>
        <Card className="border-0 shadow-sm overflow-hidden bg-glow-wrapper text-center">
          <div className="bg-glow"></div>
          <Card.Body className="bg-glow-content p-5">
            <div style={{ fontSize: '4rem' }} className="mb-3">🎉</div>
            <h3 className="fw-bold mb-3" style={{ color: 'white' }}>Đăng ký thành công!</h3>
            <p className="mb-2" style={{ color: '#cccccc' }}>
              Chào mừng <strong style={{ color: 'white' }}>{formData.fullName}</strong> đến với DevBlog.
            </p>
            <p className="small mb-4" style={{ color: '#aaaaaa' }}>
              Một email xác nhận đã được gửi tới <strong style={{ color: 'white' }}>{formData.email}</strong>.
            </p>

            <Card className="border-0 shadow-sm mb-4 text-start" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}>
              <Card.Body className="p-4">
                <h6 className="fw-bold mb-3" style={{ color: 'white' }}>📋 Thông tin đã đăng ký:</h6>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex justify-content-between">
                    <span style={{ color: '#cccccc' }} className="small">Họ và tên:</span>
                    <span className="fw-semibold small" style={{ color: 'white' }}>{formData.fullName}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span style={{ color: '#cccccc' }} className="small">Email:</span>
                    <span className="fw-semibold small" style={{ color: 'white' }}>{formData.email}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span style={{ color: '#cccccc' }} className="small">Số điện thoại:</span>
                    <span className="fw-semibold small" style={{ color: 'white' }}>{formData.phone}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span style={{ color: '#cccccc' }} className="small">Giới tính:</span>
                    <span className="fw-semibold small" style={{ color: 'white' }}>{formData.gender}</span>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <div className="d-flex gap-3 justify-content-center">
              <Button variant="primary" as={Link} to="/" className="rounded-pill px-4">
                🏠 Về trang chủ
              </Button>
              <Button variant="outline-secondary" onClick={handleReset} className="rounded-pill px-4">
                📝 Đăng ký tài khoản khác
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="py-5 animate-fade-in" style={{ maxWidth: 640, color: 'white' }}>
      <div className="text-center mb-4">
        <h2 className="fw-bold mb-2" style={{ color: 'white' }}>📝 Đăng ký tài khoản</h2>
        <p style={{ color: '#cccccc' }}>Tham gia cộng đồng DevBlog để chia sẻ kiến thức lập trình</p>
      </div>

      <Card className="border-0 shadow-sm overflow-hidden" style={{ backgroundColor: 'rgba(0,0,0,0.7)', color: 'white' }}>
        <Card.Body className="p-4 p-md-5">
          <Form noValidate onSubmit={handleSubmit}>
            {/* Họ và tên */}
            <Form.Group className="mb-4" controlId="regFullName">
              <Form.Label className="fw-semibold small" style={{ color: 'white' }}>
                👤 Họ và tên <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Nhập họ và tên đầy đủ..."
                isInvalid={!!errors.fullName}
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
              />
              <Form.Control.Feedback type="invalid">
                {errors.fullName}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-4" controlId="regEmail">
              <Form.Label className="fw-semibold small" style={{ color: 'white' }}>
                ✉️ Email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                isInvalid={!!errors.email}
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Mật khẩu */}
            <Row className="mb-4">
              <Col md={6} className="mb-4 mb-md-0">
                <Form.Group controlId="regPassword">
                  <Form.Label className="fw-semibold small" style={{ color: 'white' }}>
                    🔒 Mật khẩu <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Tối thiểu 6 ký tự"
                    isInvalid={!!errors.password}
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="regConfirmPassword">
                  <Form.Label className="fw-semibold small" style={{ color: 'white' }}>
                    🔒 Xác nhận mật khẩu <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Nhập lại mật khẩu"
                    isInvalid={!!errors.confirmPassword}
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Số điện thoại */}
            <Form.Group className="mb-4" controlId="regPhone">
              <Form.Label className="fw-semibold small" style={{ color: 'white' }}>
                📱 Số điện thoại <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0901234567"
                isInvalid={!!errors.phone}
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Giới tính */}
            <Form.Group className="mb-4" controlId="regGender">
              <Form.Label className="fw-semibold small" style={{ color: 'white' }}>
                🚻 Giới tính <span className="text-danger">*</span>
              </Form.Label>
              <div className="d-flex gap-4 mt-1">
                {['Nam', 'Nữ', 'Khác'].map(g => (
                  <Form.Check
                    key={g}
                    type="radio"
                    name="gender"
                    id={`gender-${g}`}
                    label={g}
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                    isInvalid={!!errors.gender}
                    className="text-secondary"
                    style={{ color: 'white' }}
                    labelStyle={{ color: 'white' }}
                  />
                ))}
              </div>
              {errors.gender && (
                <div className="text-danger small mt-1">{errors.gender}</div>
              )}
            </Form.Group>

            {/* Điều khoản */}
            <Form.Group className="mb-4" controlId="regAgreeTerms">
              <Form.Check
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                isInvalid={!!errors.agreeTerms}
                label={
                  <span style={{ color: '#cccccc' }} className="small">
                    Tôi đồng ý với <a href="#" className="fw-semibold" style={{ color: '#0d6efd' }}>Điều khoản sử dụng</a> và{' '}
                    <a href="#" className="fw-semibold" style={{ color: '#0d6efd' }}>Chính sách bảo mật</a>
                  </span>
                }
                style={{ color: 'white' }}
              />
              {errors.agreeTerms && (
                <div className="text-danger small mt-1">{errors.agreeTerms}</div>
              )}
            </Form.Group>

            {/* Nút hành động */}
            <div className="d-flex gap-3 mt-4">
              <Button type="submit" variant="primary" className="flex-grow-1 py-2 shadow">
                🚀 Đăng ký ngay
              </Button>
              <Button type="button" variant="outline-secondary" onClick={handleReset} className="px-4">
                🔄 Xóa
              </Button>
            </div>
          </Form>

          <div className="text-center mt-4 pt-3 border-top" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <span style={{ color: '#cccccc' }} className="small">Đã có tài khoản? </span>
            <Link to="/" className="fw-semibold small" style={{ color: '#0d6efd' }}>Đăng nhập ngay</Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Registration;