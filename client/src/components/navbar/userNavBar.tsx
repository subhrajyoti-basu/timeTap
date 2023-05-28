import { component$ } from "@builder.io/qwik";
import { Logo } from "../icons/logo";
import { UserSettings } from "./usersettings/userSettings";

export const UserNavBar = component$(() => {
  return (
    <div class="h-full pr-2">
      <div class="flex flex-col justify-between h-full">
        <div class="flex flex-col h-1/4 justify-between">
          <div class="my-3">
            <Logo />
          </div>

          {/* menu secttion */}
          <div>
            <div>
              {/* <NavElement name="Feed" />
              <NavElement name="Goals" />
              <NavElement name="Task" /> */}
            </div>
          </div>
        </div>
        {/* end section */}
        <div>
          {/* buttons */}
          <div></div>
          {/* user menu */}
          <div class="mb-5">
            <UserSettings />
          </div>
        </div>
      </div>
    </div>
  );
});
