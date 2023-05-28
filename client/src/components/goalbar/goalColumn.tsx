import { component$ } from "@builder.io/qwik";
import { GoalCard } from "./goalCard";

export const GoalColumn = component$(() => {
  return (
    <div>
      <h4 class="text-xl text-white font-semibold">Goals Under Progress</h4>
      <div class="mt-4">
        <div class="space-y-0.5">
          <GoalCard />
          <GoalCard />
          <GoalCard />
        </div>
      </div>
    </div>
  );
});
