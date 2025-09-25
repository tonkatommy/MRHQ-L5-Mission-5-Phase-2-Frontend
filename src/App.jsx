import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home/Home";
import FindStation from "./pages/FindStation/FindStation";
import TailorSearch from "./pages/TailorSearch/TailorSearch";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-station" element={<FindStation />} />
          <Route path="/tailor-search" element={<TailorSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
