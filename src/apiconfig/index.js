/* eslint-disable */
import axios from 'axios';
import { stringify } from 'qs';
import constant from '@/plugins/constant.js';

/**
 * 定义请求常量
 * TIME_OUT、ERR_OK
 */
export const TIME_OUT = 60000;    // 请求超时时间
export const ERR_OK = true;      // 请求成功返回状态，字段和后台统一
export const baseUrl = constant.host;
// 请求超时时间
axios.defaults.timeout = TIME_OUT;

// 封装请求拦截
axios.interceptors.request.use(
  config => {
    const headers = config.headers;
    if (config.method === 'post' && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/x-www-form-urlencoded';
      config.data = stringify(config.data);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// 封装响应拦截，判断token是否过期
axios.interceptors.response.use(
  response => {
    const data = response.data;
    return data;
  },
  error => {
    return Promise.reject(error);
  }
);

// 封装post请求
export function fetch(requestUrl, method, params = '') {
  if (method === 'post') {
    return axios({
      url: baseUrl + requestUrl,
      method: method,
      data: params
    });
  } else if (method === 'get') {
    return axios({
      url: baseUrl + requestUrl,
      method: method,
      params: params
    });
  }
}

export function fetchRestful(requestUrl) {
  return axios({
    url: baseUrl + requestUrl,
    method: 'get'
  });
}

const axiosInstance = axios.create();

export function request(params) {
  params.validateStatus = status => status < 500;
  params.headers = params.headers || {};
  params.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  return axiosInstance(params).then((res) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('接口返回数据', res);
    }
    if (res.data instanceof Object) {
      res.data.code = res.data.code || res.status;
    }
    return res.data;
  });
}