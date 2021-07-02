import { Country } from "./../Model/Country";

async function http<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  return await response.json();
}

async function returnData() {
  const data = await http<Country[]>('https://localhost:44320/task');
  return data;
}

export { returnData };
