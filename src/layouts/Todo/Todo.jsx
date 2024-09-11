import { useEffect, useRef } from 'react';
import { Item } from '../../components/Item/Item';
import { List } from '../../components/List/List';
import { Button } from '../../ui/Button/Button';
import { Form } from '../../ui/Form/Form';
import { Input } from '../../ui/Input/Input';
import { Container } from '../Container/Container';
import s from './Todo.module.scss';

export const Todo = ({
  dataToDo,
  deleteCrossHandle,
  deleteAllHandle,
  deleteCompletedHandle,
  inputHandle,
  inputForm,
  inputValue,
  checkedChangeHandle,
}) => {
  const scrollTodoList = useRef(null);
  useEffect(() => {
    if (scrollTodoList.current) {
      scrollTodoList.current.scrollTop = -scrollTodoList.current.scrollHeight;
    }
  }, [dataToDo]);

  return (
    <section className={s.todo}>
      <Container>
        <div className={s.todo__wrapper}>
          <Form inputForm={inputForm} className={s.todo__form}>
            <Input
              inputValue={inputValue}
              onChange={inputHandle}
              type="text"
              placeholder="Сделать удаление завершенных и всех"
            />
            <Button variant="add" onClick={inputForm}>
              Добавить
            </Button>
          </Form>
          {!!dataToDo.length && (
            <>
              <div ref={scrollTodoList} className={s.todo__center}>
                <List className={s.todo__list}>
                  {dataToDo.map((el) => (
                    <Item key={el.id} className={s.todo__item}>
                      <Input
                        type="checkbox"
                        checked={el.isDone}
                        onChange={() => checkedChangeHandle(el.id)}
                      />
                      <p className={s.todo__text}>{el.text}</p>
                      <Button
                        variant="icon"
                        onClick={() => deleteCrossHandle(el.id)}
                      >
                        ❌
                      </Button>
                    </Item>
                  ))}
                </List>
              </div>
              <div className={s.todo__bottom}>
                <Button
                  variant="deleteCompleted"
                  onClick={deleteCompletedHandle}
                >
                  Удалить завершенные
                </Button>
                <Button variant="deleteAll" onClick={deleteAllHandle}>
                  Удалить все
                </Button>
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};
