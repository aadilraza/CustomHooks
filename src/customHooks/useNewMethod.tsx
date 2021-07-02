import React from "react";
interface returnData{
  data:any,
  callAPI:()=>void
}
const useFetchData= (props:any)  => {
  
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  // You POST method here
  const callAPI = React.useCallback(() => {
    setIsLoading(true);
    fetch(props.url)
      .then((res) => res.json())
      .then((res)=>{
        setIsLoading(false)
        setData(res)
      })
      .catch((error) => {
        setError( error );
      });
  }, [props.url]);
  return [data, callAPI];
};

export default useFetchData ;
