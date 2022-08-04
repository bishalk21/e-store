import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login/Login.js";
import { adminRegistration } from "./pages/adminRegistration/adminRegistration.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<adminRegistration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
