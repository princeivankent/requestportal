(function(e){function t(t){for(var n,a,i=t[0],u=t[1],c=t[2],f=0,d=[];f<i.length;f++)a=i[f],s[a]&&d.push(s[a][0]),s[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==s[i]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},s={app:0},o=[];function i(e){return u.p+"js/"+({home:"home",login:"login",main:"main",register:"register",request:"request"}[e]||e)+"."+{home:"92f3c116",login:"fae48020",main:"9f71f386",register:"f46f58bd",request:"3631afb1"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={login:1,request:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({home:"home",login:"login",main:"main",register:"register",request:"request"}[e]||e)+"."+{home:"31d6cfe0",login:"ea297b36",main:"31d6cfe0",register:"31d6cfe0",request:"f970f380"}[e]+".css",s=u.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],f=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(f===n||f===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],f=c.getAttribute("data-href");if(f===n||f===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],p.parentNode.removeChild(p),r(o)},p.href=s;var l=document.getElementsByTagName("head")[0];l.appendChild(p)}).then(function(){a[e]=0}));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,r){n=s[e]=[t,r]});t.push(n[2]=o);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e),c=function(t){f.onerror=f.onload=null,clearTimeout(d);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");o.type=n,o.request=a,r[1](o)}s[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:f})},12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/ipc_rushform/public/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],f=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=f;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"009a":function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("c5fa"),s={resourceUrl:"/api/approvers",getAllApprovers:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].get("".concat(this.resourceUrl,"/").concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()};t["a"]=s},"134f":function(e,t,r){"use strict";r.r(t);r("7514"),r("96cf");var n=r("3b8d"),a=r("c5fa"),s={resourceUrl:"/api/employee-requests",getAllEmployeeRequests:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=[],r){e.next=7;break}return e.next=4,a["a"].get("".concat(this.resourceUrl,"/").concat(t));case 4:n=e.sent,e.next=10;break;case 7:return e.next=9,a["a"].get("".concat(this.resourceUrl,"/").concat(t,"/").concat(r));case 9:n=e.sent;case 10:return e.abrupt("return",n.data);case 11:case"end":return e.stop()}},e,this)}));function t(t,r){return e.apply(this,arguments)}return t}()},o=s,i=r("009a"),u={state:{items:[],request_form:{},approvers:[],modalState:!1,loadingState:!1},getters:{getEmployeeRequests:function(e){return e.items},getRequestForm:function(e){return e.request_form},getAllApprovers:function(e){return e.approvers},getModalState:function(e){return e.modalState},getLoadingState:function(e){return e.loadingState}},mutations:{SET_LOADER:function(e,t){e.loadingState=t},SET_DEFAULT_ITEMS:function(e,t){e.items=t.items},SET_MODAL_STATE:function(e,t){e.modalState=t},SET_REQUEST_FORM:function(e,t){e.request_form=t},SET_APPROVERS:function(e,t){e.approvers=t},SET_CLEAR_FORM:function(e){e.request_form={}}},actions:{setDefaultItemsAction:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.state,0==a.items.length&&n("SET_LOADER",!0),e.next=4,o.getAllEmployeeRequests(r.employee_id,r.id);case 4:s=e.sent,n("SET_DEFAULT_ITEMS",{items:s}),n("SET_LOADER",!1);case 7:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),setRequestbyCodeAction:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,r.requests.find(function(e){return e.id===r.id});case 3:return a=e.sent,n("SET_REQUEST_FORM",a),e.abrupt("return",!0);case 6:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),setApproversAction:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,i["a"].getAllApprovers(r);case 3:return a=e.sent,s=a.data,e.abrupt("return",n("SET_APPROVERS",s));case 6:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),setModalStateAction:function(e,t){var r=e.commit;t||r("SET_CLEAR_FORM"),r("SET_MODAL_STATE",t)}}};t["default"]=u},"1f57":function(e,t,r){"use strict";r.d(t,"c",function(){return l}),r.d(t,"a",function(){return d}),r.d(t,"b",function(){return p});r("96cf");var n=r("3b8d"),a=(r("7f7f"),r("d225")),s=r("308d"),o=r("6bb5"),i=r("4e2b"),u=r("f28b"),c=r("c5fa"),f=r("f6ed"),d=function(e){function t(e,r){var n;return Object(a["a"])(this,t),n=Object(s["a"])(this,Object(o["a"])(t).call(this,r)),n.name=n.constructor.name,n.errorCode=e,n.message=r,n}return Object(i["a"])(t,e),t}(Object(u["a"])(Error)),p=function(e){function t(e,r){var n;return Object(a["a"])(this,t),n=Object(s["a"])(this,Object(o["a"])(t).call(this,r)),n.name=n.constructor.name,n.errorCode=e,n.message=r,n}return Object(i["a"])(t,e),t}(Object(u["a"])(Error)),l={login:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n={method:"POST",url:"/api/login",data:{employee_number:t,password:r}},e.prev=1,e.next=4,c["a"].customRequest(n);case 4:return a=e.sent,f["a"].saveToken(a.data.access_token),c["a"].setHeader(),e.abrupt("return",a.data);case 10:throw e.prev=10,e.t0=e["catch"](1),new d(e.t0.response.status,e.t0.response.data.message);case 13:case"end":return e.stop()}},e,null,[[1,10]])}));function t(t,r){return e.apply(this,arguments)}return t}(),register:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n){var a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a={method:"POST",url:"/api/register",data:{name:t,username:r,password:n}},e.prev=1,e.next=4,c["a"].customRequest(a);case 4:return s=e.sent,e.abrupt("return",s.data);case 8:throw e.prev=8,e.t0=e["catch"](1),new p(e.t0.response.status,e.t0.response.data.message);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,r,n){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={method:"POST",url:"/api/logout",data:{access_token:f["a"].getToken()}},e.prev=1,e.next=4,c["a"].customRequest(t);case 4:return r=e.sent,f["a"].removeToken(),c["a"].removeHeader(),e.abrupt("return",r.data);case 10:throw e.prev=10,e.t0=e["catch"](1),new p(e.t0.response.status,e.t0.response.data.message);case 13:case"end":return e.stop()}},e,null,[[1,10]])}));function t(){return e.apply(this,arguments)}return t}()}},"2a74":function(e,t,r){"use strict";r.r(t);var n=r("cebc"),a=(r("a481"),r("ac6a"),r("bba4")),s=r.n(a),o=r("d307"),i={};o.keys().forEach(function(e){if("./index.js"!==e){var t=s()(e.replace(/(\.\/|\.js)/g,""));i[t]=Object(n["a"])({namespaced:!0},o(e).default)}}),t["default"]=i},4360:function(e,t,r){"use strict";var n=r("cebc"),a=r("2b0e"),s=r("2f62"),o=r("2a74");a["default"].use(s["a"]),t["a"]=new s["a"].Store({strict:!0,modules:Object(n["a"])({},o["default"])})},4678:function(e,t,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return r(t)}function s(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-view")},s=[],o={name:"App"},i=o,u=(r("9d14"),r("2877")),c=Object(u["a"])(i,a,s,!1,null,null,null),f=c.exports,d=r("a18c"),p=r("4360"),l=r("c5fa"),m=r("f6ed"),b=r("ee98"),h=r.n(b),g=(r("a481"),r("6b54"),r("c1df")),j=r.n(g);n["default"].filter("upperCase",function(e){if(!e)return"";e=e.toString();var t=e.replace("_"," ");return t.charAt(0).toUpperCase()+t.slice(1)}),n["default"].filter("toDateString",function(e){return e?j()(e).format("MMMM D, YYYY"):""});var v=r("58ca"),_=function(){return"".concat(window.location.protocol,"//").concat(window.location.hostname,"/").concat("ipc_rushform")};n["default"].use(v["a"]),n["default"].use(h.a),l["a"].init(_()),m["a"].getToken()&&l["a"].setHeader(),n["default"].config.productionTip=!1,new n["default"]({router:d["a"],store:p["a"],render:function(e){return e(f)}}).$mount("#app")},"74ac":function(e,t,r){},"78e2":function(e,t,r){"use strict";r.r(t);r("7f7f"),r("96cf");var n=r("3b8d"),a=r("1f57"),s={state:{isRegistered:!1,registrationErrorCode:0,registrationError:"",registration:!1},mutations:{registrationRequest:function(e){e.registration=!0,e.registrationErrorCode=0,e.registrationError=""},registrationSuccess:function(e){e.registration=!1,e.isRegistered=!0},registrationError:function(e,t){var r=t.errorCode,n=t.errorMessage;e.registration=!1,e.registrationErrorCode=r,e.registrationError=n}},actions:{register:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("registrationRequest"),e.prev=2,e.next=5,a["c"].register(r.name,r.username,r.password);case 5:return n("registrationSuccess"),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e["catch"](2),e.t0 instanceof a["b"]&&n("registrationError",{errorCode:e.t0.errorCode,errorMessage:e.t0.message}),e.abrupt("return",!1);case 13:case"end":return e.stop()}},e,null,[[2,9]])}));function t(t,r){return e.apply(this,arguments)}return t}()}};t["default"]=s},"9d14":function(e,t,r){"use strict";var n=r("74ac"),a=r.n(n);a.a},a18c:function(e,t,r){"use strict";var n=r("2b0e"),a=r("8c4f"),s=r("f6ed"),o=r("4360"),i=function(e,t){e.employee_number&&e.password?o["a"].dispatch("login/loginAction",e):t()},u=function(){return r.e("main").then(r.bind(null,"8e31"))},c=function(){return r.e("login").then(r.bind(null,"5326"))},f=function(){return r.e("register").then(r.bind(null,"935e"))},d=function(){return r.e("home").then(r.bind(null,"bb51"))},p=function(){return r.e("request").then(r.bind(null,"d6a1"))};n["default"].use(a["a"]);var l=new a["a"]({mode:"history",base:"ipc_rushform",routes:[{path:"*",redirect:"/home"},{path:"/",redirect:"/home"},{path:"/",component:u,meta:{requiresAuth:!0},children:[{path:"home",component:d},{path:"your-requests",component:p}]},{path:"/login",component:c,meta:{forVisitors:!0}},{path:"/register",component:f,meta:{forVisitors:!0}}]});l.beforeEach(function(e,t,r){var n=e.matched.some(function(e){return e.meta.forVisitors}),a=e.matched.some(function(e){return e.meta.requiresAuth}),o=!!s["a"].getToken();a?o?r():r("/login"):n?o?r():i(e.query,r):r()});t["a"]=l},b5ce:function(e,t,r){"use strict";r.r(t);r("96cf");var n=r("3b8d"),a=r("1f57"),s=r("f6ed"),o=(r("6b54"),r("28a5"),{decrypt:function(e){if(!e)return"";var t=e.split(".")[1],r=decodeURIComponent(atob(t).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(r)}}),i=o,u=r("a18c"),c={state:{authenticating:!1,isSessionExpires:!1,authenticationErrorCode:0,authenticationError:"",accessToken:s["a"].getToken()},getters:{loggedIn:function(e){return!!e.accessToken},authenticationErrorCode:function(e){return e.authenticationErrorCode},authenticationError:function(e){return e.authenticationError},authenticating:function(e){return e.authenticating},userDetails:function(e){return i.decrypt(e.accessToken)}},mutations:{loginRequest:function(e){e.authenticating=!0,e.authenticationError="",e.authenticationErrorCode=0},loginSuccess:function(e,t){e.accessToken=t.access_token,e.authenticating=!1},loginError:function(e,t){var r=t.errorCode,n=t.errorMessage;e.authenticating=!1,e.authenticationErrorCode=r,e.authenticationError=n},cancelAuthentication:function(e){e.authenticating=!1},logoutSuccess:function(e){e.accessToken=""},unAuthorized:function(e,t){e.authenticationErrorCode=t.status,e.authenticationError=t.message}},actions:{loginAction:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("loginRequest"),e.prev=2,e.next=5,a["c"].login(r.employee_number,r.password);case 5:return s=e.sent,n("loginSuccess",s),u["a"].push(u["a"].history.current.query.redirect||"/"),e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e["catch"](2),e.t0 instanceof a["a"]&&n("loginError",{errorCode:e.t0.errorCode,errorMessage:e.t0.message}),e.abrupt("return",!1);case 15:case"end":return e.stop()}},e,null,[[2,11]])}));function t(t,r){return e.apply(this,arguments)}return t}(),logoutAction:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n=window.location.hostname,e.next=4,a["c"].logout();case 4:r("logoutSuccess"),"ecommerce5"==n||"portal.isuzuphil.com"==n?window.location="http://".concat(n,"/ipc_central"):u["a"].push("login");case 6:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),unAuthorized:function(e,t){var r=e.commit;a["c"].logout(),r("logoutSuccess"),r("unAuthorized",t),u["a"].push("/login")}}};t["default"]=c},c5fa:function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("bc3a"),s=r.n(a),o=r("f6ed"),i=r("4360"),u={_401interceptor:null,init:function(e){s.a.defaults.baseURL=e,this.mount401Interceptor()},setHeader:function(){s.a.defaults.headers.common["Authorization"]="Bearer ".concat(o["a"].getToken())},removeHeader:function(){s.a.defaults.headers.common={}},get:function(e){return s.a.get(e)},post:function(e,t){return s.a.post(e,t)},put:function(e,t){return s.a.put(e,t)},delete:function(e){return s.a.delete(e)},customRequest:function(e){return s()(e)},mount401Interceptor:function(){this._401interceptor=s.a.interceptors.response.use(function(e){return e},function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(401!==t.request.status){e.next=3;break}throw i["a"].dispatch("login/logoutAction"),t;case 3:throw t;case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},unmount401Interceptor:function(){s.a.interceptors.response.eject(this._401interceptor)}};t["a"]=u},d307:function(e,t,r){var n={"./index.js":"2a74","./login.js":"b5ce","./register.js":"78e2","./request-form.js":"134f","./request.js":"ea41"};function a(e){var t=s(e);return r(t)}function s(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="d307"},ea41:function(e,t,r){"use strict";r.r(t);r("96cf");var n=r("3b8d"),a=r("cebc"),s=(r("ac6a"),r("7f7f"),r("d225")),o=r("308d"),i=r("6bb5"),u=r("4e2b"),c=r("f28b"),f=r("c5fa"),d=function(e){function t(e,r){var n;return Object(s["a"])(this,t),n=Object(o["a"])(this,Object(i["a"])(t).call(this,r)),n.name=n.constructor.name,n.errorCode=e,n.message=r,n}return Object(u["a"])(t,e),t}(Object(c["a"])(Error)),p={resourceUrl:"/api/requests",getAllRequests:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t?"".concat(this.resourceUrl,"/").concat(t):"".concat(this.resourceUrl),e.next=3,f["a"].get(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),submitRequest:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=[],t.requested_items.forEach(function(e){e.target_date&&r.push({item_id:e.item.id,target_date:e.target_date})}),n={created_by:t.created_by,approver_id:t.approver_id,justification:t.justification,items:r},e.prev=3,e.next=6,f["a"].post(this.resourceUrl,n);case 6:return a=e.sent,s=a.data,e.abrupt("return",s);case 11:throw e.prev=11,e.t0=e["catch"](3),new d(e.t0.response.status,e.t0.response.data.form_errors);case 14:case"end":return e.stop()}},e,this,[[3,11]])}));function t(t){return e.apply(this,arguments)}return t}()},l={resourceUrl:"/api/items",getAllItems:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t?"".concat(this.resourceUrl,"/").concat(t):"".concat(this.resourceUrl),e.next=3,f["a"].get(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},m=l,b=r("009a"),h={state:{submission:!1,submissionError:{items:"",approver_id:"",justification:""},submissionErrorCode:"",items:{id:"",request_code:"",created_by:"",approver_id:"",justification:"",created_at:"",updated_at:"",requested_items:[]},approvers:[],loadingState:!1},getters:{getAllItems:function(e){return e.items},getAllApprovers:function(e){return e.approvers},searchActiveStatus:function(e){return!!e.items.request_code},getLoadingState:function(e){return e.loadingState}},mutations:{SET_LOADER:function(e,t){e.loadingState=t},SUBMIT_LOADER:function(e){e.submission=!0,e.submissionError="",e.submissionErrorCode=""},SUBMIT_SUCCESS:function(e){e.submission=!1},SUBMIT_ERROR:function(e,t){var r=t.errorCode,n=t.errorMessage;e.submission=!1,e.submissionError=n,e.submissionErrorCode=r},STORE_ITEMS:function(e,t){e.items={id:t.id,request_code:t.request_code,created_by:t.created_by,approver_id:t.approver_id,justification:t.justification,created_at:t.created_at,updated_at:t.update_at,requested_items:t.requested_items}},SET_DEFAULT_ITEMS:function(e,t){e.items={id:t.id,request_code:t.request_code,created_by:t.created_by,approver_id:t.approver_id,justification:t.justification,created_at:t.created_at,updated_at:t.update_at,requested_items:t.requested_items}},SET_TARGET_DATE:function(e,t){e.submissionError=Object(a["a"])({},e.submissionError,{items:{}}),e.items.requested_items[t.index]=Object(a["a"])({},e.items.requested_items[t.index],{target_date:t.target_date})},SET_SELECT_ITEM:function(e,t){e.items.requested_items[t.index]=Object(a["a"])({},e.items.requested_items[t.index],{id:t.status})},SET_APPROVER_ID:function(e,t){e.submissionError=Object(a["a"])({},e.submissionError,{approver_id:""}),e.items=Object(a["a"])({},e.items,{approver_id:t})},SET_CREATED_BY:function(e,t){e.items=Object(a["a"])({},e.items,{created_by:t})},SET_JUSTIFICATION:function(e,t){e.submissionError=Object(a["a"])({},e.submissionError,{justification:""}),e.items=Object(a["a"])({},e.items,{justification:t})},SET_APPROVERS:function(e,t){e.approvers=t}},actions:{setDefaultItemsAction:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("SET_LOADER",!0),e.next=4,m.getAllItems();case 4:return a=e.sent,s=a.data,e.next=8,n("SET_DEFAULT_ITEMS",s);case 8:return e.next=10,n("SET_LOADER",!1);case 10:return e.abrupt("return",n("SET_CREATED_BY",r));case 11:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),getItems:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,!r){e.next=11;break}return e.next=4,n("SET_LOADER",!0);case 4:return e.next=6,p.getAllRequests(r);case 6:return a=e.sent,s=a.data,e.next=10,n("SET_LOADER",!1);case 10:return e.abrupt("return",n("STORE_ITEMS",s));case 11:return e.abrupt("return",{});case 12:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),setApproversAction:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,b["a"].getAllApprovers(r);case 3:return a=e.sent,s=a.data,e.abrupt("return",n("SET_APPROVERS",s));case 6:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),submitFormRequest:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n=t.state,r("SUBMIT_LOADER"),e.prev=2,e.next=5,p.submitRequest(n.items);case 5:return e.next=7,r("SUBMIT_SUCCESS");case 7:return e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e["catch"](2),e.t0 instanceof d&&r("SUBMIT_ERROR",{errorCode:e.t0.errorCode,errorMessage:e.t0.message}),e.abrupt("return",!1);case 14:case"end":return e.stop()}},e,null,[[2,10]])}));function t(t){return e.apply(this,arguments)}return t}()}};t["default"]=h},f6ed:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n="access_token",a={getToken:function(){return localStorage.getItem(n)},saveToken:function(e){localStorage.setItem(n,e)},removeToken:function(){localStorage.removeItem(n)}}}});
//# sourceMappingURL=app.f3739b7b.js.map