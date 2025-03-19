import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { Header } from './components/layouts/Header/Header';
import { TechnicalSkills } from './components/pages/TechnicalSkills/TechnicalSkills';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habtec" element={<TechnicalSkills />} />
        {/* Agrega más rutas aquí */}
      </Routes>
    </div>
  );
}

export default App;