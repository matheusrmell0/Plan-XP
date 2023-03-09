import React from 'react';
import styles from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

const Header = () => {
  const [page, setPage] = React.useState<Number[]>([]);

  React.useEffect(() => {
    Array.from(document.querySelectorAll('header nav ul li')).forEach(
      (item, index) => {
        setPage([...page, page.push(index + 1)]);
      },
    );
  }, []);

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.headerLogo}`}>
        <Link to="/">
          <img src={logo} width="152px" height="74px" alt="" />
        </Link>
      </div>

      <nav aria-label="primaria">
        <ul>
          <li>
            <span className={`${styles.pageNum}`}>{`0${page[0]}.`}</span>
            <NavLink to="" end>
              /QUEM SOMOS
            </NavLink>
          </li>
          <li>
            <span className={`${styles.pageNum}`}>{`0${page[1]}.`}</span>
            <NavLink to="/" end>
              /O QUE FAZEMOS
            </NavLink>
          </li>
          <li>
            <span className={`${styles.pageNum}`}>{`0${page[2]}.`}</span>
            <NavLink to="plannews" end>
              /PLAN NEWS
            </NavLink>
          </li>
          <li>
            <span className={`${styles.pageNum}`}>{`0${page[3]}.`}</span>
            <NavLink to="" end>
              /NOSSOS CLIENTES
            </NavLink>
          </li>
          <li>
            <span className={`${styles.pageNum}`}>{`0${page[4]}.`}</span>
            <NavLink to="contato" end>
              /CONTATO
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={`${styles.headerFooter}`}>
        <Link to="">
          Que tal inovar
          <br /> com a gente?
        </Link>
      </div>
    </header>
  );
};

export default Header;
