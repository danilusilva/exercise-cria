import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Dashboard da Empresa
function CompanyDashboard({ desafios, setDesafios, solucoes }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [selected, setSelected] = useState(null);

  // Lista de empresas
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: 'Energisa',
      description: 'Empresa líder no setor de energia, focada em inovação e sustentabilidade.',
      location: 'CATAGUASES-MG',
      logo: '/energisa.png',
      desafios: [
        {
          id: 1,
          titulo: "Desafio hello word em html",
          descricao: "Crie um arquivo HTML simples exibindo 'Hello World'.",
          solucoes: [
            {
              candidato: "Danilu Silva",
              solucao: "Solução do desafio Hello World em HTML",
              videoPath: "/videos/meuvideo.mp4"
            }
          ]
        },
        {
          id: 2,
          titulo: "Automatizar relatório financeiro",
          descricao: "Crie um script para automatizar o relatório mensal de consumo de energia."
        }
      ]
    },
    {
      id: 2,
      name: 'Link 10',
      description: 'Operadora de telecomunicações que oferece serviços de internet, TV e telefonia, com foco em tecnologia e inovação.',
      location: 'CATAGUASES-MG',
      logo: '/link10.png',
      desafios: [
        {
          id: 3,
          titulo: "Otimização de Redes",
          descricao: "Desenvolva uma solução para otimizar a distribuição de banda em redes residenciais."
        },
        {
          id: 4,
          titulo: "Monitoramento de Serviços",
          descricao: "Crie um sistema de monitoramento para serviços de internet e TV."
        }
      ]
    },
    {
      id: 3,
      name: 'HBI Financeira',
      description: 'Instituição financeira especializada em soluções bancárias e serviços financeiros, oferecendo infraestrutura bancária completa e regulamentada.',
      location: 'LEOPOLDINA-MG',
      logo: '/hbi.png',
      desafios: [
        {
          id: 5,
          titulo: "Sistema de Pagamentos",
          descricao: "Desenvolva um sistema seguro para processamento de pagamentos online."
        },
        {
          id: 6,
          titulo: "Análise de Crédito",
          descricao: "Crie um algoritmo para análise de risco de crédito."
        }
      ]
    }
  ]);

  // Estado para controle da empresa selecionada e edição
  const [selectedCompanyId, setSelectedCompanyId] = useState(1); // Começa com Energisa
  const [isEditing, setIsEditing] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);

  // Carregar dados do localStorage ao montar
  useEffect(() => {
    const savedCompanies = localStorage.getItem('companies');
    const savedSelectedCompanyId = localStorage.getItem('selectedCompanyId');
    
    if (savedCompanies) {
      setCompanies(JSON.parse(savedCompanies));
    }
    if (savedSelectedCompanyId) {
      setSelectedCompanyId(parseInt(savedSelectedCompanyId));
    }
  }, []);

  // Obter a empresa selecionada atual
  const selectedCompany = companies.find(company => company.id === selectedCompanyId);

  function handleAdd(e) {
    e.preventDefault();
    const newDesafio = { id: Date.now(), titulo, descricao };
    const updatedCompanies = companies.map(company => {
      if (company.id === selectedCompanyId) {
        return {
          ...company,
          desafios: [...company.desafios, newDesafio]
        };
      }
      return company;
    });
    setCompanies(updatedCompanies);
    localStorage.setItem('companies', JSON.stringify(updatedCompanies));
    setTitulo("");
    setDescricao("");
  }

  // Funções para editar e salvar o perfil da empresa
  const handleEdit = () => {
    setEditingCompany({...selectedCompany});
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedCompanies = companies.map(company => 
      company.id === selectedCompanyId ? editingCompany : company
    );
    setCompanies(updatedCompanies);
    localStorage.setItem('companies', JSON.stringify(updatedCompanies));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingCompany(null);
  };

  const handleCompanyChange = (companyId) => {
    setSelectedCompanyId(companyId);
    localStorage.setItem('selectedCompanyId', companyId);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        {/* Seletor de Empresa */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-400 mb-4">Selecione a Empresa:</h2>
          <div className="flex gap-4">
            {companies.map(company => (
              <button
                key={company.id}
                onClick={() => handleCompanyChange(company.id)}
                className={`px-4 py-2 rounded ${
                  selectedCompanyId === company.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {company.name}
              </button>
            ))}
          </div>
        </div>

        {/* Seção de Perfil da Empresa (topo) */}
        {selectedCompany.coverImage && (
          <div
            className="w-full h-48 bg-cover bg-center relative rounded-t-lg"
            style={{ backgroundImage: `url(${selectedCompany.coverImage})` }}
          >
             {/* Optional: Add an overlay for text readability */}
             <div className="absolute inset-0 bg-black opacity-40 rounded-t-lg"></div>
          </div>
        )}
        
        <div className={`bg-gray-800 rounded-lg shadow-lg p-6 mb-8 flex flex-col md:flex-row items-center md:items-start gap-6 ${selectedCompany.coverImage ? '-mt-16 relative z-10' : ''}`}>
            {/* Company Logo */}
            <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-blue-500 bg-white flex items-center justify-center">
               <img src={selectedCompany.logo} alt={`${selectedCompany.name} Logo`} className="w-full h-full object-contain" />
            </div>

            <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-blue-400 mb-2">{selectedCompany.name}</h1>
                <p className="text-blue-300 mb-4 text-lg"><span className="font-semibold">Localização:</span> {selectedCompany.location}</p>
                
                {/* Descrição da Empresa */}
                <div className="text-gray-300 mt-4">
                     {!isEditing ? (
                       <p className="text-base leading-relaxed">{selectedCompany.description}</p>
                     ) : (
                       <textarea
                         className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                         value={editingCompany.description}
                         onChange={(e) => setEditingCompany({...editingCompany, description: e.target.value})}
                         rows="4"
                       />
                     )}
                </div>

                {/* Botões de edição */}
                <div className="mt-4">
                     {!isEditing ? (
                       <button className="px-4 py-2 border border-blue-500 text-blue-400 rounded hover:bg-blue-600 hover:text-white transition" onClick={handleEdit}>Editar Perfil</button>
                     ) : (
                       <div className="flex gap-2">
                         <button className="text-sm bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-green-600 transition" onClick={handleSave}>Salvar</button>
                         <button className="text-sm bg-red-500 text-white px-4 py-2 rounded font-semibold hover:bg-red-600 transition" onClick={handleCancel}>Cancelar</button>
                       </div>
                     )}
                </div>
            </div>
        </div>

        {/* Link para o Banco de Talentos */}
        <div className="mb-8 text-center">
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

        {/* Seção de Desafios da Empresa */}
        <h2 className="font-bold mb-4 text-blue-400 text-center text-2xl">Desafios da {selectedCompany.name}:</h2>
        <ul className="space-y-3 mb-8">
          {selectedCompany.desafios.map((d) => (
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
                {d.solucoes ? d.solucoes.length : 0} solução(ões) enviada(s)
              </div>
            </li>
          ))}
        </ul>

        {selected && (
          <div className="bg-gray-900 border border-blue-500 rounded p-4">
            <h3 className="text-blue-400 font-bold mb-2">
              Soluções para este desafio:
            </h3>
            {selectedCompany.desafios.find(d => d.id === selected)?.solucoes?.length === 0 && (
              <div className="text-gray-400">
                Nenhuma solução enviada ainda.
              </div>
            )}
            <ul className="space-y-2">
              {selectedCompany.desafios
                .find(d => d.id === selected)
                ?.solucoes?.map((s, i) => (
                  <li
                    key={i}
                    className="bg-gray-800 p-3 rounded text-white border border-blue-700"
                  >
                    <div className="text-xs text-blue-400 mb-1">
                      Talento: {s.candidato}
                    </div>
                    <pre className="whitespace-pre-wrap break-words">
                      {s.solucao}
                    </pre>
                    {s.videoPath && (
                      <div className="mt-2">
                        <a
                          href={s.videoPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                          Ver Vídeo da Solução
                        </a>
                      </div>
                    )}
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