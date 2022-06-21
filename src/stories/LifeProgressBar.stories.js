import LifeProgressBar from './LifeProgressBar.svelte';

export default {
  title: 'Time/LifeProgressBar',
  component: LifeProgressBar,
  argTypes: {
    birth: {
      control: 'date',
      defaultValue: new Date(Date.now() - 1000000000)
    },
    death: {
      control: 'date',
      defaultValue: new Date(Date.now() + 1000000000)
    },
    isPercentVisible: {
      control: 'boolean',
      defaultValue: true
    },
    borderRadius: {
      control: {
        type: 'range', 
        min: 0,
        max: 10,
        step: 0.05,
      },
      defaultValue: 1,
      table: {
        category: 'Style'
      },
    },
    color: {
      control: 'color',
      defaultValue: '#000',
      table: {
        category: 'Style'
      }
    },
    borderColor: {
      control: 'color',
      defaultValue: '#000',
      table: {
        category: 'Style'
      }
    }
  },
};

const Template = (args) => ({
  Component: LifeProgressBar,
  props: args,
  on: {
    click: args.onClick,
  },
});

export const Default = Template.bind({});


