import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CTASection = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(159, 255, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 70%);
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  text-align: center;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  margin-top: 2rem;
`;

const Benefits = styled.ul`
  list-style: none;
  margin: 2rem auto;
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Benefit = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

const CTA = () => {
  const scrollToPlans = () => {
    document.getElementById('planos').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <CTASection>
      <Container>
        <Content>
          <Title>
            Comece a transformação do seu negócio <span>ainda hoje</span>
          </Title>
          <Description>
            Não perca mais tempo com processos manuais e atendimento limitado. 
            Implemente agentes de IA que trabalham incansavelmente para fazer seu negócio crescer.
          </Description>
          <Benefits>
            <Benefit>Implementação em até 48 horas</Benefit>
            <Benefit>ROI comprovado em 30 dias</Benefit>
            <Benefit>Suporte técnico especializado 24/7</Benefit>
            <Benefit>Satisfação garantida ou seu dinheiro de volta</Benefit>
          </Benefits>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToPlans}
          >
            Agende uma Demonstração Gratuita
          </Button>
        </Content>
      </Container>
    </CTASection>
  );
};

export default CTA;
