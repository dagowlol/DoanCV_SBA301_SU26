import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function AppNavbar() {
  return (
    <Navbar variant="dark" expand="md" sticky="top" className="py-3 shadow-sm">
      <Container>
        {/* Logo / Brand */}
        <Navbar.Brand as={NavLink} to='/' className="fw-bold">
          <span className="fs-4 me-1">📝</span>
          <span className="text-gradient">DevBlog</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" className="border-0 shadow-none" />
        <Navbar.Collapse id="main-nav">
          <Nav className='ms-auto gap-1 mt-2 mt-md-0'>
            {/* as={NavLink} → tự thêm class 'active' khi URL khớp */}
            <Nav.Link as={NavLink} to='/'      end className="px-3 py-2">🏠 Trang chủ</Nav.Link>
            <Nav.Link as={NavLink} to='/posts'     className="px-3 py-2">📚 Bài viết</Nav.Link>
            <Nav.Link as={NavLink} to='/about'     className="px-3 py-2">ℹ️ Giới thiệu</Nav.Link>
            <Nav.Link as={NavLink} to='/register'  className="px-3 py-2">📋 Đăng ký</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
