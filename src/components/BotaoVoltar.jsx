import { useNavigate } from "react-router-dom";

export default function BotaoVoltar({ to = -1 }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-purple-400 text-purple-400 hover:bg-purple-600 hover:text-white transition"
      aria-label="Voltar"
    >
      {/* Chevron Left SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}