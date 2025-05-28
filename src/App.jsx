import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";
import BotaoVoltar from "./components/BotaoVoltar";

// Ícones SVG simples para os cards
const EmpresaIcon = () => (
  <svg className="w-8 h-8 text-blue-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M16 3v4M8 3v4M3 11h18" />
  </svg>
);
const DevIcon = () => (
  <svg className="w-8 h-8 text-blue-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);
const TranspIcon = () => (
  <svg className="w-8 h-8 text-blue-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20" />
  </svg>
);

// Footer moderno com links sociais fictícios
function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-6 mt-12 border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <span>© {new Date().getFullYear()} DAVE. Todos os direitos reservados.</span>
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:text-blue-400 transition ml-4 px-4 py-2 border border-blue-500 rounded text-blue-400 hover:bg-blue-500 hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-blue-400 transition ml-4 px-4 py-2 border border-blue-500 rounded text-blue-400 hover:bg-blue-500 hover:text-white transition">Instagram</a>
          <Link to="/contato" className="ml-4 px-4 py-2 border border-blue-500 rounded text-blue-400 hover:bg-blue-500 hover:text-white transition">Contato</Link>
          <Link to="/sobre" className="ml-4 px-4 py-2 border border-blue-500 rounded text-blue-400 hover:bg-blue-500 hover:text-white transition">Sobre</Link>
        </div>
      </div>
    </footer>
  );
}

// Carrossel de depoimentos simples
const depoimentos = [
  {
    texto: "Conseguimos resolver um problema antigo da empresa e ainda contratamos o desenvolvedor que enviou a melhor solução!",
    autor: "Ana, RH de Startup"
  },
  {
    texto: "Foi incrível participar! Resolvi desafios reais e fui chamado para entrevistas em empresas que admiro.",
    autor: "Lucas, Desenvolvedor Fullstack"
  },
  {
    texto: "A plataforma é transparente e fácil de usar. Recomendo para empresas que querem inovar.",
    autor: "Carlos, CTO"
  }
];

function DepoimentosCarrossel() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % depoimentos.length), 5000);
    return () => clearInterval(timer);
  }, []);
  function prev() {
    setIdx(i => (i - 1 + depoimentos.length) % depoimentos.length);
  }
  function next() {
    setIdx(i => (i + 1) % depoimentos.length);
  }
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="flex items-center justify-center">
        {/* Botão esquerda */}
        <button
          onClick={prev}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-blue-400 border border-blue-500 hover:bg-blue-600 hover:text-white transition mx-2"
          aria-label="Anterior"
        >
          {/* Chevron Left SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* Card de depoimento */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg min-h-[140px] flex-1 flex flex-col items-center justify-center mx-2">
          <p className="text-gray-300 italic mb-2 text-center">"{depoimentos[idx].texto}"</p>
          <span className="text-blue-400 font-semibold text-center">— {depoimentos[idx].autor}</span>
        </div>
        {/* Botão direita */}
        <button
          onClick={next}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-blue-400 border border-blue-500 hover:bg-blue-600 hover:text-white transition mx-2"
          aria-label="Próximo"
        >
          {/* Chevron Right SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center mt-2 gap-2">
        {depoimentos.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full ${i === idx ? "bg-blue-400" : "bg-gray-600"}`}
            onClick={() => setIdx(i)}
            aria-label={`Depoimento ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Empresas parceiras fictícias
const empresas = [
  { nome: "Energisa", cor: "bg-blue-500" },
  { nome: "SEBRAE", cor: "bg-blue-400" },
  { nome: "SENAI", cor: "bg-blue-600" },
];

// Navbar
function Navbar() {
  return (
    <nav className="bg-gray-950 p-4 max-h-15 flex justify-between items-center shadow border-b border-gray-800 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          {/* Logo SVG DAVE maior e sem texto ao lado */}
          <img src="/src/images/Dave-removebg-preview.png" alt="Logo DAVE" className="h-15 w-auto" />
        </Link>
      </div>
    </nav>
  );
}

