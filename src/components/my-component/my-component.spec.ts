import { newSpecPage } from "@stencil/core/testing";
import { MyComponent } from "./my-component";

describe("test my-component", () => {
  it("count == 0", async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component label="count"></my-component>',
    });

    const element = root.querySelector("#counter");

    expect(element.textContent).toEqual(`count : 0`);
  });
});
