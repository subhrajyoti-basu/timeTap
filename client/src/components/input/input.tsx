import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

interface InputProps {
  value?: string | undefined;
  placeholder?: string;
  type?: string;
  class?: string;
}

export const Input = component$<InputProps>((props) => {
  return (
    <div>
      <input
        {...props}
        value={props.value}
        placeholder={props.placeholder}
        class={twMerge(
          `
                w-full
                border
                rounded-md
                px-2
                py-1
                focus:outline
      `,
          props.class
        )}
      />
    </div>
  );
});
