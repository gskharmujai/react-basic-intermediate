import "bootstrap/dist/css/bootstrap.min.css";
import { Counter } from "./Counter";
import { CounterClass } from "./CounterClass";

function App() {
  return (
    <div className="container mt-5">
      <Counter />
      <hr />
      <CounterClass />
    </div>
  );
}

export default App;
