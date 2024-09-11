import { Button } from '../../ui/Button/Button';
import { Form } from '../../ui/Form/Form';
import { Input } from '../../ui/Input/Input';
import { Container } from '../Container/Container';
import s from './Todo.module.scss';

export const Todo = () => {
  return (
    <section className={s.todo}>
      <Container>
        <div className={s.todo__wrapper}>
          <div className={s.todo__top}>
            <Form className={s.todo__form}>
              <Input
                type="text"
                placeholder="Сделать удаление завершенных и всех"
              />
              <Button variant="add">Добавить</Button>
            </Form>
          </div>
          <div className={s.todo__center}></div>
          <div className={s.todo__bottom}></div>
        </div>
      </Container>
    </section>
  );
};
