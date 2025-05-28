import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

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
        <div className="mb-6">
          <Link to="/" className="text-blue-400 hover:underline">&larr; Voltar para a Home</Link>
        </div>
        <h1 className="text-2xl font-bold mb-6 text-blue-400 text-center">
          Cadastro de Empresa
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome da empresa"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="CNPJ"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 transition"
            type="submit"
          >
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

export default CompanyRegister; 