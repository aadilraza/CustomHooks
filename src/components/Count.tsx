import { useCounter } from '../customHooks/useCounter';

const Count = () => {
  const { count, add, subtract } = useCounter(0);
  const addEventHandler = () => {
    add(); // or subtract();
  };

  const subtractEventHandler = () => {
    subtract();
  };
  return (
    <>
    <button onClick={addEventHandler}>Add Count!</button>
    <button onClick={subtractEventHandler}>Subtract Count!</button>
    <p>{count}</p>
    </>
  );
}

export default Count;
