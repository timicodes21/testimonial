import TestimonialPage from "./components/testimonialPage";
import { HashRouter as Router } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Story from "./components/story";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TestimonialPage />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </Router>
  )
}

export default App;
