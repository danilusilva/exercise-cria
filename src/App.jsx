import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./index.css";

// Importando componentes de página
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import CompanyLogin from "./pages/CompanyLogin";
import CandidateLogin from "./pages/CandidateLogin";
import CompanyRegister from "./pages/CompanyRegister";
import CandidateRegister from "./pages/CandidateRegister";
import CompanyDashboard from "./pages/CompanyDashboard";
import TalentProfile from "./pages/TalentProfile";
import FindJobs from "./pages/FindJobs";
import TalentPool from "./pages/TalentPool";

// Importando componentes menores (Navbar, Footer, etc. - você pode precisar importar outros se eles não estiverem dentro das páginas/componentes que os usam diretamente)
import Navbar from "./components/Navbar";

function App() {
  // Tentativa de forçar a recompilação
  const [desafios, setDesafios] = useState([
    {
      id: 1,
      titulo: "Automatizar relatório financeiro",
      descricao: "Crie um script para automatizar o relatório mensal.",
    },
  ]);
  const [solucoes, setSolucoes] = useState([]);

  function addSolucao(solucao) {
    setSolucoes([...solucoes, solucao]);
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/empresa/login" element={<CompanyLogin />} />
        <Route path="/empresa/cadastro" element={<CompanyRegister />} />
        <Route path="/candidato/login" element={<CandidateLogin />} />
        <Route path="/candidato/cadastro" element={<CandidateRegister />} />
        <Route
          path="/empresa/dashboard"
          element={
            <CompanyDashboard
              desafios={desafios}
              setDesafios={setDesafios}
              solucoes={solucoes}
            />
          }
        />
        <Route path="/perfil-talento" element={<TalentProfile solucoes={solucoes} />} />
        <Route path="/encontrar-desafios" element={<FindJobs desafios={desafios} />} />
        <Route path="/empresa/banco-talentos" element={<TalentPool />} />
      </Routes>
    </Router>
  );
}

export default App;
