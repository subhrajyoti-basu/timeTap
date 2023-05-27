import { component$ } from "@builder.io/qwik";
import { CheckAuth } from "~/components/protected/checkAuth";

export default component$(() => {
  return (
    <CheckAuth>
      <div>feed page</div>;
    </CheckAuth>
  );
});
