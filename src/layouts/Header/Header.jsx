import { Container } from '../Container/Container';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <h1 className={s.header__title}>ToDo List</h1>
      </Container>
    </header>
  );
};
