import { MouseEventHandler } from 'react';
import styles from './Button.module.css';

const Button = ({
  children,
  onClick,
  ...props
}: {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <button onClick={onClick} {...props} className={styles.button}>
        {children} ↘
      </button>
    </>
  );
};

export default Button;
