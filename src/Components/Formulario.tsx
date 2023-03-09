import React from 'react';
import styles from './Formulario.module.css';
import Input from './Forms/Input';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from './Forms/Button';
import TextArea from './Forms/TextArea';

const Formulario = () => {
  const onChange = () => {};
  return (
    <form className={`${styles.form}`}>
      <div className={`${styles.name}`}>
        <Input name="nome" type="text" label="Nome:" />
      </div>
      <Input
        placeholder="contato@email.com"
        name="email"
        type="email"
        label="Email:"
      />
      <Input
        name="telefone"
        type="number"
        label="Telefone:"
        placeholder="(99) 99999-9999"
      />
      <div className={`${styles.message}`}>
        <TextArea label="Mensagem:" name="mensagem" rows={6} />
      </div>
      <ReCAPTCHA
        sitekey="6Lc-8ekkAAAAAJFSQQYalL7MBgOJigOI-DlNIHiy"
        onChange={onChange}
      />
      <div className={`${styles.btn}`}>
        <Button>Enviar</Button>
      </div>
    </form>
  );
};

export default Formulario;
