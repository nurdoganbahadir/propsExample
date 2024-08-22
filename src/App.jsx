import Dog from "./components/Dog";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const arttir = () => {
    setCount(count+1);
  };
  const azalt = () => {
    if (count > 0) {
      setCount(count-1);
    }
  };

  return (
    <div className="App">
      <Dog
        name="Siberian Husky"
        color="gray"
        img="https://www.elityavru.com/images/irk-bilgileri/kopek-irki/siberian-husky-dog.webp"
      />
      <Dog
        name="Sivas Kangalı"
        color="white"
        img="https://www.sivasekspres.com/files/uploads/news/default/n-a-729005.webp"
      />
      <div>
        <p>{count}</p>
        <button onClick={arttir}>Arttır</button>
        <button onClick={azalt}>Azalt</button>
      </div>
    </div>
  );
}

export default App;
