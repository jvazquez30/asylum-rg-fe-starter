import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../common/login-button';
import LogoutButton from '../common/logout-button';

const { primary_accent_color } = colors;

const AuthButton = () => {
  const {isAuthenticated} = useAuth0();
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

const ProfileButton = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Link to="/profile" style={{
        backgroundColor: '#404C4A',
        color: '#FFFFFF',
        marginLeft: '65px',
      }}>
      Profile
      </Link>
    )
  );
};

function HeaderContent() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7' }}>
          Graphs
        </Link>
        <AuthButton />
        <ProfileButton />
      </div>
    </div>
  );
}

export { HeaderContent };
