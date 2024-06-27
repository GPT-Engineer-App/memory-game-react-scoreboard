import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SlotMachine from "./pages/SlotMachine.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/slot-machine" element={<SlotMachine />} />
      </Routes>
    </Router>
  );
}

export default App;