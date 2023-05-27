import { component$, Slot } from "@builder.io/qwik";
import { Container } from "~/components/container/container";
import { NavBar } from "~/components/navbar/navBar";
import { UserNavBar } from "~/components/navbar/userNavBar";

export default component$(() => {
  return (
    <>
      <Container>
        <div class="flex">
          <div class="max-w-[321px] w-full h-screen ">
            <UserNavBar />
          </div>
          <div class=" w-full flex-1 h-screen bg-white border-x"></div>
          <div class="max-w-[430px] w-full h-screen "></div>
        </div>
        <Slot />
      </Container>
    </>
  );
});
