import s from './Form.module.scss';

export const Form = ({ children, className, inputForm }) => {
  return (
    <form onSubmit={inputForm} className={className}>
      {children}
    </form>
  );
};
