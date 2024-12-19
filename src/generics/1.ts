import axios from "axios";

// interface State<T, U, V, K> {
//   id: T;
//   name: U;
//   data: V;
//   metadata: K;
// }

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

console.log(fetchData);
