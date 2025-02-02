import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaUsers } from 'react-icons/fa';

const FeaturesSection = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const FeatureCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  
  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.background};
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Features = () => {
  const features = [
    {
      icon: <FaRobot />,
      title: "Atendimento Inteligente",
      description: "Agentes de IA que entendem e respondem naturalmente, oferecendo suporte multicanal 24/7 e resolvendo até 80% das demandas sem intervenção humana."
    },
    {
      icon: <FaChartLine />,
      title: "Automação Avançada",
      description: "Automatize processos complexos com agentes que aprendem e se adaptam, reduzindo custos operacionais em até 60% e eliminando tarefas repetitivas."
    },
    {
      icon: <FaUsers />,
      title: "Análise Preditiva",
      description: "Agentes que analisam dados em tempo real, identificam padrões e fazem previsões precisas para ajudar na tomada de decisões estratégicas."
    }
  ];

  return (
    <FeaturesSection>
      <Container>
        <Title>Potencialize seu negócio com <span>Agentes Inteligentes</span></Title>
        <Grid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <IconWrapper>
                {feature.icon}
              </IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </Grid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;
