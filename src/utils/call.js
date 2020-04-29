export function callRadioPlay() {
  const element = document.createElement('audio');
  element.autoplay = true;
  element.loop = true;
  element.src = require('../assets/wechat-call.mp3');
  element.setAttribute('style', 'position: absolute;left: -10000px;opacity: 0;');
  document.body.append(element);

  return function () {
    // element.pause();
    element.remove();
  };
}
