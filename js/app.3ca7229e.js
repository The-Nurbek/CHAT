(function(){"use strict";var n={460:function(n,t,e){var s=e(9242),r=e(3396);const a={class:"chat"},i={class:"chat-user"},l={class:"chat-user"};function o(n,t,e,s,o,c){const u=(0,r.up)("ChatTop"),g=(0,r.up)("ChatMain"),m=(0,r.up)("ChatButton");return(0,r.wg)(),(0,r.iD)("section",a,[(0,r._)("div",i,[(0,r.Wm)(u,{img:"alex",name:"Александр"}),(0,r.Wm)(g,{sender:"1",msgs:o.msgs},null,8,["msgs"]),(0,r.Wm)(m,{sender:"1",onMsg:c.sendMsg},null,8,["onMsg"])]),(0,r._)("div",l,[(0,r.Wm)(u,{img:"evgen",name:"Евгений"}),(0,r.Wm)(g,{sender:"2",msgs:o.msgs},null,8,["msgs"]),(0,r.Wm)(m,{sender:"2",onMsg:c.sendMsg},null,8,["onMsg"])])])}e(7658);var c=e(7139);const u={class:"chat-top"},g=["src"],m={class:"chat-top-info"},d=(0,r._)("span",null,"Онлайн",-1);function p(n,t,e,s,a,i){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",u,[(0,r._)("img",{src:a.images[e.img],alt:""},null,8,g),(0,r._)("div",m,[(0,r._)("h2",null,(0,c.zw)(e.name),1),d])])])}var f={props:["name","img"],data(){return{images:{alex:e(7831),evgen:e(3463)}}}},h=e(89);const v=(0,h.Z)(f,[["render",p]]);var w=v;const b={class:"chat-main"},_={class:"chat-main-item-content-text"},y=["src"];function M(n,t,e,a,i,l){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",b,[(0,r.Wm)(s.W3,{name:"list"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.msgs,((n,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"chat-main-item",key:t},[(0,r._)("div",{class:(0,c.C_)(["chat-main-item-content",{send:n.sendId==e.sender,get:n.sendId!=e.sender}])},[(0,r._)("span",null,(0,c.zw)(n.time),1),(0,r._)("div",_,[n.imageUrl?((0,r.wg)(),(0,r.iD)("img",{key:0,src:n.imageUrl,alt:""},null,8,y)):(0,r.kq)("",!0),(0,r._)("p",null,(0,c.zw)(n.body),1)])],2)])))),128))])),_:1})])])}var k={props:["msgs","sender","msgBtn"],data(){return{}}};const x=(0,h.Z)(k,[["render",M]]);var C=x,O=e.p+"img/btn__search.635e8ad2.svg",D=e.p+"img/btn__scrin.2ab0d0a5.svg";const B={class:"chat-button"},U=(0,r._)("img",{src:O,alt:""},null,-1),W=[U],j=(0,r._)("img",{src:D,alt:""},null,-1),S=[j],T={key:0,class:"panel"},I={class:"panel-wrap"},Z=(0,r._)("div",{class:"panel-wrap-title"},"Отправить картинку",-1),$={class:"panel-wrap-form"},z={class:"panel-wrap-btn"};function H(n,t,e,a,i,l){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("form",B,[(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Написать сообщение...","onUpdate:modelValue":t[0]||(t[0]=n=>i.msg=n)},null,512),[[s.nr,i.msg]]),i.msg.length?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:t[1]||(t[1]=(...n)=>l.sentMsg&&l.sentMsg(...n))},W)):((0,r.wg)(),(0,r.iD)("button",{key:1,onClick:t[2]||(t[2]=(0,s.iM)((n=>(l.sentMsg,i.btn=!i.btn)),["prevent"]))},S))]),i.btn?((0,r.wg)(),(0,r.iD)("div",T,[(0,r._)("div",I,[Z,(0,r._)("form",$,[(0,r.wy)((0,r._)("input",{class:"panel-wrap-form-file",type:"text","onUpdate:modelValue":t[3]||(t[3]=n=>i.url=n),placeholder:"URL"},null,512),[[s.nr,i.url]]),(0,r.wy)((0,r._)("input",{class:"panel-wrap-form-text",type:"text","onUpdate:modelValue":t[4]||(t[4]=n=>i.msgBtn=n),placeholder:"Комментарий"},null,512),[[s.nr,i.msgBtn]]),(0,r._)("div",z,[(0,r._)("button",{class:"panel-wrap-btn-sending",onClick:t[5]||(t[5]=(...n)=>l.sentMsg&&l.sentMsg(...n))},"ОТПРАВИТЬ"),(0,r._)("button",{class:"panel-wrap-btn-back",onClick:t[6]||(t[6]=n=>i.btn=!i.btn)},"Отмена")])])])])):(0,r.kq)("",!0)])}var V={data(){return{msg:"",msgBtn:"",url:"",btn:!1}},props:["sender"],methods:{sentMsg(){let n=(new Date).getHours(),t=(new Date).getMinutes();n<10&&(n="0"+n),t<10&&(t="0"+t);const e=`${n}:${t}`;if(this.msg.length){const n={};n.body=this.msg.trim(),n.sendId=this.sender,n.time=e,n.imageUrl=this.url,this.$emit("msg",n)}else if(this.msgBtn.length){const n={};n.body=this.msgBtn.trim(),n.sendId=this.sender,n.time=e,n.imageUrl=this.url,this.$emit("msg",n)}}}};const q=(0,h.Z)(V,[["render",H]]);var J=q,N={components:{ChatTop:w,ChatButton:J,ChatMain:C},data(){return{msgs:[]}},methods:{sendMsg(n){this.msgs.push(n),localStorage.message=JSON.stringify(this.msgs)}},created(){const n=localStorage.message?JSON.parse(localStorage.message):[];this.msgs=n}};const P=(0,h.Z)(N,[["render",o]]);var A=P;(0,s.ri)(A).mount("#app")},7831:function(n,t,e){n.exports=e.p+"img/alex.836f09fe.svg"},3463:function(n,t,e){n.exports=e.p+"img/evgen.c18df9c3.svg"}},t={};function e(s){var r=t[s];if(void 0!==r)return r.exports;var a=t[s]={exports:{}};return n[s](a,a.exports,e),a.exports}e.m=n,function(){var n=[];e.O=function(t,s,r,a){if(!s){var i=1/0;for(u=0;u<n.length;u++){s=n[u][0],r=n[u][1],a=n[u][2];for(var l=!0,o=0;o<s.length;o++)(!1&a||i>=a)&&Object.keys(e.O).every((function(n){return e.O[n](s[o])}))?s.splice(o--,1):(l=!1,a<i&&(i=a));if(l){n.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=n.length;u>0&&n[u-1][2]>a;u--)n[u]=n[u-1];n[u]=[s,r,a]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var s in t)e.o(t,s)&&!e.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:t[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.p="/CHAT/"}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,s){var r,a,i=s[0],l=s[1],o=s[2],c=0;if(i.some((function(t){return 0!==n[t]}))){for(r in l)e.o(l,r)&&(e.m[r]=l[r]);if(o)var u=o(e)}for(t&&t(s);c<i.length;c++)a=i[c],e.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return e.O(u)},s=self["webpackChunkapp"]=self["webpackChunkapp"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(460)}));s=e.O(s)})();
//# sourceMappingURL=app.3ca7229e.js.map