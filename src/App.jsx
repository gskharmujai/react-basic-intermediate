import "bootstrap/dist/css/bootstrap.min.css";
import { NameCounter } from "./NameCounter";
import { NameCounterClass } from "./NameCounterClass";

function App() {
  return (
    <div className="container mt-5">
      <NameCounter />
      <hr/>
      <NameCounterClass />
    </div>
  );
}

export default App;