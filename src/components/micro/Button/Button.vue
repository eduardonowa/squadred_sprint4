<template>
  <div class="button-container">
    <button
      class="classButton"
      v-if="type === '0'"
      id="button0"
      @click.prevent="event"
    >
      {{ msg }} <img class="img0" src="@/assets/next.png" alt="next image" />
    </button>
    <button
      class="classButton"
      v-else-if="type === '1'"
      id="button1"
      @click.prevent="event"
    >
      <img src="@/assets/check.png" class="img1" alt="check image" />{{ msg }}
    </button>
    <button
      class="classButton"
      v-else-if="type === '2'"
      id="button2"
      @click.prevent="event"
    >
      <img src="@/assets/plus.png" class="img2" alt="plus image" />{{ msg }}
      <img src="@/assets/next.png" class="img0" alt="next image" />
    </button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Button",
  props: {
    msg: String,
    type: String,
    event: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scooped>
@import "./Button.scss";
</style>
