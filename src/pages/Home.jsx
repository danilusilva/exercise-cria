import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Ícones SVG simples para os cards
const EmpresaIcon = () => (
  <svg
    className="w-10 h-10 text-blue-400 mb-2"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M16 3v4M8 3v4M3 11h18" />
  </svg>
);
const DevIcon = () => (
  <svg
    className="w-8 h-8 text-blue-400 mb-2"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);
const TranspIcon = () => (
  <svg
    className="w-8 h-8 text-blue-400 mb-2"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20" />
  </svg>
);

// Footer moderno com links sociais fictícios
function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <span>
          © {new Date().getFullYear()} DAVE. Todos os direitos reservados.
        </span>
        <div className="flex gap-4 items-center">
          <Link
            to="/sobre"
            className="ml-4 px-4 py-2 border border-blue-500 rounded text-blue-400 hover:bg-blue-500 hover:text-white transition"
          >
            Sobre
          </Link>
        </div>
      </div>
    </footer>
  );
}

// Carrossel de depoimentos simples
const depoimentos = [
  {
    texto:
      "Conseguimos resolver um problema antigo da empresa e ainda contratamos o desenvolvedor que enviou a melhor solução!",
    autor: "Ana, RH de Startup",
  },
  {
    texto:
      "Foi incrível participar! Resolvi desafios reais e fui chamado para entrevistas em empresas que admiro.",
    autor: "Lucas, Desenvolvedor Fullstack",
  },
  {
    texto:
      "A plataforma é transparente e fácil de usar. Recomendo para empresas que querem inovar.",
    autor: "Carlos, CTO",
  },
];

function DepoimentosCarrossel() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setIdx((i) => (i + 1) % depoimentos.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);
  function prev() {
    setIdx((i) => (i - 1 + depoimentos.length) % depoimentos.length);
  }
  function next() {
    setIdx((i) => (i + 1) % depoimentos.length);
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {/* Card de depoimento */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg min-h-[140px] flex-1 flex flex-col items-center justify-center mx-2">
          <p className="text-gray-300 italic mb-2 text-center">
            "{depoimentos[idx].texto}"
          </p>
          <span className="text-blue-400 font-semibold text-center">
            — {depoimentos[idx].autor}
          </span>
        </div>
        {/* Botão direita */}
        <button
          onClick={next}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-blue-400 border border-blue-500 hover:bg-blue-600 hover:text-white transition mx-2"
          aria-label="Próximo"
        >
          {/* Chevron Right SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-center mt-2 gap-2">
        {depoimentos.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === idx ? "bg-blue-400" : "bg-gray-600"
            }`}
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
  { nome: "Energisa", cor: "bg-blue-500", link: "https://www.energisa.com.br/sobre-nos/institucional/institucional/quem-somos" },
  { nome: "SEBRAE", cor: "bg-blue-400", link: "https://sebrae.com.br/sites/PortalSebrae/canais_adicionais/conheca_quemsomos" },
  { nome: "SENAI", cor: "bg-blue-600", link: "https://www.fiemg.com.br/senai/" },
];

// Navbar
function Navbar() {
  const navigate = useNavigate();

  function handleTalentLoginClick(e) {
    const hasLoggedIn = localStorage.getItem('hasLoggedIn');
    if (hasLoggedIn) {
      e.preventDefault(); // Previne a navegação padrão do Link
      navigate('/perfil-talento');
    }
    // Se não estiver logado, o Link navegará para /candidato/login normalmente
  }

  return (
    <nav className="bg-gray-950 p-4 max-h-15 flex justify-between items-center shadow border-b border-gray-800 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src="/imageDave.png"
            alt="Logo DAVE"
            className="h-15 w-auto"
          />
        </Link>
      </div>
    </nav>
  );
}

// Home interativa e moderna
function Home() {
  const navigate = useNavigate();

  function handleTalentLoginClick(e) {
    const hasLoggedIn = localStorage.getItem('hasLoggedIn');
    if (hasLoggedIn) {
      e.preventDefault(); // Previne a navegação padrão do Link
      navigate('/perfil-talento');
    }
    // Se não estiver logado, o Link navegará para /candidato/login normalmente
  }

  function handleCompanyLoginClick(e) {
    const companyLoggedIn = localStorage.getItem('companyLoggedIn');
    if (companyLoggedIn === 'true') {
      e.preventDefault(); // Previne a navegação padrão do Link
      navigate('/empresa/dashboard');
    }
    // Se não estiver logado, o Link navegará para /empresa/login normalmente
  }

  // Dados das empresas parceiras (com logos e nomes completos)
  const partnerCompanies = [
    { name: 'Instituto Energisa', logo: '/energisa.png' },
    { name: 'Link-10', logo: '/link10.png' },
    { name: 'Hbi financeira', logo: '/hbi.png' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-400 animate-fade-in-down mt-10">
          Conecte empresas e talentos com desafios reais
        </h1>
        <p className="mb-8 text-gray-300 text-lg max-w-2xl animate-fade-in mt-5">
          O DAVE é a ponte entre empresas inovadoras e talentos de tecnologia.
          Publique desafios reais, encontre soluções criativas e descubra novos
          profissionais.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up">
          <Link
            to="/sobre"
            className="px-6 py-2 bg-gray-900 text-blue-400 border border-blue-500 rounded font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 focus:ring-2 focus:ring-blue-400"
          >
            Saiba mais
          </Link>
          <Link
            to="/empresa/login"
            className="px-6 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition-all duration-200 focus:ring-2 focus:ring-blue-400"
            onClick={handleCompanyLoginClick}
          >
            Entrar como Empresa
          </Link>
          <Link
            to="/candidato/login"
            className="px-6 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition-all duration-200 focus:ring-2 focus:ring-blue-400"
            onClick={handleTalentLoginClick}
          >
            Entrar como Talento
          </Link>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="max-w-5xl mx-auto py-12 px-4 animate-fade-in-up">
        <h2 className="text-2xl font-bold text-blue-400 mb-8 text-center">
          Depoimentos
        </h2>
        <DepoimentosCarrossel />
      </section>

      {/* Empresas parceiras (com logos e nomes) */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Nossos Clientes</h2>
          <div className="flex flex-wrap justify-center items-start gap-8 md:gap-16">
            {partnerCompanies.map((company, index) => (
              <div key={index} className="flex flex-col items-center w-40 h-auto">
                <div className="w-40 h-40 flex items-center justify-center mb-2">
                   <img 
                    src={company.logo} 
                    alt={`${company.name} Logo`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-gray-300 text-base font-semibold text-center">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home; 