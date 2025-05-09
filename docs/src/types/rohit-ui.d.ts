declare module "rohit-ui" {
  import { ComponentType, ReactNode, ChangeEvent, MouseEvent } from "react";

  export interface ButtonProps {
    children: ReactNode;
    primary?: boolean;
    disabled?: boolean;
    rohitMode?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    as?: string | ComponentType;
  }

  export interface CheckboxProps {
    label: string;
    checked?: boolean;
    disabled?: boolean;
    rohitMode?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  }

  export interface RadioProps {
    label: string;
    name: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
    rohitMode?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  }

  export interface WindowProps {
    title: string;
    children: ReactNode;
  }

  export const Button: React.FC<ButtonProps>;
  export const Checkbox: React.FC<CheckboxProps>;
  export const Radio: React.FC<RadioProps>;
  export const Window: React.FC<WindowProps>;
  export const RohitModeProvider: React.FC<{ children: ReactNode }>;
}
