import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Importar outros componentes como Navbar, Footer, etc., se necessário
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

function TalentProfile({ solucoes }) { // Adicionando solucoes como prop
  // Dados de perfil placeholder
  const profileData = {
    name: 'Danilu Silva', // Placeholder name based on example
    title: 'Candidate', // Placeholder title
    profilePicture: '/perfil.jpg', // Definindo o caminho da imagem de perfil
    coverImage: '/path/to/placeholder/cover-image.png', // Placeholder image path
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', // Placeholder about section
    // Adicionar outros campos de perfil conforme necessário (educação, experiência, portfólios, etc.)
    skills: ['React', 'Node.js', 'JavaScript', 'CSS'], // Adicionando habilidades
    email: 'talento@exemplo.com', // Adicionando email
  };

  // Estado para a seção About Me editável
  const [isAboutEditing, setIsAboutEditing] = useState(false);
  const [aboutText, setAboutText] = useState(profileData.about);

  // Estado para a seção de Informações de Contato e Habilidades editável
  const [isInfoEditing, setIsInfoEditing] = useState(false);
  const [emailText, setEmailText] = useState(profileData.email);
  const [skillsText, setSkillsText] = useState(profileData.skills.join(', '));

  // Dados e estado para o indicador de perfil completo
  const initialProfileCompletion = [
    { label: 'Profile Picture', percentage: 5, isCompleted: true }, // Exemplo: marcado como completo inicialmente
    { label: 'Cover Image', percentage: 5, isCompleted: false },
    { label: 'About Section', percentage: 5, isCompleted: true },
    { label: 'Education', percentage: 20, isCompleted: false },
    { label: 'Work Experience', percentage: 20, isCompleted: true },
    { label: 'Portfolios', percentage: 20, isCompleted: false },
    { label: 'Social Links', percentage: 5, isCompleted: true },
    { label: 'GitHub', percentage: 10, isCompleted: true },
    { label: 'LinkedIn', percentage: 10, isCompleted: false },
  ];

  const [profileCompletion, setProfileCompletion] = useState(initialProfileCompletion);
  const [totalCompletion, setTotalCompletion] = useState(0);

  // Efeito para carregar dados do localStorage ao montar
  useEffect(() => {
    const savedEmail = localStorage.getItem('talentEmail');
    const savedSkills = localStorage.getItem('talentSkills');
    const savedAbout = localStorage.getItem('talentAbout');

    if (savedEmail) setEmailText(savedEmail);
    if (savedSkills) setSkillsText(savedSkills);
    if (savedAbout) setAboutText(savedAbout);

    // O cálculo inicial da porcentagem agora está no useEffect abaixo
  }, []); // Array de dependências vazio para executar apenas uma vez ao montar

  // Efeito para calcular a porcentagem total sempre que profileCompletion mudar
  useEffect(() => {
    const calculatedCompletion = profileCompletion.reduce((sum, item) => {
      return item.isCompleted ? sum + item.percentage : sum;
    }, 0);
    setTotalCompletion(calculatedCompletion);
  }, [profileCompletion]); // Depende de profileCompletion

  // Função para lidar com a mudança do checkbox
  const handleCheckboxChange = (index) => {
    const newProfileCompletion = [...profileCompletion]; // Copia o estado atual
    newProfileCompletion[index].isCompleted = !newProfileCompletion[index].isCompleted;
    setProfileCompletion(newProfileCompletion); // Atualiza o estado
    // No sistema real, você salvaria o estado de conclusão do perfil no backend ou localStorage
    console.log('Profile Completion updated:', newProfileCompletion);
  };

  // Funções para editar e salvar a seção About Me
  const handleAboutEdit = () => {
    setIsAboutEditing(true);
  };

  const handleAboutSave = () => {
    // Salva o aboutText no localStorage
    localStorage.setItem('talentAbout', aboutText);
    console.log('About Me saved:', aboutText);
    setIsAboutEditing(false);
  };

  const handleAboutCancel = () => {
    // Reverte para o texto salvo no localStorage ou o padrão se não houver nada
    const savedAbout = localStorage.getItem('talentAbout');
    setAboutText(savedAbout || profileData.about);
    setIsAboutEditing(false);
  };

  // Funções para editar e salvar a seção de Informações de Contato e Habilidades
  const handleInfoEdit = () => {
    setIsInfoEditing(true);
  };

  const handleInfoSave = () => {
    // Salva emailText e skillsText no localStorage
    localStorage.setItem('talentEmail', emailText);
    localStorage.setItem('talentSkills', skillsText);
    console.log('Info saved:', { email: emailText, skills: skillsText.split(',').map(skill => skill.trim()) });
    setIsInfoEditing(false);
  };

  const handleInfoCancel = () => {
    // Reverte para os dados salvos no localStorage ou os padrão se não houver nada
    const savedEmail = localStorage.getItem('talentEmail');
    const savedSkills = localStorage.getItem('talentSkills');
    setEmailText(savedEmail || profileData.email);
    setSkillsText(savedSkills || profileData.skills.join(', '));
    setIsInfoEditing(false);
  };

  // Filtrar as soluções enviadas por este 'candidato' (usando o placeholder 'Talento')
  const minhasSolucoes = solucoes.filter(s => s.candidato === "Talento"); // Usando a prop solucoes

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      {/*navbar aqui, se usar */}
      {/* <Navbar /> */}

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-400 mb-6">Meu Perfil</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Sidebar Placeholder (based on example image - adjust or remove as needed) */}
          <div className="md:col-span-1 bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">Menu</h2>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-blue-400 transition flex items-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l7 7m-10 0v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-7 1h14"></path></svg> Dashboard</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition flex items-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg> My Applications</Link></li>
              <li><Link to="/encontrar-desafios" className="hover:text-blue-400 transition flex items-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> Encontrar Desafios</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition flex items-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m8-10v12m0 0H9"></path></svg> Browse Companies</Link></li>
              <li><Link to="/perfil-talento" className="text-blue-400 font-semibold flex items-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Meu Perfil</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition flex items-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Settings</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition flex items-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-.5 2.343-1.25 3.028-.51.42-.467 1.09-.2 1.777h2.83c-.766-2.564-3.81-3.038-4.01-4.243-.339-2.013 2.34-3.413 4.35-4.653 1.524-1.135 2.15-2.352 1.546-3.646-.842-1.739-3.231-2.06-4.53-1.096C8.772 4.901 8 6.6 8 8.396V9zm0 0v1.5M15 19h-1M12 19h-1"></path></svg> Help Center</Link></li>
            </ul>
          </div>

          {/* Main Profile Content */}
          <div className="md:col-span-2 bg-gray-800 rounded-lg p-8 shadow-lg">

            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start border-b border-gray-700 pb-6 mb-6">
              <img
                src={profileData.profilePicture}
                alt="Profile Picture"
                className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6 border-2 border-blue-500"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-semibold text-white">{profileData.name}</h2>
                <p className="text-blue-400 mb-4">{profileData.title}</p>
                {/* Informações de perfil movidas do dashboard */}
                <div className="text-gray-300 mt-4">
                     {!isInfoEditing ? (
                       <>
                          <p className="mb-2"><span className="font-semibold text-blue-300">Email:</span> {emailText}</p>
                          <p className="mb-2"><span className="font-semibold text-blue-300">Habilidades:</span> {skillsText}</p>
                       </>
                     ) : (
                       <div className="flex flex-col gap-2">
                          <label className="block">
                             <span className="font-semibold text-blue-300">Email:</span>
                             <input
                               type="email"
                               className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                               value={emailText}
                               onChange={(e) => setEmailText(e.target.value)}
                             />
                          </label>
                          <label className="block">
                             <span className="font-semibold text-blue-300">Habilidades (separadas por vírgula):</span>
                             <input
                               type="text"
                               className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                               value={skillsText}
                               onChange={(e) => setSkillsText(e.target.value)}
                             />
                          </label>
                       </div>
                     )}
                </div>
                {/* Botões de edição para as informações de contato e habilidades */}
                <div className="mt-4">
                     {!isInfoEditing ? (
                       <button className="px-4 py-2 border border-blue-500 text-blue-400 rounded hover:bg-blue-600 hover:text-white transition" onClick={handleInfoEdit}>Editar Informações</button>
                     ) : (
                       <div className="flex gap-2">
                         <button className="text-sm bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-green-600 transition" onClick={handleInfoSave}>Salvar</button>
                         <button className="text-sm bg-red-500 text-white px-4 py-2 rounded font-semibold hover:bg-red-600 transition" onClick={handleInfoCancel}>Cancelar</button>
                       </div>
                     )}
                </div>
              </div>
              {/* Edit Icon Placeholder */}
              <div className="md:ml-auto mt-4 md:mt-0">
                 {/* Ícone de edição pode ser um botão para a página de edição completa do perfil, se houver */}
                 
              </div>
            </div>

            {/* Profile Completion Section */}
            <div className="bg-gray-900 rounded-lg p-6 shadow mb-6 md:col-span-1">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Complete seu Perfil <span className="text-white">{totalCompletion}%</span></h3>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                    {/* Dynamic width based on completion percentage */}
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${totalCompletion}%` }}></div>
                </div>
                <p className="text-sm text-gray-400 mb-4">{profileCompletion.filter(item => item.isCompleted).length}/{profileCompletion.length} Concluído</p>
                <ul className="space-y-2">
                    {profileCompletion.map((item, index) => (
                        <li key={index} className="flex items-center justify-between">
                            <label className="flex items-center text-gray-300 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="form-checkbox h-4 w-4 text-blue-500 bg-gray-900 border-gray-700 rounded mr-2"
                                  checked={item.isCompleted}
                                  onChange={() => handleCheckboxChange(index)}
                                />
                                {item.label}
                            </label>
                            <span className="text-gray-400 text-sm">{item.percentage}%</span>
                        </li>
                    ))}
                </ul>
                <button className="mt-6 w-full bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-green-600 transition">Completar Agora</button>
            </div>

            {/* About Me Section */}
            <div className="bg-gray-900 rounded-lg p-6 shadow mb-6">
                <div className="flex justify-between items-center mb-4">
                     <h3 className="text-xl font-semibold text-blue-400">Sobre Mim</h3>
                     {/* Botão/Ícone de edição para a seção About Me */}
                     {!isAboutEditing ? (
                       <svg className="w-6 h-6 text-gray-400 cursor-pointer hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={handleAboutEdit}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                     ) : (
                       <div className="flex gap-2">
                         <button className="text-sm text-green-400 hover:underline" onClick={handleAboutSave}>Salvar</button>
                         <button className="text-sm text-red-400 hover:underline" onClick={handleAboutCancel}>Cancelar</button>
                       </div>
                     )}
                </div>
                {isAboutEditing ? (
                  <textarea
                    className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={aboutText}
                    onChange={(e) => setAboutText(e.target.value)}
                    rows="4"
                  />
                ) : (
                  <p className="text-gray-300">{aboutText}</p>
                )}
            </div>

             {/* Seção de Meus Projetos (Soluções Enviadas) - Movida do Dashboard */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Meus Projetos (Soluções Enviadas)</h2>
              <ul className="space-y-4">
                {minhasSolucoes.length === 0 && (
                  <li className="text-gray-400">Você ainda não enviou nenhuma solução.</li>
                )}
                {minhasSolucoes.map((sol, index) => (
                  <li key={index} className="bg-gray-900 border border-blue-600 rounded p-4">
                    <div className="font-semibold text-white mb-2">Solução para o Desafio ID: {sol.desafioId}</div>
                    <pre className="whitespace-pre-wrap break-words text-gray-300 text-sm">{sol.solucao}</pre>
                  </li>
                ))}
              </ul>
            </div>

             {/* Add other sections like Education, Work Experience, Portfolios, etc. here */}

          </div>

        </div>
      </div>
      {/*footer aqui, se usar */}
      {/* <Footer /> */}
    </div>
  );
}

export default TalentProfile; 