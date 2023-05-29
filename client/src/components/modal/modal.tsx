import {
  $,
  JSXNode,
  Slot,
  component$,
  useContext,
  useVisibleTask$,
} from "@builder.io/qwik";
import {
  ModalBodyContext,
  ModalContext,
  ModalTitleContext,
} from "./modalProvider";

interface Iprops {
  modalTitle?: string;
  modalBody?: JSXNode;
}

export const Modal = component$<Iprops>((props) => {
  // defining signals
  const isOpen = useContext(ModalContext);
  const modalTitle = useContext(ModalTitleContext);
  const modalBody = useContext(ModalBodyContext);

  // usevisible
  useVisibleTask$(() => {
    props.modalTitle && (modalTitle.value = props.modalTitle);
    props.modalBody && (modalBody.value = props.modalBody);
  });

  // toggle
  const toggleisOpen = $(() => {
    isOpen.value = !isOpen.value;
  });
  return (
    <div class="">
      <div onClick$={toggleisOpen}>
        <Slot name="trigger" />
      </div>
    </div>
  );
});
