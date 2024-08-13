import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const DEFAULT_VALUE = ["A", "B", "C"];

function App() {
  const [array, setArray] = useState(DEFAULT_VALUE);
  const [value, setValue] = useState("DEFAULT");

  function removeFirst() {
    setArray(currentArray => {
      return currentArray.slice(1);
    });
  }

  function removeElement(element) {
    setArray(currentArray => {
      return currentArray.filter(item => item !== element);
    });
  }

  function removeLast() {
    setArray(currentArray => {
      return currentArray.slice(0, -1);
    });
  }

  function addStart(element) {
    setArray(currentArray => {
      return [element, ...currentArray];
    });
  }

  function addEnd(element) {
    setArray(currentArray => {
      return [...currentArray, element];
    });
  }

  function clearArray() {
    setArray([]);
  }

  function resetArray() {
    setArray(DEFAULT_VALUE);
  }

  function replaceAToH() {
    setArray(currentArray => {
      return currentArray.map(item => {
        if(item === 'A') {
          return 'H';
        }
        return item;
      })
    });
  }

  function addIndex(item, index) {
    setArray(currentArray => {
      return [...currentArray.slice(0, index), item, ...currentArray.slice(index)];
    })
  }

  return (
    <div className="container mt-5">
      <h3>Array Values : {array.join(",")}</h3>

      <div className="form-group mt-4">
        <button onClick={removeFirst} className="btn btn-primary me-2">Remove First</button>
        <button onClick={removeLast} className="btn btn-primary me-2">Remove Last</button>
        <button onClick={() => removeElement("B")} className="btn btn-primary me-2">Remove all B's</button>
        <button onClick={() => addStart("X")} className="btn btn-primary me-2">Add Element in Beginning</button>
        <button onClick={() => addEnd("Z")} className="btn btn-primary me-2">Add Element in End</button>
        <button onClick={clearArray} className="btn btn-primary me-2">Clear</button>
        <button onClick={resetArray} className="btn btn-primary me-2">Reset</button>
        <button onClick={replaceAToH} className="btn btn-primary me-2">Replace A with H</button>
        <button onClick={() => addIndex("T", 1)} className="btn btn-primary">Add Element at Index</button>
      </div>

      <div className="row form-group mt-4 align-items-center">
        <div className="col-auto">
          <input className="form-control input-sm" type="text" value={value} onChange={e => setValue(e.target.value)} />
        </div>
        <div className="col-auto">
          <button onClick={() => addStart(value) }className="btn btn-primary">Add Item</button>
        </div>
      </div>
    </div>
  );
}

export default App;
