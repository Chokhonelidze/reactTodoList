function Todo({todo, index, remove}) {
  function handle() {
    remove(index);
  }
  return (
  <div className="todo" key={index} >
   <p>{todo.text}</p> <button onClick={handle}>🦠</button>
  </div>);
}
