var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u={},d=null;function f(e,t){u[e]=t}function p(e,t={}){window.history.pushState({path:e,params:t},``,`#${e}`),m(e,t)}async function m(e,t={}){let n=u[e];if(!n){console.warn(`Route not found: ${e}`),p(`/`);return}d||=document.getElementById(`app`);let r=document.createElement(`div`);r.className=`page page-enter`,r.id=`page-${e.replace(/\//g,`-`)}`;let i=d.querySelector(`.page`),a=await n(t);if(typeof a==`string`?r.innerHTML=a:a instanceof HTMLElement&&r.appendChild(a),i)i.replaceWith(r);else{let e=d.querySelector(`.bottom-nav`);e?d.insertBefore(r,e):d.appendChild(r)}h(e),window.scrollTo(0,0)}function h(e){let t=document.querySelectorAll(`.nav-item`),n=`/`+(e.split(`/`)[1]||``);t.forEach(e=>{let t=e.dataset.path;e.classList.toggle(`active`,t===n||n===`/`&&t===`/`)})}function g(){window.addEventListener(`popstate`,e=>{e.state&&e.state.path?m(e.state.path,e.state.params||{}):m(window.location.hash.slice(1)||`/`)}),p(window.location.hash.slice(1)||`/`)}var _=null,v=null,y=null;function b(){if(_=new Audio,_.crossOrigin=`anonymous`,`speechSynthesis`in window){v=window.speechSynthesis;function e(){let e=v.getVoices();y=e.find(e=>e.lang===`es-ES`&&e.localService)||e.find(e=>e.lang===`es-ES`)||e.find(e=>e.lang.startsWith(`es-`))}e(),v.onvoiceschanged!==void 0&&(v.onvoiceschanged=e)}}function x(e,t=1){if(!e)return;let n=e.replace(/\.\.\./g,` `).replace(/\//g,` `).trim();if(!n)return;C();let r=`https://translate.googleapis.com/translate_tts?ie=UTF-8&tl=es-ES&client=gtx&q=${encodeURIComponent(n)}&ttsspeed=${t}`;_.src=r,_.playbackRate=t;let i=_.play();i&&i.catch(()=>{S(n,t)})}function S(e,t=.9){if(!v)return;v.cancel();let n=new SpeechSynthesisUtterance(e);n.lang=`es-ES`,n.rate=t,n.pitch=1,n.volume=1,y&&(n.voice=y),v.speak(n)}function C(){_&&(_.pause(),_.currentTime=0),v&&v.cancel()}var ee=l(o(((e,t)=>{((n,r)=>{typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).Dexie=r()})(e,function(){var e=function(t,n){return(e=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))(t,n)},t=function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function n(e,t,n){if(n||arguments.length===2)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||((r||=Array.prototype.slice.call(t,0,i))[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var r=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,i=Object.keys,a=Array.isArray;function o(e,t){return typeof t==`object`&&i(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>`u`||r.Promise||(r.Promise=Promise);var s=Object.getPrototypeOf,c={}.hasOwnProperty;function l(e,t){return c.call(e,t)}function u(e,t){typeof t==`function`&&(t=t(s(e))),(typeof Reflect>`u`?i:Reflect.ownKeys)(t).forEach(function(n){f(e,n,t[n])})}var d=Object.defineProperty;function f(e,t,n,r){d(e,t,o(n&&l(n,`get`)&&typeof n.get==`function`?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function p(e){return{from:function(t){return e.prototype=Object.create(t.prototype),f(e.prototype,`constructor`,e),{extend:u.bind(null,e.prototype)}}}}var m=Object.getOwnPropertyDescriptor,h=[].slice;function g(e,t,n){return h.call(e,t,n)}function _(e,t){return t(e)}function v(e){if(!e)throw Error(`Assertion Failed`)}function y(e){r.setImmediate?setImmediate(e):setTimeout(e,0)}function b(e,t){if(typeof t==`string`&&l(e,t))return e[t];if(!t)return e;if(typeof t!=`string`){for(var n=[],r=0,i=t.length;r<i;++r){var a=b(e,t[r]);n.push(a)}return n}var o,s=t.indexOf(`.`);return s===-1||(o=e[t.substr(0,s)])==null?void 0:b(o,t.substr(s+1))}function x(e,t,n){if(e&&t!==void 0&&!(`isFrozen`in Object&&Object.isFrozen(e))){if(typeof t!=`string`&&`length`in t){v(typeof n!=`string`&&`length`in n);for(var r=0,i=t.length;r<i;++r)x(e,t[r],n[r])}else{var o=t.indexOf(`.`);if(o!==-1){var s=t.substr(0,o),o=t.substr(o+1);if(o===``)n===void 0?a(e)&&!isNaN(parseInt(s))?e.splice(s,1):delete e[s]:e[s]=n;else{var c=e[s];if(!c||!l(e,s)){if(n===void 0)return;c=e[s]={}}x(c,o,n)}}else n===void 0?a(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}}function S(e){var t,n={};for(t in e)l(e,t)&&(n[t]=e[t]);return n}var C=[].concat;function ee(e){return C.apply([],e)}var w=`BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey`.split(`,`).concat(ee([8,16,32,64].map(function(e){return[`Int`,`Uint`,`Float`].map(function(t){return t+e+`Array`})}))).filter(function(e){return r[e]}),te=new Set(w.map(function(e){return r[e]})),ne=null;function re(e){return ne=new WeakMap,e=function e(t){if(!t||typeof t!=`object`)return t;var n=ne.get(t);if(n)return n;if(a(t)){n=[],ne.set(t,n);for(var r=0,i=t.length;r<i;++r)n.push(e(t[r]))}else if(te.has(t.constructor))n=t;else{var o,c=s(t);for(o in n=c===Object.prototype?{}:Object.create(c),ne.set(t,n),t)l(t,o)&&(n[o]=e(t[o]))}return n}(e),ne=null,e}var ie={}.toString;function ae(e){return ie.call(e).slice(8,-1)}var oe=typeof Symbol<`u`?Symbol.iterator:`@@iterator`,se=typeof oe==`symbol`?function(e){var t;return e!=null&&(t=e[oe])&&t.apply(e)}:function(){return null};function ce(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var le={};function ue(e){var t,n,r,i;if(arguments.length===1){if(a(e))return e.slice();if(this===le&&typeof e==`string`)return[e];if(i=se(e))for(n=[];!(r=i.next()).done;)n.push(r.value);else{if(e==null||typeof(t=e.length)!=`number`)return[e];for(n=Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=Array(t);t--;)n[t]=arguments[t];return n}var de=typeof Symbol<`u`?function(e){return e[Symbol.toStringTag]===`AsyncFunction`}:function(){return!1},w=[`Unknown`,`Constraint`,`Data`,`TransactionInactive`,`ReadOnly`,`Version`,`NotFound`,`InvalidState`,`InvalidAccess`,`Abort`,`Timeout`,`QuotaExceeded`,`Syntax`,`DataClone`],T=[`Modify`,`Bulk`,`OpenFailed`,`VersionChange`,`Schema`,`Upgrade`,`InvalidTable`,`MissingAPI`,`NoSuchDatabase`,`InvalidArgument`,`SubTransaction`,`Unsupported`,`Internal`,`DatabaseClosed`,`PrematureCommit`,`ForeignAwait`].concat(w),fe={VersionChanged:`Database version changed by other database connection`,DatabaseClosed:`Database has been closed`,Abort:`Transaction aborted`,TransactionInactive:`Transaction has already completed or failed`,MissingAPI:`IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb`};function pe(e,t){this.name=e,this.message=t}function me(e,t){return e+`. Errors: `+Object.keys(t).map(function(e){return t[e].toString()}).filter(function(e,t,n){return n.indexOf(e)===t}).join(`
`)}function he(e,t,n,r){this.failures=t,this.failedKeys=r,this.successCount=n,this.message=me(e,t)}function ge(e,t){this.name=`BulkError`,this.failures=Object.keys(t).map(function(e){return t[e]}),this.failuresByPos=t,this.message=me(e,this.failures)}p(pe).from(Error).extend({toString:function(){return this.name+`: `+this.message}}),p(he).from(pe),p(ge).from(pe);var E=T.reduce(function(e,t){return e[t]=t+`Error`,e},{}),_e=pe,D=T.reduce(function(e,t){var n=t+`Error`;function r(e,r){this.name=n,e?typeof e==`string`?(this.message=`${e}${r?`
 `+r:``}`,this.inner=r||null):typeof e==`object`&&(this.message=`${e.name} ${e.message}`,this.inner=e):(this.message=fe[t]||n,this.inner=null)}return p(r).from(_e),e[t]=r,e},{}),ve=(D.Syntax=SyntaxError,D.Type=TypeError,D.Range=RangeError,w.reduce(function(e,t){return e[t+`Error`]=D[t],e},{}));w=T.reduce(function(e,t){return[`Syntax`,`Type`,`Range`].indexOf(t)===-1&&(e[t+`Error`]=D[t]),e},{});function O(){}function ye(e){return e}function be(e,t){return e==null||e===ye?t:function(n){return t(e(n))}}function k(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function xe(e,t){return e===O?t:function(){var n=e.apply(this,arguments),r=(n!==void 0&&(arguments[0]=n),this.onsuccess),i=this.onerror,a=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?k(r,this.onsuccess):r),i&&(this.onerror=this.onerror?k(i,this.onerror):i),a===void 0?n:a}}function Se(e,t){return e===O?t:function(){e.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?k(n,this.onsuccess):n),r&&(this.onerror=this.onerror?k(r,this.onerror):r)}}function Ce(e,t){return e===O?t:function(n){var r=e.apply(this,arguments),n=(o(n,r),this.onsuccess),i=this.onerror,a=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return n&&(this.onsuccess=this.onsuccess?k(n,this.onsuccess):n),i&&(this.onerror=this.onerror?k(i,this.onerror):i),r===void 0?a===void 0?void 0:a:o(r,a)}}function we(e,t){return e===O?t:function(){return!1!==t.apply(this,arguments)&&e.apply(this,arguments)}}function Te(e,t){return e===O?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then==`function`){for(var r=this,i=arguments.length,a=Array(i);i--;)a[i]=arguments[i];return n.then(function(){return t.apply(r,a)})}return t.apply(this,arguments)}}w.ModifyError=he,w.DexieError=pe,w.BulkError=ge;var A=typeof location<`u`&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ee(e){A=e}var De={},Oe=100,j=typeof Promise>`u`?[]:(T=Promise.resolve(),typeof crypto<`u`&&crypto.subtle?[j=crypto.subtle.digest(`SHA-512`,new Uint8Array([0])),s(j),T]:[T,s(T),T]),T=j[0],ke=j[1],ke=ke&&ke.then,Ae=T&&T.constructor,je=!!j[2],Me=function(e,t){Re.push([e,t]),Pe&&=(queueMicrotask(We),!1)},Ne=!0,Pe=!0,Fe=[],Ie=[],Le=ye,M={id:`global`,global:!0,ref:0,unhandleds:[],onunhandled:O,pgp:!1,env:{},finalize:O},N=M,Re=[],P=0,F=[];function I(e){if(typeof this!=`object`)throw TypeError(`Promises must be constructed via new`);this._listeners=[],this._lib=!1;var t=this._PSD=N;if(typeof e!=`function`){if(e!==De)throw TypeError(`Not a function`);this._state=arguments[1],this._value=arguments[2],!1===this._state&&Be(this,this._value)}else this._state=null,this._value=null,++t.ref,function e(t,n){try{n(function(n){if(t._state===null){if(n===t)throw TypeError(`A promise cannot be resolved with itself.`);var r=t._lib&&R();n&&typeof n.then==`function`?e(t,function(e,t){n instanceof I?n._then(e,t):n.then(e,t)}):(t._state=!0,t._value=n,Ve(t)),r&&Ge()}},Be.bind(null,t))}catch(e){Be(t,e)}}(this,e)}var L={get:function(){var e=N,t=V;function n(n,r){var i=this,a=!e.global&&(e!==N||t!==V),o=a&&!Qe(),s=new I(function(t,s){He(i,new ze(it(n,e,a,o),it(r,e,a,o),t,s,e))});return this._consoleTask&&(s._consoleTask=this._consoleTask),s}return n.prototype=De,n},set:function(e){f(this,`then`,e&&e.prototype===De?L:{get:function(){return e},set:L.set})}};function ze(e,t,n,r,i){this.onFulfilled=typeof e==`function`?e:null,this.onRejected=typeof t==`function`?t:null,this.resolve=n,this.reject=r,this.psd=i}function Be(e,t){var n,r;Ie.push(t),e._state===null&&(n=e._lib&&R(),t=Le(t),e._state=!1,e._value=t,r=e,Fe.some(function(e){return e._value===r._value})||Fe.push(r),Ve(e),n)&&Ge()}function Ve(e){var t=e._listeners;e._listeners=[];for(var n=0,r=t.length;n<r;++n)He(e,t[n]);var i=e._PSD;--i.ref||i.finalize(),P===0&&(++P,Me(function(){--P==0&&Ke()},[]))}function He(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++P,Me(Ue,[n,e,t])}}function Ue(e,t,n){try{var r,i=t._value;!t._state&&Ie.length&&(Ie=[]),r=A&&t._consoleTask?t._consoleTask.run(function(){return e(i)}):e(i),t._state||Ie.indexOf(i)!==-1||(e=>{for(var t=Fe.length;t;)if(Fe[--t]._value===e._value)return Fe.splice(t,1)})(t),n.resolve(r)}catch(e){n.reject(e)}finally{--P==0&&Ke(),--n.psd.ref||n.psd.finalize()}}function We(){rt(M,function(){R()&&Ge()})}function R(){var e=Ne;return Pe=Ne=!1,e}function Ge(){var e,t,n;do for(;0<Re.length;)for(e=Re,Re=[],n=e.length,t=0;t<n;++t){var r=e[t];r[0].apply(null,r[1])}while(0<Re.length);Pe=Ne=!0}function Ke(){for(var e=Fe,t=(Fe=[],e.forEach(function(e){e._PSD.onunhandled.call(null,e._value,e)}),F.slice(0)),n=t.length;n;)t[--n]()}function qe(e){return new I(De,!1,e)}function z(e,t){var n=N;return function(){var r=R(),i=N;try{return tt(n,!0),e.apply(this,arguments)}catch(e){t&&t(e)}finally{tt(i,!1),r&&Ge()}}}u(I.prototype,{then:L,_then:function(e,t){He(this,new ze(null,null,e,t,N))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t==`function`?this.then(null,function(e){return(e instanceof t?n:qe)(e)}):this.then(null,function(e){return(e&&e.name===t?n:qe)(e)}))},finally:function(e){return this.then(function(t){return I.resolve(e()).then(function(){return t})},function(t){return I.resolve(e()).then(function(){return qe(t)})})},timeout:function(e,t){var n=this;return e<1/0?new I(function(r,i){var a=setTimeout(function(){return i(new D.Timeout(t))},e);n.then(r,i).finally(clearTimeout.bind(null,a))}):this}}),typeof Symbol<`u`&&Symbol.toStringTag&&f(I.prototype,Symbol.toStringTag,`Dexie.Promise`),M.env=nt(),u(I,{all:function(){var e=ue.apply(null,arguments).map($e);return new I(function(t,n){e.length===0&&t([]);var r=e.length;e.forEach(function(i,a){return I.resolve(i).then(function(n){e[a]=n,--r||t(e)},n)})})},resolve:function(e){return e instanceof I?e:e&&typeof e.then==`function`?new I(function(t,n){e.then(t,n)}):new I(De,!0,e)},reject:qe,race:function(){var e=ue.apply(null,arguments).map($e);return new I(function(t,n){e.map(function(e){return I.resolve(e).then(t,n)})})},PSD:{get:function(){return N},set:function(e){return N=e}},totalEchoes:{get:function(){return V}},newPSD:H,usePSD:rt,scheduler:{get:function(){return Me},set:function(e){Me=e}},rejectionMapper:{get:function(){return Le},set:function(e){Le=e}},follow:function(e,t){return new I(function(n,r){return H(function(t,n){var r=N;r.unhandleds=[],r.onunhandled=n,r.finalize=k(function(){var e,r=this;e=function(){r.unhandleds.length===0?t():n(r.unhandleds[0])},F.push(function t(){e(),F.splice(F.indexOf(t),1)}),++P,Me(function(){--P==0&&Ke()},[])},r.finalize),e()},t,n,r)})}}),Ae&&(Ae.allSettled&&f(I,`allSettled`,function(){var e=ue.apply(null,arguments).map($e);return new I(function(t){e.length===0&&t([]);var n=e.length,r=Array(n);e.forEach(function(e,i){return I.resolve(e).then(function(e){return r[i]={status:`fulfilled`,value:e}},function(e){return r[i]={status:`rejected`,reason:e}}).then(function(){return--n||t(r)})})})}),Ae.any&&typeof AggregateError<`u`&&f(I,`any`,function(){var e=ue.apply(null,arguments).map($e);return new I(function(t,n){e.length===0&&n(AggregateError([]));var r=e.length,i=Array(r);e.forEach(function(e,a){return I.resolve(e).then(function(e){return t(e)},function(e){i[a]=e,--r||n(AggregateError(i))})})})}),Ae.withResolvers)&&(I.withResolvers=Ae.withResolvers);var B={awaits:0,echoes:0,id:0},Je=0,Ye=[],Xe=0,V=0,Ze=0;function H(e,t,n,r){var i=N,a=Object.create(i),t=(a.parent=i,a.ref=0,a.global=!1,a.id=++Ze,M.env,a.env=je?{Promise:I,PromiseProp:{value:I,configurable:!0,writable:!0},all:I.all,race:I.race,allSettled:I.allSettled,any:I.any,resolve:I.resolve,reject:I.reject}:{},t&&o(a,t),++i.ref,a.finalize=function(){--this.parent.ref||this.parent.finalize()},rt(a,e,n,r));return a.ref===0&&a.finalize(),t}function U(){return B.id||=++Je,++B.awaits,B.echoes+=Oe,B.id}function Qe(){return!!B.awaits&&(--B.awaits==0&&(B.id=0),B.echoes=B.awaits*Oe,!0)}function $e(e){return B.echoes&&e&&e.constructor===Ae?(U(),e.then(function(e){return Qe(),e},function(e){return Qe(),W(e)})):e}function et(){var e=Ye[Ye.length-1];Ye.pop(),tt(e,!1)}function tt(e,t){var n,i,a=N;(t?!B.echoes||Xe++&&e===N:!Xe||--Xe&&e===N)||queueMicrotask(t?function(e){++V,B.echoes&&--B.echoes!=0||(B.echoes=B.awaits=B.id=0),Ye.push(N),tt(e,!0)}.bind(null,e):et),e!==N&&(N=e,a===M&&(M.env=nt()),je)&&(n=M.env.Promise,i=e.env,a.global||e.global)&&(Object.defineProperty(r,"Promise",i.PromiseProp),n.all=i.all,n.race=i.race,n.resolve=i.resolve,n.reject=i.reject,i.allSettled&&(n.allSettled=i.allSettled),i.any)&&(n.any=i.any)}function nt(){var e=r.Promise;return je?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(r,`Promise`),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function rt(e,t,n,r,i){var a=N;try{return tt(e,!0),t(n,r,i)}finally{tt(a,!1)}}function it(e,t,n,r){return typeof e==`function`?function(){var i=N;n&&U(),tt(t,!0);try{return e.apply(this,arguments)}finally{tt(i,!1),r&&queueMicrotask(Qe)}}:e}function at(e){Promise===Ae&&B.echoes===0?Xe===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(``+ke).indexOf(`[native code]`)===-1&&(U=Qe=O);var W=I.reject,ot=`￿`,st=`Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.`,ct=`String expected.`,lt=`__dbnames`,ut=`readonly`,dt=`readwrite`;function ft(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var pt={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function mt(e){return typeof e!=`string`||/\./.test(e)?function(e){return e}:function(t){return t[e]===void 0&&e in t&&delete(t=re(t))[e],t}}function ht(){throw D.Type(`Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.`)}function G(e,t){try{var n=gt(e),r=gt(t);if(n!==r)return n===`Array`?1:r===`Array`?-1:n===`binary`?1:r===`binary`?-1:n===`string`?1:r===`string`?-1:n===`Date`?1:r===`Date`?-1:NaN;switch(n){case`number`:case`Date`:case`string`:return t<e?1:e<t?-1:0;case`binary`:for(var i=_t(e),a=_t(t),o=i.length,s=a.length,c=o<s?o:s,l=0;l<c;++l)if(i[l]!==a[l])return i[l]<a[l]?-1:1;return o===s?0:o<s?-1:1;case`Array`:for(var u=e,d=t,f=u.length,p=d.length,m=f<p?f:p,h=0;h<m;++h){var g=G(u[h],d[h]);if(g!==0)return g}return f===p?0:f<p?-1:1}}catch{}return NaN}function gt(e){var t=typeof e;return t==`object`&&(ArrayBuffer.isView(e)||(t=ae(e))===`ArrayBuffer`)?`binary`:t}function _t(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function vt(e,t,n){var r=e.schema.yProps;return r?(t&&0<n.numFailures&&(t=t.filter(function(e,t){return!n.failures[t]})),Promise.all(r.map(function(n){return n=n.updatesTable,t?e.db.table(n).where(`k`).anyOf(t).delete():e.db.table(n).clear()})).then(function(){return n})):n}bt.prototype.execute=function(e){var t=this[`@@propmod`];if(t.add!==void 0){var r=t.add;if(a(r))return n(n([],a(e)?e:[],!0),r,!0).sort();if(typeof r==`number`)return(Number(e)||0)+r;if(typeof r==`bigint`)try{return BigInt(e)+r}catch{return BigInt(0)+r}throw TypeError(`Invalid term ${r}`)}if(t.remove!==void 0){var i=t.remove;if(a(i))return a(e)?e.filter(function(e){return!i.includes(e)}).sort():[];if(typeof i==`number`)return Number(e)-i;if(typeof i==`bigint`)try{return BigInt(e)-i}catch{return BigInt(0)-i}throw TypeError(`Invalid subtrahend ${i}`)}return r=(r=t.replacePrefix)?.[0],r&&typeof e==`string`&&e.startsWith(r)?t.replacePrefix[1]+e.substring(r.length):e};var yt=bt;function bt(e){this[`@@propmod`]=e}function xt(e,t){for(var n=i(t),r=n.length,a=!1,o=0;o<r;++o){var s=n[o],c=t[s],l=b(e,s);c instanceof yt?(x(e,s,c.execute(l)),a=!0):l!==c&&(x(e,s,c),a=!0)}return a}K.prototype._trans=function(e,t,n){var r=this._tx||N.trans,i=this.name,a=A&&typeof console<`u`&&console.createTask&&console.createTask(`Dexie: ${e===`readonly`?`read`:`write`} ${this.name}`);function o(e,n,r){if(r.schema[i])return t(r.idbtrans,r);throw new D.NotFound(`Table `+i+` not part of transaction`)}var s=R();try{var c=r&&r.db._novip===this.db._novip?r===N.trans?r._promise(e,o,n):H(function(){return r._promise(e,o,n)},{trans:r,transless:N.transless||N}):function e(t,n,r,i){if(t.idbdb&&(t._state.openComplete||N.letThrough||t._vip)){var a=t._createTransaction(n,r,t._dbSchema);try{a.create(),t._state.PR1398_maxLoop=3}catch(a){return a.name===E.InvalidState&&t.isOpen()&&0<--t._state.PR1398_maxLoop?(console.warn(`Dexie: Need to reopen db`),t.close({disableAutoOpen:!1}),t.open().then(function(){return e(t,n,r,i)})):W(a)}return a._promise(n,function(e,t){return H(function(){return N.trans=a,i(e,t,a)})}).then(function(e){if(n===`readwrite`)try{a.idbtrans.commit()}catch{}return n===`readonly`?e:a._completion.then(function(){return e})})}if(t._state.openComplete)return W(new D.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return W(new D.DatabaseClosed);t.open().catch(O)}return t._state.dbReadyPromise.then(function(){return e(t,n,r,i)})}(this.db,e,[this.name],o);return a&&(c._consoleTask=a,c=c.catch(function(e){return console.trace(e),W(e)})),c}finally{s&&Ge()}},K.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?W(new D.Type(`Invalid argument to Table.get()`)):this._trans(`readonly`,function(t){return n.core.get({trans:t,key:e}).then(function(e){return n.hook.reading.fire(e)})}).then(t)},K.prototype.where=function(e){if(typeof e==`string`)return new this.db.WhereClause(this,e);if(a(e))return new this.db.WhereClause(this,`[${e.join(`+`)}]`);var t=i(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(e){if(e.compound&&t.every(function(t){return 0<=e.keyPath.indexOf(t)})){for(var n=0;n<t.length;++n)if(t.indexOf(e.keyPath[n])===-1)return!1;return!0}return!1}).sort(function(e,t){return e.keyPath.length-t.keyPath.length})[0];if(n&&this.db._maxKey!==ot)return s=n.keyPath.slice(0,t.length),this.where(s).equals(s.map(function(t){return e[t]}));!n&&A&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit from a compound index [${t.join(`+`)}]`);var r=this.schema.idxByName;function o(e,t){return G(e,t)===0}var s=t.reduce(function(t,n){var i=t[0],t=t[1],s=r[n],c=e[n];return[i||s,i||!s?ft(t,s&&s.multi?function(e){return e=b(e,n),a(e)&&e.some(function(e){return o(c,e)})}:function(e){return o(c,b(e,n))}):t]},[null,null]),c=s[0],s=s[1];return c?this.where(c.name).equals(e[c.keyPath]).filter(s):n?this.filter(s):this.where(t).equals(``)},K.prototype.filter=function(e){return this.toCollection().and(e)},K.prototype.count=function(e){return this.toCollection().count(e)},K.prototype.offset=function(e){return this.toCollection().offset(e)},K.prototype.limit=function(e){return this.toCollection().limit(e)},K.prototype.each=function(e){return this.toCollection().each(e)},K.prototype.toArray=function(e){return this.toCollection().toArray(e)},K.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},K.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,a(e)?`[${e.join(`+`)}]`:e))},K.prototype.reverse=function(){return this.toCollection().reverse()},K.prototype.mapToClass=function(t){for(var n=this.db,r=this.name,i=((this.schema.mappedClass=t).prototype instanceof ht&&(t=(t=>{var i=s,a=t;if(typeof a!=`function`&&a!==null)throw TypeError(`Class extends value `+String(a)+` is not a constructor or null`);function o(){this.constructor=i}function s(){return t!==null&&t.apply(this,arguments)||this}return e(i,a),i.prototype=a===null?Object.create(a):(o.prototype=a.prototype,new o),Object.defineProperty(s.prototype,"db",{get:function(){return n},enumerable:!1,configurable:!0}),s.prototype.table=function(){return r},s})(t)),new Set),a=t.prototype;a;a=s(a))Object.getOwnPropertyNames(a).forEach(function(e){return i.add(e)});function o(e){if(!e)return e;var n,r=Object.create(t.prototype);for(n in e)if(!i.has(n))try{r[n]=e[n]}catch{}return r}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=o,this.hook(`reading`,o),t},K.prototype.defineClass=function(){return this.mapToClass(function(e){o(this,e)})},K.prototype.add=function(e,t){var n=this,r=this.schema.primKey,i=r.auto,a=r.keyPath,o=e;return a&&i&&(o=mt(a)(e)),this._trans(`readwrite`,function(e){return n.core.mutate({trans:e,type:`add`,keys:t==null?null:[t],values:[o]})}).then(function(e){return e.numFailures?I.reject(e.failures[0]):e.lastResult}).then(function(t){if(a)try{x(e,a,t)}catch{}return t})},K.prototype.upsert=function(e,t){var n=this,r=this.schema.primKey.keyPath;return this._trans(`readwrite`,function(i){return n.core.get({trans:i,key:e}).then(function(a){var o=a??{};return xt(o,t),r&&x(o,r,e),n.core.mutate({trans:i,type:`put`,values:[o],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(e){return e.numFailures?I.reject(e.failures[0]):!!a})})})},K.prototype.update=function(e,t){return typeof e!=`object`||a(e)?this.where(`:id`).equals(e).modify(t):(e=b(e,this.schema.primKey.keyPath))===void 0?W(new D.InvalidArgument(`Given object does not contain its primary key`)):this.where(`:id`).equals(e).modify(t)},K.prototype.put=function(e,t){var n=this,r=this.schema.primKey,i=r.auto,a=r.keyPath,o=e;return a&&i&&(o=mt(a)(e)),this._trans(`readwrite`,function(e){return n.core.mutate({trans:e,type:`put`,values:[o],keys:t==null?null:[t]})}).then(function(e){return e.numFailures?I.reject(e.failures[0]):e.lastResult}).then(function(t){if(a)try{x(e,a,t)}catch{}return t})},K.prototype.delete=function(e){var t=this;return this._trans(`readwrite`,function(n){return t.core.mutate({trans:n,type:`delete`,keys:[e]}).then(function(n){return vt(t,[e],n)}).then(function(e){return e.numFailures?I.reject(e.failures[0]):void 0})})},K.prototype.clear=function(){var e=this;return this._trans(`readwrite`,function(t){return e.core.mutate({trans:t,type:`deleteRange`,range:pt}).then(function(t){return vt(e,null,t)})}).then(function(e){return e.numFailures?I.reject(e.failures[0]):void 0})},K.prototype.bulkGet=function(e){var t=this;return this._trans(`readonly`,function(n){return t.core.getMany({keys:e,trans:n}).then(function(e){return e.map(function(e){return t.hook.reading.fire(e)})})})},K.prototype.bulkAdd=function(e,t,n){var r=this,i=Array.isArray(t)?t:void 0,a=(n||=i?void 0:t)?n.allKeys:void 0;return this._trans(`readwrite`,function(t){var n=r.schema.primKey,o=n.auto,n=n.keyPath;if(n&&i)throw new D.InvalidArgument(`bulkAdd(): keys argument invalid on tables with inbound keys`);if(i&&i.length!==e.length)throw new D.InvalidArgument(`Arguments objects and keys must have the same length`);var s=e.length,o=n&&o?e.map(mt(n)):e;return r.core.mutate({trans:t,type:`add`,keys:i,values:o,wantResults:a}).then(function(e){var t=e.numFailures,n=e.failures;if(t===0)return a?e.results:e.lastResult;throw new ge(`${r.name}.bulkAdd(): ${t} of ${s} operations failed`,n)})})},K.prototype.bulkPut=function(e,t,n){var r=this,i=Array.isArray(t)?t:void 0,a=(n||=i?void 0:t)?n.allKeys:void 0;return this._trans(`readwrite`,function(t){var n=r.schema.primKey,o=n.auto,n=n.keyPath;if(n&&i)throw new D.InvalidArgument(`bulkPut(): keys argument invalid on tables with inbound keys`);if(i&&i.length!==e.length)throw new D.InvalidArgument(`Arguments objects and keys must have the same length`);var s=e.length,o=n&&o?e.map(mt(n)):e;return r.core.mutate({trans:t,type:`put`,keys:i,values:o,wantResults:a}).then(function(e){var t=e.numFailures,n=e.failures;if(t===0)return a?e.results:e.lastResult;throw new ge(`${r.name}.bulkPut(): ${t} of ${s} operations failed`,n)})})},K.prototype.bulkUpdate=function(e){var t=this,n=this.core,r=e.map(function(e){return e.key}),i=e.map(function(e){return e.changes}),a=[];return this._trans(`readwrite`,function(o){return n.getMany({trans:o,keys:r,cache:`clone`}).then(function(s){var c=[],l=[],u=(e.forEach(function(e,n){var r=e.key,i=e.changes,o=s[n];if(o){for(var u=0,d=Object.keys(i);u<d.length;u++){var f=d[u],p=i[f];if(f===t.schema.primKey.keyPath){if(G(p,r)!==0)throw new D.Constraint(`Cannot update primary key in bulkUpdate()`)}else x(o,f,p)}a.push(n),c.push(r),l.push(o)}}),c.length);return n.mutate({trans:o,type:`put`,keys:c,values:l,updates:{keys:r,changeSpecs:i}}).then(function(e){var n=e.numFailures,r=e.failures;if(n===0)return u;for(var i=0,o=Object.keys(r);i<o.length;i++){var s,c=o[i],l=a[Number(c)];l!=null&&(s=r[c],delete r[c],r[l]=s)}throw new ge(`${t.name}.bulkUpdate(): ${n} of ${u} operations failed`,r)})})})},K.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans(`readwrite`,function(n){return t.core.mutate({trans:n,type:`delete`,keys:e}).then(function(n){return vt(t,e,n)})}).then(function(e){var r=e.numFailures,i=e.failures;if(r===0)return e.lastResult;throw new ge(`${t.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})};var St=K;function K(){}function Ct(e){function t(t,r){if(r){for(var i=arguments.length,a=Array(i-1);--i;)a[i-1]=arguments[i];return n[t].subscribe.apply(null,a),e}if(typeof t==`string`)return n[t]}var n={};t.addEventType=s;for(var r=1,o=arguments.length;r<o;++r)s(arguments[r]);return t;function s(e,r,o){var c,l;if(typeof e!=`object`)return r||=we,l={subscribers:[],fire:o||=O,subscribe:function(e){l.subscribers.indexOf(e)===-1&&(l.subscribers.push(e),l.fire=r(l.fire,e))},unsubscribe:function(e){l.subscribers=l.subscribers.filter(function(t){return t!==e}),l.fire=l.subscribers.reduce(r,o)}},n[e]=t[e]=l;i(c=e).forEach(function(e){var t=c[e];if(a(t))s(e,c[e][0],c[e][1]);else{if(t!==`asap`)throw new D.InvalidArgument(`Invalid event config`);var n=s(e,ye,function(){for(var e=arguments.length,t=Array(e);e--;)t[e]=arguments[e];n.subscribers.forEach(function(e){y(function(){e.apply(null,t)})})})}})}}function wt(e,t){return p(t).from({prototype:e}),t}function Tt(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Et(e,t){e.filter=ft(e.filter,t)}function Dt(e,t,n){var r=e.replayFilter;e.replayFilter=r?function(){return ft(r(),t())}:t,e.justLimit=n&&!r}function Ot(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new D.Schema(`KeyPath `+e.index+` on object store `+t.name+` is not indexed`)}function kt(e,t,n){var r=Ot(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir===`prev`,unique:!!e.unique,query:{index:r,range:e.range}})}function At(e,t,n,r){var i,a,o=e.replayFilter?ft(e.filter,e.replayFilter()):e.filter;return e.or?(i={},a=function(e,n,r){var a,s;o&&!o(n,r,function(e){return n.stop(e)},function(e){return n.fail(e)})||((s=``+(a=n.primaryKey))==`[object ArrayBuffer]`&&(s=``+new Uint8Array(a)),l(i,s))||(i[s]=!0,t(e,n,r))},Promise.all([e.or._iterate(a,n),jt(kt(e,r,n),e.algorithm,a,!e.keysOnly&&e.valueMapper)])):jt(kt(e,r,n),ft(e.algorithm,o),t,!e.keysOnly&&e.valueMapper)}function jt(e,t,n,r){var i=z(r?function(e,t,i){return n(r(e),t,i)}:n);return e.then(function(e){if(e)return e.start(function(){var n=function(){return e.continue()};t&&!t(e,function(e){return n=e},function(t){e.stop(t),n=O},function(t){e.fail(t),n=O})||i(e.value,e,function(e){return n=e}),n()})})}q.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,W.bind(null,n.error)):n.table._trans(`readonly`,e).then(t)},q.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,W.bind(null,t.error)):t.table._trans(`readwrite`,e,`locked`)},q.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=ft(t.algorithm,e)},q.prototype._iterate=function(e,t){return At(this._ctx,e,t,this._ctx.table.core)},q.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&o(n,e),t._ctx=n,t},q.prototype.raw=function(){return this._ctx.valueMapper=null,this},q.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return At(t,e,n,t.table.core)})},q.prototype.count=function(e){var t=this;return this._read(function(e){var n,r=t._ctx,i=r.table.core;return Tt(r,!0)?i.count({trans:e,query:{index:Ot(r,i.schema),range:r.range}}).then(function(e){return Math.min(e,r.limit)}):(n=0,At(r,function(){return++n,!1},e,i).then(function(){return n}))}).then(e)},q.prototype.sortBy=function(e,t){var n=e.split(`.`).reverse(),r=n[0],i=n.length-1;function a(e,t){return t?a(e[n[t]],t-1):e[r]}var o=this._ctx.dir===`next`?1:-1;function s(e,t){return G(a(e,i),a(t,i))*o}return this.toArray(function(e){return e.slice().sort(s)}).then(t)},q.prototype.toArray=function(e){var t=this;return this._read(function(e){var n,r,i,a=t._ctx;return Tt(a,!0)&&0<a.limit?(n=a.valueMapper,r=Ot(a,a.table.core.schema),a.table.core.query({trans:e,limit:a.limit,values:!0,direction:a.dir===`prev`?`prev`:void 0,query:{index:r,range:a.range}}).then(function(e){return e=e.result,n?e.map(n):e})):(i=[],At(a,function(e){return i.push(e)},e,a.table.core).then(function(){return i}))},e)},q.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,Tt(t)?Dt(t,function(){var t=e;return function(e,n){return t===0||(t===1?--t:n(function(){e.advance(t),t=0}),!1)}}):Dt(t,function(){var t=e;return function(){return--t<0}})),this},q.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Dt(this._ctx,function(){var t=e;return function(e,n,r){return--t<=0&&n(r),0<=t}},!0),this},q.prototype.until=function(e,t){return Et(this._ctx,function(n,r,i){return!e(n.value)||(r(i),t)}),this},q.prototype.first=function(e){return this.limit(1).toArray(function(e){return e[0]}).then(e)},q.prototype.last=function(e){return this.reverse().first(e)},q.prototype.filter=function(e){var t;return Et(this._ctx,function(t){return e(t.value)}),(t=this._ctx).isMatch=ft(t.isMatch,e),this},q.prototype.and=function(e){return this.filter(e)},q.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},q.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir===`prev`?`next`:`prev`,this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},q.prototype.desc=function(){return this.reverse()},q.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(t,n){e(n.key,n)})},q.prototype.eachUniqueKey=function(e){return this._ctx.unique=`unique`,this.eachKey(e)},q.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(t,n){e(n.primaryKey,n)})},q.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(e,t){n.push(t.key)}).then(function(){return n}).then(e)},q.prototype.primaryKeys=function(e){var t=this._ctx;if(Tt(t,!0)&&0<t.limit)return this._read(function(e){var n=Ot(t,t.table.core.schema);return t.table.core.query({trans:e,values:!1,limit:t.limit,direction:t.dir===`prev`?`prev`:void 0,query:{index:n,range:t.range}})}).then(function(e){return e.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(e,t){n.push(t.primaryKey)}).then(function(){return n}).then(e)},q.prototype.uniqueKeys=function(e){return this._ctx.unique=`unique`,this.keys(e)},q.prototype.firstKey=function(e){return this.limit(1).keys(function(e){return e[0]}).then(e)},q.prototype.lastKey=function(e){return this.reverse().firstKey(e)},q.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},Et(this._ctx,function(t){var t=t.primaryKey.toString(),n=l(e,t);return e[t]=!0,!n})),this},q.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(r){function a(e,t){var n=t.failures;p+=e-t.numFailures;for(var r=0,a=i(n);r<a.length;r++){var o=a[r];f.push(n[o])}}var o=typeof e==`function`?e:function(t){return xt(t,e)},s=n.table.core,c=s.schema.primaryKey,l=c.outbound,u=c.extractKey,d=200,c=t.db._options.modifyChunkSize,f=(c&&(d=typeof c==`object`?c[s.name]||c[`*`]||200:c),[]),p=0,m=[],h=e===Nt;return t.clone().primaryKeys().then(function(t){function i(f){var p=Math.min(d,t.length-f),m=t.slice(f,f+p);return(h?Promise.resolve([]):s.getMany({trans:r,keys:m,cache:`immutable`})).then(function(g){var _=[],v=[],y=l?[]:null,b=h?m:[];if(!h)for(var x=0;x<p;++x){var S=g[x],C={value:re(S),primKey:t[f+x]};!1!==o.call(C,C.value,C)&&(C.value==null?b.push(t[f+x]):l||G(u(S),u(C.value))===0?(v.push(C.value),l&&y.push(t[f+x])):(b.push(t[f+x]),_.push(C.value)))}return Promise.resolve(0<_.length&&s.mutate({trans:r,type:`add`,values:_}).then(function(e){for(var t in e.failures)b.splice(parseInt(t),1);a(_.length,e)})).then(function(){return(0<v.length||c&&typeof e==`object`)&&s.mutate({trans:r,type:`put`,keys:y,values:v,criteria:c,changeSpec:typeof e!=`function`&&e,isAdditionalChunk:0<f}).then(function(e){return a(v.length,e)})}).then(function(){return(0<b.length||c&&h)&&s.mutate({trans:r,type:`delete`,keys:b,criteria:c,isAdditionalChunk:0<f}).then(function(e){return vt(n.table,b,e)}).then(function(e){return a(b.length,e)})}).then(function(){return t.length>f+p&&i(f+d)})})}var c=Tt(n)&&n.limit===1/0&&(typeof e!=`function`||h)&&{index:n.index,range:n.range};return i(0).then(function(){if(0<f.length)throw new he(`Error modifying one or more objects`,f,p,m);return t.length})})})},q.prototype.delete=function(){var e=this._ctx,t=e.range;return!Tt(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(Nt):this._write(function(n){var r=e.table.core.schema.primaryKey,i=t;return e.table.core.count({trans:n,query:{index:r,range:i}}).then(function(t){return e.table.core.mutate({trans:n,type:`deleteRange`,range:i}).then(function(e){var n=e.failures,e=e.numFailures;if(e)throw new he(`Could not delete some values`,Object.keys(n).map(function(e){return n[e]}),t-e);return t-e})})})};var Mt=q;function q(){}var Nt=function(e,t){return t.value=null};function Pt(e,t){return e<t?-1:e===t?0:1}function Ft(e,t){return t<e?-1:e===t?0:1}function J(e,t,n){return e=e instanceof Bt?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function It(e){return new e.Collection(e,function(){return zt(``)}).limit(0)}function Lt(e,t,n,r){var i,a,o,s,c,l,u,d=n.length;if(!n.every(function(e){return typeof e==`string`}))return J(e,ct);function f(e){i=e===`next`?function(e){return e.toUpperCase()}:function(e){return e.toLowerCase()},a=e===`next`?function(e){return e.toLowerCase()}:function(e){return e.toUpperCase()},o=e===`next`?Pt:Ft;var t=n.map(function(e){return{lower:a(e),upper:i(e)}}).sort(function(e,t){return o(e.lower,t.lower)});s=t.map(function(e){return e.upper}),c=t.map(function(e){return e.lower}),u=(l=e)===`next`?``:r}f(`next`);var e=new e.Collection(e,function(){return Rt(s[0],c[d-1]+r)}),p=(e._ondirectionchange=function(e){f(e)},0);return e._addAlgorithm(function(e,n,r){var i=e.key;if(typeof i==`string`){var f=a(i);if(t(f,c,p))return!0;for(var m=null,h=p;h<d;++h){var g=((e,t,n,r,i,a)=>{for(var o=Math.min(e.length,r.length),s=-1,c=0;c<o;++c){var l=t[c];if(l!==r[c])return i(e[c],n[c])<0?e.substr(0,c)+n[c]+n.substr(c+1):i(e[c],r[c])<0?e.substr(0,c)+r[c]+n.substr(c+1):0<=s?e.substr(0,s)+t[s]+n.substr(s+1):null;i(e[c],l)<0&&(s=c)}return o<r.length&&a===`next`?e+n.substr(e.length):o<e.length&&a===`prev`?e.substr(0,n.length):s<0?null:e.substr(0,s)+r[s]+n.substr(s+1)})(i,f,s[h],c[h],o,l);g===null&&m===null?p=h+1:(m===null||0<o(m,g))&&(m=g)}n(m===null?r:function(){e.continue(m+u)})}return!1}),e}function Rt(e,t,n,r){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:r}}function zt(e){return{type:1,lower:e,upper:e}}Object.defineProperty(Y.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Y.prototype.between=function(e,t,n,r){n=!1!==n,r=!0===r;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||r)&&(!n||!r)?It(this):new this.Collection(this,function(){return Rt(e,t,!n,!r)})}catch{return J(this,st)}},Y.prototype.equals=function(e){return e==null?J(this,st):new this.Collection(this,function(){return zt(e)})},Y.prototype.above=function(e){return e==null?J(this,st):new this.Collection(this,function(){return Rt(e,void 0,!0)})},Y.prototype.aboveOrEqual=function(e){return e==null?J(this,st):new this.Collection(this,function(){return Rt(e,void 0,!1)})},Y.prototype.below=function(e){return e==null?J(this,st):new this.Collection(this,function(){return Rt(void 0,e,!1,!0)})},Y.prototype.belowOrEqual=function(e){return e==null?J(this,st):new this.Collection(this,function(){return Rt(void 0,e)})},Y.prototype.startsWith=function(e){return typeof e==`string`?this.between(e,e+ot,!0,!0):J(this,ct)},Y.prototype.startsWithIgnoreCase=function(e){return e===``?this.startsWith(e):Lt(this,function(e,t){return e.indexOf(t[0])===0},[e],ot)},Y.prototype.equalsIgnoreCase=function(e){return Lt(this,function(e,t){return e===t[0]},[e],``)},Y.prototype.anyOfIgnoreCase=function(){var e=ue.apply(le,arguments);return e.length===0?It(this):Lt(this,function(e,t){return t.indexOf(e)!==-1},e,``)},Y.prototype.startsWithAnyOfIgnoreCase=function(){var e=ue.apply(le,arguments);return e.length===0?It(this):Lt(this,function(e,t){return t.some(function(t){return e.indexOf(t)===0})},e,ot)},Y.prototype.anyOf=function(){var e,t,n=this,r=ue.apply(le,arguments),i=this._cmp;try{r.sort(i)}catch{return J(this,st)}return r.length===0?It(this):((e=new this.Collection(this,function(){return Rt(r[0],r[r.length-1])}))._ondirectionchange=function(e){i=e===`next`?n._ascending:n._descending,r.sort(i)},t=0,e._addAlgorithm(function(e,n,a){for(var o=e.key;0<i(o,r[t]);)if(++t===r.length)return n(a),!1;return i(o,r[t])===0||(n(function(){e.continue(r[t])}),!1)}),e)},Y.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Y.prototype.noneOf=function(){var e=ue.apply(le,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return J(this,st)}var t=e.reduce(function(e,t){return e?e.concat([[e[e.length-1][1],t]]):[[-1/0,t]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},Y.prototype.inAnyRange=function(e,t){var n=this,r=this._cmp,i=this._ascending,a=this._descending,o=this._min,s=this._max;if(e.length===0)return It(this);if(!e.every(function(e){return e[0]!==void 0&&e[1]!==void 0&&i(e[0],e[1])<=0}))return J(this,`First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower`,D.InvalidArgument);var c=!t||!1!==t.includeLowers,l=t&&!0===t.includeUppers,u,d=i;function f(e,t){return d(e[0],t[0])}try{(u=e.reduce(function(e,t){for(var n=0,i=e.length;n<i;++n){var a=e[n];if(r(t[0],a[1])<0&&0<r(t[1],a[0])){a[0]=o(a[0],t[0]),a[1]=s(a[1],t[1]);break}}return n===i&&e.push(t),e},[])).sort(f)}catch{return J(this,st)}var p=0,m=l?function(e){return 0<i(e,u[p][1])}:function(e){return 0<=i(e,u[p][1])},h=c?function(e){return 0<a(e,u[p][0])}:function(e){return 0<=a(e,u[p][0])},g=m,t=new this.Collection(this,function(){return Rt(u[0][0],u[u.length-1][1],!c,!l)});return t._ondirectionchange=function(e){d=e===`next`?(g=m,i):(g=h,a),u.sort(f)},t._addAlgorithm(function(e,t,r){for(var a,o=e.key;g(o);)if(++p===u.length)return t(r),!1;return!m(a=o)&&!h(a)||(n._cmp(o,u[p][1])===0||n._cmp(o,u[p][0])===0||t(function(){d===i?e.continue(u[p][0]):e.continue(u[p][1])}),!1)}),t},Y.prototype.startsWithAnyOf=function(){var e=ue.apply(le,arguments);return e.every(function(e){return typeof e==`string`})?e.length===0?It(this):this.inAnyRange(e.map(function(e){return[e,e+ot]})):J(this,`startsWithAnyOf() only works with strings`)};var Bt=Y;function Y(){}function X(e){return z(function(t){return Vt(t),e(t.target.error),!1})}function Vt(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var Ht=`storagemutated`,Ut=`x-storagemutated-1`,Wt=Ct(null,Ht),Gt=(Z.prototype._lock=function(){return v(!N.global),++this._reculock,this._reculock!==1||N.global||(N.lockOwnerFor=this),this},Z.prototype._unlock=function(){if(v(!N.global),--this._reculock==0)for(N.global||(N.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{rt(e[1],e[0])}catch{}}return this},Z.prototype._locked=function(){return this._reculock&&N.lockOwnerFor!==this},Z.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,r=this.db._state.dbOpenError;if(v(!this.idbtrans),!e&&!n)switch(r&&r.name){case`DatabaseClosedError`:throw new D.DatabaseClosed(r);case`MissingAPIError`:throw new D.MissingAPI(r.message,r);default:throw new D.OpenFailed(r)}if(!this.active)throw new D.TransactionInactive;v(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=z(function(n){Vt(n),t._reject(e.error)}),e.onabort=z(function(n){Vt(n),t.active&&t._reject(new D.Abort(e.error)),t.active=!1,t.on(`abort`).fire(n)}),e.oncomplete=z(function(){t.active=!1,t._resolve(),`mutatedParts`in e&&Wt.storagemutated.fire(e.mutatedParts)})}return this},Z.prototype._promise=function(e,t,n){var r,i=this;return e===`readwrite`&&this.mode!==`readwrite`?W(new D.ReadOnly(`Transaction is readonly`)):this.active?this._locked()?new I(function(r,a){i._blockedFuncs.push([function(){i._promise(e,t,n).then(r,a)},N])}):n?H(function(){var e=new I(function(e,n){i._lock();var r=t(e,n,i);r&&r.then&&r.then(e,n)});return e.finally(function(){return i._unlock()}),e._lib=!0,e}):((r=new I(function(e,n){var r=t(e,n,i);r&&r.then&&r.then(e,n)}))._lib=!0,r):W(new D.TransactionInactive)},Z.prototype._root=function(){return this.parent?this.parent._root():this},Z.prototype.waitFor=function(e){var t,n=this._root(),r=I.resolve(e),i=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return r}):(n._waitingFor=r,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),function e(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=e)}()),n._waitingFor);return new I(function(e,t){r.then(function(t){return n._waitingQueue.push(z(e.bind(null,t)))},function(e){return n._waitingQueue.push(z(t.bind(null,e)))}).finally(function(){n._waitingFor===i&&(n._waitingFor=null)})})},Z.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new D.Abort))},Z.prototype.table=function(e){var t=this._memoizedTables||={};if(l(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new D.NotFound(`Table `+e+` not part of transaction`)},Z);function Z(){}function Kt(e,t,n,r,i,a,o,s){return{name:e,keyPath:t,unique:n,multi:r,auto:i,compound:a,src:(n&&!o?`&`:``)+(r?`*`:``)+(i?`++`:``)+qt(t),type:s}}function qt(e){return typeof e==`string`?e:e?`[`+[].join.call(e,`+`)+`]`:``}function Jt(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(r=function(e){return[e.name,e]},n.reduce(function(e,t,n){return t=r(t,n),t&&(e[t[0]]=t[1]),e},{}))};var r}var Yt=function(e){try{return e.only([[]]),Yt=function(){return[[]]},[[]]}catch{return Yt=function(){return ot},ot}};function Xt(e){return e==null?function(){}:typeof e==`string`?(t=e).split(`.`).length===1?function(e){return e[t]}:function(e){return b(e,t)}:function(t){return b(t,e)};var t}function Zt(e){return[].slice.call(e)}var Qt=0;function $t(e){return e==null?`:id`:typeof e==`string`?e:`[${e.join(`+`)}]`}function en(e,t,n){function r(e){if(e.type===3)return null;if(e.type===4)throw Error(`Cannot convert never type to IDBKeyRange`);var n=e.lower,r=e.upper,i=e.lowerOpen,e=e.upperOpen;return n===void 0?r===void 0?null:t.upperBound(r,!!e):r===void 0?t.lowerBound(n,!!i):t.bound(n,r,!!i,!!e)}function i(e){var t,n,i=e.name;return{name:i,schema:e,mutate:function(e){var t=e.trans,n=e.type,a=e.keys,o=e.values,s=e.range;return new Promise(function(e,c){e=z(e);var l=t.objectStore(i),u=l.keyPath==null,d=n===`put`||n===`add`;if(!d&&n!==`delete`&&n!==`deleteRange`)throw Error(`Invalid operation type: `+n);var f,p=(a||o||{length:1}).length;if(a&&o&&a.length!==o.length)throw Error(`Given keys array must have same length as given values array.`);if(p===0)return e({numFailures:0,failures:{},results:[],lastResult:void 0});function m(e){++_,Vt(e)}var h=[],g=[],_=0;if(n===`deleteRange`){if(s.type===4)return e({numFailures:_,failures:g,results:[],lastResult:void 0});s.type===3?h.push(f=l.clear()):h.push(f=l.delete(r(s)))}else{var u=d?u?[o,a]:[o,null]:[a,null],v=u[0],y=u[1];if(d)for(var b=0;b<p;++b)h.push(f=y&&y[b]!==void 0?l[n](v[b],y[b]):l[n](v[b])),f.onerror=m;else for(b=0;b<p;++b)h.push(f=l[n](v[b])),f.onerror=m}function x(t){t=t.target.result,h.forEach(function(e,t){return e.error!=null&&(g[t]=e.error)}),e({numFailures:_,failures:g,results:n===`delete`?a:h.map(function(e){return e.result}),lastResult:t})}f.onerror=function(e){m(e),x(e)},f.onsuccess=x})},getMany:function(e){var t=e.trans,n=e.keys;return new Promise(function(e,r){e=z(e);for(var a,o=t.objectStore(i),s=n.length,c=Array(s),l=0,u=0,d=function(t){t=t.target,c[t._pos]=t.result,++u===l&&e(c)},f=X(r),p=0;p<s;++p)n[p]!=null&&((a=o.get(n[p]))._pos=p,a.onsuccess=d,a.onerror=f,++l);l===0&&e(c)})},get:function(e){var t=e.trans,n=e.key;return new Promise(function(e,r){e=z(e);var a=t.objectStore(i).get(n);a.onsuccess=function(t){return e(t.target.result)},a.onerror=X(r)})},query:(t=c,n=l,function(e){return new Promise(function(a,o){a=z(a);var s,c,l,u,d=e.trans,f=e.values,p=e.limit,m=e.query,h=(h=e.direction)??`next`,g=p===1/0?void 0:p,_=m.index,m=m.range,d=d.objectStore(i),d=_.isPrimaryKey?d:d.index(_.name),_=r(m);if(p===0)return a({result:[]});n?(m={query:_,count:g,direction:h},(s=f?d.getAll(m):d.getAllKeys(m)).onsuccess=function(e){return a({result:e.target.result})},s.onerror=X(o)):t&&h===`next`?((s=f?d.getAll(_,g):d.getAllKeys(_,g)).onsuccess=function(e){return a({result:e.target.result})},s.onerror=X(o)):(c=0,l=!f&&`openKeyCursor`in d?d.openKeyCursor(_,h):d.openCursor(_,h),u=[],l.onsuccess=function(){var e=l.result;return!e||(u.push(f?e.value:e.primaryKey),++c===p)?a({result:u}):void e.continue()},l.onerror=X(o))})}),openCursor:function(e){var t=e.trans,n=e.values,a=e.query,o=e.reverse,s=e.unique;return new Promise(function(e,c){e=z(e);var l=a.index,u=a.range,d=t.objectStore(i),d=l.isPrimaryKey?d:d.index(l.name),l=o?s?`prevunique`:`prev`:s?`nextunique`:`next`,f=!n&&`openKeyCursor`in d?d.openKeyCursor(r(u),l):d.openCursor(r(u),l);f.onerror=X(c),f.onsuccess=z(function(n){var r,i,a,o,s=f.result;s?(s.___id=++Qt,s.done=!1,r=s.continue.bind(s),i=(i=s.continuePrimaryKey)&&i.bind(s),a=s.advance.bind(s),o=function(){throw Error(`Cursor not stopped`)},s.trans=t,s.stop=s.continue=s.continuePrimaryKey=s.advance=function(){throw Error(`Cursor not started`)},s.fail=z(c),s.next=function(){var e=this,t=1;return this.start(function(){return t--?e.continue():e.stop()}).then(function(){return e})},s.start=function(e){function t(){if(f.result)try{e()}catch(e){s.fail(e)}else s.done=!0,s.start=function(){throw Error(`Cursor behind last entry`)},s.stop()}var n=new Promise(function(e,t){e=z(e),f.onerror=X(t),s.fail=t,s.stop=function(t){s.stop=s.continue=s.continuePrimaryKey=s.advance=o,e(t)}});return f.onsuccess=z(function(e){f.onsuccess=t,t()}),s.continue=r,s.continuePrimaryKey=i,s.advance=a,t(),n},e(s)):e(null)},c)})},count:function(e){var t=e.query,n=e.trans,a=t.index,o=t.range;return new Promise(function(e,t){var s=n.objectStore(i),s=a.isPrimaryKey?s:s.index(a.name),c=r(o),c=c?s.count(c):s.count();c.onsuccess=z(function(t){return e(t.target.result)}),c.onerror=X(t)})}}}o=n,s=Zt((n=e).objectStoreNames),u=0<s.length?o.objectStore(s[0]):{};var o,n={schema:{name:n.name,tables:s.map(function(e){return o.objectStore(e)}).map(function(e){var t=e.keyPath,n=e.autoIncrement,r=a(t),i={},r={name:e.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:t==null,compound:r,keyPath:t,autoIncrement:n,unique:!0,extractKey:Xt(t)},indexes:Zt(e.indexNames).map(function(t){return e.index(t)}).map(function(e){var t=e.name,n=e.unique,r=e.multiEntry,e=e.keyPath,t={name:t,compound:a(e),keyPath:e,unique:n,multiEntry:r,extractKey:Xt(e)};return i[$t(e)]=t}),getIndexByKeyPath:function(e){return i[$t(e)]}};return i[`:id`]=r.primaryKey,t!=null&&(i[$t(t)]=r.primaryKey),r})},hasGetAll:0<s.length&&`getAll`in u&&!(typeof navigator<`u`&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:`getAllRecords`in u},s=n.schema,c=n.hasGetAll,l=n.hasIdb3Features,u=s.tables.map(i),d={};return u.forEach(function(e){return d[e.name]=e}),{stack:`dbcore`,transaction:e.transaction.bind(e),table:function(e){if(d[e])return d[e];throw Error(`Table '${e}' not found`)},MIN_KEY:-1/0,MAX_KEY:Yt(t),schema:s}}function tn(e,n,r,i){return r=r.IDBKeyRange,n=en(n,r,i),{dbcore:e.dbcore.reduce(function(e,n){return n=n.create,t(t({},e),n(e))},n)}}function nn(e,t){var n=t.db,n=tn(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(t){var n=t.name;e.core.schema.tables.some(function(e){return e.name===n})&&(t.core=e.core.table(n),e[n]instanceof e.Table)&&(e[n].core=t.core)})}function rn(e,t,n,r){n.forEach(function(n){var i=r[n];t.forEach(function(t){var r=function e(t,n){return m(t,n)||(t=s(t))&&e(t,n)}(t,n);(!r||`value`in r&&r.value===void 0)&&(t===e.Transaction.prototype||t instanceof e.Transaction?f(t,n,{get:function(){return this.table(n)},set:function(e){d(this,n,{value:e,writable:!0,configurable:!0,enumerable:!0})}}):t[n]=new e.Table(n,i))})})}function an(e,t){t.forEach(function(t){for(var n in t)t[n]instanceof e.Table&&delete t[n]})}function on(e,t){return e._cfg.version-t._cfg.version}function sn(e,t,n,r){var a=e._dbSchema,o=(n.objectStoreNames.contains(`$meta`)&&!a.$meta&&(a.$meta=Jt(`$meta`,hn(``)[0],[]),e._storeNames.push(`$meta`)),e._createTransaction(`readwrite`,e._storeNames,a)),s=(o.create(n),o._completion.catch(r),o._reject.bind(o)),c=N.transless||N;H(function(){if(N.trans=o,N.transless=c,t!==0)return nn(e,n),l=t,((r=o).storeNames.includes(`$meta`)?r.table(`$meta`).get(`version`).then(function(e){return e??l}):I.resolve(l)).then(function(t){var r=e,a=t,s=o,c=n,l=[],t=r._versions,u=r._dbSchema=pn(0,r.idbdb,c);return(t=t.filter(function(e){return e._cfg.version>=a})).length===0?I.resolve():(t.forEach(function(e){l.push(function(){var t,n,o,l=u,d=e._cfg.dbschema,f=(mn(r,l,c),mn(r,d,c),u=r._dbSchema=d,ln(l,d)),p=(f.add.forEach(function(e){un(c,e[0],e[1].primKey,e[1].indexes)}),f.change.forEach(function(e){if(e.recreate)throw new D.Upgrade(`Not yet support for changing primary key`);var t=c.objectStore(e.name);e.add.forEach(function(e){return fn(t,e)}),e.change.forEach(function(e){t.deleteIndex(e.name),fn(t,e)}),e.del.forEach(function(e){return t.deleteIndex(e)})}),e._cfg.contentUpgrade);if(p&&e._cfg.version>a)return nn(r,c),s._memoizedTables={},t=S(d),f.del.forEach(function(e){t[e]=l[e]}),an(r,[r.Transaction.prototype]),rn(r,[r.Transaction.prototype],i(t),t),s.schema=t,(n=de(p))&&U(),d=I.follow(function(){var e;(o=p(s))&&n&&(e=Qe.bind(null,null),o.then(e,e))}),o&&typeof o.then==`function`?I.resolve(o):d.then(function(){return o})}),l.push(function(t){var n=e._cfg.dbschema,i=t;[].slice.call(i.db.objectStoreNames).forEach(function(e){return n[e]==null&&i.db.deleteObjectStore(e)}),an(r,[r.Transaction.prototype]),rn(r,[r.Transaction.prototype],r._storeNames,r._dbSchema),s.schema=r._dbSchema}),l.push(function(t){r.idbdb.objectStoreNames.contains(`$meta`)&&(Math.ceil(r.idbdb.version/10)===e._cfg.version?(r.idbdb.deleteObjectStore(`$meta`),delete r._dbSchema.$meta,r._storeNames=r._storeNames.filter(function(e){return e!==`$meta`})):t.objectStore(`$meta`).put(e._cfg.version,`version`))})}),function e(){return l.length?I.resolve(l.shift()(s.idbtrans)).then(e):I.resolve()}().then(function(){dn(u,c)}))}).catch(s);var r,l;i(a).forEach(function(e){un(n,e,a[e].primKey,a[e].indexes)}),nn(e,n),I.follow(function(){return e.on.populate.fire(o)}).catch(s)})}function cn(e,t){dn(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains(`$meta`)||t.db.createObjectStore(`$meta`).add(Math.ceil(t.db.version/10-1),`version`);var n=pn(0,e.idbdb,t);mn(e,e._dbSchema,t);for(var r=0,i=ln(n,e._dbSchema).change;r<i.length;r++){var a=(e=>{if(e.change.length||e.recreate)return console.warn(`Unable to patch indexes of table ${e.name} because it has changes on the type of index or primary key.`),{value:void 0};var n=t.objectStore(e.name);e.add.forEach(function(t){A&&console.debug(`Dexie upgrade patch: Creating missing index ${e.name}.${t.src}`),fn(n,t)})})(i[r]);if(typeof a==`object`)return a.value}}function ln(e,t){var n,r={del:[],add:[],change:[]};for(n in e)t[n]||r.del.push(n);for(n in t){var i=e[n],a=t[n];if(i){var o={name:n,def:a,recreate:!1,del:[],add:[],change:[]};if(``+(i.primKey.keyPath||``)!=``+(a.primKey.keyPath||``)||i.primKey.auto!==a.primKey.auto)o.recreate=!0,r.change.push(o);else{var s=i.idxByName,c=a.idxByName,l=void 0;for(l in s)c[l]||o.del.push(l);for(l in c){var u=s[l],d=c[l];u?u.src!==d.src&&o.change.push(d):o.add.push(d)}(0<o.del.length||0<o.add.length||0<o.change.length)&&r.change.push(o)}}else r.add.push([n,a])}return r}function un(e,t,n,r){var i=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});r.forEach(function(e){return fn(i,e)})}function dn(e,t){i(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(A&&console.debug(`Dexie: Creating missing table`,n),un(t,n,e[n].primKey,e[n].indexes))})}function fn(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function pn(e,t,n){var r={};return g(t.objectStoreNames,0).forEach(function(e){for(var t=n.objectStore(e),i=Kt(qt(c=t.keyPath),c||``,!0,!1,!!t.autoIncrement,c&&typeof c!=`string`,!0),a=[],o=0;o<t.indexNames.length;++o){var s=t.index(t.indexNames[o]),c=s.keyPath,s=Kt(s.name,c,!!s.unique,!!s.multiEntry,!1,c&&typeof c!=`string`,!1);a.push(s)}r[e]=Jt(e,i,a)}),r}function mn(e,t,n){for(var i=n.db.objectStoreNames,a=0;a<i.length;++a){var o=i[a],s=n.objectStore(o);e._hasGetAll=`getAll`in s;for(var c=0;c<s.indexNames.length;++c){var l,u=s.indexNames[c],d=s.index(u).keyPath,d=typeof d==`string`?d:`[`+g(d).join(`+`)+`]`;t[o]&&(l=t[o].idxByName[d])&&(l.name=u,delete t[o].idxByName[d],t[o].idxByName[u]=l)}}typeof navigator<`u`&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&r.WorkerGlobalScope&&r instanceof r.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function hn(e){return e.split(`,`).map(function(e,t){var n=e.split(`:`),r=(r=n[1])?.trim(),n=(e=n[0].trim()).replace(/([&*]|\+\+)/g,``),i=/^\[/.test(n)?n.match(/^\[(.*)\]$/)[1].split(`+`):n;return Kt(n,i||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),a(i),t===0,r)})}_n.prototype._createTableSchema=Jt,_n.prototype._parseIndexSyntax=hn,_n.prototype._parseStoresSpec=function(e,t){var n=this;i(e).forEach(function(r){if(e[r]!==null){var i=n._parseIndexSyntax(e[r]),a=i.shift();if(!a)throw new D.Schema(`Invalid schema for table `+r+`: `+e[r]);if(a.unique=!0,a.multi)throw new D.Schema(`Primary key cannot be multiEntry*`);i.forEach(function(e){if(e.auto)throw new D.Schema(`Only primary key can be marked as autoIncrement (++)`);if(!e.keyPath)throw new D.Schema(`Index must have a name and cannot be an empty string`)}),a=n._createTableSchema(r,a,i),t[r]=a}})},_n.prototype.stores=function(e){var t=this.db,e=(this._cfg.storesSource=this._cfg.storesSource?o(this._cfg.storesSource,e):e,t._versions),n={},r={};return e.forEach(function(e){o(n,e._cfg.storesSource),r=e._cfg.dbschema={},e._parseStoresSpec(n,r)}),t._dbSchema=r,an(t,[t._allTables,t,t.Transaction.prototype]),rn(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],i(r),r),t._storeNames=i(r),this},_n.prototype.upgrade=function(e){return this._cfg.contentUpgrade=Te(this._cfg.contentUpgrade||O,e),this};var gn=_n;function _n(){}var vn=(()=>{var e,t,n;return typeof FinalizationRegistry<`u`&&typeof WeakRef<`u`?(e=new Set,t=new FinalizationRegistry(function(t){e.delete(t)}),{toArray:function(){return Array.from(e).map(function(e){return e.deref()}).filter(function(e){return e!==void 0})},add:function(n){var r=new WeakRef(n._novip);e.add(r),t.register(n._novip,r,r),e.size>n._options.maxConnections&&(r=e.values().next().value,e.delete(r),t.unregister(r))},remove:function(n){if(n)for(var r=e.values(),i=r.next();!i.done;){var a=i.value;if(a.deref()===n._novip)return e.delete(a),void t.unregister(a);i=r.next()}}}):(n=[],{toArray:function(){return n},add:function(e){n.push(e._novip)},remove:function(e){e&&(e=n.indexOf(e._novip))!==-1&&n.splice(e,1)}})})();function yn(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new rr(lt,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:`name`}),n.table(`dbnames`)}function bn(e){return e&&typeof e.databases==`function`}function xn(e){return H(function(){return N.letThrough=!0,e()})}function Sn(e){return!(`from`in e)}var Q=function(e,t){var n;if(!this)return n=new Q,e&&`d`in e&&o(n,e),n;o(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Cn(e,t,n){var r=G(t,n);if(!isNaN(r)){if(0<r)throw RangeError();if(Sn(e))return o(e,{from:t,to:n,d:1});var r=e.l,i=e.r;if(G(n,e.from)<0)return r?Cn(r,t,n):e.l={from:t,to:n,d:1,l:null,r:null},Dn(e);if(0<G(t,e.to))return i?Cn(i,t,n):e.r={from:t,to:n,d:1,l:null,r:null},Dn(e);G(t,e.from)<0&&(e.from=t,e.l=null,e.d=i?i.d+1:1),0<G(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,r&&!e.l&&wn(e,r),i&&t&&wn(e,i)}}function wn(e,t){Sn(t)||function e(t,n){var r=n.from,i=n.l,a=n.r;Cn(t,r,n.to),i&&e(t,i),a&&e(t,a)}(e,t)}function Tn(e,t){var n=En(t),r=n.next();if(!r.done)for(var i=r.value,a=En(e),o=a.next(i.from),s=o.value;!r.done&&!o.done;){if(G(s.from,i.to)<=0&&0<=G(s.to,i.from))return!0;G(i.from,s.from)<0?i=(r=n.next(s.from)).value:s=(o=a.next(i.from)).value}return!1}function En(e){var t=Sn(e)?null:{s:0,n:e};return{next:function(e){for(var n=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,n)for(;t.n.l&&G(e,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!n||G(e,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Dn(e){var n,r,i,a=((a=e.r)?.d||0)-((a=e.l)?.d||0),a=1<a?`r`:a<-1?`l`:``;a&&(n=a==`r`?`l`:`r`,r=t({},e),i=e[a],e.from=i.from,e.to=i.to,e[a]=i[a],r[a]=i[n],(e[n]=r).d=On(r)),e.d=On(e)}function On(e){var t=e.r,e=e.l;return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}function kn(e,t){return i(t).forEach(function(n){e[n]?wn(e[n],t[n]):e[n]=function e(t){var n,r,i={};for(n in t)l(t,n)&&(r=t[n],i[n]=!r||typeof r!=`object`||te.has(r.constructor)?r:e(r));return i}(t[n])}),e}function An(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Tn(t[n],e[n])})}u(Q.prototype,((T={add:function(e){return wn(this,e),this},addKey:function(e){return Cn(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(e){return Cn(t,e,e)}),this},hasKey:function(e){var t=En(this).next(e).value;return t&&G(t.from,e)<=0&&0<=G(t.to,e)}})[oe]=function(){return En(this)},T));var jn={},Mn={},Nn=!1;function Pn(e){kn(Mn,e),Nn||(Nn=!0,setTimeout(function(){Nn=!1,Fn(Mn,!(Mn={}))},0))}function Fn(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var r=0,i=Object.values(jn);r<i.length;r++)In(s=i[r],e,n,t);else for(var a in e){var o,s,a=/^idb\:\/\/(.*)\/(.*)\//.exec(a);a&&(o=a[1],a=a[2],s=jn[`idb://${o}/${a}`])&&In(s,e,n,t)}n.forEach(function(e){return e()})}function In(e,t,n,r){for(var i=[],a=0,o=Object.entries(e.queries.query);a<o.length;a++){for(var s=o[a],c=s[0],l=[],u=0,d=s[1];u<d.length;u++){var f=d[u];An(t,f.obsSet)?f.subscribers.forEach(function(e){return n.add(e)}):r&&l.push(f)}r&&i.push([c,l])}if(r)for(var p=0,m=i;p<m.length;p++){var h=m[p],c=h[0],l=h[1];e.queries.query[c]=l}}function Ln(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?W(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var r=t.openCanceller,a=Math.round(10*e.verno),o=!1;function s(){if(t.openCanceller!==r)throw new D.DatabaseClosed(`db.open() was cancelled`)}function c(){return new I(function(r,l){if(s(),!n)throw new D.MissingAPI;var u=e.name,p=t.autoSchema||!a?n.open(u):n.open(u,a);if(!p)throw new D.MissingAPI;p.onerror=X(l),p.onblocked=z(e._fireOnBlocked),p.onupgradeneeded=z(function(r){var i;d=p.transaction,t.autoSchema&&!e._options.allowEmptyDB?(p.onerror=Vt,d.abort(),p.result.close(),(i=n.deleteDatabase(u)).onsuccess=i.onerror=z(function(){l(new D.NoSuchDatabase(`Database ${u} doesnt exist`))})):(d.onerror=X(l),i=r.oldVersion>2**62?0:r.oldVersion,f=i<1,e.idbdb=p.result,o&&cn(e,d),sn(e,i/10,d,l))},l),p.onsuccess=z(function(){d=null;var n,s,l,m,h,_,v=e.idbdb=p.result,y=g(v.objectStoreNames);if(0<y.length)try{var b=v.transaction((h=y).length===1?h[0]:h,`readonly`);if(t.autoSchema)_=v,m=b,(l=e).verno=_.version/10,m=l._dbSchema=pn(0,_,m),l._storeNames=g(_.objectStoreNames,0),rn(l,[l._allTables],i(m),m);else if(mn(e,e._dbSchema,b),s=b,((s=ln(pn(0,(n=e).idbdb,s),n._dbSchema)).add.length||s.change.some(function(e){return e.add.length||e.change.length}))&&!o)return console.warn(`Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this.`),v.close(),a=v.version+1,o=!0,r(c());nn(e,b)}catch{}vn.add(e),v.onversionchange=z(function(n){t.vcFired=!0,e.on(`versionchange`).fire(n)}),v.onclose=z(function(){e.close({disableAutoOpen:!1})}),f&&(y=e._deps,h=u,bn(_=y.indexedDB)||h===lt||yn(_,y.IDBKeyRange).put({name:h}).catch(O)),r()},l)}).catch(function(e){switch(e?.name){case`UnknownError`:if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn(`Dexie: Workaround for Chrome UnknownError on open()`),c();break;case`VersionError`:if(0<a)return a=0,c()}return I.reject(e)})}var l,u=t.dbReadyResolve,d=null,f=!1;return I.race([r,(typeof navigator>`u`?I.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){function t(){return indexedDB.databases().finally(e)}l=setInterval(t,100),t()}).finally(function(){return clearInterval(l)}):Promise.resolve()).then(c)]).then(function(){return s(),t.onReadyBeingFired=[],I.resolve(xn(function(){return e.on.ready.fire(e.vip)})).then(function n(){var r;if(0<t.onReadyBeingFired.length)return r=t.onReadyBeingFired.reduce(Te,O),t.onReadyBeingFired=[],I.resolve(xn(function(){return r(e.vip)})).then(n)})}).finally(function(){t.openCanceller===r&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(n){t.dbOpenError=n;try{d&&d.abort()}catch{}return r===t.openCanceller&&e._close(),W(n)}).finally(function(){t.openComplete=!0,u()}).then(function(){var t;return f&&(t={},e.tables.forEach(function(n){n.schema.indexes.forEach(function(r){r.name&&(t[`idb://${e.name}/${n.name}/${r.name}`]=new Q(-1/0,[[[]]]))}),t[`idb://${e.name}/${n.name}/`]=t[`idb://${e.name}/${n.name}/:dels`]=new Q(-1/0,[[[]]])}),Wt(Ht).fire(t),Fn(t,!0)),e})}function Rn(e){function t(t){return e.next(t)}var n=i(t),r=i(function(t){return e.throw(t)});function i(e){return function(t){var t=e(t),i=t.value;return t.done?i:i&&typeof i.then==`function`?i.then(n,r):a(i)?Promise.all(i).then(n,r):n(i)}}return i(t)()}function zn(e,t,n){for(var r=a(e)?e.slice():[e],i=0;i<n;++i)r.push(t);return r}var Bn={stack:`dbcore`,name:`VirtualIndexMiddleware`,level:1,create:function(e){return t(t({},e),{table:function(n){var r=e.table(n),n=r.schema,i={},a=[];function o(e,n,r){var s=$t(e),c=i[s]=i[s]||[],l=e==null?0:typeof e==`string`?1:e.length,u=0<n,s=t(t({},r),{name:u?`${s}(virtual-from:${r.name})`:r.name,lowLevelIndex:r,isVirtual:u,keyTail:n,keyLength:l,extractKey:Xt(e),unique:!u&&r.unique});return c.push(s),s.isPrimaryKey||a.push(s),1<l&&o(l===2?e[0]:e.slice(0,l-1),n+1,r),c.sort(function(e,t){return e.keyTail-t.keyTail}),s}var s=o(n.primaryKey.keyPath,0,n.primaryKey);i[`:id`]=[s];for(var c=0,l=n.indexes;c<l.length;c++){var u=l[c];o(u.keyPath,0,u)}function d(n){var r,i=n.query.index;return i.isVirtual?t(t({},n),{query:{index:i.lowLevelIndex,range:(r=n.query.range,i=i.keyTail,{type:r.type===1?2:r.type,lower:zn(r.lower,r.lowerOpen?e.MAX_KEY:e.MIN_KEY,i),lowerOpen:!0,upper:zn(r.upper,r.upperOpen?e.MIN_KEY:e.MAX_KEY,i),upperOpen:!0})}}):n}return t(t({},r),{schema:t(t({},n),{primaryKey:s,indexes:a,getIndexByKeyPath:function(e){return(e=i[$t(e)])&&e[0]}}),count:function(e){return r.count(d(e))},query:function(e){return r.query(d(e))},openCursor:function(t){var n=t.query.index,i=n.keyTail,a=n.keyLength;return n.isVirtual?r.openCursor(d(t)).then(function(e){return e&&o(e)}):r.openCursor(t);function o(n){return Object.create(n,{continue:{value:function(r){r==null?t.unique?n.continue(n.key.slice(0,a).concat(t.reverse?e.MIN_KEY:e.MAX_KEY,i)):n.continue():n.continue(zn(r,t.reverse?e.MAX_KEY:e.MIN_KEY,i))}},continuePrimaryKey:{value:function(t,r){n.continuePrimaryKey(zn(t,e.MAX_KEY,i),r)}},primaryKey:{get:function(){return n.primaryKey}},key:{get:function(){var e=n.key;return a===1?e[0]:e.slice(0,a)}},value:{get:function(){return n.value}}})}}})}})}};function Vn(e,t,n,r){return n||={},r||=``,i(e).forEach(function(i){var a,o,s;l(t,i)?(a=e[i],o=t[i],typeof a==`object`&&typeof o==`object`&&a&&o?(s=ae(a))===ae(o)?s===`Object`?Vn(a,o,n,r+i+`.`):a!==o&&(n[r+i]=t[i]):n[r+i]=t[i]:a!==o&&(n[r+i]=t[i])):n[r+i]=void 0}),i(t).forEach(function(i){l(e,i)||(n[r+i]=t[i])}),n}function Hn(e,t){return t.type===`delete`?t.keys:t.keys||t.values.map(e.extractKey)}var Un={stack:`dbcore`,name:`HooksMiddleware`,level:2,create:function(e){return t(t({},e),{table:function(r){var i=e.table(r),a=i.schema.primaryKey;return t(t({},i),{mutate:function(e){var o=N.trans,s=o.table(r).hook,c=s.deleting,u=s.creating,d=s.updating;switch(e.type){case`add`:if(u.fire===O)break;return o._promise(`readwrite`,function(){return f(e)},!0);case`put`:if(u.fire===O&&d.fire===O)break;return o._promise(`readwrite`,function(){return f(e)},!0);case`delete`:if(c.fire===O)break;return o._promise(`readwrite`,function(){return f(e)},!0);case`deleteRange`:if(c.fire===O)break;return o._promise(`readwrite`,function(){return function e(n,r,o){return i.query({trans:n,values:!1,query:{index:a,range:r},limit:o}).then(function(i){var a=i.result;return f({type:`delete`,keys:a,trans:n}).then(function(i){return 0<i.numFailures?Promise.reject(i.failures[0]):a.length<o?{failures:[],numFailures:0,lastResult:void 0}:e(n,t(t({},r),{lower:a[a.length-1],lowerOpen:!0}),o)})})}(e.trans,e.range,1e4)},!0)}return i.mutate(e);function f(e){var r,o,s,f=N.trans,p=e.keys||Hn(a,e);if(p)return(e=e.type===`add`||e.type===`put`?t(t({},e),{keys:p}):t({},e)).type!==`delete`&&(e.values=n([],e.values,!0)),e.keys&&(e.keys=n([],e.keys,!0)),r=i,s=p,((o=e).type===`add`?Promise.resolve([]):r.getMany({trans:o.trans,keys:s,cache:`immutable`})).then(function(t){var n=p.map(function(n,r){var i,o,s,p=t[r],m={onerror:null,onsuccess:null};return e.type===`delete`?c.fire.call(m,n,p,f):e.type===`add`||p===void 0?(i=u.fire.call(m,n,e.values[r],f),n==null&&i!=null&&(e.keys[r]=n=i,a.outbound||x(e.values[r],a.keyPath,n))):(i=Vn(p,e.values[r]),(o=d.fire.call(m,i,n,p,f))&&(s=e.values[r],Object.keys(o).forEach(function(e){l(s,e)?s[e]=o[e]:x(s,e,o[e])}))),m});return i.mutate(e).then(function(r){for(var i=r.failures,a=r.results,o=r.numFailures,r=r.lastResult,s=0;s<p.length;++s){var c=(a||p)[s],l=n[s];c==null?l.onerror&&l.onerror(i[s]):l.onsuccess&&l.onsuccess(e.type===`put`&&t[s]?e.values[s]:c)}return{failures:i,results:a,numFailures:o,lastResult:r}}).catch(function(e){return n.forEach(function(t){return t.onerror&&t.onerror(e)}),Promise.reject(e)})});throw Error(`Keys missing`)}}})}})}};function Wn(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var r=[],i=0,a=0;i<t.keys.length&&a<e.length;++i)G(t.keys[i],e[a])===0&&(r.push(n?re(t.values[i]):t.values[i]),++a);return r.length===e.length?r:null}catch{return null}}var Gn={stack:`dbcore`,level:-1,create:function(e){return{table:function(n){var r=e.table(n);return t(t({},r),{getMany:function(e){var t;return e.cache?(t=Wn(e.keys,e.trans._cache,e.cache===`clone`))?I.resolve(t):r.getMany(e).then(function(t){return e.trans._cache={keys:e.keys,values:e.cache===`clone`?re(t):t},t}):r.getMany(e)},mutate:function(e){return e.type!==`add`&&(e.trans._cache=null),r.mutate(e)}})}}}};function Kn(e,t){return e.trans.mode===`readonly`&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!==`disabled`&&!t.schema.primaryKey.outbound}function qn(e,t){switch(e){case`query`:return t.values&&!t.unique;case`get`:case`getMany`:case`count`:case`openCursor`:return!1}}var Jn={stack:`dbcore`,level:0,name:`Observability`,create:function(e){var n=e.schema.name,r=new Q(e.MIN_KEY,e.MAX_KEY);return t(t({},e),{transaction:function(t,n,r){if(N.subscr&&n!==`readonly`)throw new D.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${N.querier}`);return e.transaction(t,n,r)},table:function(o){function s(t){var t=t.query;return[t.index,new Q((t=t.range).lower??e.MIN_KEY,t.upper??e.MAX_KEY)]}var c=e.table(o),l=c.schema,u=l.primaryKey,d=l.indexes,f=u.extractKey,p=u.outbound,m=u.autoIncrement&&d.filter(function(e){return e.compound&&e.keyPath.includes(u.keyPath)}),h=t(t({},c),{mutate:function(t){function i(e){return e=`idb://${n}/${o}/${e}`,h[e]||(h[e]=new Q)}var s,d,f,p=t.trans,h=t.mutatedParts||={},g=i(``),_=i(`:dels`),v=t.type,y=t.type===`deleteRange`?[t.range]:t.type===`delete`?[t.keys]:t.values.length<50?[Hn(u,t).filter(function(e){return e}),t.values]:[],b=y[0],y=y[1],x=t.trans._cache;return a(b)?(g.addKeys(b),(v=v===`delete`||b.length===y.length?Wn(b,x):null)||_.addKeys(b),(v||y)&&(s=i,d=v,f=y,l.indexes.forEach(function(e){var t=s(e.name||``);function n(t){return t==null?null:e.extractKey(t)}function r(n){e.multiEntry&&a(n)?n.forEach(function(e){return t.addKey(e)}):t.addKey(n)}(d||f).forEach(function(e,t){var i=d&&n(d[t]),t=f&&n(f[t]);G(i,t)!==0&&(i!=null&&r(i),t!=null)&&r(t)})}))):b?(y={from:(x=b.lower)??e.MIN_KEY,to:(v=b.upper)??e.MAX_KEY},_.add(y),g.add(y)):(g.add(r),_.add(r),l.indexes.forEach(function(e){return i(e.name).add(r)})),c.mutate(t).then(function(e){return!b||t.type!==`add`&&t.type!==`put`||(g.addKeys(e.results),m&&m.forEach(function(n){for(var r=t.values.map(function(e){return n.extractKey(e)}),a=n.keyPath.findIndex(function(e){return e===u.keyPath}),o=0,s=e.results.length;o<s;++o)r[o][a]=e.results[o];i(n.name).addKeys(r)})),p.mutatedParts=kn(p.mutatedParts||{},h),e})}}),g={get:function(e){return[u,new Q(e.key)]},getMany:function(e){return[u,new Q().addKeys(e.keys)]},count:s,query:s,openCursor:s};return i(g).forEach(function(e){h[e]=function(i){var a=N.subscr,s=!!a,l=Kn(N,c)&&qn(e,i)?i.obsSet={}:a;if(s){var u,a=function(e){return e=`idb://${n}/${o}/${e}`,l[e]||(l[e]=new Q)},d=a(``),m=a(`:dels`),s=g[e](i),h=s[0],s=s[1];if((e===`query`&&h.isPrimaryKey&&!i.values?m:a(h.name||``)).add(s),!h.isPrimaryKey){if(e!==`count`)return u=e===`query`&&p&&i.values&&c.query(t(t({},i),{values:!1})),c[e].apply(this,arguments).then(function(t){if(e===`query`){if(p&&i.values)return u.then(function(e){return e=e.result,d.addKeys(e),t});var n=i.values?t.result.map(f):t.result;(i.values?d:m).addKeys(n)}else{var r,a;if(e===`openCursor`)return a=i.values,(r=t)&&Object.create(r,{key:{get:function(){return m.addKey(r.primaryKey),r.key}},primaryKey:{get:function(){var e=r.primaryKey;return m.addKey(e),e}},value:{get:function(){return a&&d.addKey(r.primaryKey),r.value}}})}return t});m.add(r)}}return c[e].apply(this,arguments)}}),h}})}};function Yn(e,n,r){var i;return r.numFailures===0?n:n.type===`deleteRange`||(i=n.keys?n.keys.length:`values`in n&&n.values?n.values.length:1,r.numFailures===i)?null:(i=t({},n),a(i.keys)&&(i.keys=i.keys.filter(function(e,t){return!(t in r.failures)})),`values`in i&&a(i.values)&&(i.values=i.values.filter(function(e,t){return!(t in r.failures)})),i)}function Xn(e,t){return n=e,((r=t).lower===void 0||(r.lowerOpen?0<G(n,r.lower):0<=G(n,r.lower)))&&(n=e,(r=t).upper===void 0||(r.upperOpen?G(n,r.upper)<0:G(n,r.upper)<=0));var n,r}function Zn(e,t,n,r,i,o){var s,c,l,u,d,f,p;return!n||n.length===0||(s=t.query.index,c=s.multiEntry,l=t.query.range,u=r.schema.primaryKey.extractKey,d=s.extractKey,f=(s.lowLevelIndex||s).extractKey,(r=n.reduce(function(e,n){var r=e,i=[];if(n.type===`add`||n.type===`put`)for(var o=new Q,s=n.values.length-1;0<=s;--s){var f,p=n.values[s],m=u(p);!o.hasKey(m)&&(f=d(p),c&&a(f)?f.some(function(e){return Xn(e,l)}):Xn(f,l))&&(o.addKey(m),i.push(p))}switch(n.type){case`add`:var h=new Q().addKeys(t.values?e.map(function(e){return u(e)}):e),r=e.concat(t.values?i.filter(function(e){return e=u(e),!h.hasKey(e)&&(h.addKey(e),!0)}):i.map(function(e){return u(e)}).filter(function(e){return!h.hasKey(e)&&(h.addKey(e),!0)}));break;case`put`:var g=new Q().addKeys(n.values.map(function(e){return u(e)}));r=e.filter(function(e){return!g.hasKey(t.values?u(e):e)}).concat(t.values?i:i.map(function(e){return u(e)}));break;case`delete`:var _=new Q().addKeys(n.keys);r=e.filter(function(e){return!_.hasKey(t.values?u(e):e)});break;case`deleteRange`:var v=n.range;r=e.filter(function(e){return!Xn(u(e),v)})}return r},e))===e)?e:(p=function(e,t){return G(f(e),f(t))||G(u(e),u(t))},r.sort(t.direction===`prev`||t.direction===`prevunique`?function(e,t){return p(t,e)}:p),t.limit&&t.limit<1/0&&(r.length>t.limit?r.length=t.limit:e.length===t.limit&&r.length<t.limit&&(i.dirty=!0)),o?Object.freeze(r):r)}function Qn(e,t){return G(e.lower,t.lower)===0&&G(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function $n(e,t){return((e,t,n,r)=>{if(e===void 0)return t===void 0?0:-1;if(t===void 0)return 1;if((e=G(e,t))===0){if(n&&r)return 0;if(n)return 1;if(r)return-1}return e})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((e,t,n,r)=>{if(e===void 0)return t===void 0?0:1;if(t===void 0)return-1;if((e=G(e,t))===0){if(n&&r)return 0;if(n)return-1;if(r)return 1}return e})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function er(e,t,n,r){e.subscribers.add(n),r.addEventListener(`abort`,function(){var r,i;e.subscribers.delete(n),e.subscribers.size===0&&(r=e,i=t,setTimeout(function(){r.subscribers.size===0&&ce(i,r)},3e3))})}var tr={stack:`dbcore`,level:0,name:`Cache`,create:function(e){var n=e.schema.name;return t(t({},e),{transaction:function(t,r,i){var a,o,s=e.transaction(t,r,i);return r===`readwrite`&&(i=(a=new AbortController).signal,s.addEventListener(`abort`,(o=function(i){return function(){if(a.abort(),r===`readwrite`){for(var o=new Set,c=0,l=t;c<l.length;c++){var u=l[c],d=jn[`idb://${n}/${u}`];if(d){var f=e.table(u),p=d.optimisticOps.filter(function(e){return e.trans===s});if(s._explicit&&i&&s.mutatedParts)for(var m=0,h=Object.values(d.queries.query);m<h.length;m++)for(var g=0,_=(b=h[m]).slice();g<_.length;g++)An((x=_[g]).obsSet,s.mutatedParts)&&(ce(b,x),x.subscribers.forEach(function(e){return o.add(e)}));else if(0<p.length){d.optimisticOps=d.optimisticOps.filter(function(e){return e.trans!==s});for(var v=0,y=Object.values(d.queries.query);v<y.length;v++)for(var b,x,S,C=0,ee=(b=y[v]).slice();C<ee.length;C++)(x=ee[C]).res!=null&&s.mutatedParts&&(i&&!x.dirty?(S=Object.isFrozen(x.res),S=Zn(x.res,x.req,p,f,x,S),x.dirty?(ce(b,x),x.subscribers.forEach(function(e){return o.add(e)})):S!==x.res&&(x.res=S,x.promise=I.resolve({result:S}))):(x.dirty&&ce(b,x),x.subscribers.forEach(function(e){return o.add(e)})))}}}o.forEach(function(e){return e()})}}})(!1),{signal:i}),s.addEventListener(`error`,o(!1),{signal:i}),s.addEventListener(`complete`,o(!0),{signal:i})),s},table:function(r){var i=e.table(r),a=i.schema.primaryKey;return t(t({},i),{mutate:function(e){var o,s=N.trans;return!a.outbound&&s.db._options.cache!==`disabled`&&!s.explicit&&s.idbtrans.mode===`readwrite`&&(o=jn[`idb://${n}/${r}`])?(s=i.mutate(e),e.type!==`add`&&e.type!==`put`||!(50<=e.values.length||Hn(a,e).some(function(e){return e==null}))?(o.optimisticOps.push(e),e.mutatedParts&&Pn(e.mutatedParts),s.then(function(t){0<t.numFailures&&(ce(o.optimisticOps,e),(t=Yn(0,e,t))&&o.optimisticOps.push(t),e.mutatedParts)&&Pn(e.mutatedParts)}),s.catch(function(){ce(o.optimisticOps,e),e.mutatedParts&&Pn(e.mutatedParts)})):s.then(function(n){var r=Yn(0,t(t({},e),{values:e.values.map(function(e,r){var i;return n.failures[r]?e:(x(i=(i=a.keyPath)!=null&&i.includes(`.`)?re(e):t({},e),a.keyPath,n.results[r]),i)})}),n);o.optimisticOps.push(r),queueMicrotask(function(){return e.mutatedParts&&Pn(e.mutatedParts)})}),s):i.mutate(e)},query:function(e){var t,a,o,s,c,l,u;return Kn(N,i)&&qn(`query`,e)?(t=(o=N.trans)?.db._options.cache===`immutable`,a=(o=N).requery,o=o.signal,l=((e,t,n,r)=>{var i=jn[`idb://${e}/${t}`];if(!i)return[];if(!(e=i.queries[n]))return[null,!1,i,null];var a=e[(r.query?r.query.index.name:null)||``];if(!a)return[null,!1,i,null];switch(n){case`query`:var o=(s=r.direction)??`next`,s=a.find(function(e){return e.req.limit===r.limit&&e.req.values===r.values&&(e.req.direction??`next`)===o&&Qn(e.req.query.range,r.query.range)});return s?[s,!0,i,a]:[a.find(function(e){return(`limit`in e.req?e.req.limit:1/0)>=r.limit&&(e.req.direction??`next`)===o&&(!r.values||e.req.values)&&$n(e.req.query.range,r.query.range)}),!1,i,a];case`count`:return s=a.find(function(e){return Qn(e.req.query.range,r.query.range)}),[s,!!s,i,a]}})(n,r,`query`,e),u=l[0],s=l[2],c=l[3],u&&l[1]?u.obsSet=e.obsSet:(l=i.query(e).then(function(e){var n=e.result;if(u&&(u.res=n),t){for(var r=0,i=n.length;r<i;++r)Object.freeze(n[r]);Object.freeze(n)}return e}).catch(function(e){return c&&u&&ce(c,u),Promise.reject(e)}),u={obsSet:e.obsSet,promise:l,subscribers:new Set,type:`query`,req:e,dirty:!1},c?c.push(u):(c=[u],(s||=jn[`idb://${n}/${r}`]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}).queries.query[e.query.index.name||``]=c)),er(u,c,a,o),u.promise.then(function(n){return n=Zn(n.result,e,s?.optimisticOps,i,u,t),{result:t?n:re(n)}})):i.query(e)}})}})}};function nr(e,t){return new Proxy(e,{get:function(e,n,r){return n===`db`?t:Reflect.get(e,n,r)}})}$.prototype.version=function(e){if(isNaN(e)||e<.1)throw new D.Type(`Given version is not a positive number`);if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new D.Schema(`Cannot add version when database is open`);this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(t){return t._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(on),n.stores({}),this._state.autoSchema=!1),n},$.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||N.letThrough||this._vip)?e():new I(function(e,n){if(t._state.openComplete)return n(new D.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void n(new D.DatabaseClosed);t.open().catch(O)}t._state.dbReadyPromise.then(e,n)}).then(e)},$.prototype.use=function(e){var t=e.stack,n=e.create,r=e.level,e=e.name,i=(e&&this.unuse({stack:t,name:e}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:r??10,name:e}),i.sort(function(e,t){return e.level-t.level}),this},$.prototype.unuse=function(e){var t=e.stack,n=e.name,r=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(e){return r?e.create!==r:!!n&&e.name!==n})),this},$.prototype.open=function(){var e=this;return rt(M,function(){return Ln(e)})},$.prototype._close=function(){this.on.close.fire(new CustomEvent(`close`));var e=this._state;if(vn.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new I(function(t){e.dbReadyResolve=t}),e.openCanceller=new I(function(t,n){e.cancelOpen=n}))},$.prototype.close=function(e){var e=(e===void 0?{disableAutoOpen:!0}:e).disableAutoOpen,t=this._state;e?(t.isBeingOpened&&t.cancelOpen(new D.DatabaseClosed),this._close(),t.autoOpen=!1,t.dbOpenError=new D.DatabaseClosed):(this._close(),t.autoOpen=this._options.autoOpen||t.isBeingOpened,t.openComplete=!1,t.dbOpenError=null)},$.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!=`object`),r=this._state;return new I(function(i,a){function o(){t.close(e);var n=t._deps.indexedDB.deleteDatabase(t.name);n.onsuccess=z(function(){var e=t._deps,n=t.name,r;bn(r=e.indexedDB)||n===lt||yn(r,e.IDBKeyRange).delete(n).catch(O),i()}),n.onerror=X(a),n.onblocked=t._fireOnBlocked}if(n)throw new D.InvalidArgument(`Invalid closeOptions argument to db.delete()`);r.isBeingOpened?r.dbReadyPromise.then(o):o()})},$.prototype.backendDB=function(){return this.idbdb},$.prototype.isOpen=function(){return this.idbdb!==null},$.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name===`DatabaseClosed`},$.prototype.hasFailed=function(){return this._state.dbOpenError!==null},$.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty($.prototype,"tables",{get:function(){var e=this;return i(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),$.prototype.transaction=function(){var e=function(e,t,n){var r=arguments.length;if(r<2)throw new D.InvalidArgument(`Too few arguments`);for(var i=Array(r-1);--r;)i[r-1]=arguments[r];return n=i.pop(),[e,ee(i),n]}.apply(this,arguments);return this._transaction.apply(this,e)},$.prototype._transaction=function(e,t,n){var r,i,a=this,o=N.trans,s=(o&&o.db===this&&e.indexOf(`!`)===-1||(o=null),e.indexOf(`?`)!==-1);e=e.replace(`!`,``).replace(`?`,``);try{if(i=t.map(function(e){if(e=e instanceof a.Table?e.name:e,typeof e!=`string`)throw TypeError(`Invalid table argument to Dexie.transaction(). Only Table or String are allowed`);return e}),e==`r`||e===ut)r=ut;else{if(e!=`rw`&&e!=dt)throw new D.InvalidArgument(`Invalid transaction mode: `+e);r=dt}if(o){if(o.mode===ut&&r===dt){if(!s)throw new D.SubTransaction(`Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY`);o=null}o&&i.forEach(function(e){if(o&&o.storeNames.indexOf(e)===-1){if(!s)throw new D.SubTransaction(`Table `+e+` not included in parent transaction.`);o=null}}),s&&o&&!o.active&&(o=null)}}catch(e){return o?o._promise(null,function(t,n){n(e)}):W(e)}var c=function e(t,n,r,i,a){return I.resolve().then(function(){var o=N.transless||N,s=t._createTransaction(n,r,t._dbSchema,i),o=(s.explicit=!0,{trans:s,transless:o});if(i)s.idbtrans=i.idbtrans;else try{s.create(),s.idbtrans._explicit=!0,t._state.PR1398_maxLoop=3}catch(i){return i.name===E.InvalidState&&t.isOpen()&&0<--t._state.PR1398_maxLoop?(console.warn(`Dexie: Need to reopen db`),t.close({disableAutoOpen:!1}),t.open().then(function(){return e(t,n,r,null,a)})):W(i)}var c,l=de(a),o=(l&&U(),I.follow(function(){var e;(c=a.call(s,s))&&(l?(e=Qe.bind(null,null),c.then(e,e)):typeof c.next==`function`&&typeof c.throw==`function`&&(c=Rn(c)))},o));return(c&&typeof c.then==`function`?I.resolve(c).then(function(e){return s.active?e:W(new D.PrematureCommit(`Transaction committed too early. See http://bit.ly/2kdckMn`))}):o.then(function(){return c})).then(function(e){return i&&s._resolve(),s._completion.then(function(){return e})}).catch(function(e){return s._reject(e),W(e)})})}.bind(null,this,r,i,o,n);return o?o._promise(r,c,`lock`):N.trans?rt(N.transless,function(){return a._whenReady(c)}):this._whenReady(c)},$.prototype.table=function(e){if(l(this._allTables,e))return this._allTables[e];throw new D.InvalidTable(`Table ${e} does not exist`)};var rr=$;function $(e,n){var r,i,a,o,s,c=this,l=(this._middlewares={},this.verno=0,$.dependencies),l=(this._options=n=t({addons:$.addons,autoOpen:!0,indexedDB:l.indexedDB,IDBKeyRange:l.IDBKeyRange,cache:`cloned`,maxConnections:1e3},n),this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange},n.addons),u=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:O,dbReadyPromise:null,cancelOpen:O,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:n.autoOpen}),d=(u.dbReadyPromise=new I(function(e){u.dbReadyResolve=e}),u.openCanceller=new I(function(e,t){u.cancelOpen=t}),this._state=u,this.name=e,this.on=Ct(this,`populate`,`blocked`,`versionchange`,`close`,{ready:[Te,O]}),this.once=function(e,t){var n=function(){var r=[...arguments];c.on(e).unsubscribe(n),t.apply(c,r)};return c.on(e,n)},this.on.ready.subscribe=_(this.on.ready.subscribe,function(e){return function(t,n){$.vip(function(){var r,i=c._state;i.openComplete?(i.dbOpenError||I.resolve().then(t),n&&e(t)):i.onReadyBeingFired?(i.onReadyBeingFired.push(t),n&&e(t)):(e(t),r=c,n||e(function e(){r.on.ready.unsubscribe(t),r.on.ready.unsubscribe(e)}))})}}),this.Collection=(r=this,wt(Mt.prototype,function(e,t){this.db=r;var n=pt,i=null;if(t)try{n=t()}catch(e){i=e}var t=e._ctx,e=t.table,a=e.hook.reading.fire;this._ctx={table:e,index:t.index,isPrimKey:!t.index||e.schema.primKey.keyPath&&t.index===e.schema.primKey.name,range:n,keysOnly:!1,dir:`next`,unique:``,algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:i,or:t.or,valueMapper:a===ye?null:a}})),this.Table=(i=this,wt(St.prototype,function(e,t,n){this.db=i,this._tx=n,this.name=e,this.schema=t,this.hook=i._allTables[e]?i._allTables[e].hook:Ct(null,{creating:[xe,O],reading:[be,ye],updating:[Ce,O],deleting:[Se,O]})})),this.Transaction=(a=this,wt(Gt.prototype,function(e,t,n,r,i){var o=this;e!==`readonly`&&t.forEach(function(e){e=(e=n[e])?.yProps,e&&(t=t.concat(e.map(function(e){return e.updatesTable})))}),this.db=a,this.mode=e,this.storeNames=t,this.schema=n,this.chromeTransactionDurability=r,this.idbtrans=null,this.on=Ct(this,`complete`,`error`,`abort`),this.parent=i||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new I(function(e,t){o._resolve=e,o._reject=t}),this._completion.then(function(){o.active=!1,o.on.complete.fire()},function(e){var t=o.active;return o.active=!1,o.on.error.fire(e),o.parent?o.parent._reject(e):t&&o.idbtrans&&o.idbtrans.abort(),W(e)})})),this.Version=(o=this,wt(gn.prototype,function(e){this.db=o,this._cfg={version:e,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(s=this,wt(Bt.prototype,function(e,t,n){if(this.db=s,this._ctx={table:e,index:t===`:id`?null:t,or:n},this._cmp=this._ascending=G,this._descending=function(e,t){return G(t,e)},this._max=function(e,t){return 0<G(e,t)?e:t},this._min=function(e,t){return G(e,t)<0?e:t},this._IDBKeyRange=s._deps.IDBKeyRange,!this._IDBKeyRange)throw new D.MissingAPI})),this.on(`versionchange`,function(e){0<e.newVersion?console.warn(`Another connection wants to upgrade database '${c.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${c.name}'. Closing db now to resume the delete request.`),c.close({disableAutoOpen:!1})}),this.on(`blocked`,function(e){!e.newVersion||e.newVersion<e.oldVersion?console.warn(`Dexie.delete('${c.name}') was blocked`):console.warn(`Upgrade '${c.name}' blocked by other connection holding version ${e.oldVersion/10}`)}),this._maxKey=Yt(n.IDBKeyRange),this._createTransaction=function(e,t,n,r){return new c.Transaction(e,t,n,c._options.chromeTransactionDurability,r)},this._fireOnBlocked=function(e){c.on(`blocked`).fire(e),vn.toArray().filter(function(e){return e.name===c.name&&e!==c&&!e._state.vcFired}).map(function(t){return t.on(`versionchange`).fire(e)})},this.use(Gn),this.use(tr),this.use(Jn),this.use(Bn),this.use(Un),new Proxy(this,{get:function(e,t,n){var r;return t===`_vip`||(t===`table`?function(e){return nr(c.table(e),d)}:(r=Reflect.get(e,t,n))instanceof St?nr(r,d):t===`tables`?r.map(function(e){return nr(e,d)}):t===`_createTransaction`?function(){return nr(r.apply(this,arguments),d)}:r)}}));this.vip=d,l.forEach(function(e){return e(c)})}var ir,ke=typeof Symbol<`u`&&`observable`in Symbol?Symbol.observable:`@@observable`,ar=(or.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!=`function`?e:{next:e,error:t,complete:n})},or.prototype[ke]=function(){return this},or);function or(e){this._subscribe=e}try{ir={indexedDB:r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB,IDBKeyRange:r.IDBKeyRange||r.webkitIDBKeyRange}}catch{ir={indexedDB:null,IDBKeyRange:null}}function sr(e){var t,n=!1,r=new ar(function(r){var i=de(e),a,o=!1,s={},c={},l={get closed(){return o},unsubscribe:function(){o||(o=!0,a&&a.abort(),u&&Wt.storagemutated.unsubscribe(p))}},u=(r.start&&r.start(l),!1),d=function(){return at(m)};function f(){return An(c,s)}var p=function(e){kn(s,e),f()&&d()},m=function(){var l,m,h;!o&&ir.indexedDB&&(s={},l={},a&&a.abort(),a=new AbortController,h=(t=>{var n=R();try{i&&U();var r=H(e,t);return r=i?r.finally(Qe):r}finally{n&&Ge()}})(m={subscr:l,signal:a.signal,requery:d,querier:e,trans:null}),u||=(Wt.storagemutated.subscribe(p),!0),Promise.resolve(h).then(function(e){n=!0,t=e,o||m.signal.aborted||(f()||(c=l,f())?d():(s={},at(function(){return!o&&r.next&&r.next(e)})))},function(e){n=!1,[`DatabaseClosedError`,`AbortError`].includes(e?.name)||o||at(function(){o||r.error&&r.error(e)})}))};return setTimeout(d,0),l});return r.hasValue=function(){return n},r.getValue=function(){return t},r}var cr=rr;function lr(e){var t=dr;try{dr=!0,Wt.storagemutated.fire(e),Fn(e,!0)}finally{dr=t}}u(cr,t(t({},w),{delete:function(e){return new cr(e,{addons:[]}).delete()},exists:function(e){return new cr(e,{addons:[]}).open().then(function(e){return e.close(),!0}).catch(`NoSuchDatabaseError`,function(){return!1})},getDatabaseNames:function(e){try{return t=cr.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(bn(n)?Promise.resolve(n.databases()).then(function(e){return e.map(function(e){return e.name}).filter(function(e){return e!==lt})}):yn(n,t).toCollection().primaryKeys()).then(e)}catch{return W(new D.MissingAPI)}var t,n},defineClass:function(){return function(e){o(this,e)}},ignoreTransaction:function(e){return N.trans?rt(N.transless||M,e):e()},vip:xn,async:function(e){return function(){try{var t=Rn(e.apply(this,arguments));return t&&typeof t.then==`function`?t:I.resolve(t)}catch(e){return W(e)}}},spawn:function(e,t,n){try{var r=Rn(e.apply(n,t||[]));return r&&typeof r.then==`function`?r:I.resolve(r)}catch(e){return W(e)}},currentTransaction:{get:function(){return N.trans||null}},waitFor:function(e,t){return e=I.resolve(typeof e==`function`?cr.ignoreTransaction(e):e).timeout(t||6e4),N.trans?N.trans.waitFor(e):e},Promise:I,debug:{get:function(){return A},set:function(e){Ee(e)}},derive:p,extend:o,props:u,override:_,Events:Ct,on:Wt,liveQuery:sr,extendObservabilitySet:kn,getByKeyPath:b,setByKeyPath:x,delByKeyPath:function(e,t){typeof t==`string`?x(e,t,void 0):`length`in t&&[].map.call(t,function(t){x(e,t,void 0)})},shallowClone:S,deepClone:re,getObjectDiff:Vn,cmp:G,asap:y,minKey:-1/0,addons:[],connections:{get:vn.toArray},errnames:E,dependencies:ir,cache:jn,semVer:`4.4.4`,version:`4.4.4`.split(`.`).map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/10**(2*n)})})),cr.maxKey=Yt(cr.dependencies.IDBKeyRange),typeof dispatchEvent<`u`&&typeof addEventListener<`u`&&(Wt(Ht,function(e){dr||=(e=new CustomEvent(Ut,{detail:e}),dr=!0,dispatchEvent(e),!1)}),addEventListener(Ut,function(e){e=e.detail,dr||lr(e)}));var ur,dr=!1,fr=function(){};return typeof BroadcastChannel<`u`&&((fr=function(){(ur=new BroadcastChannel(Ut)).onmessage=function(e){return e.data&&lr(e.data)}})(),typeof ur.unref==`function`&&ur.unref(),Wt(Ht,function(e){dr||ur.postMessage(e)})),typeof addEventListener<`u`&&(addEventListener(`pagehide`,function(e){if(!rr.disableBfCache&&e.persisted){A&&console.debug(`Dexie: handling persisted pagehide`),ur?.close();for(var t=0,n=vn.toArray();t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener(`pageshow`,function(e){!rr.disableBfCache&&e.persisted&&(A&&console.debug(`Dexie: handling persisted pageshow`),fr(),lr({all:new Q(-1/0,[[]])}))})),I.rejectionMapper=function(e,t){return!e||e instanceof pe||e instanceof TypeError||e instanceof SyntaxError||!e.name||!ve[e.name]?e:(t=new ve[e.name](t||e.message,e),`stack`in e&&f(t,`stack`,{get:function(){return this.inner.stack}}),t)},Ee(A),t(rr,Object.freeze({__proto__:null,DEFAULT_MAX_CONNECTIONS:1e3,Dexie:rr,Entity:ht,PropModification:yt,RangeSet:Q,add:function(e){return new yt({add:e})},cmp:G,default:rr,liveQuery:sr,mergeRanges:wn,rangesOverlap:Tn,remove:function(e){return new yt({remove:e})},replacePrefix:function(e,t){return new yt({replacePrefix:[e,t]})}}),{default:rr}),rr})}))(),1),w=Symbol.for(`Dexie`),te=globalThis[w]||(globalThis[w]=ee.default);if(ee.default.semVer!==te.semVer)throw Error(`Two different versions of Dexie loaded in the same app: ${ee.default.semVer} and ${te.semVer}`);var{liveQuery:ne,mergeRanges:re,rangesOverlap:ie,RangeSet:ae,cmp:oe,Entity:se,PropModification:ce,replacePrefix:le,add:ue,remove:de,DexieYProvider:T}=te,fe=`modulepreload`,pe=function(e){return`/MEMORIA/`+e},me={},he=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=pe(t,n),t=s(t),t in me)return;me[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:fe,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ge=s({default:()=>E,getDashboardStats:()=>ye,getSetting:()=>D,initDB:()=>_e,recordStudy:()=>O,setSetting:()=>ve}),E=new te(`MemoriaDB`);E.version(1).stores({cards:`id, type, nextReview, repetition, efactor, [type+nextReview]`,progress:`id, lessonId, completed, score`,lessons:`id, level, completed, unlockedAt`,dailyStats:`date, cardsReviewed, correctAnswers, newCards, timeSpent`,settings:`key`});async function _e(){if(await E.settings.get(`initialized`))return;await E.settings.bulkPut([{key:`initialized`,value:!0},{key:`currentLevel`,value:`a1`},{key:`streak`,value:0},{key:`lastStudyDate`,value:null},{key:`totalWordsLearned`,value:0},{key:`totalTimeSpent`,value:0},{key:`dailyGoal`,value:20}]);let{grammarData:e}=await he(async()=>{let{grammarData:e}=await Promise.resolve().then(()=>Oe);return{grammarData:e}},void 0),t=e.filter(e=>e.level===`a1`);for(let e=0;e<t.length;e++)await E.lessons.put({id:t[e].id,level:`a1`,completed:!1,unlockedAt:e===0?Date.now():null})}async function D(e){let t=await E.settings.get(e);return t?t.value:null}async function ve(e,t){await E.settings.put({key:e,value:t})}async function O(e,t){let n=new Date().toISOString().split(`T`)[0],r=await E.dailyStats.get(n);r||={date:n,cardsReviewed:0,correctAnswers:0,newCards:0,timeSpent:0},r.cardsReviewed++,e&&r.correctAnswers++,r.timeSpent+=t,await E.dailyStats.put(r);let i=await D(`lastStudyDate`);i===new Date(Date.now()-864e5).toISOString().split(`T`)[0]||i===n?i!==n&&await ve(`streak`,(await D(`streak`)||0)+1):i!==n&&await ve(`streak`,1),await ve(`lastStudyDate`,n)}async function ye(){let e=new Date().toISOString().split(`T`)[0],t=await E.dailyStats.get(e)||{cardsReviewed:0,correctAnswers:0,newCards:0,timeSpent:0},n=await D(`streak`)||0,r=await E.cards.count(),i=await E.cards.where(`repetition`).aboveOrEqual(5).count();return{todayReviewed:t.cardsReviewed,todayCorrect:t.correctAnswers,streak:n,totalCards:r,masteredCards:i}}var be=s({Quality:()=>k,calculateNextReview:()=>Se,createSRSCard:()=>xe,getDueCards:()=>Ce,getDueCount:()=>we}),k={BLACKOUT:0,INCORRECT:1,HARD:2,DIFFICULT:3,GOOD:4,PERFECT:5};function xe(e,t,n){return{id:e,type:t,data:n,interval:0,repetition:0,efactor:2.5,nextReview:Date.now(),lastReview:null,totalReviews:0,correctReviews:0,streak:0}}function Se(e,t){let{interval:n,repetition:r,efactor:i}=e,a=i+(.1-(5-t)*(.08+(5-t)*.02));a<1.3&&(a=1.3);let o,s;t<3?(s=0,o=1):(s=r+1,o=s===1?1:s===2?6:Math.round(n*a));let c=Date.now(),l=c+o*24*60*60*1e3;return{...e,interval:o,repetition:s,efactor:Math.round(a*100)/100,nextReview:l,lastReview:c,totalReviews:e.totalReviews+1,correctReviews:t>=3?e.correctReviews+1:e.correctReviews,streak:t>=3?e.streak+1:0}}function Ce(e,t=20){let n=Date.now();return e.filter(e=>e.nextReview<=n).sort((e,t)=>{let r=n-e.nextReview,i=n-t.nextReview;return r===i?e.efactor-t.efactor:i-r}).slice(0,t)}function we(e){let t=Date.now();return e.filter(e=>e.nextReview<=t).length}var Te=[{id:`a1-01`,level:`a1`,number:1,title:`L'alphabet et la prononciation`,desc:`Les bases de la prononciation espagnole`,content:`
      <h2>L'alphabet espagnol</h2>
      <p>L'alphabet espagnol compte 27 lettres — les mêmes que le français, plus la <strong>ñ</strong>. La bonne nouvelle : l'espagnol se prononce (presque) comme il s'écrit !</p>
      
      <h3>Les sons qui changent</h3>
      <div class="grammar-table-wrap">
      <table class="grammar-table">
        <tr><th>Lettre</th><th>Son</th><th>Exemple</th></tr>
        <tr><td><strong>C</strong> (+ e, i)</td><td>"th" anglais (Espagne) / "s" (Latam)</td><td><em>cerveza</em> → bière</td></tr>
        <tr><td><strong>G</strong> (+ e, i)</td><td>"r" raclé (comme "jota")</td><td><em>gente</em> → gens</td></tr>
        <tr><td><strong>H</strong></td><td>Toujours muet !</td><td><em>hola</em> → bonjour</td></tr>
        <tr><td><strong>J</strong></td><td>"r" raclé fort</td><td><em>jugar</em> → jouer</td></tr>
        <tr><td><strong>LL</strong></td><td>"y" (comme "yoga")</td><td><em>llamar</em> → appeler</td></tr>
        <tr><td><strong>Ñ</strong></td><td>"gn" (comme "montagne")</td><td><em>España</em> → Espagne</td></tr>
        <tr><td><strong>R</strong></td><td>Roulé (surtout en début de mot)</td><td><em>rojo</em> → rouge</td></tr>
        <tr><td><strong>V</strong></td><td>Prononcé comme un "b" doux</td><td><em>vino</em> → vin</td></tr>
        <tr><td><strong>Z</strong></td><td>"th" anglais (Espagne) / "s" (Latam)</td><td><em>zapato</em> → chaussure</td></tr>
      </table>
      </div>

      <div class="tip-box">
        <strong>💡 Astuce :</strong> En espagnol, chaque voyelle a toujours le même son : A = a, E = é, I = i, O = o, U = ou. Pas de "e" muet comme en français !
      </div>

      <h3>L'accent tonique</h3>
      <p>L'accent tonique est crucial en espagnol. Il tombe naturellement sur :</p>
      <ul>
        <li><strong>L'avant-dernière syllabe</strong> si le mot finit par une voyelle, -n ou -s → <em>ca<strong>sa</strong></em></li>
        <li><strong>La dernière syllabe</strong> si le mot finit par une consonne (sauf -n, -s) → <em>ciu<strong>dad</strong></em></li>
        <li>Un accent écrit (´) indique une exception → <em><strong>mú</strong>sica</em></li>
      </ul>

      <div class="example-box">
        <div class="example-es">🔊 ¡Hola! ¿Cómo te llamas?</div>
        <div class="example-fr">Salut ! Comment tu t'appelles ?</div>
      </div>
    `,exercises:[{type:`qcm`,question:`Comment prononce-t-on la lettre H en espagnol ?`,options:[`Comme un 'r' raclé`,`Elle est toujours muette`,`Comme en français`,`Comme un 'j'`],correct:1},{type:`qcm`,question:`Quel son fait le 'ñ' ?`,options:[`n`,`gn (comme montagne)`,`ny`,`nn`],correct:1},{type:`qcm`,question:`Comment se prononce 'cerveza' en Espagne ?`,options:[`servésa`,`thervétha`,`kervésa`,`servétha`],correct:1}]},{id:`a1-02`,level:`a1`,number:2,title:`Les articles définis et indéfinis`,desc:`El, la, los, las / un, una, unos, unas`,content:`
      <h2>Les articles en espagnol</h2>
      <p>Comme en français, l'espagnol utilise des articles définis ("le, la") et indéfinis ("un, une"). Mais pas de contraction comme "du" ou "au" !</p>

      <h3>Articles définis</h3>
      <table class="grammar-table">
        <tr><th></th><th>Masculin</th><th>Féminin</th></tr>
        <tr><td><strong>Singulier</strong></td><td>el (le)</td><td>la (la)</td></tr>
        <tr><td><strong>Pluriel</strong></td><td>los (les)</td><td>las (les)</td></tr>
      </table>

      <div class="example-box">
        <div class="example-es">El libro está en la mesa.</div>
        <div class="example-fr">Le livre est sur la table.</div>
      </div>

      <h3>Articles indéfinis</h3>
      <table class="grammar-table">
        <tr><th></th><th>Masculin</th><th>Féminin</th></tr>
        <tr><td><strong>Singulier</strong></td><td>un (un)</td><td>una (une)</td></tr>
        <tr><td><strong>Pluriel</strong></td><td>unos (des)</td><td>unas (des)</td></tr>
      </table>

      <div class="example-box">
        <div class="example-es">Tengo un perro y una gata.</div>
        <div class="example-fr">J'ai un chien et une chatte.</div>
      </div>

      <div class="tip-box">
        <strong>💡 Attention :</strong> Devant un nom féminin commençant par <em>a-</em> ou <em>ha-</em> accentué, on utilise <strong>el</strong> (mais le mot reste féminin) : <em>el agua fría</em> (l'eau froide), <em>el águila</em> (l'aigle).
      </div>

      <h3>Contractions</h3>
      <p>Il n'y en a que deux :</p>
      <ul>
        <li><strong>a + el = al</strong> → <em>Voy al cine</em> (Je vais au cinéma)</li>
        <li><strong>de + el = del</strong> → <em>Vengo del trabajo</em> (Je viens du travail)</li>
      </ul>
    `,exercises:[{type:`fill`,question:`Complétez : ___ casa es bonita. (La maison est jolie)`,answer:`La`,hint:`Article défini féminin singulier`},{type:`qcm`,question:`Quelle est la contraction de 'a + el' ?`,options:[`a el`,`al`,`del`,`a'l`],correct:1},{type:`fill`,question:`Complétez : Tengo ___ amigo en Madrid. (J'ai un ami à Madrid)`,answer:`un`,hint:`Article indéfini masculin singulier`},{type:`qcm`,question:`Pourquoi dit-on 'el agua' et non 'la agua' ?`,options:[`Agua est masculin`,`Pour éviter la cacophonie (a + a accentué)`,`C'est une exception sans logique`,`Les deux sont corrects`],correct:1}]},{id:`a1-03`,level:`a1`,number:3,title:`Le genre et le nombre des noms`,desc:`Masculin/féminin, singulier/pluriel`,content:`
      <h2>Le genre des noms</h2>
      <p>En espagnol, tous les noms sont soit masculins, soit féminins. Bonne nouvelle : les règles sont plus régulières qu'en français !</p>

      <h3>Règle générale</h3>
      <ul>
        <li>Noms en <strong>-o</strong> → généralement <strong>masculins</strong> : <em>el libro, el gato, el vino</em></li>
        <li>Noms en <strong>-a</strong> → généralement <strong>féminins</strong> : <em>la casa, la mesa, la puerta</em></li>
      </ul>

      <div class="tip-box">
        <strong>💡 Exceptions courantes :</strong> <em>el día</em> (le jour), <em>el mapa</em> (la carte), <em>el problema</em> (le problème), <em>el tema</em> (le thème), <em>la mano</em> (la main), <em>la radio</em> (la radio).
      </div>

      <h3>Autres terminaisons</h3>
      <table class="grammar-table">
        <tr><th>Terminaison</th><th>Genre</th><th>Exemples</th></tr>
        <tr><td>-ción, -sión</td><td>Féminin</td><td><em>la nación, la televisión</em></td></tr>
        <tr><td>-dad, -tad</td><td>Féminin</td><td><em>la ciudad, la libertad</em></td></tr>
        <tr><td>-or</td><td>Masculin</td><td><em>el color, el amor</em></td></tr>
        <tr><td>-aje</td><td>Masculin</td><td><em>el viaje, el paisaje</em></td></tr>
      </table>

      <h2>Le nombre (pluriel)</h2>
      <h3>Former le pluriel</h3>
      <ul>
        <li>Mot finissant par une <strong>voyelle</strong> → ajouter <strong>-s</strong> : <em>casa → casas, libro → libros</em></li>
        <li>Mot finissant par une <strong>consonne</strong> → ajouter <strong>-es</strong> : <em>ciudad → ciudades, color → colores</em></li>
        <li>Mot finissant par <strong>-z</strong> → changer en <strong>-ces</strong> : <em>pez → peces, luz → luces</em></li>
      </ul>

      <div class="example-box">
        <div class="example-es">Las ciudades españolas son muy bonitas.</div>
        <div class="example-fr">Les villes espagnoles sont très jolies.</div>
      </div>
    `,exercises:[{type:`qcm`,question:`Quel est le genre de 'problema' ?`,options:[`Féminin (la problema)`,`Masculin (el problema)`,`Les deux sont acceptés`],correct:1},{type:`fill`,question:`Mettez au pluriel : la ciudad → las ___`,answer:`ciudades`,hint:`Consonne → ajouter -es`},{type:`qcm`,question:`Quel est le pluriel de 'el pez' (le poisson) ?`,options:[`los pezs`,`los pezes`,`los peces`,`los pez`],correct:2}]},{id:`a1-04`,level:`a1`,number:4,title:`Les adjectifs`,desc:`Accord en genre et nombre, placement`,content:`
      <h2>Les adjectifs en espagnol</h2>
      <p>Les adjectifs s'accordent en <strong>genre</strong> et en <strong>nombre</strong> avec le nom, comme en français. Mais attention : ils se placent généralement <strong>après</strong> le nom !</p>

      <h3>Accord des adjectifs</h3>
      <table class="grammar-table">
        <tr><th></th><th>Masculin</th><th>Féminin</th></tr>
        <tr><td><strong>Singulier</strong></td><td>bonit<strong>o</strong></td><td>bonit<strong>a</strong></td></tr>
        <tr><td><strong>Pluriel</strong></td><td>bonit<strong>os</strong></td><td>bonit<strong>as</strong></td></tr>
      </table>

      <div class="example-box">
        <div class="example-es">La casa blanca es grande.</div>
        <div class="example-fr">La maison blanche est grande.</div>
      </div>

      <h3>Adjectifs invariables en genre</h3>
      <p>Les adjectifs qui finissent par <strong>-e</strong> ou une <strong>consonne</strong> ne changent pas entre masculin et féminin :</p>
      <ul>
        <li><em>grande</em> → <em>un chico grande, una chica grande</em></li>
        <li><em>fácil</em> → <em>un ejercicio fácil, una pregunta fácil</em></li>
        <li><em>azul</em> → <em>el cielo azul, la puerta azul</em></li>
      </ul>

      <h3>Placement</h3>
      <p><strong>Après le nom</strong> (cas général) : adjectifs descriptifs → <em>un coche rojo</em> (une voiture rouge)</p>
      <p><strong>Avant le nom</strong> (cas spéciaux) : <em>bueno, malo, grande, pequeño, primer, último</em></p>

      <div class="tip-box">
        <strong>💡 Attention :</strong> <em>bueno → buen</em> et <em>malo → mal</em> devant un nom masculin singulier : <em>un buen día</em>, <em>un mal momento</em>.
      </div>
    `,exercises:[{type:`fill`,question:`Accordez : Las flores son muy ___ (bonito)`,answer:`bonitas`,hint:`Féminin pluriel`},{type:`qcm`,question:`Où place-t-on généralement l'adjectif en espagnol ?`,options:[`Avant le nom`,`Après le nom`,`Les deux positions sont équivalentes`],correct:1},{type:`fill`,question:`Complétez : Es un ___ amigo. (C'est un bon ami)`,answer:`buen`,hint:`bueno se raccourcit devant un nom masculin`}]},{id:`a1-05`,level:`a1`,number:5,title:`Les pronoms personnels sujets`,desc:`Yo, tú, él/ella, nosotros, vosotros, ellos`,content:`
      <h2>Les pronoms personnels sujets</h2>
      <p>Grande différence avec le français : en espagnol, on <strong>omet souvent</strong> le pronom sujet car la conjugaison du verbe suffit à identifier la personne !</p>

      <table class="grammar-table">
        <tr><th>Espagnol</th><th>Français</th><th>Usage</th></tr>
        <tr><td><strong>Yo</strong></td><td>Je</td><td></td></tr>
        <tr><td><strong>Tú</strong></td><td>Tu</td><td>Informel</td></tr>
        <tr><td><strong>Usted (Ud.)</strong></td><td>Vous (politesse)</td><td>Formel, conjugué à la 3e pers.</td></tr>
        <tr><td><strong>Él / Ella</strong></td><td>Il / Elle</td><td></td></tr>
        <tr><td><strong>Nosotros / Nosotras</strong></td><td>Nous</td><td></td></tr>
        <tr><td><strong>Vosotros / Vosotras</strong></td><td>Vous (pluriel)</td><td>Espagne uniquement</td></tr>
        <tr><td><strong>Ustedes (Uds.)</strong></td><td>Vous (pluriel)</td><td>Latam = informel + formel</td></tr>
        <tr><td><strong>Ellos / Ellas</strong></td><td>Ils / Elles</td><td></td></tr>
      </table>

      <div class="example-box">
        <div class="example-es">¿(Tú) hablas español? — Sí, (yo) hablo un poco.</div>
        <div class="example-fr">Tu parles espagnol ? — Oui, je parle un peu.</div>
      </div>

      <div class="tip-box">
        <strong>💡 Quand utiliser le pronom ?</strong> On l'ajoute pour insister, clarifier ou contraster : <em>Yo soy francés, pero <strong>ella</strong> es española.</em> (Moi je suis français, mais <strong>elle</strong> est espagnole.)
      </div>

      <h3>Tú vs Usted</h3>
      <p><strong>Tú</strong> = tutoiement (amis, famille, jeunes). <strong>Usted</strong> = vouvoiement (formel, respect). En Amérique latine, <em>usted</em> est beaucoup plus courant qu'en Espagne.</p>
    `,exercises:[{type:`qcm`,question:`Pourquoi peut-on souvent omettre le pronom sujet en espagnol ?`,options:[`Par politesse`,`Parce que la conjugaison identifie la personne`,`Parce que le sujet n'est pas important`,`C'est incorrect de l'omettre`],correct:1},{type:`qcm`,question:`'Vosotros' est utilisé :`,options:[`Partout dans le monde hispanophone`,`Uniquement en Espagne`,`Uniquement en Amérique latine`,`Seulement à l'écrit`],correct:1},{type:`qcm`,question:`'Usted' se conjugue comme :`,options:[`La 1re personne (yo)`,`La 2e personne (tú)`,`La 3e personne (él/ella)`,`La 1re personne du pluriel`],correct:2}]},{id:`a1-06`,level:`a1`,number:6,title:`Le présent de l'indicatif — verbes réguliers`,desc:`Conjuguer les verbes en -ar, -er, -ir`,content:`
      <h2>Le présent des verbes réguliers</h2>
      <p>Les verbes espagnols se divisent en 3 groupes selon leur terminaison à l'infinitif : <strong>-AR</strong>, <strong>-ER</strong>, <strong>-IR</strong>. Voici les terminaisons :</p>

      <h3>Verbes en -AR (hablar = parler)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Terminaison</th><th>Exemple</th></tr>
        <tr><td>Yo</td><td>-o</td><td>habl<strong>o</strong></td></tr>
        <tr><td>Tú</td><td>-as</td><td>habl<strong>as</strong></td></tr>
        <tr><td>Él/Ella/Ud.</td><td>-a</td><td>habl<strong>a</strong></td></tr>
        <tr><td>Nosotros</td><td>-amos</td><td>habl<strong>amos</strong></td></tr>
        <tr><td>Vosotros</td><td>-áis</td><td>habl<strong>áis</strong></td></tr>
        <tr><td>Ellos/Uds.</td><td>-an</td><td>habl<strong>an</strong></td></tr>
      </table>

      <h3>Verbes en -ER (comer = manger)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Terminaison</th><th>Exemple</th></tr>
        <tr><td>Yo</td><td>-o</td><td>com<strong>o</strong></td></tr>
        <tr><td>Tú</td><td>-es</td><td>com<strong>es</strong></td></tr>
        <tr><td>Él/Ella/Ud.</td><td>-e</td><td>com<strong>e</strong></td></tr>
        <tr><td>Nosotros</td><td>-emos</td><td>com<strong>emos</strong></td></tr>
        <tr><td>Vosotros</td><td>-éis</td><td>com<strong>éis</strong></td></tr>
        <tr><td>Ellos/Uds.</td><td>-en</td><td>com<strong>en</strong></td></tr>
      </table>

      <h3>Verbes en -IR (vivir = vivre)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Terminaison</th><th>Exemple</th></tr>
        <tr><td>Yo</td><td>-o</td><td>viv<strong>o</strong></td></tr>
        <tr><td>Tú</td><td>-es</td><td>viv<strong>es</strong></td></tr>
        <tr><td>Él/Ella/Ud.</td><td>-e</td><td>viv<strong>e</strong></td></tr>
        <tr><td>Nosotros</td><td>-imos</td><td>viv<strong>imos</strong></td></tr>
        <tr><td>Vosotros</td><td>-ís</td><td>viv<strong>ís</strong></td></tr>
        <tr><td>Ellos/Uds.</td><td>-en</td><td>viv<strong>en</strong></td></tr>
      </table>

      <div class="tip-box">
        <strong>💡 Astuce :</strong> Les verbes en -ER et -IR ont presque les mêmes terminaisons ! Seule différence : <em>nosotros</em> (-emos / -imos) et <em>vosotros</em> (-éis / -ís).
      </div>

      <h3>Verbes courants réguliers</h3>
      <ul>
        <li><strong>-AR</strong> : trabajar (travailler), estudiar (étudier), comprar (acheter), cocinar (cuisiner), caminar (marcher)</li>
        <li><strong>-ER</strong> : beber (boire), leer (lire), aprender (apprendre), correr (courir)</li>
        <li><strong>-IR</strong> : escribir (écrire), abrir (ouvrir), subir (monter), recibir (recevoir)</li>
      </ul>

      <div class="example-box">
        <div class="example-es">Yo trabajo en una oficina y como en un restaurante.</div>
        <div class="example-fr">Je travaille dans un bureau et je mange dans un restaurant.</div>
      </div>
    `,exercises:[{type:`fill`,question:`Conjuguez : Nosotros ___ (hablar) español.`,answer:`hablamos`,hint:`Verbe en -AR, 1re personne du pluriel`},{type:`qcm`,question:`Quelle est la terminaison de 'tú' pour les verbes en -ER ?`,options:[`-as`,`-es`,`-is`,`-os`],correct:1},{type:`fill`,question:`Conjuguez : Ellos ___ (vivir) en Barcelona.`,answer:`viven`,hint:`Verbe en -IR, 3e personne du pluriel`},{type:`fill`,question:`Conjuguez : Tú ___ (escribir) muy bien.`,answer:`escribes`,hint:`Verbe en -IR, 2e personne du singulier`}]},{id:`a1-07`,level:`a1`,number:7,title:`Ser vs Estar`,desc:`Les deux verbes 'être' — quand utiliser lequel`,content:`
      <h2>Ser vs Estar — le grand défi !</h2>
      <p>L'espagnol a <strong>deux verbes "être"</strong>. C'est probablement la plus grande difficulté pour les francophones, mais avec les bonnes règles, ça devient logique.</p>

      <h3>Conjugaison au présent</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>SER</th><th>ESTAR</th></tr>
        <tr><td>Yo</td><td>soy</td><td>estoy</td></tr>
        <tr><td>Tú</td><td>eres</td><td>estás</td></tr>
        <tr><td>Él/Ella</td><td>es</td><td>está</td></tr>
        <tr><td>Nosotros</td><td>somos</td><td>estamos</td></tr>
        <tr><td>Vosotros</td><td>sois</td><td>estáis</td></tr>
        <tr><td>Ellos</td><td>son</td><td>están</td></tr>
      </table>

      <h3>Quand utiliser SER ? (DOCTOR)</h3>
      <p>Moyen mnémotechnique : <strong>D.O.C.T.O.R.</strong></p>
      <ul>
        <li><strong>D</strong>escription (caractéristiques permanentes) → <em>Ella <strong>es</strong> alta</em></li>
        <li><strong>O</strong>ccupation → <em>Soy profesor</em></li>
        <li><strong>C</strong>aractéristique / personnalité → <em>Él <strong>es</strong> simpático</em></li>
        <li><strong>T</strong>emps (heure, date) → <em><strong>Son</strong> las tres</em></li>
        <li><strong>O</strong>rigine / nationalité → <em>Soy de Francia</em></li>
        <li><strong>R</strong>elation → <em>Ella <strong>es</strong> mi hermana</em></li>
      </ul>

      <h3>Quand utiliser ESTAR ? (PLACE)</h3>
      <p>Moyen mnémotechnique : <strong>P.L.A.C.E.</strong></p>
      <ul>
        <li><strong>P</strong>osition / lieu → <em><strong>Estoy</strong> en Madrid</em></li>
        <li><strong>L</strong>ocation → <em>El banco <strong>está</strong> en la esquina</em></li>
        <li><strong>A</strong>ction (gérondif) → <em><strong>Estoy</strong> comiendo</em></li>
        <li><strong>C</strong>ondition (état temporaire) → <em><strong>Estoy</strong> cansado</em></li>
        <li><strong>E</strong>motion (humeur) → <em><strong>Estoy</strong> contento</em></li>
      </ul>

      <div class="tip-box">
        <strong>💡 La règle d'or :</strong> SER = permanent/essentiel. ESTAR = temporaire/circonstanciel.
        <br><em>Ella <strong>es</strong> guapa</em> = Elle est belle (caractéristique).
        <br><em>Ella <strong>está</strong> guapa</em> = Elle est belle (en ce moment, bien habillée).
      </div>

      <div class="example-box">
        <div class="example-es">Soy francés, pero estoy en España. ¡Estoy muy contento!</div>
        <div class="example-fr">Je suis français, mais je suis en Espagne. Je suis très content !</div>
      </div>
    `,exercises:[{type:`qcm`,question:`'María ___ de México.' — Ser ou Estar ?`,options:[`es (ser)`,`está (estar)`],correct:0},{type:`qcm`,question:`'El restaurante ___ en la calle Mayor.' — Ser ou Estar ?`,options:[`es (ser)`,`está (estar)`],correct:1},{type:`fill`,question:`Complétez : Yo ___ cansado. (Je suis fatigué — état temporaire)`,answer:`estoy`,hint:`État temporaire = estar`},{type:`qcm`,question:`'___ las ocho de la mañana.' (Il est 8h du matin)`,options:[`Están`,`Son`,`Están siendo`,`Es`],correct:1}]},{id:`a1-08`,level:`a1`,number:8,title:`Tener, Hacer, Ir — verbes irréguliers essentiels`,desc:`Les verbes irréguliers les plus utilisés`,content:`
      <h2>Les 3 verbes irréguliers indispensables</h2>
      <p>Ces verbes sont parmi les plus utilisés en espagnol et sont tous irréguliers au présent.</p>

      <h3>TENER (avoir)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Conjugaison</th></tr>
        <tr><td>Yo</td><td>tengo</td></tr>
        <tr><td>Tú</td><td>tienes</td></tr>
        <tr><td>Él/Ella</td><td>tiene</td></tr>
        <tr><td>Nosotros</td><td>tenemos</td></tr>
        <tr><td>Vosotros</td><td>tenéis</td></tr>
        <tr><td>Ellos</td><td>tienen</td></tr>
      </table>

      <p><strong>Expressions avec TENER</strong> (là où le français utilise "avoir" ou "être") :</p>
      <ul>
        <li><em>Tener hambre</em> = Avoir faim</li>
        <li><em>Tener sed</em> = Avoir soif</li>
        <li><em>Tener frío / calor</em> = Avoir froid / chaud</li>
        <li><em>Tener sueño</em> = Avoir sommeil</li>
        <li><em>Tener miedo</em> = Avoir peur</li>
        <li><em>Tener razón</em> = Avoir raison</li>
        <li><em>Tener ... años</em> = Avoir ... ans</li>
        <li><em>Tener que + infinitif</em> = Devoir (obligation)</li>
      </ul>

      <h3>HACER (faire)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Conjugaison</th></tr>
        <tr><td>Yo</td><td>hago</td></tr>
        <tr><td>Tú</td><td>haces</td></tr>
        <tr><td>Él/Ella</td><td>hace</td></tr>
        <tr><td>Nosotros</td><td>hacemos</td></tr>
        <tr><td>Vosotros</td><td>hacéis</td></tr>
        <tr><td>Ellos</td><td>hacen</td></tr>
      </table>

      <h3>IR (aller)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Conjugaison</th></tr>
        <tr><td>Yo</td><td>voy</td></tr>
        <tr><td>Tú</td><td>vas</td></tr>
        <tr><td>Él/Ella</td><td>va</td></tr>
        <tr><td>Nosotros</td><td>vamos</td></tr>
        <tr><td>Vosotros</td><td>vais</td></tr>
        <tr><td>Ellos</td><td>van</td></tr>
      </table>

      <div class="tip-box">
        <strong>💡 IR + A + infinitif</strong> = futur proche (comme "aller + infinitif" en français) : <em>Voy a comer</em> = Je vais manger.
      </div>

      <div class="example-box">
        <div class="example-es">Tengo 25 años, hago deporte y voy a la playa los domingos.</div>
        <div class="example-fr">J'ai 25 ans, je fais du sport et je vais à la plage le dimanche.</div>
      </div>
    `,exercises:[{type:`fill`,question:`Complétez : Yo ___ 30 años. (J'ai 30 ans)`,answer:`tengo`,hint:`Tener, 1re personne du singulier`},{type:`qcm`,question:`Comment dit-on 'Je dois étudier' ?`,options:[`Tengo estudiar`,`Tengo que estudiar`,`Hago estudiar`,`Voy estudiar`],correct:1},{type:`fill`,question:`Complétez : ¿Qué ___ (hacer, tú) este fin de semana?`,answer:`haces`,hint:`Hacer, 2e personne du singulier`},{type:`fill`,question:`Complétez : Nosotros ___ (ir) al cine esta noche.`,answer:`vamos`,hint:`Ir, 1re personne du pluriel`}]},{id:`a1-09`,level:`a1`,number:9,title:`Les adjectifs possessifs et démonstratifs`,desc:`Mi, tu, su / este, ese, aquel`,content:`
      <h2>Les possessifs</h2>

      <h3>Formes courtes (avant le nom)</h3>
      <table class="grammar-table">
        <tr><th>Français</th><th>Singulier</th><th>Pluriel</th></tr>
        <tr><td>Mon/Ma</td><td>mi</td><td>mis</td></tr>
        <tr><td>Ton/Ta</td><td>tu</td><td>tus</td></tr>
        <tr><td>Son/Sa (de él/ella/Ud.)</td><td>su</td><td>sus</td></tr>
        <tr><td>Notre</td><td>nuestro/a</td><td>nuestros/as</td></tr>
        <tr><td>Votre</td><td>vuestro/a</td><td>vuestros/as</td></tr>
        <tr><td>Leur</td><td>su</td><td>sus</td></tr>
      </table>

      <div class="tip-box">
        <strong>💡 Attention :</strong> <em>su/sus</em> peut signifier "son", "sa", "leur(s)" ou "votre" (usted). Le contexte permet de comprendre. Si c'est ambigu, on précise : <em>el libro <strong>de él</strong></em>.
      </div>

      <div class="example-box">
        <div class="example-es">Mi casa es tu casa.</div>
        <div class="example-fr">Ma maison est ta maison. (Expression d'hospitalité !)</div>
      </div>

      <h2>Les démonstratifs</h2>
      <table class="grammar-table">
        <tr><th></th><th>Près (ici)</th><th>Milieu (là)</th><th>Loin (là-bas)</th></tr>
        <tr><td>Masc. sing.</td><td>este</td><td>ese</td><td>aquel</td></tr>
        <tr><td>Fém. sing.</td><td>esta</td><td>esa</td><td>aquella</td></tr>
        <tr><td>Masc. plur.</td><td>estos</td><td>esos</td><td>aquellos</td></tr>
        <tr><td>Fém. plur.</td><td>estas</td><td>esas</td><td>aquellas</td></tr>
      </table>

      <div class="example-box">
        <div class="example-es">Este libro es interesante, pero aquel es mejor.</div>
        <div class="example-fr">Ce livre(-ci) est intéressant, mais celui-là (bas) est mieux.</div>
      </div>
    `,exercises:[{type:`fill`,question:`Complétez : ___ padres viven en Madrid. (Mes parents)`,answer:`Mis`,hint:`Possessif 'mon/ma' au pluriel`},{type:`qcm`,question:`'Ese' désigne quelque chose de :`,options:[`Proche (ici)`,`À distance moyenne (là)`,`Très loin (là-bas)`],correct:1},{type:`fill`,question:`Complétez : ___ casa es muy grande. (Notre maison)`,answer:`Nuestra`,hint:`Possessif 'notre', casa est féminin`}]},{id:`a1-10`,level:`a1`,number:10,title:`Les prépositions`,desc:`A, de, en, con, por, para`,content:`
      <h2>Les prépositions essentielles</h2>
      
      <h3>A (à, vers)</h3>
      <ul>
        <li>Direction / destination → <em>Voy <strong>a</strong> Madrid</em></li>
        <li>COI (à quelqu'un) → <em>Doy el libro <strong>a</strong> María</em></li>
        <li>Heure → <em><strong>A</strong> las ocho</em> (À huit heures)</li>
        <li><strong>"A personal"</strong> : devant un COD humain → <em>Veo <strong>a</strong> mi amigo</em></li>
      </ul>

      <h3>DE (de, depuis)</h3>
      <ul>
        <li>Origine → <em>Soy <strong>de</strong> Francia</em></li>
        <li>Possession → <em>El coche <strong>de</strong> Juan</em></li>
        <li>Matière → <em>Una mesa <strong>de</strong> madera</em></li>
      </ul>

      <h3>EN (dans, en, sur)</h3>
      <ul>
        <li>Lieu (à l'intérieur) → <em>Estoy <strong>en</strong> casa</em></li>
        <li>Moyen de transport → <em>Voy <strong>en</strong> tren</em></li>
        <li>Mois/année → <em><strong>En</strong> enero, <strong>en</strong> 2024</em></li>
      </ul>

      <h3>CON (avec)</h3>
      <ul>
        <li>Accompagnement → <em>Voy <strong>con</strong> mis amigos</em></li>
        <li><strong>Conmigo / Contigo</strong> = avec moi / avec toi</li>
      </ul>

      <div class="tip-box">
        <strong>💡 POR vs PARA</strong> — Un sujet complexe qu'on approfondira plus tard ! Pour l'instant, retenez :
        <br><strong>PARA</strong> = destination, objectif, "pour" → <em>Este regalo es <strong>para</strong> ti</em>
        <br><strong>POR</strong> = cause, moyen, "à cause de / par" → <em>Gracias <strong>por</strong> todo</em>
      </div>

      <div class="example-box">
        <div class="example-es">Voy a la oficina en metro con mi hermano.</div>
        <div class="example-fr">Je vais au bureau en métro avec mon frère.</div>
      </div>
    `,exercises:[{type:`fill`,question:`Complétez : Veo ___ mi madre todos los días. (Je vois ma mère)`,answer:`a`,hint:`A personal devant un COD humain`},{type:`qcm`,question:`Comment dit-on 'avec moi' en espagnol ?`,options:[`con yo`,`con mí`,`conmigo`,`a mí`],correct:2},{type:`fill`,question:`Complétez : Este regalo es ___ ti. (Ce cadeau est pour toi)`,answer:`para`,hint:`Destination / destinataire`}]},{id:`a1-11`,level:`a1`,number:11,title:`La négation et les questions`,desc:`No, nunca, nada, nadie / former des questions`,content:`
      <h2>La négation</h2>
      <p>En espagnol, la négation est simple : on met <strong>no</strong> devant le verbe.</p>

      <div class="example-box">
        <div class="example-es">No hablo italiano. / No tengo hermanos.</div>
        <div class="example-fr">Je ne parle pas italien. / Je n'ai pas de frères et sœurs.</div>
      </div>

      <h3>Les mots négatifs</h3>
      <table class="grammar-table">
        <tr><th>Négatif</th><th>Affirmatif</th><th>Sens</th></tr>
        <tr><td>no</td><td>sí</td><td>non / oui</td></tr>
        <tr><td>nunca / jamás</td><td>siempre</td><td>jamais / toujours</td></tr>
        <tr><td>nada</td><td>algo</td><td>rien / quelque chose</td></tr>
        <tr><td>nadie</td><td>alguien</td><td>personne / quelqu'un</td></tr>
        <tr><td>ninguno/a</td><td>alguno/a</td><td>aucun(e) / quelque</td></tr>
        <tr><td>tampoco</td><td>también</td><td>non plus / aussi</td></tr>
        <tr><td>ni...ni</td><td>o...o</td><td>ni...ni / ou...ou</td></tr>
      </table>

      <div class="tip-box">
        <strong>💡 Double négation :</strong> En espagnol, la double négation est <strong>correcte et courante</strong> ! <em>No tengo <strong>nada</strong></em> = Je n'ai rien. <em>No viene <strong>nadie</strong></em> = Personne ne vient.
      </div>

      <h2>Les questions</h2>
      <p>En espagnol, les questions sont encadrées par <strong>¿ ... ?</strong> (le point d'interrogation inversé au début est obligatoire !)</p>
      
      <h3>Les mots interrogatifs</h3>
      <table class="grammar-table">
        <tr><th>Espagnol</th><th>Français</th></tr>
        <tr><td>¿Qué?</td><td>Quoi / Que ?</td></tr>
        <tr><td>¿Quién / Quiénes?</td><td>Qui ?</td></tr>
        <tr><td>¿Dónde?</td><td>Où ?</td></tr>
        <tr><td>¿Cuándo?</td><td>Quand ?</td></tr>
        <tr><td>¿Cómo?</td><td>Comment ?</td></tr>
        <tr><td>¿Cuánto/a/os/as?</td><td>Combien ?</td></tr>
        <tr><td>¿Por qué?</td><td>Pourquoi ?</td></tr>
        <tr><td>¿Cuál / Cuáles?</td><td>Lequel / Lesquels ?</td></tr>
      </table>

      <div class="example-box">
        <div class="example-es">¿Dónde vives? — ¿Por qué estudias español?</div>
        <div class="example-fr">Où habites-tu ? — Pourquoi tu étudies l'espagnol ?</div>
      </div>
    `,exercises:[{type:`fill`,question:`Traduisez : Je ne mange rien → No como ___`,answer:`nada`,hint:`Rien = nada`},{type:`qcm`,question:`La double négation en espagnol est :`,options:[`Une erreur grammaticale`,`Correcte et courante`,`Uniquement à l'oral`,`Uniquement en Amérique latine`],correct:1},{type:`qcm`,question:`Comment dit-on 'Pourquoi ?' en espagnol ?`,options:[`¿Para qué?`,`¿Por qué?`,`¿Porque?`,`¿Cómo?`],correct:1}]},{id:`a1-12`,level:`a1`,number:12,title:`Les verbes pronominaux`,desc:`Llamarse, levantarse, ducharse...`,content:`
      <h2>Les verbes pronominaux (reflexivos)</h2>
      <p>Comme en français ("se laver"), l'espagnol utilise des verbes pronominaux avec le pronom réfléchi. La différence : le pronom se place <strong>avant</strong> le verbe conjugué.</p>

      <h3>Les pronoms réfléchis</h3>
      <table class="grammar-table">
        <tr><th>Pronom sujet</th><th>Pronom réfléchi</th></tr>
        <tr><td>Yo</td><td>me</td></tr>
        <tr><td>Tú</td><td>te</td></tr>
        <tr><td>Él/Ella/Ud.</td><td>se</td></tr>
        <tr><td>Nosotros</td><td>nos</td></tr>
        <tr><td>Vosotros</td><td>os</td></tr>
        <tr><td>Ellos/Uds.</td><td>se</td></tr>
      </table>

      <h3>Exemple : Levantarse (se lever)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Conjugaison</th></tr>
        <tr><td>Yo</td><td><strong>me</strong> levanto</td></tr>
        <tr><td>Tú</td><td><strong>te</strong> levantas</td></tr>
        <tr><td>Él/Ella</td><td><strong>se</strong> levanta</td></tr>
        <tr><td>Nosotros</td><td><strong>nos</strong> levantamos</td></tr>
        <tr><td>Vosotros</td><td><strong>os</strong> levantáis</td></tr>
        <tr><td>Ellos</td><td><strong>se</strong> levantan</td></tr>
      </table>

      <h3>Verbes pronominaux courants</h3>
      <ul>
        <li><em>llamarse</em> — s'appeler → <em>Me llamo Pablo</em></li>
        <li><em>despertarse</em> — se réveiller</li>
        <li><em>levantarse</em> — se lever</li>
        <li><em>ducharse</em> — se doucher</li>
        <li><em>vestirse</em> — s'habiller</li>
        <li><em>acostarse</em> — se coucher</li>
        <li><em>sentirse</em> — se sentir</li>
        <li><em>irse</em> — s'en aller</li>
      </ul>

      <div class="example-box">
        <div class="example-es">Me levanto a las siete, me ducho y me visto rápidamente.</div>
        <div class="example-fr">Je me lève à sept heures, je me douche et je m'habille rapidement.</div>
      </div>

      <div class="tip-box">
        <strong>💡 Avec l'infinitif :</strong> Le pronom peut se coller à la fin de l'infinitif : <em>Voy a <strong>ducharme</strong></em> ou <em><strong>Me</strong> voy a duchar</em> (les deux sont corrects).
      </div>
    `,exercises:[{type:`fill`,question:`Complétez : ¿Cómo ___ llamas? (Comment tu t'appelles ?)`,answer:`te`,hint:`Pronom réfléchi pour 'tú'`},{type:`fill`,question:`Conjuguez : Ellos ___ (levantarse) temprano. (Ils se lèvent tôt)`,answer:`se levantan`,hint:`Pronom réfléchi 'se' + verbe en -AR, 3e personne pluriel`},{type:`qcm`,question:`'Voy a ducharme' est équivalent à :`,options:[`Me voy a duchar`,`Se voy a duchar`,`Voy ducharme`,`Me ducho a ir`],correct:0}]}],A=[{id:`a2-01`,level:`a2`,number:13,title:`Le passé composé (pretérito perfecto)`,desc:`He hablado, has comido, ha vivido...`,content:`
      <h2>Le pretérito perfecto compuesto</h2>
      <p>Equivalent du passé composé français. On l'utilise pour des actions passées <strong>en lien avec le présent</strong> ou dans une période de temps non terminée (aujourd'hui, cette semaine, ce mois-ci).</p>

      <h3>Formation : HABER (au présent) + participe passé</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Haber</th><th>+ Participe</th></tr>
        <tr><td>Yo</td><td>he</td><td rowspan="6">hablado (parlé)<br>comido (mangé)<br>vivido (vécu)</td></tr>
        <tr><td>Tú</td><td>has</td></tr>
        <tr><td>Él/Ella</td><td>ha</td></tr>
        <tr><td>Nosotros</td><td>hemos</td></tr>
        <tr><td>Vosotros</td><td>habéis</td></tr>
        <tr><td>Ellos</td><td>han</td></tr>
      </table>

      <h3>Le participe passé</h3>
      <ul>
        <li>-AR → <strong>-ado</strong> : hablar → hablado</li>
        <li>-ER / -IR → <strong>-ido</strong> : comer → comido, vivir → vivido</li>
      </ul>

      <h3>Participes irréguliers courants</h3>
      <table class="grammar-table">
        <tr><th>Verbe</th><th>Participe</th></tr>
        <tr><td>hacer</td><td>hecho</td></tr>
        <tr><td>decir</td><td>dicho</td></tr>
        <tr><td>ver</td><td>visto</td></tr>
        <tr><td>escribir</td><td>escrito</td></tr>
        <tr><td>abrir</td><td>abierto</td></tr>
        <tr><td>volver</td><td>vuelto</td></tr>
        <tr><td>poner</td><td>puesto</td></tr>
        <tr><td>romper</td><td>roto</td></tr>
      </table>

      <div class="tip-box">
        <strong>💡 Différence avec le français :</strong> En espagnol, <strong>rien ne s'intercale</strong> entre haber et le participe. On ne dit JAMAIS "he no comido" mais "no he comido".
      </div>

      <div class="example-box">
        <div class="example-es">Hoy he desayunado temprano y he ido al gimnasio.</div>
        <div class="example-fr">Aujourd'hui j'ai petit-déjeuné tôt et je suis allé à la salle de sport.</div>
      </div>
    `,exercises:[{type:`fill`,question:`Conjuguez : Yo ___ (comer) demasiado hoy.`,answer:`he comido`,hint:`Haber + participe passé en -ido`},{type:`qcm`,question:`Quel est le participe passé de 'hacer' ?`,options:[`hacido`,`hecho`,`hacado`,`hico`],correct:1},{type:`fill`,question:`Conjuguez : ¿Tú ___ (ver) esta película?`,answer:`has visto`,hint:`Participe irrégulier de 'ver'`}]},{id:`a2-02`,level:`a2`,number:14,title:`Le passé simple — verbes réguliers`,desc:`Pretérito indefinido : hablé, comí, viví`,content:`
      <h2>Le pretérito indefinido (passé simple)</h2>
      <p>Le temps le plus important pour raconter des événements passés <strong>terminés</strong>. C'est l'équivalent du passé simple français, mais il est <strong>beaucoup plus utilisé</strong> qu'en français (même à l'oral).</p>

      <h3>Verbes en -AR (hablar)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Terminaison</th><th>Exemple</th></tr>
        <tr><td>Yo</td><td>-é</td><td>habl<strong>é</strong></td></tr>
        <tr><td>Tú</td><td>-aste</td><td>habl<strong>aste</strong></td></tr>
        <tr><td>Él/Ella</td><td>-ó</td><td>habl<strong>ó</strong></td></tr>
        <tr><td>Nosotros</td><td>-amos</td><td>habl<strong>amos</strong></td></tr>
        <tr><td>Vosotros</td><td>-asteis</td><td>habl<strong>asteis</strong></td></tr>
        <tr><td>Ellos</td><td>-aron</td><td>habl<strong>aron</strong></td></tr>
      </table>

      <h3>Verbes en -ER/-IR (comer, vivir)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Terminaison</th><th>Exemple</th></tr>
        <tr><td>Yo</td><td>-í</td><td>com<strong>í</strong> / viv<strong>í</strong></td></tr>
        <tr><td>Tú</td><td>-iste</td><td>com<strong>iste</strong></td></tr>
        <tr><td>Él/Ella</td><td>-ió</td><td>com<strong>ió</strong></td></tr>
        <tr><td>Nosotros</td><td>-imos</td><td>com<strong>imos</strong></td></tr>
        <tr><td>Vosotros</td><td>-isteis</td><td>com<strong>isteis</strong></td></tr>
        <tr><td>Ellos</td><td>-ieron</td><td>com<strong>ieron</strong></td></tr>
      </table>

      <h3>Marqueurs temporels</h3>
      <p>Ayer (hier), anoche (hier soir), la semana pasada (la semaine dernière), el año pasado (l'an dernier), en 2020, hace dos días (il y a deux jours).</p>

      <div class="example-box">
        <div class="example-es">Ayer hablé con mi madre y comimos juntos en un restaurante.</div>
        <div class="example-fr">Hier j'ai parlé avec ma mère et nous avons mangé ensemble au restaurant.</div>
      </div>
    `,exercises:[{type:`fill`,question:`Conjuguez : Ayer yo ___ (hablar) con Juan.`,answer:`hablé`,hint:`-AR, 1re personne → -é`},{type:`fill`,question:`Conjuguez : Ellos ___ (comer) paella anoche.`,answer:`comieron`,hint:`-ER, 3e personne pluriel → -ieron`},{type:`qcm`,question:`Quelle est la terminaison de 'tú' au passé simple pour les verbes en -ER ?`,options:[`-aste`,`-iste`,`-ió`,`-í`],correct:1}]},{id:`a2-03`,level:`a2`,number:15,title:`Le passé simple — verbes irréguliers`,desc:`Fui, tuve, hice, dije, pude...`,content:`
      <h2>Passé simple irrégulier</h2>
      <p>Malheureusement, beaucoup de verbes très courants sont irréguliers au passé simple. La bonne nouvelle : ils partagent les <strong>mêmes terminaisons</strong> entre eux !</p>

      <h3>Terminaisons communes des irréguliers</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Terminaison</th></tr>
        <tr><td>Yo</td><td>-e (sans accent !)</td></tr>
        <tr><td>Tú</td><td>-iste</td></tr>
        <tr><td>Él/Ella</td><td>-o (sans accent !)</td></tr>
        <tr><td>Nosotros</td><td>-imos</td></tr>
        <tr><td>Vosotros</td><td>-isteis</td></tr>
        <tr><td>Ellos</td><td>-ieron</td></tr>
      </table>

      <h3>Les irréguliers les plus importants</h3>
      <table class="grammar-table">
        <tr><th>Infinitif</th><th>Radical</th><th>Yo</th><th>Él</th></tr>
        <tr><td>tener</td><td>tuv-</td><td>tuve</td><td>tuvo</td></tr>
        <tr><td>estar</td><td>estuv-</td><td>estuve</td><td>estuvo</td></tr>
        <tr><td>poder</td><td>pud-</td><td>pude</td><td>pudo</td></tr>
        <tr><td>poner</td><td>pus-</td><td>puse</td><td>puso</td></tr>
        <tr><td>saber</td><td>sup-</td><td>supe</td><td>supo</td></tr>
        <tr><td>hacer</td><td>hic-/hiz-</td><td>hice</td><td>hizo</td></tr>
        <tr><td>venir</td><td>vin-</td><td>vine</td><td>vino</td></tr>
        <tr><td>querer</td><td>quis-</td><td>quise</td><td>quiso</td></tr>
        <tr><td>decir</td><td>dij-</td><td>dije</td><td>dijo</td></tr>
        <tr><td>traer</td><td>traj-</td><td>traje</td><td>trajo</td></tr>
      </table>

      <h3>Cas spéciaux : SER et IR</h3>
      <p><strong>Ser et Ir ont la même conjugaison au passé simple !</strong> (Le contexte clarifie le sens.)</p>
      <table class="grammar-table">
        <tr><td>fui, fuiste, fue, fuimos, fuisteis, fueron</td></tr>
      </table>

      <div class="example-box">
        <div class="example-es">Ayer hice la compra, tuve que ir al supermercado y puse todo en la nevera.</div>
        <div class="example-fr">Hier j'ai fait les courses, j'ai dû aller au supermarché et j'ai tout mis au frigo.</div>
      </div>
    `,exercises:[{type:`fill`,question:`Conjuguez : Yo ___ (tener) un problema ayer.`,answer:`tuve`,hint:`Tener → radical 'tuv-'`},{type:`qcm`,question:`'Él fue al cine.' — Le verbe 'fue' est le passé simple de :`,options:[`Ser uniquement`,`Ir uniquement`,`Ser ou Ir (selon le contexte)`],correct:2},{type:`fill`,question:`Conjuguez : Ella ___ (hacer) la cena.`,answer:`hizo`,hint:`Hacer → hic-/hiz- (3e pers. = hizo)`}]},{id:`a2-04`,level:`a2`,number:16,title:`L'imparfait`,desc:`Pretérito imperfecto : hablaba, comía, vivía`,content:`
      <h2>L'imparfait (pretérito imperfecto)</h2>
      <p>Utilisé pour décrire des actions habituelles dans le passé, des descriptions, et des situations de fond. Bonne nouvelle : il a <strong>très peu d'irréguliers</strong> !</p>

      <h3>Verbes en -AR (hablar)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Conjugaison</th></tr>
        <tr><td>Yo</td><td>hablaba</td></tr>
        <tr><td>Tú</td><td>hablabas</td></tr>
        <tr><td>Él/Ella</td><td>hablaba</td></tr>
        <tr><td>Nosotros</td><td>hablábamos</td></tr>
        <tr><td>Vosotros</td><td>hablabais</td></tr>
        <tr><td>Ellos</td><td>hablaban</td></tr>
      </table>

      <h3>Verbes en -ER/-IR (comer, vivir)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Conjugaison</th></tr>
        <tr><td>Yo</td><td>comía / vivía</td></tr>
        <tr><td>Tú</td><td>comías</td></tr>
        <tr><td>Él/Ella</td><td>comía</td></tr>
        <tr><td>Nosotros</td><td>comíamos</td></tr>
        <tr><td>Vosotros</td><td>comíais</td></tr>
        <tr><td>Ellos</td><td>comían</td></tr>
      </table>

      <h3>Seulement 3 irréguliers !</h3>
      <table class="grammar-table">
        <tr><th>Verbe</th><th>Yo</th><th>Él</th></tr>
        <tr><td>ser</td><td>era</td><td>era</td></tr>
        <tr><td>ir</td><td>iba</td><td>iba</td></tr>
        <tr><td>ver</td><td>veía</td><td>veía</td></tr>
      </table>

      <h3>Quand utiliser l'imparfait ?</h3>
      <ul>
        <li>Habitudes passées → <em>Cuando era niño, <strong>jugaba</strong> en el parque</em></li>
        <li>Descriptions → <em>El cielo <strong>estaba</strong> azul</em></li>
        <li>Actions en cours (toile de fond) → <em>Mientras yo <strong>dormía</strong>...</em></li>
        <li>Heure/âge dans le passé → <em><strong>Eran</strong> las tres / <strong>Tenía</strong> 10 años</em></li>
      </ul>

      <div class="example-box">
        <div class="example-es">Cuando era niño, vivía en un pueblo pequeño y jugaba en la calle todos los días.</div>
        <div class="example-fr">Quand j'étais enfant, je vivais dans un petit village et je jouais dans la rue tous les jours.</div>
      </div>
    `,exercises:[{type:`fill`,question:`Conjuguez : De niño, yo ___ (jugar) al fútbol.`,answer:`jugaba`,hint:`-AR imparfait : -aba`},{type:`qcm`,question:`Combien de verbes sont irréguliers à l'imparfait ?`,options:[`Aucun`,`3 (ser, ir, ver)`,`Beaucoup`,`10`],correct:1},{type:`fill`,question:`Conjuguez : Nosotros ___ (vivir) en Madrid antes.`,answer:`vivíamos`,hint:`-IR imparfait : -ía + nous = -íamos`}]},{id:`a2-05`,level:`a2`,number:17,title:`Passé simple vs imparfait`,desc:`Quand utiliser l'un ou l'autre`,content:`
      <h2>Passé simple vs Imparfait</h2>
      <p>C'est LA grande question du passé en espagnol. La clé : penser en termes d'<strong>action ponctuelle</strong> vs <strong>contexte/habitude</strong>.</p>

      <h3>Le passé simple (indefinido)</h3>
      <p>➡️ <strong>Actions ponctuelles, terminées</strong> : ce qui s'est passé.</p>
      <ul>
        <li>Action unique et terminée → <em>Ayer <strong>compré</strong> un libro.</em></li>
        <li>Séquence d'événements → <em><strong>Llegué</strong>, <strong>comí</strong> y <strong>me acosté</strong>.</em></li>
        <li>Changement d'état → <em>De repente, <strong>empezó</strong> a llover.</em></li>
      </ul>

      <h3>L'imparfait (imperfecto)</h3>
      <p>➡️ <strong>Contexte, descriptions, habitudes</strong> : comment c'était, ce qui se passait.</p>
      <ul>
        <li>Description → <em>El restaurante <strong>estaba</strong> lleno.</em></li>
        <li>Habitude → <em>Siempre <strong>comía</strong> a las dos.</em></li>
        <li>Action en cours → <em>Mientras yo <strong>dormía</strong>...</em></li>
      </ul>

      <h3>Ensemble dans la même phrase</h3>
      <p>Souvent, l'imparfait plante le décor et le passé simple raconte l'événement :</p>

      <div class="example-box">
        <div class="example-es">Mientras caminaba por la calle, vi a mi profesor.</div>
        <div class="example-fr">Pendant que je marchais (imparfait) dans la rue, j'ai vu (passé simple) mon professeur.</div>
      </div>

      <div class="tip-box">
        <strong>💡 Métaphore du film :</strong> L'imparfait = le décor qui défile en arrière-plan. Le passé simple = l'action qui se produit au premier plan.
      </div>
    `,exercises:[{type:`qcm`,question:`'Cuando _____ (ser) niño, _____ (ir) a la playa.' — Quels temps ?`,options:[`era / iba (imparfait les deux)`,`fue / fue (passé simple les deux)`,`era / fui (imparfait + passé simple)`],correct:0},{type:`qcm`,question:`'Ayer _____ un accidente.' — Quel temps ?`,options:[`había (imparfait)`,`hubo (passé simple)`],correct:1},{type:`qcm`,question:`'Mientras yo _____ (dormir), alguien _____ (llamar) a la puerta.'`,options:[`dormía / llamó`,`dormí / llamaba`,`dormía / llamaba`],correct:0}]},{id:`a2-06`,level:`a2`,number:18,title:`Les pronoms COD et COI`,desc:`Me, te, lo, la, le, nos, os, los, las, les`,content:`
      <h2>Pronoms compléments d'objet</h2>

      <h3>COD (Complemento directo)</h3>
      <table class="grammar-table">
        <tr><th>Personne</th><th>Pronom COD</th></tr>
        <tr><td>me</td><td>me (me)</td></tr>
        <tr><td>te</td><td>te (te)</td></tr>
        <tr><td>le/la/lo</td><td>le/la/lo (le, la)</td></tr>
        <tr><td>nos</td><td>nos (nous)</td></tr>
        <tr><td>os</td><td>os (vous)</td></tr>
        <tr><td>les/las/los</td><td>les/las/los (les)</td></tr>
      </table>

      <h3>COI (Complemento indirecto)</h3>
      <table class="grammar-table">
        <tr><th>Personne</th><th>Pronom COI</th></tr>
        <tr><td>à moi</td><td>me</td></tr>
        <tr><td>à toi</td><td>te</td></tr>
        <tr><td>à lui/elle</td><td>le</td></tr>
        <tr><td>à nous</td><td>nos</td></tr>
        <tr><td>à vous</td><td>os</td></tr>
        <tr><td>à eux/elles</td><td>les</td></tr>
      </table>

      <h3>Position des pronoms</h3>
      <p>Les pronoms se placent <strong>AVANT</strong> le verbe conjugué :</p>
      <div class="example-box">
        <div class="example-es"><strong>Lo</strong> veo todos los días. (Je <strong>le</strong> vois tous les jours.)</div>
        <div class="example-es"><strong>Le</strong> doy un regalo. (Je <strong>lui</strong> donne un cadeau.)</div>
      </div>

      <div class="tip-box">
        <strong>💡 Quand les deux se combinent :</strong> COI + COD devant le verbe. Mais si les deux commencent par "l", le COI (le/les) devient <strong>SE</strong> : <em>Se lo doy</em> = Je le lui donne.
      </div>
    `,exercises:[{type:`fill`,question:`Remplacez : 'Veo a María' → ___ veo.`,answer:`La`,hint:`COD féminin singulier`},{type:`qcm`,question:`'Le doy el libro a Juan' avec deux pronoms :`,options:[`Le lo doy`,`Se lo doy`,`Lo le doy`],correct:1},{type:`fill`,question:`Complétez : ¿___ puedes ayudar? (Tu peux m'aider ?)`,answer:`Me`,hint:`COD 1re personne`}]},{id:`a2-07`,level:`a2`,number:19,title:`Gustar et les verbes similaires`,desc:`Me gusta, me encanta, me interesa...`,content:`
      <h2>Le verbe GUSTAR (aimer/plaire)</h2>
      <p>GUSTAR fonctionne à l'envers du français ! Ce n'est pas "j'aime le chocolat" mais littéralement "le chocolat me plaît".</p>

      <h3>Construction</h3>
      <table class="grammar-table">
        <tr><th>Français</th><th>Espagnol</th></tr>
        <tr><td>J'aime...</td><td>(A mí) <strong>me</strong> gusta/n</td></tr>
        <tr><td>Tu aimes...</td><td>(A ti) <strong>te</strong> gusta/n</td></tr>
        <tr><td>Il/Elle aime...</td><td>(A él/ella) <strong>le</strong> gusta/n</td></tr>
        <tr><td>Nous aimons...</td><td>(A nosotros) <strong>nos</strong> gusta/n</td></tr>
        <tr><td>Vous aimez...</td><td>(A vosotros) <strong>os</strong> gusta/n</td></tr>
        <tr><td>Ils/Elles aiment...</td><td>(A ellos) <strong>les</strong> gusta/n</td></tr>
      </table>

      <p><strong>gusta</strong> + singulier / infinitif<br><strong>gustan</strong> + pluriel</p>

      <div class="example-box">
        <div class="example-es">Me gusta el chocolate. / Me gustan los gatos. / Me gusta bailar.</div>
        <div class="example-fr">J'aime le chocolat. / J'aime les chats. / J'aime danser.</div>
      </div>

      <h3>Verbes qui fonctionnent pareil</h3>
      <ul>
        <li><em>encantar</em> → adorer → <em>Me encanta la música</em></li>
        <li><em>interesar</em> → intéresser → <em>Me interesa la historia</em></li>
        <li><em>molestar</em> → déranger → <em>Me molesta el ruido</em></li>
        <li><em>importar</em> → importer → <em>No me importa</em></li>
        <li><em>doler</em> → faire mal → <em>Me duele la cabeza</em></li>
        <li><em>parecer</em> → sembler → <em>Me parece bien</em></li>
        <li><em>faltar</em> → manquer → <em>Me falta tiempo</em></li>
      </ul>
    `,exercises:[{type:`fill`,question:`Complétez : A mí ___ gusta la comida española.`,answer:`me`,hint:`Pronom indirect 1re personne`},{type:`qcm`,question:`'___ los deportes.' (J'aime les sports)`,options:[`Me gusta`,`Me gustan`,`Yo gusto`,`Me gusto`],correct:1},{type:`fill`,question:`Complétez : A ella ___ encanta bailar.`,answer:`le`,hint:`Pronom indirect 3e personne`}]},{id:`a2-08`,level:`a2`,number:20,title:`Les comparatifs et superlatifs`,desc:`Más que, menos que, tan como, el más...`,content:`
      <h2>Comparer en espagnol</h2>

      <h3>Comparatifs</h3>
      <ul>
        <li><strong>más ... que</strong> (plus ... que) → <em>Madrid es <strong>más grande que</strong> Barcelona</em></li>
        <li><strong>menos ... que</strong> (moins ... que) → <em>Es <strong>menos caro que</strong> París</em></li>
        <li><strong>tan ... como</strong> (aussi ... que) → <em>Es <strong>tan interesante como</strong> Roma</em></li>
        <li><strong>tanto/a/os/as ... como</strong> (autant ... que) → <em>Tengo <strong>tantos libros como</strong> tú</em></li>
      </ul>

      <h3>Comparatifs irréguliers</h3>
      <table class="grammar-table">
        <tr><th>Adjectif</th><th>Comparatif</th></tr>
        <tr><td>bueno (bon)</td><td>mejor (meilleur)</td></tr>
        <tr><td>malo (mauvais)</td><td>peor (pire)</td></tr>
        <tr><td>grande (grand)</td><td>mayor (plus grand / plus vieux)</td></tr>
        <tr><td>pequeño (petit)</td><td>menor (plus petit / plus jeune)</td></tr>
      </table>

      <h3>Superlatifs</h3>
      <ul>
        <li><strong>el/la más ...</strong> → <em>Es <strong>la ciudad más bonita</strong> de España</em></li>
        <li><strong>el/la menos ...</strong> → <em>Es <strong>el menos interesante</strong></em></li>
        <li><strong>-ísimo/a</strong> (superlatif absolu) → <em>Es grand<strong>ísimo</strong></em> = C'est immense</li>
      </ul>

      <div class="example-box">
        <div class="example-es">Mi hermana mayor es más alta que yo, pero yo soy mejor en deportes.</div>
        <div class="example-fr">Ma grande sœur est plus grande que moi, mais je suis meilleur en sport.</div>
      </div>
    `,exercises:[{type:`fill`,question:`Complétez : Madrid es ___ grande ___ Sevilla.`,answer:`más...que`,hint:`Plus ... que`},{type:`qcm`,question:`Quel est le comparatif irrégulier de 'bueno' ?`,options:[`más bueno`,`mejor`,`buenísimo`,`más bien`],correct:1},{type:`fill`,question:`Traduisez : Elle est aussi intelligente que lui → Es ___ inteligente ___ él.`,answer:`tan...como`,hint:`Aussi ... que = tan ... como`}]},{id:`a2-09`,level:`a2`,number:21,title:`Le gérondif et les périphrases verbales`,desc:`Estar + gerundio, seguir, ir, llevar...`,content:`
      <h2>Le gérondif (gerundio)</h2>
      <p>Utilisé avec ESTAR pour décrire une action <strong>en cours</strong> ("être en train de").</p>

      <h3>Formation</h3>
      <ul>
        <li>-AR → <strong>-ando</strong> : hablar → hablando</li>
        <li>-ER/-IR → <strong>-iendo</strong> : comer → comiendo, vivir → viviendo</li>
      </ul>

      <h3>Irréguliers courants</h3>
      <table class="grammar-table">
        <tr><th>Verbe</th><th>Gérondif</th></tr>
        <tr><td>dormir</td><td>durmiendo</td></tr>
        <tr><td>leer</td><td>leyendo</td></tr>
        <tr><td>ir</td><td>yendo</td></tr>
        <tr><td>decir</td><td>diciendo</td></tr>
        <tr><td>pedir</td><td>pidiendo</td></tr>
      </table>

      <div class="example-box">
        <div class="example-es">¿Qué estás haciendo? — Estoy estudiando español.</div>
        <div class="example-fr">Qu'est-ce que tu fais ? — Je suis en train d'étudier l'espagnol.</div>
      </div>

      <h3>Autres périphrases verbales</h3>
      <ul>
        <li><strong>Ir a + infinitif</strong> = futur proche → <em>Voy a comer</em></li>
        <li><strong>Tener que + infinitif</strong> = obligation → <em>Tengo que estudiar</em></li>
        <li><strong>Acabar de + infinitif</strong> = venir de → <em>Acabo de llegar</em></li>
        <li><strong>Seguir + gérondif</strong> = continuer à → <em>Sigo estudiando</em></li>
        <li><strong>Llevar + temps + gérondif</strong> = ça fait ... que → <em>Llevo dos horas estudiando</em></li>
      </ul>
    `,exercises:[{type:`fill`,question:`Formez le gérondif de 'comer' : ___`,answer:`comiendo`,hint:`-ER → -iendo`},{type:`fill`,question:`Traduisez : Je viens d'arriver → ___ de llegar.`,answer:`Acabo`,hint:`Acabar de + infinitif`},{type:`qcm`,question:`'Llevo tres horas estudiando' signifie :`,options:[`J'étudie pendant trois heures (futur)`,`Ça fait trois heures que j'étudie`,`J'ai étudié il y a trois heures`],correct:1}]},{id:`a2-10`,level:`a2`,number:22,title:`Por vs Para`,desc:`Les deux 'pour' — démystification`,content:`
      <h2>POR vs PARA</h2>
      <p>Deux prépositions qui se traduisent souvent par "pour" en français mais avec des sens très différents.</p>

      <h3>PARA (destination, objectif, futur)</h3>
      <ul>
        <li><strong>Destinataire</strong> → <em>Este regalo es <strong>para</strong> ti</em></li>
        <li><strong>Objectif / But</strong> → <em>Estudio <strong>para</strong> aprobar</em> (J'étudie pour réussir)</li>
        <li><strong>Destination</strong> → <em>Salgo <strong>para</strong> Madrid</em></li>
        <li><strong>Date limite</strong> → <em><strong>Para</strong> el viernes</em> (Pour vendredi)</li>
        <li><strong>Opinion</strong> → <em><strong>Para</strong> mí, es fácil</em> (Pour moi, c'est facile)</li>
      </ul>

      <h3>POR (cause, moyen, échange)</h3>
      <ul>
        <li><strong>Cause / raison</strong> → <em>Gracias <strong>por</strong> todo</em> (Merci pour tout)</li>
        <li><strong>Moyen</strong> → <em><strong>Por</strong> teléfono</em> (Par téléphone)</li>
        <li><strong>Échange / prix</strong> → <em>Lo compré <strong>por</strong> 20 euros</em></li>
        <li><strong>Durée</strong> → <em>Viví allí <strong>por</strong> dos años</em></li>
        <li><strong>Lieu (à travers)</strong> → <em>Pasé <strong>por</strong> tu casa</em></li>
        <li><strong>Fréquence</strong> → <em>Tres veces <strong>por</strong> semana</em></li>
      </ul>

      <div class="tip-box">
        <strong>💡 Mnémotechnique :</strong><br>
        <strong>PARA</strong> = regarde vers le <strong>futur</strong> (destination, but, date limite)<br>
        <strong>POR</strong> = regarde vers le <strong>passé</strong> (cause, raison, échange)
      </div>

      <div class="example-box">
        <div class="example-es">Estudio español para viajar por América Latina.</div>
        <div class="example-fr">J'étudie l'espagnol pour (but) voyager à travers (lieu) l'Amérique latine.</div>
      </div>
    `,exercises:[{type:`qcm`,question:`'Gracias ___ tu ayuda.'`,options:[`para`,`por`],correct:1},{type:`qcm`,question:`'Este café es ___ María.'`,options:[`para`,`por`],correct:0},{type:`qcm`,question:`'Pagué 50 euros ___ este libro.'`,options:[`para`,`por`],correct:1},{type:`qcm`,question:`'Estudio ___ ser médico.'`,options:[`para`,`por`],correct:0}]}],Ee=[{id:`b1-01`,level:`b1`,number:23,title:`Le futur simple`,desc:`Hablaré, comeré, viviré...`,content:`
      <h2>Le futur simple (futuro simple)</h2>
      <p>Bonne nouvelle : le futur simple est très régulier ! On ajoute les terminaisons directement à <strong>l'infinitif entier</strong>.</p>
      <h3>Terminaisons (identiques pour -AR, -ER, -IR)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Terminaison</th><th>Hablar</th><th>Comer</th><th>Vivir</th></tr>
        <tr><td>Yo</td><td>-é</td><td>hablaré</td><td>comeré</td><td>viviré</td></tr>
        <tr><td>Tú</td><td>-ás</td><td>hablarás</td><td>comerás</td><td>vivirás</td></tr>
        <tr><td>Él</td><td>-á</td><td>hablará</td><td>comerá</td><td>vivirá</td></tr>
        <tr><td>Nosotros</td><td>-emos</td><td>hablaremos</td><td>comeremos</td><td>viviremos</td></tr>
        <tr><td>Vosotros</td><td>-éis</td><td>hablaréis</td><td>comeréis</td><td>viviréis</td></tr>
        <tr><td>Ellos</td><td>-án</td><td>hablarán</td><td>comerán</td><td>vivirán</td></tr>
      </table>
      <h3>Irréguliers (radical modifié)</h3>
      <table class="grammar-table">
        <tr><th>Verbe</th><th>Radical</th><th>Yo</th></tr>
        <tr><td>tener</td><td>tendr-</td><td>tendré</td></tr>
        <tr><td>poder</td><td>podr-</td><td>podré</td></tr>
        <tr><td>saber</td><td>sabr-</td><td>sabré</td></tr>
        <tr><td>hacer</td><td>har-</td><td>haré</td></tr>
        <tr><td>decir</td><td>dir-</td><td>diré</td></tr>
        <tr><td>salir</td><td>saldr-</td><td>saldré</td></tr>
        <tr><td>venir</td><td>vendr-</td><td>vendré</td></tr>
        <tr><td>poner</td><td>pondr-</td><td>pondré</td></tr>
        <tr><td>querer</td><td>querr-</td><td>querré</td></tr>
      </table>
      <div class="example-box">
        <div class="example-es">Mañana hablaré con mi jefe y le diré que necesito vacaciones.</div>
        <div class="example-fr">Demain je parlerai avec mon chef et je lui dirai que j'ai besoin de vacances.</div>
      </div>
    `,exercises:[{type:`fill`,question:`Conjuguez : Mañana yo ___ (salir) temprano.`,answer:`saldré`,hint:`Salir → saldr- + é`},{type:`fill`,question:`Conjuguez : ¿Tú ___ (poder) venir mañana?`,answer:`podrás`,hint:`Poder → podr- + ás`},{type:`qcm`,question:`Au futur, les terminaisons s'ajoutent :`,options:[`Au radical du verbe`,`À l'infinitif entier`,`Au participe passé`],correct:1}]},{id:`b1-02`,level:`b1`,number:24,title:`Le conditionnel`,desc:`Hablaría, comería, viviría...`,content:`
      <h2>Le conditionnel (condicional simple)</h2>
      <p>Même logique que le futur : terminaisons ajoutées à l'infinitif. Les <strong>mêmes verbes irréguliers</strong> que le futur !</p>
      <h3>Terminaisons</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Terminaison</th><th>Hablar</th></tr>
        <tr><td>Yo</td><td>-ía</td><td>hablaría</td></tr>
        <tr><td>Tú</td><td>-ías</td><td>hablarías</td></tr>
        <tr><td>Él</td><td>-ía</td><td>hablaría</td></tr>
        <tr><td>Nosotros</td><td>-íamos</td><td>hablaríamos</td></tr>
        <tr><td>Vosotros</td><td>-íais</td><td>hablaríais</td></tr>
        <tr><td>Ellos</td><td>-ían</td><td>hablarían</td></tr>
      </table>
      <h3>Usages</h3>
      <ul>
        <li><strong>Politesse</strong> → <em>¿Podrías ayudarme?</em> (Pourrais-tu m'aider ?)</li>
        <li><strong>Souhait</strong> → <em>Me gustaría viajar</em> (J'aimerais voyager)</li>
        <li><strong>Conseil</strong> → <em>Yo que tú, estudiaría más</em> (À ta place, j'étudierais plus)</li>
        <li><strong>Hypothèse</strong> → <em>Si tuviera dinero, viajaría</em> (Si j'avais de l'argent, je voyagerais)</li>
      </ul>
      <div class="example-box">
        <div class="example-es">Me gustaría vivir en España, pero tendría que aprender bien el idioma.</div>
        <div class="example-fr">J'aimerais vivre en Espagne, mais je devrais bien apprendre la langue.</div>
      </div>
    `,exercises:[{type:`fill`,question:`Conjuguez : ¿___ (poder, tú) pasarme la sal?`,answer:`Podrías`,hint:`Conditionnel de politesse`},{type:`fill`,question:`Conjuguez : Me ___ (gustar) viajar a Japón.`,answer:`gustaría`,hint:`Gustar au conditionnel`},{type:`qcm`,question:`Le conditionnel et le futur partagent :`,options:[`Les mêmes terminaisons`,`Les mêmes radicaux irréguliers`,`La même conjugaison`],correct:1}]},{id:`b1-03`,level:`b1`,number:25,title:`L'impératif`,desc:`Affirmatif et négatif : ¡Habla! / ¡No hables!`,content:`
      <h2>L'impératif</h2>
      <p>Donner des ordres, des instructions ou des conseils. L'impératif affirmatif et négatif ont des formes <strong>différentes</strong>.</p>
      <h3>Impératif affirmatif</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>-AR</th><th>-ER</th><th>-IR</th></tr>
        <tr><td>Tú</td><td>habla</td><td>come</td><td>vive</td></tr>
        <tr><td>Usted</td><td>hable</td><td>coma</td><td>viva</td></tr>
        <tr><td>Nosotros</td><td>hablemos</td><td>comamos</td><td>vivamos</td></tr>
        <tr><td>Vosotros</td><td>hablad</td><td>comed</td><td>vivid</td></tr>
        <tr><td>Ustedes</td><td>hablen</td><td>coman</td><td>vivan</td></tr>
      </table>
      <h3>Irréguliers courants (tú)</h3>
      <p>ven (venir), ten (tener), pon (poner), sal (salir), haz (hacer), di (decir), sé (ser), ve (ir)</p>
      <h3>Impératif négatif</h3>
      <p>On utilise le <strong>subjonctif présent</strong> précédé de <strong>no</strong> :</p>
      <div class="example-box">
        <div class="example-es">¡Habla más despacio! / ¡No hables tan rápido!</div>
        <div class="example-fr">Parle plus lentement ! / Ne parle pas si vite !</div>
      </div>
      <div class="tip-box">
        <strong>💡 Pronoms avec l'impératif :</strong> À l'affirmatif, le pronom se colle <strong>à la fin</strong> : <em>¡Dime!</em> (Dis-moi !). Au négatif, il reste <strong>devant</strong> : <em>¡No me digas!</em>
      </div>
    `,exercises:[{type:`qcm`,question:`Quel est l'impératif (tú) de 'venir' ?`,options:[`viene`,`ven`,`vienes`,`vine`],correct:1},{type:`fill`,question:`Mettez au négatif : '¡Come!' → ¡No ___!`,answer:`comas`,hint:`Impératif négatif = subjonctif présent`},{type:`qcm`,question:`'Dime' signifie :`,options:[`Dis-moi`,`Je te dis`,`Ne me dis pas`,`Il m'a dit`],correct:0}]},{id:`b1-04`,level:`b1`,number:26,title:`Introduction au subjonctif présent`,desc:`Formation et premiers usages`,content:`
      <h2>Le subjonctif présent (presente de subjuntivo)</h2>
      <p>Le subjonctif est LE mode qui différencie un hispanophone intermédiaire d'un avancé. Il exprime la subjectivité : désirs, doutes, émotions, nécessités.</p>
      <h3>Formation</h3>
      <p>Prenez la 1re personne du présent de l'indicatif, enlevez le -o, et ajoutez les terminaisons "inversées" :</p>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>-AR → -e</th><th>-ER/-IR → -a</th></tr>
        <tr><td>Yo</td><td>hable</td><td>coma / viva</td></tr>
        <tr><td>Tú</td><td>hables</td><td>comas / vivas</td></tr>
        <tr><td>Él</td><td>hable</td><td>coma / viva</td></tr>
        <tr><td>Nosotros</td><td>hablemos</td><td>comamos / vivamos</td></tr>
        <tr><td>Vosotros</td><td>habléis</td><td>comáis / viváis</td></tr>
        <tr><td>Ellos</td><td>hablen</td><td>coman / vivan</td></tr>
      </table>
      <div class="tip-box">
        <strong>💡 Mnémotechnique :</strong> Les verbes en -AR prennent les terminaisons en -E, et les verbes en -ER/-IR prennent les terminaisons en -A. C'est "l'inversion" !
      </div>
      <h3>Irréguliers au subjonctif</h3>
      <table class="grammar-table">
        <tr><th>Verbe</th><th>Subjonctif (yo)</th></tr>
        <tr><td>ser</td><td>sea</td></tr>
        <tr><td>estar</td><td>esté</td></tr>
        <tr><td>ir</td><td>vaya</td></tr>
        <tr><td>haber</td><td>haya</td></tr>
        <tr><td>saber</td><td>sepa</td></tr>
        <tr><td>dar</td><td>dé</td></tr>
      </table>
      <div class="example-box">
        <div class="example-es">Quiero que hables español. / Espero que estés bien.</div>
        <div class="example-fr">Je veux que tu parles espagnol. / J'espère que tu vas bien.</div>
      </div>
    `,exercises:[{type:`fill`,question:`Subjonctif de 'hablar' (yo) : ___`,answer:`hable`,hint:`-AR → terminaison en -e`},{type:`fill`,question:`Complétez : Quiero que tú ___ (venir) a mi fiesta.`,answer:`vengas`,hint:`Venir → yo vengo → veng- + -as`},{type:`qcm`,question:`Le subjonctif 'inverse' les voyelles des terminaisons. Vrai ou faux ?`,options:[`Vrai (-AR → -e, -ER/-IR → -a)`,`Faux`],correct:0}]},{id:`b1-05`,level:`b1`,number:27,title:`Le subjonctif — souhait et émotion`,desc:`Querer que, esperar que, alegrarse de que...`,content:`
      <h2>Subjonctif après les expressions de souhait et d'émotion</h2>
      <p>Règle clé : quand le verbe principal exprime un <strong>souhait, une émotion ou une volonté</strong> ET que le sujet du deuxième verbe est <strong>différent</strong>, on utilise le subjonctif.</p>
      <h3>Expressions de souhait / volonté</h3>
      <ul>
        <li><em>Quiero que</em> + subj. → Je veux que...</li>
        <li><em>Espero que</em> + subj. → J'espère que...</li>
        <li><em>Deseo que</em> + subj. → Je souhaite que...</li>
        <li><em>Necesito que</em> + subj. → J'ai besoin que...</li>
        <li><em>Prefiero que</em> + subj. → Je préfère que...</li>
        <li><em>Ojalá (que)</em> + subj. → Pourvu que / Si seulement...</li>
      </ul>
      <h3>Expressions d'émotion</h3>
      <ul>
        <li><em>Me alegra que</em> → Je suis content que...</li>
        <li><em>Me sorprende que</em> → Ça me surprend que...</li>
        <li><em>Tengo miedo de que</em> → J'ai peur que...</li>
        <li><em>Es una pena que</em> → C'est dommage que...</li>
        <li><em>Me molesta que</em> → Ça me dérange que...</li>
      </ul>
      <div class="example-box">
        <div class="example-es">Espero que tengas un buen viaje. ¡Ojalá haga buen tiempo!</div>
        <div class="example-fr">J'espère que tu auras un bon voyage. Pourvu qu'il fasse beau !</div>
      </div>
      <div class="tip-box">
        <strong>💡 Même sujet = infinitif !</strong><br>
        <em>Quiero <strong>comer</strong></em> (Je veux manger — même sujet, pas de subjonctif)<br>
        <em>Quiero <strong>que comas</strong></em> (Je veux que tu manges — sujets différents, subjonctif)
      </div>
    `,exercises:[{type:`fill`,question:`Complétez : Espero que tú ___ (estar) bien.`,answer:`estés`,hint:`Estar → subjonctif : esté, estés...`},{type:`qcm`,question:`'Quiero dormir' ou 'Quiero que duermas' ?`,options:[`Le premier : même sujet → infinitif`,`Le deuxième : même sujet → subjonctif`,`Les deux sont identiques`],correct:0},{type:`fill`,question:`Complétez : Ojalá ___ (hacer) buen tiempo mañana.`,answer:`haga`,hint:`Hacer au subjonctif : haga`}]},{id:`b1-06`,level:`b1`,number:28,title:`Le subjonctif — doute et probabilité`,desc:`Quizás, no creo que, es posible que...`,content:`
      <h2>Subjonctif pour le doute et l'incertitude</h2>
      <h3>Expressions de doute → subjonctif</h3>
      <ul>
        <li><em>No creo que</em> → Je ne crois pas que...</li>
        <li><em>Dudo que</em> → Je doute que...</li>
        <li><em>Es posible que</em> → Il est possible que...</li>
        <li><em>Es probable que</em> → Il est probable que...</li>
        <li><em>Quizás / Tal vez</em> + subj. → Peut-être que...</li>
        <li><em>No es seguro que</em> → Il n'est pas sûr que...</li>
      </ul>
      <h3>Certitude → indicatif</h3>
      <ul>
        <li><em>Creo que</em> → Je crois que... (indicatif)</li>
        <li><em>Es verdad que</em> → Il est vrai que... (indicatif)</li>
        <li><em>Estoy seguro de que</em> → Je suis sûr que... (indicatif)</li>
      </ul>
      <div class="example-box">
        <div class="example-es">No creo que sea difícil, pero es posible que necesite más tiempo.</div>
        <div class="example-fr">Je ne crois pas que ce soit difficile, mais il est possible que j'aie besoin de plus de temps.</div>
      </div>
      <div class="tip-box">
        <strong>💡 La règle :</strong> Affirmation (certitude) → indicatif. Négation de la certitude / doute → subjonctif.
        <br><em>Creo que <strong>viene</strong></em> (Je crois qu'il vient — indicatif)
        <br><em>No creo que <strong>venga</strong></em> (Je ne crois pas qu'il vienne — subjonctif)
      </div>
    `,exercises:[{type:`fill`,question:`Complétez : No creo que él ___ (saber) la respuesta.`,answer:`sepa`,hint:`Doute → subjonctif. Saber → sepa`},{type:`qcm`,question:`'Creo que ella ___.' — Indicatif ou subjonctif ?`,options:[`Indicatif (viene)`,`Subjonctif (venga)`],correct:0},{type:`fill`,question:`Complétez : Es posible que ___ (llover) mañana.`,answer:`llueva`,hint:`Llover → llueva au subjonctif`}]},{id:`b1-07`,level:`b1`,number:29,title:`Le plus-que-parfait`,desc:`Había hablado, había comido...`,content:`
      <h2>Le plus-que-parfait (pluscuamperfecto)</h2>
      <p>Exprime une action passée <strong>antérieure à une autre action passée</strong>. Formation : <strong>HABER à l'imparfait + participe passé</strong>.</p>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Haber (imperfecto)</th><th>+ Participe</th></tr>
        <tr><td>Yo</td><td>había</td><td rowspan="6">hablado<br>comido<br>vivido</td></tr>
        <tr><td>Tú</td><td>habías</td></tr>
        <tr><td>Él</td><td>había</td></tr>
        <tr><td>Nosotros</td><td>habíamos</td></tr>
        <tr><td>Vosotros</td><td>habíais</td></tr>
        <tr><td>Ellos</td><td>habían</td></tr>
      </table>
      <div class="example-box">
        <div class="example-es">Cuando llegué a la estación, el tren ya había salido.</div>
        <div class="example-fr">Quand je suis arrivé à la gare, le train était déjà parti.</div>
      </div>
    `,exercises:[{type:`fill`,question:`Conjuguez : Cuando llamé, ella ya ___ (salir).`,answer:`había salido`,hint:`Había + participe passé`},{type:`qcm`,question:`Le plus-que-parfait utilise HABER à :`,options:[`L'imparfait`,`Au passé simple`,`Au présent`],correct:0}]},{id:`b1-08`,level:`b1`,number:30,title:`Les connecteurs logiques`,desc:`Además, sin embargo, por lo tanto...`,content:`
      <h2>Les connecteurs logiques et discursifs</h2>
      <p>Pour construire un discours structuré et fluide, ces connecteurs sont essentiels :</p>
      <h3>Addition</h3>
      <ul>
        <li><em>además</em> — de plus, en plus</li>
        <li><em>también</em> — aussi</li>
        <li><em>incluso</em> — même, y compris</li>
        <li><em>aparte de</em> — en dehors de</li>
      </ul>
      <h3>Opposition / Concession</h3>
      <ul>
        <li><em>pero</em> — mais</li>
        <li><em>sin embargo</em> — cependant</li>
        <li><em>no obstante</em> — néanmoins</li>
        <li><em>aunque</em> — bien que / même si</li>
        <li><em>en cambio</em> — en revanche</li>
      </ul>
      <h3>Cause et conséquence</h3>
      <ul>
        <li><em>porque</em> — parce que</li>
        <li><em>como</em> — comme (cause)</li>
        <li><em>por eso</em> — c'est pourquoi</li>
        <li><em>por lo tanto</em> — par conséquent</li>
        <li><em>así que</em> — donc</li>
      </ul>
      <h3>Organiser le discours</h3>
      <ul>
        <li><em>en primer lugar / primero</em> — premièrement</li>
        <li><em>por un lado... por otro lado</em> — d'un côté... de l'autre</li>
        <li><em>en resumen</em> — en résumé</li>
        <li><em>en conclusión</em> — en conclusion</li>
        <li><em>es decir</em> — c'est-à-dire</li>
      </ul>
      <div class="example-box">
        <div class="example-es">Me gusta mucho Madrid; sin embargo, prefiero vivir en Barcelona porque el clima es mejor.</div>
        <div class="example-fr">J'aime beaucoup Madrid ; cependant, je préfère vivre à Barcelone parce que le climat est meilleur.</div>
      </div>
    `,exercises:[{type:`qcm`,question:`'___, el español es fácil de pronunciar.' (De plus)`,options:[`Sin embargo`,`Además`,`Porque`,`En cambio`],correct:1},{type:`fill`,question:`Complétez : Llueve mucho, ___ ___ me quedo en casa. (c'est pourquoi)`,answer:`por eso`,hint:`Conséquence`},{type:`qcm`,question:`'Aunque' signifie :`,options:[`Parce que`,`Cependant`,`Bien que / Même si`,`Par conséquent`],correct:2}]},{id:`b1-09`,level:`b1`,number:31,title:`Le style indirect`,desc:`Dice que..., Dijo que..., Me preguntó si...`,content:`
      <h2>Le style indirect (estilo indirecto)</h2>
      <p>Rapporter les paroles de quelqu'un. Comme en français, les temps changent si le verbe introducteur est au passé.</p>
      <h3>Verbe introducteur au présent</h3>
      <p>Pas de changement de temps :</p>
      <div class="example-box">
        <div class="example-es">"Estoy cansado" → Dice que está cansado.</div>
        <div class="example-fr">"Je suis fatigué" → Il dit qu'il est fatigué.</div>
      </div>
      <h3>Verbe introducteur au passé</h3>
      <table class="grammar-table">
        <tr><th>Style direct</th><th>Style indirect</th></tr>
        <tr><td>Presente</td><td>→ Imperfecto</td></tr>
        <tr><td>Pretérito perfecto</td><td>→ Pluscuamperfecto</td></tr>
        <tr><td>Futuro</td><td>→ Condicional</td></tr>
        <tr><td>Imperativo</td><td>→ Subjuntivo imperfecto</td></tr>
      </table>
      <div class="example-box">
        <div class="example-es">"Iré mañana" → Dijo que iría al día siguiente.</div>
        <div class="example-fr">"J'irai demain" → Il a dit qu'il irait le lendemain.</div>
      </div>
      <h3>Questions indirectes</h3>
      <ul>
        <li>Oui/Non → <em>si</em> : <em>Me preguntó <strong>si</strong> hablaba español.</em></li>
        <li>Avec mot interrogatif → on le garde : <em>Me preguntó <strong>dónde</strong> vivía.</em></li>
      </ul>
    `,exercises:[{type:`fill`,question:`'Estoy bien' → Dijo que ___ bien.`,answer:`estaba`,hint:`Presente → Imperfecto`},{type:`qcm`,question:`'¿Hablas español?' → Me preguntó ___ hablaba español.`,options:[`que`,`si`,`qué`,`como`],correct:1},{type:`fill`,question:`'Vendré mañana' → Dijo que ___ al día siguiente.`,answer:`vendría`,hint:`Futuro → Condicional`}]},{id:`b1-10`,level:`b1`,number:32,title:`Les pronoms relatifs`,desc:`Que, quien, donde, el cual, lo que`,content:`
      <h2>Les pronoms relatifs</h2>
      <h3>Les plus courants</h3>
      <table class="grammar-table">
        <tr><th>Relatif</th><th>Usage</th><th>Exemple</th></tr>
        <tr><td><strong>que</strong></td><td>Le plus courant (personnes et choses)</td><td><em>El libro <strong>que</strong> leo</em></td></tr>
        <tr><td><strong>quien(es)</strong></td><td>Personnes (après préposition)</td><td><em>La chica con <strong>quien</strong> hablo</em></td></tr>
        <tr><td><strong>donde</strong></td><td>Lieu</td><td><em>La ciudad <strong>donde</strong> vivo</em></td></tr>
        <tr><td><strong>el/la que</strong></td><td>Celui/celle qui (spécifier)</td><td><em><strong>La que</strong> prefiero</em></td></tr>
        <tr><td><strong>lo que</strong></td><td>Ce qui / ce que</td><td><em><strong>Lo que</strong> dices es verdad</em></td></tr>
        <tr><td><strong>cuyo/a/os/as</strong></td><td>Dont (possession)</td><td><em>El hombre <strong>cuyo</strong> hijo es médico</em></td></tr>
      </table>
      <div class="example-box">
        <div class="example-es">La ciudad donde nací es pequeña, pero lo que más me gusta de ella es su tranquilidad.</div>
        <div class="example-fr">La ville où je suis né est petite, mais ce que j'aime le plus, c'est sa tranquillité.</div>
      </div>
      <div class="tip-box">
        <strong>💡 "Lo que" vs "Que" :</strong> <em>Lo que</em> = "ce qui/ce que" (concept abstrait). <em>Que</em> = "qui/que" (se réfère à un antécédent précis).
      </div>
    `,exercises:[{type:`fill`,question:`Complétez : La casa ___ vivo es grande.`,answer:`donde`,hint:`Lieu`},{type:`fill`,question:`Complétez : No entiendo ___ ___ dices.`,answer:`lo que`,hint:`Ce que`},{type:`qcm`,question:`'Cuyo' exprime :`,options:[`Le lieu`,`La possession (dont)`,`Le temps`,`La cause`],correct:1}]}],De=[{id:`b2-01`,level:`b2`,number:33,title:`Le subjonctif imparfait`,desc:`Hablara/hablase, comiera/comiese...`,content:`
      <h2>Le subjonctif imparfait (imperfecto de subjuntivo)</h2>
      <p>Utilisé dans les mêmes contextes que le subjonctif présent, mais quand le verbe principal est au passé ou au conditionnel.</p>
      <h3>Formation</h3>
      <p>À partir de la 3e personne du pluriel du passé simple → enlever <strong>-ron</strong> → ajouter les terminaisons :</p>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Forme en -RA</th><th>Forme en -SE</th></tr>
        <tr><td>Yo</td><td>hablara</td><td>hablase</td></tr>
        <tr><td>Tú</td><td>hablaras</td><td>hablases</td></tr>
        <tr><td>Él</td><td>hablara</td><td>hablase</td></tr>
        <tr><td>Nosotros</td><td>habláramos</td><td>hablásemos</td></tr>
        <tr><td>Vosotros</td><td>hablarais</td><td>hablaseis</td></tr>
        <tr><td>Ellos</td><td>hablaran</td><td>hablasen</td></tr>
      </table>
      <div class="tip-box">
        <strong>💡</strong> Les deux formes (-RA et -SE) sont interchangeables. La forme en <strong>-RA est plus courante</strong> à l'oral.
      </div>
      <h3>Exemples avec des irréguliers</h3>
      <p>Tener → tuvieron → tuviera | Hacer → hicieron → hiciera | Ir/Ser → fueron → fuera</p>
      <div class="example-box">
        <div class="example-es">Quería que vinieras a mi fiesta. Si pudiera, te ayudaría.</div>
        <div class="example-fr">Je voulais que tu viennes à ma fête. Si je pouvais, je t'aiderais.</div>
      </div>
    `,exercises:[{type:`fill`,question:`Formez le subj. imparfait : tener (yo) → ___`,answer:`tuviera`,hint:`Tuvieron → tuviera`},{type:`fill`,question:`Complétez : Quería que ella ___ (venir).`,answer:`viniera`,hint:`Vinieron → viniera`},{type:`qcm`,question:`Les formes en -RA et -SE sont :`,options:[`Différentes en sens`,`Interchangeables`,`Utilisées dans des régions différentes`],correct:1}]},{id:`b2-02`,level:`b2`,number:34,title:`Les phrases conditionnelles`,desc:`Si + subjonctif = conditionnel`,content:`
      <h2>Les phrases conditionnelles (oraciones condicionales)</h2>
      <h3>Type 1 : Réel / Probable (présent)</h3>
      <p><strong>Si + indicatif présent, indicatif présent/futur</strong></p>
      <div class="example-box">
        <div class="example-es">Si estudias, aprobarás el examen.</div>
        <div class="example-fr">Si tu étudies, tu réussiras l'examen.</div>
      </div>
      <h3>Type 2 : Irréel / Hypothétique (présent)</h3>
      <p><strong>Si + subjonctif imparfait, conditionnel</strong></p>
      <div class="example-box">
        <div class="example-es">Si tuviera más dinero, viajaría por el mundo.</div>
        <div class="example-fr">Si j'avais plus d'argent, je voyagerais à travers le monde.</div>
      </div>
      <h3>Type 3 : Irréel / Passé (impossible)</h3>
      <p><strong>Si + subjonctif plus-que-parfait, conditionnel passé</strong></p>
      <div class="example-box">
        <div class="example-es">Si hubiera estudiado más, habría aprobado.</div>
        <div class="example-fr">Si j'avais étudié davantage, j'aurais réussi.</div>
      </div>
      <div class="tip-box">
        <strong>💡 JAMAIS de subjonctif ou de conditionnel après "si" en phrase conditionnelle standard !</strong> Contrairement au français, on ne dit JAMAIS "si tendría" ou "si tendré".
      </div>
    `,exercises:[{type:`fill`,question:`Complétez : Si yo ___ (ser) rico, compraría una casa en la playa.`,answer:`fuera`,hint:`Hypothétique → subjonctif imparfait`},{type:`qcm`,question:`'Si tengo tiempo, ___ al cine.' — Quel temps pour le verbe ?`,options:[`Conditionnel (iría)`,`Futur (iré)`,`Subjonctif (vaya)`],correct:1},{type:`fill`,question:`Complétez : Si ___ (haber) estudiado, habría aprobado.`,answer:`hubiera`,hint:`Type 3 : subjonctif plus-que-parfait`}]},{id:`b2-03`,level:`b2`,number:35,title:`La voix passive et le 'se' impersonnel`,desc:`Fue construido, se dice, se vende...`,content:`
      <h2>La voix passive</h2>
      <h3>Passive avec SER (formelle, peu courante à l'oral)</h3>
      <p><strong>SER + participe passé (accordé) + por + agent</strong></p>
      <div class="example-box">
        <div class="example-es">El libro fue escrito por Cervantes.</div>
        <div class="example-fr">Le livre a été écrit par Cervantès.</div>
      </div>
      <h3>Passive pronominale avec SE (beaucoup plus courante !)</h3>
      <p>On préfère largement cette construction en espagnol :</p>
      <div class="example-box">
        <div class="example-es">Se habla español aquí. / Se venden pisos.</div>
        <div class="example-fr">On parle espagnol ici. / Des appartements sont vendus.</div>
      </div>
      <h3>SE impersonnel</h3>
      <p>Pour les phrases sans sujet défini (comme "on" en français) :</p>
      <ul>
        <li><em>Se dice que...</em> → On dit que...</li>
        <li><em>Se puede...</em> → On peut...</li>
        <li><em>Se necesita...</em> → On a besoin de...</li>
        <li><em>¿Cómo se dice...?</em> → Comment dit-on... ?</li>
      </ul>
      <div class="tip-box">
        <strong>💡 En espagnol oral, la voix passive avec SER est rare.</strong> On préfère toujours la construction avec SE ou simplement la voix active.
      </div>
    `,exercises:[{type:`fill`,question:`Traduisez : On parle espagnol ici → ___ habla español aquí.`,answer:`Se`,hint:`SE impersonnel`},{type:`qcm`,question:`Quelle construction passive est la plus courante à l'oral ?`,options:[`SER + participe`,`SE + verbe`,`Les deux sont aussi courantes`],correct:1},{type:`fill`,question:`Traduisez : Comment dit-on 'merci' ? → ¿Cómo ___ dice 'merci'?`,answer:`se`,hint:`SE impersonnel`}]},{id:`b2-04`,level:`b2`,number:36,title:`Le futur antérieur et le conditionnel passé`,desc:`Habré hablado, habría comido...`,content:`
      <h2>Temps composés avancés</h2>
      <h3>Futur antérieur (futuro perfecto)</h3>
      <p><strong>HABER au futur + participe passé</strong></p>
      <table class="grammar-table">
        <tr><td>Yo habré hablado</td><td>Nosotros habremos hablado</td></tr>
        <tr><td>Tú habrás hablado</td><td>Vosotros habréis hablado</td></tr>
        <tr><td>Él habrá hablado</td><td>Ellos habrán hablado</td></tr>
      </table>
      <p>Usage : action future achevée avant un moment donné, ou <strong>supposition sur le passé</strong>.</p>
      <div class="example-box">
        <div class="example-es">Para las 8, ya habré terminado. / ¿Habrá salido ya? (Il sera déjà parti ?)</div>
      </div>
      <h3>Conditionnel passé (condicional perfecto)</h3>
      <p><strong>HABER au conditionnel + participe passé</strong></p>
      <table class="grammar-table">
        <tr><td>Yo habría hablado</td><td>Nosotros habríamos hablado</td></tr>
        <tr><td>Tú habrías hablado</td><td>Vosotros habríais hablado</td></tr>
        <tr><td>Él habría hablado</td><td>Ellos habrían hablado</td></tr>
      </table>
      <p>Usage : action qui <strong>aurait eu lieu</strong> dans d'autres conditions.</p>
      <div class="example-box">
        <div class="example-es">Habría ido contigo, pero estaba enfermo.</div>
        <div class="example-fr">Je serais allé avec toi, mais j'étais malade.</div>
      </div>
    `,exercises:[{type:`fill`,question:`Conjuguez : Para mañana yo ya ___ (terminar) el proyecto.`,answer:`habré terminado`,hint:`Futur antérieur`},{type:`fill`,question:`Conjuguez : Yo ___ (ir) contigo si hubiera sabido.`,answer:`habría ido`,hint:`Conditionnel passé`}]},{id:`b2-05`,level:`b2`,number:37,title:`Indicatif vs subjonctif en contexte`,desc:`Les nuances et les cas ambigus`,content:`
      <h2>Quand l'indicatif et le subjonctif changent le sens</h2>
      <p>Certaines constructions peuvent utiliser les deux modes, mais le sens change :</p>
      <h3>Aunque (bien que / même si)</h3>
      <ul>
        <li><em>Aunque <strong>llueve</strong>, salgo</em> → Même s'il <strong>pleut</strong> (c'est un fait), je sors.</li>
        <li><em>Aunque <strong>llueva</strong>, saldré</em> → Même s'il <strong>pleut</strong> (hypothèse), je sortirai.</li>
      </ul>
      <h3>Buscar / Necesitar</h3>
      <ul>
        <li><em>Busco una casa que <strong>tiene</strong> jardín</em> → (je sais qu'elle existe)</li>
        <li><em>Busco una casa que <strong>tenga</strong> jardín</em> → (n'importe laquelle qui ait un jardin)</li>
      </ul>
      <h3>Cuando (quand)</h3>
      <ul>
        <li><em>Cuando <strong>llego</strong> a casa...</em> → Quand j'arrive (habitude)</li>
        <li><em>Cuando <strong>llegue</strong> a casa...</em> → Quand j'arriverai (futur)</li>
      </ul>
      <div class="tip-box">
        <strong>💡 Règle du futur :</strong> Après <em>cuando, en cuanto, tan pronto como</em> + action future → <strong>subjonctif</strong> (pas de futur !).
        <br><em>Cuando <strong>llegues</strong>, llámame.</em> (Quand tu arriveras, appelle-moi.)
      </div>
    `,exercises:[{type:`qcm`,question:`'Cuando ___ (llegar) a casa, te llamaré.' — Quel mode ?`,options:[`llego (indicatif)`,`llegue (subjonctif)`],correct:1},{type:`qcm`,question:`'Aunque llueve, salgo' vs 'Aunque llueva, saldré' :`,options:[`Le premier est un fait, le second une hypothèse`,`Les deux sont identiques`,`Le premier est au futur`],correct:0}]},{id:`b2-06`,level:`b2`,number:38,title:`Les registres de langue`,desc:`Formel vs familier, tú vs usted`,content:`
      <h2>Registres de langue</h2>
      <h3>Registre familier (coloquial)</h3>
      <ul>
        <li>Utilise <em>tú</em> et <em>vosotros</em></li>
        <li>Contractions et expressions → <em>¿Qué tal? Pa' qué, tío/tía</em></li>
        <li>Vocabulaire informel → <em>mola (c'est cool), currar (bosser), pasta (fric)</em></li>
        <li>Diminutifs fréquents → <em>momentito, cerquita, poquito</em></li>
      </ul>
      <h3>Registre formel</h3>
      <ul>
        <li>Utilise <em>usted</em> et <em>ustedes</em></li>
        <li>Formules de politesse → <em>Le agradecería que..., Disculpe, Tenga la amabilidad de...</em></li>
        <li>Vocabulaire soutenu → <em>efectuar (effectuer), solicitar (demander), remitir (envoyer)</em></li>
        <li>Subjonctif fréquent → <em>Espero que no le importe...</em></li>
      </ul>
      <h3>Correspondance écrite</h3>
      <table class="grammar-table">
        <tr><th>Informel</th><th>Formel</th></tr>
        <tr><td>¡Hola!</td><td>Estimado/a señor/a:</td></tr>
        <tr><td>¿Qué tal?</td><td>Espero que se encuentre bien.</td></tr>
        <tr><td>Un abrazo / Besos</td><td>Atentamente / Le saluda cordialmente</td></tr>
      </table>
      <div class="example-box">
        <div class="example-es">Informel : ¡Oye, tío! ¿Quedamos mañana?<br>Formel : Disculpe, ¿sería posible concertar una cita?</div>
      </div>
    `,exercises:[{type:`qcm`,question:`'Mola' est du registre :`,options:[`Formel`,`Familier`,`Littéraire`],correct:1},{type:`qcm`,question:`Comment finir un email formel ?`,options:[`Un abrazo`,`Besos`,`Atentamente`,`Hasta luego`],correct:2}]},{id:`b2-07`,level:`b2`,number:39,title:`Verbes pronominaux avancés`,desc:`Expressions idiomatiques avec SE`,content:`
      <h2>Verbes pronominaux : usages avancés</h2>
      <p>Au-delà du simple réfléchi, les verbes pronominaux espagnols ont des usages plus nuancés :</p>
      <h3>SE accidentel / involontaire</h3>
      <p>Pour exprimer que quelque chose arrive de manière non intentionnelle :</p>
      <ul>
        <li><em>Se me cayó el vaso</em> → Le verre m'est tombé (des mains)</li>
        <li><em>Se me olvidó</em> → J'ai oublié (ça m'a échappé)</li>
        <li><em>Se nos rompió el coche</em> → Notre voiture est tombée en panne</li>
        <li><em>Se te escapó un detalle</em> → Un détail t'a échappé</li>
      </ul>
      <h3>Verbes qui changent de sens avec SE</h3>
      <table class="grammar-table">
        <tr><th>Sans SE</th><th>Avec SE</th></tr>
        <tr><td>ir (aller)</td><td>irse (s'en aller, partir)</td></tr>
        <tr><td>dormir (dormir)</td><td>dormirse (s'endormir)</td></tr>
        <tr><td>poner (mettre)</td><td>ponerse (se mettre à / devenir)</td></tr>
        <tr><td>quedar (rester, avoir rdv)</td><td>quedarse (rester sur place)</td></tr>
        <tr><td>llevar (porter/emporter)</td><td>llevarse (bien/mal) (s'entendre)</td></tr>
      </table>
      <div class="example-box">
        <div class="example-es">Se me cayó el móvil y se me rompió la pantalla. ¡Me puse muy triste!</div>
        <div class="example-fr">Mon téléphone m'est tombé et l'écran s'est cassé. Je suis devenu très triste !</div>
      </div>
    `,exercises:[{type:`fill`,question:`Traduisez : Le verre m'est tombé → ___ me ___ el vaso.`,answer:`Se...cayó`,hint:`SE accidentel`},{type:`qcm`,question:`'Ponerse' peut signifier :`,options:[`Se mettre à / devenir`,`Poser quelque chose`,`Se battre`],correct:0}]},{id:`b2-08`,level:`b2`,number:40,title:`Récapitulatif et pièges courants`,desc:`Les erreurs les plus fréquentes des francophones`,content:`
      <h2>Les pièges classiques des francophones</h2>
      <h3>1. Ser vs Estar — les cas piégeux</h3>
      <ul>
        <li><em>Ser aburrido</em> = Être ennuyeux ≠ <em>Estar aburrido</em> = S'ennuyer</li>
        <li><em>Ser listo</em> = Être intelligent ≠ <em>Estar listo</em> = Être prêt</li>
        <li><em>Ser malo</em> = Être méchant ≠ <em>Estar malo</em> = Être malade</li>
        <li><em>Ser rico</em> = Être riche ≠ <em>Estar rico</em> = Être délicieux</li>
      </ul>
      <h3>2. Faux amis français-espagnol</h3>
      <table class="grammar-table">
        <tr><th>Espagnol</th><th>≠ Français</th><th>= Signifie</th></tr>
        <tr><td>constipado</td><td>constipé</td><td>enrhumé</td></tr>
        <tr><td>embarazada</td><td>embarrassée</td><td>enceinte</td></tr>
        <tr><td>éxito</td><td>exit</td><td>succès</td></tr>
        <tr><td>largo</td><td>large</td><td>long</td></tr>
        <tr><td>molestar</td><td>molester</td><td>déranger</td></tr>
        <tr><td>recordar</td><td>recorder</td><td>se souvenir</td></tr>
        <tr><td>soportar</td><td>supporter</td><td>supporter (endurer)</td></tr>
        <tr><td>subir</td><td>subir</td><td>monter</td></tr>
      </table>
      <h3>3. Erreurs de structure</h3>
      <ul>
        <li>❌ <em>Yo soy 25 años</em> → ✅ <em>Tengo 25 años</em> (avoir + âge)</li>
        <li>❌ <em>Es lloviendo</em> → ✅ <em>Está lloviendo</em> (estar + gérondif)</li>
        <li>❌ <em>Me gusta los gatos</em> → ✅ <em>Me <strong>gustan</strong> los gatos</em></li>
        <li>❌ <em>Si tendría dinero</em> → ✅ <em>Si <strong>tuviera</strong> dinero</em></li>
      </ul>
      <div class="tip-box">
        <strong>💡 Conseil final :</strong> Ne traduis jamais mot à mot du français ! L'espagnol a sa propre logique. Pense en espagnol, pas en français traduit.
      </div>
    `,exercises:[{type:`qcm`,question:`'Estoy aburrido' signifie :`,options:[`Je suis ennuyeux`,`Je m'ennuie`,`Je suis fatigué`],correct:1},{type:`qcm`,question:`'Embarazada' signifie :`,options:[`Embarrassée`,`Enceinte`,`En colère`],correct:1},{type:`qcm`,question:`La bonne phrase est :`,options:[`Si tendría dinero, viajaría`,`Si tuviera dinero, viajaría`,`Si tenía dinero, viajo`],correct:1},{type:`qcm`,question:`'Me gustan los gatos' est correct car :`,options:[`Gustar s'accorde avec 'me'`,`Gustar s'accorde avec 'los gatos' (pluriel)`,`C'est une exception`],correct:1}]}],Oe=s({getLessonById:()=>Ae,getLessonsByLevel:()=>ke,grammarData:()=>j,levels:()=>je}),j=[...Te,...A,...Ee,...De];function ke(e){return j.filter(t=>t.level===e)}function Ae(e){return j.find(t=>t.id===e)}var je=[{id:`a1`,name:`A1 — Débutant`,desc:`Les bases de l'espagnol`,color:`var(--color-a1)`,lessons:Te.length},{id:`a2`,name:`A2 — Élémentaire`,desc:`Communiquer au quotidien`,color:`var(--color-a2)`,lessons:A.length},{id:`b1`,name:`B1 — Intermédiaire`,desc:`S'exprimer avec aisance`,color:`var(--color-b1)`,lessons:Ee.length},{id:`b2`,name:`B2 — Avancé`,desc:`Maîtriser les nuances`,color:`var(--color-b2)`,lessons:De.length}];async function Me(){let e=await ye(),t=we(await E.cards.toArray()),n=await E.lessons.where(`completed`).equals(1).count(),r=j.length,i=r>0?Math.round(n/r*100):0,a=new Date().getHours(),o=`Buenos días`;a>=14&&a<21&&(o=`Buenas tardes`),(a>=21||a<6)&&(o=`Buenas noches`);let s=document.createElement(`div`);return s.innerHTML=`
    <div class="dashboard-greeting slide-up">
      <h1>${o} ☀️</h1>
      <p class="greeting-sub">Continue ton apprentissage de l'espagnol</p>
    </div>

    ${e.streak>0?`
      <div style="padding: 0 var(--space-md); margin-bottom: var(--space-md);">
        <div class="streak-indicator">
          🔥 ${e.streak} jour${e.streak>1?`s`:``} consécutif${e.streak>1?`s`:``}
        </div>
      </div>
    `:``}

    ${t>0?`
      <div class="dashboard-review-card slide-up" id="review-card" style="animation-delay: 100ms">
        <div class="review-count">${t}</div>
        <div class="review-label">carte${t>1?`s`:``} à réviser</div>
        <div class="review-cta">Commencer la révision →</div>
      </div>
    `:`
      <div class="dashboard-review-card slide-up" style="animation-delay: 100ms; border-color: rgba(16, 185, 129, 0.2); background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(6, 182, 212, 0.04));">
        <div style="font-size: var(--font-2xl); margin-bottom: var(--space-sm);">✅</div>
        <div class="review-label">Aucune carte à réviser !</div>
        <div class="review-cta" style="color: var(--color-success-light);">Tu es à jour 👏</div>
      </div>
    `}

    <div class="stats-grid stagger-children" style="margin-top: var(--space-lg);">
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-primary-light)">${e.todayReviewed}</div>
        <div class="stat-label">Aujourd'hui</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--color-success-light)">${e.totalCards}</div>
        <div class="stat-label">Cartes total</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-secondary-light)">${e.masteredCards}</div>
        <div class="stat-label">Maîtrisées</div>
      </div>
    </div>

    <div class="dashboard-section" style="margin-top: var(--space-lg);">
      <div class="section-title">
        <h2>Progression globale</h2>
        <span class="section-link">${i}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-bar-fill animate" style="width: ${i}%"></div>
      </div>
    </div>

    <div class="dashboard-section" style="margin-top: var(--space-xl);">
      <div class="section-title">
        <h2>Continuer</h2>
      </div>
      <div class="stagger-children">
        <div class="card card-clickable" id="goto-courses" style="margin-bottom: var(--space-sm);">
          <div style="display: flex; align-items: center; gap: var(--space-md);">
            <div style="font-size: 1.5rem;">📖</div>
            <div style="flex:1;">
              <div style="font-weight: 600;">Cours de grammaire</div>
              <div style="font-size: var(--font-xs); color: var(--text-secondary);">${n}/${r} leçons terminées</div>
            </div>
            <div style="color: var(--text-muted);">→</div>
          </div>
        </div>
        <div class="card card-clickable" id="goto-flashcards" style="margin-bottom: var(--space-sm);">
          <div style="display: flex; align-items: center; gap: var(--space-md);">
            <div style="font-size: 1.5rem;">🃏</div>
            <div style="flex:1;">
              <div style="font-weight: 600;">Flash Cards</div>
              <div style="font-size: var(--font-xs); color: var(--text-secondary);">Apprends du vocabulaire</div>
            </div>
            <div style="color: var(--text-muted);">→</div>
          </div>
        </div>
        <div class="card card-clickable" id="goto-phrases" style="margin-bottom: var(--space-sm);">
          <div style="display: flex; align-items: center; gap: var(--space-md);">
            <div style="font-size: 1.5rem;">💬</div>
            <div style="flex:1;">
              <div style="font-weight: 600;">Phrases & Expressions</div>
              <div style="font-size: var(--font-xs); color: var(--text-secondary);">Parle comme un natif</div>
            </div>
            <div style="color: var(--text-muted);">→</div>
          </div>
        </div>
        <div class="card card-clickable" id="goto-stats">
          <div style="display: flex; align-items: center; gap: var(--space-md);">
            <div style="font-size: 1.5rem;">📊</div>
            <div style="flex:1;">
              <div style="font-weight: 600;">Statistiques</div>
              <div style="font-size: var(--font-xs); color: var(--text-secondary);">Suis ta progression</div>
            </div>
            <div style="color: var(--text-muted);">→</div>
          </div>
        </div>
      </div>
    </div>
  `,setTimeout(()=>{s.querySelector(`#review-card`)?.addEventListener(`click`,()=>p(`/review`)),s.querySelector(`#goto-courses`)?.addEventListener(`click`,()=>p(`/courses`)),s.querySelector(`#goto-flashcards`)?.addEventListener(`click`,()=>p(`/flashcards`)),s.querySelector(`#goto-phrases`)?.addEventListener(`click`,()=>p(`/phrases`)),s.querySelector(`#goto-stats`)?.addEventListener(`click`,()=>p(`/stats`))},0),s}async function Ne(){let e=await E.lessons.where(`completed`).equals(1).toArray(),t=new Set(e.map(e=>e.id)),n=document.createElement(`div`),r=`
    <div class="page-header">
      <h1>Cours 📖</h1>
      <p class="subtitle">40 leçons de grammaire, du A1 au B2</p>
    </div>
  `;for(let e of je){let n=ke(e.id),i=n.filter(e=>t.has(e.id)).length,a=Math.round(i/n.length*100);r+=`
      <div class="courses-level-section">
        <div class="courses-level-header">
          <div class="courses-level-badge" style="background: ${e.id===`a1`?`var(--color-a1-bg)`:e.id===`a2`?`var(--color-a2-bg)`:e.id===`b1`?`var(--color-b1-bg)`:`var(--color-b2-bg)`}; color: ${e.color};">
            ${e.id.toUpperCase()}
          </div>
          <div class="courses-level-info">
            <h3>${e.name}</h3>
            <div class="level-progress-text">${i}/${n.length} leçons • ${a}%</div>
          </div>
        </div>
        <div class="progress-bar" style="margin-bottom: var(--space-md);">
          <div class="progress-bar-fill" style="width: ${a}%; background: ${e.color};"></div>
        </div>
        <div class="stagger-children">
    `;for(let i=0;i<n.length;i++){let a=n[i],o=t.has(a.id),s=i>0?n[i-1]:e.id===`a1`?null:j[j.indexOf(a)-1],c=i===0&&e.id===`a1`||o||s&&t.has(s.id);r+=`
        <div class="lesson-card ${o?`completed`:``} ${c?``:`locked`} ${c&&!o?`current`:``}" 
             data-lesson-id="${a.id}" ${c?`data-clickable="true"`:``}>
          <div class="lesson-number">${o?`✓`:a.number}</div>
          <div class="lesson-info">
            <h4>${a.title}</h4>
            <p class="lesson-desc">${a.desc}</p>
          </div>
          <div class="lesson-arrow">${c?`→`:`🔒`}</div>
        </div>
      `}r+=`</div></div>`}return n.innerHTML=r,setTimeout(()=>{n.querySelectorAll(`.lesson-card[data-clickable="true"]`).forEach(e=>{e.addEventListener(`click`,()=>{p(`/lesson`,{id:e.dataset.lessonId})})})},0),n}async function Pe(e){let t=Ae(e.id);if(!t)return p(`/courses`),``;let n=document.createElement(`div`);return n.className=`lesson-page`,n.innerHTML=`
    <button class="lesson-back-btn" id="back-btn">← Retour aux cours</button>
    
    <div class="slide-up">
      <span class="level-tag ${t.level}">${t.level.toUpperCase()}</span>
      <h1 style="font-size: var(--font-2xl); font-weight: 800; margin-top: var(--space-sm); letter-spacing: -0.02em;">
        ${t.title}
      </h1>
      <p style="color: var(--text-secondary); font-size: var(--font-sm); margin-top: var(--space-xs);">
        Leçon ${t.number} • ${t.desc}
      </p>
    </div>

    <div class="lesson-content slide-up" style="animation-delay: 100ms;">
      ${t.content}
    </div>

    ${t.exercises&&t.exercises.length>0?`
      <div class="exercise-container slide-up" style="animation-delay: 200ms;">
        <h2 style="color: var(--accent-primary-light); margin-bottom: var(--space-lg);">📝 Exercices</h2>
        <div id="exercises-container"></div>
        <div id="exercise-results" style="display: none; margin-top: var(--space-lg);"></div>
        <button class="btn btn-primary btn-block" id="check-btn" style="margin-top: var(--space-lg);">
          Vérifier mes réponses
        </button>
        <button class="btn btn-primary btn-block" id="complete-btn" style="margin-top: var(--space-md); display: none;">
          ✅ Leçon terminée — Continuer
        </button>
      </div>
    `:`
      <button class="btn btn-primary btn-block" id="complete-btn" style="margin-top: var(--space-xl);">
        ✅ Marquer comme terminée
      </button>
    `}
  `,setTimeout(()=>{n.querySelector(`#back-btn`)?.addEventListener(`click`,()=>p(`/courses`));let e=n.querySelector(`#exercises-container`);e&&t.exercises&&t.exercises.forEach((t,n)=>{e.appendChild(Fe(t,n))}),n.querySelector(`#check-btn`)?.addEventListener(`click`,()=>{let e=0;t.exercises.forEach((t,r)=>{Ie(n,t,r)&&e++});let r=t.exercises.length,i=Math.round(e/r*100),a=n.querySelector(`#exercise-results`);a.style.display=`block`,a.innerHTML=`
        <div class="card" style="text-align: center; border-color: ${i>=70?`rgba(16, 185, 129, 0.3)`:`rgba(245, 158, 11, 0.3)`};">
          <div style="font-size: 2rem; margin-bottom: var(--space-sm);">${i>=70?`🎉`:`💪`}</div>
          <div style="font-size: var(--font-xl); font-weight: 800;">${e}/${r} correct${e>1?`s`:``}</div>
          <div style="font-size: var(--font-sm); color: var(--text-secondary); margin-top: var(--space-xs);">
            ${i>=70?`Bravo ! Tu peux passer à la suite.`:`Continue à t'entraîner, tu vas y arriver !`}
          </div>
        </div>
      `,n.querySelector(`#check-btn`).style.display=`none`,n.querySelector(`#complete-btn`).style.display=`block`}),n.querySelector(`#complete-btn`)?.addEventListener(`click`,async()=>{await E.lessons.put({id:t.id,level:t.level,completed:1,unlockedAt:Date.now()});let e=j.findIndex(e=>e.id===t.id);if(e<j.length-1){let t=j[e+1],n=await E.lessons.get(t.id);(!n||!n.unlockedAt)&&await E.lessons.put({id:t.id,level:t.level,completed:0,unlockedAt:Date.now()})}if(t.exercises)for(let e of t.exercises){let n=`grammar-${t.id}-${e.question.substring(0,20)}`;await E.cards.get(n)||await E.cards.put(xe(n,`grammar`,{question:e.question,answer:e.type===`qcm`?e.options[e.correct]:e.answer,lesson:t.title,level:t.level}))}at(`Leçon "${t.title}" terminée ! 🎉`),p(`/courses`)})},0),n}function Fe(e,t){let n=document.createElement(`div`);return n.className=`exercise-card`,n.dataset.index=t,e.type===`qcm`?(n.innerHTML=`
      <div class="exercise-question">${e.question}</div>
      <div class="exercise-options">
        ${e.options.map((e,n)=>`
          <button class="exercise-option" data-value="${n}" data-exercise="${t}">
            <span class="option-letter">${String.fromCharCode(65+n)}</span>
            <span>${e}</span>
          </button>
        `).join(``)}
      </div>
    `,setTimeout(()=>{n.querySelectorAll(`.exercise-option`).forEach(e=>{e.addEventListener(`click`,()=>{n.querySelectorAll(`.exercise-option`).forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`)})})},0)):e.type===`fill`&&(n.innerHTML=`
      <div class="exercise-question">${e.question}</div>
      ${e.hint?`<div style="font-size: var(--font-xs); color: var(--text-tertiary); margin-bottom: var(--space-md); font-style: italic;">💡 ${e.hint}</div>`:``}
      <input type="text" class="exercise-fill-input" data-exercise="${t}" placeholder="Ta réponse..." autocomplete="off" autocapitalize="off" />
    `),n}function Ie(e,t,n){if(t.type===`qcm`){let r=e.querySelector(`.exercise-option.selected[data-exercise="${n}"]`),i=e.querySelectorAll(`.exercise-option[data-exercise="${n}"]`);if(!r)return!1;let a=parseInt(r.dataset.value),o=a===t.correct;return i.forEach(e=>{let n=parseInt(e.dataset.value);n===t.correct?e.classList.add(`correct`):n===a&&!o&&e.classList.add(`incorrect`),e.style.pointerEvents=`none`}),o}if(t.type===`fill`){let r=e.querySelector(`.exercise-fill-input[data-exercise="${n}"]`);if(!r)return!1;let i=r.value.trim().toLowerCase(),a=t.answer.toLowerCase(),o=i===a||i===a.replace(`...`,``).trim();if(r.classList.add(o?`correct`:`incorrect`),r.readOnly=!0,!o){let e=document.createElement(`div`);e.className=`exercise-feedback incorrect`,e.textContent=`Réponse correcte : ${t.answer}`,r.parentNode.appendChild(e)}return o}return!1}var Le=[{es:`hola`,fr:`bonjour / salut`,gender:`n`,examples:[`¡Hola! ¿Qué tal?`,`Hola, me llamo Pablo.`],theme:`salutations`,level:`a1`},{es:`buenos días`,fr:`bonjour (matin)`,gender:`n`,examples:[`Buenos días, señora.`,`Buenos días, ¿cómo ha dormido?`],theme:`salutations`,level:`a1`},{es:`buenas tardes`,fr:`bon après-midi`,gender:`n`,examples:[`Buenas tardes a todos.`,`Buenas tardes, ¿está abierto?`],theme:`salutations`,level:`a1`},{es:`buenas noches`,fr:`bonsoir / bonne nuit`,gender:`n`,examples:[`Buenas noches, hasta mañana.`,`Buenas noches, que descanses.`],theme:`salutations`,level:`a1`},{es:`adiós`,fr:`au revoir`,gender:`n`,examples:[`¡Adiós, nos vemos!`,`Adiós, que te vaya bien.`],theme:`salutations`,level:`a1`},{es:`hasta luego`,fr:`à plus tard`,gender:`n`,examples:[`Hasta luego, amigo.`,`Me voy, ¡hasta luego!`],theme:`salutations`,level:`a1`},{es:`hasta mañana`,fr:`à demain`,gender:`n`,examples:[`Hasta mañana en clase.`,`Me voy a dormir, hasta mañana.`],theme:`salutations`,level:`a1`},{es:`por favor`,fr:`s'il vous plaît`,gender:`n`,examples:[`Un café, por favor.`,`¿Puedes ayudarme, por favor?`],theme:`salutations`,level:`a1`},{es:`gracias`,fr:`merci`,gender:`n`,examples:[`Muchas gracias por tu ayuda.`,`Gracias, eres muy amable.`],theme:`salutations`,level:`a1`},{es:`de nada`,fr:`de rien`,gender:`n`,examples:[`—Gracias. —De nada.`,`De nada, ha sido un placer.`],theme:`salutations`,level:`a1`},{es:`perdón`,fr:`pardon`,gender:`n`,examples:[`Perdón, ¿puedes repetir?`,`Perdón por el retraso.`],theme:`salutations`,level:`a1`},{es:`lo siento`,fr:`je suis désolé(e)`,gender:`n`,examples:[`Lo siento mucho.`,`Lo siento, no puedo ir.`],theme:`salutations`,level:`a1`},{es:`el nombre`,fr:`le nom / le prénom`,gender:`m`,examples:[`¿Cuál es tu nombre?`,`Mi nombre es María.`],theme:`salutations`,level:`a1`},{es:`el apellido`,fr:`le nom de famille`,gender:`m`,examples:[`Mi apellido es García.`,`¿Cómo se escribe su apellido?`],theme:`salutations`,level:`a1`},{es:`encantado/a`,fr:`enchanté(e)`,gender:`n`,examples:[`Encantado de conocerte.`,`—Soy Ana. —Encantada.`],theme:`salutations`,level:`a1`},{es:`uno`,fr:`un`,gender:`n`,examples:[`Tengo un hermano.`,`Solo queda uno.`],theme:`nombres`,level:`a1`},{es:`dos`,fr:`deux`,gender:`n`,examples:[`Dos cafés, por favor.`,`Tenemos dos hijos.`],theme:`nombres`,level:`a1`},{es:`tres`,fr:`trois`,gender:`n`,examples:[`Son las tres.`,`Tres cervezas, por favor.`],theme:`nombres`,level:`a1`},{es:`diez`,fr:`dix`,gender:`n`,examples:[`Diez minutos más.`,`Tiene diez años.`],theme:`nombres`,level:`a1`},{es:`cien`,fr:`cent`,gender:`n`,examples:[`Cuesta cien euros.`,`Hay cien personas.`],theme:`nombres`,level:`a1`},{es:`mil`,fr:`mille`,gender:`n`,examples:[`Mil gracias.`,`Cuesta mil euros.`],theme:`nombres`,level:`a1`},{es:`hoy`,fr:`aujourd'hui`,gender:`n`,examples:[`Hoy hace buen tiempo.`,`¿Qué día es hoy?`],theme:`temps`,level:`a1`},{es:`mañana`,fr:`demain / matin`,gender:`n`,examples:[`Mañana es lunes.`,`Esta mañana me he levantado tarde.`],theme:`temps`,level:`a1`},{es:`ayer`,fr:`hier`,gender:`n`,examples:[`Ayer fui al cine.`,`Ayer llovió todo el día.`],theme:`temps`,level:`a1`},{es:`ahora`,fr:`maintenant`,gender:`n`,examples:[`¿Qué haces ahora?`,`Ahora mismo voy.`],theme:`temps`,level:`a1`},{es:`siempre`,fr:`toujours`,gender:`n`,examples:[`Siempre llego a tiempo.`,`Siempre como a la una.`],theme:`temps`,level:`a1`},{es:`nunca`,fr:`jamais`,gender:`n`,examples:[`Nunca he estado en Japón.`,`Nunca es tarde para aprender.`],theme:`temps`,level:`a1`},{es:`la hora`,fr:`l'heure`,gender:`f`,examples:[`¿Qué hora es?`,`Es hora de irnos.`],theme:`temps`,level:`a1`},{es:`el día`,fr:`le jour`,gender:`m`,examples:[`Un bonito día de sol.`,`¿Qué día es hoy?`],theme:`temps`,level:`a1`},{es:`la semana`,fr:`la semaine`,gender:`f`,examples:[`La próxima semana.`,`Esta semana estoy muy ocupado.`],theme:`temps`,level:`a1`},{es:`el mes`,fr:`le mois`,gender:`m`,examples:[`El mes de enero.`,`El mes que viene me voy de vacaciones.`],theme:`temps`,level:`a1`},{es:`el año`,fr:`l'année`,gender:`m`,examples:[`El año pasado.`,`Este año quiero aprender español.`],theme:`temps`,level:`a1`},{es:`lunes`,fr:`lundi`,gender:`m`,examples:[`El lunes tengo clase.`,`Los lunes no trabajo.`],theme:`temps`,level:`a1`},{es:`martes`,fr:`mardi`,gender:`m`,examples:[`Los martes voy al gimnasio.`,`El martes hay reunión.`],theme:`temps`,level:`a1`},{es:`ya`,fr:`déjà / maintenant`,gender:`n`,examples:[`Ya he terminado.`,`¡Ya voy!`],theme:`temps`,level:`a1`},{es:`todavía`,fr:`encore / toujours`,gender:`n`,examples:[`Todavía no he comido.`,`¿Todavía estás aquí?`],theme:`temps`,level:`a1`},{es:`a veces`,fr:`parfois`,gender:`n`,examples:[`A veces como fuera.`,`A veces llueve en verano.`],theme:`temps`,level:`a1`},{es:`la familia`,fr:`la famille`,gender:`f`,examples:[`Mi familia es grande.`,`La familia es lo más importante.`],theme:`famille`,level:`a1`},{es:`el padre`,fr:`le père`,gender:`m`,examples:[`Mi padre trabaja mucho.`,`El padre de mi amigo es médico.`],theme:`famille`,level:`a1`},{es:`la madre`,fr:`la mère`,gender:`f`,examples:[`Mi madre cocina muy bien.`,`Hoy es el cumpleaños de mi madre.`],theme:`famille`,level:`a1`},{es:`los padres`,fr:`les parents`,gender:`m`,examples:[`Mis padres viven en Madrid.`,`Los padres de Ana son franceses.`],theme:`famille`,level:`a1`},{es:`el hermano`,fr:`le frère`,gender:`m`,examples:[`Tengo un hermano mayor.`,`Mi hermano vive en Londres.`],theme:`famille`,level:`a1`},{es:`la hermana`,fr:`la sœur`,gender:`f`,examples:[`Mi hermana estudia medicina.`,`Mi hermana pequeña tiene diez años.`],theme:`famille`,level:`a1`},{es:`el hijo`,fr:`le fils`,gender:`m`,examples:[`Su hijo tiene tres años.`,`Tengo dos hijos.`],theme:`famille`,level:`a1`},{es:`la hija`,fr:`la fille (enfant)`,gender:`f`,examples:[`La hija de mi amigo.`,`Mi hija quiere ser veterinaria.`],theme:`famille`,level:`a1`},{es:`el abuelo`,fr:`le grand-père`,gender:`m`,examples:[`Mi abuelo tiene 80 años.`,`Mi abuelo nos cuenta historias.`],theme:`famille`,level:`a1`},{es:`la abuela`,fr:`la grand-mère`,gender:`f`,examples:[`La abuela hace la mejor paella.`,`Mi abuela vive en un pueblo.`],theme:`famille`,level:`a1`},{es:`el tío`,fr:`l'oncle`,gender:`m`,examples:[`Mi tío vive en Barcelona.`,`El tío Pedro viene a cenar.`],theme:`famille`,level:`a1`},{es:`la tía`,fr:`la tante`,gender:`f`,examples:[`Mi tía es profesora.`,`La tía María siempre trae regalos.`],theme:`famille`,level:`a1`},{es:`el primo`,fr:`le cousin`,gender:`m`,examples:[`Mi primo y yo jugamos juntos.`,`Tengo muchos primos.`],theme:`famille`,level:`a1`},{es:`el marido`,fr:`le mari`,gender:`m`,examples:[`Su marido es médico.`,`Mi marido y yo viajamos mucho.`],theme:`famille`,level:`a1`},{es:`la mujer`,fr:`la femme / l'épouse`,gender:`f`,examples:[`Mi mujer trabaja en un banco.`,`La mujer de Juan es italiana.`],theme:`famille`,level:`a1`},{es:`el novio`,fr:`le copain / le fiancé`,gender:`m`,examples:[`Tiene novio desde hace un año.`,`Mi novio es español.`],theme:`famille`,level:`a1`},{es:`el amigo`,fr:`l'ami`,gender:`m`,examples:[`Es mi mejor amigo.`,`Salgo con mis amigos el sábado.`],theme:`famille`,level:`a1`},{es:`el agua`,fr:`l'eau`,gender:`f`,examples:[`Un vaso de agua, por favor.`,`El agua está fría.`],theme:`nourriture`,level:`a1`},{es:`el pan`,fr:`le pain`,gender:`m`,examples:[`Pan con tomate.`,`Voy a comprar pan.`],theme:`nourriture`,level:`a1`},{es:`la leche`,fr:`le lait`,gender:`f`,examples:[`Café con leche.`,`No queda leche en la nevera.`],theme:`nourriture`,level:`a1`},{es:`el café`,fr:`le café`,gender:`m`,examples:[`Un café solo, por favor.`,`Necesito un café para despertarme.`],theme:`nourriture`,level:`a1`},{es:`la cerveza`,fr:`la bière`,gender:`f`,examples:[`Dos cervezas, por favor.`,`Una caña, que es más pequeña.`],theme:`nourriture`,level:`a1`},{es:`el vino`,fr:`le vin`,gender:`m`,examples:[`Un vino tinto, por favor.`,`El vino de Rioja es muy bueno.`],theme:`nourriture`,level:`a1`},{es:`la carne`,fr:`la viande`,gender:`f`,examples:[`No como carne.`,`La carne está muy buena.`],theme:`nourriture`,level:`a1`},{es:`el pescado`,fr:`le poisson`,gender:`m`,examples:[`El pescado está fresco.`,`En España comen mucho pescado.`],theme:`nourriture`,level:`a1`},{es:`el pollo`,fr:`le poulet`,gender:`m`,examples:[`Pollo con arroz.`,`El pollo asado de mi madre.`],theme:`nourriture`,level:`a1`},{es:`el arroz`,fr:`le riz`,gender:`m`,examples:[`El arroz con leche.`,`La paella lleva arroz.`],theme:`nourriture`,level:`a1`},{es:`la fruta`,fr:`le fruit`,gender:`f`,examples:[`Me gusta la fruta.`,`Compra fruta en el mercado.`],theme:`nourriture`,level:`a1`},{es:`la verdura`,fr:`le légume`,gender:`f`,examples:[`Como muchas verduras.`,`Las verduras son sanas.`],theme:`nourriture`,level:`a1`},{es:`el huevo`,fr:`l'œuf`,gender:`m`,examples:[`Huevos fritos con jamón.`,`Necesito tres huevos para la tortilla.`],theme:`nourriture`,level:`a1`},{es:`el queso`,fr:`le fromage`,gender:`m`,examples:[`El queso manchego.`,`Un bocadillo de queso.`],theme:`nourriture`,level:`a1`},{es:`el jamón`,fr:`le jambon`,gender:`m`,examples:[`Jamón ibérico.`,`El jamón serrano es típico de España.`],theme:`nourriture`,level:`a1`},{es:`la ensalada`,fr:`la salade`,gender:`f`,examples:[`Una ensalada mixta.`,`Quiero una ensalada con tomate.`],theme:`nourriture`,level:`a1`},{es:`la sopa`,fr:`la soupe`,gender:`f`,examples:[`Sopa de tomate.`,`En invierno tomo sopa caliente.`],theme:`nourriture`,level:`a1`},{es:`el postre`,fr:`le dessert`,gender:`m`,examples:[`¿Qué hay de postre?`,`De postre, flan o helado.`],theme:`nourriture`,level:`a1`},{es:`el desayuno`,fr:`le petit-déjeuner`,gender:`m`,examples:[`El desayuno está incluido.`,`Desayuno a las ocho.`],theme:`nourriture`,level:`a1`},{es:`la comida`,fr:`le repas / la nourriture`,gender:`f`,examples:[`La comida española es deliciosa.`,`La comida es a las dos en España.`],theme:`nourriture`,level:`a1`},{es:`la cena`,fr:`le dîner`,gender:`f`,examples:[`¿A qué hora es la cena?`,`En España cenan sobre las diez.`],theme:`nourriture`,level:`a1`},{es:`la tapa`,fr:`la tapa`,gender:`f`,examples:[`Vamos de tapas.`,`Esta tapa de tortilla está buenísima.`],theme:`nourriture`,level:`a1`},{es:`la caña`,fr:`la pression (petite bière)`,gender:`f`,examples:[`Ponme una caña.`,`En España se piden cañas, no pintas.`],theme:`nourriture`,level:`a1`},{es:`la tortilla`,fr:`l'omelette (espagnole)`,gender:`f`,examples:[`La tortilla española lleva huevo y patata.`,`¿Quieres un trozo de tortilla?`],theme:`nourriture`,level:`a1`},{es:`la casa`,fr:`la maison`,gender:`f`,examples:[`Mi casa es tu casa.`,`Vivimos en una casa con jardín.`],theme:`maison`,level:`a1`},{es:`el piso`,fr:`l'appartement`,gender:`m`,examples:[`Vivo en un piso pequeño.`,`Busco un piso de alquiler.`],theme:`maison`,level:`a1`},{es:`la habitación`,fr:`la chambre`,gender:`f`,examples:[`Mi habitación es grande.`,`Tiene tres habitaciones.`],theme:`maison`,level:`a1`},{es:`la cocina`,fr:`la cuisine`,gender:`f`,examples:[`La cocina está limpia.`,`Cocino en la cocina nueva.`],theme:`maison`,level:`a1`},{es:`el baño`,fr:`la salle de bain`,gender:`m`,examples:[`¿Dónde está el baño?`,`El baño tiene ducha y bañera.`],theme:`maison`,level:`a1`},{es:`el salón`,fr:`le salon`,gender:`m`,examples:[`Vemos la tele en el salón.`,`El salón es muy luminoso.`],theme:`maison`,level:`a1`},{es:`la mesa`,fr:`la table`,gender:`f`,examples:[`La mesa del comedor.`,`Pon la mesa para cenar.`],theme:`maison`,level:`a1`},{es:`la silla`,fr:`la chaise`,gender:`f`,examples:[`Siéntate en la silla.`,`Necesitamos más sillas.`],theme:`maison`,level:`a1`},{es:`la cama`,fr:`le lit`,gender:`f`,examples:[`La cama es muy cómoda.`,`Me quedo en la cama los domingos.`],theme:`maison`,level:`a1`},{es:`la puerta`,fr:`la porte`,gender:`f`,examples:[`Cierra la puerta.`,`Alguien llama a la puerta.`],theme:`maison`,level:`a1`},{es:`la ventana`,fr:`la fenêtre`,gender:`f`,examples:[`Abre la ventana.`,`Desde la ventana se ve el mar.`],theme:`maison`,level:`a1`},{es:`la nevera`,fr:`le frigo`,gender:`f`,examples:[`La leche está en la nevera.`,`Hay que limpiar la nevera.`],theme:`maison`,level:`a1`},{es:`la llave`,fr:`la clé`,gender:`f`,examples:[`¿Dónde están las llaves?`,`He perdido la llave de casa.`],theme:`maison`,level:`a1`},{es:`la ropa`,fr:`les vêtements`,gender:`f`,examples:[`Me gusta esta ropa.`,`Tengo que lavar la ropa.`],theme:`vêtements`,level:`a1`},{es:`la camisa`,fr:`la chemise`,gender:`f`,examples:[`Una camisa blanca.`,`Me he comprado una camisa nueva.`],theme:`vêtements`,level:`a1`},{es:`la camiseta`,fr:`le t-shirt`,gender:`f`,examples:[`Llevo una camiseta azul.`,`Me mola tu camiseta.`],theme:`vêtements`,level:`a1`},{es:`los pantalones`,fr:`le pantalon`,gender:`m`,examples:[`Pantalones vaqueros.`,`Estos pantalones me quedan bien.`],theme:`vêtements`,level:`a1`},{es:`el vestido`,fr:`la robe`,gender:`m`,examples:[`Un vestido rojo.`,`Lleva un vestido muy bonito.`],theme:`vêtements`,level:`a1`},{es:`los zapatos`,fr:`les chaussures`,gender:`m`,examples:[`Zapatos negros.`,`Necesito zapatos nuevos.`],theme:`vêtements`,level:`a1`},{es:`la chaqueta`,fr:`la veste`,gender:`f`,examples:[`Ponte la chaqueta, hace frío.`,`Me gusta tu chaqueta de cuero.`],theme:`vêtements`,level:`a1`},{es:`rojo`,fr:`rouge`,gender:`n`,examples:[`Un coche rojo.`,`El semáforo está en rojo.`],theme:`couleurs`,level:`a1`},{es:`azul`,fr:`bleu`,gender:`n`,examples:[`El cielo azul.`,`Llevo una camisa azul.`],theme:`couleurs`,level:`a1`},{es:`verde`,fr:`vert`,gender:`n`,examples:[`Los ojos verdes.`,`Me gusta el verde.`],theme:`couleurs`,level:`a1`},{es:`blanco`,fr:`blanc`,gender:`n`,examples:[`La nieve blanca.`,`Quiero un vino blanco.`],theme:`couleurs`,level:`a1`},{es:`negro`,fr:`noir`,gender:`n`,examples:[`Un gato negro.`,`Siempre viste de negro.`],theme:`couleurs`,level:`a1`},{es:`amarillo`,fr:`jaune`,gender:`n`,examples:[`El sol amarillo.`,`Los taxis son amarillos.`],theme:`couleurs`,level:`a1`},{es:`marrón`,fr:`marron`,gender:`n`,examples:[`Ojos marrones.`,`Zapatos marrones.`],theme:`couleurs`,level:`a1`},{es:`ser`,fr:`être (permanent)`,gender:`n`,examples:[`Soy español.`,`Somos amigos desde pequeños.`],theme:`verbes`,level:`a1`},{es:`estar`,fr:`être (temporaire/lieu)`,gender:`n`,examples:[`Estoy cansado.`,`Estoy en casa.`],theme:`verbes`,level:`a1`},{es:`tener`,fr:`avoir`,gender:`n`,examples:[`Tengo 25 años.`,`Tengo mucha hambre.`],theme:`verbes`,level:`a1`},{es:`hacer`,fr:`faire`,gender:`n`,examples:[`¿Qué haces?`,`Hoy hace buen tiempo.`],theme:`verbes`,level:`a1`},{es:`ir`,fr:`aller`,gender:`n`,examples:[`Voy al cine.`,`¿Adónde vas?`],theme:`verbes`,level:`a1`},{es:`venir`,fr:`venir`,gender:`n`,examples:[`¿Vienes a la fiesta?`,`Vengo de trabajar.`],theme:`verbes`,level:`a1`},{es:`poder`,fr:`pouvoir`,gender:`n`,examples:[`¿Puedes ayudarme?`,`No puedo dormir.`],theme:`verbes`,level:`a1`},{es:`querer`,fr:`vouloir / aimer`,gender:`n`,examples:[`Quiero aprender español.`,`Te quiero mucho.`],theme:`verbes`,level:`a1`},{es:`saber`,fr:`savoir`,gender:`n`,examples:[`No sé nada.`,`¿Sabes hablar español?`],theme:`verbes`,level:`a1`},{es:`conocer`,fr:`connaître`,gender:`n`,examples:[`¿Conoces a Pedro?`,`No conozco esta ciudad.`],theme:`verbes`,level:`a1`},{es:`hablar`,fr:`parler`,gender:`n`,examples:[`Hablo francés.`,`Hablamos por teléfono.`],theme:`verbes`,level:`a1`},{es:`comer`,fr:`manger`,gender:`n`,examples:[`Como a las dos.`,`¿Quieres comer conmigo?`],theme:`verbes`,level:`a1`},{es:`vivir`,fr:`vivre`,gender:`n`,examples:[`Vivo en París.`,`Vive solo desde hace un año.`],theme:`verbes`,level:`a1`},{es:`trabajar`,fr:`travailler`,gender:`n`,examples:[`Trabajo en una oficina.`,`Trabaja de lunes a viernes.`],theme:`verbes`,level:`a1`},{es:`estudiar`,fr:`étudier`,gender:`n`,examples:[`Estudio español.`,`Estudia medicina en la universidad.`],theme:`verbes`,level:`a1`},{es:`comprar`,fr:`acheter`,gender:`n`,examples:[`Voy a comprar pan.`,`He comprado un regalo.`],theme:`verbes`,level:`a1`},{es:`beber`,fr:`boire`,gender:`n`,examples:[`Bebo mucha agua.`,`¿Qué quieres beber?`],theme:`verbes`,level:`a1`},{es:`leer`,fr:`lire`,gender:`n`,examples:[`Leo un libro.`,`Me encanta leer por la noche.`],theme:`verbes`,level:`a1`},{es:`escribir`,fr:`écrire`,gender:`n`,examples:[`Escribo un email.`,`Escribe tu nombre aquí.`],theme:`verbes`,level:`a1`},{es:`dormir`,fr:`dormir`,gender:`n`,examples:[`Duermo ocho horas.`,`No he dormido bien.`],theme:`verbes`,level:`a1`},{es:`salir`,fr:`sortir`,gender:`n`,examples:[`Salgo a las ocho.`,`¿Salimos esta noche?`],theme:`verbes`,level:`a1`},{es:`llegar`,fr:`arriver`,gender:`n`,examples:[`Llego tarde.`,`¿A qué hora llegas?`],theme:`verbes`,level:`a1`},{es:`dar`,fr:`donner`,gender:`n`,examples:[`Dame el libro.`,`Le doy un beso.`],theme:`verbes`,level:`a1`},{es:`poner`,fr:`mettre / poser`,gender:`n`,examples:[`Pon la mesa.`,`¿Dónde pongo esto?`],theme:`verbes`,level:`a1`},{es:`decir`,fr:`dire`,gender:`n`,examples:[`¿Qué dices?`,`Dice que viene mañana.`],theme:`verbes`,level:`a1`},{es:`ver`,fr:`voir`,gender:`n`,examples:[`Veo la tele.`,`¿Has visto a María?`],theme:`verbes`,level:`a1`},{es:`mirar`,fr:`regarder`,gender:`n`,examples:[`Mira eso.`,`Miro por la ventana.`],theme:`verbes`,level:`a1`},{es:`escuchar`,fr:`écouter`,gender:`n`,examples:[`Escucho música.`,`Escucha lo que te digo.`],theme:`verbes`,level:`a1`},{es:`llamar`,fr:`appeler`,gender:`n`,examples:[`Te llamo luego.`,`Me llamo Pablo.`],theme:`verbes`,level:`a1`},{es:`esperar`,fr:`attendre / espérer`,gender:`n`,examples:[`Espera un momento.`,`Espero que todo vaya bien.`],theme:`verbes`,level:`a1`},{es:`gustar`,fr:`plaire / aimer`,gender:`n`,examples:[`Me gusta el chocolate.`,`¿Te gusta la música?`],theme:`verbes`,level:`a1`},{es:`necesitar`,fr:`avoir besoin de`,gender:`n`,examples:[`Necesito ayuda.`,`¿Necesitas algo?`],theme:`verbes`,level:`a1`},{es:`pensar`,fr:`penser`,gender:`n`,examples:[`¿Qué piensas?`,`Pienso en ti.`],theme:`verbes`,level:`a1`},{es:`creer`,fr:`croire`,gender:`n`,examples:[`Creo que sí.`,`No te creo.`],theme:`verbes`,level:`a1`},{es:`entender`,fr:`comprendre`,gender:`n`,examples:[`No entiendo.`,`¿Entiendes español?`],theme:`verbes`,level:`a1`},{es:`grande`,fr:`grand`,gender:`n`,examples:[`Una ciudad grande.`,`El piso es más grande que el mío.`],theme:`adjectifs`,level:`a1`},{es:`pequeño`,fr:`petit`,gender:`n`,examples:[`Un pueblo pequeño.`,`Mi habitación es pequeña.`],theme:`adjectifs`,level:`a1`},{es:`bueno`,fr:`bon`,gender:`n`,examples:[`Es un buen libro.`,`La comida está buena.`],theme:`adjectifs`,level:`a1`},{es:`malo`,fr:`mauvais`,gender:`n`,examples:[`Hace mal tiempo.`,`Esta película es mala.`],theme:`adjectifs`,level:`a1`},{es:`bonito`,fr:`joli`,gender:`n`,examples:[`Una playa bonita.`,`¡Qué vestido más bonito!`],theme:`adjectifs`,level:`a1`},{es:`feo`,fr:`laid`,gender:`n`,examples:[`Un edificio feo.`,`Esta camisa es bastante fea.`],theme:`adjectifs`,level:`a1`},{es:`nuevo`,fr:`nouveau`,gender:`n`,examples:[`Un coche nuevo.`,`Hay una tienda nueva en mi calle.`],theme:`adjectifs`,level:`a1`},{es:`viejo`,fr:`vieux`,gender:`n`,examples:[`Un amigo viejo.`,`El barrio viejo de Barcelona.`],theme:`adjectifs`,level:`a1`},{es:`fácil`,fr:`facile`,gender:`n`,examples:[`Es un ejercicio fácil.`,`El español es más fácil que el alemán.`],theme:`adjectifs`,level:`a1`},{es:`difícil`,fr:`difficile`,gender:`n`,examples:[`Es muy difícil.`,`La gramática es difícil al principio.`],theme:`adjectifs`,level:`a1`},{es:`contento`,fr:`content`,gender:`n`,examples:[`Estoy muy contento.`,`Está contenta con su trabajo.`],theme:`adjectifs`,level:`a1`},{es:`triste`,fr:`triste`,gender:`n`,examples:[`Estoy triste.`,`Es una película triste.`],theme:`adjectifs`,level:`a1`},{es:`cansado`,fr:`fatigué`,gender:`n`,examples:[`Estoy cansado.`,`Estoy cansada de trabajar tanto.`],theme:`adjectifs`,level:`a1`},{es:`barato`,fr:`pas cher`,gender:`n`,examples:[`Es muy barato.`,`Los vuelos están baratos este mes.`],theme:`adjectifs`,level:`a1`},{es:`caro`,fr:`cher`,gender:`n`,examples:[`Es demasiado caro.`,`La vida en Madrid es cara.`],theme:`adjectifs`,level:`a1`},{es:`caliente`,fr:`chaud`,gender:`n`,examples:[`El café está caliente.`,`Ten cuidado, está caliente.`],theme:`adjectifs`,level:`a1`},{es:`frío`,fr:`froid`,gender:`n`,examples:[`El agua está fría.`,`Hoy hace mucho frío.`],theme:`adjectifs`,level:`a1`},{es:`rápido`,fr:`rapide`,gender:`n`,examples:[`El tren es rápido.`,`Come muy rápido.`],theme:`adjectifs`,level:`a1`},{es:`lento`,fr:`lent`,gender:`n`,examples:[`Habla más lento, por favor.`,`El internet va muy lento.`],theme:`adjectifs`,level:`a1`},{es:`la cabeza`,fr:`la tête`,gender:`f`,examples:[`Me duele la cabeza.`,`Lleva un sombrero en la cabeza.`],theme:`corps`,level:`a2`},{es:`el brazo`,fr:`le bras`,gender:`m`,examples:[`Me he roto el brazo.`,`Levanta el brazo derecho.`],theme:`corps`,level:`a2`},{es:`la pierna`,fr:`la jambe`,gender:`f`,examples:[`Me duele la pierna.`,`Tiene las piernas largas.`],theme:`corps`,level:`a2`},{es:`la mano`,fr:`la main`,gender:`f`,examples:[`Dame la mano.`,`Me he quemado la mano.`],theme:`corps`,level:`a2`},{es:`el dedo`,fr:`le doigt`,gender:`m`,examples:[`Me he cortado un dedo.`,`Señala con el dedo.`],theme:`corps`,level:`a2`},{es:`el ojo`,fr:`l'œil`,gender:`m`,examples:[`Tiene los ojos azules.`,`Me duele un ojo.`],theme:`corps`,level:`a2`},{es:`la boca`,fr:`la bouche`,gender:`f`,examples:[`Abre la boca.`,`Cierra la boca cuando masticas.`],theme:`corps`,level:`a2`},{es:`el corazón`,fr:`le cœur`,gender:`m`,examples:[`Mi corazón late rápido.`,`Tiene un corazón de oro.`],theme:`corps`,level:`a2`},{es:`la espalda`,fr:`le dos`,gender:`f`,examples:[`Me duele la espalda.`,`Duermo boca arriba para cuidar la espalda.`],theme:`corps`,level:`a2`},{es:`el estómago`,fr:`l'estomac`,gender:`m`,examples:[`Me duele el estómago.`,`Tengo el estómago vacío.`],theme:`corps`,level:`a2`},{es:`el médico`,fr:`le médecin`,gender:`m`,examples:[`Voy al médico.`,`El médico me ha recetado pastillas.`],theme:`santé`,level:`a2`},{es:`la farmacia`,fr:`la pharmacie`,gender:`f`,examples:[`Necesito ir a la farmacia.`,`La farmacia de guardia está abierta.`],theme:`santé`,level:`a2`},{es:`enfermo`,fr:`malade`,gender:`n`,examples:[`Estoy enfermo.`,`Mi hija está enferma, no va al colegio.`],theme:`santé`,level:`a2`},{es:`la fiebre`,fr:`la fièvre`,gender:`f`,examples:[`Tengo fiebre.`,`Le ha subido la fiebre a 39.`],theme:`santé`,level:`a2`},{es:`el dolor`,fr:`la douleur`,gender:`m`,examples:[`Tengo dolor de cabeza.`,`El dolor es muy fuerte.`],theme:`santé`,level:`a2`},{es:`la receta`,fr:`l'ordonnance / la recette`,gender:`f`,examples:[`El médico me dio una receta.`,`¿Tienes la receta de la tortilla?`],theme:`santé`,level:`a2`},{es:`la pastilla`,fr:`le comprimé`,gender:`f`,examples:[`Tómate la pastilla.`,`Me tomo dos pastillas al día.`],theme:`santé`,level:`a2`},{es:`el avión`,fr:`l'avion`,gender:`m`,examples:[`Voy en avión a Madrid.`,`El avión sale a las seis de la mañana.`],theme:`voyages`,level:`a2`},{es:`el tren`,fr:`le train`,gender:`m`,examples:[`El tren sale a las 10.`,`Prefiero viajar en tren.`],theme:`voyages`,level:`a2`},{es:`el autobús`,fr:`le bus`,gender:`m`,examples:[`Cojo el autobús cada mañana.`,`El autobús llega tarde.`],theme:`voyages`,level:`a2`},{es:`el metro`,fr:`le métro`,gender:`m`,examples:[`Voy en metro al trabajo.`,`El metro cierra a las doce.`],theme:`voyages`,level:`a2`},{es:`el coche`,fr:`la voiture`,gender:`m`,examples:[`Tengo un coche nuevo.`,`Vamos en coche al pueblo.`],theme:`voyages`,level:`a2`},{es:`la estación`,fr:`la gare`,gender:`f`,examples:[`La estación de tren.`,`¿Dónde está la estación más cercana?`],theme:`voyages`,level:`a2`},{es:`el aeropuerto`,fr:`l'aéroport`,gender:`m`,examples:[`Voy al aeropuerto.`,`El aeropuerto está lejos del centro.`],theme:`voyages`,level:`a2`},{es:`el billete`,fr:`le billet / le ticket`,gender:`m`,examples:[`Un billete de ida y vuelta.`,`He comprado el billete por internet.`],theme:`voyages`,level:`a2`},{es:`el hotel`,fr:`l'hôtel`,gender:`m`,examples:[`Reservé un hotel.`,`El hotel tiene piscina.`],theme:`voyages`,level:`a2`},{es:`la maleta`,fr:`la valise`,gender:`f`,examples:[`Hago la maleta.`,`Mi maleta pesa demasiado.`],theme:`voyages`,level:`a2`},{es:`el pasaporte`,fr:`le passeport`,gender:`m`,examples:[`¿Tienes tu pasaporte?`,`Mi pasaporte está caducado.`],theme:`voyages`,level:`a2`},{es:`el equipaje`,fr:`les bagages`,gender:`m`,examples:[`Mi equipaje pesa mucho.`,`Llevo poco equipaje.`],theme:`voyages`,level:`a2`},{es:`la playa`,fr:`la plage`,gender:`f`,examples:[`Vamos a la playa.`,`La playa está llena en agosto.`],theme:`voyages`,level:`a2`},{es:`el mapa`,fr:`la carte (géo)`,gender:`m`,examples:[`Necesito un mapa.`,`Mira el mapa, estamos aquí.`],theme:`voyages`,level:`a2`},{es:`la dirección`,fr:`l'adresse / la direction`,gender:`f`,examples:[`¿Cuál es tu dirección?`,`Voy en la dirección equivocada.`],theme:`voyages`,level:`a2`},{es:`el trabajo`,fr:`le travail`,gender:`m`,examples:[`Me gusta mi trabajo.`,`Busco trabajo desde hace un mes.`],theme:`travail`,level:`a2`},{es:`la oficina`,fr:`le bureau`,gender:`f`,examples:[`Trabajo en una oficina.`,`La oficina cierra a las seis.`],theme:`travail`,level:`a2`},{es:`el jefe`,fr:`le chef / le patron`,gender:`m`,examples:[`Mi jefe es simpático.`,`El jefe ha convocado una reunión.`],theme:`travail`,level:`a2`},{es:`el profesor`,fr:`le professeur`,gender:`m`,examples:[`El profesor de español.`,`Mi profesora es muy buena.`],theme:`travail`,level:`a2`},{es:`el abogado`,fr:`l'avocat`,gender:`m`,examples:[`Necesito un abogado.`,`Mi hermana es abogada.`],theme:`travail`,level:`a2`},{es:`el ingeniero`,fr:`l'ingénieur`,gender:`m`,examples:[`Es ingeniero informático.`,`Los ingenieros ganan bien.`],theme:`travail`,level:`a2`},{es:`el camarero`,fr:`le serveur`,gender:`m`,examples:[`El camarero es amable.`,`¡Camarero, la cuenta por favor!`],theme:`travail`,level:`a2`},{es:`la empresa`,fr:`l'entreprise`,gender:`f`,examples:[`Trabajo en una empresa grande.`,`La empresa tiene 500 empleados.`],theme:`travail`,level:`a2`},{es:`el sueldo`,fr:`le salaire`,gender:`m`,examples:[`El sueldo es bueno.`,`Me han subido el sueldo.`],theme:`travail`,level:`a2`},{es:`la reunión`,fr:`la réunion`,gender:`f`,examples:[`Tengo una reunión a las 10.`,`La reunión ha durado dos horas.`],theme:`travail`,level:`a2`},{es:`las vacaciones`,fr:`les vacances`,gender:`f`,examples:[`¿Cuándo tienes vacaciones?`,`Me voy de vacaciones en agosto.`],theme:`travail`,level:`a2`},{es:`encontrar`,fr:`trouver`,gender:`n`,examples:[`No encuentro las llaves.`,`He encontrado un buen restaurante.`],theme:`verbes`,level:`a2`},{es:`empezar`,fr:`commencer`,gender:`n`,examples:[`La clase empieza a las nueve.`,`He empezado un curso nuevo.`],theme:`verbes`,level:`a2`},{es:`terminar`,fr:`finir`,gender:`n`,examples:[`He terminado el libro.`,`¿A qué hora terminas de trabajar?`],theme:`verbes`,level:`a2`},{es:`volver`,fr:`revenir / retourner`,gender:`n`,examples:[`Vuelvo a casa a las siete.`,`¿Cuándo vuelves de viaje?`],theme:`verbes`,level:`a2`},{es:`perder`,fr:`perdre`,gender:`n`,examples:[`He perdido el tren.`,`No quiero perder el tiempo.`],theme:`verbes`,level:`a2`},{es:`pagar`,fr:`payer`,gender:`n`,examples:[`¿Puedo pagar con tarjeta?`,`Ya he pagado la cuenta.`],theme:`verbes`,level:`a2`},{es:`abrir`,fr:`ouvrir`,gender:`n`,examples:[`Abre la puerta.`,`El supermercado abre a las nueve.`],theme:`verbes`,level:`a2`},{es:`cerrar`,fr:`fermer`,gender:`n`,examples:[`Cierra la ventana.`,`La tienda cierra a las ocho.`],theme:`verbes`,level:`a2`},{es:`jugar`,fr:`jouer`,gender:`n`,examples:[`Juego al fútbol.`,`Los niños juegan en el parque.`],theme:`verbes`,level:`a2`},{es:`correr`,fr:`courir`,gender:`n`,examples:[`Corro todas las mañanas.`,`¡Corre, que llegamos tarde!`],theme:`verbes`,level:`a2`},{es:`llevar`,fr:`porter / amener`,gender:`n`,examples:[`Llevo una camiseta azul.`,`Llevo tres años en España.`],theme:`verbes`,level:`a2`},{es:`pedir`,fr:`demander / commander`,gender:`n`,examples:[`Pido la cuenta.`,`He pedido una paella.`],theme:`verbes`,level:`a2`},{es:`sentir`,fr:`sentir / ressentir`,gender:`n`,examples:[`Lo siento mucho.`,`Me siento bien hoy.`],theme:`verbes`,level:`a2`},{es:`coger`,fr:`prendre / attraper`,gender:`n`,examples:[`Cojo el metro todos los días.`,`Coge el paraguas, que llueve.`],theme:`verbes`,level:`a2`},{es:`dejar`,fr:`laisser / arrêter de`,gender:`n`,examples:[`Deja de hablar.`,`He dejado el libro en la mesa.`],theme:`verbes`,level:`a2`},{es:`quedar`,fr:`rester / se retrouver`,gender:`n`,examples:[`¿Quedamos a las ocho?`,`Solo queda uno.`],theme:`verbes`,level:`a2`},{es:`pasar`,fr:`passer / se passer`,gender:`n`,examples:[`¿Qué ha pasado?`,`Pasa, siéntate.`],theme:`verbes`,level:`a2`},{es:`el deporte`,fr:`le sport`,gender:`m`,examples:[`Hago deporte los martes.`,`El deporte es bueno para la salud.`],theme:`loisirs`,level:`a2`},{es:`el fútbol`,fr:`le football`,gender:`m`,examples:[`Me gusta el fútbol.`,`España ganó el mundial de fútbol.`],theme:`loisirs`,level:`a2`},{es:`la música`,fr:`la musique`,gender:`f`,examples:[`Escucho música.`,`Me gusta la música latina.`],theme:`loisirs`,level:`a2`},{es:`la película`,fr:`le film`,gender:`f`,examples:[`Vi una película española.`,`¿Qué película quieres ver?`],theme:`loisirs`,level:`a2`},{es:`la serie`,fr:`la série`,gender:`f`,examples:[`Estoy viendo una serie nueva.`,`Esta serie tiene diez temporadas.`],theme:`loisirs`,level:`a2`},{es:`el libro`,fr:`le livre`,gender:`m`,examples:[`Estoy leyendo un libro.`,`Me han regalado un libro muy bueno.`],theme:`loisirs`,level:`a2`},{es:`el cine`,fr:`le cinéma`,gender:`m`,examples:[`Vamos al cine.`,`¿Qué ponen en el cine?`],theme:`loisirs`,level:`a2`},{es:`la fiesta`,fr:`la fête`,gender:`f`,examples:[`Hay una fiesta esta noche.`,`La fiesta estuvo genial.`],theme:`loisirs`,level:`a2`},{es:`bailar`,fr:`danser`,gender:`n`,examples:[`Me encanta bailar.`,`¿Bailas conmigo?`],theme:`loisirs`,level:`a2`},{es:`cantar`,fr:`chanter`,gender:`n`,examples:[`Canta muy bien.`,`Cantamos en el karaoke.`],theme:`loisirs`,level:`a2`},{es:`cocinar`,fr:`cuisiner`,gender:`n`,examples:[`Me gusta cocinar.`,`Mi padre cocina muy bien.`],theme:`loisirs`,level:`a2`},{es:`pasear`,fr:`se promener`,gender:`n`,examples:[`Paseamos por el parque.`,`Me gusta pasear por la playa.`],theme:`loisirs`,level:`a2`},{es:`nadar`,fr:`nager`,gender:`n`,examples:[`Nado en la piscina.`,`Aprendí a nadar a los cinco años.`],theme:`loisirs`,level:`a2`},{es:`viajar`,fr:`voyager`,gender:`n`,examples:[`Me encanta viajar.`,`He viajado a muchos países.`],theme:`loisirs`,level:`a2`},{es:`la alegría`,fr:`la joie`,gender:`f`,examples:[`¡Qué alegría verte!`,`La alegría de vivir.`],theme:`émotions`,level:`b1`},{es:`la tristeza`,fr:`la tristesse`,gender:`f`,examples:[`Siento mucha tristeza.`,`No puedo ocultar mi tristeza.`],theme:`émotions`,level:`b1`},{es:`el miedo`,fr:`la peur`,gender:`m`,examples:[`Tengo miedo a la oscuridad.`,`No tengas miedo, todo va a salir bien.`],theme:`émotions`,level:`b1`},{es:`la esperanza`,fr:`l'espoir`,gender:`f`,examples:[`Tengo esperanza.`,`Nunca pierdas la esperanza.`],theme:`émotions`,level:`b1`},{es:`la sorpresa`,fr:`la surprise`,gender:`f`,examples:[`¡Qué sorpresa!`,`Le he preparado una sorpresa.`],theme:`émotions`,level:`b1`},{es:`orgulloso`,fr:`fier`,gender:`n`,examples:[`Estoy orgulloso de ti.`,`Es un hombre muy orgulloso.`],theme:`émotions`,level:`b1`},{es:`preocupado`,fr:`inquiet`,gender:`n`,examples:[`Estoy preocupado por el examen.`,`No estés preocupada, todo irá bien.`],theme:`émotions`,level:`b1`},{es:`nervioso`,fr:`nerveux`,gender:`n`,examples:[`Estoy nervioso.`,`Me pongo nerviosa antes de los exámenes.`],theme:`émotions`,level:`b1`},{es:`aburrido`,fr:`ennuyé / ennuyeux`,gender:`n`,examples:[`Estoy aburrido.`,`Es una película aburrida.`],theme:`émotions`,level:`b1`},{es:`agradecido`,fr:`reconnaissant`,gender:`n`,examples:[`Estoy muy agradecido.`,`Te estoy agradecida por todo.`],theme:`émotions`,level:`b1`},{es:`celoso`,fr:`jaloux`,gender:`n`,examples:[`Es muy celoso.`,`No seas celosa.`],theme:`émotions`,level:`b1`},{es:`simpático`,fr:`sympathique`,gender:`n`,examples:[`Es muy simpático.`,`Me cae simpática.`],theme:`caractère`,level:`b1`},{es:`amable`,fr:`aimable / gentil`,gender:`n`,examples:[`Eres muy amable.`,`Ha sido muy amable conmigo.`],theme:`caractère`,level:`b1`},{es:`generoso`,fr:`généreux`,gender:`n`,examples:[`Es una persona generosa.`,`Siempre ha sido muy generoso.`],theme:`caractère`,level:`b1`},{es:`valiente`,fr:`courageux`,gender:`n`,examples:[`Es muy valiente.`,`Hay que ser valiente para hacer eso.`],theme:`caractère`,level:`b1`},{es:`tímido`,fr:`timide`,gender:`n`,examples:[`Es bastante tímido.`,`De pequeña era muy tímida.`],theme:`caractère`,level:`b1`},{es:`terco`,fr:`têtu`,gender:`n`,examples:[`Es muy terco.`,`No seas tan terco, escucha.`],theme:`caractère`,level:`b1`},{es:`vago`,fr:`paresseux / fainéant`,gender:`n`,examples:[`Es un poco vago.`,`No seas vago y estudia.`],theme:`caractère`,level:`b1`},{es:`tacaño`,fr:`radin`,gender:`n`,examples:[`Es muy tacaño.`,`No seas tacaño e invita.`],theme:`caractère`,level:`b1`},{es:`intentar`,fr:`essayer`,gender:`n`,examples:[`Voy a intentarlo.`,`Intenté llamarte pero no contestabas.`],theme:`verbes`,level:`b1`},{es:`conseguir`,fr:`réussir / obtenir`,gender:`n`,examples:[`He conseguido el trabajo.`,`¿Has conseguido las entradas?`],theme:`verbes`,level:`b1`},{es:`olvidar`,fr:`oublier`,gender:`n`,examples:[`He olvidado mi contraseña.`,`No olvides la reunión de mañana.`],theme:`verbes`,level:`b1`},{es:`recordar`,fr:`se souvenir`,gender:`n`,examples:[`Recuerdo aquel verano.`,`¿Recuerdas lo que te dije?`],theme:`verbes`,level:`b1`},{es:`parecer`,fr:`sembler / paraître`,gender:`n`,examples:[`Parece simpático.`,`Me parece buena idea.`],theme:`verbes`,level:`b1`},{es:`explicar`,fr:`expliquer`,gender:`n`,examples:[`¿Puedes explicar otra vez?`,`Te lo explico mañana.`],theme:`verbes`,level:`b1`},{es:`preguntar`,fr:`demander (question)`,gender:`n`,examples:[`Quiero preguntarte algo.`,`Me preguntó si venía.`],theme:`verbes`,level:`b1`},{es:`enviar`,fr:`envoyer`,gender:`n`,examples:[`Te envío un email.`,`Envié el paquete ayer.`],theme:`verbes`,level:`b1`},{es:`conducir`,fr:`conduire`,gender:`n`,examples:[`¿Sabes conducir?`,`Conduzco desde los 18 años.`],theme:`verbes`,level:`b1`},{es:`elegir`,fr:`choisir`,gender:`n`,examples:[`Elige lo que quieras.`,`He elegido el menú del día.`],theme:`verbes`,level:`b1`},{es:`faltar`,fr:`manquer / rester`,gender:`n`,examples:[`Faltan dos días.`,`Me falta tiempo para todo.`],theme:`verbes`,level:`b1`},{es:`mejorar`,fr:`améliorer / s'améliorer`,gender:`n`,examples:[`Mi español está mejorando.`,`Quiero mejorar mi pronunciación.`],theme:`verbes`,level:`b1`},{es:`aprender`,fr:`apprendre`,gender:`n`,examples:[`Quiero aprender a bailar.`,`He aprendido mucho este año.`],theme:`verbes`,level:`b1`},{es:`enseñar`,fr:`enseigner / montrer`,gender:`n`,examples:[`¿Me enseñas a cocinar?`,`Enséñame la foto.`],theme:`verbes`,level:`b1`},{es:`compartir`,fr:`partager`,gender:`n`,examples:[`¿Compartimos postre?`,`Le gusta compartir con los demás.`],theme:`verbes`,level:`b1`},{es:`seguir`,fr:`suivre / continuer`,gender:`n`,examples:[`Sigue todo recto.`,`Sigo estudiando español.`],theme:`verbes`,level:`b1`},{es:`preocuparse`,fr:`s'inquiéter`,gender:`n`,examples:[`No te preocupes.`,`Me preocupo por mis hijos.`],theme:`verbes`,level:`b1`},{es:`el ordenador`,fr:`l'ordinateur`,gender:`m`,examples:[`Trabajo con el ordenador.`,`Mi ordenador es muy lento.`],theme:`technologie`,level:`b1`},{es:`el móvil`,fr:`le portable`,gender:`m`,examples:[`He perdido mi móvil.`,`¿Me dejas tu móvil un momento?`],theme:`technologie`,level:`b1`},{es:`la pantalla`,fr:`l'écran`,gender:`f`,examples:[`La pantalla está rota.`,`Paso mucho tiempo delante de la pantalla.`],theme:`technologie`,level:`b1`},{es:`la contraseña`,fr:`le mot de passe`,gender:`f`,examples:[`He olvidado mi contraseña.`,`Cambia tu contraseña regularmente.`],theme:`technologie`,level:`b1`},{es:`el correo`,fr:`le mail / le courrier`,gender:`m`,examples:[`Te envío un correo.`,`Tengo 50 correos sin leer.`],theme:`technologie`,level:`b1`},{es:`descargar`,fr:`télécharger`,gender:`n`,examples:[`Voy a descargar la app.`,`He descargado una película.`],theme:`technologie`,level:`b1`},{es:`la red`,fr:`le réseau`,gender:`f`,examples:[`No hay red aquí.`,`Las redes sociales.`],theme:`technologie`,level:`b1`},{es:`las noticias`,fr:`les nouvelles`,gender:`f`,examples:[`Veo las noticias por la mañana.`,`¿Has visto las noticias de hoy?`],theme:`médias`,level:`b1`},{es:`el periódico`,fr:`le journal`,gender:`m`,examples:[`Leo el periódico digital.`,`El periódico de hoy trae una noticia interesante.`],theme:`médias`,level:`b1`},{es:`la revista`,fr:`le magazine`,gender:`f`,examples:[`Una revista de moda.`,`Compro la revista todos los viernes.`],theme:`médias`,level:`b1`},{es:`el medio ambiente`,fr:`l'environnement`,gender:`m`,examples:[`Proteger el medio ambiente.`,`El medio ambiente es responsabilidad de todos.`],theme:`environnement`,level:`b1`},{es:`la naturaleza`,fr:`la nature`,gender:`f`,examples:[`Me encanta la naturaleza.`,`Hay que respetar la naturaleza.`],theme:`environnement`,level:`b1`},{es:`el bosque`,fr:`la forêt`,gender:`m`,examples:[`Un paseo por el bosque.`,`El bosque en otoño es precioso.`],theme:`environnement`,level:`b1`},{es:`el río`,fr:`la rivière / le fleuve`,gender:`m`,examples:[`El río Guadalquivir.`,`Nos bañamos en el río.`],theme:`environnement`,level:`b1`},{es:`la montaña`,fr:`la montagne`,gender:`f`,examples:[`Vamos a la montaña.`,`Desde aquí se ven las montañas.`],theme:`environnement`,level:`b1`},{es:`el mar`,fr:`la mer`,gender:`m`,examples:[`Vivo cerca del mar.`,`El mar está muy tranquilo hoy.`],theme:`environnement`,level:`b1`},{es:`la lluvia`,fr:`la pluie`,gender:`f`,examples:[`No me gusta la lluvia.`,`La lluvia ha parado.`],theme:`environnement`,level:`b1`},{es:`el sol`,fr:`le soleil`,gender:`m`,examples:[`Hoy hace sol.`,`Ponte crema solar, hay mucho sol.`],theme:`environnement`,level:`b1`},{es:`la contaminación`,fr:`la pollution`,gender:`f`,examples:[`La contaminación es un problema.`,`Hay mucha contaminación en las ciudades grandes.`],theme:`environnement`,level:`b1`},{es:`reciclar`,fr:`recycler`,gender:`n`,examples:[`Es importante reciclar.`,`Reciclamos el plástico y el vidrio.`],theme:`environnement`,level:`b1`},{es:`el gobierno`,fr:`le gouvernement`,gender:`m`,examples:[`El gobierno aprobó la ley.`,`El gobierno ha tomado nuevas medidas.`],theme:`politique`,level:`b2`},{es:`la ley`,fr:`la loi`,gender:`f`,examples:[`Hay que respetar la ley.`,`Han cambiado la ley de extranjería.`],theme:`politique`,level:`b2`},{es:`las elecciones`,fr:`les élections`,gender:`f`,examples:[`Las elecciones son en mayo.`,`Ha votado en las elecciones municipales.`],theme:`politique`,level:`b2`},{es:`el derecho`,fr:`le droit`,gender:`m`,examples:[`Todos tienen derechos.`,`El derecho a la educación es fundamental.`],theme:`politique`,level:`b2`},{es:`la sociedad`,fr:`la société`,gender:`f`,examples:[`La sociedad actual.`,`Vivimos en una sociedad muy consumista.`],theme:`politique`,level:`b2`},{es:`la economía`,fr:`l'économie`,gender:`f`,examples:[`La economía española crece.`,`La economía va mejorando poco a poco.`],theme:`politique`,level:`b2`},{es:`el desempleo`,fr:`le chômage`,gender:`m`,examples:[`El desempleo es un problema.`,`El desempleo juvenil es muy alto.`],theme:`politique`,level:`b2`},{es:`la igualdad`,fr:`l'égalité`,gender:`f`,examples:[`La igualdad de género.`,`Luchamos por la igualdad de derechos.`],theme:`politique`,level:`b2`},{es:`la crisis`,fr:`la crise`,gender:`f`,examples:[`La crisis económica.`,`España sufrió mucho durante la crisis.`],theme:`politique`,level:`b2`},{es:`el éxito`,fr:`le succès`,gender:`m`,examples:[`El éxito requiere esfuerzo.`,`Ha tenido mucho éxito con su empresa.`],theme:`abstrait`,level:`b2`},{es:`el fracaso`,fr:`l'échec`,gender:`m`,examples:[`Aprender del fracaso.`,`El fracaso no es el final, es una lección.`],theme:`abstrait`,level:`b2`},{es:`la libertad`,fr:`la liberté`,gender:`f`,examples:[`La libertad de expresión.`,`Valoro mucho mi libertad.`],theme:`abstrait`,level:`b2`},{es:`la justicia`,fr:`la justice`,gender:`f`,examples:[`Creo en la justicia.`,`La justicia tarda pero llega.`],theme:`abstrait`,level:`b2`},{es:`el compromiso`,fr:`l'engagement`,gender:`m`,examples:[`Es un gran compromiso.`,`Tenemos un compromiso con el medio ambiente.`],theme:`abstrait`,level:`b2`},{es:`la confianza`,fr:`la confiance`,gender:`f`,examples:[`Tengo confianza en ti.`,`La confianza se gana poco a poco.`],theme:`abstrait`,level:`b2`},{es:`el riesgo`,fr:`le risque`,gender:`m`,examples:[`Asumir un riesgo.`,`No quiero correr ese riesgo.`],theme:`abstrait`,level:`b2`},{es:`la ventaja`,fr:`l'avantage`,gender:`f`,examples:[`Es una gran ventaja.`,`Una de las ventajas de vivir aquí es el clima.`],theme:`abstrait`,level:`b2`},{es:`el reto`,fr:`le défi`,gender:`m`,examples:[`Es un gran reto.`,`Me gustan los retos.`],theme:`abstrait`,level:`b2`},{es:`el desarrollo`,fr:`le développement`,gender:`m`,examples:[`El desarrollo sostenible.`,`El desarrollo de la tecnología ha cambiado todo.`],theme:`abstrait`,level:`b2`},{es:`lograr`,fr:`réussir / atteindre`,gender:`n`,examples:[`He logrado mi objetivo.`,`Logró terminar la carrera a pesar de todo.`],theme:`verbes`,level:`b2`},{es:`desarrollar`,fr:`développer`,gender:`n`,examples:[`Hay que desarrollar nuevas ideas.`,`Han desarrollado una app muy útil.`],theme:`verbes`,level:`b2`},{es:`mantener`,fr:`maintenir / entretenir`,gender:`n`,examples:[`Hay que mantener la calma.`,`Mantiene una buena relación con sus vecinos.`],theme:`verbes`,level:`b2`},{es:`exigir`,fr:`exiger`,gender:`n`,examples:[`Los trabajadores exigen mejores condiciones.`,`No le exijo nada.`],theme:`verbes`,level:`b2`},{es:`darse cuenta`,fr:`se rendre compte`,gender:`n`,examples:[`Me di cuenta demasiado tarde.`,`¿Te has dado cuenta de que no está?`],theme:`verbes`,level:`b2`},{es:`aprovechar`,fr:`profiter de`,gender:`n`,examples:[`Aprovecha el buen tiempo.`,`Hay que aprovechar la oportunidad.`],theme:`verbes`,level:`b2`},{es:`quejarse`,fr:`se plaindre`,gender:`n`,examples:[`Siempre se queja de todo.`,`No te quejes, que tú estás peor.`],theme:`verbes`,level:`b2`},{es:`echar de menos`,fr:`manquer (qqn/qqch)`,gender:`n`,examples:[`Echo de menos a mi familia.`,`¿Me echas de menos?`],theme:`verbes`,level:`b2`},{es:`molestar`,fr:`déranger / gêner`,gender:`n`,examples:[`¿Te molesta si abro la ventana?`,`No me molestes, estoy ocupado.`],theme:`verbes`,level:`b2`},{es:`suponer`,fr:`supposer`,gender:`n`,examples:[`Supongo que sí.`,`Supongo que vendrá mañana.`],theme:`verbes`,level:`b2`}],M=[{id:`salutations`,name:`Salutations`,emoji:`👋`,level:`a1`},{id:`nombres`,name:`Nombres & dates`,emoji:`🔢`,level:`a1`},{id:`temps`,name:`Le temps`,emoji:`⏰`,level:`a1`},{id:`famille`,name:`Famille`,emoji:`👨‍👩‍👧‍👦`,level:`a1`},{id:`nourriture`,name:`Nourriture`,emoji:`🍽️`,level:`a1`},{id:`maison`,name:`Maison`,emoji:`🏠`,level:`a1`},{id:`vêtements`,name:`Vêtements`,emoji:`👕`,level:`a1`},{id:`couleurs`,name:`Couleurs`,emoji:`🎨`,level:`a1`},{id:`verbes`,name:`Verbes essentiels`,emoji:`⚡`,level:`a1`},{id:`adjectifs`,name:`Adjectifs`,emoji:`💬`,level:`a1`},{id:`corps`,name:`Corps & santé`,emoji:`🏥`,level:`a2`},{id:`santé`,name:`Santé`,emoji:`💊`,level:`a2`},{id:`voyages`,name:`Voyages`,emoji:`✈️`,level:`a2`},{id:`travail`,name:`Travail`,emoji:`💼`,level:`a2`},{id:`loisirs`,name:`Loisirs & sport`,emoji:`⚽`,level:`a2`},{id:`émotions`,name:`Émotions`,emoji:`😊`,level:`b1`},{id:`caractère`,name:`Caractère`,emoji:`🧠`,level:`b1`},{id:`technologie`,name:`Technologie`,emoji:`💻`,level:`b1`},{id:`médias`,name:`Médias`,emoji:`📰`,level:`b1`},{id:`environnement`,name:`Environnement`,emoji:`🌍`,level:`b1`},{id:`politique`,name:`Politique`,emoji:`🏛️`,level:`b2`},{id:`abstrait`,name:`Concepts abstraits`,emoji:`💡`,level:`b2`}];function N(e){return Le.filter(t=>t.level===e)}function Re(e){let t=e.toLowerCase().trim();return t?Le.filter(e=>e.es.toLowerCase().includes(t)||e.fr.toLowerCase().includes(t)):[]}var P=[],F=0,I=!1,L=`a1`;async function ze(){let e=document.createElement(`div`);return e.innerHTML=`
    <div class="page-header">
      <h1>Flash Cards 🃏</h1>
      <p class="subtitle">Apprends du vocabulaire avec la répétition espacée</p>
    </div>
    
    <div style="padding: 0 var(--space-md);">
      <div class="chip-group" id="level-chips">
        <button class="chip ${L===`a1`?`active`:``}" data-level="a1">A1</button>
        <button class="chip ${L===`a2`?`active`:``}" data-level="a2">A2</button>
        <button class="chip ${L===`b1`?`active`:``}" data-level="b1">B1</button>
        <button class="chip ${L===`b2`?`active`:``}" data-level="b2">B2</button>
        <button class="chip" data-level="all">Tous</button>
      </div>
    </div>
    
    <div id="flashcard-area"></div>
  `,setTimeout(()=>{e.querySelectorAll(`.chip`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.chip`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),L=t.dataset.level,He(e)})}),He(e)},0),e}function Be(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Ve(e){let t=e.map(e=>({card:e,direction:`es→fr`})),n=e.map(e=>({card:e,direction:`fr→es`})),r=Be(t),i=Be(n),a=[],o=0,s=0,c=new Set;for(;o<r.length||s<i.length;){let e=[];o<r.length&&e.push({pool:`esfr`,entry:r[o],idx:o}),s<i.length&&e.push({pool:`fres`,entry:i[s],idx:s});let t=e.filter(e=>!c.has(e.entry.card.es)),n=t.length>0?t[Math.floor(Math.random()*t.length)]:e[Math.floor(Math.random()*e.length)];if(a.push(n.entry),c.add(n.entry.card.es),c.size>5){let e=c.values().next().value;c.delete(e)}n.pool===`esfr`?o++:s++}return a}function He(e){P=Ve(L===`all`?[...Le]:N(L)),F=0,I=!1,Ue(e)}function Ue(e){let t=e.querySelector(`#flashcard-area`);if(!t)return;if(F>=P.length){t.innerHTML=`
      <div class="review-summary">
        <div class="summary-icon">🎉</div>
        <h2>Série terminée !</h2>
        <p style="color: var(--text-secondary); margin-top: var(--space-sm);">
          Tu as vu ${P.length/2} mots dans les deux sens.
        </p>
        <button class="btn btn-primary" id="restart-btn" style="margin-top: var(--space-xl);">
          Recommencer
        </button>
      </div>
    `,setTimeout(()=>{t.querySelector(`#restart-btn`)?.addEventListener(`click`,()=>He(e))},0);return}let{card:n,direction:r}=P[F];I=!1;let i=r===`es→fr`,a=i?`🇪🇸 → 🇫🇷`:`🇫🇷 → 🇪🇸`,o=i?n.es:n.fr,s=i?n.fr:n.es,c=i?`Traduis en français`:`Traduis en espagnol`,l=(n.examples||(n.example?[n.example]:[])).slice(0,2).map(e=>`<div class="flashcard-example">"${e}"</div>`).join(``);t.innerHTML=`
    <div class="flashcard-progress">
      <span>${F+1}/${P.length}</span>
      <div class="progress-bar">
        <div class="progress-bar-fill" style="width: ${(F+1)/P.length*100}%"></div>
      </div>
    </div>
    
    <div class="flashcard-direction-badge">${a}</div>
    
    <div class="flashcard-container">
      <div class="flashcard" id="flashcard">
        <div class="flashcard-face flashcard-front">
          ${i?`<button class="flashcard-audio-btn" id="audio-btn-front">🔊</button>`:``}
          <span class="flashcard-category">
            <span class="level-tag ${n.level}">${n.level.toUpperCase()}</span>
          </span>
          <div class="flashcard-word">${o}</div>
          ${!i&&n.gender!==`n`?`<div style="font-size: var(--font-sm); color: var(--text-tertiary);">Devine le mot espagnol</div>`:``}
          ${i&&n.gender!==`n`?`<div style="font-size: var(--font-sm); color: var(--text-tertiary);">${n.gender===`m`?`(masculin)`:`(féminin)`}</div>`:``}
          <div class="flashcard-hint">${c}</div>
        </div>
        <div class="flashcard-face flashcard-back">
          ${i?``:`<button class="flashcard-audio-btn" id="audio-btn-back">🔊</button>`}
          <span class="flashcard-category">
            <span class="level-tag ${n.level}">${n.level.toUpperCase()}</span>
          </span>
          <div class="flashcard-translation">${s}</div>
          ${!i&&n.gender!==`n`?`<div style="font-size: var(--font-sm); color: var(--text-tertiary); margin-bottom: var(--space-sm);">${n.gender===`m`?`(masculin)`:`(féminin)`}</div>`:``}
          ${l}
        </div>
      </div>
    </div>
    
    <div class="flashcard-actions" id="card-actions" style="opacity: 0; pointer-events: none; transition: opacity 0.3s;">
      <button class="flashcard-action-btn btn-fail" data-quality="1">
        <span>😵</span>
        <span>Raté</span>
      </button>
      <button class="flashcard-action-btn btn-hard" data-quality="3">
        <span>🤔</span>
        <span>Difficile</span>
      </button>
      <button class="flashcard-action-btn btn-good" data-quality="4">
        <span>😊</span>
        <span>Bien</span>
      </button>
      <button class="flashcard-action-btn btn-easy" data-quality="5">
        <span>🤩</span>
        <span>Facile</span>
      </button>
    </div>
  `,setTimeout(()=>{let a=t.querySelector(`#flashcard`),o=t.querySelector(`#card-actions`);a?.addEventListener(`click`,e=>{e.target.closest(`.flashcard-audio-btn`)||(I=!I,a.classList.toggle(`flipped`,I),I&&(o.style.opacity=`1`,o.style.pointerEvents=`auto`,i||x(n.es)))}),t.querySelector(`#audio-btn-front`)?.addEventListener(`click`,e=>{e.stopPropagation(),x(n.es)}),t.querySelector(`#audio-btn-back`)?.addEventListener(`click`,e=>{e.stopPropagation(),x(n.es)}),t.querySelectorAll(`.flashcard-action-btn`).forEach(t=>{t.addEventListener(`click`,async()=>{let i=parseInt(t.dataset.quality),a=i>=3;if(!a){let e={card:n,direction:r},t=Math.min(F+3+Math.floor(Math.random()*3),P.length);P.splice(t,0,e)}let o=`vocab-${n.es}`,s=await E.cards.get(o);s||=xe(o,`vocabulary`,{es:n.es,fr:n.fr,examples:n.examples||(n.example?[n.example]:[]),level:n.level});let{calculateNextReview:c}=await he(async()=>{let{calculateNextReview:e}=await Promise.resolve().then(()=>be);return{calculateNextReview:e}},void 0),l=c(s,i);await E.cards.put(l);let{recordStudy:u}=await he(async()=>{let{recordStudy:e}=await Promise.resolve().then(()=>ge);return{recordStudy:e}},void 0);await u(a,0),await it(),F++,Ue(e)})})},0)}var We=null,R=null;async function Ge(){let e=document.createElement(`div`);return e.innerHTML=`
    <div class="page-header">
      <h1>Lexique 📚</h1>
      <p class="subtitle">${Le.length} mots à explorer</p>
    </div>
    
    <div style="padding: 0 var(--space-md); margin-bottom: var(--space-md);">
      <div class="search-container">
        <span class="search-icon">🔍</span>
        <input type="text" class="search-input" id="search-input" placeholder="Chercher un mot..." autocomplete="off" />
      </div>
    </div>
    
    <div style="padding: 0 var(--space-md);">
      <div class="chip-group" id="level-filter">
        <button class="chip active" data-level="all">Tous</button>
        <button class="chip" data-level="a1">A1</button>
        <button class="chip" data-level="a2">A2</button>
        <button class="chip" data-level="b1">B1</button>
        <button class="chip" data-level="b2">B2</button>
      </div>
    </div>
    
    <div style="padding: 0 var(--space-md); margin-top: var(--space-sm);">
      <div class="chip-group" id="theme-filter" style="flex-wrap: wrap;">
        <button class="chip active" data-theme="all">Tous les thèmes</button>
        ${M.map(e=>`<button class="chip" data-theme="${e.id}">${e.emoji} ${e.name}</button>`).join(``)}
      </div>
    </div>
    
    <div id="word-list" class="lexicon-list" style="margin-top: var(--space-md);"></div>
    <div id="word-count" style="text-align: center; padding: var(--space-md); font-size: var(--font-xs); color: var(--text-tertiary);"></div>
  `,setTimeout(()=>{let t=e.querySelector(`#search-input`),n=e.querySelector(`#word-list`),r=e.querySelector(`#word-count`);function i(){let e=[...Le],i=t.value.trim();if(i&&(e=Re(i)),R&&R!==`all`&&(e=e.filter(e=>e.level===R)),We&&We!==`all`&&(e=e.filter(e=>e.theme===We)),r.textContent=`${e.length} mot${e.length>1?`s`:``} trouvé${e.length>1?`s`:``}`,e.length===0){n.innerHTML=`
          <div class="empty-state">
            <div class="empty-icon">🔍</div>
            <div class="empty-title">Aucun résultat</div>
            <div class="empty-text">Essaie un autre terme de recherche ou filtre.</div>
          </div>
        `;return}n.innerHTML=e.map(e=>{let t=e.examples||(e.example?[e.example]:[]);return`
        <div class="lexicon-item" data-word="${e.es}">
          <div style="flex: 1; min-width: 0;">
            <div class="lexicon-word">
              <div class="es">${e.es} ${e.gender===`n`?``:`<span class="gender">(${e.gender===`m`?`m.`:`f.`})</span>`}</div>
              <div class="fr">${e.fr}</div>
            </div>
            ${t.length>0?`<div class="lexicon-examples">${t.map(e=>`<div class="lexicon-example">"${e}"</div>`).join(``)}</div>`:``}
          </div>
          <span class="level-tag ${e.level}">${e.level.toUpperCase()}</span>
          <button class="phrase-audio-btn" data-speak="${e.es}" style="margin: 0;">🔊</button>
        </div>
      `}).join(``),n.querySelectorAll(`[data-speak]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),x(e.dataset.speak)})})}t.addEventListener(`input`,i),e.querySelectorAll(`#level-filter .chip`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`#level-filter .chip`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),R=t.dataset.level,i()})}),e.querySelectorAll(`#theme-filter .chip`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`#theme-filter .chip`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),We=t.dataset.theme,i()})}),i()},0),e}var Ke={everyday:[{es:`¡Hola! ¿Qué tal?`,fr:`Salut ! Comment ça va ?`,context:`Salutation informelle très courante`,level:`a1`,category:`saluer`,situations:[`Tú llegas a una fiesta: «¡Hola! ¿Qué tal? ¿Cómo va todo?»`,`Ves a un amigo en la calle: «¡Hola! ¿Qué tal? Hace mucho que no te veo.»`]},{es:`¿Cómo estás?`,fr:`Comment vas-tu ?`,context:`Salutation informelle`,level:`a1`,category:`saluer`,situations:[`Le preguntas a un compañero de clase: «Oye, ¿cómo estás? Te vi un poco cansado ayer.»`,`Llamas a tu amigo: «¡Hola! ¿Cómo estás? Te llamaba para quedar.»`]},{es:`¿Cómo está usted?`,fr:`Comment allez-vous ?`,context:`Salutation formelle`,level:`a1`,category:`saluer`,situations:[`En una entrevista de trabajo: «Buenos días. ¿Cómo está usted? Encantado de conocerle.»`,`Al médico: «¿Cómo está usted, doctor? Vengo por los resultados.»`]},{es:`Muy bien, gracias. ¿Y tú?`,fr:`Très bien, merci. Et toi ?`,context:`Réponse standard`,level:`a1`,category:`saluer`,situations:[`—¿Qué tal? —Muy bien, gracias. ¿Y tú? —¡Genial, aquí andamos!`]},{es:`Nos vemos luego.`,fr:`On se voit plus tard.`,context:`Au revoir informel`,level:`a1`,category:`saluer`,situations:[`Te despides de un compañero después de clase: «Bueno, me voy. ¡Nos vemos luego!»`,`Sales del trabajo: «¡Venga, nos vemos luego! Que vaya bien la tarde.»`]},{es:`¡Cuídate!`,fr:`Prends soin de toi !`,context:`Au revoir affectueux`,level:`a1`,category:`saluer`,situations:[`Tu amiga se va de viaje: «¡Pásalo genial! ¡Cuídate mucho!»`]},{es:`¡Que tengas un buen día!`,fr:`Bonne journée !`,context:`Souhait courant`,level:`a1`,category:`saluer`,situations:[`Al cajero del supermercado: «Gracias, ¡que tenga un buen día!»`]},{es:`¡Cuánto tiempo sin verte!`,fr:`Ça fait longtemps qu'on ne s'est pas vus !`,context:`Retrouvailles`,level:`a2`,category:`saluer`,situations:[`Te encuentras con un antiguo compañero: «¡No me lo puedo creer! ¡Cuánto tiempo sin verte! ¿Cómo te va?»`]},{es:`¿Qué es de tu vida?`,fr:`Qu'est-ce que tu deviens ?`,context:`Retrouvailles / curiosité`,level:`a2`,category:`saluer`,situations:[`Ves a un viejo amigo: «¡Hombre, Juan! ¿Qué es de tu vida? ¿Sigues en Barcelona?»`]},{es:`¿Qué hay de nuevo?`,fr:`Quoi de neuf ?`,context:`Salutation entre amis`,level:`a2`,category:`saluer`,situations:[`Llegas al bar con amigos: «¡Buenas! ¿Qué hay de nuevo? ¿Qué me he perdido?»`]},{es:`Me llamo... / Soy...`,fr:`Je m'appelle... / Je suis...`,context:`Se présenter`,level:`a1`,category:`présenter`,situations:[`En una fiesta: «¡Hola! Me llamo Laura. ¿Y tú?»`,`En el trabajo: «Soy el nuevo programador. Encantado.»`]},{es:`Soy de Francia.`,fr:`Je viens de France.`,context:`Dire sa nationalité`,level:`a1`,category:`présenter`,situations:[`En un hostel: «Soy de Francia, de una ciudad que se llama Lyon. ¿Y tú, de dónde eres?»`]},{es:`Tengo ... años.`,fr:`J'ai ... ans.`,context:`Dire son âge`,level:`a1`,category:`présenter`,situations:[`Te preguntan: «—¿Cuántos años tienes? —Tengo veinticinco años.»`]},{es:`Estoy aprendiendo español.`,fr:`Je suis en train d'apprendre l'espagnol.`,context:`Parler de son apprentissage`,level:`a1`,category:`présenter`,situations:[`En un bar en España: «Perdona si hablo un poco raro, es que estoy aprendiendo español. ¡Pero me encanta!»`]},{es:`Trabajo como / en...`,fr:`Je travaille comme / chez...`,context:`Parler de son travail`,level:`a1`,category:`présenter`,situations:[`Conociéndose: «Trabajo como diseñador en una agencia en París. ¿Y tú a qué te dedicas?»`]},{es:`Llevo ... meses/años en España.`,fr:`Ça fait ... mois/ans que je suis en Espagne.`,context:`Durée de séjour`,level:`a2`,category:`présenter`,situations:[`Te preguntan cuánto tiempo llevas aquí: «Llevo seis meses en Madrid. Me vine por trabajo.»`]},{es:`¿A qué te dedicas?`,fr:`Tu fais quoi dans la vie ?`,context:`Demander la profession`,level:`a2`,category:`présenter`,situations:[`En una cena: «Oye, ¿a qué te dedicas? —Soy profesora de inglés en un instituto.»`]},{es:`Una mesa para dos, por favor.`,fr:`Une table pour deux, s'il vous plaît.`,context:`Arriver au restaurant`,level:`a1`,category:`restaurant`,situations:[`Entras al restaurante: «Buenas tardes. Una mesa para dos, por favor. ¿Tienen terraza?»`]},{es:`¿Qué me recomienda?`,fr:`Qu'est-ce que vous me recommandez ?`,context:`Demander conseil`,level:`a1`,category:`restaurant`,situations:[`Al camarero: «Es mi primera vez aquí. ¿Qué me recomienda? ¿Cuál es el plato estrella?»`]},{es:`Para mí, un/una...`,fr:`Pour moi, un/une...`,context:`Commander`,level:`a1`,category:`restaurant`,situations:[`Pedido: «Para mí, una ensalada y de segundo, el solomillo. Y para beber, un vino tinto.»`]},{es:`La cuenta, por favor.`,fr:`L'addition, s'il vous plaît.`,context:`Demander l'addition`,level:`a1`,category:`restaurant`,situations:[`Al final de la comida: «Oiga, la cuenta, por favor. —Sí, ahora mismo se la traigo.»`]},{es:`¿Está incluida la propina?`,fr:`Le pourboire est inclus ?`,context:`Pourboire`,level:`a2`,category:`restaurant`,situations:[`Al pagar: «Disculpe, ¿está incluida la propina o se deja aparte?»`]},{es:`Estaba todo riquísimo.`,fr:`Tout était délicieux.`,context:`Complimenter`,level:`a2`,category:`restaurant`,situations:[`Al irse: «Estaba todo riquísimo. ¡Volveremos seguro! Enhorabuena al chef.»`]},{es:`Soy alérgico/a a...`,fr:`Je suis allergique à...`,context:`Allergies alimentaires`,level:`a2`,category:`restaurant`,situations:[`Antes de pedir: «Perdone, soy alérgico a los frutos secos. ¿Este plato lleva?»`]},{es:`¿Tienen algo sin gluten?`,fr:`Vous avez quelque chose sans gluten ?`,context:`Régime alimentaire`,level:`a2`,category:`restaurant`,situations:[`Mirando la carta: «¿Tienen algo sin gluten? Es que soy celíaco/a.»`]},{es:`¿Me pone un café con leche?`,fr:`Vous me mettez un café au lait ?`,context:`Commander au bar (typiquement espagnol)`,level:`a1`,category:`restaurant`,situations:[`Au bar: «Buenos días, ¿me pone un café con leche y una tostada con tomate? Gracias.»`]},{es:`¿Qué llevan las tapas del día?`,fr:`C'est quoi les tapas du jour ?`,context:`Typiquement espagnol`,level:`a2`,category:`restaurant`,situations:[`En un bar de tapas: «Oiga, ¿qué llevan las tapas del día? ¿Son caseras?»`]},{es:`Perdone, ¿dónde está...?`,fr:`Excusez-moi, où se trouve... ?`,context:`Demander une direction`,level:`a1`,category:`chemin`,situations:[`En la calle: «Perdone, ¿dónde está la estación de metro más cercana?»`]},{es:`¿Cómo se llega a...?`,fr:`Comment on arrive à... ?`,context:`Demander l'itinéraire`,level:`a1`,category:`chemin`,situations:[`A un transeúnte: «Disculpe, ¿cómo se llega a la Plaza Mayor desde aquí?»`]},{es:`Siga todo recto.`,fr:`Continuez tout droit.`,context:`Donner une direction`,level:`a1`,category:`chemin`,situations:[`Te preguntan: «Siga todo recto y al final de la calle, gire a la izquierda. Está justo ahí.»`]},{es:`Gire a la derecha/izquierda.`,fr:`Tournez à droite/gauche.`,context:`Donner une direction`,level:`a1`,category:`chemin`,situations:[`«En el semáforo, gire a la derecha. Luego la segunda a la izquierda.»`]},{es:`Está al final de la calle.`,fr:`C'est au bout de la rue.`,context:`Localiser`,level:`a1`,category:`chemin`,situations:[`«El museo está al final de la calle, justo en la esquina. No tiene pérdida.»`]},{es:`¿Está lejos/cerca de aquí?`,fr:`C'est loin/près d'ici ?`,context:`Distance`,level:`a1`,category:`chemin`,situations:[`«¿Está lejos de aquí? —No, a unos cinco minutos andando.»`]},{es:`¿Se puede ir andando?`,fr:`On peut y aller à pied ?`,context:`Moyen de transport`,level:`a2`,category:`chemin`,situations:[`«¿Se puede ir andando o es mejor coger el metro? —Andando, son unos quince minutos.»`]},{es:`¿Cuánto cuesta?`,fr:`Combien ça coûte ?`,context:`Demander le prix`,level:`a1`,category:`achats`,situations:[`En una tienda: «Perdona, ¿cuánto cuesta esta camiseta? No tiene etiqueta.»`]},{es:`¿Tiene talla...?`,fr:`Vous avez la taille... ?`,context:`Vêtements`,level:`a1`,category:`achats`,situations:[`«Me gusta este vestido. ¿Tiene talla M? —Voy a mirar en el almacén.»`]},{es:`¿Puedo probármelo?`,fr:`Je peux l'essayer ?`,context:`Cabine d'essayage`,level:`a2`,category:`achats`,situations:[`«¿Puedo probármelo? —Claro, los probadores están al fondo a la derecha.»`]},{es:`Me lo llevo.`,fr:`Je le prends.`,context:`Acheter`,level:`a1`,category:`achats`,situations:[`Después de probarte algo: «Me queda perfecto. Me lo llevo. ¿Aceptan tarjeta?»`]},{es:`¿Aceptan tarjeta?`,fr:`Vous acceptez la carte ?`,context:`Paiement`,level:`a1`,category:`achats`,situations:[`En la caja: «¿Aceptan tarjeta o solo efectivo? —Aceptamos las dos cosas.»`]},{es:`¿Tienen algo más barato?`,fr:`Vous avez quelque chose de moins cher ?`,context:`Négocier`,level:`a2`,category:`achats`,situations:[`En el mercado: «Está un poco caro para mí. ¿Tienen algo más barato?»`]},{es:`¿Tienen rebajas?`,fr:`Vous avez des soldes ?`,context:`Soldes`,level:`a2`,category:`achats`,situations:[`En enero: «¿Ya han empezado las rebajas? ¿Cuánto descuento hacen?»`]},{es:`¿Quedamos mañana?`,fr:`On se voit demain ?`,context:`Proposer un plan`,level:`a2`,category:`plans`,situations:[`Por WhatsApp: «Oye, ¿quedamos mañana por la tarde? Podemos ir a tomar algo.»`]},{es:`¿A qué hora quedamos?`,fr:`À quelle heure on se retrouve ?`,context:`Fixer l'heure`,level:`a2`,category:`plans`,situations:[`«Vale, quedamos. ¿A qué hora quedamos? ¿Te va bien a las siete?»`]},{es:`¿Dónde quedamos?`,fr:`On se retrouve où ?`,context:`Fixer le lieu`,level:`a2`,category:`plans`,situations:[`«¿Dónde quedamos? ¿En el bar de siempre o prefieres otro sitio?»`]},{es:`¿Te apetece ir a...?`,fr:`Ça te dit d'aller à... ?`,context:`Proposer une activité`,level:`a2`,category:`plans`,situations:[`El sábado: «¿Te apetece ir a la playa este finde? Dicen que va a hacer buen tiempo.»`]},{es:`¡Me apunto!`,fr:`Je suis partant !`,context:`Accepter une invitation`,level:`a2`,category:`plans`,situations:[`«Vamos a cenar pizza esta noche. —¡Me apunto! ¿A qué hora?»`]},{es:`Lo siento, no puedo.`,fr:`Désolé, je ne peux pas.`,context:`Décliner`,level:`a1`,category:`plans`,situations:[`«¿Vienes al cine? —Lo siento, no puedo. Tengo que estudiar para el examen.»`]},{es:`¿Qué planes tienes para el fin de semana?`,fr:`Tu as quoi comme plans pour le week-end ?`,context:`Demander les plans`,level:`a2`,category:`plans`,situations:[`El viernes: «¿Qué planes tienes para el fin de semana? Yo creo que voy a ir al campo.»`]},{es:`¡Vamos a tomar algo!`,fr:`On va boire un verre !`,context:`Proposer un verre`,level:`a2`,category:`plans`,situations:[`Después del trabajo: «¿Qué tal si vamos a tomar algo? Conozco un bar nuevo que está genial.»`]},{es:`Me encanta...`,fr:`J'adore...`,context:`Goût très positif`,level:`a1`,category:`goûts`,situations:[`«Me encanta la paella. ¡Es mi plato favorito!»`,`«Me encanta Madrid, tiene una energía increíble.»`]},{es:`Me gusta mucho...`,fr:`J'aime beaucoup...`,context:`Goût positif`,level:`a1`,category:`goûts`,situations:[`«Me gusta mucho la música latina, sobre todo la salsa y el reggaetón.»`]},{es:`No me gusta nada...`,fr:`Je n'aime pas du tout...`,context:`Goût négatif fort`,level:`a1`,category:`goûts`,situations:[`«No me gusta nada levantarme temprano. Soy una persona nocturna.»`]},{es:`Prefiero... a...`,fr:`Je préfère... à...`,context:`Préférence`,level:`a2`,category:`goûts`,situations:[`«Prefiero el té al café, la verdad. El café me pone muy nervioso.»`]},{es:`No soporto...`,fr:`Je ne supporte pas...`,context:`Aversion forte`,level:`b1`,category:`goûts`,situations:[`«No soporto el ruido de la construcción. ¡Llevo tres meses con obras al lado de casa!»`]},{es:`Me da igual.`,fr:`Ça m'est égal.`,context:`Indifférence`,level:`a2`,category:`goûts`,situations:[`«¿Pizza o sushi? —Me da igual, lo que prefieras tú.»`]},{es:`Me flipa / Me mola (coloquial)`,fr:`Ça me kiffe / J'adore ça (familier)`,context:`Goût très positif (argot espagnol)`,level:`b1`,category:`goûts`,situations:[`«¡Me mola mucho tu camiseta! ¿Dónde la compraste?»`,`«¿Has visto la nueva serie? Me flipa, es buenísima.»`]},{es:`¿Dígame? / ¿Sí?`,fr:`Allô ? / Oui ?`,context:`Décrocher le téléphone (Espagne)`,level:`a2`,category:`téléphone`,situations:[`Suena el teléfono: «¿Dígame? —Hola, buenos días, le llamo de la clínica dental.»`]},{es:`¿Está ... , por favor?`,fr:`Est-ce que ... est là, s'il vous plaît ?`,context:`Demander quelqu'un`,level:`a2`,category:`téléphone`,situations:[`«Hola, ¿está Carlos, por favor? —Sí, un momento, ahora se pone.»`]},{es:`Un momento, ahora se pone.`,fr:`Un instant, je vous le/la passe.`,context:`Passer quelqu'un`,level:`a2`,category:`téléphone`,situations:[`«¿Puedo hablar con la directora? —Un momento, ahora se pone. No cuelgue.»`]},{es:`No cuelgues.`,fr:`Ne raccroche pas.`,context:`Maintenir la ligne`,level:`b1`,category:`téléphone`,situations:[`«Espera, no cuelgues, que te paso con mi compañero que sabe más del tema.»`]},{es:`Te llamo luego.`,fr:`Je te rappelle plus tard.`,context:`Fin d'appel`,level:`a2`,category:`téléphone`,situations:[`«Ahora no puedo hablar, estoy en una reunión. Te llamo luego, ¿vale?»`]},{es:`Se corta la llamada.`,fr:`L'appel coupe.`,context:`Problème technique`,level:`a2`,category:`téléphone`,situations:[`«¿Me oyes? Es que se corta la llamada. Voy a salir a la calle a ver si hay mejor cobertura.»`]},{es:`¡Ayuda!`,fr:`À l'aide !`,context:`Urgence`,level:`a1`,category:`urgence`,situations:[`En una emergencia: «¡Ayuda! ¡Que alguien llame a una ambulancia!»`]},{es:`Necesito un médico.`,fr:`J'ai besoin d'un médecin.`,context:`Urgence médicale`,level:`a1`,category:`urgence`,situations:[`En un hotel: «Por favor, necesito un médico. Me encuentro muy mal.»`]},{es:`¿Dónde está el hospital más cercano?`,fr:`Où est l'hôpital le plus proche ?`,context:`Trouver de l'aide`,level:`a2`,category:`urgence`,situations:[`A un transeúnte: «Disculpe, ¿dónde está el hospital más cercano? Es urgente.»`]},{es:`He perdido mi pasaporte.`,fr:`J'ai perdu mon passeport.`,context:`Perte de documents`,level:`a2`,category:`urgence`,situations:[`En el consulado: «Hola, he perdido mi pasaporte. ¿Qué tengo que hacer para sacar uno nuevo?»`]},{es:`Me han robado.`,fr:`On m'a volé.`,context:`Vol`,level:`a2`,category:`urgence`,situations:[`En la comisaría: «Me han robado el móvil en el metro. Quiero poner una denuncia.»`]},{es:`Me duele mucho...`,fr:`J'ai très mal à...`,context:`Douleur`,level:`a1`,category:`urgence`,situations:[`Al médico: «Me duele mucho la cabeza desde esta mañana. Y también la garganta.»`]},{es:`En mi opinión...`,fr:`À mon avis...`,context:`Donner son opinion`,level:`b1`,category:`opinion`,situations:[`En un debate: «En mi opinión, el teletrabajo es mucho más productivo.»`]},{es:`Creo que...`,fr:`Je crois que...`,context:`Exprimer une croyance`,level:`b1`,category:`opinion`,situations:[`«Creo que tienes razón, pero habría que pensarlo un poco más.»`]},{es:`Estoy de acuerdo.`,fr:`Je suis d'accord.`,context:`Approuver`,level:`a2`,category:`opinion`,situations:[`«Estoy totalmente de acuerdo contigo. Es exactamente lo que pienso.»`]},{es:`No estoy de acuerdo.`,fr:`Je ne suis pas d'accord.`,context:`Désapprouver`,level:`a2`,category:`opinion`,situations:[`«Lo siento, pero no estoy de acuerdo. Creo que hay otras opciones.»`]},{es:`Depende.`,fr:`Ça dépend.`,context:`Nuancer`,level:`a2`,category:`opinion`,situations:[`«¿Es mejor vivir en la ciudad o en el campo? —Depende de lo que busques.»`]},{es:`Tienes razón.`,fr:`Tu as raison.`,context:`Confirmer`,level:`a2`,category:`opinion`,situations:[`«Tienes razón, debería haberlo hecho antes. La próxima vez no lo dejo para el final.»`]},{es:`No tiene sentido.`,fr:`Ça n'a pas de sens.`,context:`Critiquer une idée`,level:`b1`,category:`opinion`,situations:[`«No tiene sentido pagar tanto por algo que puedes hacer tú mismo.»`]},{es:`Por un lado... por otro lado...`,fr:`D'un côté... de l'autre...`,context:`Structurer un argument`,level:`b1`,category:`opinion`,situations:[`«Por un lado, vivir en la ciudad es muy cómodo. Pero por otro lado, el campo es mucho más tranquilo.»`]},{es:`¡Qué va!`,fr:`Mais non ! / Pas du tout !`,context:`Contredire (très courant)`,level:`b1`,category:`opinion`,situations:[`«¿Te molesta que ponga música? —¡Qué va! Pon lo que quieras.»`]},{es:`Desde mi punto de vista...`,fr:`De mon point de vue...`,context:`Opinion formelle`,level:`b2`,category:`opinion`,situations:[`Dans un exposé: «Desde mi punto de vista, la educación debería ser completamente gratuita.»`]},{es:`¡Qué alegría!`,fr:`Quelle joie ! / Je suis trop content !`,context:`Exprimer la joie`,level:`a2`,category:`sentiments`,situations:[`«¡Has aprobado el examen! ¡Qué alegría! Sabía que lo ibas a conseguir.»`]},{es:`Estoy harto/a de...`,fr:`J'en ai marre de...`,context:`Exprimer l'agacement`,level:`b1`,category:`sentiments`,situations:[`«Estoy harto de este calor. ¡Quiero que llegue el otoño ya!»`]},{es:`Me da mucha pereza.`,fr:`J'ai trop la flemme.`,context:`Paresse (très espagnol)`,level:`a2`,category:`sentiments`,situations:[`Le dimanche: «Me da mucha pereza ir al gimnasio hoy. ¿Y si nos quedamos en el sofá?»`]},{es:`¡Qué ilusión!`,fr:`Je suis trop excité / J'ai trop hâte !`,context:`Excitation positive (mot très espagnol)`,level:`a2`,category:`sentiments`,situations:[`«¡Me han regalado entradas para el concierto! ¡Qué ilusión! ¡No me lo puedo creer!»`]},{es:`Me da rabia.`,fr:`Ça me rend dingue / Ça m'énerve.`,context:`Frustration`,level:`b1`,category:`sentiments`,situations:[`«Me da rabia haber llegado tarde. El tren se fue justo delante de mis narices.»`]},{es:`Me da vergüenza.`,fr:`J'ai honte / Ça me gêne.`,context:`Gêne`,level:`a2`,category:`sentiments`,situations:[`«Me da vergüenza hablar español delante de nativos. Me pongo nervioso.»`]},{es:`Echo de menos...`,fr:`... me manque.`,context:`Nostalgie / manque`,level:`b1`,category:`sentiments`,situations:[`«Echo de menos la comida de mi abuela. Nadie cocina como ella.»`,`«Echo mucho de menos a mis amigos de España.»`]},{es:`¿Tienes habitaciones libres?`,fr:`Vous avez des chambres disponibles ?`,context:`À l'hôtel`,level:`a2`,category:`logement`,situations:[`«Buenas tardes, ¿tienen habitaciones libres para esta noche? Somos dos personas.»`]},{es:`¿A qué hora es el check-out?`,fr:`Le check-out c'est à quelle heure ?`,context:`Hôtel`,level:`a2`,category:`logement`,situations:[`«Disculpe, ¿a qué hora es el check-out? ¿Puedo salir un poco más tarde?»`]},{es:`Se ha roto / No funciona...`,fr:`C'est cassé / ça ne marche pas...`,context:`Signaler un problème`,level:`a2`,category:`logement`,situations:[`«Perdone, no funciona la ducha de la habitación. ¿Pueden enviar a alguien?»`]},{es:`¿Me puede dar la contraseña del wifi?`,fr:`Vous pouvez me donner le mot de passe du wifi ?`,context:`Connexion internet`,level:`a1`,category:`logement`,situations:[`Au café: «Disculpe, ¿me puede dar la contraseña del wifi? —Sí, claro: está en el ticket.»`]}],idioms:[{es:`Estar como una cabra`,fr:`Être dingue / cinglé`,literal:`Être comme une chèvre`,equivalent:`🇫🇷 Être timbré(e)`,context:`Quelqu'un qui se comporte de façon folle`,level:`b1`,category:`humeur`,situations:[`«Mi vecino sale a correr a las 5 de la mañana con este frío. ¡Está como una cabra!»`,`«—¿Sabes que Laura se ha tirado en paracaídas? —¡Está como una cabra esa chica!»`]},{es:`Tener mala leche`,fr:`Être de mauvaise humeur / méchant`,literal:`Avoir du mauvais lait`,equivalent:`🇫🇷 Avoir un sale caractère`,context:`Personne désagréable ou situation de malchance`,level:`b1`,category:`humeur`,situations:[`«No hables con el jefe hoy, tiene muy mala leche. Le han cancelado las vacaciones.»`,`«¡Qué mala leche! Justo se me ha pinchado la rueda ahora que llego tarde.»`]},{es:`Estar hasta las narices`,fr:`En avoir marre`,literal:`Être jusqu'aux narines`,equivalent:`🇫🇷 En avoir ras-le-bol`,context:`Être exaspéré par une situation`,level:`b1`,category:`humeur`,situations:[`«Estoy hasta las narices del vecino de arriba. Pone la música a todo volumen a las 2 de la mañana.»`]},{es:`Ponerse las pilas`,fr:`Se bouger / se motiver`,literal:`Se mettre les piles`,equivalent:`🇫🇷 Se secouer`,context:`Quand quelqu'un doit être plus actif`,level:`b1`,category:`humeur`,situations:[`«Si quieres aprobar el examen, tienes que ponerte las pilas ya. Solo quedan dos semanas.»`]},{es:`No tener pelos en la lengua`,fr:`Dire ce qu'on pense franchement`,literal:`Ne pas avoir de poils sur la langue`,equivalent:`🇫🇷 Ne pas mâcher ses mots`,context:`Quelqu'un de très direct`,level:`b2`,category:`humeur`,situations:[`«Mi abuela no tiene pelos en la lengua. Si no le gusta algo, te lo dice a la cara.»`]},{es:`Dar en el clavo`,fr:`Tomber juste / Avoir raison`,literal:`Taper sur le clou`,equivalent:`🇫🇷 Mettre le doigt dessus / dans le mille`,context:`Trouver exactement la bonne réponse`,level:`b1`,category:`humeur`,situations:[`«Has dado en el clavo con el problema. Era exactamente eso lo que fallaba.»`]},{es:`Flipar (en colores)`,fr:`Halluciner / Être choqué`,literal:`Flipper (en couleurs)`,equivalent:`🇫🇷 Halluciner`,context:`Être très surpris, souvent négativement`,level:`b1`,category:`humeur`,situations:[`«¡Estoy flipando! ¿Has visto lo que cuesta un café aquí? ¡Cuatro euros!»`,`«Flipé en colores cuando me enteré de que había aprobado.»`]},{es:`Ser un borde`,fr:`Être désagréable / sec`,literal:`Être un bord`,equivalent:`🇫🇷 Être un malpoli`,context:`Personne froide et peu aimable`,level:`b1`,category:`humeur`,situations:[`«El camarero era un borde. Le pedí la carta y ni me miró.»`]},{es:`Llevarse como el perro y el gato`,fr:`S'entendre très mal`,literal:`S'entendre comme le chien et le chat`,equivalent:`🇫🇷 S'entendre comme chien et chat`,context:`Deux personnes qui se disputent toujours`,level:`b1`,category:`relations`,situations:[`«Mis hijos se llevan como el perro y el gato. No paran de discutir por todo.»`]},{es:`Caer bien/mal a alguien`,fr:`Plaire/déplaire à quelqu'un`,literal:`Tomber bien/mal à quelqu'un`,equivalent:`🇫🇷 Faire bonne/mauvaise impression`,context:`Impression que fait quelqu'un`,level:`a2`,category:`relations`,situations:[`«Ana me cae muy bien, es muy simpática. Pero su novio me cae fatal.»`]},{es:`Tomar el pelo`,fr:`Se moquer gentiment / plaisanter`,literal:`Prendre le poil`,equivalent:`🇫🇷 Faire marcher quelqu'un`,context:`Quand quelqu'un se moque de vous`,level:`b1`,category:`relations`,situations:[`«¿Me estás tomando el pelo? No me creo que hayas ganado la lotería.»`]},{es:`Echar una mano`,fr:`Donner un coup de main`,literal:`Lancer une main`,equivalent:`🇫🇷 Filer un coup de main`,context:`Proposer ou demander de l'aide`,level:`a2`,category:`relations`,situations:[`«¿Me echas una mano con la mudanza el sábado? Te invito a comer después.»`]},{es:`Ser uña y carne`,fr:`Être inséparables`,literal:`Être ongle et chair`,equivalent:`🇫🇷 Être comme cul et chemise`,context:`Deux amis très proches`,level:`b2`,category:`relations`,situations:[`«Carlos y yo somos uña y carne desde pequeños. Hemos crecido juntos.»`]},{es:`Pillar el rollo`,fr:`Capter le truc / Comprendre`,literal:`Attraper le rouleau`,equivalent:`🇫🇷 Piger`,context:`Comprendre qqch de subtil`,level:`b1`,category:`relations`,situations:[`«Al principio no pillaba el rollo de las tapas en España, pero ahora me encanta.»`]},{es:`Quedar con alguien`,fr:`Retrouver quelqu'un / avoir rendez-vous`,literal:`Rester avec quelqu'un`,equivalent:`🇫🇷 Se retrouver avec quelqu'un`,context:`Voir des gens (usage quotidien)`,level:`a2`,category:`relations`,situations:[`«He quedado con María a las ocho para tomar unas cañas. ¿Te apuntas?»`]},{es:`Costar un ojo de la cara`,fr:`Coûter les yeux de la tête`,literal:`Coûter un œil du visage`,equivalent:`🇫🇷 Coûter les yeux de la tête`,context:`Quelque chose de très cher`,level:`b1`,category:`argent`,situations:[`«El alquiler en Madrid cuesta un ojo de la cara. Pago mil euros por un piso pequeñísimo.»`]},{es:`Estar sin blanca / No tener un duro`,fr:`Être fauché`,literal:`Être sans blanc / Ne pas avoir un sou`,equivalent:`🇫🇷 Ne pas avoir un rond`,context:`Ne pas avoir d'argent`,level:`b1`,category:`argent`,situations:[`«No puedo ir de vacaciones este año. Estoy sin blanca después de la boda.»`]},{es:`Vivir del cuento`,fr:`Vivre sans rien faire`,literal:`Vivre du conte`,equivalent:`🇫🇷 Vivre aux crochets`,context:`Quelqu'un qui ne travaille pas et profite`,level:`b2`,category:`argent`,situations:[`«Su hermano vive del cuento. Tiene treinta años y sigue viviendo de sus padres.»`]},{es:`Arrimar el hombro`,fr:`Retrousser ses manches / s'y mettre`,literal:`Rapprocher l'épaule`,equivalent:`🇫🇷 Mettre la main à la pâte`,context:`Aider / contribuer à un effort`,level:`b2`,category:`argent`,situations:[`«Si todos arrimamos el hombro, terminamos el proyecto hoy. Venga, ¡a trabajar!»`]},{es:`Ir tirando`,fr:`S'en sortir / aller cahin-caha`,literal:`Aller en tirant`,equivalent:`🇫🇷 Faire aller / tenir le coup`,context:`Quand ça va pas super mais on survit`,level:`b1`,category:`argent`,situations:[`«¿Cómo va el negocio? —Bueno, vamos tirando. No nos hacemos ricos pero no nos quejamos.»`]},{es:`Estar como un queso`,fr:`Être très beau/belle`,literal:`Être comme un fromage`,equivalent:`🇫🇷 Être canon`,context:`Complimenter le physique (familier, Espagne)`,level:`b1`,category:`nourriture_expr`,situations:[`«¿Has visto al profesor nuevo? ¡Está como un queso!»`]},{es:`Ser pan comido`,fr:`Être facile`,literal:`Être du pain mangé`,equivalent:`🇫🇷 Être du gâteau / les doigts dans le nez`,context:`Quelque chose de très facile`,level:`b1`,category:`nourriture_expr`,situations:[`«No te preocupes por el examen, es pan comido. Solo tienes que estudiar los verbos.»`]},{es:`Dar calabazas`,fr:`Rejeter quelqu'un (en amour)`,literal:`Donner des citrouilles`,equivalent:`🇫🇷 Se prendre un râteau`,context:`Quand quelqu'un refuse une avance amoureuse`,level:`b2`,category:`nourriture_expr`,situations:[`«Le pidió salir a Ana, pero ella le dio calabazas. No le gustaba.»`]},{es:`Me importa un pepino / pimiento`,fr:`Je m'en fiche complètement`,literal:`Ça m'importe un concombre/poivron`,equivalent:`🇫🇷 Je m'en fiche comme de ma première chemise`,context:`Exprimer l'indifférence`,level:`b1`,category:`nourriture_expr`,situations:[`«¿Que dice la gente? Me importa un pepino lo que piensen los demás.»`]},{es:`Estar en su salsa`,fr:`Être dans son élément`,literal:`Être dans sa sauce`,equivalent:`🇫🇷 Être comme un poisson dans l'eau`,context:`Être à l'aise`,level:`b1`,category:`nourriture_expr`,situations:[`«Ponle una guitarra y está en su salsa. Se puede pasar horas tocando.»`]},{es:`Meter la pata`,fr:`Faire une gaffe`,literal:`Mettre la patte`,equivalent:`🇫🇷 Mettre les pieds dans le plat`,context:`Dire ou faire quelque chose de maladroit`,level:`b1`,category:`situations`,situations:[`«Metí la pata en la cena. Le pregunté a su ex cómo estaba su novia… ¡sin saber que habían roto!»`]},{es:`Quedarse de piedra`,fr:`Être abasourdi / choqué`,literal:`Rester de pierre`,equivalent:`🇫🇷 Rester bouche bée`,context:`Être très surpris par quelque chose`,level:`b1`,category:`situations`,situations:[`«Cuando me dijeron que me habían dado el trabajo, me quedé de piedra. ¡No me lo esperaba!»`]},{es:`Tirar la toalla`,fr:`Abandonner`,literal:`Jeter la serviette`,equivalent:`🇫🇷 Jeter l'éponge`,context:`Renoncer après un effort`,level:`b1`,category:`situations`,situations:[`«Llevamos dos horas intentando montar este mueble. ¿Tiramos la toalla? —¡Ni hablar, seguimos!»`]},{es:`Ir al grano`,fr:`Aller droit au but`,literal:`Aller au grain`,equivalent:`🇫🇷 Ne pas tourner autour du pot`,context:`Parler directement de l'essentiel`,level:`b1`,category:`situations`,situations:[`En una réunion: «Bueno, vamos al grano. Tenemos tres temas que discutir y poco tiempo.»`]},{es:`Más vale tarde que nunca`,fr:`Mieux vaut tard que jamais`,literal:`Il vaut mieux tard que jamais`,equivalent:`🇫🇷 Mieux vaut tard que jamais`,context:`Consoler quand quelque chose arrive en retard`,level:`a2`,category:`situations`,situations:[`«—Perdona por llegar tarde, el tráfico estaba fatal. —¡Bueno, más vale tarde que nunca!»`]},{es:`No hay mal que por bien no venga`,fr:`À quelque chose malheur est bon`,literal:`Il n'y a pas de mal qui ne vienne pas pour le bien`,equivalent:`🇫🇷 Chaque nuage a une doublure argentée`,context:`Voir le positif dans une mauvaise situation`,level:`b2`,category:`situations`,situations:[`«Me echaron del trabajo, pero gracias a eso empecé mi propio negocio. No hay mal que por bien no venga.»`]},{es:`Estar en las nubes`,fr:`Être dans la lune`,literal:`Être dans les nuages`,equivalent:`🇫🇷 Être dans la lune`,context:`Être distrait, rêveur`,level:`b1`,category:`situations`,situations:[`«¡Oye! ¿Me estás escuchando? Estás en las nubes otra vez.»`]},{es:`Llover a cántaros`,fr:`Pleuvoir à verse`,literal:`Pleuvoir à cruches`,equivalent:`🇫🇷 Pleuvoir des cordes`,context:`Pluie très forte`,level:`b1`,category:`situations`,situations:[`«No salgas ahora, que está lloviendo a cántaros. Espera un rato a que pare.»`]},{es:`Hacer la vista gorda`,fr:`Fermer les yeux (sur quelque chose)`,literal:`Faire la vue grosse`,equivalent:`🇫🇷 Fermer les yeux`,context:`Ignorer volontairement un problème`,level:`b2`,category:`situations`,situations:[`«El profesor hizo la vista gorda y no nos puso falta aunque llegamos tarde.»`]},{es:`No tener ni pies ni cabeza`,fr:`N'avoir ni queue ni tête`,literal:`N'avoir ni pieds ni tête`,equivalent:`🇫🇷 N'avoir ni queue ni tête`,context:`Quelque chose d'illogique`,level:`b2`,category:`situations`,situations:[`«Su excusa no tiene ni pies ni cabeza. Es obvio que se lo ha inventado.»`]},{es:`Pasarlo bomba`,fr:`S'éclater / s'amuser comme des fous`,literal:`Le passer bombe`,equivalent:`🇫🇷 S'éclater`,context:`S'amuser énormément`,level:`b1`,category:`situations`,situations:[`«¡Lo pasamos bomba en la fiesta de anoche! Estuvimos bailando hasta las cuatro de la mañana.»`]},{es:`¡Ni de broma!`,fr:`Hors de question ! / Tu rêves !`,literal:`Même pas en blague !`,equivalent:`🇫🇷 Même pas en rêve !`,context:`Refus catégorique`,level:`b1`,category:`situations`,situations:[`«¿Que me lance en paracaídas? ¡Ni de broma! ¡Me dan pánico las alturas!»`]},{es:`Matar el tiempo`,fr:`Tuer le temps`,literal:`Tuer le temps`,equivalent:`🇫🇷 Tuer le temps`,context:`Passer le temps en attendant`,level:`b1`,category:`situations`,situations:[`«Estuve matando el tiempo en la sala de espera mirando el móvil hasta que me llamaron.»`]}]},qe={everyday:[{id:`saluer`,name:`Saluer`,emoji:`👋`},{id:`présenter`,name:`Se présenter`,emoji:`🙋`},{id:`restaurant`,name:`Au restaurant`,emoji:`🍽️`},{id:`chemin`,name:`Demander son chemin`,emoji:`🗺️`},{id:`achats`,name:`Faire des achats`,emoji:`🛍️`},{id:`plans`,name:`Plans & rendez-vous`,emoji:`📅`},{id:`goûts`,name:`Goûts & préférences`,emoji:`❤️`},{id:`téléphone`,name:`Au téléphone`,emoji:`📱`},{id:`urgence`,name:`Urgences`,emoji:`🚨`},{id:`opinion`,name:`Opinions & débat`,emoji:`💭`},{id:`sentiments`,name:`Sentiments`,emoji:`😊`},{id:`logement`,name:`Logement & quotidien`,emoji:`🏠`}],idioms:[{id:`humeur`,name:`Humeur & caractère`,emoji:`😤`},{id:`relations`,name:`Relations`,emoji:`🤝`},{id:`argent`,name:`Travail & argent`,emoji:`💰`},{id:`nourriture_expr`,name:`Nourriture (expressions)`,emoji:`🍕`},{id:`situations`,name:`Situations`,emoji:`🎭`}]},z=`everyday`,B=null;async function Je(){let e=document.createElement(`div`);return e.innerHTML=`
    <div class="page-header">
      <h1>Phrases & Expressions 💬</h1>
      <p class="subtitle">Des trucs utiles que les gens disent vraiment</p>
    </div>
    
    <div style="padding: 0 var(--space-md);">
      <div style="display: flex; gap: var(--space-sm); margin-bottom: var(--space-md);">
        <button class="btn ${z===`everyday`?`btn-primary`:`btn-secondary`}" data-tab="everyday" style="flex: 1;">
          🗣️ Phrases utiles
        </button>
        <button class="btn ${z===`idioms`?`btn-primary`:`btn-secondary`}" data-tab="idioms" style="flex: 1;">
          🎭 Expressions
        </button>
      </div>
    </div>
    
    <div id="category-chips" style="padding: 0 var(--space-md);"></div>
    <div id="phrases-list" style="margin-top: var(--space-md);"></div>
  `,setTimeout(()=>{e.querySelectorAll(`[data-tab]`).forEach(t=>{t.addEventListener(`click`,()=>{z=t.dataset.tab,B=null,e.querySelectorAll(`[data-tab]`).forEach(e=>{e.className=`btn ${e.dataset.tab===z?`btn-primary`:`btn-secondary`}`,e.style.flex=`1`}),Ye(e),Xe(e)})}),Ye(e),Xe(e)},0),e}function Ye(e){let t=e.querySelector(`#category-chips`),n=qe[z]||[];t.innerHTML=`
    <div class="chip-group">
      <button class="chip ${B?``:`active`}" data-cat="all">Toutes</button>
      ${n.map(e=>`
        <button class="chip ${B===e.id?`active`:``}" data-cat="${e.id}">
          ${e.emoji} ${e.name}
        </button>
      `).join(``)}
    </div>
  `,t.querySelectorAll(`.chip`).forEach(n=>{n.addEventListener(`click`,()=>{t.querySelectorAll(`.chip`).forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),B=n.dataset.cat===`all`?null:n.dataset.cat,Xe(e)})})}function Xe(e){let t=e.querySelector(`#phrases-list`),n=Ke[z]||[];if(B&&(n=n.filter(e=>e.category===B)),n.length===0){t.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">💬</div>
        <div class="empty-title">Aucune phrase</div>
        <div class="empty-text">Sélectionne une autre catégorie.</div>
      </div>
    `;return}t.innerHTML=z===`everyday`?n.map(e=>{let t=(e.situations||[]).map(e=>`
        <div class="phrase-situation">💡 ${e}</div>
      `).join(``);return`
      <div class="phrase-card">
        <div class="phrase-es">${e.es}</div>
        <div class="phrase-fr">${e.fr}</div>
        <div class="phrase-context">📍 ${e.context}</div>
        ${t?`<div class="phrase-situations">${t}</div>`:``}
        <div style="display: flex; align-items: center; gap: var(--space-sm); margin-top: var(--space-sm);">
          <button class="phrase-audio-btn" data-speak="${e.es}">🔊 Écouter</button>
          <span class="level-tag ${e.level}">${e.level.toUpperCase()}</span>
        </div>
      </div>
    `}).join(``):n.map(e=>{let t=(e.situations||[]).map(e=>`
        <div class="phrase-situation">💡 ${e}</div>
      `).join(``);return`
      <div class="phrase-card">
        <div class="phrase-es" style="font-size: var(--font-lg);">${e.es}</div>
        <div class="phrase-fr" style="font-weight: 600; color: var(--accent-primary-light);">${e.fr}</div>
        <div class="phrase-literal">📖 Litt. : "${e.literal}"</div>
        <div style="font-size: var(--font-xs); color: var(--text-secondary); margin-top: var(--space-xs);">
          ${e.equivalent}
        </div>
        <div class="phrase-context">📍 ${e.context}</div>
        ${t?`<div class="phrase-situations">${t}</div>`:``}
        <div style="display: flex; align-items: center; gap: var(--space-sm); margin-top: var(--space-sm);">
          <button class="phrase-audio-btn" data-speak="${e.es}">🔊 Écouter</button>
          <span class="level-tag ${e.level}">${e.level.toUpperCase()}</span>
        </div>
      </div>
    `}).join(``),t.querySelectorAll(`[data-speak]`).forEach(e=>{e.addEventListener(`click`,()=>x(e.dataset.speak))})}var V=[],Ze=0,H=!1,U={total:0,correct:0,startTime:0};async function Qe(){let e=await E.cards.toArray();if(we(e)===0)return $e();V=Ce(e,20),Ze=0,U={total:V.length,correct:0,startTime:Date.now()};let t=document.createElement(`div`);return t.innerHTML=`
    <div class="page-header">
      <h1>Révision 🔄</h1>
      <p class="subtitle">${V.length} carte${V.length>1?`s`:``} à réviser</p>
    </div>
    <div id="review-area"></div>
  `,setTimeout(()=>et(t),0),t}function $e(){let e=document.createElement(`div`);return e.innerHTML=`
    <div class="page-header">
      <h1>Révision 🔄</h1>
    </div>
    <div class="review-summary">
      <div class="summary-icon">✅</div>
      <h2>Tout est à jour !</h2>
      <p style="color: var(--text-secondary); margin-top: var(--space-sm);">
        Tu n'as aucune carte à réviser pour le moment.<br>
        Reviens plus tard ou apprends de nouveaux mots !
      </p>
      <div style="display: flex; gap: var(--space-md); justify-content: center; margin-top: var(--space-xl);">
        <button class="btn btn-primary" id="goto-flash">🃏 Flash Cards</button>
        <button class="btn btn-secondary" id="goto-courses">📖 Cours</button>
      </div>
    </div>
  `,setTimeout(()=>{e.querySelector(`#goto-flash`)?.addEventListener(`click`,()=>p(`/flashcards`)),e.querySelector(`#goto-courses`)?.addEventListener(`click`,()=>p(`/courses`))},0),e}function et(e){let t=e.querySelector(`#review-area`);if(!t)return;if(Ze>=V.length){tt(t);return}let n=V[Ze];H=!1;let r=``,i=``;n.type===`vocabulary`?(r=`
      <div class="flashcard-word">${n.data.es}</div>
      <div class="flashcard-hint">Quelle est la traduction ?</div>
    `,i=`
      <div class="flashcard-translation">${n.data.fr}</div>
      ${n.data.example?`<div class="flashcard-example">"${n.data.example}"</div>`:``}
    `):n.type===`grammar`?(r=`
      <div style="font-size: var(--font-md); font-weight: 600;">${n.data.question}</div>
      <div class="flashcard-hint" style="margin-top: var(--space-lg);">Tu connais la réponse ?</div>
    `,i=`
      <div class="flashcard-translation">${n.data.answer}</div>
      <div class="flashcard-example">${n.data.lesson}</div>
    `):(r=`
      <div class="flashcard-word">${n.data.es||n.data.question||``}</div>
      <div class="flashcard-hint">Touche pour retourner</div>
    `,i=`
      <div class="flashcard-translation">${n.data.fr||n.data.answer||``}</div>
    `),t.innerHTML=`
    <div class="flashcard-progress">
      <span>${Ze+1}/${V.length}</span>
      <div class="progress-bar">
        <div class="progress-bar-fill" style="width: ${(Ze+1)/V.length*100}%"></div>
      </div>
    </div>
    
    <div class="flashcard-container">
      <div class="flashcard" id="review-flashcard">
        <div class="flashcard-face flashcard-front">
          ${n.data.es?`<button class="flashcard-audio-btn" id="review-audio">🔊</button>`:``}
          <span class="flashcard-category">
            <span class="level-tag ${n.data.level||``}">${(n.data.level||``).toUpperCase()}</span>
          </span>
          ${r}
        </div>
        <div class="flashcard-face flashcard-back">
          ${i}
        </div>
      </div>
    </div>
    
    <div class="flashcard-actions" id="review-actions" style="opacity: 0; pointer-events: none; transition: opacity 0.3s;">
      <button class="flashcard-action-btn btn-fail" data-quality="${k.INCORRECT}">
        <span>😵</span>
        <span>Raté</span>
      </button>
      <button class="flashcard-action-btn btn-hard" data-quality="${k.DIFFICULT}">
        <span>🤔</span>
        <span>Difficile</span>
      </button>
      <button class="flashcard-action-btn btn-good" data-quality="${k.GOOD}">
        <span>😊</span>
        <span>Bien</span>
      </button>
      <button class="flashcard-action-btn btn-easy" data-quality="${k.PERFECT}">
        <span>🤩</span>
        <span>Facile</span>
      </button>
    </div>
  `;let a=t.querySelector(`#review-flashcard`),o=t.querySelector(`#review-actions`);a?.addEventListener(`click`,e=>{e.target.closest(`.flashcard-audio-btn`)||(H=!H,a.classList.toggle(`flipped`,H),H&&(o.style.opacity=`1`,o.style.pointerEvents=`auto`))}),t.querySelector(`#review-audio`)?.addEventListener(`click`,e=>{e.stopPropagation(),x(n.data.es)}),t.querySelectorAll(`.flashcard-action-btn`).forEach(t=>{t.addEventListener(`click`,async()=>{let r=parseInt(t.dataset.quality),i=Se(n,r);await E.cards.put(i),await O(r>=3,Date.now()-U.startTime),r>=3&&U.correct++,await it(),Ze++,et(e)})})}function tt(e){let t=U.total>0?Math.round(U.correct/U.total*100):0;e.innerHTML=`
    <div class="review-summary scale-in">
      <div class="summary-icon">${t>=80?`🏆`:t>=50?`💪`:`📚`}</div>
      <h2>Session terminée !</h2>
      
      <div class="summary-stats">
        <div class="stat-card">
          <div class="stat-value" style="color: var(--accent-primary-light)">${U.total}</div>
          <div class="stat-label">Révisées</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" style="color: var(--color-success-light)">${U.correct}</div>
          <div class="stat-label">Correctes</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" style="color: var(--accent-secondary-light)">${t}%</div>
          <div class="stat-label">Précision</div>
        </div>
      </div>
      
      <div style="display: flex; gap: var(--space-md); justify-content: center; flex-wrap: wrap;">
        <button class="btn btn-primary" id="review-done">🏠 Retour à l'accueil</button>
      </div>
    </div>
  `,e.querySelector(`#review-done`)?.addEventListener(`click`,()=>p(`/`)),at(`Session terminée — ${t}% de réussite !`)}async function nt(){let e=await E.cards.toArray(),t=await E.lessons.where(`completed`).equals(1).count(),n=j.length,r=e.length,i=e.filter(e=>e.repetition>=3&&e.efactor>=2.5).length,a=e.filter(e=>e.repetition>0&&e.repetition<3).length,o=e.filter(e=>e.repetition===0).length,s=Date.now(),c=864e5,l=new Date(s-7*c);l.setHours(0,0,0,0);let u=await E.dailyStats.where(`date`).above(l.toISOString().slice(0,10)).toArray(),d=0,f=new Date().toISOString().slice(0,10),p=await E.dailyStats.orderBy(`date`).reverse().toArray(),m=new Date;for(let e=0;e<365;e++){let e=m.toISOString().slice(0,10),t=p.find(t=>t.date===e);if(t&&t.cardsReviewed>0)d++,m.setDate(m.getDate()-1);else if(e===f){m.setDate(m.getDate()-1);continue}else break}let h=[`Lun`,`Mar`,`Mer`,`Jeu`,`Ven`,`Sam`,`Dim`],g=[];for(let e=6;e>=0;e--){let t=new Date(s-e*c),n=t.toISOString().slice(0,10),r=u.find(e=>e.date===n);g.push({day:h[t.getDay()===0?6:t.getDay()-1],count:r?r.cardsReviewed:0})}let _=Math.max(...g.map(e=>e.count),1),v=document.createElement(`div`);return v.innerHTML=`
    <div class="page-header">
      <h1>Statistiques 📊</h1>
      <p class="subtitle">Suis ta progression</p>
    </div>
    
    ${d>0?`
      <div style="padding: 0 var(--space-md); margin-bottom: var(--space-md);">
        <div class="streak-indicator" style="font-size: var(--font-lg);">
          🔥 ${d} jour${d>1?`s`:``} consécutif${d>1?`s`:``}
        </div>
      </div>
    `:``}

    <div class="stats-grid" style="grid-template-columns: repeat(2, 1fr);">
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-primary-light)">${r}</div>
        <div class="stat-label">Cartes totales</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--color-success-light)">${i}</div>
        <div class="stat-label">Maîtrisées</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-secondary-light)">${a}</div>
        <div class="stat-label">En cours</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--text-secondary)">${o}</div>
        <div class="stat-label">Nouvelles</div>
      </div>
    </div>

    <div class="dashboard-section" style="margin-top: var(--space-xl);">
      <div class="section-title">
        <h2>Cette semaine</h2>
      </div>
      <div class="card">
        <div class="week-chart">
          ${g.map(e=>`
            <div class="chart-bar-container">
              <div class="chart-bar" style="height: ${e.count>0?Math.max(e.count/_*100,8):4}%; ${e.count>0?`background: var(--gradient-primary);`:`background: var(--bg-surface-2); min-height: 4px;`}">
              </div>
              <div class="chart-count">${e.count}</div>
              <div class="chart-day">${e.day}</div>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>

    <div class="dashboard-section" style="margin-top: var(--space-xl);">
      <div class="section-title">
        <h2>Cours de grammaire</h2>
        <span class="section-link">${t}/${n}</span>
      </div>
      <div class="progress-bar" style="margin-bottom: var(--space-md);">
        <div class="progress-bar-fill animate" style="width: ${t/n*100}%"></div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-sm);">
        ${[`a1`,`a2`,`b1`,`b2`].map(e=>{let t=j.filter(t=>t.level===e).length;return`
            <div class="stat-card" style="padding: var(--space-sm);">
              <div class="stat-value" style="font-size: var(--font-md); color: var(--color-${e})">${e.toUpperCase()}</div>
              <div class="stat-label">${t} leçons</div>
            </div>
          `}).join(``)}
      </div>
    </div>

    ${r>0?`
    <div class="dashboard-section" style="margin-top: var(--space-xl);">
      <div class="section-title">
        <h2>Répartition SRS</h2>
      </div>
      <div class="card">
        <div class="srs-distribution">
          <div class="srs-segment" style="flex: ${Math.max(o,1)}; background: var(--text-muted);" title="Nouvelles"></div>
          <div class="srs-segment" style="flex: ${Math.max(a,1)}; background: var(--accent-secondary-light);" title="En cours"></div>
          <div class="srs-segment" style="flex: ${Math.max(i,1)}; background: var(--color-success-light);" title="Maîtrisées"></div>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: var(--space-sm); font-size: var(--font-xs); color: var(--text-secondary);">
          <span>🟤 Nouvelles</span>
          <span>🟣 En cours</span>
          <span>🟢 Maîtrisées</span>
        </div>
      </div>
    </div>
    `:``}
  `,v}async function rt(){let e=document.getElementById(`app`);await _e(),b();let t=we(await E.cards.toArray());e.innerHTML=`
    <nav class="bottom-nav" id="bottom-nav">
      <button class="nav-item active" data-path="/" id="nav-home">
        <span class="nav-icon">🏠</span>
        <span>Accueil</span>
      </button>
      <button class="nav-item" data-path="/courses" id="nav-courses">
        <span class="nav-icon">📖</span>
        <span>Cours</span>
      </button>
      <button class="nav-item" data-path="/review" id="nav-review">
        <span class="nav-icon">🔄</span>
        <span>Réviser</span>
        ${t>0?`<span class="nav-badge">${t>99?`99+`:t}</span>`:``}
      </button>
      <button class="nav-item" data-path="/vocab" id="nav-vocab">
        <span class="nav-icon">🃏</span>
        <span>Vocab</span>
      </button>
      <button class="nav-item" data-path="/phrases" id="nav-phrases">
        <span class="nav-icon">💬</span>
        <span>Phrases</span>
      </button>
    </nav>
  `,document.querySelectorAll(`.nav-item`).forEach(e=>{e.addEventListener(`click`,()=>{p(e.dataset.path)})}),f(`/`,Me),f(`/courses`,Ne),f(`/lesson`,Pe),f(`/flashcards`,ze),f(`/vocab`,Ge),f(`/phrases`,Je),f(`/review`,Qe),f(`/stats`,nt),g()}async function it(){let e=we(await E.cards.toArray()),t=document.getElementById(`nav-review`);if(t){let n=t.querySelector(`.nav-badge`);if(n&&n.remove(),e>0){let n=document.createElement(`span`);n.className=`nav-badge`,n.textContent=e>99?`99+`:e,t.appendChild(n)}}}function at(e,t=`success`){let n=document.querySelector(`.toast`);n&&n.remove();let r=document.createElement(`div`);r.className=`toast toast-${t}`,r.innerHTML=`
    <span>${t===`success`?`✅`:t===`error`?`❌`:`ℹ️`}</span>
    <span>${e}</span>
  `,document.body.appendChild(r),requestAnimationFrame(()=>{r.classList.add(`show`)}),setTimeout(()=>{r.classList.remove(`show`),setTimeout(()=>r.remove(),300)},2500)}rt().catch(console.error),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/MEMORIA/sw.js`).then(e=>{console.log(`✅ Service Worker registered`,e.scope)}).catch(e=>{console.warn(`Service Worker registration failed:`,e)})});