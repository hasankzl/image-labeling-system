import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import Header from "./components/Header";
import { NotificationContainer } from "react-notifications";
import Project from "./pages/project/Project";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
      </Routes>

      <NotificationContainer />
    </BrowserRouter>
  );
}

export default App;
