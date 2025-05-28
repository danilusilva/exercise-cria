import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Login Empresa
function CompanyLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    // Simula o login bem-sucedido e salva no localStorage
    localStorage.setItem('companyLoggedIn', 'true');
    navigate("/empresa/dashboard");
  }

  // Verifica o localStorage ao carregar a página
  useEffect(() => {
    const companyLoggedIn = localStorage.getItem('companyLoggedIn');
    if (companyLoggedIn === 'true') {
      navigate("/empresa/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="mb-6">
          <Link to="/" className="text-blue-400 hover:underline">&larr; Voltar para a Home</Link>
        </div>
        <h1 className="text-2xl font-bold mb-6 text-blue-400 text-center">
          Login Empresa
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

export default CompanyLogin; 