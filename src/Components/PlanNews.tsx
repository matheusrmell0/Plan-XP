import React from 'react';
import styles from './PlanNews.module.css';
import Button from './Forms/Button';

const PlanNews = () => {
  return (
    <section className={`animeLeft ${styles.home}`}>
      <div className={`${styles.intro}`}>
        <span className={`page-title`}>/Plan news</span>
        <h1 className={`title`}>
          <span className={`page`}>{`03.`}</span>/Case Games
        </h1>
        <Button>clique aqui para ver todo o blog</Button>
      </div>
      <div className={`${styles.content}`}>
        <div>
          <div className={`${styles.img1} ${styles.img}`}></div>
          <div className={`${styles.desc}`}>
            <span>SKA</span>
            <h1>Plan cria o novo site da SKA</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde
              quia nostrum sit ut! Reiciendis atque earum ea in...
            </p>
            <Button>saiba mais</Button>
          </div>
        </div>
        <div>
          <div className={`${styles.img2} ${styles.img}`}></div>
          <div className={`${styles.desc}`}>
            <span>Tintas Killing</span>
            <h1>Plan cria o novo site para a Tintas Killing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde
              quia nostrum sit ut! Reiciendis atque earum ea in...
            </p>
            <Button>saiba mais</Button>
          </div>
        </div>
        <div>
          <div className={`${styles.img3} ${styles.img}`}></div>
          <div className={`${styles.desc}`}>
            <span>CargoBR</span>
            <h1>Estamos desenvolvendo o novo site da CargoBR</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde
              quia nostrum sit ut! ea in...
            </p>
            <Button>saiba mais</Button>
          </div>
        </div>
        <div>
          <div className={`${styles.img4} ${styles.img}`}></div>
          <div className={`${styles.desc}`}>
            <span>Xalingo</span>
            <h1>Clubinho Xalingo com novidades</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde
              quia nostrum sit ut! Reiciendis atque earum ea in...
            </p>
            <Button>saiba mais</Button>
          </div>
        </div>
        <div>
          <div className={`${styles.img5} ${styles.img}`}></div>
          <div className={`${styles.desc}`}>
            <span>Aromatic</span>
            <h1>Novo site da Aromatic no ar</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde
              quia nostrum sit ut! Reiciendis atque earum ea in...
            </p>
            <Button>saiba mais</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanNews;
