import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router"
import NotFound from "./pages/NotFound"
import { House } from 'lucide-react';

function App() {

  return (
    <>
      <House/>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
