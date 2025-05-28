// Ícones SVG simples para os cards
const EmpresaIcon = () => (
  <svg
    className="w-8 h-8 text-blue-400 mb-2"
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

export { EmpresaIcon, DevIcon, TranspIcon }; 