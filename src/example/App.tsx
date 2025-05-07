import React, { useState } from 'react';
import styled from 'styled-components';
import {
  RohitThemeProvider,
  useRohitTheme,
  Button,
  Checkbox,
  Radio,
  TextField,
  Select,
  ProgressBar,
  Window,
  Tooltip,
  Menu,
  Tabs,
  Dialog,
  Accordion,
  CodeBlock,
  Alert,
  Badge,
  Spinner,
  Card
} from '../lib';
// Separate type imports
import type {
  SelectOption,
  MenuItem,
  TabItem,
  AccordionItem
} from '../lib';

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.desktop};
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main};
  color: white;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ComponentShowcase = () => {
  const { theme, setTheme, availableThemes } = useRohitTheme();
  const [radioValue, setRadioValue] = useState('option1');
  const [textValue, setTextValue] = useState('');
  const [selectValue, setSelectValue] = useState('option1');
  const [progressValue, setProgressValue] = useState(45);
  const [rohitMode, setRohitMode] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const selectOptions: SelectOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'rohit', label: 'Rohit\'s Choice' },
  ];

  const handleThemeChange = () => {
    const currentThemeIndex = availableThemes.findIndex(t => t.name === theme.name);
    const nextThemeIndex = (currentThemeIndex + 1) % availableThemes.length;
    setTheme(availableThemes[nextThemeIndex]);
  };

  const incrementProgress = () => {
    setProgressValue(prev => (prev >= 100 ? 0 : prev + 10));
  };

  // Menu items for showcase
  const menuItems: MenuItem[] = [
    { id: 'file', label: 'File', submenu: [
      { id: 'new', label: 'New', icon: '📄' },
      { id: 'open', label: 'Open', shortcut: 'Ctrl+O' },
      { id: 'save', label: 'Save', shortcut: 'Ctrl+S' },
      { id: 'divider1', label: '', divider: true },
      { id: 'exit', label: 'Exit' }
    ]},
    { id: 'edit', label: 'Edit', submenu: [
      { id: 'cut', label: 'Cut', shortcut: 'Ctrl+X' },
      { id: 'copy', label: 'Copy', shortcut: 'Ctrl+C' },
      { id: 'paste', label: 'Paste', shortcut: 'Ctrl+V' }
    ]},
    { id: 'help', label: 'Help', submenu: [
      { id: 'about', label: 'About Rohit UI' }
    ]}
  ];

  // Tab items for showcase
  const tabItems: TabItem[] = [
    { id: 'tab1', label: 'Tab 1', content: <div>This is the content for Tab 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>This is the content for Tab 2</div> },
    { id: 'tab3', label: 'Tab 3', content: <div>This is the content for Tab 3</div> }
  ];

  // Accordion items for showcase
  const accordionItems: AccordionItem[] = [
    { id: 'acc1', title: 'Section 1', content: <div>This is the content for Section 1</div> },
    { id: 'acc2', title: 'Section 2', content: <div>This is the content for Section 2</div> },
    { id: 'acc3', title: 'Section 3', content: <div>This is the content for Section 3</div> }
  ];

  // Add sample Python code for the CodeBlock component
  const samplePythonCode = `def fibonacci(n):
    """Calculate the nth Fibonacci number recursively."""
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Calculate and print the first 10 Fibonacci numbers
for i in range(10):
    result = fibonacci(i)
    print(f"Fibonacci({i}) = {result}")`;

  return (
    <AppContainer>
      <Title>🖥️ Rohit UI - Windows 98 Style 🖥️</Title>
      
      <Window 
        title="Rohit UI Component Showcase" 
        width="700px"
        height="600px"
        initialPosition={{ x: 100, y: 50 }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', overflow: 'auto' }}>
          <div>
            <h3>Current Theme: {theme.name}</h3>
            <Button onClick={handleThemeChange}>Switch Theme</Button>
          </div>
          
          <div>
            <h3>Buttons</h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Button>Default</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="error">Error</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="info">Info</Button>
              <Tooltip content="This button has Rohit Mode enabled!" position="top">
                <Button rohitMode={rohitMode}>Rohit Mode</Button>
              </Tooltip>
            </div>
          </div>
          
          <div>
            <h3>Checkbox & Radio</h3>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Checkbox 
                label="Enable Rohit Mode" 
                checked={rohitMode} 
                onChange={() => setRohitMode(!rohitMode)}
                rohitMode={rohitMode}
              />
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Radio 
                  name="radioGroup" 
                  value="option1" 
                  label="Option 1" 
                  checked={radioValue === 'option1'} 
                  onChange={() => setRadioValue('option1')}
                  rohitMode={rohitMode}
                />
                <Radio 
                  name="radioGroup" 
                  value="option2" 
                  label="Option 2" 
                  checked={radioValue === 'option2'} 
                  onChange={() => setRadioValue('option2')}
                  rohitMode={rohitMode}
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3>Text Field</h3>
            <TextField 
              label="Enter some text" 
              value={textValue} 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTextValue(e.target.value)} 
              placeholder="Type here..."
              fullWidth
              rohitMode={rohitMode}
            />
          </div>
          
          <div>
            <h3>Select</h3>
            <Select 
              label="Choose an option" 
              options={selectOptions}
              value={selectValue}
              onChange={setSelectValue}
              fullWidth
              rohitMode={rohitMode}
            />
          </div>
          
          <div>
            <h3>Progress Bar</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <ProgressBar 
                value={progressValue} 
                max={100} 
                label="Download Progress" 
                showValue
                fullWidth
                rohitMode={rohitMode}
              />
              <Button onClick={incrementProgress}>Increment Progress</Button>
            </div>
          </div>

          <div>
            <h3>Menu</h3>
            <Menu 
              items={menuItems} 
              trigger={<Button>Click for Menu</Button>}
              rohitMode={rohitMode}
            />
          </div>

          <div>
            <h3>Tabs</h3>
            <Tabs 
              items={tabItems}
              rohitMode={rohitMode}
            />
          </div>

          <div>
            <h3>Dialog</h3>
            <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
            <Dialog
              isOpen={dialogOpen}
              onClose={() => setDialogOpen(false)}
              title="Rohit UI Dialog"
              rohitMode={rohitMode}
              buttons={[
                { label: 'OK', onClick: () => setDialogOpen(false), variant: 'primary' },
                { label: 'Cancel', onClick: () => setDialogOpen(false) }
              ]}
            >
              <p>This is a Windows 98-style dialog box!</p>
              <p>Click OK or Cancel to close it.</p>
            </Dialog>
          </div>

          <div>
            <h3>Accordion</h3>
            <Accordion 
              items={accordionItems}
              rohitMode={rohitMode}
            />
          </div>

          <div>
            <h3>Tooltip</h3>
            <Tooltip content="This is a tooltip with information!" rohitMode={rohitMode}>
              <Button>Hover me</Button>
            </Tooltip>
          </div>
          
          <div>
            <h3>Alert</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Alert variant="info" rohitMode={rohitMode}>
                This is an info alert message
              </Alert>
              <Alert variant="warning" title="Custom Warning" closable rohitMode={rohitMode}>
                This is a warning alert with a custom title and close button
              </Alert>
              <Alert variant="error" rohitMode={rohitMode}>
                This is an error alert message
              </Alert>
              <Alert variant="success" rohitMode={rohitMode}>
                This is a success alert message
              </Alert>
            </div>
          </div>
          
          <div>
            <h3>Badge</h3>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Badge content="New" variant="primary" rohitMode={rohitMode} />
              <Badge content={42} variant="error" rohitMode={rohitMode} />
              <Badge content="Hot!" variant="warning" size="large" rohitMode={rohitMode} />
              <Button>
                Messages <Badge content={99} variant="error" rohitMode={rohitMode} />
              </Button>
              <Button>
                Notifications <Badge content="" dot variant="primary" rohitMode={rohitMode} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3>Spinner</h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Spinner size="small" label="Loading..." rohitMode={rohitMode} />
              <Spinner variant="primary" rohitMode={rohitMode} />
              <Spinner variant="secondary" size="large" label="Processing..." rohitMode={rohitMode} />
              <Spinner variant="error" inline label="Error..." rohitMode={rohitMode} />
            </div>
          </div>
          
          <div>
            <h3>Card</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Card 
                title="Basic Card" 
                rohitMode={rohitMode}
                footer={<Button size="small">Action</Button>}
              >
                This is a basic card with default styling
              </Card>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Card 
                  title="Primary Card" 
                  variant="primary" 
                  width="200px"
                  elevated
                  rohitMode={rohitMode}
                >
                  Card with primary styling
                </Card>
                
                <Card 
                  title="Success Card" 
                  variant="success" 
                  width="200px"
                  rohitMode={rohitMode}
                >
                  Card with success styling
                </Card>
                
                <Card 
                  title="Warning Card" 
                  variant="warning" 
                  width="200px"
                  rohitMode={rohitMode}
                >
                  Card with warning styling
                </Card>
              </div>
            </div>
          </div>

          <div>
            <h3>CodeBlock</h3>
            <p>Simple Python code:</p>
            <CodeBlock 
              code={samplePythonCode} 
              language="python"
              title="Fibonacci Sequence"
              rohitMode={rohitMode}
            />
            <div style={{ marginTop: '8px' }}>
              <Button onClick={() => {
                // Find the toggle button by its class name
                const toggleButton = document.querySelector('.code-block-toggle-button');
                if (toggleButton) {
                  (toggleButton as HTMLButtonElement).click();
                }
              }}>
                Toggle "Rohit-fied" Code
              </Button>
            </div>
          </div>
        </div>
      </Window>
    </AppContainer>
  );
};

const App = () => {
  return (
    <RohitThemeProvider>
      <ComponentShowcase />
    </RohitThemeProvider>
  );
};

export default App; 