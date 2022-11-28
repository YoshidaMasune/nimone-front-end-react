import { useEffect, useState } from "react";
import "./App.css";
import axios, { AxiosResponse } from "axios";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Admin from "./pages/admin/Admin";

function App() {
  const [count, setCount] = useState();
  const getUrl = "http://localhost:3000/api/nimones-all-data";
  useEffect(() => {
    axios.get(getUrl + ``).then((res) => setCount(res.data));
  }, []);

  console.log(count);
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/admin">
          <Route path="" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
