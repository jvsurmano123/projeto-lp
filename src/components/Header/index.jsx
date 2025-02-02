import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}33;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  .dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    margin-left: 4px;
  }
`;

const MenuItems = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MenuItem = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AGENT<span>HUB</span><div className="dot" />
        </Logo>
        <MenuItems>
          <MenuItem href="#inicio">Início</MenuItem>
          <MenuItem href="#recursos">Benefícios</MenuItem>
          <MenuItem href="#planos">Planos</MenuItem>
          <MenuItem href="#faq">FAQ</MenuItem>
          <MenuItem href="#contato">Demonstração</MenuItem>
        </MenuItems>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
