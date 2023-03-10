import { MouseEventHandler } from 'react';
import styles from './Button.module.css';

const Button = ({
  disabled,
  children,
  onClick,
  ...props
}: Button) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        {...props}
        className={styles.button}
      >
        {children} ↘
      </button>
    </>
  );
};

export default Button;
