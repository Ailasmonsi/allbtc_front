<template>
  <div class="blue-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "blue-button",
};
</script>

<style scoped lang="scss">
.blue-button {
  width: fit-content;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 107.6%;
  color: #ffffff;
  background: linear-gradient(84.14deg, #3f7bdd 8.75%, #4282ec 92.01%);
  border-radius: 5px;
}
</style>
