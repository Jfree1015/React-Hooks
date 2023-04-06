import { useState } from "react";

function App() {
  const [item, setItem] = useState(1);

  const increaseItem = () => {
    setItem((currunt) => currunt + 1);
  };

  const dcreaseItem = () => {
    setItem((currunt) => currunt - 1);
  };

  return (
    <div>
      <h1>hello {item}</h1>
      <h2>my React App</h2>
      <button onClick={increaseItem}>Increase</button>
      <button onClick={dcreaseItem}>Dcrease</button>
    </div>
  );
}

export default App;
