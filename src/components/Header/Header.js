import { Logo } from './Logo/Logo';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

import { Container } from '../Container/Container';
import {
  BurgerMenu,
  MenuList,
  Appbar,
  MenuActive,
  MenuNonActive,
  MenuAuthBtnWrap,
  TabAuthWrap,
  HeaderTabRight,
  HeaderDescLeft,
  OpenMenuIcon,
  HeaderDescNav,
} from './Header.styled';

import { useEffect } from 'react';
import { Navigation } from './Navigation/Nav/Nav';
import { AuthNav } from './Navigation/AuthNav/AuthNav';
import { useSelector, useDispatch } from 'react-redux';
import { UserNav } from './Navigation/UserNav/UserNav';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle';
import { openMenu, closeMenu } from 'redux/menu/menuSlice';

export const Header = ({ toggleTheme, theme }) => {
  const dispatch = useDispatch();
  const menuState = useSelector(state => state.menuState.isMenuOpen);


  useEffect(() => {
    if (menuState) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menuState]);

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  const handleOpenMenu = () => {
    dispatch(openMenu());
  };


  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      {menuState ? (
        <>
          <MenuActive>
            {isLoggedIn ? (
              <>
                <Appbar>
                  <Logo />
                  <BurgerMenu>
                    <OpenMenuIcon>
                      <IoClose onClick={handleCloseMenu} size={40} />
                    </OpenMenuIcon>
                  </BurgerMenu>
                </Appbar>
                <MenuList>
                  <MenuAuthBtnWrap>
                    <UserNav onClick={handleCloseMenu} />
                  </MenuAuthBtnWrap>
                  <Navigation onClick={handleCloseMenu} />
                </MenuList>
              </>
            ) : (
              <>
                <Appbar>
                  <BurgerMenu>
                    <IoClose onClick={handleCloseMenu} size={40} />
                  </BurgerMenu>
                </Appbar>
                <MenuList>
                  <MenuAuthBtnWrap>
                    <AuthNav onClick={handleCloseMenu} />
                  </MenuAuthBtnWrap>
                  <Navigation onClick={handleCloseMenu} />
                </MenuList>
              </>
            )}
          </MenuActive>
        </>
      ) : (
        <>
          <MenuNonActive>
            {isLoggedIn ? (
              <>
                <HeaderDescLeft>
                  <Logo />

                  <HeaderDescNav>
                    <Navigation onClick={handleCloseMenu} />
                  </HeaderDescNav>
                </HeaderDescLeft>
                <ThemeToggle
                  theme={theme}
                  toggleTheme={toggleTheme}
                ></ThemeToggle>
                <HeaderTabRight>
                  <TabAuthWrap>
                    <UserNav onClick={handleCloseMenu} />
                  </TabAuthWrap>
                  <OpenMenuIcon>
                    <GiHamburgerMenu onClick={handleOpenMenu} size={30} />
                  </OpenMenuIcon>
          
                </HeaderTabRight>
              </>
            ) : (
              <>
                <HeaderDescLeft>
                  <Logo />

                  <HeaderDescNav>
                    <Navigation onClick={handleCloseMenu} />
                  </HeaderDescNav>
                </HeaderDescLeft>
                <ThemeToggle
                  theme={theme}
                  toggleTheme={toggleTheme}
                ></ThemeToggle>
                <HeaderTabRight>
                  <TabAuthWrap>
                    <AuthNav onClick={handleCloseMenu} />
                  </TabAuthWrap>
        
                  <OpenMenuIcon>
                    <GiHamburgerMenu onClick={handleOpenMenu} size={30} />
                  </OpenMenuIcon>
                </HeaderTabRight>
              </>
            )}
          </MenuNonActive>
        </>
      )}
    </Container>
  );
};
