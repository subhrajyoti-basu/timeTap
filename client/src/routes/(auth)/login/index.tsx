import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import {
  Link,
  routeLoader$,
  useLocation,
  useNavigate,
  z,
} from "@builder.io/qwik-city";
import { InitialValues, useForm, zodForm$ } from "@modular-forms/qwik";
import { twMerge } from "tailwind-merge";
import { Button } from "~/components/button/button";
import { Container } from "~/components/container/container";
import { LuTwitter } from "~/components/icons/LuTwitter";
import { Logo } from "~/components/icons/logo";
import { Input } from "~/components/input/input";
import { CheckAuth } from "~/components/protected/checkAuth";
import { supabase } from "~/utils/supabase";

// create email validation using zod
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Please enter your email.")
    .email("Invalid Email Format"),
  password: z.string().min(6, "Password needs to be more than 6 characters"),
});

// created type using login schema
type LoginForm = z.infer<typeof loginSchema>;

// set initial values
export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => ({
  email: "",
  password: "",
}));

// component starts here
export default component$(() => {
  // signals
  const loading = useSignal(false);
  const loadingTwitter = useSignal(false);
  const message = useStore({ message: "", status: "error" });

  // initialize useNavigation
  const nav = useNavigate();
  const loc = useLocation();

  const [, { Form, Field }] = useForm<LoginForm>({
    loader: useFormLoader(),
    validate: zodForm$(loginSchema),
  });

  // handle twitter login
  const handleTwitterLogin = $(async () => {
    // change loading to true
    loadingTwitter.value = true;
    await supabase.auth.signInWithOAuth({
      provider: "twitter",
      options: {
        redirectTo: loc.url.origin + "/u/feed",
      },
    });

    // end loader
    loadingTwitter.value = false;
  });

  interface FormEvent {
    email: string;
    password: string;
  }

  const handleSubmit = $(async (value: FormEvent) => {
    // change loading to true
    loading.value = true;

    // create user in supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email: value.email,
      password: value.password,
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
      // send user to feed
      nav("/u/feed");
    }
    // end loader
    loading.value = false;
  });

  return (
    <CheckAuth>
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
              Sign In
            </h3>
            <p class="text-neutral-500">Welcome Back. Let's nail your goals.</p>
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
                      Login
                    </Button>
                  </div>
                </div>
              </Form>
              <div class="mt-2">
                <Button
                  loading={loadingTwitter.value}
                  onClick={handleTwitterLogin}
                  class="
                    bg-sky-400
                    w-full 
                    text-white
                    hover:bg-sky-500
                    "
                >
                  Login with Twitter
                  <LuTwitter class="w-5 h-5" />
                </Button>
              </div>
              <div class="flex flex-col items-center mt-3">
                <span class="text-sm text-neutral-500">
                  <Link href="/forgot-password">Forgotten your password?</Link>
                </span>
                <div class="flex gap-2 items-center">
                  <span class="text-sm text-neutral-500">
                    Don't have an account?
                  </span>
                  <span class="font-medium">
                    <Link href="/register">Register</Link>
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
    </CheckAuth>
  );
});
