import { Modal } from '@nextui-org/react';
import lockIcon from 'common/assets/image/saasAppDark/icons/lock.svg';
import logo from 'common/assets/image/saasAppDark/logo.svg';
import Box from 'common/components/Box';
import Button from 'common/components/Button';
import Drawer from 'common/components/Drawer';
import HamburgMenu from 'common/components/HamburgMenu';
import NavbarWrapper from 'common/components/Navbar';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import Container from 'common/components/UI/Container';
import Logo from 'common/components/UIElements/Logo';
import { DrawerContext } from 'common/contexts/DrawerContext';
import { menu_items } from 'common/data/SaasAppDark';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useState } from 'react';
import LoginModal from '../LoginModal';

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const [loginModal, setLoginModal] = useState(false);
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container width="1300px">
        <Box {...row}>
          <Logo
            href="#"
            logoSrc={logo}
            title="SaaS Creative"
            logoStyle={logoStyle}
            className="sticky-logo nav-logo"
          />
          <Box {...menuWrapper} className="mainMenuWrapper">
            <ScrollSpyMenu
              className="main_menu"
              menuItems={menu_items}
              offset={-70}
            />

            <div className="navbar-buttons">
              <Button
                {...button}
                iconPosition="left"
                icon={<img src={lockIcon?.src} alt="lock icon" />}
                title="Login"
                onClick={() => setLoginModal(true)}
                className="navbar_button navbar_button_one"
              />
              <Link href="#">
                <a className="navbar_button navbar_button_two">
                  <Button {...button} title="Join Free" />
                </a>
              </Link>
            </div>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#108AFF" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={menu_items}
                drawerClose={true}
                offset={-100}
              />
            </Drawer>
          </Box>
        </Box>
      </Container>
      <Modal
        blur
        width="1170px"
        closeButton
        aria-labelledby="User Panel"
        open={loginModal}
        onClose={() => setLoginModal(false)}
        justify="center"
        css={{ paddingTop: '0 !important', borderRadius: '0 !important' }}
      >
        <LoginModal />
      </Modal>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    className: 'sass_app_dark_navbar',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {},
  logoStyle: {
    maxWidth: ['126px', '126px'],
  },
  button: {},
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
