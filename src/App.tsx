// Rotas para as paginas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// CSS
import './App.css';
// Components
import Header from './Components/Header';
import Home from './Components/OqueFazemos';
import PlanNews from './Components/PlanNews';
import Contato from './Components/Contato';
// Pagina 404
import Pagina404 from './Components/Helper/Pagina404';

const App = () => {
  return (
    <>
      <div className={`structure`}>
        <BrowserRouter>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="plannews" element={<PlanNews />} />
              <Route path="contato" element={<Contato />} />
              <Route path="*" element={<Pagina404 />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
