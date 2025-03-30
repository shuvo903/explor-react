
import Batsman from './batsmen'
import Counter from './counter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then (res => res.json())



function App() {

  function handleClick() {
    alert('I am Clicked')
  }
  const handleClic3 = () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;

    alert(newNum);
  }
  return (
    <>

      <h3>Vite + React</h3>

      <Batsman ></Batsman>
      <Counter ></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2() {
        alert('i am clicked2')
      }}>Click Me</button>


      <button onClick={handleClic3}>Click me 3</button>


      <button onClick={() => alert('click 4')}>Click me 4</button>


      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  )
}

export default App
