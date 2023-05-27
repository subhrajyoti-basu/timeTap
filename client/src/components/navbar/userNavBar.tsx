import { component$ } from "@builder.io/qwik";
import { Logo } from "../icons/logo";
import { Link } from "@builder.io/qwik-city";

export const UserNavBar = component$(() => {
  return (
    <div>
      <div>
        <div class="my-3">
          <Logo />
        </div>
        <div>
          <div>
            <ul>
              <li>
                <Link>
                  <nav class="text-lg font-semibold">Feed</nav>
                </Link>
              </li>
              <li>
                <Link>
                  <nav class="text-lg font-semibold">Goals</nav>
                </Link>
              </li>
              <li>
                <Link>
                  <nav class="text-lg font-semibold">Task</nav>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});
