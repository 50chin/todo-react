import clsx from 'clsx';
import s from './Button.module.scss';

export const Button = ({ children, variant, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        variant === 'icon'
          ? s.button_icon
          : clsx(s.button, {
              [s.button_add]: variant === 'add',
              [s.button_deleteCompleted]: variant === 'deleteCompleted',
              [s.button_deleteAll]: variant === 'deleteAll',
            })
      }
    >
      {children}
    </button>
  );
};
