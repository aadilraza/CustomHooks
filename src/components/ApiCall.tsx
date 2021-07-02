import { useFetch } from '../customHooks/useFetch';
import { Country} from '../Model/Country';
const ApiCall: React.FC = () => {
  const data = useFetch<[Country]>({
    url: 'https://restcountries.eu/rest/v2/all;',
  });

  return (
    <>
      {data ? (
        <ul>
          {data.map((i, index) => (
            <li key={index}>County Name: {i.name}, Country Name in native Language: {i.nativeName}</li>
          ))}
        </ul>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};
export default ApiCall;