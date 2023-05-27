import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import { Link, routeLoader$, useLocation } from "@builder.io/qwik-city";
import { Button } from "~/components/button/button";
import { Container } from "~/components/container/container";
import { Logo } from "~/components/icons/logo";
import { Input } from "~/components/input/input";
import { z } from "zod";
import { supabase } from "~/utils/supabase";
import { twMerge } from "tailwind-merge";
import {
  InitialValues,
  SubmitHandler,
  useForm,
  zodForm$,
} from "@modular-forms/qwik";
import { LuTwitter } from "~/components/icons/LuTwitter";

// create email validation using zod
const registerSchema = z.object({
  email: z
    .string()
    .min(1, "Please enter your email.")
    .email("Invalid Email Format"),
  password: z.string().min(6, "Password needs to be more than 6 characters"),
});

// created type using register schema
type RegisterForm = z.infer<typeof registerSchema>;

// set initial values
export const useFormLoader = routeLoader$<InitialValues<RegisterForm>>(() => ({
  email: "",
  password: "",
}));

// component starts here
export default component$(() => {
  // signals
  const loading = useSignal(false);
  const message = useStore({ message: "", status: "error" });

  // location initialize
  const loc = useLocation();

  const [registerForm, { Form, Field }] = useForm<RegisterForm>({
    loader: useFormLoader(),
    validate: zodForm$(registerSchema),
  });

  const handleSubmit: SubmitHandler<RegisterForm> = $(async (values, event) => {
    // change loading to true
    loading.value = true;

    // create user in supabase
    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        emailRedirectTo: loc.url.origin + "/login",
      },
    });

    // check for error
    if (error) {
      message.message = error?.message;
      message.status = "error";
      loading.value = false;
      return;
    }
    // if not error
    if (data?.user?.id) {
      message.message = "Success please check your email/spam folder";
      message.status = "success";
    }
    // end loader
    loading.value = false;
  });

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
            Sign Up
          </h3>
          <p class="text-neutral-500">Create an Account and nail your goals.</p>
          <div class="mt-4">
            <Form onSubmit$={handleSubmit}>
              <div class="gap-3">
                <Field name="email">
                  {(field, props) => (
                    <div>
                      <label>Email</label>
                      <Input
                        {...props}
                        type="email"
                        value={field.value}
                        placeholder="Enter Your Email"
                      />
                      {field.error && (
                        <span class="text-xs text-neutral-500">
                          {field.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>
                <Field name="password">
                  {(field, props) => (
                    <div>
                      <label>Password</label>
                      <Input
                        {...props}
                        type="password"
                        value={field.value}
                        placeholder="Enter Your Password"
                      />
                      {field.error && (
                        <span class="text-xs text-neutral-500">
                          {field.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>
                <div class="mt-3 flex justify-center">
                  <Button
                    loading={loading.value}
                    type="submit"
                    class="px-7 w-full"
                  >
                    Signup
                  </Button>
                </div>
              </div>
            </Form>
            <div class="mt-2">
              <Button
                class="
                    bg-sky-400
                    w-full 
                    text-white
                    hover:bg-sky-500
                    "
              >
                Signup with Twitter
                <LuTwitter class="w-5 h-5" />
              </Button>
            </div>
            <div class="flex flex-col items-center mt-3">
              <div class="flex gap-2 items-center">
                <span class="text-sm text-neutral-500">
                  Already have an account?
                </span>
                <span class="font-medium">
                  <Link href="/login">Login</Link>
                </span>
              </div>
            </div>
            <div>
              {message?.message && (
                <span
                  class={twMerge(
                    `
                      flex
                      p-2
                      mt-4
                      justify-center
                      rounded
                      border
                      text-sm
                      `,
                    message?.status === "error" &&
                      "bg-rose-200 border-rose-300",
                    message?.status === "success" &&
                      "bg-green-200 border-green-300"
                  )}
                >
                  {message?.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
});
