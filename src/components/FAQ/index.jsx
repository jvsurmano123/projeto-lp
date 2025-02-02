import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const FAQSection = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 800px;
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

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary}33;
  border-radius: 8px;
  overflow: hidden;
`;

const Question = styled.button`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  text-align: left;

  svg {
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.card}dd;
  }
`;

const Answer = styled(motion.div)`
  padding: 0 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  
  div {
    padding: 1.5rem 0;
    border-top: 1px solid ${({ theme }) => theme.colors.primary}33;
  }
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "O que são agentes de IA e como eles podem ajudar meu negócio?",
      answer: "Agentes de IA são sistemas inteligentes personalizados que podem automatizar tarefas, interagir com clientes e otimizar processos. Eles podem atuar no atendimento ao cliente 24/7, análise de dados, automação de processos e muito mais, aumentando a eficiência e reduzindo custos operacionais."
    },
    {
      question: "Quanto tempo leva para implementar um agente de IA?",
      answer: "O tempo de implementação varia de acordo com a complexidade do projeto. Projetos básicos podem ser implementados em 2-4 semanas, enquanto soluções mais complexas podem levar 2-3 meses. Nosso time trabalha de forma ágil para entregar resultados o mais rápido possível."
    },
    {
      question: "Preciso ter conhecimento técnico para usar os agentes?",
      answer: "Não! Nossos agentes são desenvolvidos com foco na usabilidade. Fornecemos treinamento completo e suporte contínuo para sua equipe. A interface é intuitiva e amigável, permitindo que qualquer pessoa possa operar o sistema após nossa capacitação."
    },
    {
      question: "Como é feito o processo de personalização dos agentes?",
      answer: "O processo começa com uma análise detalhada das necessidades do seu negócio. Em seguida, desenvolvemos um plano personalizado, treinamos o agente com dados relevantes do seu setor e realizamos ajustes finos para garantir que ele atenda perfeitamente às suas necessidades específicas."
    },
    {
      question: "Qual o suporte oferecido após a implementação?",
      answer: "Oferecemos suporte técnico especializado, monitoramento contínuo do desempenho, atualizações regulares e otimizações baseadas em feedback. Nossos planos incluem diferentes níveis de suporte, desde básico até dedicado 24/7, para atender às necessidades de cada cliente."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection id="faq">
      <Container>
        <Title>Perguntas <span>Frequentes</span></Title>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <Question
              isOpen={openIndex === index}
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
              <FaChevronDown />
            </Question>
            <AnimatePresence>
              {openIndex === index && (
                <Answer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>{faq.answer}</div>
                </Answer>
              )}
            </AnimatePresence>
          </FAQItem>
        ))}
      </Container>
    </FAQSection>
  );
};

export default FAQ;
