import { Slot, component$ } from "@builder.io/qwik";

export const Container = component$(() => {
  return (
    <div
      class="
            container
            mx-auto
            px-2
            "
    >
      <Slot />
    </div>
  );
});
