import config from './easemob-config';
import websdk from 'easemob-websdk';
// import 'easemob-emedia';
import webrtc from 'easemob-webrtc';

// 初始化IM SDK
let WebIM;
WebIM = window.WebIM = websdk;
WebIM.config = config;
WebIM.conn = new WebIM.connection({
  appKey: WebIM.config.appkey,
  isHttpDNS: WebIM.config.isHttpDNS,
  isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
  https: WebIM.config.https,
  url: WebIM.config.xmppURL,
  apiUrl: WebIM.config.apiURL,
  isAutoLogin: true,
  heartBeatWait: WebIM.config.heartBeatWait,
  autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
  autoReconnectInterval: WebIM.config.autoReconnectInterval,
  isStropheLog: WebIM.config.isStropheLog,
  delivery: WebIM.config.delivery
});
if (!WebIM.conn.apiUrl) {
  WebIM.conn.apiUrl = WebIM.config.apiURL;
}

WebIM.emedia = webrtc.emedia;

export default WebIM;