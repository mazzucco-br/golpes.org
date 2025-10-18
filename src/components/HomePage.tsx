import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Search, FileText, Shield, Users, TrendingUp } from 'lucide-react';

export const HomePage: React.FC = () => {
  const stats = [
    { label: 'Golpes Catalogados', value: '50+', icon: AlertTriangle },
    { label: 'Pessoas Alertadas', value: '10K+', icon: Users },
    { label: 'Denúncias Recebidas', value: '500+', icon: FileText },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Proteja-se contra <span className="text-gray-800">golpes</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-800 max-w-3xl mx-auto">
              O maior portal brasileiro de prevenção e denúncia de fraudes. 
              Conheça os golpes mais comuns e aprenda como se proteger.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Link 
                to="/reportar" 
                className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
              >
                <FileText className="h-6 w-6" />
                <span>Reportar um Golpe</span>
              </Link>
              
              <Link 
                to="/pesquisar" 
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg border-2 border-gray-900 flex items-center justify-center space-x-3"
              >
                <Search className="h-6 w-6" />
                <span>Pesquisar Golpes</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <stat.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="py-16 bg-red-50 border-t-4 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-100 border border-red-200 rounded-lg p-8">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  Alerta: Golpes em Alta
                </h3>
                <p className="text-red-700 text-lg mb-6">
                  Nos últimos meses, observamos um aumento significativo em golpes relacionados ao PIX, 
                  WhatsApp clonado e falsas promoções online. Mantenha-se sempre alerta!
                </p>
                <Link 
                  to="/pesquisar" 
                  className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  <TrendingUp className="h-5 w-5" />
                  <span>Ver Golpes em Alta</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Como Funciona</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossa plataforma conecta vítimas, especialistas e autoridades para 
              combater fraudes de forma colaborativa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pesquise Golpes</h3>
              <p className="text-gray-600">
                Consulte nossa base de dados com centenas de golpes catalogados e 
                aprenda como identificá-los.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reporte Fraudes</h3>
              <p className="text-gray-600">
                Compartilhe sua experiência para ajudar outras pessoas a se 
                protegerem contra o mesmo golpe.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fique Protegido</h3>
              <p className="text-gray-600">
                Receba dicas de prevenção e mantenha-se atualizado sobre 
                novas modalidades de fraude.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};