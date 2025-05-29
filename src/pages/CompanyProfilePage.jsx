import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Importe CompanyDashboard para acessar a lista de desafios (se necessário, ou passe como prop)
// import CompanyDashboard from './CompanyDashboard'; 

// Placeholder data for company information and challenges
const companyDataPlaceholder = {
  name: 'Energisa',
  location: 'CATAGUASES-MG',
  description: 'Empresa líder no setor de energia, focada em inovação e sustentabilidade. A Energisa atua em todo território nacional, oferecendo soluções completas em energia elétrica e buscando sempre a inovação e o desenvolvimento sustentável em suas operações.',
  website: 'https://www.energisa.com.br',
  industry: 'Energia / Elétrica',
  companySize: 'Grande (mais de 1000 funcionários)',
  logo: '/logo-energisa.png', // Placeholder for Energisa logo
};

// Placeholder data for challenges posted by the company (replace with actual data source)
const companyChallengesPlaceholder = [
  {
    id: 1,
    title: "Otimização de Consumo de Energia",
    description: "Desenvolver soluções inovadoras para reduzir o consumo de energia em residências e empresas.",
    status: "Aberto",
  },
  {
    id: 2,
    title: "Implementação de Smart Grids",
    description: "Projetar e implementar sistemas de redes elétricas inteligentes para melhorar a eficiência e confiabilidade.",
    status: "Em Andamento",
  },
  {
    id: 3,
    title: "Desenvolvimento de Fontes de Energia Renovável",
    description: "Pesquisar e propor novas tecnologias para geração de energia a partir de fontes renováveis.",
    status: "Fechado",
  },
];

