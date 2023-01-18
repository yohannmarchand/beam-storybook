<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      v-html="icons[name]"
      fill="none"
      stroke="currentColor"
  />
</template>

<script lang="ts">
import icons from "../assets/icons";

export default {
  data() {
    return {
      icons
    }
  },

  props: {
    name: {
      type: String,
      require: true,
    }
  }
}
</script>


