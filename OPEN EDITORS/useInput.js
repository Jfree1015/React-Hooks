export const useInput = (initialValue, Validation) => {
  let willUpdate = true;
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    if (typeof Validation === "function") {
      willUpdate = Validation(value);
    }

    if (willUpdate) {
      setValue(value);
    }
    console.log(value);
  };

  return { value, onChange };
};
