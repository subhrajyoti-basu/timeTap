import { component$ } from "@builder.io/qwik";

export const Logo = component$(() => {
  return (
    <div class="max-w-[120px]">
      <img src="/logo.svg" />
    </div>
  );
});
