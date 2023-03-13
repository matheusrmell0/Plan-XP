import React, { Dispatch } from 'react';
import styles from './Header.module.css';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { changeMatch } from '../GlobalState/Reducers/ui';
import { AppDispatch } from '../GlobalState/configureStore';
import { AnyAction } from '@reduxjs/toolkit';

const Header = () => {
  const { pathname } = useLocation();
  const [page, setPage] = React.useState<Number[]>([]);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const dispatch: AppDispatch = useDispatch();
  const { mobile } = useSelector((state: Mobile) => state.ui);

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  React.useEffect(() => {
    function menuMobile() {
      dispatch<Dispatch<AnyAction> | any>(changeMatch(62));
    }
    menuMobile();
    window.addEventListener('resize', menuMobile);
    return () => window.removeEventListener('resize', menuMobile);
  }, []);

  React.useEffect(() => {
    Array.from(document.querySelectorAll('header nav ul li')).forEach(
      (item, index) => {
        setPage([...page, page.push(index + 1)]);
      },
    );
  }, []);

  return (
    <>
      <header className={`${styles.header}`}>
        <div className={`${styles.headerLogo}`}>
          <Link to="/">
            {!mobile ? (
              <img src={logo} width="152px" height="80px" alt="" />
            ) : (
              <img src={logo} width="120px" height="68px" alt="" />
            )}
          </Link>
        </div>

        {mobile && (
          <button
            aria-label="Menu mobile"
            className={`${styles.mobileButton} ${
              mobileMenu && styles.mobileButtonActive
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          ></button>
        )}

        <nav
          aria-label="primaria"
          className={`${mobile ? styles.navMobile : styles.nav} ${
            mobileMenu && styles.navMobileActive
          }`}
        >
          <ul>
            <li>
              {!mobile && (
                <span className={`${styles.pageNum}`}>{`0${page[0]}.`}</span>
              )}
              <NavLink to="" end>
                /QUEM SOMOS
              </NavLink>
            </li>
            <li>
              {!mobile && (
                <span className={`${styles.pageNum}`}>{`0${page[1]}.`}</span>
              )}
              <NavLink to="/" end>
                /O QUE FAZEMOS
              </NavLink>
            </li>
            <li>
              {!mobile && (
                <span className={`${styles.pageNum}`}>{`0${page[2]}.`}</span>
              )}
              <NavLink to="plannews" end>
                /PLAN NEWS
              </NavLink>
            </li>
            <li>
              {!mobile && (
                <span className={`${styles.pageNum}`}>{`0${page[3]}.`}</span>
              )}
              <NavLink to="" end>
                /NOSSOS CLIENTES
              </NavLink>
            </li>
            <li>
              {!mobile && (
                <span className={`${styles.pageNum}`}>{`0${page[4]}.`}</span>
              )}
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
    </>
  );
};

export default Header;
