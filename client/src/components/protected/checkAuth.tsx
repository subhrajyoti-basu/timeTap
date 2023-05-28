import { Slot, component$, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import { supabase } from "~/utils/supabase";

export const CheckAuth = component$(() => {
  const loc = useLocation();
  const nav = useNavigate();

  useVisibleTask$(async () => {
    // check if session exists
    const { data } = await supabase.auth.getSession();

    if (!data?.session?.user?.id) {
      nav("/login");
    }
    // if data exists
    if (
      data?.session?.user?.id &&
      (loc.url.pathname == "/login/" || loc.url.pathname == "/register/")
    ) {
      nav("/u/feed");
    }
    // console.log(data);
  });

  return (
    <div>
      <Slot />
    </div>
  );
});
