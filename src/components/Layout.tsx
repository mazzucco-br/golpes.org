import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Phone, FileText, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 text-gray-900 hover:text-yellow-600 transition-colors">
              <Shield className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold">golpes.org</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                Início
              </Link>
              <Link 
                to="/reportar" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/reportar' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                Reportar Golpe
              </Link>
              <Link 
                to="/pesquisar" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/pesquisar' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                Pesquisar Golpes
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-yellow-400" />
                <span className="text-lg font-bold">golpes.org</span>
              </div>
              <p className="text-gray-300 text-sm">
                Portal dedicado à prevenção e denúncia de golpes. 
                Proteja-se e ajude outros a se protegerem de fraudes.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Denúncias Oficiais</h3>
              <div className="space-y-2">
                <a 
                  href="https://www.gov.br/pt-br/servicos/registrar-reclamacao-no-procon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  <FileText className="h-4 w-4" />
                  <span>Procon</span>
                </a>
                <a 
                  href="https://www.bcb.gov.br/estabilidadefinanceira/registrato" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  <FileText className="h-4 w-4" />
                  <span>Banco Central - Registrato</span>
                </a>
                <a 
                  href="tel:190" 
                  className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span>Polícia Civil - 190</span>
                </a>
                <a 
                  href="tel:181" 
                  className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span>Disque Denúncia - 181</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contato</h3>
              <div className="space-y-2">
                <a 
                  href="mailto:contato@golpes.org" 
                  className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>contato@golpes.org</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 golpes.org. Todos os direitos reservados. 
              Este é um projeto de conscientização sobre segurança digital.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};