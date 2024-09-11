import { Container } from '../Container/Container';
import { Todo } from '../Todo/Todo';
import s from './Main.module.scss';

export const Main = ({
  dataToDo,

  deleteAllHandle,
  deleteCompletedHandle,
  inputHandle,
  inputForm,
  inputValue,
  checkedChangeHandle,
  deleteCrossHandle,
}) => {
  return (
    <main>
      <Todo
        inputForm={inputForm}
        inputValue={inputValue}
        dataToDo={dataToDo}
        deleteCrossHandle={deleteCrossHandle}
        deleteAllHandle={deleteAllHandle}
        deleteCompletedHandle={deleteCompletedHandle}
        inputHandle={inputHandle}
        checkedChangeHandle={checkedChangeHandle}
      />
    </main>
  );
};
