(this.webpackJsonp=this.webpackJsonp||[]).push([[14,16,17,18],{118:function(e,t,n){"use strict";function i(e,t){return t?e.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=+$/,""):e.replace(/-/g,"+").replace(/_/g,"/")}n.d(t,"a",(function(){return i}))},119:function(e,t,n){"use strict";function i(e,t){const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;++i)if(e[i]!==t[i])return!1;return!0}n.d(t,"a",(function(){return i}))},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n(27),a=n(57),o=n(42),s=n(7),r=n(8),l=n(0),c=n(58),d=n(61);let u,h=!1;function p(e){h||(u||(u=r.a.getConfig().then(e=>e.suggested_lang_code!==s.c.lastRequestedLangCode?Promise.all([e,s.c.getStrings(e.suggested_lang_code,["Login.ContinueOnLanguage"]),s.c.getCacheLangPack()]):[]))).then(([t,n])=>{if(!t)return;const r=[];n.forEach(e=>{const t=s.c.strings.get(e.key);t&&(r.push(t),s.c.strings.set(e.key,e))});const u="Login.ContinueOnLanguage",p=Object(c.a)("btn-primary btn-secondary btn-primary-transparent primary",{text:u});p.lastElementChild.classList.remove("i18n"),Object(o.a)({text:[s.c.format(u,!0)]}).then(()=>{window.requestAnimationFrame(()=>{e.append(p)})}),l.a.addEventListener("language_change",()=>{p.remove()},{once:!0}),r.forEach(e=>{s.c.strings.set(e.key,e)}),Object(a.b)(p,e=>{Object(i.a)(e),h=!0,p.disabled=!0,Object(d.f)(p),s.c.getLangPack(t.suggested_lang_code)})})}},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(71);class a{constructor(e,t){this.inputField=e,this.size=t,this.max=45,this.needFrame=0,this.container=document.createElement("div"),this.container.classList.add("media-sticker-wrapper");const n=e.input;n.addEventListener("blur",()=>{this.playAnimation(0)}),n.addEventListener("input",t=>{this.playAnimation(e.value.length)})}playAnimation(e){if(!this.animation)return;let t;(e=Math.min(e,30))?(t=Math.round(Math.min(this.max,e)*(165/this.max)+11.33),this.idleAnimation&&(this.idleAnimation.stop(!0),this.idleAnimation.canvas.style.display="none"),this.animation.canvas.style.display=""):t=0;const n=this.needFrame>t?-1:1;this.animation.setDirection(n),0!==this.needFrame&&0===t&&this.animation.setSpeed(7),this.needFrame=t,this.animation.play()}load(){return this.loadPromise?this.loadPromise:this.loadPromise=Promise.all([i.a.loadAnimationAsAsset({container:this.container,loop:!0,autoplay:!0,width:this.size,height:this.size},"TwoFactorSetupMonkeyIdle").then(e=>(this.idleAnimation=e,this.inputField.value.length||e.play(),i.a.waitForFirstFrame(e))),i.a.loadAnimationAsAsset({container:this.container,loop:!1,autoplay:!1,width:this.size,height:this.size},"TwoFactorSetupMonkeyTracking").then(e=>(this.animation=e,this.inputField.value.length||(this.animation.canvas.style.display="none"),this.animation.addEventListener("enterFrame",e=>{(1===this.animation.direction&&e>=this.needFrame||-1===this.animation.direction&&e<=this.needFrame)&&(this.animation.setSpeed(1),this.animation.pause()),0===e&&0===this.needFrame&&this.idleAnimation&&(this.idleAnimation.canvas.style.display="",this.idleAnimation.play(),this.animation.canvas.style.display="none")}),i.a.waitForFirstFrame(e)))])}remove(){this.animation&&this.animation.remove(),this.idleAnimation&&this.idleAnimation.remove()}}},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(65);class a extends i.b{constructor(e){super(Object.assign({plainText:!0},e));const t=this.input;t.type="tel",t.setAttribute("required",""),t.autocomplete="off";let n=0;this.input.addEventListener("input",t=>{this.input.classList.remove("error"),this.setLabel();const i=this.value.replace(/\D/g,"").slice(0,e.length);this.setValueSilently(i);const a=this.value.length;if(a===e.length)e.onFill(this.value);else if(a===n)return;n=a})}}},165:function(e,t,n){"use strict";n.r(t);var i=n(8),a=n(90),o=n(87),s=n(5),r=n(58),l=n(7),c=n(35),d=n(0),u=n(61),h=n(125),p=n(16),m=n(118),g=n(119);function f(e){return e<26?e+65:e<52?e+71:e<62?e-4:62===e?43:63===e?47:65}var y=function(e,t,n,i){return new(n||(n=Promise))((function(a,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function r(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}l((i=i.apply(e,t||[])).next())}))};let v,b=()=>y(void 0,void 0,void 0,(function*(){const e=E.pageEl.querySelector(".auth-image");let t=Object(u.f)(e,!0);const a=document.createElement("div");a.classList.add("input-wrapper");const c=Object(r.a)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Cancel"});a.append(c),Object(h.a)(a);const b=e.parentElement,_=document.createElement("h4");Object(l.b)(_,"Login.QR.Title");const w=document.createElement("ol");w.classList.add("qr-description"),["Login.QR.Help1","Login.QR.Help2","Login.QR.Help3"].forEach(e=>{const t=document.createElement("li");t.append(Object(l.d)(e)),w.append(t)}),b.append(_,w,a),c.addEventListener("click",()=>{Promise.all([n.e(2),n.e(4)]).then(n.bind(null,168)).then(e=>e.default.mount()),S=!0});const O=(yield Promise.all([n.e(10).then(n.t.bind(null,199,7))]))[0].default;let S=!1;d.a.addEventListener("user_auth",()=>{S=!0,v=null},{once:!0});let L,k={ignoreErrors:!0};const A=a=>y(void 0,void 0,void 0,(function*(){try{let r=yield i.a.invokeApi("auth.exportLoginToken",{api_id:s.a.id,api_hash:s.a.hash,except_ids:[]},{ignoreErrors:!0});if("auth.loginTokenMigrateTo"===r._&&(k.dcId||(k.dcId=r.dc_id,i.a.setBaseDcId(r.dc_id)),r=yield i.a.invokeApi("auth.importLoginToken",{token:r.token},k)),"auth.loginTokenSuccess"===r._){const e=r.authorization;return i.a.setUser(e.user),n.e(3).then(n.bind(null,110)).then(e=>e.default.mount()),!0}if(!L||!Object(g.a)(L,r.token)){L=r.token;let n=function(e){let t,n="";for(let i=e.length,a=0,o=0;o<i;++o)t=o%3,a|=e[o]<<(16>>>t&24),2!==t&&i-o!=1||(n+=String.fromCharCode(f(a>>>18&63),f(a>>>12&63),f(a>>>6&63),f(63&a)),a=0);return n.replace(/A(?=A$|$)/g,"=")}(r.token),i="tg://login?token="+Object(m.a)(n,!0);const a=window.getComputedStyle(document.documentElement),o=a.getPropertyValue("--surface-color").trim(),s=a.getPropertyValue("--primary-text-color").trim(),l=a.getPropertyValue("--primary-color").trim(),c=yield fetch("assets/img/logo_padded.svg").then(e=>e.text()).then(e=>{e=e.replace(/(fill:).+?(;)/,`$1${l}$2`);const t=new Blob([e],{type:"image/svg+xml;charset=utf-8"});return new Promise(e=>{const n=new FileReader;n.onload=t=>{e(t.target.result)},n.readAsDataURL(t)})}),d=new O({width:240*window.devicePixelRatio,height:240*window.devicePixelRatio,data:i,image:c,dotsOptions:{color:s,type:"rounded"},cornersSquareOptions:{type:"extra-rounded"},imageOptions:{imageSize:1,margin:0},backgroundOptions:{color:o},qrOptions:{errorCorrectionLevel:"L"}});let u;d.append(e),e.lastChild.classList.add("qr-canvas"),u=d._drawingPromise?d._drawingPromise:Promise.race([Object(p.a)(1e3),new Promise(e=>{d._canvas._image.addEventListener("load",()=>{window.requestAnimationFrame(()=>e())},{once:!0})})]),yield u.then(()=>{if(t){t.style.animation="hide-icon .4s forwards";const n=e.children[1];n.style.display="none",n.style.animation="grow-icon .4s forwards",setTimeout(()=>{n.style.display=""},150),setTimeout(()=>{n.style.animation=""},500),t=void 0}else Array.from(e.children).slice(0,-1).forEach(e=>{e.remove()})})}if(a){let e=Date.now()/1e3,t=r.expires-e-o.a.serverTimeOffset;yield Object(p.a)(t>3?3e3:1e3*t|0)}}catch(e){switch(e.type){case"SESSION_PASSWORD_NEEDED":console.warn("pageSignQR: SESSION_PASSWORD_NEEDED"),e.handled=!0,n.e(12).then(n.bind(null,142)).then(e=>e.default.mount()),S=!0,v=null;break;default:console.error("pageSignQR: default error:",e),S=!0}return!0}return!1}));return()=>y(void 0,void 0,void 0,(function*(){for(S=!1;;){if(S)break;if(yield A(!0))break}}))}));const E=new a.a("page-signQR",!0,()=>v,()=>{v||(v=b()),v.then(e=>{e()}),c.c.pushToState("authState",{_:"authStateSignQr"})});t.default=E},170:function(e,t,n){"use strict";n.r(t);var i=n(62),a=n(35),o=n(8),s=n(90),r=n(168),l=n(131),c=n(132),d=n(7),u=n(21),h=n(59),p=function(e,t,n,i){return new(n||(n=Promise))((function(a,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function r(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}l((i=i.apply(e,t||[])).next())}))};let m,g=null,f=null,y=null;const v=new s.a("page-authCode",!0,()=>{const e=g.type.length,t=new c.a({label:"Code",name:Object(u.b)(),length:e,onFill:e=>{s(e)}});m=t.input,v.pageEl.querySelector(".input-wrapper").append(t.container);v.pageEl.querySelector(".phone-edit").addEventListener("click",(function(){return r.default.mount()}));const a=()=>{setTimeout(()=>{b.remove()},300)},s=e=>{m.setAttribute("disabled","true");const i={phone_number:g.phone_number,phone_code_hash:g.phone_code_hash,phone_code:e};o.a.invokeApi("auth.signIn",i,{ignoreErrors:!0}).then(e=>{switch(e._){case"auth.authorization":o.a.setUser(e.user),n.e(3).then(n.bind(null,110)).then(e=>{e.default.mount()}),a();break;case"auth.authorizationSignUpRequired":Promise.all([n.e(5),n.e(20)]).then(n.bind(null,155)).then(e=>{e.default.mount({phone_number:g.phone_number,phone_code_hash:g.phone_code_hash})}),a()}}).catch(e=>p(void 0,void 0,void 0,(function*(){let i=!1;switch(e.type){case"SESSION_PASSWORD_NEEDED":i=!0,e.handled=!0,yield(yield n.e(15).then(n.bind(null,142))).default.mount(),setTimeout(()=>{m.value=""},300);break;case"PHONE_CODE_EXPIRED":m.classList.add("error"),Object(h.a)(t.label,Object(d.d)("PHONE_CODE_EXPIRED"));break;case"PHONE_CODE_EMPTY":case"PHONE_CODE_INVALID":m.classList.add("error"),Object(h.a)(t.label,Object(d.d)("PHONE_CODE_INVALID"));break;default:t.label.innerText=e.type}i||t.select(),m.removeAttribute("disabled")})))},f=v.pageEl.querySelector(".auth-image"),y=i.b.isMobile?100:166,b=new l.a(t,y);return f.append(b.container),b.load()},e=>{if(g=e,f){m.value="";const e=document.createEvent("HTMLEvents");e.initEvent("input",!1,!0),m.dispatchEvent(e)}else f=v.pageEl.getElementsByClassName("phone")[0],y=v.pageEl.getElementsByClassName("sent-type")[0];let t,n;switch(f.innerText=g.phone_number,g.type._){case"auth.sentCodeTypeSms":t="Login.Code.SentSms";break;case"auth.sentCodeTypeApp":t="Login.Code.SentInApp";break;case"auth.sentCodeTypeCall":t="Login.Code.SentCall";break;default:t="Login.Code.SentUnknown",n=[g.type._]}Object(h.a)(y,Object(d.d)(t,n)),a.c.pushToState("authState",{_:"authStateAuthCode",sentCode:e})},()=>{m.focus()});t.default=v},87:function(e,t,n){"use strict";var i=n(1),a=n(6),o=n(8);const s=new class{constructor(){this.serverTimeOffset=0,a.a.get("server_time_offset").then(e=>{e&&(this.serverTimeOffset=e)}),o.a.addTaskListener("applyServerTimeOffset",e=>{this.serverTimeOffset=e.payload})}};i.a&&(i.a.serverTimeManager=s),t.a=s}}]);
//# sourceMappingURL=14.45fb90c7c021f37182ff.chunk.js.map