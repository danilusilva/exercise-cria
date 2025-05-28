import { useState, useEffect } from "react";

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
  },\n  {
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

export default DepoimentosCarrossel; 