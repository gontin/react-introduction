import { useState } from 'react';
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionarTarefa() {
    if(input) {
      setTarefas([...tarefas, input]);
      setInput("");
    }
  }

  function removerTarefa(indexremov) {
    setTarefas(tarefas.filter((txt, index) => index !== indexremov));
  }

  return (
    <div className="caixa">
      <h1>Minha Lista</h1>
      
      <div className="linha">
        <input 
          className="entrada"
          value={input} 
          onChange={e => setInput(e.target.value)} 
          placeholder="Nova tarefa..." 
        />
        <button className="add" onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul className="lista">
        {tarefas.map((tarefa, index) => (
          <li key={index} className="item">
            <span>{tarefa}</span>
            <button className="del" onClick={() => removerTarefa(index)}>Apagar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;