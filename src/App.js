import TestimonialPage from "./components/testimonialPage";
import { HashRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Story from "./components/story";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<TestimonialPage />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
