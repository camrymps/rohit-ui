import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RohitThemeProvider } from '../../src/lib/theme/ThemeProvider';
import Layout from './components/Layout';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import ButtonDocs from './pages/ButtonDocs';
import CheckboxDocs from './pages/CheckboxDocs';
import RadioDocs from './pages/RadioDocs';

const App: React.FC = () => {
  return (
    <RohitThemeProvider>
      <Router basename="/rohit-ui-v2">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/components/button" element={<ButtonDocs />} />
            <Route path="/components/checkbox" element={<CheckboxDocs />} />
            <Route path="/components/radio" element={<RadioDocs />} />
          </Routes>
        </Layout>
      </Router>
    </RohitThemeProvider>
  );
};

export default App;
