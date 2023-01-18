import Button from './../components/Button.vue';
import icons from "../assets/icons";

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: {},
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'primary-outline', 'secondary-outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full'],
    },
    icon: {
      control: { type: 'select' },
      options: Object.entries(icons).map(([key]) => key)
    },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args"> {{ args.text || "Action"}} </Button>',
});

export const Solid = Template.bind({});
Solid.args = {
  type: 'primary',
};

export const Outline = Template.bind({});
Outline.args = {
  type: 'primary-outline',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

export const Full = Template.bind({});
Full.args = {
  size: 'full',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  text: "Loading"
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};



