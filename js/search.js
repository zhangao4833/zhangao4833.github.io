!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.axios=t():e.axios=t()}(this,function(){return function(n){function r(e){if(o[e])return o[e].exports;var t=o[e]={exports:{},id:e,loaded:!1};return n[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}var o={};return r.m=n,r.c=o,r.p="",r(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){var t=new i(e),n=s(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(2),s=n(3),i=n(5),u=n(6),a=r(u);a.Axios=i,a.create=function(e){return r(o.merge(u,e))},a.Cancel=n(23),a.CancelToken=n(24),a.isCancel=n(20),a.all=function(e){return Promise.all(e)},a.spread=n(25),e.exports=a,e.exports.default=a},function(e,t,n){"use strict";function s(e){return"[object Array]"===c.call(e)}function r(e){return null!==e&&"object"==typeof e}function o(e){return"[object Function]"===c.call(e)}function i(e,t){if(null!=e)if("object"==typeof e||s(e)||(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var u=n(3),a=n(4),c=Object.prototype.toString;e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===c.call(e)},isBuffer:a,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:r,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===c.call(e)},isFile:function(e){return"[object File]"===c.call(e)},isBlob:function(e){return"[object Blob]"===c.call(e)},isFunction:o,isStream:function(e){return r(e)&&o(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:i,merge:function n(){function e(e,t){"object"==typeof r[t]&&"object"==typeof e?r[t]=n(r[t],e):r[t]=e}for(var r={},t=0,o=arguments.length;t<o;t++)i(arguments[t],e);return r},extend:function(n,e,r){return i(e,function(e,t){n[t]=r&&"function"==typeof e?u(e,r):e}),n},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t){"use strict";e.exports=function(n,r){return function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];return n.apply(r,e)}}},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(n(e)||"function"==typeof(t=e).readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))||!!e._isBuffer);var t}},function(e,t,n){"use strict";function o(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var r=n(6),s=n(2),i=n(17),u=n(18),a=n(21),c=n(22);o.prototype.request=function(e){"string"==typeof e&&(e=s.merge({url:e},arguments[1])),(e=s.merge(r,this.defaults,{method:"get"},e)).method=e.method.toLowerCase(),e.baseURL&&!a(e.url)&&(e.url=c(e.baseURL,e.url));var t=[u,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},s.forEach(["delete","get","head","options"],function(n){o.prototype[n]=function(e,t){return this.request(s.merge(t||{},{method:n,url:e}))}}),s.forEach(["post","put","patch"],function(r){o.prototype[r]=function(e,t,n){return this.request(s.merge(n||{},{method:r,url:e,data:t}))}}),e.exports=o},function(e,t,n){"use strict";function r(e,t){!s.isUndefined(e)&&s.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o,s=n(2),i=n(7),u={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:("undefined"!=typeof XMLHttpRequest?o=n(8):"undefined"!=typeof process&&(o=n(8)),o),transformRequest:[function(e,t){return i(t,"Content-Type"),s.isFormData(e)||s.isArrayBuffer(e)||s.isBuffer(e)||s.isStream(e)||s.isFile(e)||s.isBlob(e)?e:s.isArrayBufferView(e)?e.buffer:s.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):s.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return 200<=e&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},s.forEach(["delete","get","head"],function(e){a.headers[e]={}}),s.forEach(["post","put","patch"],function(e){a.headers[e]=s.merge(u)}),e.exports=a},function(e,t,n){"use strict";var o=n(2);e.exports=function(n,r){o.forEach(n,function(e,t){t!==r&&t.toUpperCase()===r.toUpperCase()&&(n[r]=e,delete n[t])})}},function(e,t,d){"use strict";var l=d(2),h=d(9),m=d(12),y=d(13),w=d(14),v=d(10),g="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||d(15);e.exports=function(p){return new Promise(function(n,r){var o=p.data,s=p.headers;l.isFormData(o)&&delete s["Content-Type"];var i=new XMLHttpRequest,e="onreadystatechange",u=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in i||w(p.url)||(i=new window.XDomainRequest,e="onload",u=!0,i.onprogress=function(){},i.ontimeout=function(){}),p.auth){var t=p.auth.username||"",a=p.auth.password||"";s.Authorization="Basic "+g(t+":"+a)}if(i.open(p.method.toUpperCase(),m(p.url,p.params,p.paramsSerializer),!0),i.timeout=p.timeout,i[e]=function(){if(i&&(4===i.readyState||u)&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in i?y(i.getAllResponseHeaders()):null,t={data:p.responseType&&"text"!==p.responseType?i.response:i.responseText,status:1223===i.status?204:i.status,statusText:1223===i.status?"No Content":i.statusText,headers:e,config:p,request:i};h(n,r,t),i=null}},i.onerror=function(){r(v("Network Error",p,null,i)),i=null},i.ontimeout=function(){r(v("timeout of "+p.timeout+"ms exceeded",p,"ECONNABORTED",i)),i=null},l.isStandardBrowserEnv()){var c=d(16),f=(p.withCredentials||w(p.url))&&p.xsrfCookieName?c.read(p.xsrfCookieName):void 0;f&&(s[p.xsrfHeaderName]=f)}if("setRequestHeader"in i&&l.forEach(s,function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete s[t]:i.setRequestHeader(t,e)}),p.withCredentials&&(i.withCredentials=!0),p.responseType)try{i.responseType=p.responseType}catch(n){if("json"!==p.responseType)throw n}"function"==typeof p.onDownloadProgress&&i.addEventListener("progress",p.onDownloadProgress),"function"==typeof p.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",p.onUploadProgress),p.cancelToken&&p.cancelToken.promise.then(function(e){i&&(i.abort(),r(e),i=null)}),void 0===o&&(o=null),i.send(o)})}},function(e,t,n){"use strict";var o=n(10);e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(o("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";var i=n(11);e.exports=function(e,t,n,r,o){var s=new Error(e);return i(s,t,n,r,o)}},function(e,t){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";function s(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var i=n(2);e.exports=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(i.isURLSearchParams(t))r=t.toString();else{var o=[];i.forEach(t,function(e,t){null!=e&&(i.isArray(e)&&(t+="[]"),i.isArray(e)||(e=[e]),i.forEach(e,function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),o.push(s(t)+"="+s(e))}))}),r=o.join("&")}return r&&(e+=(-1===e.indexOf("?")?"?":"&")+r),e}},function(e,t,n){"use strict";var s=n(2);e.exports=function(e){var t,n,r,o={};return e&&s.forEach(e.split("\n"),function(e){r=e.indexOf(":"),t=s.trim(e.substr(0,r)).toLowerCase(),n=s.trim(e.substr(r+1)),t&&(o[t]=o[t]?o[t]+", "+n:n)}),o}},function(e,t,n){"use strict";var i=n(2);e.exports=i.isStandardBrowserEnv()?function(){function n(e){var t=e;return o&&(s.setAttribute("href",t),t=s.href),s.setAttribute("href",t),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:"/"===s.pathname.charAt(0)?s.pathname:"/"+s.pathname}}var r,o=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a");return r=n(window.location.href),function(e){var t=i.isString(e)?n(e):e;return t.protocol===r.protocol&&t.host===r.host}}():function(){return!0}},function(e,t){"use strict";function u(){this.message="String contains an invalid character"}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";(u.prototype=new Error).code=5,u.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,r=String(e),o="",s=0,i=a;r.charAt(0|s)||(i="=",s%1);o+=i.charAt(63&t>>8-s%1*8)){if(255<(n=r.charCodeAt(s+=.75)))throw new u;t=t<<8|n}return o}},function(e,t,n){"use strict";var u=n(2);e.exports=u.isStandardBrowserEnv()?{write:function(e,t,n,r,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),u.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),u.isString(r)&&i.push("path="+r),u.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(2);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(2),s=n(19),i=n(20),u=n(6);e.exports=function(t){return r(t),t.headers=t.headers||{},t.data=s(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||u.adapter)(t).then(function(e){return r(t),e.data=s(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(r(t),e&&e.response&&(e.response.data=s(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(e,t,n){"use strict";var r=n(2);e.exports=function(t,n,e){return r.forEach(e,function(e){t=e(t,n)}),t}},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(23);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},e.exports=r},function(e,t){"use strict";e.exports=function(t){return function(e){return t.apply(null,e)}}}])});!function(){var e,t,h,l,n,i,c,d,f,p,g,m,v,y,S,w,k,x,b,E,_,F,z,O,P,T,o,N=function(e){var t=new N.Index;return t.pipeline.add(N.trimmer,N.stopWordFilter,N.stemmer),e&&e.call(t,t),t};N.version="0.7.1",N.utils={},N.utils.warn=(o=this,function(e){o.console&&console.warn&&console.warn(e)}),N.utils.asString=function(e){return null==e?"":e.toString()},N.EventEmitter=function(){this.events={}},N.EventEmitter.prototype.addListener=function(){var e=Array.prototype.slice.call(arguments),t=e.pop(),n=e;if("function"!=typeof t)throw new TypeError("last argument must be a function");n.forEach(function(e){this.hasHandler(e)||(this.events[e]=[]),this.events[e].push(t)},this)},N.EventEmitter.prototype.removeListener=function(e,t){if(this.hasHandler(e)){var n=this.events[e].indexOf(t);this.events[e].splice(n,1),this.events[e].length||delete this.events[e]}},N.EventEmitter.prototype.emit=function(e){if(this.hasHandler(e)){var t=Array.prototype.slice.call(arguments,1);this.events[e].forEach(function(e){e.apply(void 0,t)})}},N.EventEmitter.prototype.hasHandler=function(e){return e in this.events},"undefined"!=typeof module&&module.exports&&(nodejieba_segment=require("nodejieba")),N.tokenizer=function(e){if(!arguments.length||null==e||null==e)return[];if(Array.isArray(e))return e.map(function(e){return N.utils.asString(e).toLowerCase()});var t=e.toString().trim().toLowerCase();return"undefined"!=typeof nodejieba_segment?nodejieba_segment.cut(t,!0):t.split(N.tokenizer.seperator)},N.tokenizer.seperator=/[\s\-]+/,N.tokenizer.load=function(e){var t=this.registeredFunctions[e];if(!t)throw new Error("Cannot load un-registered function: "+e);return t},N.tokenizer.label="default",N.tokenizer.registeredFunctions={default:N.tokenizer},N.tokenizer.registerFunction=function(e,t){t in this.registeredFunctions&&N.utils.warn("Overwriting existing tokenizer: "+t),e.label=t,this.registeredFunctions[t]=e},N.Pipeline=function(){this._stack=[]},N.Pipeline.registeredFunctions={},N.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&N.utils.warn("Overwriting existing registered function: "+t),e.label=t,N.Pipeline.registeredFunctions[e.label]=e},N.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||N.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},N.Pipeline.load=function(e){var n=new N.Pipeline;return e.forEach(function(e){var t=N.Pipeline.registeredFunctions[e];if(!t)throw new Error("Cannot load un-registered function: "+e);n.add(t)}),n},N.Pipeline.prototype.add=function(){Array.prototype.slice.call(arguments).forEach(function(e){N.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)},this)},N.Pipeline.prototype.after=function(e,t){N.Pipeline.warnIfFunctionNotRegistered(t);var n=this._stack.indexOf(e);if(-1==n)throw new Error("Cannot find existingFn");n+=1,this._stack.splice(n,0,t)},N.Pipeline.prototype.before=function(e,t){N.Pipeline.warnIfFunctionNotRegistered(t);var n=this._stack.indexOf(e);if(-1==n)throw new Error("Cannot find existingFn");this._stack.splice(n,0,t)},N.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},N.Pipeline.prototype.run=function(e){for(var t=[],n=e.length,i=this._stack.length,o=0;o<n;o++){for(var r=e[o],s=0;s<i&&(void 0!==(r=this._stack[s](r,o,e))&&""!==r);s++);void 0!==r&&""!==r&&t.push(r)}return t},N.Pipeline.prototype.reset=function(){this._stack=[]},N.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return N.Pipeline.warnIfFunctionNotRegistered(e),e.label})},N.Vector=function(){this._magnitude=null,this.list=void 0,this.length=0},N.Vector.Node=function(e,t,n){this.idx=e,this.val=t,this.next=n},N.Vector.prototype.insert=function(e,t){this._magnitude=void 0;var n=this.list;if(!n)return this.list=new N.Vector.Node(e,t,n),this.length++;if(e<n.idx)return this.list=new N.Vector.Node(e,t,n),this.length++;for(var i=n,o=n.next;null!=o;){if(e<o.idx)return i.next=new N.Vector.Node(e,t,o),this.length++;o=(i=o).next}return i.next=new N.Vector.Node(e,t,o),this.length++},N.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e,t=this.list,n=0;t;)n+=(e=t.val)*e,t=t.next;return this._magnitude=Math.sqrt(n)},N.Vector.prototype.dot=function(e){for(var t=this.list,n=e.list,i=0;t&&n;)t.idx<n.idx?t=t.next:(t.idx>n.idx||(i+=t.val*n.val,t=t.next),n=n.next);return i},N.Vector.prototype.similarity=function(e){return this.dot(e)/(this.magnitude()*e.magnitude())},N.SortedSet=function(){this.length=0,this.elements=[]},N.SortedSet.load=function(e){var t=new this;return t.elements=e,t.length=e.length,t},N.SortedSet.prototype.add=function(){var e,t;for(e=0;e<arguments.length;e++)t=arguments[e],~this.indexOf(t)||this.elements.splice(this.locationFor(t),0,t);this.length=this.elements.length},N.SortedSet.prototype.toArray=function(){return this.elements.slice()},N.SortedSet.prototype.map=function(e,t){return this.elements.map(e,t)},N.SortedSet.prototype.forEach=function(e,t){return this.elements.forEach(e,t)},N.SortedSet.prototype.indexOf=function(e){for(var t=0,n=this.elements.length,i=n-t,o=t+Math.floor(i/2),r=this.elements[o];1<i;){if(r===e)return o;r<e&&(t=o),e<r&&(n=o),i=n-t,o=t+Math.floor(i/2),r=this.elements[o]}return r===e?o:-1},N.SortedSet.prototype.locationFor=function(e){for(var t=0,n=this.elements.length,i=n-t,o=t+Math.floor(i/2),r=this.elements[o];1<i;)r<e&&(t=o),e<r&&(n=o),i=n-t,o=t+Math.floor(i/2),r=this.elements[o];return e<r?o:r<e?o+1:void 0},N.SortedSet.prototype.intersect=function(e){for(var t=new N.SortedSet,n=0,i=0,o=this.length,r=e.length,s=this.elements,a=e.elements;!(o-1<n||r-1<i);)s[n]!==a[i]?s[n]<a[i]?n++:s[n]>a[i]&&i++:(t.add(s[n]),n++,i++);return t},N.SortedSet.prototype.clone=function(){var e=new N.SortedSet;return e.elements=this.toArray(),e.length=e.elements.length,e},N.SortedSet.prototype.union=function(e){var t,n,i;this.length>=e.length?(t=this,n=e):(t=e,n=this),i=t.clone();for(var o=0,r=n.toArray();o<r.length;o++)i.add(r[o]);return i},N.SortedSet.prototype.toJSON=function(){return this.toArray()},N.Index=function(){this._fields=[],this._ref="id",this.pipeline=new N.Pipeline,this.documentStore=new N.Store,this.tokenStore=new N.TokenStore,this.corpusTokens=new N.SortedSet,this.eventEmitter=new N.EventEmitter,this.tokenizerFn=N.tokenizer,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))},N.Index.prototype.on=function(){var e=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,e)},N.Index.prototype.off=function(e,t){return this.eventEmitter.removeListener(e,t)},N.Index.load=function(e){e.version!==N.version&&N.utils.warn("version mismatch: current "+N.version+" importing "+e.version);var t=new this;return t._fields=e.fields,t._ref=e.ref,t.tokenizer=N.tokenizer.load(e.tokenizer),t.documentStore=N.Store.load(e.documentStore),t.tokenStore=N.TokenStore.load(e.tokenStore),t.corpusTokens=N.SortedSet.load(e.corpusTokens),t.pipeline=N.Pipeline.load(e.pipeline),t},N.Index.prototype.field=function(e,t){var n={name:e,boost:(t=t||{}).boost||1};return this._fields.push(n),this},N.Index.prototype.ref=function(e){return this._ref=e,this},N.Index.prototype.tokenizer=function(e){return e.label&&e.label in N.tokenizer.registeredFunctions||N.utils.warn("Function is not a registered tokenizer. This may cause problems when serialising the index"),this.tokenizerFn=e,this},N.Index.prototype.add=function(o,e){var r={},s=new N.SortedSet,t=o[this._ref];e=void 0===e||e;this._fields.forEach(function(e){var t=this.pipeline.run(this.tokenizerFn(o[e.name]));r[e.name]=t;for(var n=0;n<t.length;n++){var i=t[n];s.add(i),this.corpusTokens.add(i)}},this),this.documentStore.set(t,s);for(var n=0;n<s.length;n++){for(var i=s.elements[n],a=0,u=0;u<this._fields.length;u++){var h=this._fields[u],l=r[h.name],c=l.length;if(c){for(var d=0,f=0;f<c;f++)l[f]===i&&d++;a+=d/c*h.boost}}this.tokenStore.add(i,{ref:t,tf:a})}e&&this.eventEmitter.emit("add",o,this)},N.Index.prototype.remove=function(e,t){var n=e[this._ref];t=void 0===t||t;if(this.documentStore.has(n)){var i=this.documentStore.get(n);this.documentStore.remove(n),i.forEach(function(e){this.tokenStore.remove(e,n)},this),t&&this.eventEmitter.emit("remove",e,this)}},N.Index.prototype.update=function(e,t){t=void 0===t||t;this.remove(e,!1),this.add(e,!1),t&&this.eventEmitter.emit("update",e,this)},N.Index.prototype.idf=function(e){var t="@"+e;if(Object.prototype.hasOwnProperty.call(this._idfCache,t))return this._idfCache[t];var n=this.tokenStore.count(e),i=1;return 0<n&&(i=1+Math.log(this.documentStore.length/n)),this._idfCache[t]=i},N.Index.prototype.search=function(e){var t=this.pipeline.run(this.tokenizerFn(e)),p=new N.Vector,i=[],o=this._fields.reduce(function(e,t){return e+t.boost},0);return t.some(function(e){return this.tokenStore.has(e)},this)?(t.forEach(function(c,e,t){var d=1/t.length*this._fields.length*o,f=this,n=this.tokenStore.expand(c).reduce(function(e,t){var n=f.corpusTokens.indexOf(t),i=f.idf(t),o=1,r=new N.SortedSet;if(t!==c){var s=Math.max(3,t.length-c.length);o=1/Math.log(s)}-1<n&&p.insert(n,d*i*o);for(var a=f.tokenStore.get(t),u=Object.keys(a),h=u.length,l=0;l<h;l++)r.add(a[u[l]].ref);return e.union(r)},new N.SortedSet);i.push(n)},this),i.reduce(function(e,t){return e.intersect(t)}).map(function(e){return{ref:e,score:p.similarity(this.documentVector(e))}},this).sort(function(e,t){return t.score-e.score})):[]},N.Index.prototype.documentVector=function(e){for(var t=this.documentStore.get(e),n=t.length,i=new N.Vector,o=0;o<n;o++){var r=t.elements[o],s=this.tokenStore.get(r)[e].tf,a=this.idf(r);i.insert(this.corpusTokens.indexOf(r),s*a)}return i},N.Index.prototype.toJSON=function(){return{version:N.version,fields:this._fields,ref:this._ref,tokenizer:this.tokenizerFn.label,documentStore:this.documentStore.toJSON(),tokenStore:this.tokenStore.toJSON(),corpusTokens:this.corpusTokens.toJSON(),pipeline:this.pipeline.toJSON()}},N.Index.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},N.Store=function(){this.store={},this.length=0},N.Store.load=function(n){var e=new this;return e.length=n.length,e.store=Object.keys(n.store).reduce(function(e,t){return e[t]=N.SortedSet.load(n.store[t]),e},{}),e},N.Store.prototype.set=function(e,t){this.has(e)||this.length++,this.store[e]=t},N.Store.prototype.get=function(e){return this.store[e]},N.Store.prototype.has=function(e){return e in this.store},N.Store.prototype.remove=function(e){this.has(e)&&(delete this.store[e],this.length--)},N.Store.prototype.toJSON=function(){return{store:this.store,length:this.length}},N.stemmer=(h={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},l={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},n="[aeiouy]",i="[^aeiou][^aeiouy]*",c=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),d=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),f=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),p=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),g=/^(.+?)(ss|i)es$/,m=/^(.+?)([^s])s$/,v=/^(.+?)eed$/,y=/^(.+?)(ed|ing)$/,S=/.$/,w=/(at|bl|iz)$/,k=new RegExp("([^aeiouylsz])\\1$"),x=new RegExp("^"+i+n+"[^aeiouwxy]$"),b=/^(.+?[^aeiou])y$/,E=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,_=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,F=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,z=/^(.+?)(s|t)(ion)$/,O=/^(.+?)e$/,P=/ll$/,T=new RegExp("^"+i+n+"[^aeiouwxy]$"),function(e){var t,n,i,o,r,s,a;if(e.length<3)return e;if("y"==(i=e.substr(0,1))&&(e=i.toUpperCase()+e.substr(1)),r=m,(o=g).test(e)?e=e.replace(o,"$1$2"):r.test(e)&&(e=e.replace(r,"$1$2")),r=y,(o=v).test(e)){var u=o.exec(e);(o=c).test(u[1])&&(o=S,e=e.replace(o,""))}else r.test(e)&&(t=(u=r.exec(e))[1],(r=p).test(t)&&(s=k,a=x,(r=w).test(e=t)?e+="e":s.test(e)?(o=S,e=e.replace(o,"")):a.test(e)&&(e+="e")));return(o=b).test(e)&&(e=(t=(u=o.exec(e))[1])+"i"),(o=E).test(e)&&(t=(u=o.exec(e))[1],n=u[2],(o=c).test(t)&&(e=t+h[n])),(o=_).test(e)&&(t=(u=o.exec(e))[1],n=u[2],(o=c).test(t)&&(e=t+l[n])),r=z,(o=F).test(e)?(t=(u=o.exec(e))[1],(o=d).test(t)&&(e=t)):r.test(e)&&(t=(u=r.exec(e))[1]+u[2],(r=d).test(t)&&(e=t)),(o=O).test(e)&&(t=(u=o.exec(e))[1],r=f,s=T,((o=d).test(t)||r.test(t)&&!s.test(t))&&(e=t)),r=d,(o=P).test(e)&&r.test(e)&&(o=S,e=e.replace(o,"")),"y"==i&&(e=i.toLowerCase()+e.substr(1)),e}),N.Pipeline.registerFunction(N.stemmer,"stemmer"),N.generateStopWordFilter=function(e){var t=e.reduce(function(e,t){return e[t]=t,e},{});return function(e){return e&&t[e]!==e?e:void 0}},N.stopWordFilter=N.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),N.Pipeline.registerFunction(N.stopWordFilter,"stopWordFilter"),N.trimmer=function(e){var t=e.replace(/^\s+/,"").replace(/\s+$/,"");return""===t?void 0:t},N.Pipeline.registerFunction(N.trimmer,"trimmer"),N.TokenStore=function(){this.root={docs:{}},this.length=0},N.TokenStore.load=function(e){var t=new this;return t.root=e.root,t.length=e.length,t},N.TokenStore.prototype.add=function(e,t,n){n=n||this.root;var i=e.charAt(0),o=e.slice(1);return i in n||(n[i]={docs:{}}),0===o.length?(n[i].docs[t.ref]=t,void(this.length+=1)):this.add(o,t,n[i])},N.TokenStore.prototype.has=function(e){if(!e)return!1;for(var t=this.root,n=0;n<e.length;n++){if(!t[e.charAt(n)])return!1;t=t[e.charAt(n)]}return!0},N.TokenStore.prototype.getNode=function(e){if(!e)return{};for(var t=this.root,n=0;n<e.length;n++){if(!t[e.charAt(n)])return{};t=t[e.charAt(n)]}return t},N.TokenStore.prototype.get=function(e,t){return this.getNode(e,t).docs||{}},N.TokenStore.prototype.count=function(e,t){return Object.keys(this.get(e,t)).length},N.TokenStore.prototype.remove=function(e,t){if(e){for(var n=this.root,i=0;i<e.length;i++){if(!(e.charAt(i)in n))return;n=n[e.charAt(i)]}delete n.docs[t]}},N.TokenStore.prototype.expand=function(t,n){var e=this.getNode(t),i=e.docs||{};n=n||[];return Object.keys(i).length&&n.push(t),Object.keys(e).forEach(function(e){"docs"!==e&&n.concat(this.expand(t+e,n))},this),n},N.TokenStore.prototype.toJSON=function(){return{root:this.root,length:this.length}},e=this,t=function(){return N},"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.lunr=t()}();!function(){function t(){this.config={minScore:1e-5,minNum:3,language:document.querySelector("html").getAttribute("lang")},this.init()}t.prototype={init:function(){this.container=document.getElementById("page-content"),this.loading=this.container.querySelector(".search__loader"),this.tpl=['<h2 class="search__result-wrap">',"en"==this.config.language?"Find <em>{{ num }}</em> {{ enDescription }} <em>{{ query }}</em>":"找到匹配<em>{{ query }}</em>的结果<em>{{ num }}</em>条","</h2>",'<div class="page__posts clearfix">',"{{ posts }}","</div>"].join(""),this.articleTpl=['<div class="page__post">','<article itemscope itemtype="http://schema.org/Article" class="page__mini-article">','<div class="mini-article__cover">','<img itemprop="image" src="{{ cover }}" alt="{{ title }}"/>','<div itemprop="datePublished" content="{{ date }}" class="mini-article__date">','<span class="date__day">{{ day }}</span>','<span class="date__month">{{ month }}</span>',"</div>",'<a itemprop="url" class="iconfont icon-enter" href="{{ url }}index.html"></a>',"</div>",'<div class="mini-article__info">','<h3 itemprop="name" class="mini-article__title">','<a itemprop="url" href="{{ url }}index.html" title="{{ title }}">{{ title }}</a>',"</h3>",'<p class="mini-article__author">by ','<span itemprop="author" itemscope itemtype="http://schema.org/Person">','<a itemprop="url" href="{{ authorLink }}" target="_blank">','<span itemprop="name">{{ authorNick }}</span>',"</a>","</span>","</p>",'<p itemprop="articleSection" class="min-article__desc">',"{{ desc }}","</p>",'<div class="min-article__tags">','<i class="iconfont icon-tab"></i>','<ul class="tags__list clearfix">',"{{ tagsHtml }}","</ul>","</div>","</div>","</article>","</div>"].join(""),this.tagsTpl='<li class="tags__item"><a href="{{ path }}">{{ name }}</a></li>',this.queryString=decodeURIComponent(location.search.split("=")[1]),this.getData()},getData:function(){var e=this;axios.get("/assets/lunr/all.json").then(function(t){return t.data}).then(function(t){e.initSearch(t)})},initSearch:function(t){this.index=lunr.Index.load(t.index),this.sourceData=t.store,this.result=this.index.search(this.queryString),this.filteredData=this.filterSourceData(),this.render()},compileTemplate:function(a,t){var n=a.match(/\{\{\s(\S+)\s\}\}/g),s=[],r="";function e(t){for(var e=a,i=0;i<n.length;i++)e=e.replace(/\{\{\s(\S+)\s\}\}/,t[s[i]]);r=e+r}for(var i=0;i<n.length;i++)s.push(n[i].replace(/\{\{\s(\S+)\s\}\}/,"$1"));return"[object Array]"===Object.prototype.toString.apply(t)?t.forEach(function(t){e(t)}):e(t),r},render:function(){var t=this.filteredData,e="",i="en"==this.config.language?"Sorry,the content of your search does not exist!":"抱歉，您要的内容似乎没有哦，不如换个关键字试试吧。",a=this;console.log("this:"+JSON.stringify(this)),t.length&&(this.filteredData=this.filteredData.map(function(t){return t.tagsHtml=a.compileTemplate(a.tagsTpl,t.tagArr),t}),e=this.compileTemplate(this.articleTpl,this.filteredData),i=this.compileTemplate(this.tpl,{query:this.queryString,num:this.filteredData.length,posts:e,enDescription:1<this.filteredData.length?"results that match":"result that matches"})),this.container.innerHTML=i,setTimeout(function(){window._skappPostAnimation()})},filterSourceData:function(){var i=this,a=[];i.config.minNum;return this.result.forEach(function(t,e){i.config.minScore>t.score&&e>=i.config.minScore.minNum||a.push(i.sourceData[t.ref])}),a}},window.addEventListener("load",function(){new t})}();