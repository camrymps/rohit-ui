import React, { useState } from 'react';
import { Radio, Checkbox } from 'rohit-ui';
import DocPage from './DocPage';

const RadioDocs: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [rohitMode, setRohitMode] = useState(false);

  const examples = [
    {
      title: 'Basic Radio Group',
      description: 'A simple radio group with multiple options.',
      code: `<div>
  <Radio name="basic" label="Option 1" />
  <Radio name="basic" label="Option 2" />
  <Radio name="basic" label="Option 3" />
</div>`,
      children: (
        <div>
          <Radio name="basic" label="Option 1" />
          <Radio name="basic" label="Option 2" />
          <Radio name="basic" label="Option 3" />
        </div>
      ),
    },
    {
      title: 'Controlled Radio Group',
      description: 'A radio group with controlled state.',
      code: `<div>
  <Radio
    name="controlled"
    value="option1"
    checked={selectedOption === 'option1'}
    onChange={(e) => setSelectedOption(e.target.value)}
    label="Option 1"
  />
  <Radio
    name="controlled"
    value="option2"
    checked={selectedOption === 'option2'}
    onChange={(e) => setSelectedOption(e.target.value)}
    label="Option 2"
  />
  <Radio
    name="controlled"
    value="option3"
    checked={selectedOption === 'option3'}
    onChange={(e) => setSelectedOption(e.target.value)}
    label="Option 3"
  />
</div>`,
      children: (
        <div>
          <Radio
            name="controlled"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={(e) => setSelectedOption(e.target.value)}
            label="Option 1"
          />
          <Radio
            name="controlled"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={(e) => setSelectedOption(e.target.value)}
            label="Option 2"
          />
          <Radio
            name="controlled"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={(e) => setSelectedOption(e.target.value)}
            label="Option 3"
          />
        </div>
      ),
    },
    {
      title: 'Disabled Radio',
      description: 'A radio button that cannot be interacted with.',
      code: `<Radio disabled label="Disabled radio" />`,
      children: <Radio disabled label="Disabled radio" />,
    },
    {
      title: 'Rohit Mode Radio',
      description: 'A radio button with enhanced Rohit Mode styling.',
      code: `<div>
  <Checkbox
    checked={rohitMode}
    onChange={(e) => setRohitMode(e.target.checked)}
    label="Enable Rohit Mode"
  />
  <div style={{ marginTop: '1rem' }}>
    <Radio rohitMode={rohitMode} label="Rohit Mode radio" />
  </div>
</div>`,
      children: (
        <div>
          <Checkbox
            checked={rohitMode}
            onChange={(e) => setRohitMode(e.target.checked)}
            label="Enable Rohit Mode"
          />
          <div style={{ marginTop: '1rem' }}>
            <Radio rohitMode={rohitMode} label="Rohit Mode radio" />
          </div>
        </div>
      ),
    },
  ];

  const props = [
    {
      name: 'label',
      type: 'string',
      required: true,
      description: 'The label text to display next to the radio button.',
    },
    {
      name: 'name',
      type: 'string',
      required: true,
      description: 'The name of the radio group.',
    },
    {
      name: 'value',
      type: 'string',
      required: true,
      description: 'The value of the radio button.',
    },
    {
      name: 'checked',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the radio button is checked.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the radio button is disabled.',
    },
    {
      name: 'rohitMode',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether to enable Rohit Mode styling.',
    },
    {
      name: 'onChange',
      type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
      required: false,
      description: 'Function to call when the radio button state changes.',
    },
  ];

  return (
    <DocPage
      title="Radio"
      description="A Windows 98-style radio button component that supports labels, controlled state, disabled state, and Rohit Mode."
      examples={examples}
      props={props}
    />
  );
};

export default RadioDocs; 