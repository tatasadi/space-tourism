import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DesignSystem from "./pages/DesignSystem"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-system" element={<DesignSystem />} />
      </Routes>
    </Router>
  )
}

export default App
