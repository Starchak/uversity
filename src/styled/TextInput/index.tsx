import React from 'react';

import styles from './index.module.scss';

type TextInputProps = {
  className?: string;
  placeholder?: string | null;
  value?: string;
  onChange?: (value: string) => void;
};

const TextInput: React.FC<TextInputProps> = ({
  className,
  placeholder,
  value,
  onChange
}) => {
  return (
    <input
      className={`${styles.text_input} ${className ? className : ''}`}
      placeholder={placeholder || ''}
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    />
  );
};

export { TextInput };
