import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface Iprops {
  href?: string;
  name?: string;
}

export const NavElement = component$<Iprops>((props) => {
  return (
    <Link href={props.href}>
      <nav
        class="
            text-lg 
            font-semibold 
            "
      >
        {props.name}
      </nav>
    </Link>
  );
});
