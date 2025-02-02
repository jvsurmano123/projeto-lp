import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/Theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>
        <div id="inicio">
          <Hero />
        </div>
        <div id="recursos">
          <Features />
        </div>
        <div id="planos">
          <Pricing />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="contato">
          <CTA />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
