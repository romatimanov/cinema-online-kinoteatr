/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../image/CinemaGuide.png';
import { InputSearch } from '../InputSearch/InputSearch';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveLink } from '../redux/actions';
import { Auth } from '../Auth/Auth';
import { fetchProfileData } from '../Module/Module';

export function Header() {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const activeLink = useSelector((state) => state.activeLink);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfileData(setProfileData);
  }, []);

  const handleLinkClick = (path) => {
    dispatch(setActiveLink(path));
    navigate(path);
  };

  const handleAuthOpen = () => {
    setAuthModalOpen(true);
  };

  const handleAuthClose = () => {
    setAuthModalOpen(false);
  };

  const updateProfileData = (newProfileData) => {
    setProfileData(newProfileData);
    setAuthModalOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo" onClick={() => handleLinkClick('/')}>
            <img src={logo} alt="logo" />
          </div>
          <nav className="header-nav">
            <ul className="header-list">
              <li className="header-item">
                <button
                  className={`header-link header-text ${
                    activeLink === '/' ? 'header-link__active' : ''
                  }`}
                  onClick={() => handleLinkClick('/')}
                >
                  Главная
                </button>
              </li>
              <li className="header-item">
                <button
                  className={`header-link header-text ${
                    activeLink === '/genres' ? 'header-link__active' : ''
                  }`}
                  onClick={() => handleLinkClick('/genres')}
                >
                  Жанры
                </button>
              </li>
            </ul>
            <InputSearch />
          </nav>
          {profileData ? (
            <button
              className={`header-link header-text ${
                activeLink === '/profile' ? 'header-link__active' : ''
              }`}
              onClick={() => handleLinkClick('/profile')}
            >
              {profileData.name}
            </button>
          ) : (
            <button className="header-btn" onClick={handleAuthOpen}>
              Войти
            </button>
          )}
        </div>
      </div>

      <Auth
        open={isAuthModalOpen}
        onClose={handleAuthClose}
        updateProfileData={updateProfileData}
      />
    </header>
  );
}