// Home interativa e moderna
function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-400 animate-fade-in-down mt-10">
          Conecte empresas e talentos com desafios reais
        </h1>
        <p className="mb-8 text-gray-300 text-lg max-w-2xl animate-fade-in mt-5">
          O DAVE é a ponte entre empresas inovadoras e talentos de tecnologia. Publique desafios reais, encontre soluções criativas e descubra novos profissionais.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up">
          <Link to="/sobre" className="px-6 py-2 bg-gray-900 text-blue-400 border border-blue-500 rounded font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 focus:ring-2 focus:ring-blue-400">
            Saiba mais
          </Link>
          <Link to="/empresa/login" className="px-6 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition-all duration-200 focus:ring-2 focus:ring-blue-400">
            Entrar como Empresa
          </Link>
          <Link to="/candidato/login" className="px-6 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition-all duration-200 focus:ring-2 focus:ring-blue-400">
            Entrar como Candidato
          </Link>
        </div>
      </section>

      {/* Benefícios */}
      <section className="max-w-5xl mx-auto py-12 px-4 grid md:grid-cols-3 gap-8 animate-fade-in">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
          <EmpresaIcon />
          <h2 className="text-blue-400 font-bold text-xl mb-2">Para Empresas</h2>
          <p className="text-gray-300">Receba soluções inovadoras para problemas reais e descubra talentos prontos para o mercado.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
          <DevIcon />
          <h2 className="text-blue-400 font-bold text-xl mb-2">Para Desenvolvedores</h2>
          <p className="text-gray-300">Enfrente desafios do mundo real, mostre suas habilidades e seja reconhecido por grandes empresas.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
          <TranspIcon />
          <h2 className="text-blue-400 font-bold text-xl mb-2">Transparência</h2>
          <p className="text-gray-300">Veja exemplos de desafios e soluções, inspire-se e participe de uma comunidade colaborativa.</p>
        </div>
      </section>

      {/* Empresas parceiras */}
      <section className="max-w-5xl mx-auto py-8 px-4 animate-fade-in-up">
        <h2 className="text-xl font-bold text-blue-400 mb-4 text-center">Empresas Parceiras</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {empresas.map((e, i) => (
            <div key={i} className={`rounded-lg px-6 py-3 text-white font-bold shadow ${e.cor} bg-opacity-80`}>
              {e.nome}
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="max-w-5xl mx-auto py-12 px-4 animate-fade-in-up">
        <h2 className="text-2xl font-bold text-blue-400 mb-8 text-center">Depoimentos</h2>
        <DepoimentosCarrossel />
      </section>
      <Footer />
    </div>
  );
}

// Sobre institucional e interativo
function Sobre() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="bg-gray-800 rounded-lg shadow-lg p-10 max-w-2xl w-full text-left mt-12">
          <h1 className="text-3xl font-extrabold mb-4 text-blue-400">Sobre o DAVE</h1>
          <p className="text-gray-300 mb-4">
            O DAVE nasceu para aproximar empresas e desenvolvedores, promovendo inovação e oportunidades reais.
          </p>
          <div className="mb-4">
            <h2 className="text-blue-400 font-bold mb-2">Missão</h2>
            <p className="text-gray-300">Transformar desafios do mercado em oportunidades de crescimento para empresas e profissionais de tecnologia.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-blue-400 font-bold mb-2">Visão</h2>
            <p className="text-gray-300">Ser referência em conexão entre empresas e talentos tech, através de desafios práticos e colaborativos.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-blue-400 font-bold mb-2">Como funciona?</h2>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Empresas publicam desafios reais do seu dia a dia.</li>
              <li>Desenvolvedores escolhem desafios, resolvem e enviam suas soluções.</li>
              <li>Empresas avaliam as soluções e podem entrar em contato com os melhores talentos.</li>
            </ul>
          </div>
          <div className="mt-8 flex gap-4">
            <Link to="/empresa/login" className="px-6 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition-all duration-200">
              Publicar desafio
            </Link>
            <Link to="/candidato/login" className="px-6 py-2 bg-gray-900 text-blue-400 border border-blue-500 rounded font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
              Resolver desafio
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// Login Empresa
function CompanyLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/empresa/dashboard");
  }
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-blue-400 text-center">Login Empresa</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="E-mail"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 transition" type="submit">
            Entrar
          </button>
        </form>
        <div className="text-center mt-6">
          <span className="text-gray-300">Ainda não tem cadastro?</span>
          <button
            onClick={() => navigate("/empresa/cadastro")}
            className="ml-2 text-blue-400 hover:underline"
          >
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
}

// Login Candidato
function CandidateLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/candidato/dashboard");
  }
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-blue-400 text-center">Login Candidato</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="E-mail"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 transition" type="submit">
            Entrar
          </button>
        </form>
        <div className="text-center mt-6">
          <span className="text-gray-300">Ainda não tem cadastro?</span>
          <button
            onClick={() => navigate("/candidato/cadastro")}
            className="ml-2 text-blue-400 hover:underline"
          >
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
}

