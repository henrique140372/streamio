if(!self.define){let c,b={};const e=(e,f)=>(e=new URL(e+".js",f).href,b[e]||new Promise((b=>{if("document"in self){const c=document.createElement("script");c.src=e,c.onload=b,document.head.appendChild(c)}else c=e,importScripts(e),b()})).then((()=>{let c=b[e];if(!c)throw new Error(`Module ${e} didn’t register its module`);return c})));self.define=(f,i)=>{const d=c||("document"in self?document.currentScript.src:"")||location.href;if(b[d])return;let s={};const r=c=>e(c,d),a={module:{uri:d},exports:s,require:r};b[d]=Promise.all(f.map((c=>a[c]||r(c)))).then((c=>(i(...c),s)))}}define(["./workbox-ad8011fb"],(function(c){"use strict";self.skipWaiting(),c.clientsClaim(),c.precacheAndRoute([{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/binaries/stremio_core_web_bg.wasm",revision:"9f0d1799795da5be5808dd6d83870cec"},{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/scripts/main.js",revision:"a40574fe2cc6588b456955876fa264a0"},{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/scripts/worker.js",revision:"e2de1ce3e00b6020e0472c6db8b6e888"},{url:"51171f1c3469bff966b2f4e5cbc6f2d5c0b30bcc/styles/main.css",revision:"044a3cb056faf9b797ff702168e8129b"},{url:"index.html",revision:"d361bba49ea9928406af47a4dc101c46"}],{})}));
//# sourceMappingURL=service-worker.js.map
