import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Container } from "~/components/container/container";
import { NavBar } from "~/components/navbar/navBar";

export default component$(() => {
  return (
    <>
      <NavBar />
      <Container></Container>
    </>
  );
});

export const head: DocumentHead = {
  title: "timeTap",
  meta: [
    {
      name: "description",
      content: "life changes here",
    },
  ],
};
