<template>
  <div class="circle flex-center">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.circle {
  width: 48px;
  height: 48px;
  padding: 9px 0px 9px 0px;
  border-radius: 28px;
  background: #F4EBFF;
  border: 8px solid #F9F5FF;

  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: #6941C6;
}
</style>