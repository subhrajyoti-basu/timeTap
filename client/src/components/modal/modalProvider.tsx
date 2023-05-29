import {
  $,
  JSXNode,
  Signal,
  Slot,
  component$,
  createContextId,
  useContextProvider,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { LucideX } from "../icons/luClose";

export const ModalContext = createContextId<Signal<boolean>>("modal-context");
export const ModalTitleContext = createContextId<Signal<string>>("modal-title");
export const ModalBodyContext = createContextId<Signal<JSXNode>>("modal-body");

export const ModalProvider = component$((props) => {
  // signals
  const isOpen = useSignal<boolean>(true);
  const modalTitle = useSignal<string | undefined>();
  const modalBody = useSignal<JSXNode>();

  // context providers
  useContextProvider(ModalContext, isOpen);
  useContextProvider(ModalTitleContext, modalTitle);
  useContextProvider(ModalBodyContext, modalBody);

  useVisibleTask$(({ track }) => {
    track(() => isOpen.value);
    // if isOpen
    if (isOpen.value) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  });

  // close handler
  const closeHandler = $(() => (isOpen.value = false));

  return (
    <div>
      {isOpen.value && (
        <div
          class="
                bg-neutral-900/80 
                fixed 
                h-screen 
                w-screen 
                top-0 
                z-50
                flex
                justify-center
                items-center
                "
        >
          <div
            class="
                w-[500px]
                bg-neutral-900
                border
                border-neutral-800
                h-[700px]
                rounded-3xl
                shadow-md
                p-2
          "
          >
            <div class="flex justify-between items-center">
              <span class="text-white p-2 pl-4 text-lg font-semibold">
                {modalTitle.value}
              </span>
              <button
                onClick$={closeHandler}
                class="hover:bg-neutral-800 p-2 rounded-full transition-all"
              >
                <LucideX class="text-white h-6 w-6" />
              </button>
            </div>
            <div class="text-white px-4">{(() => modalBody.value)()}</div>
          </div>
        </div>
      )}
      <div class="bg-neutral-900">
        <div
          class={`
          ${isOpen.value && `scale-[.95] -top-8 `}      
          relative
          transition-all
          `}
        >
          <Slot />
        </div>
      </div>
    </div>
  );
});
