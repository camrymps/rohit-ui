import React from 'react';
import styled from 'styled-components';
import { Window } from 'rohit-ui';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.9rem;
`;

const Th = styled.th`
  text-align: left;
  padding: 0.5rem;
  background-color: var(--win98-gray);
  border: 2px solid var(--win98-black);
  font-weight: normal;
`;

const Td = styled.td`
  padding: 0.5rem;
  border: 2px solid var(--win98-gray);
  vertical-align: top;
`;

const Type = styled.code`
  background-color: var(--win98-white);
  padding: 0.2rem 0.4rem;
  border-radius: 2px;
  font-family: 'Consolas', monospace;
`;

interface Prop {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
}

interface PropsTableProps {
  props: Prop[];
}

const PropsTable: React.FC<PropsTableProps> = ({ props }) => {
  return (
    <Window title="Props">
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>Required</Th>
            <Th>Default</Th>
            <Th>Description</Th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name}>
              <Td>
                <code>{prop.name}</code>
              </Td>
              <Td>
                <Type>{prop.type}</Type>
              </Td>
              <Td>{prop.required ? 'Yes' : 'No'}</Td>
              <Td>{prop.default || '-'}</Td>
              <Td>{prop.description}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Window>
  );
};

export default PropsTable; 