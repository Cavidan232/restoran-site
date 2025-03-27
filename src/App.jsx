import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Login from "./components/Login";
import Favorites from "./components/crud/Favorit"
import Basket from "./components/crud/Basket"
import Profile from "./components/crud/Profile"
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

