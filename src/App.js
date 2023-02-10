import "./App.css";
import Navbar from "./components/Navbar";
import User from "./components/User";
import { Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<User/>} />
  

      </Routes>
    </div>
  );
}

export default App;
