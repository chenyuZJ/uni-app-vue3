// let API_PREFIX:string = 'xxx'; // 测试环境api域名
let API_PREFIX = 'xxx'; // 正式环境api域名

if (process.env.NODE_ENV === 'production') {
  API_PREFIX = 'https://api.baiyunairport.top'; // 正式环境api域名
}

const OSS_URL = 'xxx'; // 图片地址
const OSS_URL_ACTIVITY = 'xxx'; // 活动图片地址

export { API_PREFIX, OSS_URL, OSS_URL_ACTIVITY };
