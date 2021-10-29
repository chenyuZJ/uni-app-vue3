/**
 * 显示 loading
 * @param {*} title 文字
 * @param {*} mask 是否
 */
export const showLoading = (title = '加载中...', mask = true) => {
  uni.showLoading({
    title,
    mask,
  });
};

/**
 * 显示消息提示
 * @param {*} title 标题
 * @param {*} duration 持续时间
 * @param {*} callBack 回调
 * @param {*} icon 图标
 */
export const showToast = (
  title: string,
  duration = 1500,
  callBack?: Function,
  icon: any = 'none'
) => {
  uni.showToast({
    title,
    duration,
    icon,
    success() {
      setTimeout(() => {
        callBack && callBack();
      }, duration);
    },
  });
};

/**
 * 判断类型
 * @param {*} obj
 * @returns
 */
export const isType = (obj: any) => {
  return Object.prototype.toString
    .call(obj)
    .replace(/^\[object (.+)\]$/, '$1')
    .toLowerCase();
};

/**
 * 保存用户信息到缓存
 * @param {*} data
 * @returns
 */
export const saveUserInfo = (data: any) => {
  return uni.setStorageSync('USER_INFO', data);
};

/**
 * 从缓存里获取用户信息
 * @returns
 */
export const getUserInfo = () => {
  return uni.getStorageSync('USER_INFO');
};
