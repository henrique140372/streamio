(()=>{var e={48926:e=>{function t(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=e.apply(n,r);function u(e){t(i,o,a,u,c,"next",e)}function c(e){t(i,o,a,u,c,"throw",e)}u(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0},95318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},50008:e=>{function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},87757:(e,t,n)=>{e.exports=n(35666)},56553:(e,t,n)=>{"use strict";var r=n(95318),o=r(n(87757)),a=r(n(48926));e.exports=function(e,t){t.addEventListener("message",(function(){var n=(0,a.default)(o.default.mark((function n(r){var a,i,u,c,f,s,_;return o.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=r.data.request){n.next=3;break}return n.abrupt("return");case 3:if(i=a.id,u=a.path,c=a.args,n.prev=4,"function"!=typeof(f=u.reduce((function(e,t){return e[t]}),e))){n.next=13;break}return _=u.slice(0,u.length-1).reduce((function(e,t){return e[t]}),e),n.next=10,f.apply(_,c);case 10:s=n.sent,n.next=16;break;case 13:return n.next=15,f;case 15:s=n.sent;case 16:t.postMessage({response:{id:i,result:{data:s}}}),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(4),t.postMessage({response:{id:i,result:{error:n.t0}}});case 22:case"end":return n.stop()}}),n,null,[[4,19]])})));return function(e){return n.apply(this,arguments)}})()),this.call=(function(){var e=(0,a.default)(o.default.mark((function e(n,r){var a;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Math.random().toString(32).slice(2),e.abrupt("return",new Promise((function(e,o){t.addEventListener("message",(function n(r){var i=r.data.response;i&&i.id===a&&(t.removeEventListener("message",n),"error"in i.result?o(i.result.error):e(i.result.data))})),t.postMessage({request:{id:a,path:n,args:r}})})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}})()}},6489:(e,t,n)=>{"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.analytics=function(e,t){o.analytics(p(e),p(t))},t.decode_stream=function(e){return l(o.decode_stream(p(e)))},t.default=void 0,t.dispatch=function(e,t,n){o.dispatch(p(e),p(t),p(n))},t.get_state=function(e){return l(o.get_state(p(e)))},t.initialize_runtime=function(e){return l(o.initialize_runtime(p(e)))},t.start=function(){o.start()};var o,a=r(n(87757)),i=r(n(48926)),u=r(n(50008)),c={url:new URL("/stremio_core_web.js",document.baseURI).href},f=new Array(32).fill(void 0);function s(e){return f[e]}f.push(void 0,null,!0,!1);var _=f.length;function l(e){var t=s(e);return(function(e){e<36||(f[e]=_,_=e)})(e),t}var b=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});b.decode();var g=null;function w(){return null!==g&&g.buffer===o.memory.buffer||(g=new Uint8Array(o.memory.buffer)),g}function d(e,t){return b.decode(w().subarray(e,e+t))}function p(e){_===f.length&&f.push(f.length+1);var t=_;return _=f[t],f[t]=e,t}var h=0,y=new TextEncoder("utf-8"),v="function"==typeof y.encodeInto?function(e,t){return y.encodeInto(e,t)}:function(e,t){var n=y.encode(e);return t.set(n),{read:e.length,written:n.length}};function m(e,t,n){if(void 0===n){var r=y.encode(e),o=t(r.length);return w().subarray(o,o+r.length).set(r),h=r.length,o}for(var a=e.length,i=t(a),u=w(),c=0;c<a;c++){var f=e.charCodeAt(c);if(f>127)break;u[i+c]=f}if(c!==a){0!==c&&(e=e.slice(c)),i=n(i,a,a=c+3*e.length);var s=w().subarray(i+c,i+a);c+=v(e,s).written}return h=c,i}function x(e){return null==e}var k=null;function E(){return null!==k&&k.buffer===o.memory.buffer||(k=new Int32Array(o.memory.buffer)),k}function S(e){var t=(0,u.default)(e);if("number"==t||"boolean"==t||null==e)return"".concat(e);if("string"==t)return'"'.concat(e,'"');if("symbol"==t){var n=e.description;return null==n?"Symbol":"Symbol(".concat(n,")")}if("function"==t){var r=e.name;return"string"==typeof r&&r.length>0?"Function(".concat(r,")"):"Function"}if(Array.isArray(e)){var o=e.length,a="[";o>0&&(a+=S(e[0]));for(var i=1;i<o;i++)a+=", "+S(e[i]);return a+="]"}var c,f=/\[object ([^\]]+)\]/.exec(toString.call(e));if(!(f.length>1))return toString.call(e);if("Object"==(c=f[1]))try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?"".concat(e.name,": ").concat(e.message,"\n").concat(e.stack):c}function L(e,t,n,r){var a={a:e,b:t,cnt:1,dtor:n},i=function(){a.cnt++;var e=a.a;a.a=0;try{for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.apply(void 0,[e,a.b].concat(n))}finally{0==--a.cnt?o.__wbindgen_export_2.get(a.dtor)(e,a.b):a.a=e}};return i.original=a,i}function j(e,t){o.wasm_bindgen__convert__closures__invoke0_mut__h2b518bc1a845b13b(e,t)}function O(e,t,n){o.wasm_bindgen__convert__closures__invoke1_mut__ha8eb4e0857cc0b8d(e,t,p(n))}function A(e,t){try{return e.apply(this,t)}catch(e){o.__wbindgen_exn_store(p(e))}}function R(e,t,n,r){o.wasm_bindgen__convert__closures__invoke2_mut__h656cd1a0b216a699(e,t,p(n),p(r))}function T(e,t){return I.apply(this,arguments)}function I(){return(I=(0,i.default)(a.default.mark((function e(t,n){var r,o;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("function"==typeof Response&&t instanceof Response)){e.next=23;break}if("function"!=typeof WebAssembly.instantiateStreaming){e.next=15;break}return e.prev=2,e.next=5,WebAssembly.instantiateStreaming(t,n);case 5:case 20:return e.abrupt("return",e.sent);case 8:if(e.prev=8,e.t0=e.catch(2),"application/wasm"==t.headers.get("Content-Type")){e.next=14;break}console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e.t0),e.next=15;break;case 14:throw e.t0;case 15:return e.next=17,t.arrayBuffer();case 17:return r=e.sent,e.next=20,WebAssembly.instantiate(r,n);case 23:return e.next=25,WebAssembly.instantiate(t,n);case 25:if(!((o=e.sent)instanceof WebAssembly.Instance)){e.next=30;break}return e.abrupt("return",{instance:o,module:t});case 30:return e.abrupt("return",o);case 31:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function P(e){return M.apply(this,arguments)}function M(){return M=(0,i.default)(a.default.mark((function e(t){var r,i,f,_;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===t&&(t=new URL("stremio_core_web_bg.wasm",c.url)),(r={}).wbg={},r.wbg.__wbg_new0_fd3a3a290b25cdac=function(){return p(new Date)},r.wbg.__wbg_getTimezoneOffset_d3e5a22a1b7fb1d8=function(e){return s(e).getTimezoneOffset()},r.wbg.__wbindgen_object_drop_ref=function(e){l(e)},r.wbg.__wbg_new_693216e109162396=function(){return p(new Error)},r.wbg.__wbg_stack_0ddaca5d1abfb52f=function(e,t){var n=m(s(t).stack,o.__wbindgen_malloc,o.__wbindgen_realloc),r=h;E()[e/4+1]=r,E()[e/4+0]=n},r.wbg.__wbg_error_09919627ac0992f5=function(e,t){try{console.error(d(e,t))}finally{o.__wbindgen_free(e,t)}},r.wbg.__wbg_crypto_0e9b639eaff47699=function(e){return p(s(e).crypto)},r.wbg.__wbindgen_is_object=function(e){var t=s(e);return"object"===(0,u.default)(t)&&null!==t},r.wbg.__wbg_process_c1e9ac005dd29bbc=function(e){return p(s(e).process)},r.wbg.__wbg_versions_6850926753fc88df=function(e){return p(s(e).versions)},r.wbg.__wbg_node_c8026099e4c8fb6f=function(e){return p(s(e).node)},r.wbg.__wbindgen_is_string=function(e){return"string"==typeof s(e)},r.wbg.__wbg_require_39d411311735f255=function(){return A((function(){return p(_.require)}),arguments)},r.wbg.__wbindgen_is_function=function(e){return"function"==typeof s(e)},r.wbg.__wbindgen_string_new=function(e,t){return p(d(e,t))},r.wbg.__wbg_call_346669c262382ad7=function(){return A((function(e,t,n){return p(s(e).call(s(t),s(n)))}),arguments)},r.wbg.__wbg_msCrypto_558ee59e36bf4331=function(e){return p(s(e).msCrypto)},r.wbg.__wbg_newwithlength_929232475839a482=function(e){return p(new Uint8Array(e>>>0))},r.wbg.__wbindgen_object_clone_ref=function(e){return p(s(e))},r.wbg.__wbg_self_c6fbdfc2918d5e58=function(){return A((function(){return p(self.self)}),arguments)},r.wbg.__wbg_window_baec038b5ab35c54=function(){return A((function(){return p(window.window)}),arguments)},r.wbg.__wbg_globalThis_3f735a5746d41fbd=function(){return A((function(){return p(globalThis.globalThis)}),arguments)},r.wbg.__wbg_global_1bc0b39582740e95=function(){return A((function(){return p(n.g.global)}),arguments)},r.wbg.__wbindgen_is_undefined=function(e){return void 0===s(e)},r.wbg.__wbg_newnoargs_be86524d73f67598=function(e,t){return p(new Function(d(e,t)))},r.wbg.__wbg_call_888d259a5fefc347=function(){return A((function(e,t){return p(s(e).call(s(t)))}),arguments)},r.wbg.__wbindgen_string_get=function(e,t){var n=s(t),r="string"==typeof n?n:void 0,a=x(r)?0:m(r,o.__wbindgen_malloc,o.__wbindgen_realloc),i=h;E()[e/4+1]=i,E()[e/4+0]=a},r.wbg.__wbg_set_82a4e8a85e31ac42=function(){return A((function(e,t,n){return Reflect.set(s(e),s(t),s(n))}),arguments)},r.wbg.__wbg_setInterval_a02797f5ab1c7eb1=function(){return A((function(e,t,n){return s(e).setInterval(s(t),n)}),arguments)},r.wbg.__wbg_instanceof_Response_e1b11afbefa5b563=function(e){return s(e)instanceof Response},r.wbg.__wbg_status_6d8bb444ddc5a7b2=function(e){return s(e).status},r.wbg.__wbg_json_88cc6d5cf8f61121=function(){return A((function(e){return p(s(e).json())}),arguments)},r.wbg.__wbg_stringify_d4507a59932eed0c=function(){return A((function(e){return p(JSON.stringify(s(e)))}),arguments)},r.wbg.__wbg_localstoragegetitem_a3fb714cef4c7ad7=function(){return A((function(e,t){try{return p(self.local_storage_get_item(d(e,t)))}finally{o.__wbindgen_free(e,t)}}),arguments)},r.wbg.__wbg_new_0b83d3df67ecb33e=function(){return p(new Object)},r.wbg.__wbg_newwithstrandinit_9b0fa00478c37287=function(){return A((function(e,t,n){return p(new Request(d(e,t),s(n)))}),arguments)},r.wbg.__wbg_fetch_b4e81012e07ff95a=function(e,t){return p(s(e).fetch(s(t)))},r.wbg.__wbg_now_af172eabe2e041ad=function(){return Date.now()},r.wbg.__wbg_instanceof_Error_561efcb1265706d8=function(e){return s(e)instanceof Error},r.wbg.__wbg_message_9f7d15ff97fc4102=function(e){return p(s(e).message)},r.wbg.__wbindgen_memory=function(){return p(o.memory)},r.wbg.__wbg_buffer_397eaa4d72ee94dd=function(e){return p(s(e).buffer)},r.wbg.__wbg_newwithbyteoffsetandlength_4b9b8c4e3f5adbff=function(e,t,n){return p(new Uint8Array(s(e),t>>>0,n>>>0))},r.wbg.__wbg_randomFillSync_f8d4e42f84f40e2a=function(){return A((function(e,t){s(e).randomFillSync(l(t))}),arguments)},r.wbg.__wbg_subarray_8b658422a224f479=function(e,t,n){return p(s(e).subarray(t>>>0,n>>>0))},r.wbg.__wbg_getRandomValues_3af6527bb0405f8f=function(){return A((function(e,t){s(e).getRandomValues(s(t))}),arguments)},r.wbg.__wbg_new_a7ce447f15ff496f=function(e){return p(new Uint8Array(s(e)))},r.wbg.__wbg_set_969ad0a60e51d320=function(e,t,n){s(e).set(s(t),n>>>0)},r.wbg.__wbg_instanceof_WorkerGlobalScope_f191ca0158f5637b=function(e){return s(e)instanceof WorkerGlobalScope},r.wbg.__wbg_parse_ccb2cd4fe8ead0cb=function(){return A((function(e,t){return p(JSON.parse(d(e,t)))}),arguments)},r.wbg.__wbg_static_accessor_APP_VERSION_07ff82297c46f276=function(e){var t=m(self.app_version,o.__wbindgen_malloc,o.__wbindgen_realloc),n=h;E()[e/4+1]=n,E()[e/4+0]=t},r.wbg.__wbg_static_accessor_SHELL_VERSION_3f4f42b9e056a065=function(e){var t=self.shell_version,n=x(t)?0:m(t,o.__wbindgen_malloc,o.__wbindgen_realloc),r=h;E()[e/4+1]=r,E()[e/4+0]=n},r.wbg.__wbg_navigator_8bc0889cda8f8500=function(e){return p(s(e).navigator)},r.wbg.__wbg_language_cd6e22892ba36a1f=function(e,t){var n=s(t).language,r=x(n)?0:m(n,o.__wbindgen_malloc,o.__wbindgen_realloc),a=h;E()[e/4+1]=a,E()[e/4+0]=r},r.wbg.__wbg_localstorageremoveitem_26ffcfd84561556c=function(){return A((function(e,t){try{return p(self.local_storage_remove_item(d(e,t)))}finally{o.__wbindgen_free(e,t)}}),arguments)},r.wbg.__wbg_localstoragesetitem_11d5bc6768c338b9=function(){return A((function(e,t,n,r){try{return p(self.local_storage_set_item(d(e,t),d(n,r)))}finally{o.__wbindgen_free(e,t),o.__wbindgen_free(n,r)}}),arguments)},r.wbg.__wbg_getlocationhash_977d5927989ee2c9=function(){return A((function(){return p(self.get_location_hash())}),arguments)},r.wbg.__wbg_new_b1d61b5687f5e73a=function(e,t){try{var n={a:e,b:t},r=new Promise((function(e,t){var r=n.a;n.a=0;try{return R(r,n.b,e,t)}finally{n.a=r}}));return p(r)}finally{n.a=n.b=0}},r.wbg.__wbg_mark_abc7631bdced64f0=function(e,t){performance.mark(d(e,t))},r.wbg.__wbg_log_02e20a3c32305fb7=function(e,t){try{console.log(d(e,t))}finally{o.__wbindgen_free(e,t)}},r.wbg.__wbg_log_5c7513aa8c164502=function(e,t,n,r,a,i,u,c){try{console.log(d(e,t),d(n,r),d(a,i),d(u,c))}finally{o.__wbindgen_free(e,t)}},r.wbg.__wbg_measure_c528ff64085b7146=function(){return A((function(e,t,n,r){try{performance.measure(d(e,t),d(n,r))}finally{o.__wbindgen_free(e,t),o.__wbindgen_free(n,r)}}),arguments)},r.wbg.__wbindgen_debug_string=function(e,t){var n=m(S(s(t)),o.__wbindgen_malloc,o.__wbindgen_realloc),r=h;E()[e/4+1]=r,E()[e/4+0]=n},r.wbg.__wbindgen_throw=function(e,t){throw new Error(d(e,t))},r.wbg.__wbg_then_2fcac196782070cc=function(e,t){return p(s(e).then(s(t)))},r.wbg.__wbg_then_8c2d62e8ae5978f7=function(e,t,n){return p(s(e).then(s(t),s(n)))},r.wbg.__wbindgen_cb_drop=function(e){var t=l(e).original;if(1==t.cnt--)return t.a=0,!0;return!1},r.wbg.__wbg_resolve_d23068002f584f22=function(e){return p(Promise.resolve(s(e)))},r.wbg.__wbindgen_closure_wrapper3330=function(e,t,n){return p(L(e,t,161,j))},r.wbg.__wbindgen_closure_wrapper5251=function(e,t,n){return p(L(e,t,161,O))},("string"==typeof t||"function"==typeof Request&&t instanceof Request||"function"==typeof URL&&t instanceof URL)&&(t=fetch(t)),e.t0=T,e.next=77,t;case 77:return e.t1=e.sent,e.t2=r,e.next=81,(0,e.t0)(e.t1,e.t2);case 81:return i=e.sent,f=i.instance,_=i.module,o=f.exports,P.__wbindgen_wasm_module=_,o.__wbindgen_start(),e.abrupt("return",o);case 88:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}var N=P;t.default=N},35666:e=>{var t=(function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function f(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var a=t&&t.prototype instanceof d?t:d,i=Object.create(a.prototype),u=new A(r||[]);return o(i,"_invoke",{value:S(e,n,u)}),i}function _(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var l="suspendedStart",b="executing",g="completed",w={};function d(){}function p(){}function h(){}var y={};f(y,i,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(R([])));m&&m!==n&&r.call(m,i)&&(y=m);var x=h.prototype=d.prototype=Object.create(y);function k(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,a,i,u){var c=_(e[o],e,a);if("throw"!==c.type){var f=c.arg,s=f.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,i,u)}),(function(e){n("throw",e,i,u)})):t.resolve(s).then((function(e){f.value=e,i(f)}),(function(e){return n("throw",e,i,u)}))}u(c.arg)}var a;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return a=a?a.then(o,o):o()}})}function S(e,t,n){var r=l;return function(o,a){if(r===b)throw new Error("Generator is already running");if(r===g){if("throw"===o)throw a;return T()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=L(i,n);if(u){if(u===w)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=b;var c=_(e,t,n);if("normal"===c.type){if(r=n.done?g:"suspendedYield",c.arg===w)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=g,n.method="throw",n.arg=c.arg)}}}function L(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),w;var a=_(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,w;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,w):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,w)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function R(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:T}}function T(){return{value:t,done:!0}}return p.prototype=h,o(x,"constructor",{value:h,configurable:!0}),o(h,"constructor",{value:p,configurable:!0}),p.displayName=f(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,f(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},k(E.prototype),f(E.prototype,u,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new E(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(x),f(x,c,"Generator"),f(x,i,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=R,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return u.type="throw",u.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),f=r.call(i,"finallyLoc");if(c&&f){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,w):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),w},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),w}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),w}},e})(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},36310:(e,t,n)=>{"use strict";e.exports=n.p+"9e75650df91d467dfdca99a582d6a2028ba8fbcf/binaries/stremio_core_web_bg.wasm"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.g=(function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}})(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../"})(),(()=>{"use strict";var e=n(95318),t=e(n(87757)),r=e(n(48926)),o=new(n(56553))(self,self);self.init=(function(){var e=(0,r.default)(t.default.mark((function e(a){var i,u,c,f,s,_,l,b,g,w;return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.appVersion,u=a.shellVersion,self.document={baseURI:self.location.href},self.app_version=i,self.shell_version=u,self.get_location_hash=(0,r.default)(t.default.mark((function e(){return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.call(["location","hash"],[]));case 1:case"end":return e.stop()}}),e)}))),self.local_storage_get_item=(function(){var e=(0,r.default)(t.default.mark((function e(n){return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.call(["localStorage","getItem"],[n]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})(),self.local_storage_set_item=(function(){var e=(0,r.default)(t.default.mark((function e(n,r){return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.call(["localStorage","setItem"],[n,r]));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}})(),self.local_storage_remove_item=(function(){var e=(0,r.default)(t.default.mark((function e(n){return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.call(["localStorage","removeItem"],[n]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})(),c=n(6489),f=c.default,s=c.initialize_runtime,_=c.get_state,l=c.get_debug_state,b=c.dispatch,g=c.analytics,w=c.decode_stream,self.getState=_,self.getDebugState=l,self.dispatch=b,self.analytics=g,self.decodeStream=w,e.next=16,f(n(36310));case 16:return e.next=18,s((function(e){return o.call(["onCoreEvent"],[e])}));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()})()})();
//# sourceMappingURL=worker.js.map