import CheckWindow from './components/CheckWindow';
import Count from './components/Count';
import ApiCallForTask from './components/ApiCallForTask';

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
    </>
  );
};

export default App;