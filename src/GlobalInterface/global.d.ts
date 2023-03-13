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

interface Mobile {
  ui: { mobile: boolean | null };
}

interface FormTypes {
  email: {
    regex: RegExp | string;
    message: string;
  };
  number: {
    regex: RegExp | string;
    message: string;
  };
}

interface Input {
  onChange?: ChangeEventHandler<HTMLInputElement> | unknown;
  onBlur?: FocusEventHandler<HTMLInputElement> | unknown;
  type: string | unknown;
  placeholder?: string | unknown;
  label: string | unknown;
  name: string | unknown;
  value?: string | unknown;
  error?: string | unknown;
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