// Cadastro Empresa
function CompanyRegister() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/empresa/login");
  }
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-blue-400 text-center">Cadastro de Empresa</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome da empresa"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="CNPJ"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={cnpj}
            onChange={e => setCnpj(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 transition" type="submit">
            Cadastrar
          </button>
        </form>
        <div className="text-center mt-6">
          <span className="text-gray-300">Já tem cadastro?</span>
          <button
            onClick={() => navigate("/empresa/login")}
            className="ml-2 text-blue-400 hover:underline"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

// Cadastro Candidato
function CandidateRegister() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/candidato/login");
  }
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-blue-400 text-center">Cadastro de Candidato</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome completo"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 transition" type="submit">
            Cadastrar
          </button>
        </form>
        <div className="text-center mt-6">
          <span className="text-gray-300">Já tem cadastro?</span>
          <button
            onClick={() => navigate("/candidato/login")}
            className="ml-2 text-blue-400 hover:underline"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

// Dashboard da Empresa
function CompanyDashboard({ desafios, setDesafios, solucoes }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [selected, setSelected] = useState(null);

  function handleAdd(e) {
    e.preventDefault();
    setDesafios([...desafios, { id: Date.now(), titulo, descricao }]);
    setTitulo("");
    setDescricao("");
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-blue-400 text-center">Dashboard da Empresa</h1>
        <form onSubmit={handleAdd} className="mb-8 flex flex-col gap-3">
          <input
            type="text"
            placeholder="Título do desafio"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            required
          />
          <textarea
            placeholder="Descrição do desafio"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
            required
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 transition" type="submit">
            Criar desafio
          </button>
        </form>
        <h2 className="font-bold mb-2 text-blue-400">Seus desafios:</h2>
        <ul className="space-y-3 mb-8">
          {desafios.map(d => (
            <li
              key={d.id}
              className={`border border-blue-500 p-4 rounded bg-gray-900 cursor-pointer ${selected === d.id ? "ring-2 ring-blue-400" : ""}`}
              onClick={() => setSelected(d.id)}
            >
              <div className="font-semibold text-white">{d.titulo}</div>
              <div className="text-sm text-gray-300">{d.descricao}</div>
              <div className="text-xs text-gray-500 mt-2">
                {solucoes.filter(s => s.desafioId === d.id).length} solução(ões) enviada(s)
              </div>
            </li>
          ))}
        </ul>
        {selected && (
          <div className="bg-gray-900 border border-blue-500 rounded p-4">
            <h3 className="text-blue-400 font-bold mb-2">Soluções para este desafio:</h3>
            {solucoes.filter(s => s.desafioId === selected).length === 0 && (
              <div className="text-gray-400">Nenhuma solução enviada ainda.</div>
            )}
            <ul className="space-y-2">
              {solucoes
                .filter(s => s.desafioId === selected)
                .map((s, i) => (
                  <li key={i} className="bg-gray-800 p-3 rounded text-white border border-blue-700">
                    <div className="text-xs text-blue-400 mb-1">Candidato: {s.candidato || 'Anônimo'}</div>
                    <pre className="whitespace-pre-wrap break-words">{s.solucao}</pre>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// Dashboard do Candidato
function CandidateDashboard({ desafios, addSolucao, solucoes }) {
  const [solucoesEnviadas, setSolucoesEnviadas] = useState({});
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e, desafioId) {
    e.preventDefault();
    const solucao = solucoesEnviadas[desafioId];
    if (!solucao) return;
    addSolucao({ desafioId, solucao, candidato: "Candidato" });
    setMensagem("Solução enviada com sucesso!");
    setSolucoesEnviadas({ ...solucoesEnviadas, [desafioId]: "" });
    setTimeout(() => setMensagem(""), 2000);
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <div className="flex items-center mb-6">
          <BotaoVoltar />
          <h1 className="text-2xl font-bold text-blue-400 text-center flex-1">Desafios Disponíveis</h1>
        </div>
        <ul className="space-y-6 mb-6">
          {desafios.length === 0 && (
            <li className="text-gray-400">Nenhum desafio disponível no momento.</li>
          )}
          {desafios.map(d => (
            <li key={d.id} className="border border-blue-500 p-4 rounded bg-gray-900">
              <div className="font-semibold text-white">{d.titulo}</div>
              <div className="text-sm text-gray-300 mb-2">{d.descricao}</div>
              <form onSubmit={e => handleSubmit(e, d.id)} className="flex flex-col gap-2">
                <textarea
                  placeholder="Cole sua solução aqui..."
                  className="border border-blue-500 bg-gray-800 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={solucoesEnviadas[d.id] || ""}
                  onChange={e => setSolucoesEnviadas({ ...solucoesEnviadas, [d.id]: e.target.value })}
                  required
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 transition" type="submit">
                  Enviar solução
                </button>
              </form>
              <div className="text-xs text-gray-400 mt-2">
                {solucoes.filter(s => s.desafioId === d.id).length} solução(ões) enviada(s)
              </div>
              {mensagem && <div className="text-blue-400 mt-2">{mensagem}</div>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// App principal com estado global
function App() {
  const [desafios, setDesafios] = useState([
    { id: 1, titulo: "Automatizar relatório financeiro", descricao: "Crie um script para automatizar o relatório mensal." }
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
        <Route
          path="/candidato/dashboard"
          element={
            <CandidateDashboard
              desafios={desafios}
              addSolucao={addSolucao}
              solucoes={solucoes}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
