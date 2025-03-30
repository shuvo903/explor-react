import Batsman from "./batsmen";
import Counter from "./counter";
import Users from "./users";
import "./App.css";
import { Suspense } from "react";
import Friends from "./friends";
import Posts from "./posts";
import Players from "./players";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const featchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
const featchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
};

function App() {

const postsPromise = featchPosts();

  const friendsPromise = featchFriends();
  function handleClick() {
    alert("I am Clicked");
  }
  const handleClic3 = () => {
    alert("clicked 3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;

    alert(newNum);
  };
  return (
    <>
      <h3>Vite + React</h3>
      <Players></Players>

      <Suspense fallback={<h4>Posts are coming...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("i am clicked2");
        }}
      >
        Click Me
      </button>

      <button onClick={handleClic3}>Click me 3</button>

      <button onClick={() => alert("click 4")}>Click me 4</button>

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  );
}

export default App;
