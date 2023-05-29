import {
  $,
  Slot,
  component$,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

export const DropUp = component$(() => {
  // signals
  const isOpen = useSignal<boolean>(false);
  const heightOfElement = useSignal<number>();
  // ref of the element
  const dropdownRef = useSignal<Element>();
  // runs after page load
  useVisibleTask$(({ cleanup }) => {
    const handleOutSideClick = (event: Event) => {
      const targetNode = event.target as Node;
      if (dropdownRef?.value && !dropdownRef?.value?.contains(targetNode)) {
        isOpen.value = false;
      }
    };
    document.addEventListener("mousedown", handleOutSideClick);
    heightOfElement.value = dropdownRef?.value?.getBoundingClientRect().height;
    cleanup(() =>
      document.removeEventListener("mousedown", handleOutSideClick)
    );
  });

  // toggleDropdown
  const toggleDropdown = $(() => {
    isOpen.value = !isOpen.value;
  });

  return (
    <div class="relative" ref={dropdownRef}>
      <div onClick$={toggleDropdown}>
        <Slot name="trigger" />
      </div>
      {isOpen.value && (
        <div
          class={twMerge(
            `
            absolute
            z-10
            bg-neutral-900 
            border 
            border-neutral-800
            drop-shadow-lg 
            text-white 
            w-full
            h-fit  
            dropdown
            rounded-2xl 
            px-4 
            py-2
            mb-1
            pb-4
            `
          )}
          style={`bottom:${heightOfElement.value}px`}
        >
          <Slot name="body" />
        </div>
      )}
    </div>
  );
});
