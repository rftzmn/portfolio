import "./App.scss";
import Navbar from "./Components/Navbar";
import About from "./Container/About";
import Footer from "./Container/Footer";
import Header from "./Container/Header";
import Skills from "./Container/Skills";
import Testimonial from "./Container/Testimonial";
import Work from "./Container/Work";

function App() {
  return (
    <>
      <div className="div app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default App;
