import { newE2EPage } from "@stencil/core/testing";

// https://paulcpederson.com/articles/stencil-tests/

describe("my-component", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<my-component></my-component>");
    const element = await page.find("my-component");
    expect(element).toHaveClass("hydrated");
  });

  it("renders count : 0", async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component label="count"></my-component>');
    const element = await page.find("my-component #counter");

    expect(element.textContent).toEqual(`count : 0`);
  });
});
