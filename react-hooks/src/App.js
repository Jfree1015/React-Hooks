import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  let willUpdate = true;
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

function App() {
  const maxLen = (value) => {
    return value.length <= 10;
  };
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <h1>hello </h1>
      <h2>my React App</h2>
      <input placeholder={name.value} {...name} />
    </div>
  );
}

export default App;
