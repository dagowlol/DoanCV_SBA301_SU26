// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import Registration from './pages/Registration';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar luôn hiển thị ở mọi trang */}
        <AppNavbar />

        {/* Nội dung chính của trang */}
        <main className="flex-grow-1">
          <Routes>
            <Route path='/'          element={<Home />} />
            <Route path='/posts'     element={<PostList />} />
            <Route path='/posts/:id' element={<PostDetail />} />
            <Route path='/about'     element={<About />} />
            <Route path='/register'  element={<Registration />} />
            <Route path='*'          element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer ở cuối trang */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
