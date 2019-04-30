export const loadState = () => {
  try {
    const serializedState = JSON.parse(localStorage.getItem('state'));

    return serializedState === null ? undefined : serializedState;
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    return undefined;
  }
};
