import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button } from "~/components/button/button";
import { Container } from "~/components/container/container";
import { Logo } from "~/components/icons/logo";
import { Input } from "~/components/input/input";

export default component$(() => {
  const handleSubmit = () => {
    console.log("submitted");
  };
  return (
    <Container>
      <div
        class="
                flex 
                justify-center 
                items-center 
                h-screen
              "
      >
        <div
          class=" 
                max-w-[350px]
                w-full
                p-3
                "
        >
          <h3 class="text-2xl gap-3 flex">
            <Logo />
            Register
          </h3>
          <p class="text-neutral-500">Create an Account and nail your goals.</p>
          <div class="mt-4">
            <form>
              <div class="gap-3">
                <div>
                  <label>Email</label>
                  <Input placeholder="Email" />
                  <span class="text-xs text-neutral-500">
                    Enter a valid email
                  </span>
                </div>
                <div>
                  <label>Password</label>
                  <Input placeholder="Password" />
                </div>
                <div class="mt-3 flex justify-center">
                  <Button class="px-7">Register</Button>
                </div>
              </div>
            </form>
            <div class="flex flex-col items-center mt-3">
              <div class="flex gap-2 items-center">
                <span class="text-sm text-neutral-500">
                  Already have an account?
                </span>
                <span class="font-medium">
                  <Link href="/register">Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
});
