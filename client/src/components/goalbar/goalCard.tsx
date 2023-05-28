import { component$ } from "@builder.io/qwik";
import { GoalCircular } from "./goalCircular";

export const GoalCard = component$(() => {
  return (
    <div class="rounded-3xl bg-white py-3 px-6">
      <div class="flex justify-between w-full items-center">
        <div class="flex flex-col gap-1">
          <div>
            <h4 class="text-lg leading-5 font-semibold">
              Gain twitter Follower
            </h4>
            <p class="text-sm text-neutral-600">
              Routine to gain twitter followers
            </p>
          </div>
          <div class="flex gap-2 items-center">
            <span class="font-semibold text-sm">Starting</span>
            <span class="text-xs text-neutral-600">2nd May, 3023</span>
          </div>
        </div>
        <div>
          <GoalCircular />
        </div>
      </div>
    </div>
  );
});
