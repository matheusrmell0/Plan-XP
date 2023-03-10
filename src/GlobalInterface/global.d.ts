// Interface para utilizar o module.css nos componentes
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.png' {
  const pgn: string;
  export default logo;
}

interface Type {
  regex: RegExp;
  message: string;
}

interface Types {
  email: Type;
  number: Type;
}

interface Formulario {
  nome: string;
  email: string;
  numero: string;
  mensagem: string;
}

type FormField = [
  { id: 'nome' },
  { id: 'email' },
  { id: 'numero' },
  { id: 'mensagem' },
];

interface FormTypes {
  email: {
    regex: RegExp;
    message: string;
  };
  number: {
    regex: RegExp;
    message: string;
  };
}

interface Input {
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  type: string | undefined;
  placeholder?: string | undefined;
  label: string | undefined;
  name: string | undefined;
  value?: string | undefined;
  error?: string | undefined;
}

interface TextArea {
  placeholder?: string;
  cols?: number;
  rows: number;
  label: string;
  value?: string;
  name: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

interface Button {
  disabled?: boolean;
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
