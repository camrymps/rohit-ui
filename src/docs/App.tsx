import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import docsStyles from '../assets/docs.css?inline';

const GlobalStyle = createGlobalStyle`
  ${docsStyles}
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router basename="/rohit-ui-v2">
        <div className="site-header">
          <div className="site-title">
            <img src="/assets/images/rohit-logo.png" alt="Rohit UI Logo" className="site-logo" />
            Rohit UI
          </div>
          <div>
            <a href="https://github.com/YourUsername/rohit-ui-v2" className="win98-button">View on GitHub</a>
          </div>
        </div>

        <div className="layout">
          <nav className="navigation">
            <div className="nav-title">Documentation</div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/getting-started">Getting Started</Link></li>
              <li><Link to="/themes">Themes</Link></li>
            </ul>
            
            <div className="nav-section">
              <div className="nav-title">Basic Components</div>
              <ul>
                <li><Link to="/components/button">Button</Link></li>
                <li><Link to="/components/checkbox">Checkbox</Link></li>
                {/* Add more component links */}
              </ul>
            </div>
          </nav>

          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/getting-started" element={<GettingStarted />} />
              <Route path="/themes" element={<Themes />} />
              <Route path="/components/button" element={<ButtonDocs />} />
              {/* Add more routes */}
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
};

// Placeholder components - we'll create these in separate files
const Home = () => <div>Home</div>;
const GettingStarted = () => <div>Getting Started</div>;
const Themes = () => <div>Themes</div>;

// Example of an interactive component documentation
const ButtonDocs = () => {
  return (
    <div className="window">
      <div className="window-header">
        <div className="window-title">
          <img src="/assets/images/win98-logo.png" alt="Win98 Logo" className="window-icon" width="16" height="16" />
          <span>Button Component</span>
        </div>
      </div>
      <div className="window-content">
        <div className="component-header">
          <h1 className="component-title">Button</h1>
          <p className="component-description">
            The Button component provides a classic Windows 98-style button with various states and options.
          </p>
        </div>

        <div className="section">
          <h2 className="section-title">Examples</h2>
          
          <div className="example">
            <div className="example-header">
              <div className="example-title">Basic Button</div>
            </div>
            <div className="example-content">
              <Button>Click me</Button>
              
              <div className="example-code">
                <pre><code className="language-tsx">{'<Button>Click me</Button>'}</code></pre>
              </div>
            </div>
          </div>

          <div className="example">
            <div className="example-header">
              <div className="example-title">Rohit Mode Button</div>
            </div>
            <div className="example-content">
              <Button rohitMode>✨ Click me! ✨</Button>
              
              <div className="example-code">
                <pre><code className="language-tsx">{'<Button rohitMode>✨ Click me! ✨</Button>'}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App; 