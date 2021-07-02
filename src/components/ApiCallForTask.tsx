import { useFetch2 } from '../customHooks/useFetch2';
import { Task } from '../Model/Task';
import { useFetchData } from '../customHooks/useFetchData';

const ApiCallForTask: React.FC = () => {
  // const task: Task = {
  //   name: 'Go for Walk',
  //   description: 'Going for walk is good for health',
  // };
  let request: RequestInit = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Go for Walk',
      description: 'Going for walk is good for health',
    }),
  };

  // const BtnClcik = () => {
  //   const data = useFetch2<Task>({
  //     url: 'https://localhost:44320/task',
  //     init: request,
  //   });
  //   console.log(data);
  // };

  const { data } = useFetchData('https://localhost:44320/task');

  // const {res, apiMethod} = usePostData({
  //   url: 'https://localhost:44320/task',
  //   headers: { ContentType: 'text/plain'},
  //   payload: {
  //     name: 'Go to university',
  //     description: 'Go to university, to attend socialogy class',
  //   },
  // });

  return (
    <>
      {data ? <h1>Task Created: res.name</h1> : <div>Loading</div>}

      {/* <button
        onClick={() => { apiMethod() }}>
        Submit data
      </button> */}
    </>
  );
};
export default ApiCallForTask;
