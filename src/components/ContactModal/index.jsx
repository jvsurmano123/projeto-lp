import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../config/supabase';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  padding: 2rem;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.primary}33;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.5rem;
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Title = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SuccessMessage = styled(motion.div)`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 1rem;
  text-align: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary}15;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary}33;
`;

const ErrorMessage = styled(motion.div)`
  color: #ff4444;
  margin-top: 1rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary}33;
  border-radius: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  margin-top: 1rem;
`;

const Benefits = styled.ul`
  list-style: none;
  margin: 1.5rem 0;
`;

const Benefit = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', phone: '' });
      
      // Fecha o modal após 2 segundos
      setTimeout(() => {
        onClose();
        setStatus({ loading: false, success: false, error: null });
      }, 2000);

    } catch (error) {
      setStatus({ loading: false, success: false, error: error.message });
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <ModalContainer
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <Title>
            Transforme seu negócio com <span>IA</span>
          </Title>
          <Benefits>
            <Benefit>Mentoria personalizada</Benefit>
            <Benefit>Suporte técnico especializado</Benefit>
            <Benefit>Certificado de conclusão</Benefit>
            <Benefit>Acesso vitalício ao conteúdo</Benefit>
          </Benefits>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Nome completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Seu melhor e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="WhatsApp"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status.loading}
            >
              {status.loading ? 'Enviando...' : 'Quero me tornar especialista'}
            </Button>

            {status.success && (
              <SuccessMessage
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✓ Cadastro realizado com sucesso! Em breve nossa equipe entrará em contato.
              </SuccessMessage>
            )}

            {status.error && (
              <ErrorMessage
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Erro ao cadastrar: {status.error}
              </ErrorMessage>
            )}
          </Form>
        </ModalContainer>
      </Overlay>
    </AnimatePresence>
  );
};

export default ContactModal;
