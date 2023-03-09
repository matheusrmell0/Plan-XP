import { ChangeEventHandler } from 'react';
import styles from './Input.module.css';

const Input = ({
  onChange,
  onBlur,
  placeholder,
  type,
  label,
  name,
  value,
  error,
}: {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type: string;
  label: string;
  name: string;
  value?: string;
  error?: string;
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
        <input
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          id={name}
          name={name}
          className={styles.input}
          type={type}
          value={value}
        />
      </label>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
