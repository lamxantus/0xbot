import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { androidClose } from 'react-icons-kit/ionicons/androidClose';
import NavbarWrapper from 'common/components/Navbar';
import Drawer from 'common/components/Drawer';
import Button from 'common/components/Button';
import Logo from 'common/components/UIElements/Logo';
import HamburgMenu from 'common/components/HamburgMenu';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import { DrawerContext } from 'common/contexts/DrawerContext';
import { Container } from './navbar.style';
import SearchPanel from '../SearchPanel';
import LoginModal from '../LoginModal';
import Copyright from '../Copyright';

import { menuData } from 'common/data/Interior';
import logo from 'common/assets/image/interior/logo.svg';
import { Modal } from '@nextui-org/react';

const Navbar = ({ navbarStyle, logoStyle }) => {
  const [opened, setOpened] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const { state, dispatch } = useContext(DrawerContext);

  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo
          href="/interior"
          logoSrc={logo}
          title="Interior"
          logoStyle={logoStyle}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            variant="textButton"
            onClick={() => setOpened(true)}
            icon={<i className="flaticon-magnifying-glass" />}
            aria-label="search button"
          />
          <Button
            variant="textButton"
            onClick={() => setLoginModal(true)}
            icon={<i className="flaticon-user" />}
            aria-label="registration button"
          />
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
          <Drawer
            width="420px"
            placement="right"
            drawerHandler={<HamburgMenu />}
            open={state.isOpen}
            toggleHandler={toggleHandler}
          >
            <button
              type="button"
              className={state.isOpen ? 'active' : ''}
              onClick={toggleHandler}
              aria-label="drawer toggle button"
            >
              <Icon icon={androidClose} />
            </button>
            <ScrollSpyMenu
              menuItems={menuData}
              drawerClose={true}
              offset={-100}
            />
            <Copyright />
          </Drawer>
        </div>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
  },
  logoStyle: {
    width: '128px',
    height: 'auto',
  },
};

export default Navbar;
