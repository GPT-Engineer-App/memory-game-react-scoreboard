import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Carousel from "./components/Carousel";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Carousel />
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Index />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
