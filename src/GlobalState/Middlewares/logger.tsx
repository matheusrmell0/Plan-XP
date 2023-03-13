const logger = () => (next: (arg0: any) => void) => (action: any) => {
  console.group('Projeto e desafio web Plan XP para o Grupo Plan');
  next(action);
  console.log('Desenvolvido:', 'Matheus R Mello');
  console.groupEnd();
  return next(action);
};

export default logger;