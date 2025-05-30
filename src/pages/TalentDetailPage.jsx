import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Dados de talentos fictícios (Duplicado aqui por enquanto, idealmente viria de um estado global ou API)
const talentedCandidates = [
  {
    id: 4,
    name: 'Danilu Silva', // Seu nome
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'], // Habilidades atualizadas
    photo: '/perfil.jpg', // Placeholder: use o caminho da sua foto se estiver em public
    bio: 'Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Com experiência em desenvolvimento web e interesse em desafios que me permitam crescer e aplicar minhas habilidades.', // Biografia atualizada
     solucoes: [
        { desafioId: 1, tituloDesafio: 'Desafio hello word em html', solucao: 'Minha solução para o desafio Hello Word!', videoPath: '/videos/meuvideo.mp4' }, // Título do desafio alterado
         // Adicionar soluções de Danilu aqui
     ]
   },
  {
    id: 1,
    name: 'Ana Souza',
    skills: ['JavaScript', 'React', 'Node.js'],
    photo: '/ana.jpeg', // Mulher
    bio: 'Ana é uma desenvolvedora full-stack com paixão por criar aplicações web escaláveis.',
    solucoes: [
        { desafioId: 1, tituloDesafio: 'Automatizar relatório financeiro', solucao: 'Minha solução para o desafio Hello Word!' },
        // Mais soluções da Ana
    ]
  },
  {
    id: 2,
    name: 'Bruno Costa',
    skills: ['Python', 'Django', 'SQL'],
    photo: '/bruno.jpeg', // Homem
    bio: 'Bruno é um engenheiro de dados especializado em otimização de banco de dados e APIs robustas.',
     solucoes: [
        { desafioId: 3, tituloDesafio: 'Otimizar performance de banco de dados PostgreSQL', solucao: 'Análise de queries e criação de índices para otimizar performance.' },
        // Mais soluções do Bruno
    ]
  },
  {
    id: 3,
    name: 'Carla Lima',
    skills: ['Java', 'Spring', 'REST APIs'],
    photo: '/carla.jpeg', // Mulher
    bio: 'Carla é uma especialista em backend com vasta experiência em construção de APIs RESTful.',
     solucoes: [
        { desafioId: 2, tituloDesafio: 'Construir UI com React e Tailwind CSS', solucao: 'Implementação de componentes React utilizando Tailwind CSS.' },
        // Mais soluções da Carla
    ]
  },
  // Adicionar mais talentos fictícios conforme necessário
];

function TalentDetailPage() {
  const { id } = useParams(); // Captura o ID da URL
  const talentId = parseInt(id); // Converte o ID para número

  // Encontra o talento com base no ID da URL
  const talent = talentedCandidates.find(t => t.id === talentId);

  if (!talent) {
    return <div className="min-h-screen bg-gray-900 text-gray-300 flex items-center justify-center">Talento não encontrado.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">

        {/* Botão de voltar */}
         <div className="mb-8">
           <Link to="/empresa/banco-talentos" className="text-blue-400 hover:underline">&larr; Voltar para o Banco de Talentos</Link>
         </div>

        {/* Talent Profile Header */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Talent Photo */}
            <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-blue-500 bg-white flex items-center justify-center">
               <img src={talent.photo} alt={`Foto de ${talent.name}`} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-blue-400 mb-2">{talent.name}</h1>
                <p className="text-blue-300 mb-4 text-lg">{talent.skills.join(', ')}</p>
                {/* Add other key info here later if needed */}
            </div>
        </div>

        {/* About Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">Sobre {talent.name}</h2>
            <p className="text-gray-300 leading-relaxed">{talent.bio || 'Nenhuma biografia disponível.'}</p>
        </div>

        {/* Solved Challenges Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
           <h2 className="text-xl font-semibold text-blue-400 mb-4">Desafios Solucionados por {talent.name}</h2>
           <ul className="space-y-4">
              {talent.solucoes && talent.solucoes.length > 0 ? (
                 talent.solucoes.map((solucao, index) => (
                    <li key={index} className="bg-gray-900 border border-blue-600 rounded p-4">
                       <div className="font-semibold text-white mb-2">Desafio: {solucao.tituloDesafio}</div>
                       <div className="text-gray-300 text-sm">Solução: {solucao.solucao}</div>
                       {solucao.videoPath && (
                           <div className="mt-2">
                             <a
                               href={solucao.videoPath}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="text-blue-400 hover:underline text-sm font-semibold"
                             >
                               Ver Vídeo da Solução
                             </a>
                           </div>
                       )}
                    </li>
                 ))
              ) : (
                 <li className="text-gray-400">Nenhum desafio solucionado listado para {talent.name}.</li>
              )}
           </ul>
        </div>

      </div>
    </div>
  );
}

export default TalentDetailPage; 