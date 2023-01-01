import { component$ } from "@builder.io/qwik";
import { StaticGenerateHandler, useLocation } from "@builder.io/qwik-city";
import { fakeFetch } from "~/helpers/promise-mock-request";

export default component$(() => {
  const {params} = useLocation();
  return <div><h3>Category is: {params.category}</h3><h4>Slug is: {params.slug}</h4></div>
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const slugs = await fakeFetch(['12', '34', '56']);
  return {
    params: slugs.map((x) => ({ slug: x })),
  }
}
