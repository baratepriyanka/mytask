import Login from "./Login";
import Signup from "./Signup";
import Post from "./Post";
import Postp from "./Postp";
import Postpp from "./Postpp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Login.module.css";

export default function App() {
  return (
    // <Header />
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/post" element={<Post />} />
        <Route path="/postp" element={<Postp />} />
        <Route path="/postpp" element={<Postpp />} />
      </Routes>
    </BrowserRouter>
  );
}
