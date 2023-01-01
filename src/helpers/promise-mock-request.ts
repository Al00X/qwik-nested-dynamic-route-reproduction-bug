export function fakeFetch<T>(data: T): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, 5000);
  })
}
