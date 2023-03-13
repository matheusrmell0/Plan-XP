import ControleSvg from '../Assets/components-svg/ControleSvg';
import styles from './OqueFazemos.module.css';
import { useNavigate } from 'react-router-dom';
import Button from './Forms/Button';
import Head from './Helper/Head';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Head
        title="O que fazemos"
        desc="Conheça em resumo um pouco da nossa empresa"
      />
      <section className={`animeLeft ${styles.home}`}>
        <div className={`${styles.intro}`}>
          <span className={`page-title`}>/O que fazemos</span>
          <h1 className={`title`}>
            <span className={`page`}>{`02.`}</span>/Games
          </h1>
          <h2 className={`sub-title`}>Desenvolvimento de games digitais</h2>
          <span className={`desc-title`}>
            Empresa especialista em desenvolvimento games digitais e gamificação
          </span>
          <p className={`page-desc`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            doloremque culpa inventore corrupti incidunt ipsa! Commodi sed,
            veritatis cupiditate at libero nisi architecto nobis neque fuga
            voluptate facilis blanditiis eligendi dolorem provident! Vel unde
            expedita possimus quo voluptates ea quis voluptatum illum molestiae?
          </p>
        </div>
        <div className={`${styles.content}`}>
          <div>
            <div className={styles.tabletBg}></div>
            <p className={`${styles.descImg}`}>
              A <strong>PlanXP</strong> tem uma equipe qualificada para o{' '}
              <strong>desenvolvimento de jogos digitais</strong>{' '}
              <strong>para dispositivos móveis</strong> (smartphones, tablets e
              afins).
            </p>
          </div>
          <div>
            <div className={styles.desktopBg}></div>
            <p className={`${styles.descImg}`}>
              Desenvolvemos games para anunciar seus produtos e serviços,
              através da <strong>gamificação</strong> (aplicações que utilizam
              dinâmicas de jogos para engajamento de usuários, resolução de
              problemas e melhoria no aprendizado).
            </p>
          </div>
          <div>
            <div className={styles.mobileBg}></div>
            <p className={`${styles.descImg}`}>
              Utilizando as últimas tecnologias para a{' '}
              <strong>criação de games</strong>, trabalhamos de acordo com as
              necessidades dos clientes, sempre buscando oferecer o resultado
              que ele busca.
            </p>
          </div>
          <div className={`${styles.controleBg}`}>
            <picture>
              <ControleSvg />
            </picture>
            <p>
              Experimente inovar com a <strong>PlanXP</strong> para{' '}
              <strong>desenvolver os seus jogos digitais!</strong>
            </p>
            <div className={`${styles.contato}`}>
              <Button onClick={() => navigate('contato')}>
                Entre em contato agora mesmo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
