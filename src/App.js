import { Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Nav from "./Components/Nav";
import Feed from "./Components/Video/Feed";
import Player from "./Components/Video/Player";
import Create from "./Components/Video/Create";
import { useEffect, useState } from "react";
import NewData from "./Components/Music/NewData";
import About from "./Components/About";
import Contact from "./Components/Contact";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://648bfcbd8620b8bae7ec02d1.mockapi.io/videos"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Feed data={data} />} />
        <Route path="/play/:id" element={<Player Alldata={data} />} />
        <Route
          path="/create"
          element={<Create data={data} setData={setData} />}
        />

        <Route path="/music" element={<NewData />} />
        <Route path="/edit" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
