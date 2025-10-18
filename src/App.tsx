import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { ReportForm } from './components/ReportForm';
import { SearchGolpes } from './components/SearchGolpes';
import { GolpeDetail } from './components/GolpeDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reportar" element={<ReportForm />} />
          <Route path="/pesquisar" element={<SearchGolpes />} />
          <Route path="/golpe/:id" element={<GolpeDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;