if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/head/head?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/uni-ui/uni-badge/uni-badge?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-grid/uni-grid?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-grid-item/uni-grid-item?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/city/city?hash=c444292fd74fa597255304232238acfa263c3d31');
require('../../pages/message/message?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/contact/contact?hash=0541c5aaec7fc96f0035b1b869b4cb256138ea79');
require('../../pages/home/home?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}