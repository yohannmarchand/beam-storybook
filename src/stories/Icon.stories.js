import icons from "../assets/icons";
import Icon from "../components/Icon.vue";

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.entries(icons).map(([key]) => key)
    },
  },
};

const Template = (args) => ({
  components: { Icon },
  setup() {
    return { args };
  },
  template: '<div><Icon v-bind="args" class="h-6 w-6"/></div>',
});

export const Base = Template.bind({});