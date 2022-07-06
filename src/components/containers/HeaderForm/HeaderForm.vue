<template>
  <div class="header-container">
    <Title v-if="this.$store.state.actualTab === 'basic'" type="forms" tabNumber="First" />
    <Title
      v-else-if="this.$store.state.actualTab === 'social'"
      type="forms"
      tabNumber="Second"
    />
    <Title
      v-else-if="this.$store.state.actualTab === 'certificates'"
      type="forms"
      tabNumber="Third"
    />
  </div>
</template>

<script>
import Title from "@/components/micro/Title/Title.vue";

export default {
  // eslint-disable-next-line
  name: "HeaderForm",
  components: { Title },
};
</script>

<style lang="scss" scooped></style>
