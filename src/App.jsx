import { v4 as uuidv4 } from "uuid";

function App() {
  const list = [
    { id: uuidv4(), task: "Regar as Plantas" },
    { id: uuidv4(), task: "Lavar a Louça" },
    { id: uuidv4(), task: "Comprar o Pão" },
    { id: uuidv4(), task: "Tomar Café" },
    { id: uuidv4(), task: "Ver Aulas" },
  ];

  console.log(list);

  function inputMudou(event) {
    console.log(event.target.value);
    list.push({ id: uuidv4(), task: event.target.value });

    console.log(list);
  }
  function butaoClicado() {
    console.log("fui clicado");
  }

  return (
    <div>
      <input
        onChange={inputMudou}
        type="text"
        placeholder="Digite o que tenho para fazer"
      />
      <button onClick={butaoClicado}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
