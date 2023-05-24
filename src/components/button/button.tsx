import { Slot, component$ } from "@builder.io/qwik";

export interface Iprops {
  class?: string;
  size?: string;
}

export const Button = component$<Iprops>((props) => {
  return (
    <button
      class={`
            px-3 
            py-1 
            bg-slate-200 
            rounded-full
            cursor-pointer
            hover:bg-slate-300
            transition
            font-medium
            ${props.class}

            `}
    >
      <Slot />
    </button>
  );
});
