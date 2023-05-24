import { component$ } from "@builder.io/qwik";

export interface InputProps {
  placeholder?: string;
  message?: string;
  err?: boolean;
}

export const Input = component$<InputProps>(({ placeholder, err }) => {
  return (
    <div>
      <input
        class={`
                w-full
                border
                rounded-md
                px-2
                py-1
                focus:outline
                ${err && "outline-rose-500 outline outline-1"}

      `}
        placeholder={placeholder}
      />
    </div>
  );
});
