import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { ChildClass } from "./ChildClass";

function App() {
  const [isShow, showHideAction] = useState(true);

  const childComponent = isShow ? <ChildClass /> : null;

  function clickHandler() {
    return showHideAction((s) => !s);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-auto">
          <button className="btn btn-danger" onClick={clickHandler}>
            Show / Hide
          </button>
        </div>
      </div>
      {childComponent}
    </div>
  );
}

export default App;
