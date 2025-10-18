import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, AlertTriangle, Shield, CheckCircle, ExternalLink } from 'lucide-react';
import { golpesData } from '../data/golpes';

export const GolpeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const golpe = golpesData.find(g => g.id === id);

  if (!golpe) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Golpe não encontrado</h1>
          <p className="text-gray-600 mb-6">O golpe que você está procurando não existe ou foi removido.</p>
          <Link
            to="/pesquisar"
            className="inline-flex items-center space-x-2 bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar à Pesquisa</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: golpe.title,
          text: `Alerta sobre: ${golpe.title}. Saiba como se proteger deste golpe.`,
          url: url,
        });
      } catch (error) {
        console.log('Erro ao compartilhar:', error);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/pesquisar"
              className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar à Pesquisa</span>
            </Link>
            
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
            >
              <Share2 className="h-4 w-4" />
              <span>Compartilhar</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Alert Banner */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-800 mb-1">Alerta de Golpe</h3>
              <p className="text-red-700 text-sm">
                Esta é uma modalidade de fraude conhecida. Leia atentamente e compartilhe com outras pessoas.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image */}
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={golpe.img}
              alt={golpe.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>

          <div className="p-8">
            {/* Title and ID */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-bold text-gray-900">
                  {golpe.title}
                </h1>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  ID: {golpe.id}
                </span>
              </div>
            </div>

            {/* Como Funciona */}
            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                <h2 className="text-2xl font-semibold text-gray-900">Como Funciona</h2>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-gray-800 leading-relaxed">
                  {golpe.description}
                </p>
              </div>
            </section>

            {/* Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {golpe.steps.map((step, index) => (
                <section key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    {step.title.includes('Prevenir') ? (
                      <Shield className="h-6 w-6 text-blue-500" />
                    ) : (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    )}
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {step.description.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div 
                          className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                            step.title.includes('Prevenir') ? 'bg-blue-500' : 'bg-green-500'
                          }`} 
                        />
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                Ajude outras pessoas a se protegerem
              </h3>
              <p className="text-yellow-700 mb-4 text-sm">
                Compartilhe este alerta com seus amigos e familiares. 
                Conhecimento é a melhor defesa contra golpes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center space-x-2 bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Compartilhar Golpe</span>
                </button>
                
                <Link
                  to="/reportar"
                  className="flex items-center justify-center space-x-2 border border-yellow-500 text-yellow-700 px-4 py-2 rounded-lg font-medium hover:bg-yellow-50 transition-colors"
                >
                  <AlertTriangle className="h-4 w-4" />
                  <span>Reportar Golpe Similar</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Official Links */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">
            Canais Oficiais para Denúncia
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://www.gov.br/pt-br/servicos/registrar-reclamacao-no-procon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-700 hover:text-blue-800 transition-colors text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Procon</span>
            </a>
            
            <a
              href="https://www.bcb.gov.br/estabilidadefinanceira/registrato"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-700 hover:text-blue-800 transition-colors text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Banco Central</span>
            </a>
            
            <a
              href="tel:190"
              className="flex items-center space-x-2 text-blue-700 hover:text-blue-800 transition-colors text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Polícia Civil</span>
            </a>
            
            <a
              href="tel:181"
              className="flex items-center space-x-2 text-blue-700 hover:text-blue-800 transition-colors text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Disque Denúncia</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};