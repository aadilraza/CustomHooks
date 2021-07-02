import React, { useState, useEffect, useCallback } from 'react';

export function useFetchData<Payload>(url: string): {
  data: Payload | null;
  isDataFetched: boolean;
} {
  //states
  const [data, setData] = useState<Payload | null>(null);
  const [isDataFetched, setIsDataFetched] = useState<boolean>(false);
  //call to url
  const callAPI = useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d: Payload) => {
        setData(d);
        setIsDataFetched(true);
      });
  }, [url]);

  return { data, isDataFetched//, callAPI 
  };
}
