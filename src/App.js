import CoursesSection from "./components/CoursesSection";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CourseData from "./components/CourseData";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<CoursesSection />} />
        <Route path="/Course/:Courseid" element={<CourseData />} />
      </Routes>
    </>
  );
}

export default App;
