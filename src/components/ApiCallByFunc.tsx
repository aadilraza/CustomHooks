import { http } from '../Functions/ApiService';
import { returnData } from '../Functions/fetch';
import { Country } from '../Model/Country';


const ApiCallByFunc: React.FC = () => {
  const data = returnData().then(() => {


  });

  return (
    <>
      <h1>New component</h1>
      {/* {data ? (
        <ul>
          {data.map((i, index) => (
            <li key={index}>
              County Name: {i.name}, Country Name in native Language:{' '}
              {i.nativeName}
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading</div>
      )} */}
    </>
  );
};
export default ApiCallByFunc;
