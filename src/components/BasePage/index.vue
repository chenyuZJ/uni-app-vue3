<template>
  <view class="base-page">
    <slot></slot>
    <AuthorizePopup></AuthorizePopup>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthorizePopup from '../AuthorizePopup/index.vue';
export default defineComponent({
  setup() {},
  components: { AuthorizePopup },
});
</script>
