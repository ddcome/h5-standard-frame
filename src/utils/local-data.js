import { LocalDataManager } from './local-storage';

/**
 * 存储用户信息
 * @type {LocalDataManager}
 * @example
 * const userData = localDataUser.get();
 * console.log(userData)
 * { areaCode, realName, token, userId, username }
 */
export const localDataUser = new LocalDataManager('USER_DATA');

/**
 * 存储应用信息
 * @type {LocalDataManager}
 * @example
 * const appData = localDataApp.get();
 * console.log(appData)
 * { appId, dic }
 */
export const localDataApp = new LocalDataManager('APP_DATA');

/**
 * 微信 ticket 存储（2小时的有效时间）
 */
export const localDataWXTicket = new LocalDataManager('WX_TICKET');

// easemob token
export const localDataEasemobToken = new LocalDataManager("EASEMOB_TOKEN");

// easemob user
export const localDataEasemobUser = new LocalDataManager("EASEMOB_USER");
