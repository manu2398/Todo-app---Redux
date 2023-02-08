import InputForm from "./components/InputForm";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="container">
      <h1>My todos for the day</h1>
      <InputForm />

      <Todos />
    </div>
  );
}

export default App;
