import { createStore } from "@stencil/store";

const { state, onChange } = createStore({
  title: localStorage.getItem("title") || "Stencil Store",
});

onChange("title", (value) => {
  localStorage.setItem("title", value);
  state.title = value;
});

export { state, onChange };
