import { component$ } from "@builder.io/qwik";
import { UserSettings } from "~/components/navbar/usersettings/userSettings";
import { TaskCard } from "~/components/taskCard/taskCard";

export default component$(() => {
  return (
    <div>
      <div class="px-6 pt-6 pb-4 bg-white rounded-b-3xl flex justify-between">
        <div class="">
          <p class="text-lg">May 5, 2023</p>
          <div class="text-2xl font-medium leading-5 tracking-tighter">
            Today's Tasks
          </div>
          {/* <div class="text-base mt-3">
          <p>Welcome Back 🖐️</p>
          <p>Few steps to nail your next goal</p>
        </div> */}
        </div>
        <div class="md:hidden">
          <UserSettings clean class="hover:bg-transparent p-0" />
        </div>
      </div>
      <div class="task container mt-0.5 space-y-0.5">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
});
