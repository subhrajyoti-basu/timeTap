import { $, component$ } from "@builder.io/qwik";
import { Logo } from "../icons/logo";
import { UserSettings } from "./usersettings/userSettings";
import { DropUp } from "../tootltip/tooltip";
import { supabase } from "~/utils/supabase";
import { useNavigate } from "@builder.io/qwik-city";
import { Button } from "../button/button";
import { Modal } from "../modal/modal";
import { CreateTask } from "../modal/modals/createTask";

export const UserNavBar = component$(() => {
  // initialize nav
  const nav = useNavigate();

  const handleSignOut = $(async () => {
    await supabase.auth.signOut();
    nav("/login");
  });
  return (
    <div class="h-full mx-2">
      <div class="flex flex-col justify-between h-full">
        <div class="flex flex-col h-1/2 justify-between">
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
            <div class="space-y-1">
              <Modal modalTitle="Create New Task" modalBody={<CreateTask />}>
                <Button
                  q:slot="trigger"
                  class="
                  w-full 
                  py-3 
                  rounded-2xl
                  bg-white
                  "
                >
                  Create Task
                </Button>
              </Modal>
              <Button
                class="
              w-full 
              bg-white
              py-3 
              rounded-2xl
              "
              >
                Create Goal
              </Button>
            </div>
          </div>
        </div>
        {/* end section */}
        <div>
          {/* user menu */}
          <div class="mb-5">
            <DropUp>
              <UserSettings q:slot="trigger" />
              <div q:slot="body">
                <button
                  class="w-full text-left font-semibold"
                  onClick$={handleSignOut}
                >
                  Logout from account
                </button>
              </div>
            </DropUp>
          </div>
        </div>
      </div>
    </div>
  );
});
