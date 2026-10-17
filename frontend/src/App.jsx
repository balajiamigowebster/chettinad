import React, { Suspense, lazy } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Home from './page/Home'
import SmoothScroll from './components/SmoothScroll'
import './App.css'

const Dashboard = lazy(() => import('./page/Dashboard/Dashboard'))
const Login = lazy(() => import('./page/Dashboard/Login'))
const Blogs = lazy(() => import('./page/Blogs'))
const BlogDetail = lazy(() => import('./page/BlogDetail'))

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/admin/login" />;
};

function App() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard' || location.pathname.startsWith('/dashboard/');

  const appContent = (
    <div className={isDashboard ? "fixed inset-0 w-full h-full overflow-hidden bg-[#f8fafc]" : "w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/images/Chettinad-bg-mobile.webp')] md:bg-[url('/images/Chettinad-bg-desktop.webp')]"}>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
      </Suspense>
    </div>
  );

  return isDashboard ? appContent : <SmoothScroll>{appContent}</SmoothScroll>;
}

export default App
