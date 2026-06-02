// Bài 2: BÀI 2 — Elementary: Form Đăng Ký

// > **Mục tiêu:** Quản lý nhiều state trong một form, validate dữ liệu, hiển thị thông báo lỗi.**Kiến thức:** `useState` với Object, controlled components, validation.
// ### Yêu cầu
// Form đăng ký gồm: Họ tên, Email, Mật khẩu, Xác nhận mật khẩu. Validate trước khi submit và hiển thị thông báo thành công.
//DÙng react bootstrap
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import './RegistrationForm.css'

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === 'email') {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!value.trim()) {
        setErrors((prev) => ({ ...prev, email: 'Email không được để trống.' }))
      } else if (!emailRe.test(value)) {
        setErrors((prev) => ({ ...prev, email: 'Email không hợp lệ.' }))
      } else {
        setErrors((prev) => {
          const next = { ...prev }
          delete next.email
          return next
        })
      }
    } else {
      if (errors[name]) {
        setErrors((prev) => {
          const next = { ...prev }
          delete next[name]
          return next
        })
      }
    }
  }

  const validate = () => {
    const errs = {}
    if (!formData.fullName.trim()) errs.fullName = 'Họ tên không được để trống.'
    if (!formData.email.trim()) {
      errs.email = 'Email không được để trống.'
    } else {
      // simple email regex
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRe.test(formData.email)) errs.email = 'Email không hợp lệ.'
    }
    if (!formData.password) errs.password = 'Mật khẩu không được để trống.'
    else if (formData.password.length < 6) errs.password = 'Mật khẩu phải có ít nhất 6 ký tự.'
    if (!formData.confirmPassword) errs.confirmPassword = 'Vui lòng xác nhận mật khẩu.'
    else if (formData.confirmPassword !== formData.password) errs.confirmPassword = 'Mật khẩu xác nhận không khớp.'

    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccessMessage('')
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage('Đăng ký thành công!')
      // reset form
      setFormData({ fullName: '', email: '', password: '', confirmPassword: '' })
    }
  }

  return (
    <div className="registration-card-container">
      <div className="registration-card-header text-center">
        <div className="registration-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
          </svg>
        </div>
        <h2>Đăng Ký</h2>
        <p className="subtitle">Tạo tài khoản mới của bạn</p>
      </div>

      {successMessage && (
        <Alert variant="success" className="mb-4 shadow-sm border-0 d-flex align-items-center">
          <span className="me-2 fs-5" style={{ lineHeight: 1 }}>✅</span>
          <div>{successMessage}</div>
        </Alert>
      )}

      {Object.keys(errors).length > 0 && (
        <Alert variant="danger" className="mb-4 shadow-sm border-0 d-flex align-items-start">
          <span className="me-2 fs-5" style={{ lineHeight: 1 }}>⚠️</span>
          <div>
            <div className="fw-semibold mb-1" style={{ fontSize: '0.95rem' }}>Có lỗi xảy ra trên form:</div>
            <ul className="mb-0 ps-3 error-list" style={{ fontSize: '0.875rem' }}>
              {Object.entries(errors).map(([key, msg]) => (
                <li key={key}>{msg}</li>
              ))}
            </ul>
          </div>
        </Alert>
      )}

      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3" controlId="fullName">
          <Form.Label>Họ tên</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            isInvalid={!!errors.fullName}
            placeholder="Nhập họ tên của bạn"
          />
          <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            placeholder="example@domain.com"
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
            placeholder="Tối thiểu 6 ký tự"
          />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Xác nhận mật khẩu</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            isInvalid={!!errors.confirmPassword}
            placeholder="Nhập lại mật khẩu"
          />
          <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-2">
          Đăng ký tài khoản
        </Button>
      </Form>
    </div>
  )
}

export default RegistrationForm
