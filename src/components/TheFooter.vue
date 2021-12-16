<template>
  <footer>
    <slot></slot>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  position: fixed;
  bottom: 0;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  background: #15141f;
}
</style>
