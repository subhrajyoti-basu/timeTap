import { $, TaskCtx, component$, useSignal } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { InitialValues, useForm, zodForm$ } from "@modular-forms/qwik";
import { z } from "zod";
import { Button } from "~/components/button/button";
import { Input } from "~/components/input/input";

const taskSchema = z.object({
  name: z.string(),
  type: z.string(),
  description: z.string(),
  deadline: z.number(),
});

type TaskForm = z.infer<typeof taskSchema>;

export const CreateTask = component$(() => {
  // set initial values
  const useTaskFormLoader = useSignal<TaskForm>({
    name: "",
    type: "",
    description: "",
    deadline: Date.now(),
  });

  const [, { Form, Field }] = useForm<TaskForm>({
    loader: useTaskFormLoader,
    validate: zodForm$(taskSchema),
  });

  const handleSubmit = $((value: TaskForm) => {
    console.log(value);
  });

  return (
    <div class="mt-3">
      <Form onSubmit$={handleSubmit}>
        <Field name="name">
          {(field, props) => (
            <div class="space-y-1">
              <label class="text-sm font-medium">Task Name</label>
              <Input
                {...props}
                value={field.value}
                class="bg-neutral-800 border-neutral-700 placeholder:text-neutral-500"
                placeholder="Enter Task Name"
              />
            </div>
          )}
        </Field>
        <Button type="submit">submit</Button>
      </Form>
    </div>
  );
});
