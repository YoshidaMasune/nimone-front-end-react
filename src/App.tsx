import { useEffect, useState } from "react";
import "./App.css";
import axios, { AxiosResponse } from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Admin from "./pages/admin/Admin";
import CreateNew from "./pages/admin/createNew/CreateNew";
import Footer from "./components/navbar/footer/Footer";

export const API = `http://localhost:3000`;

function App() {
  const [count, setCount] = useState();
  const getUrl = `${API}/api/nimones-all-data`;
  
  useEffect(() => {
    axios.get(getUrl + ``).then((res) => setCount(res.data));
  }, []);

  console.log(count);
  return (
    <div className="App" style={{ position: "relative", minHeight: "100vh" }}>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/admin/">
          <Route path="" element={<Admin />} />
          <Route path="new" element={<CreateNew />} />
        </Route>
      </Routes>

      <div style={{ position: "absolute", bottom: "10px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
