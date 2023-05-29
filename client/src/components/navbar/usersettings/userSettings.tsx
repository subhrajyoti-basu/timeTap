import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { LuluMoreHor } from "~/components/icons/luMoreHor";

interface Iprops {
  clean?: boolean;
  class?: string;
}

export const UserSettings = component$<Iprops>((props) => {
  return (
    <div>
      <div
        class={twMerge(
          `
      flex 
      justify-between
      items-center 
      p-2 
      rounded-full
      hover:bg-neutral-800
      transition-all
      cursor-pointer
      text-white
      `,
          props.class
        )}
      >
        <div class="flex items-center gap-3">
          <div class="h-12 w-12 rounded-full overflow-hidden border-2 border-neutral-600">
            <img src="https://i.pravatar.cc/300" class="object-cover" />
          </div>
          {!props.clean && (
            <div>
              <p class="text-sm font-semibold">devSuby</p>
              <p class="text-xs">@devSuby</p>
            </div>
          )}
        </div>
        {!props.clean && (
          <div class="mr-2">
            <LuluMoreHor />
          </div>
        )}
      </div>
    </div>
  );
});
