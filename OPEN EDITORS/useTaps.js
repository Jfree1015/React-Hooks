export const useTaps = (initialTaps, allTaps) => {
  const [index, setIndex] = useState(initialTaps);
  if (!allTaps || !Array.isArray(allTaps)) {
    return;
  }

  return {
    currentItem: allTaps[index],
    changeItem: setIndex,
  };
};
