import "./App.css";
import Home from "./components/views/Home";
import Add from "./components/views/Add";
import Edit from "./components/views/Edit";
import HomeMobile from "./components/views/HomeMobile";
import useWindowSize from "./hooks/useWindowSize";
import { Routes, Route } from "react-router-dom";

function App() {
  const size = useWindowSize();
  const handleDeviceView = () => {
    if (size.width < 768) {
      return <HomeMobile />;
    } else return <Home />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={handleDeviceView()} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
