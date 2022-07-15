<template>
  <div class="header-container">
    <Description description="Forms" />
    <div class="titles">
      <Title
        v-if="this.$store.state.actualTab === 'basic'"
        type="forms"
        tabNumber="First"
      />
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
      <Title
        v-else-if="this.$store.state.actualTab === 'success'"
        type="forms"
        tabNumber="Success"
      />
    </div>
  </div>
</template>

<script>
import Title from "@/components/micro/Title/Title.vue";
import Description from "@/components/micro/Description/Description.vue";

export default {
  // eslint-disable-next-line
  name: "Header",
  components: { Title, Description },
};
</script>

<style lang="scss" scooped>
@import "./Header.scss";
</style>
