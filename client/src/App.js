import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./layout/AdminLayout/Dashboard";
import UserLayout from "./layout/UserLayout/UserLayout";

import LoginAdminForm from "./pages/admin/DangNhapAdmin/LoginAdminForm.jsx";

function App() {
  const check = window.localStorage.getItem("accesstokenadmin");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<UserLayout />}></Route>
          {(() => {
            if (check !== null) {
              return <Route path="/admin/*" element={<Dashboard />}></Route>;
            } else {
              return <Route path="/admin/*" element={<LoginAdminForm />}></Route>;
            }
          })()}
          <Route path="/admin" element={<LoginAdminForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
