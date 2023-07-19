import { useEffect } from "react";
import "./App.css";
function App() {
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const response = await fetch("http://localhost:3000/todos?_limit=10");
    const result = await response.json();
    console.log(result);
  }
  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
