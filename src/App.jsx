import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout/Layout";
import Home from "./components/pages/Home";
import Servicios from "./components/pages/Servicios";
import InformacionProfesional from "./components/pages/InformacionProfesional";
import Contacto from "./components/pages/Contacto";
import RealizarConsulta from "./components/pages/RealizarConsulta";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/informacion-profesional" element={<InformacionProfesional />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/realizar-consulta" element={<RealizarConsulta />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;