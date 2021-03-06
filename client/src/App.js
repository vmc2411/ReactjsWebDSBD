import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./layout/AdminLayout/Dashboard";
import UserLayout from "./layout/UserLayout/UserLayout";

import LoginAdminForm from "./pages/admin/DangNhapAdmin/LoginAdminForm.jsx"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<UserLayout />}></Route>
          <Route path="/admin/*" element={<Dashboard />}></Route>
          <Route path="/admin" element={<LoginAdminForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