// Company Profile Page
function CompanyProfilePage({ desafios }) { // Assuming challenges will be passed as a prop
  // Estado para o perfil da empresa
  const [isAboutEditing, setIsAboutEditing] = useState(false);
  const [aboutText, setAboutText] = useState(companyDataPlaceholder.description);

  const [isInfoEditing, setIsInfoEditing] = useState(false);
  const [companyInfo, setCompanyInfo] = useState({
    name: companyDataPlaceholder.name,
    location: companyDataPlaceholder.location,
    website: companyDataPlaceholder.website,
    industry: companyDataPlaceholder.industry,
    companySize: companyDataPlaceholder.companySize,
  });

  // Carregar dados do localStorage ao montar
  useEffect(() => {
    const savedAbout = localStorage.getItem('companyAbout');
    const savedInfo = localStorage.getItem('companyInfo');

    if (savedAbout) setAboutText(savedAbout);
    if (savedInfo) setCompanyInfo(JSON.parse(savedInfo));
  }, []);

  // Funções para editar e salvar a seção Sobre a Empresa
  const handleAboutEdit = () => {
    setIsAboutEditing(true);
  };

  const handleAboutSave = () => {
    localStorage.setItem('companyAbout', aboutText);
    setIsAboutEditing(false);
  };

  const handleAboutCancel = () => {
    const savedAbout = localStorage.getItem('companyAbout');
    setAboutText(savedAbout || companyDataPlaceholder.description);
    setIsAboutEditing(false);
  };

  // Funções para editar e salvar a seção de Informações da Empresa
  const handleInfoEdit = () => {
    setIsInfoEditing(true);
  };

  const handleInfoSave = () => {
    localStorage.setItem('companyInfo', JSON.stringify(companyInfo));
    setIsInfoEditing(false);
  };

  const handleInfoCancel = () => {
    const savedInfo = localStorage.getItem('companyInfo');
    setCompanyInfo(savedInfo ? JSON.parse(savedInfo) : companyDataPlaceholder);
    setIsInfoEditing(false);
  };

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo({ ...companyInfo, [name]: value });
  };

  // Usar desafios passados como prop ou placeholder se não houver
  const companyChallenges = desafios || companyChallengesPlaceholder;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        
        {/* Profile Header */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Company Logo */}
            <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-blue-500 bg-white flex items-center justify-center">
               <img src={companyDataPlaceholder.logo} alt={`${companyInfo.name} Logo`} className="w-full h-full object-contain" />
            </div>

            <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-blue-400 mb-2">{companyInfo.name}</h1>
                <p className="text-blue-300 mb-4 text-lg"><span className="font-semibold">Localização:</span> {companyInfo.location}</p>
                {/* Add other key info here later */}
            </div>
        </div>

        {/* Sections - About Us, Info, Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

           {/* Sidebar for Info Section */}
           <div className="md:col-span-1 bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                 <h2 className="text-xl font-semibold text-blue-400">Informações da Empresa</h2>
                 {!isInfoEditing ? (
                   <button className="px-3 py-1 border border-blue-500 text-blue-400 rounded text-sm hover:bg-blue-600 hover:text-white transition" onClick={handleInfoEdit}>Editar</button>
                 ) : (
                   <div className="flex gap-2">
                     <button className="text-sm bg-green-500 text-white px-3 py-1 rounded font-semibold hover:bg-green-600 transition" onClick={handleInfoSave}>Salvar</button>
                     <button className="text-sm bg-red-500 text-white px-3 py-1 rounded font-semibold hover:bg-red-600 transition" onClick={handleInfoCancel}>Cancelar</button>
                   </div>
                 )}
              </div>
              {!isInfoEditing ? (
                 <div className="text-gray-300 space-y-2">
                    <p><span className="font-semibold text-blue-300">Website:</span> {companyInfo.website}</p>
                    <p><span className="font-semibold text-blue-300">Setor:</span> {companyInfo.industry}</p>
                    <p><span className="font-semibold text-blue-300">Porte:</span> {companyInfo.companySize}</p>
                 </div>
              ) : (
                 <div className="flex flex-col gap-3">
                    <label className="block">
                       <span className="font-semibold text-blue-300">Nome:</span>
                       <input type="text" name="name" value={companyInfo.name} onChange={handleInfoChange} className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </label>
                     <label className="block">
                       <span className="font-semibold text-blue-300">Localização:</span>\n                       <input type="text" name="location" value={companyInfo.location} onChange={handleInfoChange} className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </label>
                    <label className="block">
                       <span className="font-semibold text-blue-300">Website:</span>
                       <input type="text" name="website" value={companyInfo.website} onChange={handleInfoChange} className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </label>
                    <label className="block">
                       <span className="font-semibold text-blue-300">Setor:</span>
                       <input type="text" name="industry" value={companyInfo.industry} onChange={handleInfoChange} className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </label>
                    <label className="block">
                       <span className="font-semibold text-blue-300">Porte:</span>
                       <input type="text" name="companySize" value={companyInfo.companySize} onChange={handleInfoChange} className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </label>
                 </div>
              )}
           </div>

           {/* Main Content - About Us and Challenges */}
           <div className="md:col-span-2">
              {/* About Us Section */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
                  <div className="flex justify-between items-center mb-4">
                       <h2 className="text-xl font-semibold text-blue-400">Sobre a Empresa</h2>
                       {!isAboutEditing ? (
                         <button className="px-3 py-1 border border-blue-500 text-blue-400 rounded text-sm hover:bg-blue-600 hover:text-white transition" onClick={handleAboutEdit}>Editar</button>
                       ) : (
                         <div className="flex gap-2">
                           <button className="text-sm bg-green-500 text-white px-3 py-1 rounded font-semibold hover:bg-green-600 transition" onClick={handleAboutSave}>Salvar</button>
                           <button className="text-sm bg-red-500 text-white px-3 py-1 rounded font-semibold hover:bg-red-600 transition" onClick={handleAboutCancel}>Cancelar</button>
                         </div>
                       )}
                  </div>
                  {isAboutEditing ? (
                    <textarea
                      className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={aboutText}
                      onChange={(e) => setAboutText(e.target.value)}
                      rows="6"
                    />
                  ) : (
                    <p className="text-gray-300 leading-relaxed">{aboutText}</p>
                  )}
              </div>

              {/* Challenges Posted Section */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                 <h2 className="text-xl font-semibold text-blue-400 mb-4">Desafios Publicados</h2>
                 <ul className="space-y-4">
                    {companyChallenges.length === 0 && (
                       <li className="text-gray-400">Nenhum desafio publicado ainda.</li>
                    )}
                    {companyChallenges.map(challenge => (
                       <li key={challenge.id} className="bg-gray-900 border border-blue-600 rounded p-4">
                          <div className="font-semibold text-white mb-2">{challenge.title}</div>
                          <div className="text-gray-300 text-sm mb-2">{challenge.description}</div>
                          <div className="text-xs text-blue-400">Status: {challenge.status}</div>
                       </li>
                    ))}
                 </ul>
              </div>
           </div>

        </div>

        {/* Botão de voltar para o dashboard da empresa */}
        <div className="mt-8 text-center">
          <Link to="/empresa/dashboard" className="text-blue-400 hover:underline">&larr; Voltar para o Dashboard da Empresa</Link>
        </div>

      </div>
    </div>
  );
}

export default CompanyProfilePage; 