import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TrackerWrapper } from "./components/TrackerWrapper";
import { ProgressBar } from "./components/ProgressBar";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TrackerWrapper />} exact />
        <Route path="/progress/" element={<ProgressBar />} />
      </Routes>
    </Router>
  )
};