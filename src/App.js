import "./App.css";
import Navbar from "./components/Navbar";
import User from "./components/User";
import { Routes, Route, Link} from "react-router-dom";
import UserCreate from "./components/UserCreate";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<User/>} />
      <Route path="ลงชื่อเข้า" element={<UserCreate/>} />

      </Routes>
    </div>
  );
}

export default App;
