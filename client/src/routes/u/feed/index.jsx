import { component$ } from "@builder.io/qwik";
import { TaskCard } from "~/components/taskCard/taskCard";

export default component$(() => {
  return (
    <div>
      <div class="px-6 pt-8 pb-5 bg-white rounded-b-3xl">
        <p class="text-lg">May 5, 2023</p>
        <div class="text-2xl font-medium leading-5 tracking-tighter">
          Today's Tasks
        </div>
        {/* <div class="text-base mt-3">
          <p>Welcome Back 🖐️</p>
          <p>Few steps to nail your next goal</p>
        </div> */}
      </div>
      <div class="task container mt-0.5 space-y-0.5">
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
});
