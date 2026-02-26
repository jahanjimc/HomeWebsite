import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/toaster";
import QandA from "./pages/QandA";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/qa" element={<QandA />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster />
      </HashRouter>
    </div>
  );
}

export default App;