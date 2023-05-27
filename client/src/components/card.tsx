import { Slot, component$ } from "@builder.io/qwik";

export const Card = component$(() => {
  return (
    <div>
      <Slot />
    </div>
  );
});
