import React from 'react';
import { Link } from 'react-router-dom';
// Importar outros componentes como Navbar, Footer, etc., se necessário
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

const desafiosDisponiveis = [
  {
    id: 1,
    titulo: "Desenvolver uma API RESTful em Node.js",
    empresa: "Tech Solutions Inc.",
    descricao: "Criar endpoints para gerenciamento de usuários e produtos.",
  },
  {
    id: 2,
    titulo: "Construir UI com React e Tailwind CSS",
    empresa: "Creative Designs",
    descricao: "Desenvolver componentes reutilizáveis e responsivos.",
  },
  {
    id: 3,
    titulo: "Otimizar performance de banco de dados PostgreSQL",
    empresa: "Data Masters",
    descricao: "Analisar e otimizar queries complexas.",
  },
  {
    id: 4,
    titulo: "Implementar testes unitários em Python",
    empresa: "Quality Assurance Co.",
    descricao: "Escrever testes para uma aplicação Django existente.",
  },
  {
    id: 5,
    titulo: "Criar um chatbot com IA para atendimento ao cliente",
    empresa: "AI Innovators",
    descricao: "Desenvolver e integrar um chatbot básico.",
  },
];

function FindJobs({ desafios }) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-400 mb-6">Encontrar Desafios</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {desafios.map(desafio => (
            <div key={desafio.id} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="text-xl font-semibold text-blue-400 mb-2">{desafio.titulo}</h2>
              <p className="text-gray-300 mb-4">{desafio.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FindJobs; 