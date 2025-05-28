import { Link } from "react-router-dom";
import Footer from "../components/Footer"; // Assumindo que o Footer será movido

// Sobre institucional e interativo
function Sobre() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="bg-gray-800 rounded-lg shadow-lg p-10 max-w-2xl w-full text-left mt-12">
          <div className="mb-6">
            <Link to="/" className="text-blue-400 hover:underline">&larr; Voltar para a Home</Link>
          </div>
          <h1 className="text-3xl font-extrabold mb-4 text-blue-400">
            Sobre o DAVE
          </h1>
          <p className="text-gray-300 mb-4">
            O DAVE nasceu para aproximar empresas e desenvolvedores, promovendo
            inovação e oportunidades reais.
          </p>
          <div className="mb-4">
            <h2 className="text-blue-400 font-bold mb-2">Missão</h2>
            <p className="text-gray-300">
              Transformar desafios do mercado em oportunidades de crescimento
              para empresas e profissionais de tecnologia.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-blue-400 font-bold mb-2">Visão</h2>
            <p className="text-gray-300">
              Ser referência em conexão entre empresas e talentos tech, através
              de desafios práticos e colaborativos.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-blue-400 font-bold mb-2">Como funciona?</h2>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Empresas publicam desafios reais do seu dia a dia.</li>
              <li>
                Talentos escolhem desafios, resolvem e enviam suas
                soluções.
              </li>
              <li>
                Empresas avaliam as soluções e podem entrar em contato com os
                melhores talentos.
              </li>
            </ul>
          </div>
          <div className="mt-8 flex gap-4">
            <Link
              to="/empresa/login"
              className="px-6 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition-all duration-200"
            >
              Publicar desafio
            </Link>
            <Link
              to="/candidato/login"
              className="px-6 py-2 bg-gray-900 text-blue-400 border border-blue-500 rounded font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Resolver desafio
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Sobre; 