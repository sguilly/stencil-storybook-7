import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components';

import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';

const meta: Meta = {
  title: 'components/TS/my-component',
  tags: ['autodocs'],
  component: 'my-component',
  decorators: [story => html`<div style="padding: 3em; background: #fafafa">${story()}</div>`],
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};
export default meta;

type Story = StoryObj;

export const Button1: Story = {
  name: 'Button...',
  args: {
    label: 'Button',
  },
  play: async ({ args, canvasElement }) => {
    console.log('play', args, canvasElement);
    canvasElement.addEventListener('didLoad', async e => {
      let element: any = canvasElement.querySelector('#btPlus');
      element.click();

      const canvas = within(canvasElement);
      const buttonPlus = canvas.getByText('+');
      const buttonMinus = canvas.getByText('-');

      userEvent.click(buttonPlus);
      userEvent.click(buttonMinus);
    });
  },
};

export const Button2: Story = {
  args: {
    ...Button1.args,
    label: '😄👍😍💯',
  },
};

export const Button3: Story = {
  args: {
    ...Button1.args,
    label: '📚📕📈🤓',
  },
};

export const Button4: Story = {
  loaders: [
    async () => {
      let call = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (call.status == 200) {
        let todo = await call.json();
        return { todo };
      } else {
        throw new Error('Error');
      }
    },
  ],
  render: (args, { loaded: { todo } }) => html`
    <div style="background: red">
      <my-component label="${todo.title}"></my-component>
    </div>
  `,
};
