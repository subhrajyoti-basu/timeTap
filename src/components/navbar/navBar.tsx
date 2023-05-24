import { component$ } from "@builder.io/qwik";
import { Container } from "../container/container";
import { Button } from "../button/button";
import { Link } from "@builder.io/qwik-city";
import { Logo } from "../icons/logo";

export const NavBar = component$(() => {
  return (
    <div class="border-b">
      <Container>
        <div
          class="
                flex
                justify-between
                items-center
                py-3
                "
        >
          <Logo />
          <div class="flex gap-2">
            <Link href="/login">
              <Button class="px-5">Login</Button>
            </Link>
            {/* <Button>Register</Button> */}
          </div>
        </div>
      </Container>
    </div>
  );
});
