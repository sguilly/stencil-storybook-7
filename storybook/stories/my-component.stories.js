export default {
  title: "components/JS/my-component",
  component: "my-component",
};

export const Button5 = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Button6 = {
  args: {
    primary: true,
    label: "Button",
  },

  loaders: [
    async () => {
      localStorage.setItem("title", "Button6");
    },
  ],
};
