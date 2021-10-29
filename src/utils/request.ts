import { API_PREFIX } from './config';
import { showLoading, showToast } from './index';

interface crRes {
  status: number;
  code: number;
}

const SUCCESS_CODE = [200, 0];
const DEFAULT_HEADERS = { 'Content-Type': 'application/json' };
const HTTP_ERR_CODE = {
  400: '错误请求',
  401: '请求未经授权，请重新登录',
  403: '服务器拒绝访问',
  404: '请求失败，未找到指定资源',
  405: '请求的方法已被禁用',
  406: '服务器不接受该请求',
  407: '请求需要代理授权',
  408: '请求超时',
  409: '服务器在完成请求时发生冲突',
  410: '服务器已永久删除请求的资源',
  411: '服务器不接受不含有效内容长度标头字段的请求',
  412: '服务器未满足前提条件',
  413: '请求实体过大',
  414: '请求的 URI 过长',
  415: '不支持的媒体类型',
  416: '请求范围不符合要求',
  417: '请求的标头字段不满足服务器要求',
  500: '服务器内部出错',
  501: '服务器无法识别请求方法',
  502: '网关错误',
  503: '服务器目前无法使用',
  504: '网络超时，请在有网的环境下重试',
  505: 'HTTP版本不支持该请求',
};

/**
 * 校验返回的数据是否符合条件
 * @param {*} res
 * @returns
 */
export const checkResponse = (res: crRes) => {
  const { status, code } = res || {};
  return SUCCESS_CODE.includes(status) || SUCCESS_CODE.includes(code);
};

/**
 * 网络请求
 * @param {*} method 请求类型
 * @param {*} url 路径
 * @param {*} data 请求参数
 * @param {*} _header 请求头
 * @param {*} _showLoading 是否显示 loading
 * @returns
 */
const doRequest = (
  method?: 'GET' | 'POST',
  url?: string,
  data?: {},
  header?: {},
  _showLoading: any = true
) => {
  _showLoading && showLoading();
  return new Promise((resolve, reject) => {
    const header = method === 'GET' ? {} : DEFAULT_HEADERS;
    uni.request({
      url: `${API_PREFIX}/${url}`,
      data,
      header,
      method,
      success: (res: { statusCode?: number; data?: {} }) => {
        // 接口正常返回数据
        if (res.statusCode === 200) {
          resolve && resolve(res.data); // 服务器返回数据
        }
      },
      fail: (e) => {
        const err: { statusCode: number } = JSON.parse(JSON.stringify(e));
        const { statusCode } = err || {};
        showToast(HTTP_ERR_CODE[statusCode] || '未知错误');
        // reject && reject(err);
        console.error('---抛出异常---', err);
      },
      complete: () => {
        _showLoading && uni.hideLoading();
      },
    });
  });
};

/**
 * get 请求
 * @param {*} url
 * @param {*} data
 * @param {*} headers
 * @param {*} showLoading
 * @returns
 */
const get = (url?: string, data?: {}, header?: {}, showLoading?: boolean) => {
  return doRequest('GET', url, data, header, showLoading);
};

/**
 * post 请求
 * @param {*} url
 * @param {*} data
 * @param {*} headers
 * @param {*} showLoading
 * @returns
 */
const post = (url?: string, data?: {}, header?: {}, showLoading?: boolean) => {
  return doRequest('POST', url, data, header, showLoading);
};

const request = {
  get,
  post,
};

export default request;
