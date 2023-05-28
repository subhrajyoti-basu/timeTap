import { component$ } from "@builder.io/qwik";

export const GoalCircular = component$(() => {
  return (
    <div class="relative w-10 h-10 border-2 rounded-full border-neutral-900">
      <div class="absolute inset-0 bg-green-400 rounded-full"></div>
      <div
        class="absolute inset-0 bg-white rounded-full"
        style="clip-path: polygon(0 0, 100% 0, 100% 25%, 0 25%);"
      ></div>
      <div class="absolute flex items-center justify-center inset-0">
        <span class="text-xs font-bold text-gray-800">75%</span>
      </div>
    </div>
  );
});
