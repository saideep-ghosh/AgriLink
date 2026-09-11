import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./Register"
import Login from "./Login"
import Dashboard from "./Dashboard"
import Marketrecommendation from "./Marketrecommendation"
import CropScanner from "./CropScanner"
import Logistics from "./Logistics"
import Marketplace from "./Marketplace"
import Buyer from "./Buyer"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/markets" element={<Marketrecommendation />} />
        <Route path="/crop-scanner" element={<CropScanner />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/buyer" element={<Buyer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App