import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Dashboard da Empresa
function CompanyDashboard({ desafios, setDesafios, solucoes }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [selected, setSelected] = useState(null);

  // Estado para o perfil da empresa
  const [isEditing, setIsEditing] = useState(false);
  const [companyName, setCompanyName] = useState('Nome da Empresa Placeholder');
  const [companyDescription, setCompanyDescription] = useState('Descrição da empresa...');

  // Carregar dados do localStorage ao montar
  useEffect(() => {
    const savedCompanyName = localStorage.getItem('companyName');
    const savedCompanyDescription = localStorage.getItem('companyDescription');

    if (savedCompanyName) setCompanyName(savedCompanyName);
    if (savedCompanyDescription) setCompanyDescription(savedCompanyDescription);
  }, []);

  function handleAdd(e) {
    e.preventDefault();
    setDesafios([...desafios, { id: Date.now(), titulo, descricao }]);
    setTitulo("");
    setDescricao("");
  }

  // Funções para editar e salvar o perfil da empresa
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Salvar no localStorage
    localStorage.setItem('companyName', companyName);
    localStorage.setItem('companyDescription', companyDescription);
    console.log('Company profile saved:', { name: companyName, description: companyDescription });
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reverter para os dados salvos ou padrão
    const savedCompanyName = localStorage.getItem('companyName');
    const savedCompanyDescription = localStorage.getItem('companyDescription');
    setCompanyName(savedCompanyName || 'Nome da Empresa Placeholder');
    setCompanyDescription(savedCompanyDescription || 'Descrição da empresa...');
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-3xl">

        {/* Seção de Perfil da Empresa */}
        <div className="mb-8 pb-8 border-b border-gray-700">
           <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-blue-400">Perfil da Empresa</h1>
              {!isEditing ? (
                <button className="px-3 py-1 border border-blue-500 text-blue-400 rounded text-sm hover:bg-blue-600 hover:text-white transition" onClick={handleEdit}>Editar</button>
              ) : (
                <div className="flex gap-2">
                  <button className="text-sm bg-green-500 text-white px-3 py-1 rounded font-semibold hover:bg-green-600 transition" onClick={handleSave}>Salvar</button>
                  <button className="text-sm bg-red-500 text-white px-3 py-1 rounded font-semibold hover:bg-red-600 transition" onClick={handleCancel}>Cancelar</button>
                </div>
              )}
           </div>
           {!isEditing ? (
             <div className="text-gray-300">
                <h2 className="text-xl font-semibold text-white mb-2">{companyName}</h2>
                <p>{companyDescription}</p>
             </div>
           ) : (
             <div className="flex flex-col gap-2">
                <label className="block">
                   <span className="font-semibold text-blue-300">Nome da Empresa:</span>
                   <input
                     type="text"
                     className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                     value={companyName}
                     onChange={(e) => setCompanyName(e.target.value)}
                   />
                </label>
                 <label className="block">
                   <span className="font-semibold text-blue-300">Descrição:</span>
                   <textarea
                     className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                     value={companyDescription}
                     onChange={(e) => setCompanyDescription(e.target.value)}
                     rows="3"
                   />
                </label>
             </div>
           )}
        </div>

        {/* Link para o Banco de Talentos */}
        <div className="mb-8">
           <Link to="/empresa/banco-talentos" className="text-blue-400 hover:underline font-semibold">
              &larr; Ver Banco de Talentos
           </Link>
        </div>

        {/* Seção de Criação de Desafio */}
        <h1 className="text-2xl font-bold mb-6 text-blue-400 text-center">
          Criar Novo Desafio
        </h1>
        <form onSubmit={handleAdd} className="mb-8 flex flex-col gap-3">
          <input
            type="text"
            placeholder="Título do desafio"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <textarea
            placeholder="Descrição do desafio"
            className="border border-blue-500 bg-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 transition"
            type="submit"
          >
            Criar desafio
          </button>
        </form>
        <h2 className="font-bold mb-2 text-blue-400">Seus desafios:</h2>
        <ul className="space-y-3 mb-8">
          {desafios.map((d) => (
            <li
              key={d.id}
              className={`border border-blue-500 p-4 rounded bg-gray-900 cursor-pointer ${
                selected === d.id ? "ring-2 ring-blue-400" : ""
              }`}
              onClick={() => setSelected(d.id)}
            >
              <div className="font-semibold text-white">{d.titulo}</div>
              <div className="text-sm text-gray-300">{d.descricao}</div>
              <div className="text-xs text-gray-500 mt-2">
                {solucoes.filter((s) => s.desafioId === d.id).length}{" "}
                solução(ões) enviada(s)
              </div>
            </li>
          ))}
        </ul>
        {selected && (
          <div className="bg-gray-900 border border-blue-500 rounded p-4">
            <h3 className="text-blue-400 font-bold mb-2">
              Soluções para este desafio:
            </h3>
            {solucoes.filter((s) => s.desafioId === selected).length === 0 && (
              <div className="text-gray-400">
                Nenhuma solução enviada ainda.
              </div>
            )}
            <ul className="space-y-2">
              {solucoes
                .filter((s) => s.desafioId === selected)
                .map((s, i) => (
                  <li
                    key={i}
                    className="bg-gray-800 p-3 rounded text-white border border-blue-700"
                  >
                    <div className="text-xs text-blue-400 mb-1">
                      Talento: {s.candidato || "Anônimo"}
                    </div>
                    <pre className="whitespace-pre-wrap break-words">
                      {s.solucao}
                    </pre>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyDashboard; 