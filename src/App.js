
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AdminRegistration } from './pages/admin-registration/AdminRegistration';
import { AdminLogin } from './pages/admin-login/AdminLogin';
import EmailVerificationPage from './pages/admin-registration/EmailVerificationPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/register" element={<AdminRegistration />} />
        <Route path="/admin/verify-email" element={<EmailVerificationPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
