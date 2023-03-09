import { ChangeEventHandler } from 'react';
import styles from './TextArea.module.css';

const TextArea = ({
  label,
  onChange,
  value,
  name,
  cols,
  rows,
}: {
  cols?: number;
  rows: number;
  label: string;
  value?: string;
  name: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {label}
        <textarea
          className={`${styles.textArea}`}
          onChange={onChange}
          value={value}
          name={name}
          id={name}
          cols={cols}
          rows={rows}
        ></textarea>
      </label>
    </div>
  );
};

export default TextArea;
