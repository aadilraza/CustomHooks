import CheckWindow from './components/CheckWindow';
import Count from './components/Count';
import ApiCall from './components/ApiCall';

const App = () => {
  return (
    <>
      <div style={{ paddingTop: '12px' }}>
        <CheckWindow />
      </div>

      <div style={{ paddingTop: '12px' }}>
        <Count />
      </div>

      <div style={{ paddingTop: '12px' }}>
        <ApiCall />
      </div>
    </>
  );
};

export default App;