import { useEffect, useState } from 'react';
import { Header } from '../layouts/Header/Header';
import { Main } from '../layouts/Main/Main';

function App() {
  const savedToDo = JSON.parse(localStorage.getItem('dataToDo')) ?? [];
  const [inputValue, setInputValue] = useState('');
  const [dataToDo, setDataToDo] = useState(savedToDo);

  const inputForm = (evt) => {
    evt.preventDefault();
    if (!inputValue.trim()) {
      return;
    } else {
      setDataToDo([
        ...dataToDo,
        { id: Date.now(), text: inputValue, isDone: false },
      ]);
    }
    setInputValue('');
  };

  const inputHandle = (evt) => {
    setInputValue(evt.target.value);
  };

  // вызов функции при нажатии btn ❌
  const deleteCrossHandle = (id) => {
    const newToDoList = dataToDo.filter((el) => el.id !== id);
    setDataToDo(newToDoList);
  };
  // функция делает isDone = true / false
  const checkedChangeHandle = (id) => {
    const newTodoList = dataToDo.map((el) => {
      if (el.id === id) {
        return { ...el, isDone: !el.isDone };
      }
      return el;
    });
    setDataToDo(newTodoList);
  };
  // вызов функции при удалении завершенных
  const deleteCompletedHandle = () => {
    const filteredList = dataToDo.filter((el) => !el.isDone);
    setDataToDo(filteredList);
  };

  const deleteAllHandle = () => {
    setDataToDo([]);
  };

  useEffect(() => {
    localStorage.setItem('dataToDo', JSON.stringify(dataToDo));
  }, [dataToDo]);

  return (
    <>
      <Header />
      <Main
        dataToDo={dataToDo}
        inputForm={inputForm}
        deleteCrossHandle={deleteCrossHandle}
        deleteAllHandle={deleteAllHandle}
        deleteCompletedHandle={deleteCompletedHandle}
        inputHandle={inputHandle}
        inputValue={inputValue}
        checkedChangeHandle={checkedChangeHandle}
      />
    </>
  );
}

export default App;
