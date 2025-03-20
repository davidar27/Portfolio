import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { Header } from './components/layouts/Header/Header';
import { TechnicalSkills } from './components/pages/TechnicalSkills/TechnicalSkills';
import { SocialSkills } from './components/pages/SocialSkills/SocialSkills';
import { ProfessionalExperience } from './components/pages/ProfessionalExperience/ProfessionalExperience';
import { Estudies } from './components/pages/Estudies/Estudies';
import { Footer} from './components/layouts/Footer/Footer'
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habtec" element={<TechnicalSkills />} />
        <Route path="/habsoc" element={<SocialSkills />} />
        <Route path="/expro" element={<ProfessionalExperience />}/>
        <Route path="/est" element={<Estudies />}/>
        <Route path="*" element={<NotFoundPage />}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;