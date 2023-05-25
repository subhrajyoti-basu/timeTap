import { QwikDOMAttributes, component$ } from "@builder.io/qwik";

interface InputProps {
  value: string | undefined;
  placeholder?: string;
  type?: string;
}

export const Input = component$<InputProps>((props) => {
  return (
    <div>
      <input
        {...props}
        value={props.value}
        placeholder={props.placeholder}
        class={`
                w-full
                border
                rounded-md
                px-2
                py-1
                focus:outline
      `}
      />
    </div>
  );
});
