if(!self.define){let d,a={};const e=(e,f)=>(e=new URL(e+".js",f).href,a[e]||new Promise((a=>{if("document"in self){const d=document.createElement("script");d.src=e,d.onload=a,document.head.appendChild(d)}else d=e,importScripts(e),a()})).then((()=>{let d=a[e];if(!d)throw new Error(`Module ${e} didn’t register its module`);return d})));self.define=(f,c)=>{const b=d||("document"in self?document.currentScript.src:"")||location.href;if(a[b])return;let i={};const s=d=>e(d,b),r={module:{uri:b},exports:i,require:s};a[b]=Promise.all(f.map((d=>r[d]||s(d)))).then((d=>(c(...d),i)))}}define(["./workbox-ad8011fb"],(function(d){"use strict";self.skipWaiting(),d.clientsClaim(),d.precacheAndRoute([{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/binaries/stremio_core_web_bg.wasm",revision:"24041b0c451dacea6fa13eacdd9e21f6"},{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/scripts/main.js",revision:"cb3f488e1e8cb8ca1f28c87aead81696"},{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/scripts/worker.js",revision:"4e510b06d11c1c553842ed208546df81"},{url:"9e75650df91d467dfdca99a582d6a2028ba8fbcf/styles/main.css",revision:"4097d738eb80274201ba0ec02c7292c7"},{url:"index.html",revision:"082ac18d702259d8ae8991fb3e357a09"}],{})}));
//# sourceMappingURL=service-worker.js.map
