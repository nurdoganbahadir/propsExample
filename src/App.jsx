import Dog from "./components/Dog";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Dog
        name="Siberian Husky"
        color="gray"
        img="https://www.elityavru.com/images/irk-bilgileri/kopek-irki/siberian-husky-dog.webp"
      />
      <Dog name="Sivas Kangalı" color="white" img="https://www.sivasekspres.com/files/uploads/news/default/n-a-729005.webp" />
    </div>
  );
}

export default App;
