import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Login Candidato
function CandidateLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    // Verifica se o usuário já fez login ao carregar a página
    const hasLoggedIn = localStorage.getItem('hasLoggedIn');
    if (hasLoggedIn) {
      navigate('/perfil-talento');
    }
  }, [navigate]); // Adiciona navigate como dependência para useEffect

  function handleSubmit(e) {
    e.preventDefault();
    // Aqui você faria a lógica de autenticação real
    // Se o login for bem-sucedido:
    localStorage.setItem('hasLoggedIn', 'true'); // Define o flag no localStorage
    navigate("/perfil-talento");
  }
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="mb-6">
          <Link to="/" className="text-blue-400 hover:underline">&larr; Voltar para a Home</Link>
        </div>
        <h1 className="text-2xl font-bold mb-6 text-blue-400 text-center">
          Login Talento
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

export default CandidateLogin; 