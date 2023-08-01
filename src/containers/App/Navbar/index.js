import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from 'common/components/Navbar';
import Drawer from 'common/components/Drawer';
import Button from 'common/components/Button';
import Logo from 'common/components/UIElements/Logo';
import HamburgMenu from 'common/components/HamburgMenu';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import { Container } from './navbar.style';
import SearchPanel from '../SearchPanel';
import LoginModal from '../LoginModal';

import LogoImage from 'common/assets/image/app/logo.png';

import { DrawerContext } from 'common/contexts/DrawerContext';

import data from 'common/data/App/MenuItems';
import { Modal } from '@nextui-org/react';

const Navbar = ({ navbarStyle, logoStyle, buttonStyle }) => {
  const [opened, setOpened] = useState(false);
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
      <>
        <Container>
          <Logo
            href="#"
            logoSrc={LogoImage}
            title="Agency"
            logoStyle={logoStyle}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button variant="textButton" onClick={() => setOpened(true)} icon={<i className="flaticon-magnifying-glass" />} aria-label="search" />
            <Button variant="textButton" onClick={() => setLoginModal(true)} icon={<i className="flaticon-user" />} aria-label="login" />
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                menuItems={data.menuItems}
                drawerClose={true}
                offset={-100}
              />
            </Drawer>
          </div>
        </Container>
        <Modal
          blur
          fullScreen
          closeButton
          aria-labelledby="Search Panel"
          open={opened}
          onClose={() => setOpened(false)}
          justify="center"
          css={{ paddingTop: '0 !important', borderRadius: '0 !important' }}
        >
          <SearchPanel />
        </Modal>

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
      </>
    </NavbarWrapper>
  );
};

// Navbar style props
Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  wrapperStyle2: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
  },
  logoStyle: {
    width: ['100px', '140px'],
  },
  buttonStyle: {
    minHeight: '70px',
    color: '#fff',
  },
};

export default Navbar;
