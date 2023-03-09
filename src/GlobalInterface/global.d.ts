// Interface para utilizar o module.css nos componentes
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.png' {
  const pgn: string;
  export default logo;
}
