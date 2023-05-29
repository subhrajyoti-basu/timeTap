import { component$, Slot } from "@builder.io/qwik";
import { GoalColumn } from "~/components/goalbar/goalColumn";
import { ModalProvider } from "~/components/modal/modalProvider";
import { UserNavBar } from "~/components/navbar/userNavBar";
import { CheckAuth } from "~/components/protected/checkAuth";

export default component$(() => {
  return (
    <>
      <CheckAuth>
        <ModalProvider>
          <div class="md:px-3 min-h-screen bg-neutral-900">
            <div class="flex max-w-[1280px] mx-auto">
              <div class="w-[275px] h-screen sticky top-0 lg:block hidden">
                <UserNavBar />
              </div>
              <div class="flex w-full">
                <div
                  class="  
                  max-w-[700px]
                  w-full
                  "
                >
                  <Slot />
                </div>
                <div class="w-full md:block hidden">
                  <div
                    class="
                  max-w-[400px] 
                  w-full
                  mx-auto
                  sticky 
                  top-0 
                  h-screen
                  "
                  >
                    <div class="pt-3 ml-5">
                      <GoalColumn />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalProvider>
      </CheckAuth>
    </>
  );
});
