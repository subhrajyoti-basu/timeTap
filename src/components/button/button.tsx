import { Slot, component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Spinner } from "../icons/spinner";

export interface Iprops {
  class?: string;
  size?: string;
  type?: string;
  loading?: boolean;
}

export const Button = component$<Iprops>((props) => {
  return (
    <button
      class={twMerge(
        `
        px-3 
        py-1 
        bg-slate-200 
        rounded-full
        cursor-pointer
        hover:bg-slate-300
        transition
        flex
        justify-center
        items-center
        gap-3
        font-medium
        `,
        props.class
      )}
    >
      {props.loading && (
        <span>
          <Spinner />
        </span>
      )}
      <Slot />
    </button>
  );
});
