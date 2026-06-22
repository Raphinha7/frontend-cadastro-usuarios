import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Listagem from "./pages/Listagem";
import Biblioteca from "./pages/Biblioteca";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listagem" element={<Listagem />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;