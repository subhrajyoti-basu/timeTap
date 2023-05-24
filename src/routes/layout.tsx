import { component$, Slot } from "@builder.io/qwik";
import { NavBar } from "~/components/navbar/navBar";

export default component$(() => {
  return (
    <>
      <Slot />
    </>
  );
});
