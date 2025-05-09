import React, { useState } from 'react';
import { Checkbox } from 'rohit-ui';
import DocPage from './DocPage';

const CheckboxDocs: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [rohitMode, setRohitMode] = useState(false);

  const examples = [
    {
      title: 'Basic Checkbox',
      description: 'A simple checkbox with a label.',
      code: `<Checkbox label="Accept terms and conditions" />`,
      children: <Checkbox label="Accept terms and conditions" />,
    },
    {
      title: 'Controlled Checkbox',
      description: 'A checkbox with controlled state.',
      code: `<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  label="Controlled checkbox"
/>`,
      children: (
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          label="Controlled checkbox"
        />
      ),
    },
    {
      title: 'Disabled Checkbox',
      description: 'A checkbox that cannot be interacted with.',
      code: `<Checkbox disabled label="Disabled checkbox" />`,
      children: <Checkbox disabled label="Disabled checkbox" />,
    },
    {
      title: 'Rohit Mode Checkbox',
      description: 'A checkbox with enhanced Rohit Mode styling.',
      code: `<Checkbox rohitMode label="Rohit Mode checkbox" />`,
      children: (
        <div>
          <Checkbox
            checked={rohitMode}
            onChange={(e) => setRohitMode(e.target.checked)}
            label="Enable Rohit Mode"
          />
          <div style={{ marginTop: '1rem' }}>
            <Checkbox rohitMode={rohitMode} label="Rohit Mode checkbox" />
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
      description: 'The label text to display next to the checkbox.',
    },
    {
      name: 'checked',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the checkbox is checked.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the checkbox is disabled.',
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
      description: 'Function to call when the checkbox state changes.',
    },
  ];

  return (
    <DocPage
      title="Checkbox"
      description="A Windows 98-style checkbox component that supports labels, controlled state, disabled state, and Rohit Mode."
      examples={examples}
      props={props}
    />
  );
};

export default CheckboxDocs; 