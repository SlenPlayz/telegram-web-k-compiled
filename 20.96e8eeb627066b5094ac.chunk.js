(this.webpackJsonp=this.webpackJsonp||[]).push([[20,19],{155:function(e,t,a){"use strict";a.r(t);var n=a(58),i=a(65),s=a(61),r=a(152),c=a(35),l=a(7),u=a(8),o=a(28),p=a(97),d=a(90),m=a(38),h=a(59);let b=null;const v=new d.a("page-signUp",!0,()=>a.e(6).then(a.bind(null,75)).then(e=>{const t=new p.a({className:"page-signUp",withInputWrapper:!0,titleLangKey:"YourName",subtitleLangKey:"Login.Register.Subtitle"});t.imageDiv.classList.add("avatar-edit"),t.title.classList.add("fullName");const c=document.createElement("canvas");c.id="canvas-avatar",c.className="avatar-edit-canvas";const d=document.createElement("span");d.className="tgico tgico-cameraadd",t.imageDiv.append(c,d);const v=e.default;let g;t.imageDiv.addEventListener("click",()=>{(new r.a).open(c,e=>{g=e})});const L=e=>{const a=w.value||"",n=y.value||"",i=a||n?(a+" "+n).trim():"";i?Object(h.a)(t.title,o.b.wrapEmojiText(i)):Object(h.a)(t.title,Object(l.d)("YourName"))};const w=new i.b({label:"FirstName",maxLength:70}),y=new i.b({label:"LastName",maxLength:64}),f=Object(n.a)("btn-primary btn-color-primary"),E=new l.c.IntlElement({key:"StartMessaging"});return f.append(E.element),t.inputWrapper.append(w.container,y.container,f),w.input.addEventListener("input",L),y.input.addEventListener("input",L),f.addEventListener("click",(function(e){if(w.input.classList.contains("error")||y.input.classList.contains("error"))return!1;if(!w.value.length)return w.input.classList.add("error"),!1;this.disabled=!0;const t=w.value.trim(),n=y.value.trim(),i={phone_number:b.phone_number,phone_code_hash:b.phone_code_hash,first_name:t,last_name:n};E.update({key:"PleaseWait"});const r=Object(s.f)(this);u.a.invokeApi("auth.signUp",i).then(e=>{switch(e._){case"auth.authorization":u.a.setUser(e.user),new Promise((e,t)=>{if(!g)return e();g().then(a=>{v.uploadProfilePhoto(a).then(e,t)},t)}).finally(()=>{a.e(3).then(a.bind(null,110)).then(e=>{e.default.mount()})});break;default:E.update({key:e._}),this.removeAttribute("disabled"),r.remove()}}).catch(e=>{this.removeAttribute("disabled"),r.remove(),e.type,E.update({key:e.type})})})),Object(m.a)(),new Promise(e=>{window.requestAnimationFrame(e)})}),e=>{b=e,c.c.pushToState("authState",{_:"authStateSignUp",authCode:e})});t.default=v},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(7);class i{constructor(e){this.element=document.body.querySelector("."+e.className),this.container=document.createElement("div"),this.container.className="container center-align",this.imageDiv=document.createElement("div"),this.imageDiv.className="auth-image",this.title=document.createElement("h4"),e.titleLangKey&&this.title.append(Object(n.d)(e.titleLangKey)),this.subtitle=document.createElement("p"),this.subtitle.className="subtitle",e.subtitleLangKey&&this.subtitle.append(Object(n.d)(e.subtitleLangKey)),this.container.append(this.imageDiv,this.title,this.subtitle),e.withInputWrapper&&(this.inputWrapper=document.createElement("div"),this.inputWrapper.className="input-wrapper",this.container.append(this.inputWrapper)),this.element.append(this.container)}}}}]);
//# sourceMappingURL=20.96e8eeb627066b5094ac.chunk.js.map