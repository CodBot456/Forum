import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  let [data, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(json => {

        console.log(data)
        setData(json)
      })
  }, [])

  let todo
  todo = data.map((el) => <TooDoList completed={el.completed} id={el.id} title={el.title} userId={el.userId} />)
  // let list_data = [
  //   // { name: "Шашлык с картофелем", info: "соус на выбор", bill: "550 Р" },
  //   // { name: "Лосось с картофельными драниками", info: "имбирный тар-тар", bill: "610 Р" },
  //   // { name: "Медальоны из телятины", info: "яблоки и брусничный соус", bill: "880 Р" },
  //   // { name: "Пельмени из ладожской щуки и лосося", info: "топленое масло и красная икра", bill: "510 Р" }
  // ]
  // let todo = list_data.map((el) => <TooDoList name={el.name} info={el.info} bill={el.bill} />)

  return (
    <div className="App">
      <p>menu </p>
      {todo}

    </div>
  );
}

export default App;

function TooDoList(props) {
  return (
    <div>
      <ul>
        <li>{props.completed ? <h1>Completed</h1> : <h1>no Completed</h1>}</li>
        <li>{props.id}</li>
        <li>{props.title}</li>
        <li>{props.userId}</li>
      </ul>
    </div>
  )
}
// completed: false

// id: 1

// title: "delectus aut autem"

// userId: 1