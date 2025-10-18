import React, { useState } from 'react';
import { FileText, Upload, Check, AlertCircle } from 'lucide-react';

export const ReportForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
    category: '',
    anonymous: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        title: '',
        description: '',
        category: '',
        anonymous: false
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Denúncia Enviada!</h2>
          <p className="text-gray-600 mb-6">
            Obrigado por contribuir com a segurança da comunidade. 
            Sua denúncia será analisada e poderá ajudar outras pessoas.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Lembre-se:</strong> Para denúncias oficiais, registre também 
              um boletim de ocorrência na delegacia mais próxima.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Reportar um Golpe</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sua denúncia pode ajudar outras pessoas a não caírem no mesmo golpe. 
            Compartilhe sua experiência de forma segura e anônima.
          </p>
        </div>

        {/* Alert */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Importante</h3>
              <p className="text-blue-800 text-sm mb-3">
                Este formulário é apenas para compartilhar informações e alertar outros usuários. 
                Para denúncias oficiais, você deve:
              </p>
              <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                <li>Registrar boletim de ocorrência na delegacia</li>
                <li>Entrar em contato com seu banco (se houver prejuízo financeiro)</li>
                <li>Utilizar canais oficiais como Procon ou Banco Central</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Anonymous Option */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="anonymous"
                name="anonymous"
                checked={formData.anonymous}
                onChange={handleChange}
                className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
              />
              <label htmlFor="anonymous" className="text-sm font-medium text-gray-700">
                Enviar denúncia anônima (seus dados pessoais não serão solicitados)
              </label>
            </div>

            {/* Personal Information */}
            {!formData.anonymous && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail (opcional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
            )}

            {/* Golpe Information */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Categoria do Golpe
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="">Selecione uma categoria</option>
                <option value="pix">PIX / Transferências</option>
                <option value="whatsapp">WhatsApp / Redes Sociais</option>
                <option value="cartao">Cartão de Crédito/Débito</option>
                <option value="romance">Romance Virtual</option>
                <option value="sequestro">Falso Sequestro</option>
                <option value="phishing">Phishing / Sites Falsos</option>
                <option value="telefone">Golpes por Telefone</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Título do Golpe
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Ex: Golpe do falso funcionário do banco"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Descrição Detalhada
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Descreva como o golpe funciona, como você foi abordado, quais eram as promessas, etc. Quanto mais detalhes, melhor poderemos ajudar outras pessoas."
              />
              <p className="text-xs text-gray-500 mt-1">
                Não inclua dados pessoais como CPF, senhas ou números de conta.
              </p>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Anexar Evidências (opcional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-400 transition-colors">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  Clique para selecionar arquivos ou arraste até aqui
                </p>
                <p className="text-xs text-gray-500">
                  Formatos aceitos: JPG, PNG, PDF (máximo 5MB)
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center justify-center space-x-2"
              >
                <FileText className="h-5 w-5" />
                <span>Enviar Denúncia</span>
              </button>
              
              <button
                type="button"
                onClick={() => setFormData({
                  name: '',
                  email: '',
                  title: '',
                  description: '',
                  category: '',
                  anonymous: false
                })}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Limpar Formulário
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};