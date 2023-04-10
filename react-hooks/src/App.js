import { useState } from "react";

const content = [
  {
    tap: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tap: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTaps = (initialTaps, allTaps) => {
  const [index, setIndex] = useState(initialTaps);
  if (!allTaps || !Array.isArray(allTaps)) {
    return;
  }

  return {
    currentItem: allTaps[index],
    changeItem: setIndex,
  };
};

function App() {
  const { currentItem, changeItem } = useTaps(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tap}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default App;
