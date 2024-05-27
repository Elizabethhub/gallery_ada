import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";
import ImageDetails from "./components/ImageDetails";
import TagGallery from "./components/TagGallery";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/photos/:id" element={<ImageDetails />} />
      <Route path="/tag/:tag" element={<TagGallery />} />
    </Routes>
  </Router>
);

export default App;
