"use strict";

module.exports = Franz => class Remind extends Franz {
  overrideUserAgent() {
    const useragent = window.navigator.userAgent;
    const parts = useragent.split('(KHTML, like Gecko)');
    return parts.join('(KHTML, like Gecko) remind').replace('Electron', 'Remind').replace('Franz', 'Remind');
  }

};
