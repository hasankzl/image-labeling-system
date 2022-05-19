import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import Header from "./components/Header";
import { NotificationContainer } from "react-notifications";
import Project from "./pages/project/Project";
import "react-flexy-table/dist/index.css";
import ImageSet from "./pages/imageset/ImageSet";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/imageSets" element={<ImageSet />} />
      </Routes>

      <NotificationContainer />
    </BrowserRouter>
  );
}

export default App;
