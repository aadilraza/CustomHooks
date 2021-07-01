import useWindowWidth from '../customHooks/useWindowWidth';

const CheckWindow = () => {
  const onSmallScreen = useWindowWidth();
  const addEventHandler = () => {
     alert(onSmallScreen); 
  };

  return (
    <>
    <button onClick={addEventHandler}>Check is Window Small!</button>
    </>
  );
}

export default CheckWindow;
