import clsx from 'clsx';
import s from './Input.module.scss';

export const Input = ({ type, placeholder }) => {
  return (
    <input
      className={clsx(s.input, {
        [s.input_text]: type === 'text',
        [s.input_check]: type === 'check',
      })}
      type={type}
      placeholder={placeholder}
    />
  );
};
