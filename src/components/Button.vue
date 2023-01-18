<template>
  <button
      type="button" class="bg-blue-400 p-4" @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
