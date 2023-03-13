import { useNavigate } from 'react-router-dom';
import React from 'react';

const Pagina404 = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    let wait = false;
    function navFeed() {
      navigate('/');
    }
    if (!wait) {
      setTimeout(navFeed, 2000);
      wait = true;
    }
    setTimeout(() => {
      wait = false;
    }, 500);
  }, [navigate]);

  return (
    <section>
      <h1 className="title">Erro: 404</h1>
      <p className="sub-title">Página não encontrada</p>
    </section>
  );
};

export default Pagina404;
