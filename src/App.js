import CoursesSection from "./components/HomePage/CoursesSection";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CourseData from "./components/CoursePage/CourseData";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import PageNoFound from "./components/PageNoFound";
function App() {
  const [course, setcourse] = useState("Python");
  const [Data, setData] = useState({
    IsLoading: true,
    jsonFile: "",
    ErrorMsg: "",
  });
  useEffect(() => {
    let url = "https://api.npoint.io/7ed4ab01b70b30287cb1/data";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData({ jsonFile: json, IsLoading: false, ErrorMsg: "" });
      })
      .catch((error) => {
        setData({ ...Data, IsLoading: false, ErrorMsg: "Error" });
      });
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/Udemy"
          element={
            <CoursesSection data={Data} Course={course} setCourse={setcourse} />
          }
        />

        <Route path="/Course/:Courseid" element={<CourseData />} />
        <Route path="*" element={<PageNoFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
