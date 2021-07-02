import React from 'react'
import useFetchData from '../customHooks/useNewMethod';
const NewMethodTest: React.FC = () => {
  const [data, callAPI] = useFetchData('https://localhost:44320/task');

  return (
    <>
      <button
        onClick={() => {
          callAPI();
        }}
        type='button'
      >
        Submit data
      </button>
    </>
  );
};

export default NewMethodTest;


