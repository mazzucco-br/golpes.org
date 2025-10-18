import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, AlertTriangle, Eye, Filter, X } from 'lucide-react';
import { golpesData } from '../data/golpes';

export const SearchGolpes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    'PIX', 'WhatsApp', 'Cartão', 'Romance', 'Sequestro', 
    'Phishing', 'Telefone', 'Outros'
  ];

  const filteredGolpes = useMemo(() => {
    return golpesData.filter(golpe => {
      const matchesSearch = searchTerm === '' || 
        golpe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        golpe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        golpe.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === '' || 
        golpe.title.toLowerCase().includes(selectedCategory.toLowerCase());
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pesquisar Golpes</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encontre informações sobre golpes conhecidos e aprenda como se proteger
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar por título, descrição ou ID do golpe..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filtros</span>
            </button>
          </div>

          {/* Filters */}
          <div className={`mt-4 lg:mt-4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="">Todas as categorias</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {(searchTerm || selectedCategory) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center space-x-1 px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                >
                  <X className="h-4 w-4" />
                  <span>Limpar filtros</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredGolpes.length} golpe{filteredGolpes.length !== 1 ? 's' : ''} encontrado{filteredGolpes.length !== 1 ? 's' : ''}
          </h2>
        </div>

        {/* Results Grid */}
        {filteredGolpes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGolpes.map((golpe) => (
              <div key={golpe.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={golpe.img}
                    alt={golpe.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {golpe.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {golpe.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      ID: {golpe.id}
                    </span>
                    
                    <Link
                      to={`/golpe/${golpe.id}`}
                      className="flex items-center space-x-2 bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors text-sm"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Ver Detalhes</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <AlertTriangle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum golpe encontrado
            </h3>
            <p className="text-gray-600 mb-4">
              Tente usar termos diferentes ou remover alguns filtros
            </p>
            <button
              onClick={clearFilters}
              className="text-yellow-600 hover:text-yellow-700 font-medium"
            >
              Limpar todos os filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};