import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Dados de talentos fictícios
const talentedCandidates = [
  {
    id: 1,
    name: 'Ana Souza',
    skills: ['JavaScript', 'React', 'Node.js'],
    photo: '/ana.jpeg', // Mulher
  },
  {
    id: 2,
    name: 'Bruno Costa',
    skills: ['Python', 'Django', 'SQL'],
    photo: '/bruno.jpeg', // Homem
  },
  {
    id: 3,
    name: 'Carla Lima',
    skills: ['Java', 'Spring', 'REST APIs'],
    photo: '/carla.jpeg', // Mulher
  },
  // Adicionar mais talentos fictícios conforme necessário
];

function TalentPool() {
  const [preSelected, setPreSelected] = useState([]);

  const handlePreSelect = (talentId) => {
    if (preSelected.includes(talentId)) {
      setPreSelected(preSelected.filter(id => id !== talentId));
    } else {
      setPreSelected([...preSelected, talentId]);
    }
    console.log(`Talento ${talentId} pré-selecionado/deselecionado.`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-400 mb-6">Banco de Talentos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {talentedCandidates.map(talent => (
            <div key={talent.id} className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center">
              <img src={talent.photo} alt={`Foto de ${talent.name}`} className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-500" />
              <h2 className="text-xl font-semibold text-white mb-2">{talent.name}</h2>
              <p className="text-blue-400 text-sm mb-4">{talent.skills.join(', ')}</p>
              <button
                className={`px-4 py-2 rounded font-semibold ${
                  preSelected.includes(talent.id) ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                } text-white transition`}
                onClick={() => handlePreSelect(talent.id)}
              >
                {preSelected.includes(talent.id) ? 'Pré-selecionado' : 'Pré-selecionar'}
              </button>
            </div>
          ))}
        </div>

        {/* Botão de voltar para o dashboard da empresa */}
        <div className="mt-8 text-center">
          <Link to="/empresa/dashboard" className="text-blue-400 hover:underline">&larr; Voltar para o Dashboard da Empresa</Link>
        </div>
      </div>
    </div>
  );
}

export default TalentPool; 