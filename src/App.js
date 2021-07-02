import CheckWindow from './components/CheckWindow';
import Count from './components/Count';
// import ApiCallForTask from './components/ApiCallForTask';
// import ApiCallByFunc from "./components/ApiCallByFunc";
 import NewMethodTest from "./components/NewMethodTest";

const App = () => {
  return (
    <>
      <div style={{ paddingTop: '12px' }}>
        <CheckWindow />
      </div>

      <div style={{ paddingTop: '12px' }}>
        <Count />
      </div>

      {/* <div style={{ paddingTop: '12px' }}>
        <ApiCall />
      </div> */}

      {/* <div style={{ paddingTop: '12px' }}>
        <ApiCallForTask />
      </div> */} 
      
      {/* <div style={{ paddingTop: '12px' }}>
        <ApiCallByFunc />
      </div>   */}
      
       <div style={{ paddingTop: '12px' }}>
        <NewMethodTest />
      </div>
    </>
  );
};

export default App;