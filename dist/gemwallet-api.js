!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["gemwallet-api"]=t():e["gemwallet-api"]=t()}(self,(function(){return(()=>{"use strict";var e={728:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function u(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},a=n(626),i=n(151);e.exports=function(){return r(void 0,void 0,void 0,(function(){var e,t,n,r,u;return o(this,(function(o){switch(o.label){case 0:e={network:null,error:""},o.label=1;case 1:return o.trys.push([1,3,,4]),t={app:a.GEM_WALLET,type:a.REQUEST_NETWORK},[4,(0,i.sendMessageToContentScript)(t)];case 2:return e=o.sent(),[3,4];case 3:return n=o.sent(),console.error(n),[3,4];case 4:if(r=e.network,u=e.error)throw u;return[2,r]}}))}))}},151:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.sendMessageToContentScript=void 0;var o=n(626);t.sendMessageToContentScript=function(e){var t=Date.now()+Math.random();return window.postMessage(r({source:o.MSG_REQUEST,messageId:t},e),window.location.origin),new Promise((function(n,r){window.gemWallet||"REQUEST_CONNECTION"===e.type||r(new Error("Please check if Gem Wallet is connected \n Gem Wallet needs to be installed: https://gemwallet.app"));var a=function(e){var r,i;e.source===window&&(null===(r=null==e?void 0:e.data)||void 0===r?void 0:r.source)===o.MSG_RESPONSE&&(null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.messagedId)===t&&(n(e.data),window.removeEventListener("message",a))};window.addEventListener("message",a,!1)}))}},607:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.transactionRequest=t.getNetwork=t.isConnected=void 0;var o=r(n(935));t.isConnected=o.default;var a=r(n(728));t.getNetwork=a.default;var i=r(n(645));t.transactionRequest=i.default},935:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function u(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},a=n(626),i=n(151);e.exports=function(){if(window.gemWallet)return new Promise((function(e){return e(!0)}));var e,t=new Promise((function(t){e=setTimeout((function(){t(!1)}),1e3)})),n=new Promise((function(e,t){return r(void 0,void 0,void 0,(function(){var n,r,u;return o(this,(function(o){switch(o.label){case 0:n={isConnected:!1},o.label=1;case 1:return o.trys.push([1,3,,4]),r={app:a.GEM_WALLET,type:a.REQUEST_CONNECTION},[4,(0,i.sendMessageToContentScript)(r)];case 2:return n=o.sent(),e(n.isConnected),[3,4];case 3:return u=o.sent(),t(u),[3,4];case 4:return[2]}}))}))}));return Promise.race([t,n]).then((function(t){return clearTimeout(e),!0===t&&(window.gemWallet=!0),t}))}},645:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function u(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},a=n(626),i=n(151);e.exports=function(e){return r(void 0,void 0,void 0,(function(){var t,n,r,u,s;return o(this,(function(o){switch(o.label){case 0:t={status:"waiting",error:""},o.label=1;case 1:return o.trys.push([1,3,,4]),n={app:a.GEM_WALLET,type:a.REQUEST_TRANSACTION,payload:e},[4,(0,i.sendMessageToContentScript)(n)];case 2:return t=o.sent(),[3,4];case 3:return r=o.sent(),console.error(r),[3,4];case 4:if(u=t.status,s=t.error)throw s;return[2,u]}}))}))}},626:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MSG_RESPONSE=t.MSG_REQUEST=t.REQUEST_TRANSACTION=t.REQUEST_TRANSACTION_STATUS=t.REQUEST_CONNECTION=t.REQUEST_NETWORK=t.GEM_WALLET=void 0,t.GEM_WALLET="gem-wallet",t.REQUEST_NETWORK="REQUEST_NETWORK",t.REQUEST_CONNECTION="REQUEST_CONNECTION",t.REQUEST_TRANSACTION_STATUS="REQUEST_TRANSACTION_STATUS",t.REQUEST_TRANSACTION="REQUEST_TRANSACTION",t.MSG_REQUEST="GEM_WALLET_MSG_REQUEST",t.MSG_RESPONSE="GEM_WALLET_MSG_RESPONSE"}},t={};return function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}(607)})()}));