import { Link } from "react-router-dom";

// Footer moderno com links sociais fictícios
function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-6 mt-12 border-t border-gray-800">
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

export default Footer; 