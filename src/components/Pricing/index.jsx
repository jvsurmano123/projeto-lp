import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PlanModal from '../PlanModal';

const PricingSection = styled.section`
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
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Subtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 3rem;
  max-width: 600px;
  margin: 0 auto 3rem;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const PricingCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  border: 2px solid ${({ featured, theme }) => featured ? theme.colors.primary : 'transparent'};
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const Price = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  
  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const Feature = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.5rem 0;
`;

const Button = styled(motion.button)`
  background: ${({ featured, theme }) => featured ? theme.colors.primary : 'transparent'};
  color: ${({ featured, theme }) => featured ? theme.colors.background : theme.colors.primary};
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateY: -90 },
  visible: { opacity: 1, y: 0, rotateY: 0, transition: { duration: 0.8, ease: "easeInOut" } }
};

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "Starter",
      price: "2997",
      features: [
        "1 Agente de IA Personalizado",
        "Atendimento ao Cliente 24/7",
        "Integração com WhatsApp/Email",
        "Dashboard de Analytics",
        "Treinamento da Equipe",
        "Suporte por Email"
      ],
      featured: false
    },
    {
      name: "Business",
      price: "5997",
      features: [
        "3 Agentes de IA Personalizados",
        "Multicanal (WhatsApp, Email, Chat)",
        "Automação de Processos",
        "Analytics Avançado",
        "API Personalizada",
        "Suporte Prioritário 24/7",
        "Consultoria Mensal"
      ],
      featured: true
    },
    {
      name: "Enterprise",
      price: "9997",
      features: [
        "Agentes de IA Ilimitados",
        "Integração Total com Sistemas",
        "Customização Completa",
        "Machine Learning Avançado",
        "Análise Preditiva",
        "Equipe Dedicada",
        "Consultoria Semanal",
        "SLA Garantido"
      ],
      featured: false
    }
  ];

  return (
    <PricingSection>
      <PlanModal 
        isOpen={!!selectedPlan} 
        onClose={() => setSelectedPlan(null)} 
        plan={selectedPlan}
      />
      <Container>
        <Title>Planos de <span>Implementação</span> de Agentes</Title>
        <Subtitle>
          Escolha o plano ideal para transformar seu negócio com agentes de IA personalizados.
          Soluções escaláveis que crescem junto com sua empresa.
        </Subtitle>
        <PricingGrid>
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              featured={plan.featured}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <PlanName>{plan.name}</PlanName>
              <Price>
                R${plan.price}<span>/mês</span>
              </Price>
              <FeaturesList>
                {plan.features.map((feature, idx) => (
                  <Feature key={idx}>{feature}</Feature>
                ))}
              </FeaturesList>
              <Button
                featured={plan.featured}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPlan(plan)}
              >
                Começar Agora
              </Button>
            </PricingCard>
          ))}
        </PricingGrid>
      </Container>
    </PricingSection>
  );
};

export default Pricing;
