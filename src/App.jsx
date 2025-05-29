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
import CompanyProfilePage from "./pages/CompanyProfilePage";
import TalentDetailPage from "./pages/TalentDetailPage";

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
    {
      id: 2, // Novo ID para o desafio Hello World
      titulo: "Desafio hello word em html",
      descricao: "Crie um arquivo HTML simples exibindo 'Hello World'.", // Descrição de exemplo
    },
  ]);
  const [solucoes, setSolucoes] = useState([
    {
      id: 1, // ID da solução (pode ser gerado dinamicamente)
      desafioId: 1, // ID do desafio relacionado
      tituloDesafio: 'Hello World', // Título do desafio solucionado (consistente com o último pedido)
      solucao: 'Minha solução para o desafio de relatório financeiro com um script.', // Descrição da solução
      candidato: 'Talento', // Nome ou ID do candidato (para filtrar no perfil)
      videoPath: '/videos/meuvideo.mp4', // Caminho do vídeo da solução
    },
    // Adicionar outras soluções fictícias aqui se necessário
  ]);

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
        <Route path="/empresa/perfil" element={<CompanyProfilePage />} />
        <Route path="/talento/:id" element={<TalentDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
