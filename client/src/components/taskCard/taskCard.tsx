import { component$ } from "@builder.io/qwik";
import { Button } from "../button/button";

export const TaskCard = component$(() => {
  return (
    <div>
      <div class="px-4 bg-white rounded-3xl py-2 flex justify-between items-center">
        <div class="flex gap-3 items-center">
          <div>
            <div class="bg-neutral-900 px-2 pt-2 pb-3 rounded-full text-white flex items-center flex-col">
              <span class="text-lg font-medium leading-4">22</span>
              <span class="text-xs tracking-normal">Mar</span>
            </div>
          </div>
          <div>
            <div class="text-base leading-4 font-medium">
              Create a twitter Post
            </div>
            <p class="text-sm text-neutral-500">
              Routine to gain twitter follower
            </p>
          </div>
          {/* <div class="flex gap-3 items-center">
            <span class="text-sm font-semibold">Goal</span>
            <span class="text-xs">Gain twitter follower</span>
          </div> */}
        </div>
        <div class="flex flex-col justify-between">
          <Button
            class="
            border
            bg-white
            text-sm
            hover:bg-neutral-100
          "
          >
            Done
          </Button>
          {/* <p class="text-xs italic">2 left for today</p> */}
        </div>
      </div>
    </div>
  );
});
