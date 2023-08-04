function App() {
  function inputMudou(event) {
    console.log(event.target.value);
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
        <li>Regar as Plantas</li>
        <li>Comprar Pão</li>
        <li>Assistir as Aulas</li>
      </ul>
    </div>
  );
}

export default App;
