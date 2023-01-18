<template>
  <component
      :is="href ? 'a' : 'button'"
      class="cursor-pointer rounded flex justify-center items-center disabled:cursor-not-allowed"
      :href="href"
      :class="{
        'bg-blue-400 text-white hover:bg-blue-600 disabled:bg-blue-300 disabled:hover:bg-blue-300': type === 'primary',
        'bg-stone-400 text-black hover:bg-stone-600 disabled:bg-stone-300 disabled:hover:bg-stone-300 ': type === 'secondary',
        'ring-2 ring-blue-400 text-black hover:bg-blue-400 hover:text-white disabled:ring-blue-300 disabled:hover:bg-white disabled:hover:text-black': type === 'primary-outline',
        'ring-2 ring-stone-400 text-black hover:bg-stone-400 disabled:ring-stone-300 disabled:hover:bg-white': type === 'secondary-outline',
        'py-1 text-sm px-4 xl:px-6': size === 'sm',
        'py-2 px-4 md:px-6 xl:px-10': size === 'md',
        'py-4 text-xl px-4 md:px-8 xl:px-10': size === 'lg',
        'py-2 w-full px-4 md:px-6 xl:px-10': size === 'full',
      }"
      @click="onClick"
      :disabled="isLoading || isDisabled"
  >
    <Icon
        v-if="isLoading"
        class="h-6 w-6 mr-3 animate-spin"
        name="circle-outline"
    />

    <Icon
        v-if="icon && !isLoading"
        class="h-6 w-6 mr-2"
        :name="icon"
    />

    <slot />
  </component>
</template>

<script>
import { reactive } from 'vue';
import Icon from "./Icon.vue";
import icons from "../assets/icons";

export default {
  components: {
    Icon
  },

  props: {
    type: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'secondary', 'primary-outline', 'secondary-outline'].indexOf(value) !== -1;
      },
    },
    href:{
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: 'md',
      validator: function (value) {
        return ['sm', 'md', 'lg', 'full'].indexOf(value) !== -1;
      },
    },
    icon: {
      type: String,
      validator: function (value) {
        return Object.entries(icons).indexOf(value) !== -1;
      },
    },
    isLoading: Boolean,
    isDisabled: Boolean,
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      onClick() {
        if (!props.href) {
          emit('click');
        }
      }
    }
  },
};
</script>
