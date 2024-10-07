import React from "react";

// Css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Biodata from "./pages/Biodata";
import Projects from "./pages/Projects";
import Hire from "./pages/Hire";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Work />
            <Biodata />
            <Projects />
            <Hire />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
