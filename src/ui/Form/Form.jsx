import s from './Form.module.scss';

export const Form = ({ children, className }) => {
  return <form className={className}>{children}</form>;
};
