(function(e){function t(t){for(var n,a,s=t[0],i=t[1],c=t[2],p=0,f=[];p<s.length;p++)a=s[p],o[a]&&f.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return u.push.apply(u,c||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},u=[];function s(e){return i.p+"js/"+({"home~request":"home~request",home:"home",request:"request",login:"login",main:"main",register:"register"}[e]||e)+"."+{"home~request":"685bc2c3",home:"be56a266",request:"2c571d66",login:"03f4816a",main:"ed0a442f",register:"af3fc984"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={login:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({"home~request":"home~request",home:"home",request:"request",login:"login",main:"main",register:"register"}[e]||e)+"."+{"home~request":"31d6cfe0",home:"31d6cfe0",request:"31d6cfe0",login:"ea297b36",main:"31d6cfe0",register:"31d6cfe0"}[e]+".css",o=i.p+n,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],p=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(p===n||p===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],p=c.getAttribute("data-href");if(p===n||p===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var n=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete a[e],l.parentNode.removeChild(l),r(u)},l.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(l)}).then(function(){a[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=u);var c,p=document.createElement("script");p.charset="utf-8",p.timeout=120,i.nc&&p.setAttribute("nonce",i.nc),p.src=s(e),c=function(t){p.onerror=p.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");u.type=n,u.request=a,r[1](u)}o[e]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:p})},12e4);p.onerror=p.onload=c,document.head.appendChild(p)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/requestportal/public/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var l=p;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2a74":function(e,t,r){"use strict";r.r(t);r("a481"),r("ac6a");var n=r("bba4"),a=r.n(n),o=r("d307"),u={};o.keys().forEach(function(e){if("./index.js"!==e){var t=a()(e.replace(/(\.\/|\.js)/g,""));u[t]=o(e).default}}),t["default"]=u},"41cb":function(e,t,r){"use strict";var n=r("2b0e"),a=r("8c4f"),o=r("f6ed"),u=function(){return r.e("main").then(r.bind(null,"8e31"))},s=function(){return r.e("login").then(r.bind(null,"5326"))},i=function(){return r.e("register").then(r.bind(null,"935e"))},c=function(){return Promise.all([r.e("home~request"),r.e("home")]).then(r.bind(null,"bb51"))},p=function(){return Promise.all([r.e("home~request"),r.e("request")]).then(r.bind(null,"0728"))};n["default"].use(a["a"]);var f=new a["a"]({mode:"history",base:"requestportal",routes:[{path:"*",redirect:"/home"},{path:"/",redirect:"/home"},{path:"/",component:u,meta:{requiresAuth:!0},children:[{path:"home",component:c},{path:"your-requests",component:p}]},{path:"/login",component:s,meta:{forVisitors:!0}},{path:"/register",component:i,meta:{forVisitors:!0}}]});f.beforeEach(function(e,t,r){var n=e.matched.some(function(e){return e.meta.forVisitors}),a=e.matched.some(function(e){return e.meta.requiresAuth}),u=!!o["a"].getToken();if(n){if(u)return;r()}else a&&(u?r():r("/login"))}),t["a"]=f},4360:function(e,t,r){"use strict";var n=r("cebc"),a=r("2b0e"),o=r("2f62"),u=(r("96cf"),r("3b8d")),s=(r("7f7f"),r("d225")),i=r("308d"),c=r("6bb5"),p=r("4e2b"),f=r("f28b"),l=r("c5fa"),m=r("f6ed"),d=function(e){function t(e,r){var n;return Object(s["a"])(this,t),n=Object(i["a"])(this,Object(c["a"])(t).call(this,r)),n.name=n.constructor.name,n.errorCode=e,n.message=r,n}return Object(p["a"])(t,e),t}(Object(f["a"])(Error)),h=function(e){function t(e,r){var n;return Object(s["a"])(this,t),n=Object(i["a"])(this,Object(c["a"])(t).call(this,r)),n.name=n.constructor.name,n.errorCode=e,n.message=r,n}return Object(p["a"])(t,e),t}(Object(f["a"])(Error)),g={login:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n={method:"POST",url:"/api/login",data:{employee_number:t,password:r}},e.prev=1,e.next=4,l["a"].customRequest(n);case 4:return a=e.sent,m["a"].saveToken(a.data.access_token),l["a"].setHeader(),e.abrupt("return",a.data);case 10:throw e.prev=10,e.t0=e["catch"](1),new d(e.t0.response.status,e.t0.response.data.message);case 13:case"end":return e.stop()}},e,null,[[1,10]])}));function t(t,r){return e.apply(this,arguments)}return t}(),register:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,r,n){var a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a={method:"POST",url:"/api/register",data:{name:t,username:r,password:n}},e.prev=1,e.next=4,l["a"].customRequest(a);case 4:return o=e.sent,e.abrupt("return",o.data);case 8:throw e.prev=8,e.t0=e["catch"](1),new h(e.t0.response.status,e.t0.response.data.message);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,r,n){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={method:"POST",url:"/api/logout",data:{access_token:m["a"].getToken()}},e.prev=1,e.next=4,l["a"].customRequest(t);case 4:return r=e.sent,m["a"].removeToken(),l["a"].removeHeader(),e.abrupt("return",r.data);case 10:throw e.prev=10,e.t0=e["catch"](1),new h(e.t0.response.status,e.t0.response.data.message);case 13:case"end":return e.stop()}},e,null,[[1,10]])}));function t(){return e.apply(this,arguments)}return t}()},b=(r("6b54"),r("28a5"),{decrypt:function(e){if(!e)return"";var t=e.split(".")[1],r=decodeURIComponent(atob(t).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(r)}}),v=b,E=r("41cb"),w={namespaced:!0,state:{authenticating:!1,isSessionExpires:!1,authenticationErrorCode:0,authenticationError:"",accessToken:m["a"].getToken()},getters:{loggedIn:function(e){return!!e.accessToken},authenticationErrorCode:function(e){return e.authenticationErrorCode},authenticationError:function(e){return e.authenticationError},authenticating:function(e){return e.authenticating},userDetails:function(e){return v.decrypt(e.accessToken)}},mutations:{loginRequest:function(e){e.authenticating=!0,e.authenticationError="",e.authenticationErrorCode=0},loginSuccess:function(e,t){e.accessToken=t.access_token,e.authenticating=!1},loginError:function(e,t){var r=t.errorCode,n=t.errorMessage;e.authenticating=!1,e.authenticationErrorCode=r,e.authenticationError=n},cancelAuthentication:function(e){e.authenticating=!1},logoutSuccess:function(e){e.accessToken=""},unAuthorized:function(e,t){e.authenticationErrorCode=t.status,e.authenticationError=t.message}},actions:{login:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("loginRequest"),e.prev=2,e.next=5,g.login(r.employee_number,r.password);case 5:return a=e.sent,n("loginSuccess",a),E["a"].push(E["a"].history.current.query.redirect||"/"),e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e["catch"](2),e.t0 instanceof d&&n("loginError",{errorCode:e.t0.errorCode,errorMessage:e.t0.message}),e.abrupt("return",!1);case 15:case"end":return e.stop()}},e,null,[[2,11]])}));function t(t,r){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,g.logout();case 3:r("logoutSuccess"),E["a"].push("login");case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),unAuthorized:function(e,t){var r=e.commit;g.logout(),r("logoutSuccess"),r("unAuthorized",t),E["a"].push("/login")}}},_=w,R=r("2a74");a["default"].use(o["a"]);t["a"]=new o["a"].Store({strict:!0,modules:Object(n["a"])({login:_},R["default"])})},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-view")},o=[],u={name:"App"},s=u,i=r("2877"),c=Object(i["a"])(s,a,o,!1,null,null,null),p=c.exports,f=r("41cb"),l=r("4360"),m=r("c5fa"),d=r("f6ed"),h=r("ee98"),g=r.n(h);n["default"].use(g.a),m["a"].init("http://localhost/requestportal"),d["a"].getToken()&&m["a"].setHeader(),n["default"].config.productionTip=!1,new n["default"]({router:f["a"],store:l["a"],render:function(e){return e(p)}}).$mount("#app")},c5fa:function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("bc3a"),o=r.n(a),u=r("f6ed"),s=r("4360"),i={_401interceptor:null,init:function(e){o.a.defaults.baseURL=e,this.mount401Interceptor()},setHeader:function(){o.a.defaults.headers.common["Authorization"]="Bearer ".concat(u["a"].getToken())},removeHeader:function(){o.a.defaults.headers.common={}},get:function(e){return o.a.get(e)},post:function(e,t){return o.a.post(e,t)},put:function(e,t){return o.a.put(e,t)},delete:function(e){return o.a.delete(e)},customRequest:function(e){return o()(e)},mount401Interceptor:function(){this._401interceptor=o.a.interceptors.response.use(function(e){return e},function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(401!==t.request.status){e.next=3;break}throw s["a"].dispatch("login/logout"),t;case 3:throw t;case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},unmount401Interceptor:function(){o.a.interceptors.response.eject(this._401interceptor)}};t["a"]=i},d307:function(e,t,r){var n={"./index.js":"2a74","./request.js":"ea41"};function a(e){var t=o(e);return r(t)}function o(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="d307"},ea41:function(e,t,r){"use strict";r.r(t);r("96cf");var n=r("3b8d"),a=(r("ac6a"),r("7f7f"),r("d225")),o=r("308d"),u=r("6bb5"),s=r("4e2b"),i=r("f28b"),c=r("c5fa"),p=function(e){function t(e,r){var n;return Object(a["a"])(this,t),n=Object(o["a"])(this,Object(u["a"])(t).call(this,r)),n.name=n.constructor.name,n.errorCode=e,n.message=r,n}return Object(s["a"])(t,e),t}(Object(i["a"])(Error)),f={resourceUrl:"http://localhost/requestportal/api/requests",getAllRequests:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t?"".concat(this.resourceUrl,"/").concat(t):"".concat(this.resourceUrl),e.next=3,c["a"].get(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),submitRequest:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=[],t.requested_items.forEach(function(e){e.target_date&&r.push({item_id:e.item.id,target_date:e.target_date})}),n={created_by:t.created_by,approver_id:t.approver_id,justification:t.justification,items:r},e.prev=3,e.next=6,c["a"].post(this.resourceUrl,n);case 6:return a=e.sent,o=a.data,e.abrupt("return",o);case 11:throw e.prev=11,e.t0=e["catch"](3),new p(e.t0.response.status,e.t0.response.data.form_errors);case 14:case"end":return e.stop()}},e,this,[[3,11]])}));function t(t){return e.apply(this,arguments)}return t}()},l={resourceUrl:"http://localhost/requestportal/api/items",getAllItems:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t?"".concat(this.resourceUrl,"/").concat(t):"".concat(this.resourceUrl),e.next=3,c["a"].get(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},m=l,d={resourceUrl:"http://localhost/requestportal/api/approvers",getAllApprovers:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].get("".concat(this.resourceUrl,"/").concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},h=d,g={namespaced:!0,state:{submission:!1,submissionError:{},submissionErrorCode:"",items:{},approvers:[]},getters:{getAllItems:function(e){return e.items},getAllApprovers:function(e){return e.approvers},searchActiveStatus:function(e){return!!e.items.request_code}},mutations:{SUBMIT_LOADER:function(e){e.submission=!0,e.submissionError="",e.submissionErrorCode=""},SUBMIT_SUCCESS:function(e){e.submission=!1},SUBMIT_ERROR:function(e,t){var r=t.errorCode,n=t.errorMessage;e.submission=!1,e.submissionError=n,e.submissionErrorCode=r},STORE_ITEMS:function(e,t){e.items=t},SET_DEFAULT_ITEMS:function(e,t){e.items=t},SET_TARGET_DATE:function(e,t){e.submissionError.items={},e.items.requested_items[t.index].target_date=t.target_date},SET_SELECT_ITEM:function(e,t){e.items.requested_items[t.index].id=t.status},SET_APPROVER_ID:function(e,t){e.submissionError.approver_id="",e.items.approver_id=t},SET_CREATED_BY:function(e,t){e.items.created_by=t},SET_JUSTIFICATION:function(e,t){e.submissionError.justification="",e.items.justification=t},SET_APPROVERS:function(e,t){e.approvers=t}},actions:{setDefaultItemsAction:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,m.getAllItems();case 3:return a=e.sent,o=a.data,e.next=7,n("SET_DEFAULT_ITEMS",o);case 7:return e.abrupt("return",n("SET_CREATED_BY",r));case 8:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),getItems:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,!r){e.next=7;break}return e.next=4,f.getAllRequests(r);case 4:return a=e.sent,o=a.data,e.abrupt("return",n("STORE_ITEMS",o));case 7:return e.abrupt("return",{});case 8:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),setApproversAction:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,h.getAllApprovers(r);case 3:return a=e.sent,o=a.data,e.abrupt("return",n("SET_APPROVERS",o));case 6:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),submitFormRequest:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n=t.state,r("SUBMIT_LOADER"),e.prev=2,e.next=5,f.submitRequest(n.items);case 5:return e.next=7,r("SUBMIT_SUCCESS");case 7:return e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e["catch"](2),e.t0 instanceof p&&r("SUBMIT_ERROR",{errorCode:e.t0.errorCode,errorMessage:e.t0.message}),e.abrupt("return",!1);case 14:case"end":return e.stop()}},e,null,[[2,10]])}));function t(t){return e.apply(this,arguments)}return t}()}};t["default"]=g},f6ed:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n="access_token",a={getToken:function(){return localStorage.getItem(n)},saveToken:function(e){localStorage.setItem(n,e)},removeToken:function(){localStorage.removeItem(n)}}}});
//# sourceMappingURL=app.5d94a809.js.map