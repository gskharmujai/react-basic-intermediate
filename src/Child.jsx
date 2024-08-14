import { useEffect, useState } from "react";

export function Child() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("** Render **");
  });

  useEffect(() => {
    console.log("** Hi **");

    return () => {
      console.log("** Bye **");
    };
  }, []);

  useEffect(() => {
    console.log(`** My name is ${name} and I am ${age} years old **`);
  }, [name, age]);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log(`My name is ${name}`);
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [name]);

  return (
    <div className="container mt-2">
      <h2>Counter with Age Function</h2>
      <div className="row mt-4">
        <div className="col-auto">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-auto">
          <button
            className="btn btn-secondary"
            onClick={() =>
              setAge((currentAge) =>
                currentAge > 0 ? currentAge - 1 : currentAge
              )
            }
          >
            -
          </button>
          <label htmlFor="" className="mx-3">
            {age}
          </label>
          <button
            className="btn btn-secondary"
            onClick={() => setAge((currentAge) => currentAge + 1)}
          >
            +
          </button>
        </div>
      </div>
      <h4 className="mt-4">
        My name is {name} and I am {age} years old.
      </h4>
    </div>
  );
}
