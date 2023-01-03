
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AdminRegistration } from './pages/admin-registration/AdminRegistration';
import { AdminLogin } from './pages/admin-login/AdminLogin';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/register" element={<AdminRegistration />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
