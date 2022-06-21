import Image from './Image.svelte';

export default {
  title: 'Images/Image',
  component: Image,
  argTypes: {
    imageUrl: {
        control: 'text',
        defaultValue: 'http://placekitten.com/200/300'
    },
    altText: {
        control: 'text',
        defaultValue: 'Alt Text'
    }
  },
};

const Template = (args) => ({
  Component: Image,
  props: args,
  on: {
    click: args.onClick,
  },
});

export const Default = Template.bind({});


