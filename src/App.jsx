// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  ToDoList,
  Input,
  Button,
  ListItem,
  CheckButton,
  Trash,
  NoItemsMessage,
} from "./styles";

function App() {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState("");

  function inputMudou(event) {
    setInputTask(event.target.value);
  }
  function butaoClicado() {
    if (inputTask) {
      setList([
        ...list,
        { id: uuidv4(), task: inputTask, finishedTask: false },
      ]);
    } else {
      alert("Não é possível adicionar tarefa vazia");
    }
  }

  function finishTask(id) {
    const newList = list.map((itemList) =>
      itemList.id === id
        ? { ...itemList, finishedTask: !itemList.finishedTask }
        : itemList
    );

    setList(newList);
  }

  function deleteTask(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }

  return (
    <Container>
      <ToDoList>
        <Input
          onChange={inputMudou}
          type="text"
          placeholder="Digite o que tenho para fazer"
        />
        <Button onClick={butaoClicado}>Adicionar</Button>
        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finishedTask} key={item.id}>
                <CheckButton onClick={() => finishTask(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deleteTask(item.id)} />
              </ListItem>
            ))
          ) : (
            <NoItemsMessage>Não há itens na lista</NoItemsMessage>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
