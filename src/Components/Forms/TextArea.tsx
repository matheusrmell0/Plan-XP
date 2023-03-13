import styles from './TextArea.module.css';

const TextArea = ({
  placeholder,
  label,
  onChange,
  value,
  name,
  cols,
  rows,
}: TextArea) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {label}
        <textarea
          placeholder={placeholder}
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
