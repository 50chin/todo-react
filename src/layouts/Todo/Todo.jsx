import { Item } from '../../components/Item/Item';
import { List } from '../../components/List/List';
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
          <div className={s.todo__center}>
            <List>
              <Item className={s.todo__item}>
                <Input type="checkbox" />
                <p className={s.todo__text}>
                  Сделать удаление каждого элемента по крестику справа
                </p>
                <Button variant="icon">❌</Button>
              </Item>
            </List>
          </div>
          <div className={s.todo__bottom}>
            <Button variant="deleteCompleted">Удалить завершенные</Button>
            <Button variant="deleteAll">Удалить все</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
