import clsx from 'clsx';
import s from './Input.module.scss';

export const Input = ({ type, placeholder, checked, onChange, inputValue }) => {
  return (
    <input
      checked={type === 'checkbox' ? checked : undefined}
      value={inputValue}
      onChange={onChange}
      className={clsx(s.input, {
        [s.input_text]: type === 'text',
        [s.input_checkbox]: type === 'checkbox',
      })}
      type={type}
      placeholder={placeholder}
    />
  );
};
