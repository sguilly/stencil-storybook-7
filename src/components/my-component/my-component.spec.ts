import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component label="count"></my-component>',
    });

    console.log('html =', root.innerHTML);

    const element = root.querySelector('#counter');

    expect(element.textContent).toEqual(`count : 0`);
  });
});
