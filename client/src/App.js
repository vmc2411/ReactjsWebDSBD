import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./layout/AdminLayout/Dashboard";
import Home from "./pages/Home.jsx";
import LoginForm from "./pages/auth/LoginForm";
import RegisterForm from "./pages/auth/RegisterForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin/" element={<Dashboard />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
