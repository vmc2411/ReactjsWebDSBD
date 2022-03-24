// import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './layout/AdminLayout/Dashboard';
import UserLayout from './layout/UserLayout/UserLayout'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/*' element={<UserLayout/>}></Route>
          <Route path='/admin/*' element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
