// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, ToDoList, Input, Button, ListItem } from "./styles";
import { FcFullTrash, FcCheckmark } from "react-icons/fc";

function App() {
  const [list, setList] = useState([
    { id: uuidv4(), task: "Lavar Louça", finished: true },
  ]);
  const [inputTask, setInputTask] = useState("");

  function inputMudou(event) {
    setInputTask(event.target.value);
  }
  function butaoClicado() {
    setList([...list, { id: uuidv4(), task: inputTask, finished: false }]);
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
          {list.map((item) => (
            <>
              <ListItem isFinished={item.finished}>
                <FcCheckmark />
                <li key={item.id}>{item.task}</li>
                <FcFullTrash />
              </ListItem>
            </>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
