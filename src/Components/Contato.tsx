import styles from './Contato.module.css';
import Button from './Forms/Button';
import Formulario from './Formulario';
import Redes from './Helper/Redes';
import logo from '../Assets/logo.png';
import fullup from '../Assets/fullup.png';
import grupoPlan from '../Assets/grupoPlan.png';
import Local from '../Assets/components-svg/LocalSvg';

const Contato = () => {
  return (
    <section className={`animeLeft ${styles.home}`}>
      <div className={`${styles.intro}`}>
        <div className={`${styles.formContainer}`}>
          <h1 className={`title`}>
            <span className={`page`}>{`05.`}</span>/Contato
          </h1>
          <p className="page-desc">
            Gostou de saber mais sobre as inovações tecnológicas e também quer
            oferecer novas experiências aos seus clientes? Então entre em
            contato e marque um encontro real conosco para conversamos sobre as
            infinitas possibilidades do mundo virtual.
          </p>
          <Formulario />
        </div>
      </div>

      <div className={`${styles.content}`}>
        <div className={`${styles.redes}`}>
          <h1>Siga-nos</h1>
          <p className="page-desc">
            Fique sempre por dentro de todas as novidades da Plan XP e de todas
            as empresas do Grupo Plan Marketing.
          </p>
          <Redes />
        </div>
        
        <div className={`${styles.redes} ${styles.enderecoRS}`}>
          <h1>/RS</h1>
          <ul className="page-desc">
            <li>Rua Onze de Julho, 243</li>
            <li>Novo Hamburgo / RS</li>
            <li>Brasil</li>
            <li>51 98229.0400</li>
          </ul>
          <Button>ver no google maps</Button>
        </div>

        <div className={`${styles.redes} ${styles.enderecoSP}`}>
          <h1>/SP</h1>
          <ul className="page-desc">
            <li>Rua Ibijaú, 355/Sala 1309</li>
            <li>São Paulo / SP</li>
            <li>Brasil</li>
            <li>+55 11 98871.8556</li>
          </ul>
          <Button>ver no google maps</Button>
        </div>

        <div className={`${styles.redes}`}>
          <div>
            <img src={grupoPlan} width="110px" height="64px" alt="GrupoPlan" />
          </div>
          <p className="page-desc">
            A Plan faz parte do Grupo Plan Marketing, um grupo de comunicação
            completo.
          </p>
          <Button>Conheça</Button>
        </div>

        <div className={`${styles.redes}`}>
          <div>
            <img src={logo} width="95px" height="46px" alt="Logo" />
          </div>
          <p className="page-desc">
            A Plan XP é especializada em realidade virtual, realidade aumentada
            e jogos.
          </p>
          <Button>Conheça</Button>
        </div>

        <div className={`${styles.redes}`}>
          <div>
            <img src={fullup} width="77px" height="33px" alt="FullUp" />
          </div>
          <p className="page-desc">
            A FullUp é uma agência especializada em branding, design e
            campanhas.
          </p>
          <Button>Conheça</Button>
        </div>
      </div>
    </section>
  );
};

export default Contato;
