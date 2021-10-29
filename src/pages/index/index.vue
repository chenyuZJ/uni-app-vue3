<template>
  <BasePage>
    <view class="content">
      <image class="logo" src="../../static/logo.png"></image>
      <view>
        <text class="title">{{ title }}</text>
      </view>
      <view>
        <QrCode
          class="qrcode-box-mini"
          val="123456"
          size="430"
          onval="true"
          loadMake="true"
        ></QrCode>
      </view>
    </view>
  </BasePage>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  import BasePage from '../../components/BasePage/index.vue';
  import QrCode from '../../components/QrCode/index.vue';
  export default defineComponent({
    setup() {
      const store = useStore();
      store.commit('changeAuthPopup', true);
      return {
        title: 'hello',
      };
    },
    components: { BasePage, QrCode },
  });
</script>

<style lang="less" scoped>
  @import './index.less';
</style>
