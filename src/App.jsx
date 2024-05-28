import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gallery from "./components/gallery/Gallery";
import ImageDetails from "./components/ImageDetails";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/photos/:id" element={<ImageDetails />} />
      <Route path="/tag/:tag" element={<Gallery />} />
    </Routes>
  </Router>
);

export default App;
