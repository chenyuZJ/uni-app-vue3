import { createStore } from 'vuex';
import { getUserInfo, saveUserInfo, showToast } from '../utils';

export default createStore({
  state: {
    userInfo: getUserInfo(),
    isShowPop: false,
    isAuth: false,
  },
  mutations: {
    changeUserInfo(state, data) {
      state.userInfo = data;
      saveUserInfo(state.userInfo);
    },
    // 控制授权弹窗
    changeAuthPopup(state, boolean) {
      state.isShowPop = boolean;
    },
    // 更新授权状态
    updateAuth(state, boolean) {
      if (!boolean) state.userInfo = {};
      state.isAuth = boolean || false;
    },
  },
  actions: {},
});
