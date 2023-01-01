import { component$ } from "@builder.io/qwik";
import { StaticGenerateHandler, useLocation } from "@builder.io/qwik-city";
import { fakeFetch } from "~/helpers/promise-mock-request";

export default component$(() => {
  const {params} = useLocation();
  return <div>Category Param: {params.category}</div>
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const types = await fakeFetch(['first', 'second', 'third', 'forth']);
  return {
    params: types.map((x) => ({ category: x })),
  }
}
