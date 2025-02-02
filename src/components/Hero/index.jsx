import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(159, 255, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 70%);
    z-index: 1;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const Button = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Hero = () => {
  const scrollToPlans = () => {
    document.getElementById('planos').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Automatize seu negócio com <span>Agentes de IA</span>
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Implemente agentes inteligentes que trabalham 24/7, automatizando tarefas, 
          atendendo clientes e otimizando processos. Transforme sua operação com 
          soluções de IA que realmente funcionam.
        </Subtitle>
        <Button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToPlans}
        >
          Começar Agora
        </Button>
      </Content>
    </HeroSection>
  );
};

export default Hero;
