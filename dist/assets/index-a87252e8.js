(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var Uh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Tl={},Kd={get exports(){return Tl},set exports(s){Tl=s}};(function(s){(function(){function e(f,m){document.addEventListener?f.addEventListener("scroll",m,!1):f.attachEvent("scroll",m)}function t(f){document.body?f():document.addEventListener?document.addEventListener("DOMContentLoaded",function m(){document.removeEventListener("DOMContentLoaded",m),f()}):document.attachEvent("onreadystatechange",function m(){(document.readyState=="interactive"||document.readyState=="complete")&&(document.detachEvent("onreadystatechange",m),f())})}function n(f){this.g=document.createElement("div"),this.g.setAttribute("aria-hidden","true"),this.g.appendChild(document.createTextNode(f)),this.h=document.createElement("span"),this.i=document.createElement("span"),this.m=document.createElement("span"),this.j=document.createElement("span"),this.l=-1,this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.h.appendChild(this.m),this.i.appendChild(this.j),this.g.appendChild(this.h),this.g.appendChild(this.i)}function i(f,m){f.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+m+";"}function r(f){var m=f.g.offsetWidth,_=m+100;return f.j.style.width=_+"px",f.i.scrollLeft=_,f.h.scrollLeft=f.h.scrollWidth+100,f.l!==m?(f.l=m,!0):!1}function a(f,m){function _(){var x=S;r(x)&&x.g.parentNode!==null&&m(x.l)}var S=f;e(f.h,_),e(f.i,_),r(f)}function o(f,m,_){m=m||{},_=_||window,this.family=f,this.style=m.style||"normal",this.weight=m.weight||"normal",this.stretch=m.stretch||"normal",this.context=_}var l=null,c=null,u=null,d=null;function h(f){return c===null&&(p(f)&&/Apple/.test(window.navigator.vendor)?(f=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),c=!!f&&603>parseInt(f[1],10)):c=!1),c}function p(f){return d===null&&(d=!!f.document.fonts),d}function g(f,m){var _=f.style,S=f.weight;if(u===null){var x=document.createElement("div");try{x.style.font="condensed 100px sans-serif"}catch{}u=x.style.font!==""}return[_,S,u?f.stretch:"","100px",m].join(" ")}o.prototype.load=function(f,m){var _=this,S=f||"BESbswy",x=0,v=m||3e3,M=new Date().getTime();return new Promise(function(C,E){if(p(_.context)&&!h(_.context)){var y=new Promise(function(D,B){function F(){new Date().getTime()-M>=v?B(Error(""+v+"ms timeout exceeded")):_.context.document.fonts.load(g(_,'"'+_.family+'"'),S).then(function(O){1<=O.length?D():setTimeout(F,25)},B)}F()}),b=new Promise(function(D,B){x=setTimeout(function(){B(Error(""+v+"ms timeout exceeded"))},v)});Promise.race([b,y]).then(function(){clearTimeout(x),C(_)},E)}else t(function(){function D(){var I;(I=k!=-1&&X!=-1||k!=-1&&H!=-1||X!=-1&&H!=-1)&&((I=k!=X&&k!=H&&X!=H)||(l===null&&(I=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),l=!!I&&(536>parseInt(I[1],10)||parseInt(I[1],10)===536&&11>=parseInt(I[2],10))),I=l&&(k==G&&X==G&&H==G||k==K&&X==K&&H==K||k==L&&X==L&&H==L)),I=!I),I&&(ie.parentNode!==null&&ie.parentNode.removeChild(ie),clearTimeout(x),C(_))}function B(){if(new Date().getTime()-M>=v)ie.parentNode!==null&&ie.parentNode.removeChild(ie),E(Error(""+v+"ms timeout exceeded"));else{var I=_.context.document.hidden;(I===!0||I===void 0)&&(k=F.g.offsetWidth,X=O.g.offsetWidth,H=R.g.offsetWidth,D()),x=setTimeout(B,50)}}var F=new n(S),O=new n(S),R=new n(S),k=-1,X=-1,H=-1,G=-1,K=-1,L=-1,ie=document.createElement("div");ie.dir="ltr",i(F,g(_,"sans-serif")),i(O,g(_,"serif")),i(R,g(_,"monospace")),ie.appendChild(F.g),ie.appendChild(O.g),ie.appendChild(R.g),_.context.document.body.appendChild(ie),G=F.g.offsetWidth,K=O.g.offsetWidth,L=R.g.offsetWidth,B(),a(F,function(I){k=I,D()}),i(F,g(_,'"'+_.family+'",sans-serif')),a(O,function(I){X=I,D()}),i(O,g(_,'"'+_.family+'",serif')),a(R,function(I){H=I,D()}),i(R,g(_,'"'+_.family+'",monospace'))})})},s.exports=o})()})(Kd);const Nh=Tl;var El={},Jd={get exports(){return El},set exports(s){El=s}},na={},Qd={get exports(){return na},set exports(s){na=s}},Gc;function ep(){return Gc||(Gc=1,function(s){(function(e,t){s.exports?s.exports=t():e.EvEmitter=t()})(typeof window<"u"?window:Uh,function(){function e(){}let t=e.prototype;return t.on=function(n,i){if(!n||!i)return this;let r=this._events=this._events||{},a=r[n]=r[n]||[];return a.includes(i)||a.push(i),this},t.once=function(n,i){if(!n||!i)return this;this.on(n,i);let r=this._onceEvents=this._onceEvents||{},a=r[n]=r[n]||{};return a[i]=!0,this},t.off=function(n,i){let r=this._events&&this._events[n];if(!r||!r.length)return this;let a=r.indexOf(i);return a!=-1&&r.splice(a,1),this},t.emitEvent=function(n,i){let r=this._events&&this._events[n];if(!r||!r.length)return this;r=r.slice(0),i=i||[];let a=this._onceEvents&&this._onceEvents[n];for(let o of r)a&&a[o]&&(this.off(n,o),delete a[o]),o.apply(this,i);return this},t.allOff=function(){return delete this._events,delete this._onceEvents,this},e})}(Qd)),na}/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */(function(s){(function(e,t){s.exports?s.exports=t(e,ep()):e.imagesLoaded=t(e,e.EvEmitter)})(typeof window<"u"?window:Uh,function(t,n){let i=t.jQuery,r=t.console;function a(h){return Array.isArray(h)?h:typeof h=="object"&&typeof h.length=="number"?[...h]:[h]}function o(h,p,g){if(!(this instanceof o))return new o(h,p,g);let f=h;if(typeof h=="string"&&(f=document.querySelectorAll(h)),!f){r.error(`Bad element for imagesLoaded ${f||h}`);return}this.elements=a(f),this.options={},typeof p=="function"?g=p:Object.assign(this.options,p),g&&this.on("always",g),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))}o.prototype=Object.create(n.prototype),o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const l=[1,9,11];o.prototype.addElementImages=function(h){h.nodeName==="IMG"&&this.addImage(h),this.options.background===!0&&this.addElementBackgroundImages(h);let{nodeType:p}=h;if(!p||!l.includes(p))return;let g=h.querySelectorAll("img");for(let f of g)this.addImage(f);if(typeof this.options.background=="string"){let f=h.querySelectorAll(this.options.background);for(let m of f)this.addElementBackgroundImages(m)}};const c=/url\((['"])?(.*?)\1\)/gi;o.prototype.addElementBackgroundImages=function(h){let p=getComputedStyle(h);if(!p)return;let g=c.exec(p.backgroundImage);for(;g!==null;){let f=g&&g[2];f&&this.addBackground(f,h),g=c.exec(p.backgroundImage)}},o.prototype.addImage=function(h){let p=new u(h);this.images.push(p)},o.prototype.addBackground=function(h,p){let g=new d(h,p);this.images.push(g)},o.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}let h=(p,g,f)=>{setTimeout(()=>{this.progress(p,g,f)})};this.images.forEach(function(p){p.once("progress",h),p.check()})},o.prototype.progress=function(h,p,g){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!h.isLoaded,this.emitEvent("progress",[this,h,p]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,h),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&r&&r.log(`progress: ${g}`,h,p)},o.prototype.complete=function(){let h=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(h,[this]),this.emitEvent("always",[this]),this.jqDeferred){let p=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[p](this)}};function u(h){this.img=h}u.prototype=Object.create(n.prototype),u.prototype.check=function(){if(this.getIsImageComplete()){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src},u.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},u.prototype.confirm=function(h,p){this.isLoaded=h;let{parentNode:g}=this.img,f=g.nodeName==="PICTURE"?g:this.img;this.emitEvent("progress",[this,f,p])},u.prototype.handleEvent=function(h){let p="on"+h.type;this[p]&&this[p](h)},u.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},u.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},u.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)};function d(h,p){this.url=h,this.element=p,this.img=new Image}return d.prototype=Object.create(u.prototype),d.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},d.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype.confirm=function(h,p){this.isLoaded=h,this.emitEvent("progress",[this,this.element,p])},o.makeJQueryPlugin=function(h){h=h||t.jQuery,h&&(i=h,i.fn.imagesLoaded=function(p,g){return new o(this,p,g).jqDeferred.promise(i(this))})},o.makeJQueryPlugin(),o})})(Jd);const tp=El;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lc="150",np=0,Hc=1,ip=2,kh=1,rp=2,Ls=3,Ni=0,Sn=1,Ei=2,zi=0,Zr=1,Vc=2,Wc=3,qc=4,sp=5,Hr=100,op=101,ap=102,Xc=103,Yc=104,lp=200,cp=201,up=202,hp=203,Bh=204,Gh=205,fp=206,dp=207,pp=208,mp=209,gp=210,_p=0,vp=1,xp=2,Cl=3,yp=4,Sp=5,Mp=6,bp=7,Hh=0,wp=1,Tp=2,gi=0,Ep=1,Cp=2,Ap=3,Lp=4,Dp=5,Vh=300,rs=301,ss=302,Al=303,Ll=304,va=306,Dl=1e3,Vn=1001,Pl=1002,$t=1003,jc=1004,Pa=1005,An=1006,Pp=1007,js=1008,mr=1009,Rp=1010,Ip=1011,Wh=1012,zp=1013,tr=1014,nr=1015,$s=1016,Op=1017,Fp=1018,Kr=1020,Up=1021,Wn=1023,Np=1024,kp=1025,ar=1026,os=1027,Bp=1028,Gp=1029,Hp=1030,Vp=1031,Wp=1033,Ra=33776,Ia=33777,za=33778,Oa=33779,$c=35840,Zc=35841,Kc=35842,Jc=35843,qp=36196,Qc=37492,eu=37496,tu=37808,nu=37809,iu=37810,ru=37811,su=37812,ou=37813,au=37814,lu=37815,cu=37816,uu=37817,hu=37818,fu=37819,du=37820,pu=37821,Fa=36492,Xp=36283,mu=36284,gu=36285,_u=36286,gr=3e3,ot=3001,Yp=3200,jp=3201,$p=0,Zp=1,jn="srgb",Zs="srgb-linear",qh="display-p3",Ua=7680,Kp=519,vu=35044,xu="300 es",Rl=1035;class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Na=Math.PI/180,yu=180/Math.PI;function so(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[s&255]+Nt[s>>8&255]+Nt[s>>16&255]+Nt[s>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function vn(s,e,t){return Math.max(e,Math.min(t,s))}function Jp(s,e){return(s%e+e)%e}function ka(s,e,t){return(1-t)*s+t*e}function Su(s){return(s&s-1)===0&&s!==0}function Qp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ho(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],f=i[0],m=i[3],_=i[6],S=i[1],x=i[4],v=i[7],M=i[2],C=i[5],E=i[8];return r[0]=a*f+o*S+l*M,r[3]=a*m+o*x+l*C,r[6]=a*_+o*v+l*E,r[1]=c*f+u*S+d*M,r[4]=c*m+u*x+d*C,r[7]=c*_+u*v+d*E,r[2]=h*f+p*S+g*M,r[5]=h*m+p*x+g*C,r[8]=h*_+p*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,g=t*d+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return e[0]=d*f,e[1]=(i*c-u*n)*f,e[2]=(o*n-i*a)*f,e[3]=h*f,e[4]=(u*t-i*l)*f,e[5]=(i*r-o*t)*f,e[6]=p*f,e[7]=(n*l-c*t)*f,e[8]=(a*t-n*r)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ba.makeScale(e,t)),this}rotate(e){return this.premultiply(Ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ba.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Qt;function Xh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}class oo{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=r[a+0],p=r[a+1],g=r[a+2],f=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=f;return}if(d!==f||l!==h||c!==p||u!==g){let m=1-o;const _=l*h+c*p+u*g+d*f,S=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const M=Math.sqrt(x),C=Math.atan2(M,_*S);m=Math.sin(m*C)/M,o=Math.sin(o*C)/M}const v=o*S;if(l=l*m+h*v,c=c*m+p*v,u=u*m+g*v,d=d*m+f*v,m===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[a],h=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-o*p,e[t+2]=c*g+u*p+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(r/2),h=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,d=l*i+r*n-a*t,h=-r*t-a*n-o*i;return this.x=c*l+h*-r+u*-o-d*-a,this.y=u*l+h*-a+d*-r-c*-o,this.z=d*l+h*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new Y,Mu=new oo;function Jr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ha(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const em=new Qt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),tm=new Qt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Ci=new Y;function nm(s){return s.convertSRGBToLinear(),Ci.set(s.r,s.g,s.b).applyMatrix3(tm),s.setRGB(Ci.x,Ci.y,Ci.z)}function im(s){return Ci.set(s.r,s.g,s.b).applyMatrix3(em),s.setRGB(Ci.x,Ci.y,Ci.z).convertLinearToSRGB()}const rm={[Zs]:s=>s,[jn]:s=>s.convertSRGBToLinear(),[qh]:nm},sm={[Zs]:s=>s,[jn]:s=>s.convertLinearToSRGB(),[qh]:im},qt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Zs},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=rm[e],i=sm[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Tr;class Yh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tr===void 0&&(Tr=Ks("canvas")),Tr.width=e.width,Tr.height=e.height;const n=Tr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Jr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jr(t[n]/255)*255):t[n]=Jr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class jh{constructor(e=null){this.isSource=!0,this.uuid=so(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Va(i[a].image)):r.push(Va(i[a]))}else r=Va(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Va(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let om=0;class rn extends gs{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=Vn,i=Vn,r=An,a=js,o=Wn,l=mr,c=rn.DEFAULT_ANISOTROPY,u=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=so(),this.name="",this.source=new jh(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dl:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dl:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Vh;rn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,n=0,i=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],f=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-f)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+f)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(p+1)/2,M=(_+1)/2,C=(u+h)/4,E=(d+f)/4,y=(g+m)/4;return x>v&&x>M?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=C/n,r=E/n):v>M?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=C/i,r=y/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=E/r,i=y/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-f)*(d-f)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-f)/S,this.z=(h-u)/S,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _r extends gs{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new rn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:An,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $h extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class am extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ao{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>r&&(r=u),d>a&&(a=d),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>r&&(r=u),d>a&&(a=d),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)qi.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(qi)}else n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox),Wa.applyMatrix4(e.matrixWorld),this.union(Wa);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),fo.subVectors(this.max,xs),Er.subVectors(e.a,xs),Cr.subVectors(e.b,xs),Ar.subVectors(e.c,xs),Si.subVectors(Cr,Er),Mi.subVectors(Ar,Cr),Xi.subVectors(Er,Ar);let t=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-Xi.z,Xi.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,Xi.z,0,-Xi.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-Xi.y,Xi.x,0];return!qa(t,Er,Cr,Ar,fo)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,Er,Cr,Ar,fo))?!1:(po.crossVectors(Si,Mi),t=[po.x,po.y,po.z],qa(t,Er,Cr,Ar,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],qi=new Y,Wa=new ao,Er=new Y,Cr=new Y,Ar=new Y,Si=new Y,Mi=new Y,Xi=new Y,xs=new Y,fo=new Y,po=new Y,Yi=new Y;function qa(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Yi.fromArray(s,r);const o=i.x*Math.abs(Yi.x)+i.y*Math.abs(Yi.y)+i.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),u=n.dot(Yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const lm=new ao,ys=new Y,Xa=new Y;class cc{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const t=ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ys,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(Xa)),this.expandByPoint(ys.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new Y,Ya=new Y,mo=new Y,bi=new Y,ja=new Y,go=new Y,$a=new Y;class cm{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ya.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Ya);const r=e.distanceTo(t)*.5,a=-this.direction.dot(mo),o=bi.dot(this.direction),l=-bi.dot(mo),c=bi.lengthSq(),u=Math.abs(1-a*a);let d,h,p,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const f=1/u;d*=f,h*=f,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ya).addScaledVector(mo,h),p}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const n=oi.dot(this.direction),i=oi.dot(oi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,n,i,r){ja.subVectors(t,e),go.subVectors(n,e),$a.crossVectors(ja,go);let a=this.direction.dot($a),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,e);const l=o*this.direction.dot(go.crossVectors(bi,go));if(l<0)return null;const c=o*this.direction.dot(ja.cross(bi));if(c<0||l+c>a)return null;const u=-o*bi.dot($a);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,o,l,c,u,d,h,p,g,f,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=d,_[14]=h,_[3]=p,_[7]=g,_[11]=f,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Lr.setFromMatrixColumn(e,0).length(),r=1/Lr.setFromMatrixColumn(e,1).length(),a=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,p=a*d,g=o*u,f=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-f*c,t[9]=-o*l,t[2]=f-h*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,f=c*d;t[0]=h+f*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=f+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,f=c*d;t[0]=h-f*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=f-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,g=o*u,f=o*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+f,t[1]=l*d,t[5]=f*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,g=o*l,f=o*c;t[0]=l*u,t[4]=f-h*d,t[8]=g*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-f*d}else if(e.order==="XZY"){const h=a*l,p=a*c,g=o*l,f=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+f,t[5]=a*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=f*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(um,e,hm)}lookAt(e,t,n){const i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),wi.crossVectors(n,fn),wi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),wi.crossVectors(n,fn)),wi.normalize(),_o.crossVectors(fn,wi),i[0]=wi.x,i[4]=_o.x,i[8]=fn.x,i[1]=wi.y,i[5]=_o.y,i[9]=fn.y,i[2]=wi.z,i[6]=_o.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],f=n[6],m=n[10],_=n[14],S=n[3],x=n[7],v=n[11],M=n[15],C=i[0],E=i[4],y=i[8],b=i[12],D=i[1],B=i[5],F=i[9],O=i[13],R=i[2],k=i[6],X=i[10],H=i[14],G=i[3],K=i[7],L=i[11],ie=i[15];return r[0]=a*C+o*D+l*R+c*G,r[4]=a*E+o*B+l*k+c*K,r[8]=a*y+o*F+l*X+c*L,r[12]=a*b+o*O+l*H+c*ie,r[1]=u*C+d*D+h*R+p*G,r[5]=u*E+d*B+h*k+p*K,r[9]=u*y+d*F+h*X+p*L,r[13]=u*b+d*O+h*H+p*ie,r[2]=g*C+f*D+m*R+_*G,r[6]=g*E+f*B+m*k+_*K,r[10]=g*y+f*F+m*X+_*L,r[14]=g*b+f*O+m*H+_*ie,r[3]=S*C+x*D+v*R+M*G,r[7]=S*E+x*B+v*k+M*K,r[11]=S*y+x*F+v*X+M*L,r[15]=S*b+x*O+v*H+M*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],f=e[7],m=e[11],_=e[15];return g*(+r*l*d-i*c*d-r*o*h+n*c*h+i*o*p-n*l*p)+f*(+t*l*p-t*c*h+r*a*h-i*a*p+i*c*u-r*l*u)+m*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*u-n*c*u)+_*(-i*o*u-t*l*d+t*o*h+i*a*d-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],f=e[13],m=e[14],_=e[15],S=d*m*c-f*h*c+f*l*p-o*m*p-d*l*_+o*h*_,x=g*h*c-u*m*c-g*l*p+a*m*p+u*l*_-a*h*_,v=u*f*c-g*d*c+g*o*p-a*f*p-u*o*_+a*d*_,M=g*d*l-u*f*l-g*o*h+a*f*h+u*o*m-a*d*m,C=t*S+n*x+i*v+r*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return e[0]=S*E,e[1]=(f*h*r-d*m*r-f*i*p+n*m*p+d*i*_-n*h*_)*E,e[2]=(o*m*r-f*l*r+f*i*c-n*m*c-o*i*_+n*l*_)*E,e[3]=(d*l*r-o*h*r-d*i*c+n*h*c+o*i*p-n*l*p)*E,e[4]=x*E,e[5]=(u*m*r-g*h*r+g*i*p-t*m*p-u*i*_+t*h*_)*E,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*_-t*l*_)*E,e[7]=(a*h*r-u*l*r+u*i*c-t*h*c-a*i*p+t*l*p)*E,e[8]=v*E,e[9]=(g*d*r-u*f*r-g*n*p+t*f*p+u*n*_-t*d*_)*E,e[10]=(a*f*r-g*o*r+g*n*c-t*f*c-a*n*_+t*o*_)*E,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*p-t*o*p)*E,e[12]=M*E,e[13]=(u*f*i-g*d*i+g*n*h-t*f*h-u*n*m+t*d*m)*E,e[14]=(g*o*i-a*f*i-g*n*l+t*f*l+a*n*m-t*o*m)*E,e[15]=(a*d*i-u*o*i+u*n*l-t*d*l-a*n*h+t*o*h)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,g=r*d,f=a*u,m=a*d,_=o*d,S=l*c,x=l*u,v=l*d,M=n.x,C=n.y,E=n.z;return i[0]=(1-(f+_))*M,i[1]=(p+v)*M,i[2]=(g-x)*M,i[3]=0,i[4]=(p-v)*C,i[5]=(1-(h+_))*C,i[6]=(m+S)*C,i[7]=0,i[8]=(g+x)*E,i[9]=(m-S)*E,i[10]=(1-(h+f))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Lr.set(i[0],i[1],i[2]).length();const a=Lr.set(i[4],i[5],i[6]).length(),o=Lr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Fn.copy(this);const c=1/r,u=1/a,d=1/o;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,t.setFromRotationMatrix(Fn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),h=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),d=(t+e)*l,h=(n+i)*c,p=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Lr=new Y,Fn=new Ut,um=new Y(0,0,0),hm=new Y(1,1,1),wi=new Y,_o=new Y,fn=new Y,bu=new Ut,wu=new oo;class xa{constructor(e=0,t=0,n=0,i=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(vn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-vn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(vn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class Zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fm=0;const Tu=new Y,Dr=new oo,ai=new Ut,vo=new Y,Ss=new Y,dm=new Y,pm=new oo,Eu=new Y(1,0,0),Cu=new Y(0,1,0),Au=new Y(0,0,1),mm={type:"added"},Lu={type:"removed"};class Mn extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new Y,t=new xa,n=new oo,i=new Y(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Qt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(Eu,e)}rotateY(e){return this.rotateOnAxis(Cu,e)}rotateZ(e){return this.rotateOnAxis(Au,e)}translateOnAxis(e,t){return Tu.copy(e).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eu,e)}translateY(e){return this.translateOnAxis(Cu,e)}translateZ(e){return this.translateOnAxis(Au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vo.copy(e):vo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Ss,vo,this.up):ai.lookAt(vo,Ss,this.up),this.quaternion.setFromRotationMatrix(ai),i&&(ai.extractRotation(i.matrixWorld),Dr.setFromRotationMatrix(ai),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Lu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,dm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mn.DEFAULT_UP=new Y(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new Y,li=new Y,Za=new Y,ci=new Y,Pr=new Y,Rr=new Y,Du=new Y,Ka=new Y,Ja=new Y,Qa=new Y;class fi{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Un.subVectors(e,t),i.cross(Un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Un.subVectors(i,t),li.subVectors(n,t),Za.subVectors(e,t);const a=Un.dot(Un),o=Un.dot(li),l=Un.dot(Za),c=li.dot(li),u=li.dot(Za),d=a*c-o*o;if(d===0)return r.set(-2,-1,-1);const h=1/d,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ci),ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ci),l.set(0,0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l}static isFrontFacing(e,t,n,i){return Un.subVectors(n,t),li.subVectors(e,t),Un.cross(li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Un.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return fi.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Pr.subVectors(i,n),Rr.subVectors(r,n),Ka.subVectors(e,n);const l=Pr.dot(Ka),c=Rr.dot(Ka);if(l<=0&&c<=0)return t.copy(n);Ja.subVectors(e,i);const u=Pr.dot(Ja),d=Rr.dot(Ja);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Pr,a);Qa.subVectors(e,r);const p=Pr.dot(Qa),g=Rr.dot(Qa);if(g>=0&&p<=g)return t.copy(r);const f=p*c-l*g;if(f<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Rr,o);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Du.subVectors(r,i),o=(d-u)/(d-u+(p-g)),t.copy(i).addScaledVector(Du,o);const _=1/(m+f+h);return a=f*_,o=h*_,t.copy(n).addScaledVector(Pr,a).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let gm=0;class ya extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=so(),this.name="",this.type="Material",this.blending=Zr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Bh,this.blendDst=Gh,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ua,this.stencilZFail=Ua,this.stencilZPass=Ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},xo={h:0,s:0,l:0};function el(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qt.workingColorSpace){if(e=Jp(e,1),t=vn(t,0,1),n=vn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=el(a,r,e+1/3),this.g=el(a,r,e),this.b=el(a,r,e-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(e,t=jn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,qt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,qt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,qt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,qt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const n=Kh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return qt.fromWorkingColorSpace(kt.copy(this),e),vn(kt.r*255,0,255)<<16^vn(kt.g*255,0,255)<<8^vn(kt.b*255,0,255)<<0}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,r=kt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=jn){qt.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Nn),Nn.h+=e,Nn.s+=t,Nn.l+=n,this.setHSL(Nn.h,Nn.s,Nn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(xo);const n=ka(Nn.h,xo.h,t),i=ka(Nn.s,xo.s,t),r=ka(Nn.l,xo.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new ct;ct.NAMES=Kh;class Jh extends ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new Y,yo=new Ke;class ei{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ho(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ho(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ho(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ho(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Qh extends ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ef extends ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lr extends ei{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _m=0;const Tn=new Ut,tl=new Mn,Ir=new Y,dn=new ao,Ms=new ao,Lt=new Y;class br extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xh(e)?ef:Qh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return tl.lookAt(e),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new lr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(dn.min,Ms.min),dn.expandByPoint(Lt),Lt.addVectors(dn.max,Ms.max),dn.expandByPoint(Lt)):(dn.expandByPoint(Ms.min),dn.expandByPoint(Ms.max))}dn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Lt.fromBufferAttribute(o,c),l&&(Ir.fromBufferAttribute(e,c),Lt.add(Ir)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<o;D++)c[D]=new Y,u[D]=new Y;const d=new Y,h=new Y,p=new Y,g=new Ke,f=new Ke,m=new Ke,_=new Y,S=new Y;function x(D,B,F){d.fromArray(i,D*3),h.fromArray(i,B*3),p.fromArray(i,F*3),g.fromArray(a,D*2),f.fromArray(a,B*2),m.fromArray(a,F*2),h.sub(d),p.sub(d),f.sub(g),m.sub(g);const O=1/(f.x*m.y-m.x*f.y);isFinite(O)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(p,-f.y).multiplyScalar(O),S.copy(p).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(O),c[D].add(_),c[B].add(_),c[F].add(_),u[D].add(S),u[B].add(S),u[F].add(S))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let D=0,B=v.length;D<B;++D){const F=v[D],O=F.start,R=F.count;for(let k=O,X=O+R;k<X;k+=3)x(n[k+0],n[k+1],n[k+2])}const M=new Y,C=new Y,E=new Y,y=new Y;function b(D){E.fromArray(r,D*3),y.copy(E);const B=c[D];M.copy(B),M.sub(E.multiplyScalar(E.dot(B))).normalize(),C.crossVectors(y,B);const O=C.dot(u[D])<0?-1:1;l[D*4]=M.x,l[D*4+1]=M.y,l[D*4+2]=M.z,l[D*4+3]=O}for(let D=0,B=v.length;D<B;++D){const F=v[D],O=F.start,R=F.count;for(let k=O,X=O+R;k<X;k+=3)b(n[k+0]),b(n[k+1]),b(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new Y,r=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,d=new Y;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),f=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,f),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let f=0,m=l.length;f<m;f++){o.isInterleavedBufferAttribute?p=l[f]*o.data.stride+o.offset:p=l[f]*u;for(let _=0;_<u;_++)h[g++]=c[p++]}return new ei(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new br,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pu=new Ut,Yn=new cm,So=new cc,Ru=new Y,bs=new Y,ws=new Y,Ts=new Y,nl=new Y,Mo=new Y,bo=new Ke,wo=new Ke,To=new Ke,il=new Y,Eo=new Y;class pi extends Mn{constructor(e=new br,t=new Jh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(nl.fromBufferAttribute(d,e),a?Mo.addScaledVector(nl,u):Mo.addScaledVector(nl.sub(t),u))}t.add(Mo)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(r),Yn.copy(e.ray).recast(e.near),So.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(So,Ru)===null||Yn.origin.distanceToSquared(Ru)>(e.far-e.near)**2))||(Pu.copy(r).invert(),Yn.copy(e.ray).applyMatrix4(Pu),n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,d=n.groups,h=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,g=d.length;p<g;p++){const f=d[p],m=i[f.materialIndex],_=Math.max(f.start,h.start),S=Math.min(o.count,Math.min(f.start+f.count,h.start+h.count));for(let x=_,v=S;x<v;x+=3){const M=o.getX(x),C=o.getX(x+1),E=o.getX(x+2);a=Co(this,m,e,Yn,c,u,M,C,E),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const p=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let f=p,m=g;f<m;f+=3){const _=o.getX(f),S=o.getX(f+1),x=o.getX(f+2);a=Co(this,i,e,Yn,c,u,_,S,x),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,g=d.length;p<g;p++){const f=d[p],m=i[f.materialIndex],_=Math.max(f.start,h.start),S=Math.min(l.count,Math.min(f.start+f.count,h.start+h.count));for(let x=_,v=S;x<v;x+=3){const M=x,C=x+1,E=x+2;a=Co(this,m,e,Yn,c,u,M,C,E),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const p=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let f=p,m=g;f<m;f+=3){const _=f,S=f+1,x=f+2;a=Co(this,i,e,Yn,c,u,_,S,x),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}}}function vm(s,e,t,n,i,r,a,o){let l;if(e.side===Sn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Ni,o),l===null)return null;Eo.copy(o),Eo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Eo);return c<t.near||c>t.far?null:{distance:c,point:Eo.clone(),object:s}}function Co(s,e,t,n,i,r,a,o,l){s.getVertexPosition(a,bs),s.getVertexPosition(o,ws),s.getVertexPosition(l,Ts);const c=vm(s,e,t,n,bs,ws,Ts,il);if(c){i&&(bo.fromBufferAttribute(i,a),wo.fromBufferAttribute(i,o),To.fromBufferAttribute(i,l),c.uv=fi.getUV(il,bs,ws,Ts,bo,wo,To,new Ke)),r&&(bo.fromBufferAttribute(r,a),wo.fromBufferAttribute(r,o),To.fromBufferAttribute(r,l),c.uv2=fi.getUV(il,bs,ws,Ts,bo,wo,To,new Ke));const u={a,b:o,c:l,normal:new Y,materialIndex:0};fi.getNormal(bs,ws,Ts,u.normal),c.face=u}return c}class lo extends br{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new lr(c,3)),this.setAttribute("normal",new lr(u,3)),this.setAttribute("uv",new lr(d,2));function g(f,m,_,S,x,v,M,C,E,y,b){const D=v/E,B=M/y,F=v/2,O=M/2,R=C/2,k=E+1,X=y+1;let H=0,G=0;const K=new Y;for(let L=0;L<X;L++){const ie=L*B-O;for(let I=0;I<k;I++){const Q=I*D-F;K[f]=Q*S,K[m]=ie*x,K[_]=R,c.push(K.x,K.y,K.z),K[f]=0,K[m]=0,K[_]=C>0?1:-1,u.push(K.x,K.y,K.z),d.push(I/E),d.push(1-L/y),H+=1}}for(let L=0;L<y;L++)for(let ie=0;ie<E;ie++){const I=h+ie+k*L,Q=h+ie+k*(L+1),ne=h+(ie+1)+k*(L+1),N=h+(ie+1)+k*L;l.push(I,Q,N),l.push(Q,ne,N),G+=6}o.addGroup(p,G,b),p+=G,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function as(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(s){const e={};for(let t=0;t<s.length;t++){const n=as(s[t]);for(const i in n)e[i]=n[i]}return e}function xm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function tf(s){return s.getRenderTarget()===null&&s.outputEncoding===ot?jn:Zs}const ym={clone:as,merge:Yt};var Sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sm,this.fragmentShader=Mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=xm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nf extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ln extends nf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yu*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Na*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zr=-90,Or=1;class bm extends Mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ln(zr,Or,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Ln(zr,Or,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Ln(zr,Or,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Ln(zr,Or,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Ln(zr,Or,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ln(zr,Or,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=gi,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class rf extends rn{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:rs,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wm extends _r{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new rf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new lo(5,5,5),r=new ki({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:zi});r.uniforms.tEquirect.value=t;const a=new pi(i,r),o=t.minFilter;return t.minFilter===js&&(t.minFilter=An),new bm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const rl=new Y,Tm=new Y,Em=new Qt;class Zi{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=rl.subVectors(n,t).cross(Tm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Em.getNormalMatrix(e),i=this.coplanarPoint(rl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new cc,Ao=new Y;class sf{constructor(e=new Zi,t=new Zi,n=new Zi,i=new Zi,r=new Zi,a=new Zi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],d=n[7],h=n[8],p=n[9],g=n[10],f=n[11],m=n[12],_=n[13],S=n[14],x=n[15];return t[0].setComponents(o-i,d-l,f-h,x-m).normalize(),t[1].setComponents(o+i,d+l,f+h,x+m).normalize(),t[2].setComponents(o+r,d+c,f+p,x+_).normalize(),t[3].setComponents(o-r,d-c,f-p,x-_).normalize(),t[4].setComponents(o-a,d-u,f-g,x-S).normalize(),t[5].setComponents(o+a,d+u,f+g,x+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ao.x=i.normal.x>0?e.max.x:e.min.x,Ao.y=i.normal.y>0?e.max.y:e.min.y,Ao.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function of(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Cm(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,h=c.usage,p=s.createBuffer();s.bindBuffer(u,p),s.bufferData(u,d,h),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,d){const h=u.array,p=u.updateRange;s.bindBuffer(d,c),p.count===-1?s.bufferSubData(d,0,h):(t?s.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):s.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(r(d.buffer,c,u),d.version=c.version)}return{get:a,remove:o,update:l}}class Sa extends br{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,p=[],g=[],f=[],m=[];for(let _=0;_<u;_++){const S=_*h-a;for(let x=0;x<c;x++){const v=x*d-r;g.push(v,-S,0),f.push(0,0,1),m.push(x/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<o;S++){const x=S+c*_,v=S+c*(_+1),M=S+1+c*(_+1),C=S+1+c*_;p.push(x,v,C),p.push(v,M,C)}this.setIndex(p),this.setAttribute("position",new lr(g,3)),this.setAttribute("normal",new lr(f,3)),this.setAttribute("uv",new lr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zm="vec3 transformed = vec3( position );",Om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Um=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ym=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,jm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$m=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",tg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ng=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_g=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,bg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Cg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ag=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ug=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Hg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,a_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,l_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,c_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,h_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,d_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,__=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,v_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,x_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,y_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,S_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,M_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,b_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,w_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,T_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,R_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,I_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,z_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,O_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,N_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,K_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,r0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Be={alphamap_fragment:Am,alphamap_pars_fragment:Lm,alphatest_fragment:Dm,alphatest_pars_fragment:Pm,aomap_fragment:Rm,aomap_pars_fragment:Im,begin_vertex:zm,beginnormal_vertex:Om,bsdfs:Fm,iridescence_fragment:Um,bumpmap_pars_fragment:Nm,clipping_planes_fragment:km,clipping_planes_pars_fragment:Bm,clipping_planes_pars_vertex:Gm,clipping_planes_vertex:Hm,color_fragment:Vm,color_pars_fragment:Wm,color_pars_vertex:qm,color_vertex:Xm,common:Ym,cube_uv_reflection_fragment:jm,defaultnormal_vertex:$m,displacementmap_pars_vertex:Zm,displacementmap_vertex:Km,emissivemap_fragment:Jm,emissivemap_pars_fragment:Qm,encodings_fragment:eg,encodings_pars_fragment:tg,envmap_fragment:ng,envmap_common_pars_fragment:ig,envmap_pars_fragment:rg,envmap_pars_vertex:sg,envmap_physical_pars_fragment:_g,envmap_vertex:og,fog_vertex:ag,fog_pars_vertex:lg,fog_fragment:cg,fog_pars_fragment:ug,gradientmap_pars_fragment:hg,lightmap_fragment:fg,lightmap_pars_fragment:dg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:vg,lights_toon_pars_fragment:xg,lights_phong_fragment:yg,lights_phong_pars_fragment:Sg,lights_physical_fragment:Mg,lights_physical_pars_fragment:bg,lights_fragment_begin:wg,lights_fragment_maps:Tg,lights_fragment_end:Eg,logdepthbuf_fragment:Cg,logdepthbuf_pars_fragment:Ag,logdepthbuf_pars_vertex:Lg,logdepthbuf_vertex:Dg,map_fragment:Pg,map_pars_fragment:Rg,map_particle_fragment:Ig,map_particle_pars_fragment:zg,metalnessmap_fragment:Og,metalnessmap_pars_fragment:Fg,morphcolor_vertex:Ug,morphnormal_vertex:Ng,morphtarget_pars_vertex:kg,morphtarget_vertex:Bg,normal_fragment_begin:Gg,normal_fragment_maps:Hg,normal_pars_fragment:Vg,normal_pars_vertex:Wg,normal_vertex:qg,normalmap_pars_fragment:Xg,clearcoat_normal_fragment_begin:Yg,clearcoat_normal_fragment_maps:jg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:Zg,output_fragment:Kg,packing:Jg,premultiplied_alpha_fragment:Qg,project_vertex:e_,dithering_fragment:t_,dithering_pars_fragment:n_,roughnessmap_fragment:i_,roughnessmap_pars_fragment:r_,shadowmap_pars_fragment:s_,shadowmap_pars_vertex:o_,shadowmap_vertex:a_,shadowmask_pars_fragment:l_,skinbase_vertex:c_,skinning_pars_vertex:u_,skinning_vertex:h_,skinnormal_vertex:f_,specularmap_fragment:d_,specularmap_pars_fragment:p_,tonemapping_fragment:m_,tonemapping_pars_fragment:g_,transmission_fragment:__,transmission_pars_fragment:v_,uv_pars_fragment:x_,uv_pars_vertex:y_,uv_vertex:S_,uv2_pars_fragment:M_,uv2_pars_vertex:b_,uv2_vertex:w_,worldpos_vertex:T_,background_vert:E_,background_frag:C_,backgroundCube_vert:A_,backgroundCube_frag:L_,cube_vert:D_,cube_frag:P_,depth_vert:R_,depth_frag:I_,distanceRGBA_vert:z_,distanceRGBA_frag:O_,equirect_vert:F_,equirect_frag:U_,linedashed_vert:N_,linedashed_frag:k_,meshbasic_vert:B_,meshbasic_frag:G_,meshlambert_vert:H_,meshlambert_frag:V_,meshmatcap_vert:W_,meshmatcap_frag:q_,meshnormal_vert:X_,meshnormal_frag:Y_,meshphong_vert:j_,meshphong_frag:$_,meshphysical_vert:Z_,meshphysical_frag:K_,meshtoon_vert:J_,meshtoon_frag:Q_,points_vert:e0,points_frag:t0,shadow_vert:n0,shadow_frag:i0,sprite_vert:r0,sprite_frag:s0},ce={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Qt},uv2Transform:{value:new Qt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qt}}},Zn={basic:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ct(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Yt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Yt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ct(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Yt([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Yt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Yt([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Yt([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Yt([ce.common,ce.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Yt([ce.lights,ce.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Zn.physical={uniforms:Yt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Lo={r:0,b:0,g:0};function o0(s,e,t,n,i,r,a){const o=new ct(0);let l=r===!0?0:1,c,u,d=null,h=0,p=null;function g(m,_){let S=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const v=s.xr,M=v.getSession&&v.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?f(o,l):x&&x.isColor&&(f(x,1),S=!0),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===va)?(u===void 0&&(u=new pi(new lo(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:as(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==ot,(d!==x||h!==x.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,p=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new pi(new Sa(2,2),new ki({name:"BackgroundMaterial",uniforms:as(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function f(m,_){m.getRGB(Lo,tf(s)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),l=_,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,f(o,l)},render:g}}function a0(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function d(R,k,X,H,G){let K=!1;if(a){const L=f(H,X,k);c!==L&&(c=L,p(c.object)),K=_(R,H,X,G),K&&S(R,H,X,G)}else{const L=k.wireframe===!0;(c.geometry!==H.id||c.program!==X.id||c.wireframe!==L)&&(c.geometry=H.id,c.program=X.id,c.wireframe=L,K=!0)}G!==null&&t.update(G,34963),(K||u)&&(u=!1,y(R,k,X,H),G!==null&&s.bindBuffer(34963,t.get(G).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function f(R,k,X){const H=X.wireframe===!0;let G=o[R.id];G===void 0&&(G={},o[R.id]=G);let K=G[k.id];K===void 0&&(K={},G[k.id]=K);let L=K[H];return L===void 0&&(L=m(h()),K[H]=L),L}function m(R){const k=[],X=[],H=[];for(let G=0;G<i;G++)k[G]=0,X[G]=0,H[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:H,object:R,attributes:{},index:null}}function _(R,k,X,H){const G=c.attributes,K=k.attributes;let L=0;const ie=X.getAttributes();for(const I in ie)if(ie[I].location>=0){const ne=G[I];let N=K[I];if(N===void 0&&(I==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),I==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),ne===void 0||ne.attribute!==N||N&&ne.data!==N.data)return!0;L++}return c.attributesNum!==L||c.index!==H}function S(R,k,X,H){const G={},K=k.attributes;let L=0;const ie=X.getAttributes();for(const I in ie)if(ie[I].location>=0){let ne=K[I];ne===void 0&&(I==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),I==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));const N={};N.attribute=ne,ne&&ne.data&&(N.data=ne.data),G[I]=N,L++}c.attributes=G,c.attributesNum=L,c.index=H}function x(){const R=c.newAttributes;for(let k=0,X=R.length;k<X;k++)R[k]=0}function v(R){M(R,0)}function M(R,k){const X=c.newAttributes,H=c.enabledAttributes,G=c.attributeDivisors;X[R]=1,H[R]===0&&(s.enableVertexAttribArray(R),H[R]=1),G[R]!==k&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,k),G[R]=k)}function C(){const R=c.newAttributes,k=c.enabledAttributes;for(let X=0,H=k.length;X<H;X++)k[X]!==R[X]&&(s.disableVertexAttribArray(X),k[X]=0)}function E(R,k,X,H,G,K){n.isWebGL2===!0&&(X===5124||X===5125)?s.vertexAttribIPointer(R,k,X,G,K):s.vertexAttribPointer(R,k,X,H,G,K)}function y(R,k,X,H){if(n.isWebGL2===!1&&(R.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const G=H.attributes,K=X.getAttributes(),L=k.defaultAttributeValues;for(const ie in K){const I=K[ie];if(I.location>=0){let Q=G[ie];if(Q===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){const ne=Q.normalized,N=Q.itemSize,se=t.get(Q);if(se===void 0)continue;const le=se.buffer,he=se.type,_e=se.bytesPerElement;if(Q.isInterleavedBufferAttribute){const ye=Q.data,Ie=ye.stride,fe=Q.offset;if(ye.isInstancedInterleavedBuffer){for(let ze=0;ze<I.locationSize;ze++)M(I.location+ze,ye.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ze=0;ze<I.locationSize;ze++)v(I.location+ze);s.bindBuffer(34962,le);for(let ze=0;ze<I.locationSize;ze++)E(I.location+ze,N/I.locationSize,he,ne,Ie*_e,(fe+N/I.locationSize*ze)*_e)}else{if(Q.isInstancedBufferAttribute){for(let ye=0;ye<I.locationSize;ye++)M(I.location+ye,Q.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ye=0;ye<I.locationSize;ye++)v(I.location+ye);s.bindBuffer(34962,le);for(let ye=0;ye<I.locationSize;ye++)E(I.location+ye,N/I.locationSize,he,ne,N*_e,N/I.locationSize*ye*_e)}}else if(L!==void 0){const ne=L[ie];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(I.location,ne);break;case 3:s.vertexAttrib3fv(I.location,ne);break;case 4:s.vertexAttrib4fv(I.location,ne);break;default:s.vertexAttrib1fv(I.location,ne)}}}}C()}function b(){F();for(const R in o){const k=o[R];for(const X in k){const H=k[X];for(const G in H)g(H[G].object),delete H[G];delete k[X]}delete o[R]}}function D(R){if(o[R.id]===void 0)return;const k=o[R.id];for(const X in k){const H=k[X];for(const G in H)g(H[G].object),delete H[G];delete k[X]}delete o[R.id]}function B(R){for(const k in o){const X=o[k];if(X[R.id]===void 0)continue;const H=X[R.id];for(const G in H)g(H[G].object),delete H[G];delete X[R.id]}}function F(){O(),u=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:F,resetDefaultState:O,dispose:b,releaseStatesOfGeometry:D,releaseStatesOfProgram:B,initAttributes:x,enableAttribute:v,disableUnusedAttributes:C}}function l0(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,d){if(d===0)return;let h,p;if(i)h=s,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,c,u,d),t.update(u,r,d)}this.setMode=a,this.render=o,this.renderInstances=l}function c0(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=s.getParameter(34930),h=s.getParameter(35660),p=s.getParameter(3379),g=s.getParameter(34076),f=s.getParameter(34921),m=s.getParameter(36347),_=s.getParameter(36348),S=s.getParameter(36349),x=h>0,v=a||e.has("OES_texture_float"),M=x&&v,C=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:M,maxSamples:C}}function u0(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Zi,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||i;return i=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,f=d.clipIntersection,m=d.clipShadows,_=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:n,x=S*4;let v=_.clippingState||null;l.value=v,v=u(g,h,x,p);for(let M=0;M!==x;++M)v[M]=t[M];_.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,g){const f=d!==null?d.length:0;let m=null;if(f!==0){if(m=l.value,g!==!0||m===null){const _=p+f*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,v=p;x!==f;++x,v+=4)a.copy(d[x]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}}function h0(s){let e=new WeakMap;function t(a,o){return o===Al?a.mapping=rs:o===Ll&&(a.mapping=ss),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Al||o===Ll)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wm(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class f0 extends nf{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qr=4,Iu=[.125,.215,.35,.446,.526,.582],er=20,sl=new f0,zu=new ct;let ol=null;const Ki=(1+Math.sqrt(5))/2,Ur=1/Ki,Ou=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Ki,Ur),new Y(0,Ki,-Ur),new Y(Ur,0,Ki),new Y(-Ur,0,Ki),new Y(Ki,Ur,0),new Y(-Ki,Ur,0)];class Fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ol=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ol),e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ol=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:$s,format:Wn,encoding:gr,depthBuffer:!1},i=Uu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d0(r)),this._blurMaterial=p0(r,e,t)}return i}_compileMaterial(e){const t=new pi(this._lodPlanes[0],e);this._renderer.compile(t,sl)}_sceneToCubeUV(e,t,n,i){const o=new Ln(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(zu),u.toneMapping=gi,u.autoClear=!1;const p=new Jh({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new pi(new lo,p);let f=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,f=!0):(p.color.copy(zu),f=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):S===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const x=this._cubeSize;Do(i,S*x,_>2?x:0,x,x),u.setRenderTarget(i),f&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===rs||e.mapping===ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new pi(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Do(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,sl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ou[(i-1)%Ou.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new pi(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*er-1),f=r/g,m=isFinite(r)?1+Math.floor(u*f):er;m>er&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${er}`);const _=[];let S=0;for(let E=0;E<er;++E){const y=E/f,b=Math.exp(-y*y/2);_.push(b),E===0?S+=b:E<m&&(S+=2*b)}for(let E=0;E<_.length;E++)_[E]=_[E]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const v=this._sizeLods[i],M=3*v*(i>x-qr?i-x+qr:0),C=4*(this._cubeSize-v);Do(t,M,C,3*v,2*v),l.setRenderTarget(t),l.render(d,sl)}}function d0(s){const e=[],t=[],n=[];let i=s;const r=s-qr+1+Iu.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-qr?l=Iu[a-s+qr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,f=3,m=2,_=1,S=new Float32Array(f*g*p),x=new Float32Array(m*g*p),v=new Float32Array(_*g*p);for(let C=0;C<p;C++){const E=C%3*2/3-1,y=C>2?0:-1,b=[E,y,0,E+2/3,y,0,E+2/3,y+1,0,E,y,0,E+2/3,y+1,0,E,y+1,0];S.set(b,f*g*C),x.set(h,m*g*C);const D=[C,C,C,C,C,C];v.set(D,_*g*C)}const M=new br;M.setAttribute("position",new ei(S,f)),M.setAttribute("uv",new ei(x,m)),M.setAttribute("faceIndex",new ei(v,_)),e.push(M),i>qr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uu(s,e,t){const n=new _r(s,e,t);return n.texture.mapping=va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function p0(s,e,t){const n=new Float32Array(er),i=new Y(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Nu(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function ku(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function uc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function m0(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Al||l===Ll,u=l===rs||l===ss;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Fu(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new Fu(s));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function g0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _0(s,e,t,n){const i={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],34962);const p=d.morphAttributes;for(const g in p){const f=p[g];for(let m=0,_=f.length;m<_;m++)e.update(f[m],34962)}}function c(d){const h=[],p=d.index,g=d.attributes.position;let f=0;if(p!==null){const S=p.array;f=p.version;for(let x=0,v=S.length;x<v;x+=3){const M=S[x+0],C=S[x+1],E=S[x+2];h.push(M,C,C,E,E,M)}}else{const S=g.array;f=g.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const M=x+0,C=x+1,E=x+2;h.push(M,C,C,E,E,M)}}const m=new(Xh(h)?ef:Qh)(h,1);m.version=f;const _=r.get(d);_&&e.remove(_),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function v0(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,p){s.drawElements(r,p,o,h*l),t.update(p,r,1)}function d(h,p,g){if(g===0)return;let f,m;if(i)f=s,m="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,p,o,h*l,g),t.update(p,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function x0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function y0(s,e){return s[0]-e[0]}function S0(s,e){return Math.abs(e[1])-Math.abs(s[1])}function M0(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Ot,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==f){let k=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",k)};var p=k;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let b=0;x===!0&&(b=1),v===!0&&(b=2),M===!0&&(b=3);let D=u.attributes.position.count*b,B=1;D>e.maxTextureSize&&(B=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const F=new Float32Array(D*B*4*f),O=new $h(F,D,B,f);O.type=nr,O.needsUpdate=!0;const R=b*4;for(let X=0;X<f;X++){const H=C[X],G=E[X],K=y[X],L=D*B*4*X;for(let ie=0;ie<H.count;ie++){const I=ie*R;x===!0&&(a.fromBufferAttribute(H,ie),F[L+I+0]=a.x,F[L+I+1]=a.y,F[L+I+2]=a.z,F[L+I+3]=0),v===!0&&(a.fromBufferAttribute(G,ie),F[L+I+4]=a.x,F[L+I+5]=a.y,F[L+I+6]=a.z,F[L+I+7]=0),M===!0&&(a.fromBufferAttribute(K,ie),F[L+I+8]=a.x,F[L+I+9]=a.y,F[L+I+10]=a.z,F[L+I+11]=K.itemSize===4?a.w:1)}}m={count:f,texture:O,size:new Ke(D,B)},r.set(u,m),u.addEventListener("dispose",k)}let _=0;for(let x=0;x<h.length;x++)_+=h[x];const S=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(s,"morphTargetBaseInfluence",S),d.getUniforms().setValue(s,"morphTargetInfluences",h),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let f=n[u.id];if(f===void 0||f.length!==g){f=[];for(let v=0;v<g;v++)f[v]=[v,0];n[u.id]=f}for(let v=0;v<g;v++){const M=f[v];M[0]=v,M[1]=h[v]}f.sort(S0);for(let v=0;v<8;v++)v<g&&f[v][1]?(o[v][0]=f[v][0],o[v][1]=f[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(y0);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let S=0;for(let v=0;v<8;v++){const M=o[v],C=M[0],E=M[1];C!==Number.MAX_SAFE_INTEGER&&E?(m&&u.getAttribute("morphTarget"+v)!==m[C]&&u.setAttribute("morphTarget"+v,m[C]),_&&u.getAttribute("morphNormal"+v)!==_[C]&&u.setAttribute("morphNormal"+v,_[C]),i[v]=E,S+=E):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function b0(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const af=new rn,lf=new $h,cf=new am,uf=new rf,Bu=[],Gu=[],Hu=new Float32Array(16),Vu=new Float32Array(9),Wu=new Float32Array(4);function _s(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Bu[i];if(r===void 0&&(r=new Float32Array(i),Bu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Et(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ct(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ma(s,e){let t=Gu[e];t===void 0&&(t=new Int32Array(e),Gu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function w0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function T0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2fv(this.addr,e),Ct(t,e)}}function E0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;s.uniform3fv(this.addr,e),Ct(t,e)}}function C0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4fv(this.addr,e),Ct(t,e)}}function A0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Et(t,n))return;Wu.set(n),s.uniformMatrix2fv(this.addr,!1,Wu),Ct(t,n)}}function L0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Et(t,n))return;Vu.set(n),s.uniformMatrix3fv(this.addr,!1,Vu),Ct(t,n)}}function D0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Et(t,n))return;Hu.set(n),s.uniformMatrix4fv(this.addr,!1,Hu),Ct(t,n)}}function P0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function R0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2iv(this.addr,e),Ct(t,e)}}function I0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3iv(this.addr,e),Ct(t,e)}}function z0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4iv(this.addr,e),Ct(t,e)}}function O0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function F0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2uiv(this.addr,e),Ct(t,e)}}function U0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3uiv(this.addr,e),Ct(t,e)}}function N0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4uiv(this.addr,e),Ct(t,e)}}function k0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||af,i)}function B0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cf,i)}function G0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uf,i)}function H0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lf,i)}function V0(s){switch(s){case 5126:return w0;case 35664:return T0;case 35665:return E0;case 35666:return C0;case 35674:return A0;case 35675:return L0;case 35676:return D0;case 5124:case 35670:return P0;case 35667:case 35671:return R0;case 35668:case 35672:return I0;case 35669:case 35673:return z0;case 5125:return O0;case 36294:return F0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return H0}}function W0(s,e){s.uniform1fv(this.addr,e)}function q0(s,e){const t=_s(e,this.size,2);s.uniform2fv(this.addr,t)}function X0(s,e){const t=_s(e,this.size,3);s.uniform3fv(this.addr,t)}function Y0(s,e){const t=_s(e,this.size,4);s.uniform4fv(this.addr,t)}function j0(s,e){const t=_s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $0(s,e){const t=_s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Z0(s,e){const t=_s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function K0(s,e){s.uniform1iv(this.addr,e)}function J0(s,e){s.uniform2iv(this.addr,e)}function Q0(s,e){s.uniform3iv(this.addr,e)}function ev(s,e){s.uniform4iv(this.addr,e)}function tv(s,e){s.uniform1uiv(this.addr,e)}function nv(s,e){s.uniform2uiv(this.addr,e)}function iv(s,e){s.uniform3uiv(this.addr,e)}function rv(s,e){s.uniform4uiv(this.addr,e)}function sv(s,e,t){const n=this.cache,i=e.length,r=Ma(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||af,r[a])}function ov(s,e,t){const n=this.cache,i=e.length,r=Ma(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||cf,r[a])}function av(s,e,t){const n=this.cache,i=e.length,r=Ma(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||uf,r[a])}function lv(s,e,t){const n=this.cache,i=e.length,r=Ma(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||lf,r[a])}function cv(s){switch(s){case 5126:return W0;case 35664:return q0;case 35665:return X0;case 35666:return Y0;case 35674:return j0;case 35675:return $0;case 35676:return Z0;case 5124:case 35670:return K0;case 35667:case 35671:return J0;case 35668:case 35672:return Q0;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}class uv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=V0(t.type)}}class hv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=cv(t.type)}}class fv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const al=/(\w+)(\])?(\[|\.)?/g;function qu(s,e){s.seq.push(e),s.map[e.id]=e}function dv(s,e,t){const n=s.name,i=n.length;for(al.lastIndex=0;;){const r=al.exec(n),a=al.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){qu(t,c===void 0?new uv(o,s,e):new hv(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new fv(o),qu(t,d)),t=d}}}class qo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);dv(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Xu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let pv=0;function mv(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function gv(s){switch(s){case gr:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Yu(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+mv(s.getShaderSource(e),a)}else return i}function _v(s,e){const t=gv(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function vv(s,e){let t;switch(e){case Ep:t="Linear";break;case Cp:t="Reinhard";break;case Ap:t="OptimizedCineon";break;case Lp:t="ACESFilmic";break;case Dp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xv(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function yv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sv(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ds(s){return s!==""}function ju(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $u(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(s){return s.replace(Mv,bv)}function bv(s,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Il(t)}const wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(s){return s.replace(wv,Tv)}function Tv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ku(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ev(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===kh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===rp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ls&&(e="SHADOWMAP_TYPE_VSM"),e}function Cv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case rs:case ss:e="ENVMAP_TYPE_CUBE";break;case va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Av(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ss:e="ENVMAP_MODE_REFRACTION";break}return e}function Lv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hh:e="ENVMAP_BLENDING_MULTIPLY";break;case wp:e="ENVMAP_BLENDING_MIX";break;case Tp:e="ENVMAP_BLENDING_ADD";break}return e}function Dv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pv(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ev(t),c=Cv(t),u=Av(t),d=Lv(t),h=Dv(t),p=t.isWebGL2?"":xv(t),g=yv(r),f=i.createProgram();let m,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Ds).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(Ds).join(`
`),_.length>0&&(_+=`
`)):(m=[Ku(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),_=[p,Ku(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Be.tonemapping_pars_fragment:"",t.toneMapping!==gi?vv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,_v("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),a=Il(a),a=ju(a,t),a=$u(a,t),o=Il(o),o=ju(o,t),o=$u(o,t),a=Zu(a),o=Zu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=S+m+a,v=S+_+o,M=Xu(i,35633,x),C=Xu(i,35632,v);if(i.attachShader(f,M),i.attachShader(f,C),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),s.debug.checkShaderErrors){const b=i.getProgramInfoLog(f).trim(),D=i.getShaderInfoLog(M).trim(),B=i.getShaderInfoLog(C).trim();let F=!0,O=!0;if(i.getProgramParameter(f,35714)===!1){F=!1;const R=Yu(i,M,"vertex"),k=Yu(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+b+`
`+R+`
`+k)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(D===""||B==="")&&(O=!1);O&&(this.diagnostics={runnable:F,programLog:b,vertexShader:{log:D,prefix:m},fragmentShader:{log:B,prefix:_}})}i.deleteShader(M),i.deleteShader(C);let E;this.getUniforms=function(){return E===void 0&&(E=new qo(i,f)),E};let y;return this.getAttributes=function(){return y===void 0&&(y=Sv(i,f)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=pv++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=M,this.fragmentShader=C,this}let Rv=0;class Iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zv(e),t.set(e,n)),n}}class zv{constructor(e){this.id=Rv++,this.code=e,this.usedTimes=0}}function Ov(s,e,t,n,i,r,a){const o=new Zh,l=new Iv,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y,b,D,B,F){const O=B.fog,R=F.geometry,k=y.isMeshStandardMaterial?B.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||k),H=X&&X.mapping===va?X.image.height:null,G=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const K=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,L=K!==void 0?K.length:0;let ie=0;R.morphAttributes.position!==void 0&&(ie=1),R.morphAttributes.normal!==void 0&&(ie=2),R.morphAttributes.color!==void 0&&(ie=3);let I,Q,ne,N;if(G){const Ie=Zn[G];I=Ie.vertexShader,Q=Ie.fragmentShader}else I=y.vertexShader,Q=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),N=l.getFragmentShaderID(y);const se=s.getRenderTarget(),le=y.alphaTest>0,he=y.clearcoat>0,_e=y.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:y.type,vertexShader:I,fragmentShader:Q,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:N,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:h,outputEncoding:se===null?s.outputEncoding:se.isXRRenderTarget===!0?se.texture.encoding:gr,map:!!y.map,matcap:!!y.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:H,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Zp,tangentSpaceNormalMap:y.normalMapType===$p,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===ot,clearcoat:he,clearcoatMap:he&&!!y.clearcoatMap,clearcoatRoughnessMap:he&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!y.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!y.iridescenceMap,iridescenceThicknessMap:_e&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Zr,alphaMap:!!y.alphaMap,alphaTest:le,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!R.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!O,useFog:y.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:gi,useLegacyLights:s.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ei,flipSided:y.side===Sn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)b.push(D),b.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(_(b,y),S(b,y),b.push(s.outputEncoding)),b.push(y.customProgramCacheKey),b.join()}function _(y,b){y.push(b.precision),y.push(b.outputEncoding),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.combine),y.push(b.vertexUvs),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function S(y,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.map&&o.enable(4),b.matcap&&o.enable(5),b.envMap&&o.enable(6),b.lightMap&&o.enable(7),b.aoMap&&o.enable(8),b.emissiveMap&&o.enable(9),b.bumpMap&&o.enable(10),b.normalMap&&o.enable(11),b.objectSpaceNormalMap&&o.enable(12),b.tangentSpaceNormalMap&&o.enable(13),b.clearcoat&&o.enable(14),b.clearcoatMap&&o.enable(15),b.clearcoatRoughnessMap&&o.enable(16),b.clearcoatNormalMap&&o.enable(17),b.iridescence&&o.enable(18),b.iridescenceMap&&o.enable(19),b.iridescenceThicknessMap&&o.enable(20),b.displacementMap&&o.enable(21),b.specularMap&&o.enable(22),b.roughnessMap&&o.enable(23),b.metalnessMap&&o.enable(24),b.gradientMap&&o.enable(25),b.alphaMap&&o.enable(26),b.alphaTest&&o.enable(27),b.vertexColors&&o.enable(28),b.vertexAlphas&&o.enable(29),b.vertexUvs&&o.enable(30),b.vertexTangents&&o.enable(31),b.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.specularIntensityMap&&o.enable(15),b.specularColorMap&&o.enable(16),b.transmission&&o.enable(17),b.transmissionMap&&o.enable(18),b.thicknessMap&&o.enable(19),b.sheen&&o.enable(20),b.sheenColorMap&&o.enable(21),b.sheenRoughnessMap&&o.enable(22),b.decodeVideoTexture&&o.enable(23),b.opaque&&o.enable(24),y.push(o.mask)}function x(y){const b=g[y.type];let D;if(b){const B=Zn[b];D=ym.clone(B.uniforms)}else D=y.uniforms;return D}function v(y,b){let D;for(let B=0,F=c.length;B<F;B++){const O=c[B];if(O.cacheKey===b){D=O,++D.usedTimes;break}}return D===void 0&&(D=new Pv(s,b,y,r),c.push(D)),D}function M(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function E(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:x,acquireProgram:v,releaseProgram:M,releaseShaderCache:C,programs:c,dispose:E}}function Fv(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Uv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ju(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,h,p,g,f,m){let _=s[e];return _===void 0?(_={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:f,group:m},s[e]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=p,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=f,_.group=m),e++,_}function o(d,h,p,g,f,m){const _=a(d,h,p,g,f,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(d,h,p,g,f,m){const _=a(d,h,p,g,f,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(d,h){t.length>1&&t.sort(d||Uv),n.length>1&&n.sort(h||Ju),i.length>1&&i.sort(h||Ju)}function u(){for(let d=e,h=s.length;d<h;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function Nv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Qu,s.set(n,[a])):i>=r.length?(a=new Qu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function kv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new ct};break;case"SpotLight":t={position:new Y,direction:new Y,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function Bv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Gv=0;function Hv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Vv(s,e){const t=new kv,n=Bv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new Y);const r=new Y,a=new Ut,o=new Ut;function l(u,d){let h=0,p=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,m=0,_=0,S=0,x=0,v=0,M=0,C=0,E=0,y=0;u.sort(Hv);const b=d===!0?Math.PI:1;for(let B=0,F=u.length;B<F;B++){const O=u[B],R=O.color,k=O.intensity,X=O.distance,H=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=R.r*k*b,p+=R.g*k*b,g+=R.b*k*b;else if(O.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(O.sh.coefficients[G],k);else if(O.isDirectionalLight){const G=t.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity*b),O.castShadow){const K=O.shadow,L=n.get(O);L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,i.directionalShadow[f]=L,i.directionalShadowMap[f]=H,i.directionalShadowMatrix[f]=O.shadow.matrix,v++}i.directional[f]=G,f++}else if(O.isSpotLight){const G=t.get(O);G.position.setFromMatrixPosition(O.matrixWorld),G.color.copy(R).multiplyScalar(k*b),G.distance=X,G.coneCos=Math.cos(O.angle),G.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),G.decay=O.decay,i.spot[_]=G;const K=O.shadow;if(O.map&&(i.spotLightMap[E]=O.map,E++,K.updateMatrices(O),O.castShadow&&y++),i.spotLightMatrix[_]=K.matrix,O.castShadow){const L=n.get(O);L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,i.spotShadow[_]=L,i.spotShadowMap[_]=H,C++}_++}else if(O.isRectAreaLight){const G=t.get(O);G.color.copy(R).multiplyScalar(k),G.halfWidth.set(O.width*.5,0,0),G.halfHeight.set(0,O.height*.5,0),i.rectArea[S]=G,S++}else if(O.isPointLight){const G=t.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity*b),G.distance=O.distance,G.decay=O.decay,O.castShadow){const K=O.shadow,L=n.get(O);L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,L.shadowCameraNear=K.camera.near,L.shadowCameraFar=K.camera.far,i.pointShadow[m]=L,i.pointShadowMap[m]=H,i.pointShadowMatrix[m]=O.shadow.matrix,M++}i.point[m]=G,m++}else if(O.isHemisphereLight){const G=t.get(O);G.skyColor.copy(O.color).multiplyScalar(k*b),G.groundColor.copy(O.groundColor).multiplyScalar(k*b),i.hemi[x]=G,x++}}S>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==S||D.hemiLength!==x||D.numDirectionalShadows!==v||D.numPointShadows!==M||D.numSpotShadows!==C||D.numSpotMaps!==E)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=S,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=C+E-y,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=y,D.directionalLength=f,D.pointLength=m,D.spotLength=_,D.rectAreaLength=S,D.hemiLength=x,D.numDirectionalShadows=v,D.numPointShadows=M,D.numSpotShadows=C,D.numSpotMaps=E,i.version=Gv++)}function c(u,d){let h=0,p=0,g=0,f=0,m=0;const _=d.matrixWorldInverse;for(let S=0,x=u.length;S<x;S++){const v=u[S];if(v.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),h++}else if(v.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const M=i.rectArea[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),o.identity(),a.copy(v.matrixWorld),a.premultiply(_),o.extractRotation(a),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),f++}else if(v.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),p++}else if(v.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function eh(s,e){const t=new Vv(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Wv(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new eh(s,e),t.set(r,[l])):a>=o.length?(l=new eh(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class qv extends ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xv extends ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Y,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $v(s,e,t){let n=new sf;const i=new Ke,r=new Ke,a=new Ot,o=new qv({depthPacking:jp}),l=new Xv,c={},u=t.maxTextureSize,d={[Ni]:Sn,[Sn]:Ni,[Ei]:Ei},h=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Yv,fragmentShader:jv}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new br;g.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new pi(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kh,this.render=function(v,M,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const E=s.getRenderTarget(),y=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),D=s.state;D.setBlending(zi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let B=0,F=v.length;B<F;B++){const O=v[B],R=O.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const k=R.getFrameExtents();if(i.multiply(k),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/k.x),i.x=r.x*k.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/k.y),i.y=r.y*k.y,R.mapSize.y=r.y)),R.map===null){const H=this.type!==Ls?{minFilter:$t,magFilter:$t}:{};R.map=new _r(i.x,i.y,H),R.map.texture.name=O.name+".shadowMap",R.camera.updateProjectionMatrix()}s.setRenderTarget(R.map),s.clear();const X=R.getViewportCount();for(let H=0;H<X;H++){const G=R.getViewport(H);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),D.viewport(a),R.updateMatrices(O,H),n=R.getFrustum(),x(M,C,R.camera,O,this.type)}R.isPointLightShadow!==!0&&this.type===Ls&&_(R,C),R.needsUpdate=!1}m.needsUpdate=!1,s.setRenderTarget(E,y,b)};function _(v,M){const C=e.update(f);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new _r(i.x,i.y)),h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(M,null,C,h,f,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(M,null,C,p,f,null)}function S(v,M,C,E,y,b){let D=null;const B=C.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(B!==void 0)D=B;else if(D=C.isPointLight===!0?l:o,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const F=D.uuid,O=M.uuid;let R=c[F];R===void 0&&(R={},c[F]=R);let k=R[O];k===void 0&&(k=D.clone(),R[O]=k),D=k}return D.visible=M.visible,D.wireframe=M.wireframe,b===Ls?D.side=M.shadowSide!==null?M.shadowSide:M.side:D.side=M.shadowSide!==null?M.shadowSide:d[M.side],D.alphaMap=M.alphaMap,D.alphaTest=M.alphaTest,D.map=M.map,D.clipShadows=M.clipShadows,D.clippingPlanes=M.clippingPlanes,D.clipIntersection=M.clipIntersection,D.displacementMap=M.displacementMap,D.displacementScale=M.displacementScale,D.displacementBias=M.displacementBias,D.wireframeLinewidth=M.wireframeLinewidth,D.linewidth=M.linewidth,C.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(C.matrixWorld),D.nearDistance=E,D.farDistance=y),D}function x(v,M,C,E,y){if(v.visible===!1)return;if(v.layers.test(M.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&y===Ls)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,v.matrixWorld);const B=e.update(v),F=v.material;if(Array.isArray(F)){const O=B.groups;for(let R=0,k=O.length;R<k;R++){const X=O[R],H=F[X.materialIndex];if(H&&H.visible){const G=S(v,H,E,C.near,C.far,y);s.renderBufferDirect(C,null,B,G,v,X)}}}else if(F.visible){const O=S(v,F,E,C.near,C.far,y);s.renderBufferDirect(C,null,B,O,v,null)}}const D=v.children;for(let B=0,F=D.length;B<F;B++)x(D[B],M,C,E,y)}}function Zv(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const j=new Ot;let J=null;const ae=new Ot(0,0,0,0);return{setMask:function(me){J!==me&&!P&&(s.colorMask(me,me,me,me),J=me)},setLocked:function(me){P=me},setClear:function(me,$e,tt,mt,Pe){Pe===!0&&(me*=mt,$e*=mt,tt*=mt),j.set(me,$e,tt,mt),ae.equals(j)===!1&&(s.clearColor(me,$e,tt,mt),ae.copy(j))},reset:function(){P=!1,J=null,ae.set(-1,0,0,0)}}}function r(){let P=!1,j=null,J=null,ae=null;return{setTest:function(me){me?le(2929):he(2929)},setMask:function(me){j!==me&&!P&&(s.depthMask(me),j=me)},setFunc:function(me){if(J!==me){switch(me){case _p:s.depthFunc(512);break;case vp:s.depthFunc(519);break;case xp:s.depthFunc(513);break;case Cl:s.depthFunc(515);break;case yp:s.depthFunc(514);break;case Sp:s.depthFunc(518);break;case Mp:s.depthFunc(516);break;case bp:s.depthFunc(517);break;default:s.depthFunc(515)}J=me}},setLocked:function(me){P=me},setClear:function(me){ae!==me&&(s.clearDepth(me),ae=me)},reset:function(){P=!1,j=null,J=null,ae=null}}}function a(){let P=!1,j=null,J=null,ae=null,me=null,$e=null,tt=null,mt=null,Pe=null;return{setTest:function(de){P||(de?le(2960):he(2960))},setMask:function(de){j!==de&&!P&&(s.stencilMask(de),j=de)},setFunc:function(de,te,xe){(J!==de||ae!==te||me!==xe)&&(s.stencilFunc(de,te,xe),J=de,ae=te,me=xe)},setOp:function(de,te,xe){($e!==de||tt!==te||mt!==xe)&&(s.stencilOp(de,te,xe),$e=de,tt=te,mt=xe)},setLocked:function(de){P=de},setClear:function(de){Pe!==de&&(s.clearStencil(de),Pe=de)},reset:function(){P=!1,j=null,J=null,ae=null,me=null,$e=null,tt=null,mt=null,Pe=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,d=new WeakMap;let h={},p={},g=new WeakMap,f=[],m=null,_=!1,S=null,x=null,v=null,M=null,C=null,E=null,y=null,b=!1,D=null,B=null,F=null,O=null,R=null;const k=s.getParameter(35661);let X=!1,H=0;const G=s.getParameter(7938);G.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=H>=1):G.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=H>=2);let K=null,L={};const ie=s.getParameter(3088),I=s.getParameter(2978),Q=new Ot().fromArray(ie),ne=new Ot().fromArray(I);function N(P,j,J){const ae=new Uint8Array(4),me=s.createTexture();s.bindTexture(P,me),s.texParameteri(P,10241,9728),s.texParameteri(P,10240,9728);for(let $e=0;$e<J;$e++)s.texImage2D(j+$e,0,6408,1,1,0,6408,5121,ae);return me}const se={};se[3553]=N(3553,3553,1),se[34067]=N(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),le(2929),l.setFunc(Cl),Ze(!1),W(Hc),le(2884),Je(zi);function le(P){h[P]!==!0&&(s.enable(P),h[P]=!0)}function he(P){h[P]!==!1&&(s.disable(P),h[P]=!1)}function _e(P,j){return p[P]!==j?(s.bindFramebuffer(P,j),p[P]=j,n&&(P===36009&&(p[36160]=j),P===36160&&(p[36009]=j)),!0):!1}function ye(P,j){let J=f,ae=!1;if(P)if(J=g.get(j),J===void 0&&(J=[],g.set(j,J)),P.isWebGLMultipleRenderTargets){const me=P.texture;if(J.length!==me.length||J[0]!==36064){for(let $e=0,tt=me.length;$e<tt;$e++)J[$e]=36064+$e;J.length=me.length,ae=!0}}else J[0]!==36064&&(J[0]=36064,ae=!0);else J[0]!==1029&&(J[0]=1029,ae=!0);ae&&(t.isWebGL2?s.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Ie(P){return m!==P?(s.useProgram(P),m=P,!0):!1}const fe={[Hr]:32774,[op]:32778,[ap]:32779};if(n)fe[Xc]=32775,fe[Yc]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(fe[Xc]=P.MIN_EXT,fe[Yc]=P.MAX_EXT)}const ze={[lp]:0,[cp]:1,[up]:768,[Bh]:770,[gp]:776,[pp]:774,[fp]:772,[hp]:769,[Gh]:771,[mp]:775,[dp]:773};function Je(P,j,J,ae,me,$e,tt,mt){if(P===zi){_===!0&&(he(3042),_=!1);return}if(_===!1&&(le(3042),_=!0),P!==sp){if(P!==S||mt!==b){if((x!==Hr||C!==Hr)&&(s.blendEquation(32774),x=Hr,C=Hr),mt)switch(P){case Zr:s.blendFuncSeparate(1,771,1,771);break;case Vc:s.blendFunc(1,1);break;case Wc:s.blendFuncSeparate(0,769,0,1);break;case qc:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Zr:s.blendFuncSeparate(770,771,1,771);break;case Vc:s.blendFunc(770,1);break;case Wc:s.blendFuncSeparate(0,769,0,1);break;case qc:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,M=null,E=null,y=null,S=P,b=mt}return}me=me||j,$e=$e||J,tt=tt||ae,(j!==x||me!==C)&&(s.blendEquationSeparate(fe[j],fe[me]),x=j,C=me),(J!==v||ae!==M||$e!==E||tt!==y)&&(s.blendFuncSeparate(ze[J],ze[ae],ze[$e],ze[tt]),v=J,M=ae,E=$e,y=tt),S=P,b=!1}function ft(P,j){P.side===Ei?he(2884):le(2884);let J=P.side===Sn;j&&(J=!J),Ze(J),P.blending===Zr&&P.transparent===!1?Je(zi):Je(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const ae=P.stencilWrite;c.setTest(ae),ae&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Fe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?le(32926):he(32926)}function Ze(P){D!==P&&(P?s.frontFace(2304):s.frontFace(2305),D=P)}function W(P){P!==np?(le(2884),P!==B&&(P===Hc?s.cullFace(1029):P===ip?s.cullFace(1028):s.cullFace(1032))):he(2884),B=P}function je(P){P!==F&&(X&&s.lineWidth(P),F=P)}function Fe(P,j,J){P?(le(32823),(O!==j||R!==J)&&(s.polygonOffset(j,J),O=j,R=J)):he(32823)}function bt(P){P?le(3089):he(3089)}function vt(P){P===void 0&&(P=33984+k-1),K!==P&&(s.activeTexture(P),K=P)}function A(P,j,J){J===void 0&&(K===null?J=33984+k-1:J=K);let ae=L[J];ae===void 0&&(ae={type:void 0,texture:void 0},L[J]=ae),(ae.type!==P||ae.texture!==j)&&(K!==J&&(s.activeTexture(J),K=J),s.bindTexture(P,j||se[P]),ae.type=P,ae.texture=j)}function w(){const P=L[K];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(P){Q.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function Me(P){ne.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),ne.copy(P))}function ke(P,j){let J=d.get(j);J===void 0&&(J=new WeakMap,d.set(j,J));let ae=J.get(P);ae===void 0&&(ae=s.getUniformBlockIndex(j,P.name),J.set(P,ae))}function Se(P,j){const ae=d.get(j).get(P);u.get(j)!==ae&&(s.uniformBlockBinding(j,ae,P.__bindingPointIndex),u.set(j,ae))}function et(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},K=null,L={},p={},g=new WeakMap,f=[],m=null,_=!1,S=null,x=null,v=null,M=null,C=null,E=null,y=null,b=!1,D=null,B=null,F=null,O=null,R=null,Q.set(0,0,s.canvas.width,s.canvas.height),ne.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:le,disable:he,bindFramebuffer:_e,drawBuffers:ye,useProgram:Ie,setBlending:Je,setMaterial:ft,setFlipSided:Ze,setCullFace:W,setLineWidth:je,setPolygonOffset:Fe,setScissorTest:bt,activeTexture:vt,bindTexture:A,unbindTexture:w,compressedTexImage2D:Z,compressedTexImage3D:re,texImage2D:ve,texImage3D:Ae,updateUBOMapping:ke,uniformBlockBinding:Se,texStorage2D:$,texStorage3D:we,texSubImage2D:ee,texSubImage3D:oe,compressedTexSubImage2D:ge,compressedTexSubImage3D:pe,scissor:Ee,viewport:Me,reset:et}}function Kv(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,w){return _?new OffscreenCanvas(A,w):Ks("canvas")}function x(A,w,Z,re){let ee=1;if((A.width>re||A.height>re)&&(ee=re/Math.max(A.width,A.height)),ee<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const oe=w?Qp:Math.floor,ge=oe(ee*A.width),pe=oe(ee*A.height);f===void 0&&(f=S(ge,pe));const $=Z?S(ge,pe):f;return $.width=ge,$.height=pe,$.getContext("2d").drawImage(A,0,0,ge,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ge+"x"+pe+")."),$}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function v(A){return Su(A.width)&&Su(A.height)}function M(A){return o?!1:A.wrapS!==Vn||A.wrapT!==Vn||A.minFilter!==$t&&A.minFilter!==An}function C(A,w){return A.generateMipmaps&&w&&A.minFilter!==$t&&A.minFilter!==An}function E(A){s.generateMipmap(A)}function y(A,w,Z,re,ee=!1){if(o===!1)return w;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe=w;return w===6403&&(Z===5126&&(oe=33326),Z===5131&&(oe=33325),Z===5121&&(oe=33321)),w===33319&&(Z===5126&&(oe=33328),Z===5131&&(oe=33327),Z===5121&&(oe=33323)),w===6408&&(Z===5126&&(oe=34836),Z===5131&&(oe=34842),Z===5121&&(oe=re===ot&&ee===!1?35907:32856),Z===32819&&(oe=32854),Z===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function b(A,w,Z){return C(A,Z)===!0||A.isFramebufferTexture&&A.minFilter!==$t&&A.minFilter!==An?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function D(A){return A===$t||A===jc||A===Pa?9728:9729}function B(A){const w=A.target;w.removeEventListener("dispose",B),O(w),w.isVideoTexture&&g.delete(w)}function F(A){const w=A.target;w.removeEventListener("dispose",F),k(w)}function O(A){const w=n.get(A);if(w.__webglInit===void 0)return;const Z=A.source,re=m.get(Z);if(re){const ee=re[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(A),Object.keys(re).length===0&&m.delete(Z)}n.remove(A)}function R(A){const w=n.get(A);s.deleteTexture(w.__webglTexture);const Z=A.source,re=m.get(Z);delete re[w.__cacheKey],a.memory.textures--}function k(A){const w=A.texture,Z=n.get(A),re=n.get(w);if(re.__webglTexture!==void 0&&(s.deleteTexture(re.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)s.deleteFramebuffer(Z.__webglFramebuffer[ee]),Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer[ee]);else{if(s.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ee=0;ee<Z.__webglColorRenderbuffer.length;ee++)Z.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(Z.__webglColorRenderbuffer[ee]);Z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ee=0,oe=w.length;ee<oe;ee++){const ge=n.get(w[ee]);ge.__webglTexture&&(s.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(w[ee])}n.remove(w),n.remove(A)}let X=0;function H(){X=0}function G(){const A=X;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),X+=1,A}function K(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function L(A,w){const Z=n.get(A);if(A.isVideoTexture&&bt(A),A.isRenderTargetTexture===!1&&A.version>0&&Z.__version!==A.version){const re=A.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(Z,A,w);return}}t.bindTexture(3553,Z.__webglTexture,33984+w)}function ie(A,w){const Z=n.get(A);if(A.version>0&&Z.__version!==A.version){he(Z,A,w);return}t.bindTexture(35866,Z.__webglTexture,33984+w)}function I(A,w){const Z=n.get(A);if(A.version>0&&Z.__version!==A.version){he(Z,A,w);return}t.bindTexture(32879,Z.__webglTexture,33984+w)}function Q(A,w){const Z=n.get(A);if(A.version>0&&Z.__version!==A.version){_e(Z,A,w);return}t.bindTexture(34067,Z.__webglTexture,33984+w)}const ne={[Dl]:10497,[Vn]:33071,[Pl]:33648},N={[$t]:9728,[jc]:9984,[Pa]:9986,[An]:9729,[Pp]:9985,[js]:9987};function se(A,w,Z){if(Z?(s.texParameteri(A,10242,ne[w.wrapS]),s.texParameteri(A,10243,ne[w.wrapT]),(A===32879||A===35866)&&s.texParameteri(A,32882,ne[w.wrapR]),s.texParameteri(A,10240,N[w.magFilter]),s.texParameteri(A,10241,N[w.minFilter])):(s.texParameteri(A,10242,33071),s.texParameteri(A,10243,33071),(A===32879||A===35866)&&s.texParameteri(A,32882,33071),(w.wrapS!==Vn||w.wrapT!==Vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,10240,D(w.magFilter)),s.texParameteri(A,10241,D(w.minFilter)),w.minFilter!==$t&&w.minFilter!==An&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===$t||w.minFilter!==Pa&&w.minFilter!==js||w.type===nr&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===$s&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(A,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function le(A,w){let Z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",B));const re=w.source;let ee=m.get(re);ee===void 0&&(ee={},m.set(re,ee));const oe=K(w);if(oe!==A.__cacheKey){ee[oe]===void 0&&(ee[oe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ee[oe].usedTimes++;const ge=ee[A.__cacheKey];ge!==void 0&&(ee[A.__cacheKey].usedTimes--,ge.usedTimes===0&&R(w)),A.__cacheKey=oe,A.__webglTexture=ee[oe].texture}return Z}function he(A,w,Z){let re=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=35866),w.isData3DTexture&&(re=32879);const ee=le(A,w),oe=w.source;t.bindTexture(re,A.__webglTexture,33984+Z);const ge=n.get(oe);if(oe.version!==ge.__version||ee===!0){t.activeTexture(33984+Z),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const pe=M(w)&&v(w.image)===!1;let $=x(w.image,pe,!1,u);$=vt(w,$);const we=v($)||o,ve=r.convert(w.format,w.encoding);let Ae=r.convert(w.type),Ee=y(w.internalFormat,ve,Ae,w.encoding,w.isVideoTexture);se(re,w,we);let Me;const ke=w.mipmaps,Se=o&&w.isVideoTexture!==!0,et=ge.__version===void 0||ee===!0,P=b(w,$,we);if(w.isDepthTexture)Ee=6402,o?w.type===nr?Ee=36012:w.type===tr?Ee=33190:w.type===Kr?Ee=35056:Ee=33189:w.type===nr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ar&&Ee===6402&&w.type!==Wh&&w.type!==tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=tr,Ae=r.convert(w.type)),w.format===os&&Ee===6402&&(Ee=34041,w.type!==Kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Kr,Ae=r.convert(w.type))),et&&(Se?t.texStorage2D(3553,1,Ee,$.width,$.height):t.texImage2D(3553,0,Ee,$.width,$.height,0,ve,Ae,null));else if(w.isDataTexture)if(ke.length>0&&we){Se&&et&&t.texStorage2D(3553,P,Ee,ke[0].width,ke[0].height);for(let j=0,J=ke.length;j<J;j++)Me=ke[j],Se?t.texSubImage2D(3553,j,0,0,Me.width,Me.height,ve,Ae,Me.data):t.texImage2D(3553,j,Ee,Me.width,Me.height,0,ve,Ae,Me.data);w.generateMipmaps=!1}else Se?(et&&t.texStorage2D(3553,P,Ee,$.width,$.height),t.texSubImage2D(3553,0,0,0,$.width,$.height,ve,Ae,$.data)):t.texImage2D(3553,0,Ee,$.width,$.height,0,ve,Ae,$.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Se&&et&&t.texStorage3D(35866,P,Ee,ke[0].width,ke[0].height,$.depth);for(let j=0,J=ke.length;j<J;j++)Me=ke[j],w.format!==Wn?ve!==null?Se?t.compressedTexSubImage3D(35866,j,0,0,0,Me.width,Me.height,$.depth,ve,Me.data,0,0):t.compressedTexImage3D(35866,j,Ee,Me.width,Me.height,$.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage3D(35866,j,0,0,0,Me.width,Me.height,$.depth,ve,Ae,Me.data):t.texImage3D(35866,j,Ee,Me.width,Me.height,$.depth,0,ve,Ae,Me.data)}else{Se&&et&&t.texStorage2D(3553,P,Ee,ke[0].width,ke[0].height);for(let j=0,J=ke.length;j<J;j++)Me=ke[j],w.format!==Wn?ve!==null?Se?t.compressedTexSubImage2D(3553,j,0,0,Me.width,Me.height,ve,Me.data):t.compressedTexImage2D(3553,j,Ee,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage2D(3553,j,0,0,Me.width,Me.height,ve,Ae,Me.data):t.texImage2D(3553,j,Ee,Me.width,Me.height,0,ve,Ae,Me.data)}else if(w.isDataArrayTexture)Se?(et&&t.texStorage3D(35866,P,Ee,$.width,$.height,$.depth),t.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,ve,Ae,$.data)):t.texImage3D(35866,0,Ee,$.width,$.height,$.depth,0,ve,Ae,$.data);else if(w.isData3DTexture)Se?(et&&t.texStorage3D(32879,P,Ee,$.width,$.height,$.depth),t.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,ve,Ae,$.data)):t.texImage3D(32879,0,Ee,$.width,$.height,$.depth,0,ve,Ae,$.data);else if(w.isFramebufferTexture){if(et)if(Se)t.texStorage2D(3553,P,Ee,$.width,$.height);else{let j=$.width,J=$.height;for(let ae=0;ae<P;ae++)t.texImage2D(3553,ae,Ee,j,J,0,ve,Ae,null),j>>=1,J>>=1}}else if(ke.length>0&&we){Se&&et&&t.texStorage2D(3553,P,Ee,ke[0].width,ke[0].height);for(let j=0,J=ke.length;j<J;j++)Me=ke[j],Se?t.texSubImage2D(3553,j,0,0,ve,Ae,Me):t.texImage2D(3553,j,Ee,ve,Ae,Me);w.generateMipmaps=!1}else Se?(et&&t.texStorage2D(3553,P,Ee,$.width,$.height),t.texSubImage2D(3553,0,0,0,ve,Ae,$)):t.texImage2D(3553,0,Ee,ve,Ae,$);C(w,we)&&E(re),ge.__version=oe.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function _e(A,w,Z){if(w.image.length!==6)return;const re=le(A,w),ee=w.source;t.bindTexture(34067,A.__webglTexture,33984+Z);const oe=n.get(ee);if(ee.version!==oe.__version||re===!0){t.activeTexture(33984+Z),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const ge=w.isCompressedTexture||w.image[0].isCompressedTexture,pe=w.image[0]&&w.image[0].isDataTexture,$=[];for(let j=0;j<6;j++)!ge&&!pe?$[j]=x(w.image[j],!1,!0,c):$[j]=pe?w.image[j].image:w.image[j],$[j]=vt(w,$[j]);const we=$[0],ve=v(we)||o,Ae=r.convert(w.format,w.encoding),Ee=r.convert(w.type),Me=y(w.internalFormat,Ae,Ee,w.encoding),ke=o&&w.isVideoTexture!==!0,Se=oe.__version===void 0||re===!0;let et=b(w,we,ve);se(34067,w,ve);let P;if(ge){ke&&Se&&t.texStorage2D(34067,et,Me,we.width,we.height);for(let j=0;j<6;j++){P=$[j].mipmaps;for(let J=0;J<P.length;J++){const ae=P[J];w.format!==Wn?Ae!==null?ke?t.compressedTexSubImage2D(34069+j,J,0,0,ae.width,ae.height,Ae,ae.data):t.compressedTexImage2D(34069+j,J,Me,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(34069+j,J,0,0,ae.width,ae.height,Ae,Ee,ae.data):t.texImage2D(34069+j,J,Me,ae.width,ae.height,0,Ae,Ee,ae.data)}}}else{P=w.mipmaps,ke&&Se&&(P.length>0&&et++,t.texStorage2D(34067,et,Me,$[0].width,$[0].height));for(let j=0;j<6;j++)if(pe){ke?t.texSubImage2D(34069+j,0,0,0,$[j].width,$[j].height,Ae,Ee,$[j].data):t.texImage2D(34069+j,0,Me,$[j].width,$[j].height,0,Ae,Ee,$[j].data);for(let J=0;J<P.length;J++){const me=P[J].image[j].image;ke?t.texSubImage2D(34069+j,J+1,0,0,me.width,me.height,Ae,Ee,me.data):t.texImage2D(34069+j,J+1,Me,me.width,me.height,0,Ae,Ee,me.data)}}else{ke?t.texSubImage2D(34069+j,0,0,0,Ae,Ee,$[j]):t.texImage2D(34069+j,0,Me,Ae,Ee,$[j]);for(let J=0;J<P.length;J++){const ae=P[J];ke?t.texSubImage2D(34069+j,J+1,0,0,Ae,Ee,ae.image[j]):t.texImage2D(34069+j,J+1,Me,Ae,Ee,ae.image[j])}}}C(w,ve)&&E(34067),oe.__version=ee.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ye(A,w,Z,re,ee){const oe=r.convert(Z.format,Z.encoding),ge=r.convert(Z.type),pe=y(Z.internalFormat,oe,ge,Z.encoding);n.get(w).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,pe,w.width,w.height,w.depth,0,oe,ge,null):t.texImage2D(ee,0,pe,w.width,w.height,0,oe,ge,null)),t.bindFramebuffer(36160,A),Fe(w)?h.framebufferTexture2DMultisampleEXT(36160,re,ee,n.get(Z).__webglTexture,0,je(w)):(ee===3553||ee>=34069&&ee<=34074)&&s.framebufferTexture2D(36160,re,ee,n.get(Z).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(A,w,Z){if(s.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let re=33189;if(Z||Fe(w)){const ee=w.depthTexture;ee&&ee.isDepthTexture&&(ee.type===nr?re=36012:ee.type===tr&&(re=33190));const oe=je(w);Fe(w)?h.renderbufferStorageMultisampleEXT(36161,oe,re,w.width,w.height):s.renderbufferStorageMultisample(36161,oe,re,w.width,w.height)}else s.renderbufferStorage(36161,re,w.width,w.height);s.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const re=je(w);Z&&Fe(w)===!1?s.renderbufferStorageMultisample(36161,re,35056,w.width,w.height):Fe(w)?h.renderbufferStorageMultisampleEXT(36161,re,35056,w.width,w.height):s.renderbufferStorage(36161,34041,w.width,w.height),s.framebufferRenderbuffer(36160,33306,36161,A)}else{const re=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0;ee<re.length;ee++){const oe=re[ee],ge=r.convert(oe.format,oe.encoding),pe=r.convert(oe.type),$=y(oe.internalFormat,ge,pe,oe.encoding),we=je(w);Z&&Fe(w)===!1?s.renderbufferStorageMultisample(36161,we,$,w.width,w.height):Fe(w)?h.renderbufferStorageMultisampleEXT(36161,we,$,w.width,w.height):s.renderbufferStorage(36161,$,w.width,w.height)}}s.bindRenderbuffer(36161,null)}function fe(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),L(w.depthTexture,0);const re=n.get(w.depthTexture).__webglTexture,ee=je(w);if(w.depthTexture.format===ar)Fe(w)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,re,0,ee):s.framebufferTexture2D(36160,36096,3553,re,0);else if(w.depthTexture.format===os)Fe(w)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,re,0,ee):s.framebufferTexture2D(36160,33306,3553,re,0);else throw new Error("Unknown depthTexture format")}function ze(A){const w=n.get(A),Z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");fe(w.__webglFramebuffer,A)}else if(Z){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(36160,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]=s.createRenderbuffer(),Ie(w.__webglDepthbuffer[re],A,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),Ie(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function Je(A,w,Z){const re=n.get(A);w!==void 0&&ye(re.__webglFramebuffer,A,A.texture,36064,3553),Z!==void 0&&ze(A)}function ft(A){const w=A.texture,Z=n.get(A),re=n.get(w);A.addEventListener("dispose",F),A.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=w.version,a.memory.textures++);const ee=A.isWebGLCubeRenderTarget===!0,oe=A.isWebGLMultipleRenderTargets===!0,ge=v(A)||o;if(ee){Z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)Z.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(Z.__webglFramebuffer=s.createFramebuffer(),oe)if(i.drawBuffers){const pe=A.texture;for(let $=0,we=pe.length;$<we;$++){const ve=n.get(pe[$]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Fe(A)===!1){const pe=oe?w:[w];Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let $=0;$<pe.length;$++){const we=pe[$];Z.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[$]);const ve=r.convert(we.format,we.encoding),Ae=r.convert(we.type),Ee=y(we.internalFormat,ve,Ae,we.encoding,A.isXRRenderTarget===!0),Me=je(A);s.renderbufferStorageMultisample(36161,Me,Ee,A.width,A.height),s.framebufferRenderbuffer(36160,36064+$,36161,Z.__webglColorRenderbuffer[$])}s.bindRenderbuffer(36161,null),A.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(Z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,re.__webglTexture),se(34067,w,ge);for(let pe=0;pe<6;pe++)ye(Z.__webglFramebuffer[pe],A,w,36064,34069+pe);C(w,ge)&&E(34067),t.unbindTexture()}else if(oe){const pe=A.texture;for(let $=0,we=pe.length;$<we;$++){const ve=pe[$],Ae=n.get(ve);t.bindTexture(3553,Ae.__webglTexture),se(3553,ve,ge),ye(Z.__webglFramebuffer,A,ve,36064+$,3553),C(ve,ge)&&E(3553)}t.unbindTexture()}else{let pe=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?pe=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,re.__webglTexture),se(pe,w,ge),ye(Z.__webglFramebuffer,A,w,36064,pe),C(w,ge)&&E(pe),t.unbindTexture()}A.depthBuffer&&ze(A)}function Ze(A){const w=v(A)||o,Z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0,ee=Z.length;re<ee;re++){const oe=Z[re];if(C(oe,w)){const ge=A.isWebGLCubeRenderTarget?34067:3553,pe=n.get(oe).__webglTexture;t.bindTexture(ge,pe),E(ge),t.unbindTexture()}}}function W(A){if(o&&A.samples>0&&Fe(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],Z=A.width,re=A.height;let ee=16384;const oe=[],ge=A.stencilBuffer?33306:36096,pe=n.get(A),$=A.isWebGLMultipleRenderTargets===!0;if($)for(let we=0;we<w.length;we++)t.bindFramebuffer(36160,pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,pe.__webglFramebuffer),s.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,pe.__webglFramebuffer);for(let we=0;we<w.length;we++){oe.push(36064+we),A.depthBuffer&&oe.push(ge);const ve=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(ve===!1&&(A.depthBuffer&&(ee|=256),A.stencilBuffer&&(ee|=1024)),$&&s.framebufferRenderbuffer(36008,36064,36161,pe.__webglColorRenderbuffer[we]),ve===!0&&(s.invalidateFramebuffer(36008,[ge]),s.invalidateFramebuffer(36009,[ge])),$){const Ae=n.get(w[we]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,Ae,0)}s.blitFramebuffer(0,0,Z,re,0,0,Z,re,ee,9728),p&&s.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),$)for(let we=0;we<w.length;we++){t.bindFramebuffer(36160,pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+we,36161,pe.__webglColorRenderbuffer[we]);const ve=n.get(w[we]).__webglTexture;t.bindFramebuffer(36160,pe.__webglFramebuffer),s.framebufferTexture2D(36009,36064+we,3553,ve,0)}t.bindFramebuffer(36009,pe.__webglMultisampledFramebuffer)}}function je(A){return Math.min(d,A.samples)}function Fe(A){const w=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function bt(A){const w=a.render.frame;g.get(A)!==w&&(g.set(A,w),A.update())}function vt(A,w){const Z=A.encoding,re=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Rl||Z!==gr&&(Z===ot?o===!1?e.has("EXT_sRGB")===!0&&re===Wn?(A.format=Rl,A.minFilter=An,A.generateMipmaps=!1):w=Yh.sRGBToLinear(w):(re!==Wn||ee!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),w}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=L,this.setTexture2DArray=ie,this.setTexture3D=I,this.setTextureCube=Q,this.rebindTextures=Je,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Fe}function Jv(s,e,t){const n=t.isWebGL2;function i(r,a=null){let o;if(r===mr)return 5121;if(r===Op)return 32819;if(r===Fp)return 32820;if(r===Rp)return 5120;if(r===Ip)return 5122;if(r===Wh)return 5123;if(r===zp)return 5124;if(r===tr)return 5125;if(r===nr)return 5126;if(r===$s)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Up)return 6406;if(r===Wn)return 6408;if(r===Np)return 6409;if(r===kp)return 6410;if(r===ar)return 6402;if(r===os)return 34041;if(r===Rl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Bp)return 6403;if(r===Gp)return 36244;if(r===Hp)return 33319;if(r===Vp)return 33320;if(r===Wp)return 36249;if(r===Ra||r===Ia||r===za||r===Oa)if(a===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ra)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===za)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ra)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ia)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===za)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Oa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$c||r===Zc||r===Kc||r===Jc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===$c)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Qc||r===eu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Qc)return a===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===eu)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===tu||r===nu||r===iu||r===ru||r===su||r===ou||r===au||r===lu||r===cu||r===uu||r===hu||r===fu||r===du||r===pu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===tu)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nu)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===iu)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ru)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===su)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ou)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===au)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lu)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cu)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uu)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hu)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fu)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===du)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pu)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Fa)return a===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Xp||r===mu||r===gu||r===_u)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Fa)return o.COMPRESSED_RED_RGTC1_EXT;if(r===mu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_u)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Kr?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Qv extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Po extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ex={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const f of e.hand.values()){const m=t.getJointPose(f,n),_=this._getHandJoint(c,f);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ex)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Po;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tx extends rn{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:ar,u!==ar&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ar&&(n=tr),n===void 0&&u===os&&(n=Kr),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1}}class nx extends gs{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const f=t.getContextAttributes();let m=null,_=null;const S=[],x=[],v=new Set,M=new Map,C=new Ln;C.layers.enable(1),C.viewport=new Ot;const E=new Ln;E.layers.enable(2),E.viewport=new Ot;const y=[C,E],b=new Qv;b.layers.enable(1),b.layers.enable(2);let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let Q=S[I];return Q===void 0&&(Q=new ll,S[I]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(I){let Q=S[I];return Q===void 0&&(Q=new ll,S[I]=Q),Q.getGripSpace()},this.getHand=function(I){let Q=S[I];return Q===void 0&&(Q=new ll,S[I]=Q),Q.getHandSpace()};function F(I){const Q=x.indexOf(I.inputSource);if(Q===-1)return;const ne=S[Q];ne!==void 0&&ne.dispatchEvent({type:I.type,data:I.inputSource})}function O(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",R);for(let I=0;I<S.length;I++){const Q=x[I];Q!==null&&(x[I]=null,S[I].disconnect(Q))}D=null,B=null,e.setRenderTarget(m),p=null,h=null,d=null,i=null,_=null,ie.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",O),i.addEventListener("inputsourceschange",R),f.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:p}),_=new _r(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:mr,encoding:e.outputEncoding,stencilBuffer:f.stencil})}else{let Q=null,ne=null,N=null;f.depth&&(N=f.stencil?35056:33190,Q=f.stencil?os:ar,ne=f.stencil?Kr:tr);const se={colorFormat:32856,depthFormat:N,scaleFactor:r};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(se),i.updateRenderState({layers:[h]}),_=new _r(h.textureWidth,h.textureHeight,{format:Wn,type:mr,depthTexture:new tx(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});const le=e.properties.get(_);le.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(I){for(let Q=0;Q<I.removed.length;Q++){const ne=I.removed[Q],N=x.indexOf(ne);N>=0&&(x[N]=null,S[N].disconnect(ne))}for(let Q=0;Q<I.added.length;Q++){const ne=I.added[Q];let N=x.indexOf(ne);if(N===-1){for(let le=0;le<S.length;le++)if(le>=x.length){x.push(ne),N=le;break}else if(x[le]===null){x[le]=ne,N=le;break}if(N===-1)break}const se=S[N];se&&se.connect(ne)}}const k=new Y,X=new Y;function H(I,Q,ne){k.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(ne.matrixWorld);const N=k.distanceTo(X),se=Q.projectionMatrix.elements,le=ne.projectionMatrix.elements,he=se[14]/(se[10]-1),_e=se[14]/(se[10]+1),ye=(se[9]+1)/se[5],Ie=(se[9]-1)/se[5],fe=(se[8]-1)/se[0],ze=(le[8]+1)/le[0],Je=he*fe,ft=he*ze,Ze=N/(-fe+ze),W=Ze*-fe;Q.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(W),I.translateZ(Ze),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const je=he+Ze,Fe=_e+Ze,bt=Je-W,vt=ft+(N-W),A=ye*_e/Fe*je,w=Ie*_e/Fe*je;I.projectionMatrix.makePerspective(bt,vt,A,w,je,Fe)}function G(I,Q){Q===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(Q.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;b.near=E.near=C.near=I.near,b.far=E.far=C.far=I.far,(D!==b.near||B!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,B=b.far);const Q=I.parent,ne=b.cameras;G(b,Q);for(let se=0;se<ne.length;se++)G(ne[se],Q);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),I.matrix.copy(b.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const N=I.children;for(let se=0,le=N.length;se<le;se++)N[se].updateMatrixWorld(!0);ne.length===2?H(b,C,E):b.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(I){l=I,h!==null&&(h.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)},this.getPlanes=function(){return v};let K=null;function L(I,Q){if(u=Q.getViewerPose(c||a),g=Q,u!==null){const ne=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let N=!1;ne.length!==b.cameras.length&&(b.cameras.length=0,N=!0);for(let se=0;se<ne.length;se++){const le=ne[se];let he=null;if(p!==null)he=p.getViewport(le);else{const ye=d.getViewSubImage(h,le);he=ye.viewport,se===0&&(e.setRenderTargetTextures(_,ye.colorTexture,h.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(_))}let _e=y[se];_e===void 0&&(_e=new Ln,_e.layers.enable(se),_e.viewport=new Ot,y[se]=_e),_e.matrix.fromArray(le.transform.matrix),_e.projectionMatrix.fromArray(le.projectionMatrix),_e.viewport.set(he.x,he.y,he.width,he.height),se===0&&b.matrix.copy(_e.matrix),N===!0&&b.cameras.push(_e)}}for(let ne=0;ne<S.length;ne++){const N=x[ne],se=S[ne];N!==null&&se!==void 0&&se.update(N,Q,c||a)}if(K&&K(I,Q),Q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let ne=null;for(const N of v)Q.detectedPlanes.has(N)||(ne===null&&(ne=[]),ne.push(N));if(ne!==null)for(const N of ne)v.delete(N),M.delete(N),n.dispatchEvent({type:"planeremoved",data:N});for(const N of Q.detectedPlanes)if(!v.has(N))v.add(N),M.set(N,Q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:N});else{const se=M.get(N);N.lastChangedTime>se&&(M.set(N,N.lastChangedTime),n.dispatchEvent({type:"planechanged",data:N}))}}g=null}const ie=new of;ie.setAnimationLoop(L),this.setAnimationLoop=function(I){K=I},this.dispose=function(){}}}function ix(s,e){function t(f,m){m.color.getRGB(f.fogColor.value,tf(s)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function n(f,m,_,S,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(f,m):m.isMeshToonMaterial?(i(f,m),u(f,m)):m.isMeshPhongMaterial?(i(f,m),c(f,m)):m.isMeshStandardMaterial?(i(f,m),d(f,m),m.isMeshPhysicalMaterial&&h(f,m,x)):m.isMeshMatcapMaterial?(i(f,m),p(f,m)):m.isMeshDepthMaterial?i(f,m):m.isMeshDistanceMaterial?(i(f,m),g(f,m)):m.isMeshNormalMaterial?i(f,m):m.isLineBasicMaterial?(r(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?o(f,m,_,S):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Sn&&(f.bumpScale.value*=-1)),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Sn&&f.normalScale.value.negate()),m.specularMap&&(f.specularMap.value=m.specularMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap){f.lightMap.value=m.lightMap;const v=s.useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*v}m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity);let S;m.map?S=m.map:m.specularMap?S=m.specularMap:m.displacementMap?S=m.displacementMap:m.normalMap?S=m.normalMap:m.bumpMap?S=m.bumpMap:m.roughnessMap?S=m.roughnessMap:m.metalnessMap?S=m.metalnessMap:m.alphaMap?S=m.alphaMap:m.emissiveMap?S=m.emissiveMap:m.clearcoatMap?S=m.clearcoatMap:m.clearcoatNormalMap?S=m.clearcoatNormalMap:m.clearcoatRoughnessMap?S=m.clearcoatRoughnessMap:m.iridescenceMap?S=m.iridescenceMap:m.iridescenceThicknessMap?S=m.iridescenceThicknessMap:m.specularIntensityMap?S=m.specularIntensityMap:m.specularColorMap?S=m.specularColorMap:m.transmissionMap?S=m.transmissionMap:m.thicknessMap?S=m.thicknessMap:m.sheenColorMap?S=m.sheenColorMap:m.sheenRoughnessMap&&(S=m.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),f.uvTransform.value.copy(S.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uv2Transform.value.copy(x.matrix))}function r(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function o(f,m,_,S){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*_,f.scale.value=S*.5,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uvTransform.value.copy(x.matrix))}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.roughness.value=m.roughness,f.metalness.value=m.metalness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function h(f,m,_){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),f.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Sn&&f.clearcoatNormalScale.value.negate())),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap)}function p(f,m){m.matcap&&(f.matcap.value=m.matcap)}function g(f,m){f.referencePosition.value.copy(m.referencePosition),f.nearDistance.value=m.nearDistance,f.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function rx(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(35375):0;function l(S,x){const v=x.program;n.uniformBlockBinding(S,v)}function c(S,x){let v=i[S.id];v===void 0&&(g(S),v=u(S),i[S.id]=v,S.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(S,M);const C=e.render.frame;r[S.id]!==C&&(h(S),r[S.id]=C)}function u(S){const x=d();S.__bindingPointIndex=x;const v=s.createBuffer(),M=S.__size,C=S.usage;return s.bindBuffer(35345,v),s.bufferData(35345,M,C),s.bindBuffer(35345,null),s.bindBufferBase(35345,x,v),v}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const x=i[S.id],v=S.uniforms,M=S.__cache;s.bindBuffer(35345,x);for(let C=0,E=v.length;C<E;C++){const y=v[C];if(p(y,C,M)===!0){const b=y.__offset,D=Array.isArray(y.value)?y.value:[y.value];let B=0;for(let F=0;F<D.length;F++){const O=D[F],R=f(O);typeof O=="number"?(y.__data[0]=O,s.bufferSubData(35345,b+B,y.__data)):O.isMatrix3?(y.__data[0]=O.elements[0],y.__data[1]=O.elements[1],y.__data[2]=O.elements[2],y.__data[3]=O.elements[0],y.__data[4]=O.elements[3],y.__data[5]=O.elements[4],y.__data[6]=O.elements[5],y.__data[7]=O.elements[0],y.__data[8]=O.elements[6],y.__data[9]=O.elements[7],y.__data[10]=O.elements[8],y.__data[11]=O.elements[0]):(O.toArray(y.__data,B),B+=R.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,b,y.__data)}}s.bindBuffer(35345,null)}function p(S,x,v){const M=S.value;if(v[x]===void 0){if(typeof M=="number")v[x]=M;else{const C=Array.isArray(M)?M:[M],E=[];for(let y=0;y<C.length;y++)E.push(C[y].clone());v[x]=E}return!0}else if(typeof M=="number"){if(v[x]!==M)return v[x]=M,!0}else{const C=Array.isArray(v[x])?v[x]:[v[x]],E=Array.isArray(M)?M:[M];for(let y=0;y<C.length;y++){const b=C[y];if(b.equals(E[y])===!1)return b.copy(E[y]),!0}}return!1}function g(S){const x=S.uniforms;let v=0;const M=16;let C=0;for(let E=0,y=x.length;E<y;E++){const b=x[E],D={boundary:0,storage:0},B=Array.isArray(b.value)?b.value:[b.value];for(let F=0,O=B.length;F<O;F++){const R=B[F],k=f(R);D.boundary+=k.boundary,D.storage+=k.storage}if(b.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=v,E>0){C=v%M;const F=M-C;C!==0&&F-D.boundary<0&&(v+=M-C,b.__offset=v)}v+=D.storage}return C=v%M,C>0&&(v+=M-C),S.__size=v,S.__cache={},this}function f(S){const x={boundary:0,storage:0};return typeof S=="number"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function _(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:_}}function sx(){const s=Ks("canvas");return s.style.display="block",s}function hc(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:sx(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let d=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gr,this.useLegacyLights=!0,this.toneMapping=gi,this.toneMappingExposure=1;const f=this;let m=!1,_=0,S=0,x=null,v=-1,M=null;const C=new Ot,E=new Ot;let y=null,b=e.width,D=e.height,B=1,F=null,O=null;const R=new Ot(0,0,b,D),k=new Ot(0,0,b,D);let X=!1;const H=new sf;let G=!1,K=!1,L=null;const ie=new Ut,I=new Y,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return x===null?B:1}let N=t;function se(T,U){for(let V=0;V<T.length;V++){const z=T[V],q=e.getContext(z,U);if(q!==null)return q}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lc}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",Me,!1),N===null){const U=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&U.shift(),N=se(U,T),N===null)throw se(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let le,he,_e,ye,Ie,fe,ze,Je,ft,Ze,W,je,Fe,bt,vt,A,w,Z,re,ee,oe,ge,pe,$;function we(){le=new g0(N),he=new c0(N,le,s),le.init(he),ge=new Jv(N,le,he),_e=new Zv(N,le,he),ye=new x0,Ie=new Fv,fe=new Kv(N,le,_e,Ie,he,ge,ye),ze=new h0(f),Je=new m0(f),ft=new Cm(N,he),pe=new a0(N,le,ft,he),Ze=new _0(N,ft,ye,pe),W=new b0(N,Ze,ft,ye),re=new M0(N,he,fe),A=new u0(Ie),je=new Ov(f,ze,Je,le,he,pe,A),Fe=new ix(f,Ie),bt=new Nv,vt=new Wv(le,he),Z=new o0(f,ze,Je,_e,W,u,a),w=new $v(f,W,he),$=new rx(N,ye,he,_e),ee=new l0(N,le,ye,he),oe=new v0(N,le,ye,he),ye.programs=je.programs,f.capabilities=he,f.extensions=le,f.properties=Ie,f.renderLists=bt,f.shadowMap=w,f.state=_e,f.info=ye}we();const ve=new nx(f,N);this.xr=ve,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=le.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=le.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(b,D,!1))},this.getSize=function(T){return T.set(b,D)},this.setSize=function(T,U,V=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=T,D=U,e.width=Math.floor(T*B),e.height=Math.floor(U*B),V===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(b*B,D*B).floor()},this.setDrawingBufferSize=function(T,U,V){b=T,D=U,B=V,e.width=Math.floor(T*V),e.height=Math.floor(U*V),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,U,V,z){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,U,V,z),_e.viewport(C.copy(R).multiplyScalar(B).floor())},this.getScissor=function(T){return T.copy(k)},this.setScissor=function(T,U,V,z){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,U,V,z),_e.scissor(E.copy(k).multiplyScalar(B).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(T){_e.setScissorTest(X=T)},this.setOpaqueSort=function(T){F=T},this.setTransparentSort=function(T){O=T},this.getClearColor=function(T){return T.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(T=!0,U=!0,V=!0){let z=0;T&&(z|=16384),U&&(z|=256),V&&(z|=1024),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Me,!1),bt.dispose(),vt.dispose(),Ie.dispose(),ze.dispose(),Je.dispose(),W.dispose(),pe.dispose(),$.dispose(),je.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",J),ve.removeEventListener("sessionend",ae),L&&(L.dispose(),L=null),me.stop()};function Ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const T=ye.autoReset,U=w.enabled,V=w.autoUpdate,z=w.needsUpdate,q=w.type;we(),ye.autoReset=T,w.enabled=U,w.autoUpdate=V,w.needsUpdate=z,w.type=q}function Me(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ke(T){const U=T.target;U.removeEventListener("dispose",ke),Se(U)}function Se(T){et(T),Ie.remove(T)}function et(T){const U=Ie.get(T).programs;U!==void 0&&(U.forEach(function(V){je.releaseProgram(V)}),T.isShaderMaterial&&je.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,V,z,q,ue){U===null&&(U=Q);const Te=q.isMesh&&q.matrixWorld.determinant()<0,Le=Oe(T,U,V,z,q);_e.setMaterial(z,Te);let Ce=V.index,De=1;z.wireframe===!0&&(Ce=Ze.getWireframeAttribute(V),De=2);const Re=V.drawRange,Ne=V.attributes.position;let nt=Re.start*De,Ye=(Re.start+Re.count)*De;ue!==null&&(nt=Math.max(nt,ue.start*De),Ye=Math.min(Ye,(ue.start+ue.count)*De)),Ce!==null?(nt=Math.max(nt,0),Ye=Math.min(Ye,Ce.count)):Ne!=null&&(nt=Math.max(nt,0),Ye=Math.min(Ye,Ne.count));const it=Ye-nt;if(it<0||it===1/0)return;pe.setup(q,z,Le,V,Ce);let At,at=ee;if(Ce!==null&&(At=ft.get(Ce),at=oe,at.setIndex(At)),q.isMesh)z.wireframe===!0?(_e.setLineWidth(z.wireframeLinewidth*ne()),at.setMode(1)):at.setMode(4);else if(q.isLine){let Ve=z.linewidth;Ve===void 0&&(Ve=1),_e.setLineWidth(Ve*ne()),q.isLineSegments?at.setMode(1):q.isLineLoop?at.setMode(2):at.setMode(3)}else q.isPoints?at.setMode(0):q.isSprite&&at.setMode(4);if(q.isInstancedMesh)at.renderInstances(nt,it,q.count);else if(V.isInstancedBufferGeometry){const Ve=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ri=Math.min(V.instanceCount,Ve);at.renderInstances(nt,it,ri)}else at.render(nt,it)},this.compile=function(T,U){function V(z,q,ue){z.transparent===!0&&z.side===Ei&&z.forceSinglePass===!1?(z.side=Sn,z.needsUpdate=!0,te(z,q,ue),z.side=Ni,z.needsUpdate=!0,te(z,q,ue),z.side=Ei):te(z,q,ue)}h=vt.get(T),h.init(),g.push(h),T.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),h.setupLights(f.useLegacyLights),T.traverse(function(z){const q=z.material;if(q)if(Array.isArray(q))for(let ue=0;ue<q.length;ue++){const Te=q[ue];V(Te,T,z)}else V(q,T,z)}),g.pop(),h=null};let P=null;function j(T){P&&P(T)}function J(){me.stop()}function ae(){me.start()}const me=new of;me.setAnimationLoop(j),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(T){P=T,ve.setAnimationLoop(T),T===null?me.stop():me.start()},ve.addEventListener("sessionstart",J),ve.addEventListener("sessionend",ae),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(U),U=ve.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,U,x),h=vt.get(T,g.length),h.init(),g.push(h),ie.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H.setFromProjectionMatrix(ie),K=this.localClippingEnabled,G=A.init(this.clippingPlanes,K),d=bt.get(T,p.length),d.init(),p.push(d),$e(T,U,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(F,O),G===!0&&A.beginShadows();const V=h.state.shadowsArray;if(w.render(V,T,U),G===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(d,T),h.setupLights(f.useLegacyLights),U.isArrayCamera){const z=U.cameras;for(let q=0,ue=z.length;q<ue;q++){const Te=z[q];tt(d,T,Te,Te.viewport)}}else tt(d,T,U);x!==null&&(fe.updateMultisampleRenderTarget(x),fe.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(f,T,U),pe.resetDefaultState(),v=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?d=p[p.length-1]:d=null};function $e(T,U,V,z){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||H.intersectsSprite(T)){z&&I.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ie);const Te=W.update(T),Le=T.material;Le.visible&&d.push(T,Te,Le,V,I.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==ye.render.frame&&(T.skeleton.update(),T.skeleton.frame=ye.render.frame),!T.frustumCulled||H.intersectsObject(T))){z&&I.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ie);const Te=W.update(T),Le=T.material;if(Array.isArray(Le)){const Ce=Te.groups;for(let De=0,Re=Ce.length;De<Re;De++){const Ne=Ce[De],nt=Le[Ne.materialIndex];nt&&nt.visible&&d.push(T,Te,nt,V,I.z,Ne)}}else Le.visible&&d.push(T,Te,Le,V,I.z,null)}}const ue=T.children;for(let Te=0,Le=ue.length;Te<Le;Te++)$e(ue[Te],U,V,z)}function tt(T,U,V,z){const q=T.opaque,ue=T.transmissive,Te=T.transparent;h.setupLightsView(V),G===!0&&A.setGlobalState(f.clippingPlanes,V),ue.length>0&&mt(q,U,V),z&&_e.viewport(C.copy(z)),q.length>0&&Pe(q,U,V),ue.length>0&&Pe(ue,U,V),Te.length>0&&Pe(Te,U,V),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function mt(T,U,V){const z=he.isWebGL2;L===null&&(L=new _r(1024,1024,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?$s:mr,minFilter:js,samples:z&&r===!0?4:0}));const q=f.getRenderTarget();f.setRenderTarget(L),f.clear();const ue=f.toneMapping;f.toneMapping=gi,Pe(T,U,V),f.toneMapping=ue,fe.updateMultisampleRenderTarget(L),fe.updateRenderTargetMipmap(L),f.setRenderTarget(q)}function Pe(T,U,V){const z=U.isScene===!0?U.overrideMaterial:null;for(let q=0,ue=T.length;q<ue;q++){const Te=T[q],Le=Te.object,Ce=Te.geometry,De=z===null?Te.material:z,Re=Te.group;Le.layers.test(V.layers)&&de(Le,U,V,Ce,De,Re)}}function de(T,U,V,z,q,ue){T.onBeforeRender(f,U,V,z,q,ue),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(f,U,V,z,T,ue),q.transparent===!0&&q.side===Ei&&q.forceSinglePass===!1?(q.side=Sn,q.needsUpdate=!0,f.renderBufferDirect(V,U,z,q,T,ue),q.side=Ni,q.needsUpdate=!0,f.renderBufferDirect(V,U,z,q,T,ue),q.side=Ei):f.renderBufferDirect(V,U,z,q,T,ue),T.onAfterRender(f,U,V,z,q,ue)}function te(T,U,V){U.isScene!==!0&&(U=Q);const z=Ie.get(T),q=h.state.lights,ue=h.state.shadowsArray,Te=q.state.version,Le=je.getParameters(T,q.state,ue,U,V),Ce=je.getProgramCacheKey(Le);let De=z.programs;z.environment=T.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(T.isMeshStandardMaterial?Je:ze).get(T.envMap||z.environment),De===void 0&&(T.addEventListener("dispose",ke),De=new Map,z.programs=De);let Re=De.get(Ce);if(Re!==void 0){if(z.currentProgram===Re&&z.lightsStateVersion===Te)return xe(T,Le),Re}else Le.uniforms=je.getUniforms(T),T.onBuild(V,Le,f),T.onBeforeCompile(Le,f),Re=je.acquireProgram(Le,Ce),De.set(Ce,Re),z.uniforms=Le.uniforms;const Ne=z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=A.uniform),xe(T,Le),z.needsLights=xt(T),z.lightsStateVersion=Te,z.needsLights&&(Ne.ambientLightColor.value=q.state.ambient,Ne.lightProbe.value=q.state.probe,Ne.directionalLights.value=q.state.directional,Ne.directionalLightShadows.value=q.state.directionalShadow,Ne.spotLights.value=q.state.spot,Ne.spotLightShadows.value=q.state.spotShadow,Ne.rectAreaLights.value=q.state.rectArea,Ne.ltc_1.value=q.state.rectAreaLTC1,Ne.ltc_2.value=q.state.rectAreaLTC2,Ne.pointLights.value=q.state.point,Ne.pointLightShadows.value=q.state.pointShadow,Ne.hemisphereLights.value=q.state.hemi,Ne.directionalShadowMap.value=q.state.directionalShadowMap,Ne.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ne.spotShadowMap.value=q.state.spotShadowMap,Ne.spotLightMatrix.value=q.state.spotLightMatrix,Ne.spotLightMap.value=q.state.spotLightMap,Ne.pointShadowMap.value=q.state.pointShadowMap,Ne.pointShadowMatrix.value=q.state.pointShadowMatrix);const nt=Re.getUniforms(),Ye=qo.seqWithValue(nt.seq,Ne);return z.currentProgram=Re,z.uniformsList=Ye,Re}function xe(T,U){const V=Ie.get(T);V.outputEncoding=U.outputEncoding,V.instancing=U.instancing,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Oe(T,U,V,z,q){U.isScene!==!0&&(U=Q),fe.resetTextureUnits();const ue=U.fog,Te=z.isMeshStandardMaterial?U.environment:null,Le=x===null?f.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:gr,Ce=(z.isMeshStandardMaterial?Je:ze).get(z.envMap||Te),De=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Re=!!z.normalMap&&!!V.attributes.tangent,Ne=!!V.morphAttributes.position,nt=!!V.morphAttributes.normal,Ye=!!V.morphAttributes.color,it=z.toneMapped?f.toneMapping:gi,At=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,at=At!==void 0?At.length:0,Ve=Ie.get(z),ri=h.state.lights;if(G===!0&&(K===!0||T!==M)){const un=T===M&&z.id===v;A.setState(z,T,un)}let Qe=!1;z.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==ri.state.version||Ve.outputEncoding!==Le||q.isInstancedMesh&&Ve.instancing===!1||!q.isInstancedMesh&&Ve.instancing===!0||q.isSkinnedMesh&&Ve.skinning===!1||!q.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Ce||z.fog===!0&&Ve.fog!==ue||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==A.numPlanes||Ve.numIntersection!==A.numIntersection)||Ve.vertexAlphas!==De||Ve.vertexTangents!==Re||Ve.morphTargets!==Ne||Ve.morphNormals!==nt||Ve.morphColors!==Ye||Ve.toneMapping!==it||he.isWebGL2===!0&&Ve.morphTargetsCount!==at)&&(Qe=!0):(Qe=!0,Ve.__version=z.version);let cn=Ve.currentProgram;Qe===!0&&(cn=te(z,U,q));let kc=!1,vs=!1,Aa=!1;const Wt=cn.getUniforms(),Wi=Ve.uniforms;if(_e.useProgram(cn.program)&&(kc=!0,vs=!0,Aa=!0),z.id!==v&&(v=z.id,vs=!0),kc||M!==T){if(Wt.setValue(N,"projectionMatrix",T.projectionMatrix),he.logarithmicDepthBuffer&&Wt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,vs=!0,Aa=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const un=Wt.map.cameraPosition;un!==void 0&&un.setValue(N,I.setFromMatrixPosition(T.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Wt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||q.isSkinnedMesh)&&Wt.setValue(N,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){Wt.setOptional(N,q,"bindMatrix"),Wt.setOptional(N,q,"bindMatrixInverse");const un=q.skeleton;un&&(he.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),Wt.setValue(N,"boneTexture",un.boneTexture,fe),Wt.setValue(N,"boneTextureSize",un.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const La=V.morphAttributes;if((La.position!==void 0||La.normal!==void 0||La.color!==void 0&&he.isWebGL2===!0)&&re.update(q,V,cn),(vs||Ve.receiveShadow!==q.receiveShadow)&&(Ve.receiveShadow=q.receiveShadow,Wt.setValue(N,"receiveShadow",q.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Wi.envMap.value=Ce,Wi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),vs&&(Wt.setValue(N,"toneMappingExposure",f.toneMappingExposure),Ve.needsLights&&Ue(Wi,Aa),ue&&z.fog===!0&&Fe.refreshFogUniforms(Wi,ue),Fe.refreshMaterialUniforms(Wi,z,B,D,L),qo.upload(N,Ve.uniformsList,Wi,fe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(qo.upload(N,Ve.uniformsList,Wi,fe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Wt.setValue(N,"center",q.center),Wt.setValue(N,"modelViewMatrix",q.modelViewMatrix),Wt.setValue(N,"normalMatrix",q.normalMatrix),Wt.setValue(N,"modelMatrix",q.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const un=z.uniformsGroups;for(let Da=0,Zd=un.length;Da<Zd;Da++)if(he.isWebGL2){const Bc=un[Da];$.update(Bc,cn),$.bind(Bc,cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cn}function Ue(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function xt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,U,V){Ie.get(T.texture).__webglTexture=U,Ie.get(T.depthTexture).__webglTexture=V;const z=Ie.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=V===void 0,z.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const V=Ie.get(T);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,V=0){x=T,_=U,S=V;let z=!0,q=null,ue=!1,Te=!1;if(T){const Ce=Ie.get(T);Ce.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),z=!1):Ce.__webglFramebuffer===void 0?fe.setupRenderTarget(T):Ce.__hasExternalTextures&&fe.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);const De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Te=!0);const Re=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=Re[U],ue=!0):he.isWebGL2&&T.samples>0&&fe.useMultisampledRTT(T)===!1?q=Ie.get(T).__webglMultisampledFramebuffer:q=Re,C.copy(T.viewport),E.copy(T.scissor),y=T.scissorTest}else C.copy(R).multiplyScalar(B).floor(),E.copy(k).multiplyScalar(B).floor(),y=X;if(_e.bindFramebuffer(36160,q)&&he.drawBuffers&&z&&_e.drawBuffers(T,q),_e.viewport(C),_e.scissor(E),_e.setScissorTest(y),ue){const Ce=Ie.get(T.texture);N.framebufferTexture2D(36160,36064,34069+U,Ce.__webglTexture,V)}else if(Te){const Ce=Ie.get(T.texture),De=U||0;N.framebufferTextureLayer(36160,36064,Ce.__webglTexture,V||0,De)}v=-1},this.readRenderTargetPixels=function(T,U,V,z,q,ue,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le){_e.bindFramebuffer(36160,Le);try{const Ce=T.texture,De=Ce.format,Re=Ce.type;if(De!==Wn&&ge.convert(De)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Re===$s&&(le.has("EXT_color_buffer_half_float")||he.isWebGL2&&le.has("EXT_color_buffer_float"));if(Re!==mr&&ge.convert(Re)!==N.getParameter(35738)&&!(Re===nr&&(he.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-z&&V>=0&&V<=T.height-q&&N.readPixels(U,V,z,q,ge.convert(De),ge.convert(Re),ue)}finally{const Ce=x!==null?Ie.get(x).__webglFramebuffer:null;_e.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(T,U,V=0){const z=Math.pow(2,-V),q=Math.floor(U.image.width*z),ue=Math.floor(U.image.height*z);fe.setTexture2D(U,0),N.copyTexSubImage2D(3553,V,0,0,T.x,T.y,q,ue),_e.unbindTexture()},this.copyTextureToTexture=function(T,U,V,z=0){const q=U.image.width,ue=U.image.height,Te=ge.convert(V.format),Le=ge.convert(V.type);fe.setTexture2D(V,0),N.pixelStorei(37440,V.flipY),N.pixelStorei(37441,V.premultiplyAlpha),N.pixelStorei(3317,V.unpackAlignment),U.isDataTexture?N.texSubImage2D(3553,z,T.x,T.y,q,ue,Te,Le,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(3553,z,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Te,U.mipmaps[0].data):N.texSubImage2D(3553,z,T.x,T.y,Te,Le,U.image),z===0&&V.generateMipmaps&&N.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(T,U,V,z,q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=T.max.x-T.min.x+1,Te=T.max.y-T.min.y+1,Le=T.max.z-T.min.z+1,Ce=ge.convert(z.format),De=ge.convert(z.type);let Re;if(z.isData3DTexture)fe.setTexture3D(z,0),Re=32879;else if(z.isDataArrayTexture)fe.setTexture2DArray(z,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,z.flipY),N.pixelStorei(37441,z.premultiplyAlpha),N.pixelStorei(3317,z.unpackAlignment);const Ne=N.getParameter(3314),nt=N.getParameter(32878),Ye=N.getParameter(3316),it=N.getParameter(3315),At=N.getParameter(32877),at=V.isCompressedTexture?V.mipmaps[0]:V.image;N.pixelStorei(3314,at.width),N.pixelStorei(32878,at.height),N.pixelStorei(3316,T.min.x),N.pixelStorei(3315,T.min.y),N.pixelStorei(32877,T.min.z),V.isDataTexture||V.isData3DTexture?N.texSubImage3D(Re,q,U.x,U.y,U.z,ue,Te,Le,Ce,De,at.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Re,q,U.x,U.y,U.z,ue,Te,Le,Ce,at.data)):N.texSubImage3D(Re,q,U.x,U.y,U.z,ue,Te,Le,Ce,De,at),N.pixelStorei(3314,Ne),N.pixelStorei(32878,nt),N.pixelStorei(3316,Ye),N.pixelStorei(3315,it),N.pixelStorei(32877,At),q===0&&z.generateMipmaps&&N.generateMipmap(Re),_e.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?fe.setTextureCube(T,0):T.isData3DTexture?fe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?fe.setTexture2DArray(T,0):fe.setTexture2D(T,0),_e.unbindTexture()},this.resetState=function(){_=0,S=0,x=null,_e.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(hc.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(s){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!s}}});class ox extends hc{}ox.prototype.isWebGL1Renderer=!0;let ax=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};class lx extends ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const th={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class cx{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const ux=new cx;class hf{constructor(e){this.manager=e!==void 0?e:ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class hx extends hf{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=th.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ks("img");function l(){u(),th.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class fx extends hf{constructor(e){super(e)}load(e,t,n,i){const r=new rn,a=new hx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lc);function ia(s,e,t){return Math.max(s,Math.min(e,t))}class dx{advance(e){var t;if(!this.isRunning)return;let n=!1;if(this.lerp)this.value=(1-(i=this.lerp))*this.value+i*this.to,Math.round(this.value)===this.to&&(this.value=this.to,n=!0);else{this.currentTime+=e;const r=ia(0,this.currentTime/this.duration,1);n=r>=1;const a=n?1:this.easing(r);this.value=this.from+(this.to-this.from)*a}var i;(t=this.onUpdate)==null||t.call(this,this.value,{completed:n}),n&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n=.1,duration:i=1,easing:r=o=>o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,this.onUpdate=a}}let ff=()=>({events:{},emit(s,...e){let t=this.events[s]||[];for(let n=0,i=t.length;n<i;n++)t[n](...e)},on(s,e){var t;return(t=this.events[s])!=null&&t.push(e)||(this.events[s]=[e]),()=>{var n;this.events[s]=(n=this.events[s])==null?void 0:n.filter(i=>e!==i)}}});class nh{constructor(e){this.onResize=([t])=>{if(t){const{width:n,height:i}=t.contentRect;this.width=n,this.height=i}},this.onWindowResize=()=>{this.width=window.innerWidth,this.height=window.innerHeight},this.element=e,e===window?(window.addEventListener("resize",this.onWindowResize),this.onWindowResize()):(this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this.element))}destroy(){window.removeEventListener("resize",this.onWindowResize),this.resizeObserver.disconnect()}}class px{constructor(e,{wheelMultiplier:t=1,touchMultiplier:n=2,normalizeWheel:i=!1}){this.onTouchStart=r=>{const{pageX:a,pageY:o}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=a,this.touchStart.y=o},this.onTouchMove=r=>{const{pageX:a,pageY:o}=r.targetTouches?r.targetTouches[0]:r,l=-(a-this.touchStart.x)*this.touchMultiplier,c=-(o-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=a,this.touchStart.y=o,this.emitter.emit("scroll",{type:"touch",deltaX:l,deltaY:c,event:r})},this.onWheel=r=>{let{deltaX:a,deltaY:o}=r;this.normalizeWheel&&(a=ia(-100,a,100),o=ia(-100,o,100)),a*=this.wheelMultiplier,o*=this.wheelMultiplier,this.emitter.emit("scroll",{type:"wheel",deltaX:a,deltaY:o,event:r})},this.element=e,this.wheelMultiplier=t,this.touchMultiplier=n,this.normalizeWheel=i,this.touchStart={x:null,y:null},this.emitter=ff(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.events={},this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1})}}class mx{constructor({direction:e,gestureDirection:t,mouseMultiplier:n,smooth:i,wrapper:r=window,content:a=document.documentElement,smoothWheel:o=i==null||i,smoothTouch:l=!1,duration:c,easing:u=S=>Math.min(1,1.001-Math.pow(2,-10*S)),lerp:d=c?null:.1,infinite:h=!1,orientation:p=e??"vertical",gestureOrientation:g=t??"vertical",touchMultiplier:f=2,wheelMultiplier:m=n??1,normalizeWheel:_=!0}={}){this.onVirtualScroll=({type:S,deltaX:x,deltaY:v,event:M})=>{if(M.ctrlKey||this.options.gestureOrientation==="vertical"&&v===0||this.options.gestureOrientation==="horizontal"&&x===0||M.composedPath().find(E=>E==null||E.hasAttribute==null?void 0:E.hasAttribute("data-lenis-prevent")))return;if(this.isStopped||this.isLocked)return void M.preventDefault();if(this.isSmooth=this.options.smoothTouch&&S==="touch"||this.options.smoothWheel&&S==="wheel",!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();M.preventDefault();let C=v;this.options.gestureOrientation==="both"?C=Math.abs(v)>Math.abs(x)?v:x:this.options.gestureOrientation==="horizontal"&&(C=x),this.scrollTo(this.targetScroll+C,{programmatic:!1})},this.onScroll=()=>{if(!this.isScrolling){const S=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-S),this.emit()}},e&&console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),t&&console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),n&&console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),i&&console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),window.lenisVersion="1.0.3",r!==document.documentElement&&r!==document.body||(r=window),this.options={wrapper:r,content:a,smoothWheel:o,smoothTouch:l,duration:c,easing:u,lerp:d,infinite:h,gestureOrientation:g,orientation:p,touchMultiplier:f,wheelMultiplier:m,normalizeWheel:_},this.wrapper=new nh(r),this.content=new nh(a),this.rootElement.classList.add("lenis"),this.velocity=0,this.isStopped=!1,this.isSmooth=o||l,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new dx,this.emitter=ff(),this.wrapper.element.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new px(r,{touchMultiplier:f,wheelMultiplier:m,normalizeWheel:_}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.events={},this.wrapper.element.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy()}on(e,t){return this.emitter.on(e,t)}off(e,t){var n;this.emitter.events[e]=(n=this.emitter.events[e])==null?void 0:n.filter(i=>t!==i)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:n=!1,lock:i=!1,duration:r=this.options.duration,easing:a=this.options.easing,lerp:o=!r&&this.options.lerp,onComplete:l=null,force:c=!1,programmatic:u=!0}={}){if(!this.isStopped||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{var d;let h;if(typeof e=="string"?h=document.querySelector(e):(d=e)!=null&&d.nodeType&&(h=e),h){if(this.wrapper.element!==window){const g=this.wrapper.element.getBoundingClientRect();t-=this.isHorizontal?g.left:g.top}const p=h.getBoundingClientRect();e=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):e=ia(0,e,this.limit),n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.animate.stop(),this.reset(),this.emit(),void(l==null||l());u||(this.targetScroll=e),this.animate.fromTo(this.animatedScroll,e,{duration:r,easing:a,lerp:o,onUpdate:(h,{completed:p})=>{i&&(this.isLocked=!0),this.isScrolling=!0,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),u&&(this.targetScroll=h),p&&(i&&(this.isLocked=!1),requestAnimationFrame(()=>{this.isScrolling=!1}),this.velocity=0,l==null||l()),this.emit()}})}}}get rootElement(){return this.wrapper.element===window?this.content.element:this.wrapper.element}get limit(){return Math.round(this.isHorizontal?this.content.width-this.wrapper.width:this.content.height-this.wrapper.height)}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function(e,t){let n=e%t;return(t>0&&n<0||t<0&&n>0)&&(n+=t),n}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.rootElement.classList.toggle("lenis-smooth",e),this.__isSmooth=e)}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.rootElement.classList.toggle("lenis-scrolling",e),this.__isScrolling=e)}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.rootElement.classList.toggle("lenis-stopped",e),this.__isStopped=e)}}function ui(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function df(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ls={duration:.5,overwrite:!1,delay:0},fc,Ht,St,Pn=1e8,st=1/Pn,zl=Math.PI*2,gx=zl/4,_x=0,pf=Math.sqrt,vx=Math.cos,xx=Math.sin,Rt=function(e){return typeof e=="string"},pt=function(e){return typeof e=="function"},xi=function(e){return typeof e=="number"},dc=function(e){return typeof e>"u"},ii=function(e){return typeof e=="object"},sn=function(e){return e!==!1},pc=function(){return typeof window<"u"},Ro=function(e){return pt(e)||Rt(e)},mf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vt=Array.isArray,Ol=/(?:-?\.?\d|\.)+/gi,gf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_f=/[+-]=-?[.\d]+/,vf=/[^,'"\[\]\s]+/gi,yx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut,Cn,Fl,mc,wn={},ra={},xf,yf=function(e){return(ra=vr(e,wn))&&ln},gc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},sa=function(e,t){return!t&&console.warn(e)},Sf=function(e,t){return e&&(wn[e]=t)&&ra&&(ra[e]=t)||wn},Js=function(){return 0},Sx={suppressEvents:!0,isStart:!0,kill:!1},Xo={suppressEvents:!0,kill:!1},Mx={suppressEvents:!0},_c={},Oi=[],Ul={},Mf,gn={},ul={},ih=30,Yo=[],vc="",xc=function(e){var t=e[0],n,i;if(ii(t)||pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Yo.length;i--&&!Yo[i].targetTest(t););n=Yo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Xf(e[i],n)))||e.splice(i,1);return e},cr=function(e){return e._gsap||xc(Rn(e))[0]._gsap},bf=function(e,t,n){return(n=e[t])&&pt(n)?e[t]():dc(n)&&e.getAttribute&&e.getAttribute(t)||n},on=function(e,t){return(e=e.split(",")).forEach(t)||e},_t=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},Qr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},bx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},oa=function(){var e=Oi.length,t=Oi.slice(0),n,i;for(Ul={},Oi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},wf=function(e,t,n,i){Oi.length&&!Ht&&oa(),e.render(t,n,i||Ht&&t<0&&(e._initted||e._startAt)),Oi.length&&!Ht&&oa()},Tf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(vf).length<2?t:Rt(e)?e.trim():e},Ef=function(e){return e},On=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},wx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},vr=function(e,t){for(var n in t)e[n]=t[n];return e},rh=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ii(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},aa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Us=function(e){var t=e.parent||ut,n=e.keyframes?wx(Vt(e.keyframes)):On;if(sn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Tx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Cf=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},ba=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Bi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ur=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ex=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nl=function(e,t,n,i){return e._startAt&&(Ht?e._startAt.revert(Xo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Cx=function s(e){return!e||e._ts&&s(e.parent)},sh=function(e){return e._repeat?cs(e._tTime,e=e.duration()+e._rDelay)*e:0},cs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},la=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},wa=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},Ta=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),wa(e),n._dirty||ur(n,e)),e},Af=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=la(e.rawTime(),t),(!t._dur||co(0,t.totalDuration(),n)-t._tTime>st)&&t.render(n,!0)),ur(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-st}},Kn=function(e,t,n,i){return t.parent&&Bi(t),t._start=zt((xi(n)?n:n||e!==ut?En(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Cf(e,t,"_first","_last",e._sort?"_start":0),kl(t)||(e._recent=t),i||Af(e,t),e._ts<0&&Ta(e,e._tTime),e},Lf=function(e,t){return(wn.ScrollTrigger||gc("scrollTrigger",t))&&wn.ScrollTrigger.create(t,e)},Df=function(e,t,n,i,r){if(Sc(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Ht&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Mf!==xn.frame)return Oi.push(e),e._lazy=[r,i],1},Ax=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},kl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Lx=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Ax(e)&&!(!e._initted&&kl(e))||(e._ts<0||e._dp._ts<0)&&!kl(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=co(0,e._tDur,t),u=cs(l,o),e._yoyo&&u&1&&(a=1-a),u!==cs(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Ht||i||e._zTime===st||!t&&e._zTime){if(!e._initted&&Df(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?st:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Nl(e,t,n,!0),e._onUpdate&&!n&&In(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&In(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Bi(e,1),!n&&!Ht&&(In(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Dx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},us=function(e,t,n,i){var r=e._repeat,a=zt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:zt(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Ta(e,e._tTime=e._tDur*o),e.parent&&wa(e),n||ur(e.parent,e),e},oh=function(e){return e instanceof nn?ur(e):us(e,e._dur)},Px={_start:0,endTime:Js,totalDuration:Js},En=function s(e,t,n){var i=e.labels,r=e._recent||Px,a=e.duration()>=Pn?r.endTime(!1):e._dur,o,l,c;return Rt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Vt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ns=function(e,t,n){var i=xi(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=sn(l.vars.inherit)&&l.parent;a.immediateRender=sn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new wt(t[0],a,t[r+1])},Vi=function(e,t){return e||e===0?t(e):t},co=function(e,t,n){return n<e?e:n>t?t:n},Gt=function(e,t){return!Rt(e)||!(t=yx.exec(e))?"":t[1]},Rx=function(e,t,n){return Vi(n,function(i){return co(e,t,i)})},Bl=[].slice,Pf=function(e,t){return e&&ii(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ii(e[0]))&&!e.nodeType&&e!==Cn},Ix=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Rt(i)&&!t||Pf(i,1)?(r=n).push.apply(r,Rn(i)):n.push(i)})||n},Rn=function(e,t,n){return St&&!t&&St.selector?St.selector(e):Rt(e)&&!n&&(Fl||!hs())?Bl.call((t||mc).querySelectorAll(e),0):Vt(e)?Ix(e,n):Pf(e)?Bl.call(e,0):e?[e]:[]},Gl=function(e){return e=Rn(e)[0]||sa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Rn(t,n.querySelectorAll?n:n===e?sa("Invalid scope")||mc.createElement("div"):e)}},Rf=function(e){return e.sort(function(){return .5-Math.random()})},If=function(e){if(pt(e))return e;var t=ii(e)?e:{each:e},n=hr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return Rt(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,p,g){var f=(g||t).length,m=a[f],_,S,x,v,M,C,E,y,b;if(!m){if(b=t.grid==="auto"?0:(t.grid||[1,Pn])[1],!b){for(E=-Pn;E<(E=g[b++].getBoundingClientRect().left)&&b<f;);b--}for(m=a[f]=[],_=l?Math.min(b,f)*u-.5:i%b,S=b===Pn?0:l?f*d/b-.5:i/b|0,E=0,y=Pn,C=0;C<f;C++)x=C%b-_,v=S-(C/b|0),m[C]=M=c?Math.abs(c==="y"?v:x):pf(x*x+v*v),M>E&&(E=M),M<y&&(y=M);i==="random"&&Rf(m),m.max=E-y,m.min=y,m.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(b>f?f-1:c?c==="y"?f/b:b:Math.max(b,f/b))||0)*(i==="edges"?-1:1),m.b=f<0?r-f:r,m.u=Gt(t.amount||t.each)||0,n=n&&f<0?Vf(n):n}return f=(m[h]-m.min)/m.max||0,zt(m.b+(n?n(f):f)*m.v)+m.u}},Hl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(xi(n)?0:Gt(n))}},zf=function(e,t){var n=Vt(e),i,r;return!n&&ii(e)&&(i=n=e.radius||Pn,e.values?(e=Rn(e.values),(r=!xi(e[0]))&&(i*=i)):e=Hl(e.increment)),Vi(t,n?pt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Pn,u=0,d=e.length,h,p;d--;)r?(h=e[d].x-o,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,r||u===a||xi(a)?u:u+Gt(a)}:Hl(e))},Of=function(e,t,n,i){return Vi(Vt(e)?!t:n===!0?!!(n=0):!i,function(){return Vt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},zx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Ox=function(e,t){return function(n){return e(parseFloat(n))+(t||Gt(n))}},Fx=function(e,t,n){return Uf(e,t,0,1,n)},Ff=function(e,t,n){return Vi(n,function(i){return e[~~t(i)]})},Ux=function s(e,t,n){var i=t-e;return Vt(e)?Ff(e,s(0,e.length),t):Vi(n,function(r){return(i+(r-e)%i)%i+e})},Nx=function s(e,t,n){var i=t-e,r=i*2;return Vt(e)?Ff(e,s(0,e.length-1),t):Vi(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Qs=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?vf:Ol),n+=e.substr(t,i-t)+Of(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Uf=function(e,t,n,i,r){var a=t-e,o=i-n;return Vi(r,function(l){return n+((l-e)/a*o||0)})},kx=function s(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var a=Rt(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Vt(e)&&!Vt(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(s(e[c-1],e[c]));d--,r=function(g){g*=d;var f=Math.min(h,~~g);return u[f](g-f)},n=t}else i||(e=vr(Vt(e)?[]:{},e));if(!u){for(l in t)yc.call(o,e,l,"get",t[l]);r=function(g){return wc(g,o)||(a?e.p:e)}}}return Vi(n,r)},ah=function(e,t,n){var i=e.labels,r=Pn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},In=function(e,t,n){var i=e.vars,r=i[t],a=St,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Oi.length&&oa(),o&&(St=o),u=l?r.apply(c,l):r.call(c),St=a,u},Ps=function(e){return Bi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ht),e.progress()<1&&In(e,"onInterrupt"),e},Yr,Nf=[],kf=function(e){if(!pc()){Nf.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=pt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Js,render:wc,add:yc,kill:ty,modifier:ey,rawVars:0},a={targetTest:0,get:0,getSetter:bc,aliases:{},register:0};if(hs(),e!==i){if(gn[t])return;On(i,On(aa(e,r),a)),vr(i.prototype,vr(r,aa(e,a))),gn[i.prop=t]=i,e.targetTest&&(Yo.push(i),_c[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Sf(t,i),e.register&&e.register(ln,i,an)},rt=255,Rs={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},hl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*rt+.5|0},Bf=function(e,t,n){var i=e?xi(e)?[e>>16,e>>8&rt,e&rt]:0:Rs.black,r,a,o,l,c,u,d,h,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Rs[e])i=Rs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&rt,i&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ol),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=hl(l+1/3,r,a),i[1]=hl(l,r,a),i[2]=hl(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(gf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ol)||Rs.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/rt,a=i[1]/rt,o=i[2]/rt,d=Math.max(r,a,o),h=Math.min(r,a,o),u=(d+h)/2,d===h?l=c=0:(p=d-h,c=u>.5?p/(2-d-h):p/(d+h),l=d===r?(a-o)/p+(a<o?6:0):d===a?(o-r)/p+2:(r-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Gf=function(e){var t=[],n=[],i=-1;return e.split(Fi).forEach(function(r){var a=r.match(Xr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},lh=function(e,t,n){var i="",r=(e+i).match(Fi),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!r)return e;if(r=r.map(function(h){return(h=Bf(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Gf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Fi,"1").split(Xr),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Fi),d=c.length-1;o<d;o++)i+=c[o]+r[o];return i+c[d]},Fi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Rs)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Bx=/hsl[a]?\(/,Hf=function(e){var t=e.join(" "),n;if(Fi.lastIndex=0,Fi.test(t))return n=Bx.test(t),e[1]=lh(e[1],n),e[0]=lh(e[0],n,Gf(e[1])),!0},eo,xn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,d,h,p,g=function f(m){var _=s()-i,S=m===!0,x,v,M,C;if(_>e&&(n+=_-t),i+=_,M=i-n,x=M-a,(x>0||S)&&(C=++d.frame,h=M-d.time*1e3,d.time=M=M/1e3,a+=x+(x>=r?4:r-x),v=1),S||(l=c(f)),v)for(p=0;p<o.length;p++)o[p](M,h,C,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){xf&&(!Fl&&pc()&&(Cn=Fl=window,mc=Cn.document||{},wn.gsap=ln,(Cn.gsapVersions||(Cn.gsapVersions=[])).push(ln.version),yf(ra||Cn.GreenSockGlobals||!Cn.gsap&&Cn||{}),u=Cn.requestAnimationFrame,Nf.forEach(kf)),l&&d.sleep(),c=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},eo=1,g(2))},sleep:function(){(u?Cn.cancelAnimationFrame:clearTimeout)(l),eo=0,c=Js},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){r=1e3/(m||240),a=d.time*1e3+r},add:function(m,_,S){var x=_?function(v,M,C,E){m(v,M,C,E),d.remove(x)}:m;return d.remove(m),o[S?"unshift":"push"](x),hs(),x},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&p>=_&&p--},_listeners:o},d}(),hs=function(){return!eo&&xn.wake()},Xe={},Gx=/^[\d.\-M][\d.\-,\s]/,Hx=/["']/g,Vx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Hx,"").trim():+c,i=l.substr(o+1).trim();return t},Wx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},qx=function(e){var t=(e+"").split("("),n=Xe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Vx(t[1])]:Wx(e).split(",").map(Tf)):Xe._CE&&Gx.test(e)?Xe._CE("",e):n},Vf=function(e){return function(t){return 1-e(1-t)}},Wf=function s(e,t){for(var n=e._first,i;n;)n instanceof nn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},hr=function(e,t){return e&&(pt(e)?e:Xe[e]||qx(e))||t},wr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return on(e,function(o){Xe[o]=wn[o]=r,Xe[a=o.toLowerCase()]=n;for(var l in r)Xe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xe[o+"."+l]=r[l]}),r},qf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},fl=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/zl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*xx((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:qf(o);return r=zl/r,l.config=function(c,u){return s(e,c,u)},l},dl=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:qf(n);return i.config=function(r){return s(e,r)},i};on("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;wr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;wr("Elastic",fl("in"),fl("out"),fl());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};wr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);wr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});wr("Circ",function(s){return-(pf(1-s*s)-1)});wr("Sine",function(s){return s===1?1:-vx(s*gx)+1});wr("Back",dl("in"),dl("out"),dl());Xe.SteppedEase=Xe.steps=wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-st;return function(o){return((i*co(0,a,o)|0)+r)*n}}};ls.ease=Xe["quad.out"];on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return vc+=s+","+s+"Params,"});var Xf=function(e,t){this.id=_x++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:bf,this.set=t?t.getSetter:bc},fs=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,us(this,+t.duration,1,1),this.data=t.data,St&&(this._ctx=St,St.data.push(this)),eo||xn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,us(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(hs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ta(this,n),!r._dp||r.parent||Af(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Kn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===st||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+sh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+sh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?cs(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?la(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-st?0:this._rts,this.totalTime(co(-Math.abs(this._delay),this._tDur,i),!0),wa(this),Ex(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Kn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?la(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Mx);var i=Ht;return Ht=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ht=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,oh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,oh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(En(this,n),sn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,sn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-st)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=pt(n)?n:Ef,o=function(){var c=i.then;i.then=null,pt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Ps(this)},s}();On(fs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var nn=function(s){df(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=sn(n.sortChildren),ut&&Kn(n.parent||ut,ui(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Lf(ui(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Ns(0,arguments,this),this},t.from=function(i,r,a){return Ns(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Ns(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Us(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new wt(i,r,En(this,a),1),this},t.call=function(i,r,a){return Kn(this,wt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new wt(i,a,En(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,Us(a).immediateRender=sn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,d){return o.startAt=a,Us(o).immediateRender=sn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,d)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:zt(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,p,g,f,m,_,S,x,v,M,C,E;if(this!==ut&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,v=this._start,x=this._ts,_=!x,d&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(h=zt(u%m),u===l?(f=this._repeat,h=c):(f=~~(u/m),f&&f===u/m&&(h=c,f--),h>c&&(h=c)),M=cs(this._tTime,m),!o&&this._tTime&&M!==f&&this._tTime-M*m-this._dur<=0&&(M=f),C&&f&1&&(h=c-h,E=1),f!==M&&!this._lock){var y=C&&M&1,b=y===(C&&f&1);if(f<M&&(y=!y),o=y?0:c,this._lock=1,this.render(o||(E?0:zt(f*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&In(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=y?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Wf(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Dx(this,zt(o),zt(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!r&&!f&&(In(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,r,a),h!==this._time||!this._ts&&!_){S=0,g&&(u+=this._zTime=-st);break}}p=g}else{p=this._last;for(var D=i<0?i:h;p;){if(g=p._prev,(p._act||D<=p._end)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(D-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(D-p._start)*p._ts,r,a||Ht&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!_){S=0,g&&(u+=this._zTime=D?-st:st);break}}p=g}}if(S&&!r&&(this.pause(),S.render(h>=o?0:-st)._zTime=h>=o?1:-1,this._ts))return this._start=v,wa(this),this.render(i,r,a);this._onUpdate&&!r&&In(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Bi(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(In(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(xi(r)||(r=En(this,r,i)),!(i instanceof fs)){if(Vt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Rt(i))return this.addLabel(i,r);if(pt(i))i=wt.delayedCall(0,i);else return this}return this!==i?Kn(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Pn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof wt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Rt(i)?this.removeLabel(i):pt(i)?this.killTweensOf(i):(ba(this,i),i===this._recent&&(this._recent=this._last),ur(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(xn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=En(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=wt.delayedCall(0,r||Js,a);return o.data="isPause",this._hasPause=1,Kn(this,o,En(this,i))},t.removePause=function(i){var r=this._first;for(i=En(this,i);r;)r._start===i&&r.data==="isPause"&&Bi(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ai!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Rn(i),l=this._first,c=xi(r),u;l;)l instanceof wt?bx(l._targets,o)&&(c?(!Ai||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=En(a,i),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,p,g=wt.to(a,On({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||st,onStart:function(){if(a.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&us(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,d||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,On({startAt:{time:En(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ah(this,En(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ah(this,En(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+st)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return ur(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ur(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=Pn,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Kn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;us(a,a===ut&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ut._ts&&(wf(ut,la(i,ut)),Mf=xn.frame),xn.frame>=ih){ih+=bn.autoSleep||120;var r=ut._first;if((!r||!r._ts)&&bn.autoSleep&&xn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||xn.sleep()}}},e}(fs);On(nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Xx=function(e,t,n,i,r,a,o){var l=new an(this._pt,e,t,0,1,Jf,null,r),c=0,u=0,d,h,p,g,f,m,_,S;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Qs(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),h=n.match(cl)||[];d=cl.exec(i);)g=d[0],f=i.substring(c,d.index),p?p=(p+1)%5:f.substr(-5)==="rgba("&&(p=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:f||u===1?f:",",s:m,c:g.charAt(1)==="="?Qr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=cl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(_f.test(i)||_)&&(l.e=0),this._pt=l,l},yc=function(e,t,n,i,r,a,o,l,c,u){pt(i)&&(i=i(r||0,e,a));var d=e[t],h=n!=="get"?n:pt(d)?c?e[t.indexOf("set")||!pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,p=pt(d)?c?Kx:Zf:Mc,g;if(Rt(i)&&(~i.indexOf("random(")&&(i=Qs(i)),i.charAt(1)==="="&&(g=Qr(h,i)+(Gt(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Vl)return!isNaN(h*i)&&i!==""?(g=new an(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?Qx:Kf,0,p),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&gc(t,i),Xx.call(this,e,t,h,i,p,l||bn.stringFilter,c))},Yx=function(e,t,n,i,r){if(pt(e)&&(e=ks(e,r,t,n,i)),!ii(e)||e.style&&e.nodeType||Vt(e)||mf(e))return Rt(e)?ks(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=ks(e[o],r,t,n,i);return a},Yf=function(e,t,n,i,r,a){var o,l,c,u;if(gn[e]&&(o=new gn[e]).init(r,o.rawVars?t[e]:Yx(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new an(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Yr))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ai,Vl,Sc=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,d=i.callbackScope,h=i.runBackwards,p=i.yoyoEase,g=i.keyframes,f=i.autoRevert,m=e._dur,_=e._startAt,S=e._targets,x=e.parent,v=x&&x.data==="nested"?x.vars.targets:S,M=e._overwrite==="auto"&&!fc,C=e.timeline,E,y,b,D,B,F,O,R,k,X,H,G,K;if(C&&(!g||!r)&&(r="none"),e._ease=hr(r,ls.ease),e._yEase=p?Vf(hr(p===!0?r:p,ls.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!C&&!!i.runBackwards,!C||g&&!i.stagger){if(R=S[0]?cr(S[0]).harness:0,G=R&&i[R.prop],E=aa(i,_c),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&m?Xo:Sx),_._lazy=0),a){if(Bi(e._startAt=wt.set(S,On({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&sn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:d,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ht||!o&&!f)&&e._startAt.revert(Xo),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(o=!1),b=On({overwrite:!1,data:"isFromStart",lazy:o&&!_&&sn(l),immediateRender:o,stagger:0,parent:x},E),G&&(b[R.prop]=G),Bi(e._startAt=wt.set(S,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ht?e._startAt.revert(Xo):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,st,st);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&sn(l)||l&&!m,y=0;y<S.length;y++){if(B=S[y],O=B._gsap||xc(S)[y]._gsap,e._ptLookup[y]=X={},Ul[O.id]&&Oi.length&&oa(),H=v===S?y:v.indexOf(B),R&&(k=new R).init(B,G||E,e,H,v)!==!1&&(e._pt=D=new an(e._pt,B,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(L){X[L]=D}),k.priority&&(F=1)),!R||G)for(b in E)gn[b]&&(k=Yf(b,E,e,H,B,v))?k.priority&&(F=1):X[b]=D=yc.call(e,B,b,"get",E[b],H,v,0,i.stringFilter);e._op&&e._op[y]&&e.kill(B,e._op[y]),M&&e._pt&&(Ai=e,ut.killTweensOf(B,X,e.globalTime(t)),K=!e.parent,Ai=0),e._pt&&l&&(Ul[O.id]=1)}F&&Qf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,g&&t<=0&&C.render(Pn,!0,!0)},jx=function(e,t,n,i,r,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,d,h;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(c=d[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Vl=1,e.vars[t]="+=0",Sc(e,o),Vl=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=_t(n)+Gt(u.e)),u.b&&(u.b=c.s+Gt(u.b))},$x=function(e,t){var n=e[0]?cr(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=vr({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Zx=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Vt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},ks=function(e,t,n,i,r){return pt(e)?e.call(t,n,i,r):Rt(e)&&~e.indexOf("random(")?Qs(e):e},jf=vc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",$f={};on(jf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return $f[s]=1});var wt=function(s){df(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Us(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,f=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,S=i.parent||ut,x=(Vt(n)||mf(n)?xi(n[0]):"length"in i)?[n]:Rn(n),v,M,C,E,y,b,D,B;if(o._targets=x.length?xc(x):sa("GSAP target "+n+" not found. https://greensock.com",!bn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||h||Ro(c)||Ro(u)){if(i=o.vars,v=o.timeline=new nn({data:"nested",defaults:f||{},targets:S&&S.data==="nested"?S.vars.targets:x}),v.kill(),v.parent=v._dp=ui(o),v._start=0,h||Ro(c)||Ro(u)){if(E=x.length,D=h&&If(h),ii(h))for(y in h)~jf.indexOf(y)&&(B||(B={}),B[y]=h[y]);for(M=0;M<E;M++)C=aa(i,$f),C.stagger=0,_&&(C.yoyoEase=_),B&&vr(C,B),b=x[M],C.duration=+ks(c,ui(o),M,b,x),C.delay=(+ks(u,ui(o),M,b,x)||0)-o._delay,!h&&E===1&&C.delay&&(o._delay=u=C.delay,o._start+=u,C.delay=0),v.to(b,C,D?D(M,b,x):0),v._ease=Xe.none;v.duration()?c=u=0:o.timeline=0}else if(g){Us(On(v.vars.defaults,{ease:"none"})),v._ease=hr(g.ease||i.ease||"none");var F=0,O,R,k;if(Vt(g))g.forEach(function(X){return v.to(x,X,">")}),v.duration();else{C={};for(y in g)y==="ease"||y==="easeEach"||Zx(y,g[y],C,g.easeEach);for(y in C)for(O=C[y].sort(function(X,H){return X.t-H.t}),F=0,M=0;M<O.length;M++)R=O[M],k={ease:R.e,duration:(R.t-(M?O[M-1].t:0))/100*c},k[y]=R.v,v.to(x,k,F),F+=k.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return p===!0&&!fc&&(Ai=ui(o),ut.killTweensOf(x),Ai=0),Kn(S,ui(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===zt(S._time)&&sn(d)&&Cx(ui(o))&&S.data!=="nested")&&(o._tTime=-st,o.render(Math.max(0,-u)||0)),m&&Lf(ui(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-st&&!u?l:i<st?0:i,h,p,g,f,m,_,S,x,v;if(!c)Lx(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=d,x=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+i,r,a);if(h=zt(d%f),d===l?(g=this._repeat,h=c):(g=~~(d/f),g&&g===d/f&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(v=this._yEase,h=c-h),m=cs(this._tTime,f),h===o&&!a&&this._initted)return this._tTime=d,this;g!==m&&(x&&this._yEase&&Wf(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(zt(f*g),!0).invalidate()._lock=0))}if(!this._initted){if(Df(this,u?i:h,a,r,d))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(v||this._ease)(h/c),this._from&&(this.ratio=S=1-S),h&&!o&&!r&&!g&&(In(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(S,p.d),p=p._next;x&&x.render(i<0?i:!h&&_?-st:x._dur*x._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Nl(this,i,r,a),In(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&In(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Nl(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Bi(this,1),!r&&!(u&&!o)&&(d||o||_)&&(In(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o){eo||xn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Sc(this,l),c=this._ease(l/this._dur),jx(this,i,r,a,o,c,l)?this.resetTo(i,r,a,o):(Ta(this,0),this.parent||Cf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ps(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ai&&Ai.vars.overwrite!==!0)._first||Ps(this),this.parent&&a!==this.timeline.totalDuration()&&us(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Rn(i):o,c=this._ptLookup,u=this._pt,d,h,p,g,f,m,_;if((!r||r==="all")&&Tx(o,l))return r==="all"&&(this._pt=0),Ps(this);for(d=this._op=this._op||[],r!=="all"&&(Rt(r)&&(f={},on(r,function(S){return f[S]=1}),r=f),r=$x(o,r)),_=o.length;_--;)if(~l.indexOf(o[_])){h=c[_],r==="all"?(d[_]=r,g=h,p={}):(p=d[_]=d[_]||{},g=r);for(f in g)m=h&&h[f],m&&((!("kill"in m.d)||m.d.kill(f)===!0)&&ba(this,m,"_pt"),delete h[f]),p!=="all"&&(p[f]=1)}return this._initted&&!this._pt&&u&&Ps(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Ns(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Ns(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return ut.killTweensOf(i,r,a)},e}(fs);On(wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});on("staggerTo,staggerFrom,staggerFromTo",function(s){wt[s]=function(){var e=new nn,t=Bl.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Mc=function(e,t,n){return e[t]=n},Zf=function(e,t,n){return e[t](n)},Kx=function(e,t,n,i){return e[t](i.fp,n)},Jx=function(e,t,n){return e.setAttribute(t,n)},bc=function(e,t){return pt(e[t])?Zf:dc(e[t])&&e.setAttribute?Jx:Mc},Kf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Qx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Jf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},wc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ey=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},ty=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ba(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ny=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Qf=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},an=function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Kf,this.d=l||this,this.set=c||Mc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=ny,this.m=n,this.mt=r,this.tween=i},s}();on(vc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return _c[s]=1});wn.TweenMax=wn.TweenLite=wt;wn.TimelineLite=wn.TimelineMax=nn;ut=new nn({sortChildren:!1,defaults:ls,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});bn.stringFilter=Hf;var ds=[],jo={},iy=[],ch=0,pl=function(e){return(jo[e]||iy).map(function(t){return t()})},Wl=function(){var e=Date.now(),t=[];e-ch>2&&(pl("matchMediaInit"),ds.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Cn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),pl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),ch=e,pl("matchMedia"))},ed=function(){function s(t,n){this.selector=n&&Gl(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){pt(n)&&(r=i,i=n,n=pt);var a=this,o=function(){var c=St,u=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=Gl(r)),St=a,d=i.apply(a,arguments),pt(d)&&a._r.push(d),St=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===pt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=St;St=null,n(this),St=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof fs)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=ds.indexOf(this);~o&&ds.splice(o,1)}},e.revert=function(n){this.kill(n||{})},s}(),ry=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){ii(n)||(n={matches:n});var a=new ed(0,r||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Cn.matchMedia(n[c]),l&&(ds.indexOf(a)<0&&ds.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Wl):l.addEventListener("change",Wl)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),ca={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return kf(i)})},timeline:function(e){return new nn(e)},getTweensOf:function(e,t){return ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){Rt(e)&&(e=Rn(e)[0]);var r=cr(e||{}).get,a=n?Ef:Tf;return n==="native"&&(n=""),e&&(t?a((gn[t]&&gn[t].get||r)(e,t,n,i)):function(o,l,c){return a((gn[o]&&gn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Rn(e),e.length>1){var i=e.map(function(u){return ln.quickSetter(u,t,n)}),r=i.length;return function(u){for(var d=r;d--;)i[d](u)}}e=e[0]||{};var a=gn[t],o=cr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Yr._pt=0,d.init(e,n?u+n:u,Yr,0,[e]),d.render(1,d),Yr._pt&&wc(1,Yr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=ln.to(e,vr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=hr(e.ease,ls.ease)),rh(ls,e||{})},config:function(e){return rh(bn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!gn[o]&&!wn[o]&&sa(t+" effect requires "+o+" plugin.")}),ul[t]=function(o,l,c){return n(Rn(o),On(l||{},r),c)},a&&(nn.prototype[t]=function(o,l,c){return this.add(ul[t](o,ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Xe[e]=hr(t)},parseEase:function(e,t){return arguments.length?hr(e,t):Xe},getById:function(e){return ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new nn(e),i,r;for(n.smoothChildTiming=sn(e.smoothChildTiming),ut.remove(n),n._dp=0,n._time=n._tTime=ut._time,i=ut._first;i;)r=i._next,(t||!(!i._dur&&i instanceof wt&&i.vars.onComplete===i._targets[0]))&&Kn(n,i,i._start-i._delay),i=r;return Kn(ut,n,0),n},context:function(e,t){return e?new ed(e,t):St},matchMedia:function(e){return new ry(e)},matchMediaRefresh:function(){return ds.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Wl()},addEventListener:function(e,t){var n=jo[e]||(jo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=jo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Ux,wrapYoyo:Nx,distribute:If,random:Of,snap:zf,normalize:Fx,getUnit:Gt,clamp:Rx,splitColor:Bf,toArray:Rn,selector:Gl,mapRange:Uf,pipe:zx,unitize:Ox,interpolate:kx,shuffle:Rf},install:yf,effects:ul,ticker:xn,updateRoot:nn.updateRoot,plugins:gn,globalTimeline:ut,core:{PropTween:an,globals:Sf,Tween:wt,Timeline:nn,Animation:fs,getCache:cr,_removeLinkedListItem:ba,reverting:function(){return Ht},context:function(e){return e&&St&&(St.data.push(e),e._ctx=St),St},suppressOverwrites:function(e){return fc=e}}};on("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ca[s]=wt[s]});xn.add(nn.updateRoot);Yr=ca.to({},{duration:0});var sy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},oy=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=sy(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},ml=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Rt(r)&&(l={},on(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}oy(o,r)}}}},ln=ca.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ht?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ml("roundProps",Hl),ml("modifiers"),ml("snap",zf))||ca;wt.version=nn.version=ln.version="3.11.5";xf=1;pc()&&hs();Xe.Power0;Xe.Power1;Xe.Power2;Xe.Power3;Xe.Power4;Xe.Linear;Xe.Quad;Xe.Cubic;Xe.Quart;Xe.Quint;Xe.Strong;Xe.Elastic;Xe.Back;Xe.SteppedEase;Xe.Bounce;Xe.Sine;Xe.Expo;Xe.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var uh,Li,es,Tc,ir,hh,Ec,ay=function(){return typeof window<"u"},yi={},Ji=180/Math.PI,ts=Math.PI/180,Nr=Math.atan2,fh=1e8,Cc=/([A-Z])/g,ly=/(left|right|width|margin|padding|x)/i,cy=/[\s,\(]\S/,Jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ql=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},uy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},fy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},td=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},nd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},dy=function(e,t,n){return e.style[t]=n},py=function(e,t,n){return e.style.setProperty(t,n)},my=function(e,t,n){return e._gsap[t]=n},gy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},_y=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},vy=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},ht="transform",Xn=ht+"Origin",xy=function s(e,t){var n=this,i=this.target,r=i.style;if(e in yi){if(this.tfm=this.tfm||{},e!=="transform")e=Jn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=hi(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:hi(i,e);else return Jn.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(ht)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Xn,t,"")),e=ht}(r||t)&&this.props.push(e,t,r[e])},id=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},yy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Cc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Ec(),(!r||!r.isStart)&&!n[ht]&&(id(n),i.uncache=1)}},rd=function(e,t){var n={target:e,props:[],revert:yy,save:xy};return e._gsap||ln.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},sd,Xl=function(e,t){var n=Li.createElementNS?Li.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Li.createElement(e);return n.style?n:Li.createElement(e)},ti=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Cc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,ps(t)||t,1)||""},dh="O,Moz,ms,Ms,Webkit".split(","),ps=function(e,t,n){var i=t||ir,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(dh[a]+e in r););return a<0?null:(a===3?"ms":a>=0?dh[a]:"")+e},Yl=function(){ay()&&window.document&&(uh=window,Li=uh.document,es=Li.documentElement,ir=Xl("div")||{style:{}},Xl("div"),ht=ps(ht),Xn=ht+"Origin",ir.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",sd=!!ps("perspective"),Ec=ln.core.reverting,Tc=1)},gl=function s(e){var t=Xl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(es.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),es.removeChild(t),this.style.cssText=r,a},ph=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},od=function(e){var t;try{t=e.getBBox()}catch{t=gl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===gl||(t=gl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+ph(e,["x","cx","x1"])||0,y:+ph(e,["y","cy","y1"])||0,width:0,height:0}:t},ad=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&od(e))},to=function(e,t){if(t){var n=e.style;t in yi&&t!==Xn&&(t=ht),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Cc,"-$1").toLowerCase())):n.removeAttribute(t)}},Di=function(e,t,n,i,r,a){var o=new an(e._pt,t,n,0,1,a?nd:td);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},mh={deg:1,rad:1,turn:1},Sy={grid:1,flex:1},Gi=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=ir.style,l=ly.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",p=i==="%",g,f,m,_;return i===a||!r||mh[i]||mh[a]?r:(a!=="px"&&!h&&(r=s(e,t,n,"px")),_=e.getCTM&&ad(e),(p||a==="%")&&(yi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],_t(p?r/g*d:r/100*g)):(o[l?"width":"height"]=d+(h?a:i),f=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===Li||!f.appendChild)&&(f=Li.body),m=f._gsap,m&&p&&m.width&&l&&m.time===xn.time&&!m.uncache?_t(r/m.width*d):((p||a==="%")&&!Sy[ti(f,"display")]&&(o.position=ti(e,"position")),f===e&&(o.position="static"),f.appendChild(ir),g=ir[u],f.removeChild(ir),o.position="absolute",l&&p&&(m=cr(f),m.time=xn.time,m.width=f[u]),_t(h?g*r/d:g&&r?d/g*r:0))))},hi=function(e,t,n,i){var r;return Tc||Yl(),t in Jn&&t!=="transform"&&(t=Jn[t],~t.indexOf(",")&&(t=t.split(",")[0])),yi[t]&&t!=="transform"?(r=io(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ha(ti(e,Xn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ua[t]&&ua[t](e,t,n)||ti(e,t)||bf(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Gi(e,t,r,n)+n:r},My=function(e,t,n,i){if(!n||n==="none"){var r=ps(t,e,1),a=r&&ti(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=ti(e,"borderTopColor"))}var o=new an(this._pt,e.style,t,0,1,Jf),l=0,c=0,u,d,h,p,g,f,m,_,S,x,v,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=ti(e,t)||i,e.style[t]=n),u=[n,i],Hf(u),n=u[0],i=u[1],h=n.match(Xr)||[],M=i.match(Xr)||[],M.length){for(;d=Xr.exec(i);)m=d[0],S=i.substring(l,d.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(f=h[c++]||"")&&(p=parseFloat(f)||0,v=f.substr((p+"").length),m.charAt(1)==="="&&(m=Qr(p,m)+v),_=parseFloat(m),x=m.substr((_+"").length),l=Xr.lastIndex-x.length,x||(x=x||bn.units[t]||v,l===i.length&&(i+=x,o.e+=x)),v!==x&&(p=Gi(e,t,f,x)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?nd:td;return _f.test(i)&&(o.e=0),this._pt=o,o},gh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},by=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=gh[n]||n,t[1]=gh[i]||i,t.join(" ")},wy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],yi[o]&&(l=1,o=o==="transformOrigin"?Xn:ht),to(n,o);l&&(to(n,ht),a&&(a.svg&&n.removeAttribute("transform"),io(n,1),a.uncache=1,id(i)))}},ua={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new an(e._pt,t,n,0,0,wy);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},no=[1,0,0,1,0,0],ld={},cd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_h=function(e){var t=ti(e,ht);return cd(t)?no:t.substr(7).match(gf).map(_t)},Ac=function(e,t){var n=e._gsap||cr(e),i=e.style,r=_h(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?no:r):(r===no&&!e.offsetParent&&e!==es&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,es.appendChild(e)),r=_h(e),l?i.display=l:to(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):es.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},jl=function(e,t,n,i,r,a){var o=e._gsap,l=r||Ac(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,p=l[0],g=l[1],f=l[2],m=l[3],_=l[4],S=l[5],x=t.split(" "),v=parseFloat(x[0])||0,M=parseFloat(x[1])||0,C,E,y,b;n?l!==no&&(E=p*m-g*f)&&(y=v*(m/E)+M*(-f/E)+(f*S-m*_)/E,b=v*(-g/E)+M*(p/E)-(p*S-g*_)/E,v=y,M=b):(C=od(e),v=C.x+(~x[0].indexOf("%")?v/100*C.width:v),M=C.y+(~(x[1]||x[0]).indexOf("%")?M/100*C.height:M)),i||i!==!1&&o.smooth?(_=v-c,S=M-u,o.xOffset=d+(_*p+S*f)-_,o.yOffset=h+(_*g+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Xn]="0px 0px",a&&(Di(a,o,"xOrigin",c,v),Di(a,o,"yOrigin",u,M),Di(a,o,"xOffset",d,o.xOffset),Di(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+M)},io=function(e,t){var n=e._gsap||new Xf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ti(e,Xn)||"0",u,d,h,p,g,f,m,_,S,x,v,M,C,E,y,b,D,B,F,O,R,k,X,H,G,K,L,ie,I,Q,ne,N;return u=d=h=f=m=_=S=x=v=0,p=g=1,n.svg=!!(e.getCTM&&ad(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ht]!=="none"?l[ht]:"")),i.scale=i.rotate=i.translate="none"),E=Ac(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),jl(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,E)),M=n.xOrigin||0,C=n.yOrigin||0,E!==no&&(B=E[0],F=E[1],O=E[2],R=E[3],u=k=E[4],d=X=E[5],E.length===6?(p=Math.sqrt(B*B+F*F),g=Math.sqrt(R*R+O*O),f=B||F?Nr(F,B)*Ji:0,S=O||R?Nr(O,R)*Ji+f:0,S&&(g*=Math.abs(Math.cos(S*ts))),n.svg&&(u-=M-(M*B+C*O),d-=C-(M*F+C*R))):(N=E[6],Q=E[7],L=E[8],ie=E[9],I=E[10],ne=E[11],u=E[12],d=E[13],h=E[14],y=Nr(N,I),m=y*Ji,y&&(b=Math.cos(-y),D=Math.sin(-y),H=k*b+L*D,G=X*b+ie*D,K=N*b+I*D,L=k*-D+L*b,ie=X*-D+ie*b,I=N*-D+I*b,ne=Q*-D+ne*b,k=H,X=G,N=K),y=Nr(-O,I),_=y*Ji,y&&(b=Math.cos(-y),D=Math.sin(-y),H=B*b-L*D,G=F*b-ie*D,K=O*b-I*D,ne=R*D+ne*b,B=H,F=G,O=K),y=Nr(F,B),f=y*Ji,y&&(b=Math.cos(y),D=Math.sin(y),H=B*b+F*D,G=k*b+X*D,F=F*b-B*D,X=X*b-k*D,B=H,k=G),m&&Math.abs(m)+Math.abs(f)>359.9&&(m=f=0,_=180-_),p=_t(Math.sqrt(B*B+F*F+O*O)),g=_t(Math.sqrt(X*X+N*N)),y=Nr(k,X),S=Math.abs(y)>2e-4?y*Ji:0,v=ne?1/(ne<0?-ne:ne):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!cd(ti(e,ht)),H&&e.setAttribute("transform",H))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(p*=-1,S+=f<=0?180:-180,f+=f<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=_t(p),n.scaleY=_t(g),n.rotation=_t(f)+o,n.rotationX=_t(m)+o,n.rotationY=_t(_)+o,n.skewX=S+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Xn]=ha(c)),n.xOffset=n.yOffset=0,n.force3D=bn.force3D,n.renderTransform=n.svg?Ey:sd?ud:Ty,n.uncache=0,n},ha=function(e){return(e=e.split(" "))[0]+" "+e[1]},_l=function(e,t,n){var i=Gt(t);return _t(parseFloat(t)+parseFloat(Gi(e,"x",n+"px",i)))+i},Ty=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ud(e,t)},ji="0deg",Es="0px",$i=") ",ud=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,p=n.skewY,g=n.scaleX,f=n.scaleY,m=n.transformPerspective,_=n.force3D,S=n.target,x=n.zOrigin,v="",M=_==="auto"&&e&&e!==1||_===!0;if(x&&(d!==ji||u!==ji)){var C=parseFloat(u)*ts,E=Math.sin(C),y=Math.cos(C),b;C=parseFloat(d)*ts,b=Math.cos(C),a=_l(S,a,E*b*-x),o=_l(S,o,-Math.sin(C)*-x),l=_l(S,l,y*b*-x+x)}m!==Es&&(v+="perspective("+m+$i),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(M||a!==Es||o!==Es||l!==Es)&&(v+=l!==Es||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+$i),c!==ji&&(v+="rotate("+c+$i),u!==ji&&(v+="rotateY("+u+$i),d!==ji&&(v+="rotateX("+d+$i),(h!==ji||p!==ji)&&(v+="skew("+h+", "+p+$i),(g!==1||f!==1)&&(v+="scale("+g+", "+f+$i),S.style[ht]=v||"translate(0, 0)"},Ey=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,p=n.target,g=n.xOrigin,f=n.yOrigin,m=n.xOffset,_=n.yOffset,S=n.forceCSS,x=parseFloat(a),v=parseFloat(o),M,C,E,y,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ts,c*=ts,M=Math.cos(l)*d,C=Math.sin(l)*d,E=Math.sin(l-c)*-h,y=Math.cos(l-c)*h,c&&(u*=ts,b=Math.tan(c-u),b=Math.sqrt(1+b*b),E*=b,y*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),M*=b,C*=b)),M=_t(M),C=_t(C),E=_t(E),y=_t(y)):(M=d,y=h,C=E=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=Gi(p,"x",a,"px"),v=Gi(p,"y",o,"px")),(g||f||m||_)&&(x=_t(x+g-(g*M+f*E)+m),v=_t(v+f-(g*C+f*y)+_)),(i||r)&&(b=p.getBBox(),x=_t(x+i/100*b.width),v=_t(v+r/100*b.height)),b="matrix("+M+","+C+","+E+","+y+","+x+","+v+")",p.setAttribute("transform",b),S&&(p.style[ht]=b)},Cy=function(e,t,n,i,r){var a=360,o=Rt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Ji:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*fh)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*fh)%a-~~(c/a)*a)),e._pt=h=new an(e._pt,t,n,i,c,uy),h.e=u,h.u="deg",e._props.push(n),h},vh=function(e,t){for(var n in t)e[n]=t[n];return e},Ay=function(e,t,n){var i=vh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ht]=t,o=io(n,1),to(n,ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ht],a[ht]=t,o=io(n,1),a[ht]=c);for(l in yi)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(p=Gt(c),g=Gt(u),d=p!==g?Gi(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new an(e._pt,o,l,d,h-d,ql),e._pt.u=g||0,e._props.push(l));vh(o,i)};on("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});ua[e>1?"border"+s:s]=function(o,l,c,u,d){var h,p;if(arguments.length<4)return h=a.map(function(g){return hi(o,g,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},a.forEach(function(g,f){return p[g]=h[f]=h[f]||h[(f-1)/2|0]}),o.init(l,p,d)}});var hd={name:"css",register:Yl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,p,g,f,m,_,S,x,v,M,C,E,y;Tc||Yl(),this.styles=this.styles||rd(e),y=this.styles.props,this.tween=n;for(f in t)if(f!=="autoRound"&&(u=t[f],!(gn[f]&&Yf(f,t,n,i,e,r)))){if(p=typeof u,g=ua[f],p==="function"&&(u=u.call(n,i,e,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Qs(u)),g)g(this,e,f,u,n)&&(E=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(f)+"").trim(),u+="",Fi.lastIndex=0,Fi.test(c)||(m=Gt(c),_=Gt(u)),_?m!==_&&(c=Gi(e,f,c,_)+_):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,f),a.push(f),y.push(f,0,o[f]);else if(p!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(n,i,e,r):l[f],Rt(c)&&~c.indexOf("random(")&&(c=Qs(c)),Gt(c+"")||(c+=bn.units[f]||Gt(hi(e,f))||""),(c+"").charAt(1)==="="&&(c=hi(e,f))):c=hi(e,f),h=parseFloat(c),S=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),d=parseFloat(u),f in Jn&&(f==="autoAlpha"&&(h===1&&hi(e,"visibility")==="hidden"&&d&&(h=0),y.push("visibility",0,o.visibility),Di(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),f!=="scale"&&f!=="transform"&&(f=Jn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),x=f in yi,x){if(this.styles.save(f),v||(M=e._gsap,M.renderTransform&&!t.parseTransform||io(e,t.parseTransform),C=t.smoothOrigin!==!1&&M.smooth,v=this._pt=new an(this._pt,o,ht,0,1,M.renderTransform,M,0,-1),v.dep=1),f==="scale")this._pt=new an(this._pt,M,"scaleY",M.scaleY,(S?Qr(M.scaleY,S+d):d)-M.scaleY||0,ql),this._pt.u=0,a.push("scaleY",f),f+="X";else if(f==="transformOrigin"){y.push(Xn,0,o[Xn]),u=by(u),M.svg?jl(e,u,0,C,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==M.zOrigin&&Di(this,M,"zOrigin",M.zOrigin,_),Di(this,o,f,ha(c),ha(u)));continue}else if(f==="svgOrigin"){jl(e,u,1,C,0,this);continue}else if(f in ld){Cy(this,M,f,h,S?Qr(h,S+u):u);continue}else if(f==="smoothOrigin"){Di(this,M,"smooth",M.smooth,u);continue}else if(f==="force3D"){M[f]=u;continue}else if(f==="transform"){Ay(this,u,e);continue}}else f in o||(f=ps(f)||f);if(x||(d||d===0)&&(h||h===0)&&!cy.test(u)&&f in o)m=(c+"").substr((h+"").length),d||(d=0),_=Gt(u)||(f in bn.units?bn.units[f]:m),m!==_&&(h=Gi(e,f,c,_)),this._pt=new an(this._pt,x?M:o,f,h,(S?Qr(h,S+d):d)-h,!x&&(_==="px"||f==="zIndex")&&t.autoRound!==!1?fy:ql),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=hy);else if(f in o)My.call(this,e,f,c,S?S+u:u);else if(f in e)this.add(e,f,c||e[f],S?S+u:u,i,r);else if(f!=="parseTransform"){gc(f,u);continue}x||(f in o?y.push(f,0,o[f]):y.push(f,1,c||e[f])),a.push(f)}}E&&Qf(this)},render:function(e,t){if(t.tween._time||!Ec())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:hi,aliases:Jn,getSetter:function(e,t,n){var i=Jn[t];return i&&i.indexOf(",")<0&&(t=i),t in yi&&t!==Xn&&(e._gsap.x||hi(e,"x"))?n&&hh===n?t==="scale"?gy:my:(hh=n||{})&&(t==="scale"?_y:vy):e.style&&!dc(e.style[t])?dy:~t.indexOf("-")?py:bc(e,t)},core:{_removeProperty:to,_getMatrix:Ac}};ln.utils.checkPrefix=ps;ln.core.getStyleSaver=rd;(function(s,e,t,n){var i=on(s+","+e+","+t,function(r){yi[r]=1});on(e,function(r){bn.units[r]="deg",ld[r]=1}),Jn[i[13]]=s+","+e,on(n,function(r){var a=r.split(":");Jn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){bn.units[s]="px"});ln.registerPlugin(hd);var Gn=ln.registerPlugin(hd)||ln;Gn.core.Tween;function xh(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Ly(s,e,t){return e&&xh(s.prototype,e),t&&xh(s,t),s}/*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ft,$l,yn,Pi,Ri,ns,fd,Qi,Bs,dd,mi,kn,pd,md=function(){return Ft||typeof window<"u"&&(Ft=window.gsap)&&Ft.registerPlugin&&Ft},gd=1,jr=[],We=[],ni=[],Gs=Date.now,Zl=function(e,t){return t},Dy=function(){var e=Bs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,We),i.push.apply(i,ni),We=n,ni=i,Zl=function(a,o){return t[a](o)}},Ui=function(e,t){return~ni.indexOf(e)&&ni[ni.indexOf(e)+1][t]},Hs=function(e){return!!~dd.indexOf(e)},en=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Xt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Io="scrollLeft",zo="scrollTop",Kl=function(){return mi&&mi.isPressed||We.cache++},fa=function(e,t){var n=function i(r){if(r||r===0){gd&&(yn.history.scrollRestoration="manual");var a=mi&&mi.isPressed;r=i.v=Math.round(r)||(mi&&mi.iOS?1:0),e(r),i.cacheID=We.cache,a&&Zl("ss",r)}else(t||We.cache!==i.cacheID||Zl("ref"))&&(i.cacheID=We.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Kt={s:Io,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fa(function(s){return arguments.length?yn.scrollTo(s,Tt.sc()):yn.pageXOffset||Pi[Io]||Ri[Io]||ns[Io]||0})},Tt={s:zo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Kt,sc:fa(function(s){return arguments.length?yn.scrollTo(Kt.sc(),s):yn.pageYOffset||Pi[zo]||Ri[zo]||ns[zo]||0})},tn=function(e){return Ft.utils.toArray(e)[0]||(typeof e=="string"&&Ft.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Hi=function(e,t){var n=t.s,i=t.sc;Hs(e)&&(e=Pi.scrollingElement||Ri);var r=We.indexOf(e),a=i===Tt.sc?1:2;!~r&&(r=We.push(e)-1),We[r+a]||e.addEventListener("scroll",Kl);var o=We[r+a],l=o||(We[r+a]=fa(Ui(e,n),!0)||(Hs(e)?i:fa(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Ft.getProperty(e,"scrollBehavior")==="smooth"),l},Jl=function(e,t,n){var i=e,r=e,a=Gs(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,f){var m=Gs();f||m-a>l?(r=i,i=g,o=a,a=m):n?i+=g:i=r+(g-r)/(m-o)*(a-o)},d=function(){r=i=n?0:i,o=a=0},h=function(g){var f=o,m=r,_=Gs();return(g||g===0)&&g!==i&&u(g),a===o||_-o>c?0:(i+(n?m:-m))/((n?_:a)-f)*1e3};return{update:u,reset:d,getVelocity:h}},Cs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},yh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},_d=function(){Bs=Ft.core.globals().ScrollTrigger,Bs&&Bs.core&&Dy()},vd=function(e){return Ft=e||md(),Ft&&typeof document<"u"&&document.body&&(yn=window,Pi=document,Ri=Pi.documentElement,ns=Pi.body,dd=[yn,Pi,Ri,ns],Ft.utils.clamp,pd=Ft.core.context||function(){},Qi="onpointerenter"in ns?"pointer":"mouse",fd=Mt.isTouch=yn.matchMedia&&yn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in yn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,kn=Mt.eventTypes=("ontouchstart"in Ri?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ri?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return gd=0},500),_d(),$l=1),$l};Kt.op=Tt;We.cache=0;var Mt=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){$l||vd(Ft)||console.warn("Please gsap.registerPlugin(Observer)"),Bs||_d();var i=n.tolerance,r=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,f=n.event,m=n.onDragStart,_=n.onDragEnd,S=n.onDrag,x=n.onPress,v=n.onRelease,M=n.onRight,C=n.onLeft,E=n.onUp,y=n.onDown,b=n.onChangeX,D=n.onChangeY,B=n.onChange,F=n.onToggleX,O=n.onToggleY,R=n.onHover,k=n.onHoverEnd,X=n.onMove,H=n.ignoreCheck,G=n.isNormalizer,K=n.onGestureStart,L=n.onGestureEnd,ie=n.onWheel,I=n.onEnable,Q=n.onDisable,ne=n.onClick,N=n.scrollSpeed,se=n.capture,le=n.allowClicks,he=n.lockAxis,_e=n.onLockAxis;this.target=o=tn(o)||Ri,this.vars=n,p&&(p=Ft.utils.toArray(p)),i=i||1e-9,r=r||0,g=g||1,N=N||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(yn.getComputedStyle(ns).lineHeight)||22);var ye,Ie,fe,ze,Je,ft,Ze,W=this,je=0,Fe=0,bt=Hi(o,Kt),vt=Hi(o,Tt),A=bt(),w=vt(),Z=~a.indexOf("touch")&&!~a.indexOf("pointer")&&kn[0]==="pointerdown",re=Hs(o),ee=o.ownerDocument||Pi,oe=[0,0,0],ge=[0,0,0],pe=0,$=function(){return pe=Gs()},we=function(de,te){return(W.event=de)&&p&&~p.indexOf(de.target)||te&&Z&&de.pointerType!=="touch"||H&&H(de,te)},ve=function(){W._vx.reset(),W._vy.reset(),Ie.pause(),d&&d(W)},Ae=function(){var de=W.deltaX=yh(oe),te=W.deltaY=yh(ge),xe=Math.abs(de)>=i,Oe=Math.abs(te)>=i;B&&(xe||Oe)&&B(W,de,te,oe,ge),xe&&(M&&W.deltaX>0&&M(W),C&&W.deltaX<0&&C(W),b&&b(W),F&&W.deltaX<0!=je<0&&F(W),je=W.deltaX,oe[0]=oe[1]=oe[2]=0),Oe&&(y&&W.deltaY>0&&y(W),E&&W.deltaY<0&&E(W),D&&D(W),O&&W.deltaY<0!=Fe<0&&O(W),Fe=W.deltaY,ge[0]=ge[1]=ge[2]=0),(ze||fe)&&(X&&X(W),fe&&(S(W),fe=!1),ze=!1),ft&&!(ft=!1)&&_e&&_e(W),Je&&(ie(W),Je=!1),ye=0},Ee=function(de,te,xe){oe[xe]+=de,ge[xe]+=te,W._vx.update(de),W._vy.update(te),c?ye||(ye=requestAnimationFrame(Ae)):Ae()},Me=function(de,te){he&&!Ze&&(W.axis=Ze=Math.abs(de)>Math.abs(te)?"x":"y",ft=!0),Ze!=="y"&&(oe[2]+=de,W._vx.update(de,!0)),Ze!=="x"&&(ge[2]+=te,W._vy.update(te,!0)),c?ye||(ye=requestAnimationFrame(Ae)):Ae()},ke=function(de){if(!we(de,1)){de=Cs(de,u);var te=de.clientX,xe=de.clientY,Oe=te-W.x,Ue=xe-W.y,xt=W.isDragging;W.x=te,W.y=xe,(xt||Math.abs(W.startX-te)>=r||Math.abs(W.startY-xe)>=r)&&(S&&(fe=!0),xt||(W.isDragging=!0),Me(Oe,Ue),xt||m&&m(W))}},Se=W.onPress=function(Pe){we(Pe,1)||Pe&&Pe.button||(W.axis=Ze=null,Ie.pause(),W.isPressed=!0,Pe=Cs(Pe),je=Fe=0,W.startX=W.x=Pe.clientX,W.startY=W.y=Pe.clientY,W._vx.reset(),W._vy.reset(),en(G?o:ee,kn[1],ke,u,!0),W.deltaX=W.deltaY=0,x&&x(W))},et=W.onRelease=function(Pe){if(!we(Pe,1)){Xt(G?o:ee,kn[1],ke,!0);var de=!isNaN(W.y-W.startY),te=W.isDragging&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),xe=Cs(Pe);!te&&de&&(W._vx.reset(),W._vy.reset(),u&&le&&Ft.delayedCall(.08,function(){if(Gs()-pe>300&&!Pe.defaultPrevented){if(Pe.target.click)Pe.target.click();else if(ee.createEvent){var Oe=ee.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,yn,1,xe.screenX,xe.screenY,xe.clientX,xe.clientY,!1,!1,!1,!1,0,null),Pe.target.dispatchEvent(Oe)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,d&&!G&&Ie.restart(!0),_&&te&&_(W),v&&v(W,te)}},P=function(de){return de.touches&&de.touches.length>1&&(W.isGesturing=!0)&&K(de,W.isDragging)},j=function(){return(W.isGesturing=!1)||L(W)},J=function(de){if(!we(de)){var te=bt(),xe=vt();Ee((te-A)*N,(xe-w)*N,1),A=te,w=xe,d&&Ie.restart(!0)}},ae=function(de){if(!we(de)){de=Cs(de,u),ie&&(Je=!0);var te=(de.deltaMode===1?l:de.deltaMode===2?yn.innerHeight:1)*g;Ee(de.deltaX*te,de.deltaY*te,0),d&&!G&&Ie.restart(!0)}},me=function(de){if(!we(de)){var te=de.clientX,xe=de.clientY,Oe=te-W.x,Ue=xe-W.y;W.x=te,W.y=xe,ze=!0,(Oe||Ue)&&Me(Oe,Ue)}},$e=function(de){W.event=de,R(W)},tt=function(de){W.event=de,k(W)},mt=function(de){return we(de)||Cs(de,u)&&ne(W)};Ie=W._dc=Ft.delayedCall(h||.25,ve).pause(),W.deltaX=W.deltaY=0,W._vx=Jl(0,50,!0),W._vy=Jl(0,50,!0),W.scrollX=bt,W.scrollY=vt,W.isDragging=W.isGesturing=W.isPressed=!1,pd(this),W.enable=function(Pe){return W.isEnabled||(en(re?ee:o,"scroll",Kl),a.indexOf("scroll")>=0&&en(re?ee:o,"scroll",J,u,se),a.indexOf("wheel")>=0&&en(o,"wheel",ae,u,se),(a.indexOf("touch")>=0&&fd||a.indexOf("pointer")>=0)&&(en(o,kn[0],Se,u,se),en(ee,kn[2],et),en(ee,kn[3],et),le&&en(o,"click",$,!1,!0),ne&&en(o,"click",mt),K&&en(ee,"gesturestart",P),L&&en(ee,"gestureend",j),R&&en(o,Qi+"enter",$e),k&&en(o,Qi+"leave",tt),X&&en(o,Qi+"move",me)),W.isEnabled=!0,Pe&&Pe.type&&Se(Pe),I&&I(W)),W},W.disable=function(){W.isEnabled&&(jr.filter(function(Pe){return Pe!==W&&Hs(Pe.target)}).length||Xt(re?ee:o,"scroll",Kl),W.isPressed&&(W._vx.reset(),W._vy.reset(),Xt(G?o:ee,kn[1],ke,!0)),Xt(re?ee:o,"scroll",J,se),Xt(o,"wheel",ae,se),Xt(o,kn[0],Se,se),Xt(ee,kn[2],et),Xt(ee,kn[3],et),Xt(o,"click",$,!0),Xt(o,"click",mt),Xt(ee,"gesturestart",P),Xt(ee,"gestureend",j),Xt(o,Qi+"enter",$e),Xt(o,Qi+"leave",tt),Xt(o,Qi+"move",me),W.isEnabled=W.isPressed=W.isDragging=!1,Q&&Q(W))},W.kill=W.revert=function(){W.disable();var Pe=jr.indexOf(W);Pe>=0&&jr.splice(Pe,1),mi===W&&(mi=0)},jr.push(W),G&&Hs(o)&&(mi=W),W.enable(f)},Ly(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Mt.version="3.11.5";Mt.create=function(s){return new Mt(s)};Mt.register=vd;Mt.getAll=function(){return jr.slice()};Mt.getById=function(s){return jr.filter(function(e){return e.vars.id===s})[0]};md()&&Ft.registerPlugin(Mt);/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var be,Vr,qe,lt,Hn,dt,xd,da,pa,$r,$o,Oo,Bt,Ea,Ql,jt,Sh,Mh,Wr,yd,vl,Sd,pn,Md,bd,wd,Ti,ec,Lc,xl,Fo=1,Zt=Date.now,yl=Zt(),zn=0,Is=0,Py=function s(){return Is&&requestAnimationFrame(s)},bh=function(){return Ea=1},wh=function(){return Ea=0},$n=function(e){return e},zs=function(e){return Math.round(e*1e5)/1e5||0},Td=function(){return typeof window<"u"},Ed=function(){return be||Td()&&(be=window.gsap)&&be.registerPlugin&&be},xr=function(e){return!!~xd.indexOf(e)},Cd=function(e){return Ui(e,"getBoundingClientRect")||(xr(e)?function(){return ta.width=qe.innerWidth,ta.height=qe.innerHeight,ta}:function(){return di(e)})},Ry=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=Ui(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?qe["inner"+r]:e["client"+r])||0}},Iy=function(e,t){return!t||~ni.indexOf(e)?Cd(e):function(){return ta}},Ii=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Ui(e,n))?a()-Cd(e)()[r]:xr(e)?(Hn[n]||dt[n])-(qe["inner"+i]||Hn["client"+i]||dt["client"+i]):e[n]-e["offset"+i])},Uo=function(e,t){for(var n=0;n<Wr.length;n+=3)(!t||~t.indexOf(Wr[n+1]))&&e(Wr[n],Wr[n+1],Wr[n+2])},Bn=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},Os=function(e){return typeof e=="number"},Zo=function(e){return typeof e=="object"},As=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Sl=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},kr=Math.abs,Ad="left",Ld="top",Dc="right",Pc="bottom",fr="width",dr="height",Vs="Right",Ws="Left",qs="Top",Xs="Bottom",gt="padding",Dn="margin",ms="Width",Rc="Height",It="px",qn=function(e){return qe.getComputedStyle(e)},zy=function(e){var t=qn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Th=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},di=function(e,t){var n=t&&qn(e)[Ql]!=="matrix(1, 0, 0, 1, 0, 0)"&&be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},tc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Dd=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Oy=function(e){return function(t){return be.utils.snap(Dd(e),t)}},Ic=function(e){var t=be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var o;if(!r)return t(i);if(r>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var o=t(i);return!r||Math.abs(o-i)<a||o-i<0==r<0?o:t(r<0?i-e:i+e)}},Fy=function(e){return function(t,n){return Ic(Dd(e))(t,n.direction)}},No=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Pt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Dt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ko=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Eh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Bo={toggleActions:"play",anticipatePin:0},ma={top:0,left:0,center:.5,bottom:1,right:1},Ko=function(e,t){if(Bn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ma?ma[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Go=function(e,t,n,i,r,a,o,l){var c=r.startColor,u=r.endColor,d=r.fontSize,h=r.indent,p=r.fontWeight,g=lt.createElement("div"),f=xr(n)||Ui(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=f?dt:n,S=e.indexOf("start")!==-1,x=S?c:u,v="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&f?"fixed;":"absolute;"),(m||l||!f)&&(v+=(i===Tt?Dc:Pc)+":"+(a+parseFloat(h))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],Jo(g,0,i,S),g},Jo=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+ms]=1,r["border"+o+ms]=0,r[n.p]=t+"px",be.set(e,r)},Ge=[],nc={},ro,Ch=function(){return Zt()-zn>34&&(ro||(ro=requestAnimationFrame(_i)))},Br=function(){(!pn||!pn.isPressed||pn.startX>dt.clientWidth)&&(We.cache++,pn?ro||(ro=requestAnimationFrame(_i)):_i(),zn||Sr("scrollStart"),zn=Zt())},Ml=function(){wd=qe.innerWidth,bd=qe.innerHeight},Fs=function(){We.cache++,!Bt&&!Sd&&!lt.fullscreenElement&&!lt.webkitFullscreenElement&&(!Md||wd!==qe.innerWidth||Math.abs(qe.innerHeight-bd)>qe.innerHeight*.25)&&da.restart(!0)},yr={},Uy=[],Pd=function s(){return Dt(He,"scrollEnd",s)||rr(!0)},Sr=function(e){return yr[e]&&yr[e].map(function(t){return t()})||Uy},mn=[],Rd=function(e){for(var t=0;t<mn.length;t+=5)(!e||mn[t+4]&&mn[t+4].query===e)&&(mn[t].style.cssText=mn[t+1],mn[t].getBBox&&mn[t].setAttribute("transform",mn[t+2]||""),mn[t+3].uncache=1)},zc=function(e,t){var n;for(jt=0;jt<Ge.length;jt++)n=Ge[jt],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&Rd(t),t||Sr("revert")},Id=function(e,t){We.cache++,(t||!_n)&&We.forEach(function(n){return Jt(n)&&n.cacheID++&&(n.rec=0)}),Bn(e)&&(qe.history.scrollRestoration=Lc=e)},_n,pr=0,Ah,Ny=function(){if(Ah!==pr){var e=Ah=pr;requestAnimationFrame(function(){return e===pr&&rr(!0)})}},rr=function(e,t){if(zn&&!e){Pt(He,"scrollEnd",Pd);return}_n=He.isRefreshing=!0,We.forEach(function(i){return Jt(i)&&i.cacheID++&&(i.rec=i())});var n=Sr("refreshInit");yd&&He.sort(),t||zc(),We.forEach(function(i){Jt(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ge.slice(0).forEach(function(i){return i.refresh()}),Ge.forEach(function(i,r){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-o),i.refresh()}}),Ge.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,Ii(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),We.forEach(function(i){Jt(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Id(Lc,1),da.pause(),pr++,_n=2,_i(2),Ge.forEach(function(i){return Jt(i.vars.onRefresh)&&i.vars.onRefresh(i)}),_n=He.isRefreshing=!1,Sr("refresh")},ic=0,Qo=1,Ys,_i=function(e){if(!_n||e===2){He.isUpdating=!0,Ys&&Ys.update(0);var t=Ge.length,n=Zt(),i=n-yl>=50,r=t&&Ge[0].scroll();if(Qo=ic>r?-1:1,_n||(ic=r),i&&(zn&&!Ea&&n-zn>200&&(zn=0,Sr("scrollEnd")),$o=yl,yl=n),Qo<0){for(jt=t;jt-- >0;)Ge[jt]&&Ge[jt].update(0,i);Qo=1}else for(jt=0;jt<t;jt++)Ge[jt]&&Ge[jt].update(0,i);He.isUpdating=!1}ro=0},rc=[Ad,Ld,Pc,Dc,Dn+Xs,Dn+Vs,Dn+qs,Dn+Ws,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ea=rc.concat([fr,dr,"boxSizing","max"+ms,"max"+Rc,"position",Dn,gt,gt+qs,gt+Vs,gt+Xs,gt+Ws]),ky=function(e,t,n){is(n);var i=e._gsap;if(i.spacerIsNative)is(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},bl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=rc.length,a=t.style,o=e.style,l;r--;)l=rc[r],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Pc]=o[Dc]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[fr]=tc(e,Kt)+It,a[dr]=tc(e,Tt)+It,a[gt]=o[Dn]=o[Ld]=o[Ad]="0",is(i),o[fr]=o["max"+ms]=n[fr],o[dr]=o["max"+Rc]=n[dr],o[gt]=n[gt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},By=/([A-Z])/g,is=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||be.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(By,"-$1").toLowerCase())}},Ho=function(e){for(var t=ea.length,n=e.style,i=[],r=0;r<t;r++)i.push(ea[r],n[ea[r]]);return i.t=e,i},Gy=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,o;a<r;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},ta={left:0,top:0},Lh=function(e,t,n,i,r,a,o,l,c,u,d,h,p){Jt(e)&&(e=e(l)),Bn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Ko("0"+e.substr(3),n):0));var g=p?p.time():0,f,m,_;if(p&&p.seek(0),Os(e))p&&(e=be.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,h,e)),o&&Jo(o,n,i,!0);else{Jt(t)&&(t=t(l));var S=(e||"0").split(" "),x,v,M,C;_=tn(t)||dt,x=di(_)||{},(!x||!x.left&&!x.top)&&qn(_).display==="none"&&(C=_.style.display,_.style.display="block",x=di(_),C?_.style.display=C:_.style.removeProperty("display")),v=Ko(S[0],x[i.d]),M=Ko(S[1]||"0",n),e=x[i.p]-c[i.p]-u+v+r-M,o&&Jo(o,M,i,n-M<20||o._isStart&&M>20),n-=n-M}if(a){var E=e+n,y=a._isStart;f="scroll"+i.d2,Jo(a,E,i,y&&E>20||!y&&(d?Math.max(dt[f],Hn[f]):a.parentNode[f])<=E+1),d&&(c=di(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+It))}return p&&_&&(f=di(_),p.seek(h),m=di(_),p._caScrollDist=f[i.p]-m[i.p],e=e/p._caScrollDist*h),p&&p.seek(g),p?e:Math.round(e)},Hy=/(webkit|moz|length|cssText|inset)/i,Dh=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,o;if(t===dt){e._stOrig=r.cssText,o=qn(e);for(a in o)!+a&&!Hy.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;be.core.getCache(e).uncache=1,t.appendChild(e)}},zd=function(e,t,n){var i=t,r=i;return function(a){var o=Math.round(e());return o!==i&&o!==r&&Math.abs(o-i)>3&&Math.abs(o-r)>3&&(a=o,n&&n()),r=i,i=a,a}},Ph=function(e,t){var n=Hi(e,t),i="_scroll"+t.p2,r=function a(o,l,c,u,d){var h=a.tween,p=l.onComplete,g={};c=c||n();var f=zd(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.modifiers=g,g[i]=function(){return f(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){We.cache++,_i()},l.onComplete=function(){a.tween=0,p&&p.call(h)},h=a.tween=be.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Pt(e,"wheel",n.wheelHandler),He.isTouch&&Pt(e,"touchmove",n.wheelHandler),r},He=function(){function s(t,n){Vr||s.register(be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Is){this.update=this.refresh=this.kill=$n;return}n=Th(Bn(n)||Os(n)||n.nodeType?{trigger:n}:n,Bo);var r=n,a=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,d=r.scrub,h=r.trigger,p=r.pin,g=r.pinSpacing,f=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,S=r.onSnapComplete,x=r.once,v=r.snap,M=r.pinReparent,C=r.pinSpacer,E=r.containerAnimation,y=r.fastScrollEnd,b=r.preventOverlaps,D=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Kt:Tt,B=!d&&d!==0,F=tn(n.scroller||qe),O=be.core.getCache(F),R=xr(F),k=("pinType"in n?n.pinType:Ui(F,"pinType")||R&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],H=B&&n.toggleActions.split(" "),G="markers"in n?n.markers:Bo.markers,K=R?0:parseFloat(qn(F)["border"+D.p2+ms])||0,L=this,ie=n.onRefreshInit&&function(){return n.onRefreshInit(L)},I=Ry(F,R,D),Q=Iy(F,R),ne=0,N=0,se=Hi(F,D),le,he,_e,ye,Ie,fe,ze,Je,ft,Ze,W,je,Fe,bt,vt,A,w,Z,re,ee,oe,ge,pe,$,we,ve,Ae,Ee,Me,ke,Se,et,P,j,J,ae,me,$e,tt;if(ec(L),L._dir=D,m*=45,L.scroller=F,L.scroll=E?E.time.bind(E):se,ye=se(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(yd=1,n.refreshPriority===-9999&&(Ys=L)),O.tweenScroll=O.tweenScroll||{top:Ph(F,Tt),left:Ph(F,Kt)},L.tweenTo=le=O.tweenScroll[D.p],L.scrubDuration=function(te){et=Os(te)&&te,et?Se?Se.duration(te):Se=be.to(i,{ease:"expo",totalProgress:"+=0.001",duration:et,paused:!0,onComplete:function(){return _&&_(L)}}):(Se&&Se.progress(1).kill(),Se=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(d),Se&&Se.resetTo&&Se.resetTo("totalProgress",0),Me=0,l||(l=i.vars.id)),Ge.push(L),v&&((!Zo(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in dt.style&&be.set(R?[dt,Hn]:F,{scrollBehavior:"auto"}),We.forEach(function(te){return Jt(te)&&te.target===(R?lt.scrollingElement||Hn:F)&&(te.smooth=!1)}),_e=Jt(v.snapTo)?v.snapTo:v.snapTo==="labels"?Oy(i):v.snapTo==="labelsDirectional"?Fy(i):v.directional!==!1?function(te,xe){return Ic(v.snapTo)(te,Zt()-N<500?0:xe.direction)}:be.utils.snap(v.snapTo),P=v.duration||{min:.1,max:2},P=Zo(P)?$r(P.min,P.max):$r(P,P),j=be.delayedCall(v.delay||et/2||.1,function(){var te=se(),xe=Zt()-N<500,Oe=le.tween;if((xe||Math.abs(L.getVelocity())<10)&&!Oe&&!Ea&&ne!==te){var Ue=(te-fe)/Fe,xt=i&&!B?i.totalProgress():Ue,T=xe?0:(xt-ke)/(Zt()-$o)*1e3||0,U=be.utils.clamp(-Ue,1-Ue,kr(T/2)*T/.185),V=Ue+(v.inertia===!1?0:U),z=$r(0,1,_e(V,L)),q=Math.round(fe+z*Fe),ue=v,Te=ue.onStart,Le=ue.onInterrupt,Ce=ue.onComplete;if(te<=ze&&te>=fe&&q!==te){if(Oe&&!Oe._initted&&Oe.data<=kr(q-te))return;v.inertia===!1&&(U=z-Ue),le(q,{duration:P(kr(Math.max(kr(V-xt),kr(z-xt))*.185/T/.05||0)),ease:v.ease||"power3",data:kr(q-te),onInterrupt:function(){return j.restart(!0)&&Le&&Le(L)},onComplete:function(){L.update(),ne=se(),Me=ke=i&&!B?i.totalProgress():L.progress,S&&S(L),Ce&&Ce(L)}},te,U*Fe,q-te-U*Fe),Te&&Te(L,le.tween)}}else L.isActive&&ne!==te&&j.restart(!0)}).pause()),l&&(nc[l]=L),h=L.trigger=tn(h||p),tt=h&&h._gsap&&h._gsap.stRevert,tt&&(tt=tt(L)),p=p===!0?h:tn(p),Bn(o)&&(o={targets:h,className:o}),p&&(g===!1||g===Dn||(g=!g&&p.parentNode&&p.parentNode.style&&qn(p.parentNode).display==="flex"?!1:gt),L.pin=p,he=be.core.getCache(p),he.spacer?bt=he.pinState:(C&&(C=tn(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),he.spacerIsNative=!!C,C&&(he.spacerState=Ho(C))),he.spacer=w=C||lt.createElement("div"),w.classList.add("pin-spacer"),l&&w.classList.add("pin-spacer-"+l),he.pinState=bt=Ho(p)),n.force3D!==!1&&be.set(p,{force3D:!0}),L.spacer=w=he.spacer,Ee=qn(p),pe=Ee[g+D.os2],re=be.getProperty(p),ee=be.quickSetter(p,D.a,It),bl(p,w,Ee),A=Ho(p)),G){je=Zo(G)?Th(G,Eh):Eh,Ze=Go("scroller-start",l,F,D,je,0),W=Go("scroller-end",l,F,D,je,0,Ze),Z=Ze["offset"+D.op.d2];var mt=tn(Ui(F,"content")||F);Je=this.markerStart=Go("start",l,mt,D,je,Z,0,E),ft=this.markerEnd=Go("end",l,mt,D,je,Z,0,E),E&&($e=be.quickSetter([Je,ft],D.a,It)),!k&&!(ni.length&&Ui(F,"fixedMarkers")===!0)&&(zy(R?dt:F),be.set([Ze,W],{force3D:!0}),we=be.quickSetter(Ze,D.a,It),Ae=be.quickSetter(W,D.a,It))}if(E){var Pe=E.vars.onUpdate,de=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){L.update(0,0,1),Pe&&Pe.apply(E,de||[])})}L.previous=function(){return Ge[Ge.indexOf(L)-1]},L.next=function(){return Ge[Ge.indexOf(L)+1]},L.revert=function(te,xe){if(!xe)return L.kill(!0);var Oe=te!==!1||!L.enabled,Ue=Bt;Oe!==L.isReverted&&(Oe&&(ae=Math.max(se(),L.scroll.rec||0),J=L.progress,me=i&&i.progress()),Je&&[Je,ft,Ze,W].forEach(function(xt){return xt.style.display=Oe?"none":"block"}),Oe&&(Bt=L,L.update(Oe)),p&&(!M||!L.isActive)&&(Oe?ky(p,w,bt):bl(p,w,qn(p),$)),Oe||L.update(Oe),Bt=Ue,L.isReverted=Oe)},L.refresh=function(te,xe){if(!((Bt||!L.enabled)&&!xe)){if(p&&te&&zn){Pt(s,"scrollEnd",Pd);return}!_n&&ie&&ie(L),Bt=L,N=Zt(),le.tween&&(le.tween.kill(),le.tween=0),Se&&Se.pause(),f&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;for(var Oe=I(),Ue=Q(),xt=E?E.duration():Ii(F,D),T=Fe<=.01,U=0,V=0,z=n.end,q=n.endTrigger||h,ue=n.start||(n.start===0||!h?0:p?"0 0":"0 100%"),Te=L.pinnedContainer=n.pinnedContainer&&tn(n.pinnedContainer),Le=h&&Math.max(0,Ge.indexOf(L))||0,Ce=Le,De,Re,Ne,nt,Ye,it,At,at,Ve,ri,Qe;Ce--;)it=Ge[Ce],it.end||it.refresh(0,1)||(Bt=L),At=it.pin,At&&(At===h||At===p||At===Te)&&!it.isReverted&&(ri||(ri=[]),ri.unshift(it),it.revert(!0,!0)),it!==Ge[Ce]&&(Le--,Ce--);for(Jt(ue)&&(ue=ue(L)),fe=Lh(ue,h,Oe,D,se(),Je,Ze,L,Ue,K,k,xt,E)||(p?-.001:0),Jt(z)&&(z=z(L)),Bn(z)&&!z.indexOf("+=")&&(~z.indexOf(" ")?z=(Bn(ue)?ue.split(" ")[0]:"")+z:(U=Ko(z.substr(2),Oe),z=Bn(ue)?ue:(E?be.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,fe):fe)+U,q=h)),ze=Math.max(fe,Lh(z||(q?"100% 0":xt),q,Oe,D,se()+U,ft,W,L,Ue,K,k,xt,E))||-.001,Fe=ze-fe||(fe-=.01)&&.001,U=0,Ce=Le;Ce--;)it=Ge[Ce],At=it.pin,At&&it.start-it._pinPush<=fe&&!E&&it.end>0&&(De=it.end-it.start,(At===h&&it.start-it._pinPush<fe||At===Te)&&!Os(ue)&&(U+=De*(1-it.progress)),At===p&&(V+=De));if(fe+=U,ze+=U,T&&(J=be.utils.clamp(0,1,be.utils.normalize(fe,ze,ae))),L._pinPush=V,Je&&U&&(De={},De[D.a]="+="+U,Te&&(De[D.p]="-="+se()),be.set([Je,ft],De)),p)De=qn(p),nt=D===Tt,Ne=se(),oe=parseFloat(re(D.a))+V,!xt&&ze>1&&(Qe=(R?lt.scrollingElement||Hn:F).style,Qe={style:Qe,value:Qe["overflow"+D.a.toUpperCase()]},Qe.style["overflow"+D.a.toUpperCase()]="scroll"),bl(p,w,De),A=Ho(p),Re=di(p,!0),at=k&&Hi(F,nt?Kt:Tt)(),g&&($=[g+D.os2,Fe+V+It],$.t=w,Ce=g===gt?tc(p,D)+Fe+V:0,Ce&&$.push(D.d,Ce+It),is($),Te&&Ge.forEach(function(cn){cn.pin===Te&&cn.vars.pinSpacing!==!1&&(cn._subPinOffset=!0)}),k&&se(ae)),k&&(Ye={top:Re.top+(nt?Ne-fe:at)+It,left:Re.left+(nt?at:Ne-fe)+It,boxSizing:"border-box",position:"fixed"},Ye[fr]=Ye["max"+ms]=Math.ceil(Re.width)+It,Ye[dr]=Ye["max"+Rc]=Math.ceil(Re.height)+It,Ye[Dn]=Ye[Dn+qs]=Ye[Dn+Vs]=Ye[Dn+Xs]=Ye[Dn+Ws]="0",Ye[gt]=De[gt],Ye[gt+qs]=De[gt+qs],Ye[gt+Vs]=De[gt+Vs],Ye[gt+Xs]=De[gt+Xs],Ye[gt+Ws]=De[gt+Ws],vt=Gy(bt,Ye,M),_n&&se(0)),i?(Ve=i._initted,vl(1),i.render(i.duration(),!0,!0),ge=re(D.a)-oe+Fe+V,ve=Math.abs(Fe-ge)>1,k&&ve&&vt.splice(vt.length-2,2),i.render(0,!0,!0),Ve||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),vl(0)):ge=Fe,Qe&&(Qe.value?Qe.style["overflow"+D.a.toUpperCase()]=Qe.value:Qe.style.removeProperty("overflow-"+D.a));else if(h&&se()&&!E)for(Re=h.parentNode;Re&&Re!==dt;)Re._pinOffset&&(fe-=Re._pinOffset,ze-=Re._pinOffset),Re=Re.parentNode;ri&&ri.forEach(function(cn){return cn.revert(!1,!0)}),L.start=fe,L.end=ze,ye=Ie=_n?ae:se(),!E&&!_n&&(ye<ae&&se(ae),L.scroll.rec=0),L.revert(!1,!0),j&&(ne=-1,L.isActive&&se(fe+Fe*J),j.restart(!0)),Bt=0,i&&B&&(i._initted||me)&&i.progress()!==me&&i.progress(me,!0).render(i.time(),!0,!0),(T||J!==L.progress||E)&&(i&&!B&&i.totalProgress(E&&fe<-.001&&!J?be.utils.normalize(fe,ze,0):J,!0),L.progress=(ye-fe)/Fe===J?0:J),p&&g&&(w._pinOffset=Math.round(L.progress*ge)),Se&&Se.invalidate(),u&&!_n&&u(L)}},L.getVelocity=function(){return(se()-Ie)/(Zt()-$o)*1e3||0},L.endAnimation=function(){As(L.callbackAnimation),i&&(Se?Se.progress(1):i.paused()?B||As(i,L.direction<0,1):As(i,i.reversed()))},L.labelToScroll=function(te){return i&&i.labels&&(fe||L.refresh()||fe)+i.labels[te]/i.duration()*Fe||0},L.getTrailing=function(te){var xe=Ge.indexOf(L),Oe=L.direction>0?Ge.slice(0,xe).reverse():Ge.slice(xe+1);return(Bn(te)?Oe.filter(function(Ue){return Ue.vars.preventOverlaps===te}):Oe).filter(function(Ue){return L.direction>0?Ue.end<=fe:Ue.start>=ze})},L.update=function(te,xe,Oe){if(!(E&&!Oe&&!te)){var Ue=_n===!0?ae:L.scroll(),xt=te?0:(Ue-fe)/Fe,T=xt<0?0:xt>1?1:xt||0,U=L.progress,V,z,q,ue,Te,Le,Ce,De;if(xe&&(Ie=ye,ye=E?se():Ue,v&&(ke=Me,Me=i&&!B?i.totalProgress():T)),m&&!T&&p&&!Bt&&!Fo&&zn&&fe<Ue+(Ue-Ie)/(Zt()-$o)*m&&(T=1e-4),T!==U&&L.enabled){if(V=L.isActive=!!T&&T<1,z=!!U&&U<1,Le=V!==z,Te=Le||!!T!=!!U,L.direction=T>U?1:-1,L.progress=T,Te&&!Bt&&(q=T&&!U?0:T===1?1:U===1?2:3,B&&(ue=!Le&&H[q+1]!=="none"&&H[q+1]||H[q],De=i&&(ue==="complete"||ue==="reset"||ue in i))),b&&(Le||De)&&(De||d||!i)&&(Jt(b)?b(L):L.getTrailing(b).forEach(function(Ye){return Ye.endAnimation()})),B||(Se&&!Bt&&!Fo?(Se._dp._time-Se._start!==Se._time&&Se.render(Se._dp._time-Se._start),Se.resetTo?Se.resetTo("totalProgress",T,i._tTime/i._tDur):(Se.vars.totalProgress=T,Se.invalidate().restart())):i&&i.totalProgress(T,!!Bt)),p){if(te&&g&&(w.style[g+D.os2]=pe),!k)ee(zs(oe+ge*T));else if(Te){if(Ce=!te&&T>U&&ze+1>Ue&&Ue+1>=Ii(F,D),M)if(!te&&(V||Ce)){var Re=di(p,!0),Ne=Ue-fe;Dh(p,dt,Re.top+(D===Tt?Ne:0)+It,Re.left+(D===Tt?0:Ne)+It)}else Dh(p,w);is(V||Ce?vt:A),ve&&T<1&&V||ee(oe+(T===1&&!Ce?ge:0))}}v&&!le.tween&&!Bt&&!Fo&&j.restart(!0),o&&(Le||x&&T&&(T<1||!xl))&&pa(o.targets).forEach(function(Ye){return Ye.classList[V||x?"add":"remove"](o.className)}),a&&!B&&!te&&a(L),Te&&!Bt?(B&&(De&&(ue==="complete"?i.pause().totalProgress(1):ue==="reset"?i.restart(!0).pause():ue==="restart"?i.restart(!0):i[ue]()),a&&a(L)),(Le||!xl)&&(c&&Le&&Sl(L,c),X[q]&&Sl(L,X[q]),x&&(T===1?L.kill(!1,1):X[q]=0),Le||(q=T===1?1:3,X[q]&&Sl(L,X[q]))),y&&!V&&Math.abs(L.getVelocity())>(Os(y)?y:2500)&&(As(L.callbackAnimation),Se?Se.progress(1):As(i,ue==="reverse"?1:!T,1))):B&&a&&!Bt&&a(L)}if(Ae){var nt=E?Ue/E.duration()*(E._caScrollDist||0):Ue;we(nt+(Ze._isFlipped?1:0)),Ae(nt)}$e&&$e(-Ue/E.duration()*(E._caScrollDist||0))}},L.enable=function(te,xe){L.enabled||(L.enabled=!0,Pt(F,"resize",Fs),Pt(R?lt:F,"scroll",Br),ie&&Pt(s,"refreshInit",ie),te!==!1&&(L.progress=J=0,ye=Ie=ne=se()),xe!==!1&&L.refresh())},L.getTween=function(te){return te&&le?le.tween:Se},L.setPositions=function(te,xe){p&&(oe+=te-fe,ge+=xe-te-Fe,g===gt&&L.adjustPinSpacing(xe-te-Fe)),L.start=fe=te,L.end=ze=xe,Fe=xe-te,L.update()},L.adjustPinSpacing=function(te){if($&&te){var xe=$.indexOf(D.d)+1;$[xe]=parseFloat($[xe])+te+It,$[1]=parseFloat($[1])+te+It,is($)}},L.disable=function(te,xe){if(L.enabled&&(te!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,xe||Se&&Se.pause(),ae=0,he&&(he.uncache=1),ie&&Dt(s,"refreshInit",ie),j&&(j.pause(),le.tween&&le.tween.kill()&&(le.tween=0)),!R)){for(var Oe=Ge.length;Oe--;)if(Ge[Oe].scroller===F&&Ge[Oe]!==L)return;Dt(F,"resize",Fs),Dt(F,"scroll",Br)}},L.kill=function(te,xe){L.disable(te,xe),Se&&!xe&&Se.kill(),l&&delete nc[l];var Oe=Ge.indexOf(L);Oe>=0&&Ge.splice(Oe,1),Oe===jt&&Qo>0&&jt--,Oe=0,Ge.forEach(function(Ue){return Ue.scroller===L.scroller&&(Oe=1)}),Oe||_n||(L.scroll.rec=0),i&&(i.scrollTrigger=null,te&&i.revert({kill:!1}),xe||i.kill()),Je&&[Je,ft,Ze,W].forEach(function(Ue){return Ue.parentNode&&Ue.parentNode.removeChild(Ue)}),Ys===L&&(Ys=0),p&&(he&&(he.uncache=1),Oe=0,Ge.forEach(function(Ue){return Ue.pin===p&&Oe++}),Oe||(he.spacer=0)),n.onKill&&n.onKill(L)},L.enable(!1,!1),tt&&tt(L),!i||!i.add||Fe?L.refresh():be.delayedCall(.01,function(){return fe||ze||L.refresh()})&&(Fe=.01)&&(fe=ze=0),p&&Ny()},s.register=function(n){return Vr||(be=n||Ed(),Td()&&window.document&&s.enable(),Vr=Is),Vr},s.defaults=function(n){if(n)for(var i in n)Bo[i]=n[i];return Bo},s.disable=function(n,i){Is=0,Ge.forEach(function(a){return a[i?"kill":"disable"](n)}),Dt(qe,"wheel",Br),Dt(lt,"scroll",Br),clearInterval(Oo),Dt(lt,"touchcancel",$n),Dt(dt,"touchstart",$n),No(Dt,lt,"pointerdown,touchstart,mousedown",bh),No(Dt,lt,"pointerup,touchend,mouseup",wh),da.kill(),Uo(Dt);for(var r=0;r<We.length;r+=3)ko(Dt,We[r],We[r+1]),ko(Dt,We[r],We[r+2])},s.enable=function(){if(qe=window,lt=document,Hn=lt.documentElement,dt=lt.body,be&&(pa=be.utils.toArray,$r=be.utils.clamp,ec=be.core.context||$n,vl=be.core.suppressOverwrites||$n,Lc=qe.history.scrollRestoration||"auto",ic=qe.pageYOffset,be.core.globals("ScrollTrigger",s),dt)){Is=1,Py(),Mt.register(be),s.isTouch=Mt.isTouch,Ti=Mt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Pt(qe,"wheel",Br),xd=[qe,lt,Hn,dt],be.matchMedia?(s.matchMedia=function(l){var c=be.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},be.addEventListener("matchMediaInit",function(){return zc()}),be.addEventListener("matchMediaRevert",function(){return Rd()}),be.addEventListener("matchMedia",function(){rr(0,1),Sr("matchMedia")}),be.matchMedia("(orientation: portrait)",function(){return Ml(),Ml})):console.warn("Requires GSAP 3.11.0 or later"),Ml(),Pt(lt,"scroll",Br);var n=dt.style,i=n.borderTopStyle,r=be.core.Animation.prototype,a,o;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=di(dt),Tt.m=Math.round(a.top+Tt.sc())||0,Kt.m=Math.round(a.left+Kt.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Oo=setInterval(Ch,250),be.delayedCall(.5,function(){return Fo=0}),Pt(lt,"touchcancel",$n),Pt(dt,"touchstart",$n),No(Pt,lt,"pointerdown,touchstart,mousedown",bh),No(Pt,lt,"pointerup,touchend,mouseup",wh),Ql=be.utils.checkPrefix("transform"),ea.push(Ql),Vr=Zt(),da=be.delayedCall(.2,rr).pause(),Wr=[lt,"visibilitychange",function(){var l=qe.innerWidth,c=qe.innerHeight;lt.hidden?(Sh=l,Mh=c):(Sh!==l||Mh!==c)&&Fs()},lt,"DOMContentLoaded",rr,qe,"load",rr,qe,"resize",Fs],Uo(Pt),Ge.forEach(function(l){return l.enable(0,1)}),o=0;o<We.length;o+=3)ko(Dt,We[o],We[o+1]),ko(Dt,We[o],We[o+2])}},s.config=function(n){"limitCallbacks"in n&&(xl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Oo)||(Oo=i)&&setInterval(Ch,i),"ignoreMobileResize"in n&&(Md=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Uo(Dt)||Uo(Pt,n.autoRefreshEvents||"none"),Sd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=tn(n),a=We.indexOf(r),o=xr(r);~a&&We.splice(a,o?6:2),i&&(o?ni.unshift(qe,i,dt,i,Hn,i):ni.unshift(r,i))},s.clearMatchMedia=function(n){Ge.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var a=(Bn(n)?tn(n):n).getBoundingClientRect(),o=a[r?fr:dr]*i||0;return r?a.right-o>0&&a.left+o<qe.innerWidth:a.bottom-o>0&&a.top+o<qe.innerHeight},s.positionInViewport=function(n,i,r){Bn(n)&&(n=tn(n));var a=n.getBoundingClientRect(),o=a[r?fr:dr],l=i==null?o/2:i in ma?ma[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(a.left+l)/qe.innerWidth:(a.top+l)/qe.innerHeight},s.killAll=function(n){if(Ge.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=yr.killAll||[];yr={},i.forEach(function(r){return r()})}},s}();He.version="3.11.5";He.saveStyles=function(s){return s?pa(s).forEach(function(e){if(e&&e.style){var t=mn.indexOf(e);t>=0&&mn.splice(t,5),mn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),be.core.getCache(e),ec())}}):mn};He.revert=function(s,e){return zc(!s,e)};He.create=function(s,e){return new He(s,e)};He.refresh=function(s){return s?Fs():(Vr||He.register())&&rr(!0)};He.update=function(s){return++We.cache&&_i(s===!0?2:0)};He.clearScrollMemory=Id;He.maxScroll=function(s,e){return Ii(s,e?Kt:Tt)};He.getScrollFunc=function(s,e){return Hi(tn(s),e?Kt:Tt)};He.getById=function(s){return nc[s]};He.getAll=function(){return Ge.filter(function(s){return s.vars.id!=="ScrollSmoother"})};He.isScrolling=function(){return!!zn};He.snapDirectional=Ic;He.addEventListener=function(s,e){var t=yr[s]||(yr[s]=[]);~t.indexOf(e)||t.push(e)};He.removeEventListener=function(s,e){var t=yr[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};He.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(c,u){var d=[],h=[],p=be.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||p.restart(!0),d.push(g.trigger),h.push(g),r<=d.length&&p.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Jt(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Jt(r)&&(r=r(),Pt(He,"refresh",function(){return r=e.batchMax()})),pa(s).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(He.create(c))}),t};var Rh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},wl=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Mt.isTouch?" pinch-zoom":""):"none",e===Hn&&s(dt,t)},Vo={auto:1,scroll:1},Vy=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||be.core.getCache(r),o=Zt(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==dt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Vo[(l=qn(r)).overflowY]||Vo[l.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!xr(r)&&(Vo[(l=qn(r)).overflowY]||Vo[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Od=function(e,t,n,i){return Mt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Vy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Pt(lt,Mt.eventTypes[0],zh,!1,!0)},onDisable:function(){return Dt(lt,Mt.eventTypes[0],zh,!0)}})},Wy=/(input|label|select|textarea)/i,Ih,zh=function(e){var t=Wy.test(e.target.tagName);(t||Ih)&&(e._gsapAllow=!0,Ih=t)},qy=function(e){Zo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a=t.onRelease,o,l,c=tn(e.target)||Hn,u=be.core.globals().ScrollSmoother,d=u&&u.get(),h=Ti&&(e.content&&tn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Hi(c,Tt),g=Hi(c,Kt),f=1,m=(Mt.isTouch&&qe.visualViewport?qe.visualViewport.scale*qe.visualViewport.width:qe.outerWidth)/qe.innerWidth,_=0,S=Jt(i)?function(){return i(o)}:function(){return i||2.8},x,v,M=Od(c,e.type,!0,r),C=function(){return v=!1},E=$n,y=$n,b=function(){l=Ii(c,Tt),y=$r(Ti?1:0,l),n&&(E=$r(0,Ii(c,Kt))),x=pr},D=function(){h._gsap.y=zs(parseFloat(h._gsap.y)+p.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},B=function(){if(v){requestAnimationFrame(C);var G=zs(o.deltaY/2),K=y(p.v-G);if(h&&K!==p.v+p.offset){p.offset=K-p.v;var L=zs((parseFloat(h&&h._gsap.y)||0)-p.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",h._gsap.y=L+"px",p.cacheID=We.cache,_i()}return!0}p.offset&&D(),v=!0},F,O,R,k,X=function(){b(),F.isActive()&&F.vars.scrollY>l&&(p()>l?F.progress(1)&&p(l):F.resetTo("scrollY",l))};return h&&be.set(h,{y:"+=0"}),e.ignoreCheck=function(H){return Ti&&H.type==="touchmove"&&B()||f>1.05&&H.type!=="touchstart"||o.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){v=!1;var H=f;f=zs((qe.visualViewport&&qe.visualViewport.scale||1)/m),F.pause(),H!==f&&wl(c,f>1.01?!0:n?!1:"x"),O=g(),R=p(),b(),x=pr},e.onRelease=e.onGestureStart=function(H,G){if(p.offset&&D(),!G)k.restart(!0);else{We.cache++;var K=S(),L,ie;n&&(L=g(),ie=L+K*.05*-H.velocityX/.227,K*=Rh(g,L,ie,Ii(c,Kt)),F.vars.scrollX=E(ie)),L=p(),ie=L+K*.05*-H.velocityY/.227,K*=Rh(p,L,ie,Ii(c,Tt)),F.vars.scrollY=y(ie),F.invalidate().duration(K).play(.01),(Ti&&F.vars.scrollY>=l||L>=l-1)&&be.to({},{onUpdate:X,duration:K})}a&&a(H)},e.onWheel=function(){F._ts&&F.pause(),Zt()-_>1e3&&(x=0,_=Zt())},e.onChange=function(H,G,K,L,ie){if(pr!==x&&b(),G&&n&&g(E(L[2]===G?O+(H.startX-H.x):g()+G-L[1])),K){p.offset&&D();var I=ie[2]===K,Q=I?R+H.startY-H.y:p()+K-ie[1],ne=y(Q);I&&Q!==ne&&(R+=ne-Q),p(ne)}(K||G)&&_i()},e.onEnable=function(){wl(c,n?!1:"x"),He.addEventListener("refresh",X),Pt(qe,"resize",X),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),M.enable()},e.onDisable=function(){wl(c,!0),Dt(qe,"resize",X),He.removeEventListener("refresh",X),M.kill()},e.lockAxis=e.lockAxis!==!1,o=new Mt(e),o.iOS=Ti,Ti&&!p()&&p(1),Ti&&be.ticker.add($n),k=o._dc,F=be.to(o,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:zd(p,p(),function(){return F.pause()})},onUpdate:_i,onComplete:k.vars.onComplete}),o};He.sort=function(s){return Ge.sort(s||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};He.observe=function(s){return new Mt(s)};He.normalizeScroll=function(s){if(typeof s>"u")return pn;if(s===!0&&pn)return pn.enable();if(s===!1)return pn&&pn.kill();var e=s instanceof Mt?s:qy(s);return pn&&pn.target===e.target&&pn.kill(),xr(e.target)&&(pn=e),e};He.core={_getVelocityProp:Jl,_inputObserver:Od,_scrollers:We,_proxies:ni,bridge:{ss:function(){zn||Sr("scrollStart"),zn=Zt()},ref:function(){return Bt}}};Ed()&&be.registerPlugin(He);const Xy=`#define GLSLIFY 1
// この行では、投影行列を表す projectionMatrix という一様変数を宣言しています。
// 一様変数は、シェーダープログラム外部から提供される値であり、ここでは行列を受け取ります。
uniform mat4 projectionMatrix;

// 同様に、ビュー行列を表す viewMatrix という一様変数を宣言しています。
uniform mat4 viewMatrix;

// モデル行列を表す modelMatrix という一様変数を宣言しています。
// これは、オブジェクトの位置、回転、スケールなどの情報を持つ行列です。
uniform mat4 modelMatrix;

// シェーダーに頂点座標情報を提供する属性変数 position を宣言しています。
// 各頂点は3次元の位置情報を持っており、これは頂点の実際の位置を表します。
attribute vec3 position;

// シェーダーにテクスチャ座標情報を提供する属性変数 uv を宣言しています。
// 各頂点には2次元のテクスチャ座標情報があり、これはテクスチャマッピングに使用されます。
attribute vec2 uv;

// 頂点シェーダーからフラグメントシェーダーにデータを受け渡すための vUv という変数を宣言しています。ここではテクスチャ座標情報をフラグメントシェーダーに渡すために使用されます。
varying vec2 vUv;

void main() {

  // メインのシェーダー関数が始まります。この関数は各頂点ごとに呼び出され、頂点の位置情報やテクスチャ座標情報を処理します。
  vUv = uv;

  // 最後に、頂点の位置情報 position を投影行列、ビュー行列、モデル行列と乗算して、gl_Position に代入しています。
  // これにより、頂点の最終的なスクリーン座標が計算され、これを使って頂点が画面上でどの位置に描画されるかが決定されます。
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`;class Yy{constructor(e,t,n,i){this.domEl=e,this.domElTitle=e.querySelectorAll(".tile__title span span"),this.domElCta=e.querySelectorAll(".tile__cta span span"),this.detailDom=document.querySelector(".detail"),this.domButton=document.querySelector(".close__detail"),this.domContent=document.querySelector(".content"),this.detail=t.detail,this.scene=t.scene,this.lenis=t.lenis,this.tilesDom=t.tilesDom.filter((r,a)=>n!==a),this.tilesMaterial=t.tilesMaterial,this.tileIndex=n,this.shader=i,this.domImage=this.domEl.querySelector(".tile__image"),this.domLink=this.domEl.querySelector("a"),this.image=t.textures[this.domImage.dataset.src],this.hoverImage=t.textures[this.domImage.dataset.hover],this.shape=t.textures["shape.jpg"],this.sizes=new Ke(0,0),this.offset=new Ke(0,0),this.mouse=new Ke(0,0),this.hover=0,this.delta=0,this.isHover=!1,this.isZoomed=!1,this.initTile(),this.onMouseMove(),this.onHover(),this.onClick()}initTile(){this.geometry=new Sa(1,1,1,1),this.material=new lx({uniforms:{uImage:{value:this.image},uImageHover:{value:this.hoverImage},uMouse:{value:this.mouse},uTime:{value:0},uHover:{value:this.hover},uRes:{value:new Ke(window.innerWidth,window.innerHeight)},uShape:{value:this.shape},uAlpha:{value:1},uZoomed:{value:0}},defines:{PR:window.devicePixelRatio.toFixed(1)},vertexShader:Xy,fragmentShader:this.shader,transparent:!0}),this.tilesMaterial.push(this.material),this.mesh=new pi(this.geometry,this.material),this.setTile(),this.scene.add(this.mesh)}setPosition(){this.getSizes(),this.mesh.position.x=this.offset.x;const e=this.delta>40?1:this.delta;Gn.to(this.mesh.scale,{x:this.sizes.x-e,y:this.sizes.y-e,duration:.3})}setTile(){this.getSizes(),this.mesh.scale.set(this.sizes.x,this.sizes.y,0),this.mesh.position.set(this.offset.x,this.offset.y,1)}getSizes(){const{width:e,height:t,top:n,left:i}=this.domImage.getBoundingClientRect();this.isZoomed?(this.sizes.set(window.innerWidth*.44,window.innerHeight-140),this.offset.set(window.innerWidth/2-window.innerWidth*.05-e*.95,-20)):(this.sizes.set(e,t),this.offset.set(i-window.innerWidth/2+e/2,-n+window.innerHeight/2-t/2))}onScroll({scroll:e,previousScroll:t}){this.delta=Math.abs(e-t),!this.isZoomed&&this.setPosition()}onResize(){this.setTile(),this.material.uniforms.uRes.value=new Ke(window.innerWidth,window.innerHeight)}onMouseMove(){window.addEventListener("mousemove",e=>{Gn.to(this.mouse,{x:e.clientX/window.innerWidth*2-1,y:-(e.clientY/window.innerHeight)*2+1,duration:.75})})}onHover(){this.domLink.addEventListener("mouseenter",()=>{this.hover=1,document.documentElement.style.setProperty("--color-bg",`var(--color-bg${this.tileIndex+1})`),document.documentElement.style.setProperty("--color-text",`var(--color-text${this.tileIndex+1})`),Gn.to(this.material.uniforms.uHover,{value:1}),this.isHover=!0}),this.domLink.addEventListener("mouseleave",()=>{this.hover=0,Gn.to(this.material.uniforms.uHover,{value:0}),this.isHover=!1})}onClick(){this.domLink.addEventListener("click",e=>{e.preventDefault(),!this.isZoomed&&this.zoomIn()}),this.domButton.addEventListener("click",()=>{this.zoomOut()})}zoomIn(){const e=this.domElTitle[0].innerText,t=this.domElTitle[1].innerText,n=this.tilesMaterial.filter((r,a)=>a!==this.tileIndex).map(r=>r.uniforms.uAlpha);Gn.timeline({onStart:()=>{this.lenis.stop(),this.detail.showDetail(e,t),this.isZoomed=!0,this.domContent.classList.add("hide")},onComplete:()=>{this.material.uniforms.uZoomed.value=1}}).to(this.tilesDom,{opacity:0,ease:"power2.in"},0).to(n,{value:0,ease:"power2.in"},0).to([this.domElTitle,this.domElCta],{yPercent:110,ease:"expo.inOut",duration:1,stagger:.1},0).to(this.mesh.position,{x:window.innerWidth/2-window.innerWidth*.05-this.sizes.x*.95,y:-20,ease:"expo.inOut",duration:1}).to(this.mesh.scale,{x:window.innerWidth*.44,y:window.innerHeight-140,ease:"expo.inOut",duration:1},"<")}zoomOut(){const e=this.tilesMaterial.filter((n,i)=>i!==this.tileIndex).map(n=>n.uniforms.uAlpha);Gn.timeline({onStart:()=>{this.detail.hideDetail()},onComplete:()=>{this.lenis.start(),this.material.uniforms.uZoomed.value=0,this.isZoomed=!1,this.detailDom.classList.remove("visible"),this.domContent.classList.remove("hide")}}).to(this.mesh.position,{x:this.offset.x,y:this.offset.y,ease:"expo.inOut",duration:1},1).to(this.mesh.scale,{x:this.sizes.x,y:this.sizes.y,ease:"expo.inOut",duration:1},"<").to([this.domElTitle,this.domElCta],{yPercent:0,ease:"expo.inOut",duration:1,stagger:.1},"<").to(e,{value:1,ease:"power2.in"},"-=0.5").to(this.tilesDom,{opacity:1,ease:"power2.in"},"<")}update(){this.hover&&(this.material.uniforms.uTime.value+=.01)}}const jy=`precision mediump float;
#define GLSLIFY 1

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

uniform sampler2D uImage;
uniform sampler2D uImageHover;
uniform vec2 uMouse;
uniform float uTime;
uniform vec2 uRes;
uniform float uHover;
uniform float uAlpha;
uniform float uZoomed;

varying vec2 vUv;

//
// この関数を使用することで、円形の形状を生成し、ぼかし効果を調整できます。
// 通常、シェーダープログラム内で図形を描画する際に、特に円形の領域を表現するのに役立ちます。
//

// createCircle 関数は、3つの引数を受け取ります：
// vec2 _st: 2次元の座標ベクトル（通常、テクスチャ座標として使用されます）。
// float _radius: 生成する円の半径。
// float blurriness: 円の境界部分をぼかすための係数。
float createCircle(in vec2 _st, in float _radius, in float blurriness) {
	// 指定された座標 _st を dist という変数にコピーしています。
	// これは、円の中心から各ピクセルまでの距離を計算するために使用されます。
	vec2 dist = _st;

	// dot(dist, dist) は、dist ベクトルの長さを計算しています。これにより、各ピクセルまでの距離の二乗が得られます。通常、円の中心からの距離の二乗を表すために使用されます。

	// dot(dist, dist) * 4.0 は、距離の二乗を4倍しています。これにより、円の半径の2乗に対する比較が行われます。

	// smoothstep 関数は、指定された範囲内での滑らかなトランジションを提供します。具体的には、指定された境界値 _radius-(_radius*blurriness) から _radius+(_radius*blurriness) の間での値を、0から1に線形に変化させます。この値は、円の境界部分におけるぼかし効果を制御します。

	// 1. - smoothstep(...) は、上記で計算された smoothstep の結果を反転させています。これにより、円の内部では1（白）の値が得られ、外部では0（黒）の値が得られるようになり、円形の形状が生成されます。
	return 1.-smoothstep(_radius-(_radius*blurriness), _radius+(_radius*blurriness), dot(dist,dist) * 4.0);
}

void main() {
	// uRes は uniform 変数で、レンダリングの解像度（画面の幅と高さ）を表しています。
	// PR は定義されている別の変数で、通常はデバイスのピクセル比（Pixel Ratio）を表します（通常は1.0または2.0）。
	// この行は、uRes に PR を乗算して、res という新しい 2 次元ベクトルを生成しています。これにより、ピクセル比を考慮した解像度が得られます。
	vec2 res = uRes * PR;

	// gl_FragCoord はフラグメントシェーダー内で現在のフラグメントの画面座標（ピクセル単位）を表す変数です。
	// res は前述の計算で得られた解像度を表しています。
	// この行は、フラグメントの画面座標を解像度で正規化し、中央を原点とした座標系に変換しています。この変数 st はシェーダープログラム内で座標計算に使用されます。
	vec2 st = gl_FragCoord.xy / res.xy - vec2(0.5);

	// この行は、座標 st の y 成分に、uRes の縦横比（高さを幅で割った比率）を考慮して補正をかけています。通常、シェーダー内での座標計算は正規化されているため、アスペクト比を修正する必要があります。
	st.y *= uRes.y / uRes.x;

	// uMouse は uniform 変数で、マウスの現在位置を表す 2 次元ベクトルです。
	// この行は、マウス座標を -0.5 倍しています。これにより、マウスの座標が [-0.5, 0.5] の範囲に正規化されます。
	vec2 mouse = uMouse * -0.5;

	// この行は、マウス座標の y 成分にも、uRes の縦横比を考慮した補正をかけています。
	// これにより、アスペクト比が正しく処理されたマウス座標が得られます。
	mouse.y *= uRes.y / uRes.x;

	//
	// 丸みを帯びたコーナー形状
	//

	// uHover は uniform 変数で、通常は0から1の範囲でマウスホバーの状態を表す値です。
	// この行は、uHover の値を0.1倍して grd という新しい float 型の変数に代入しています。
	// この変数は、マウスホバー状態に応じて変化します。uHover の値が0の場合、grd も0になりますが、uHover の値が1に近づくほど grd も増加します。
	float grd = 0.1 * uHover;

	// smoothstep(a, b, x) は、xがaからbまでの範囲で滑らかなステップ関数を生成する関数で、通常、a < b の場合、xがa未満で0.0、xがb以上で1.0に収束します。
	// vUv は、フラグメントシェーダー内で使用される変数で、現在のフラグメントのテクスチャ座標（UV座標）を表します。
	// vUv.x と vUv.y はそれぞれテクスチャ座標の x 成分と y 成分です。
	
	// sqr の計算は次のようになっています：
	// (smoothstep(0., grd, vUv.x) - smoothstep(1.0, -grd, 1.0, vUv.x)) は、テクスチャ座標 vUv.x に関する条件に基づいて値を計算し、結果は -1 から 1 の範囲に収まります。
	// (smoothstep(0, grd, vUv.y)) は、テクスチャ座標 vUv.y に関する条件に基づいて値を計算し、結果は 0 から 1 の範囲に収まります。
	// これらの計算結果に 100 を掛けて sqr の値を調整し、最後に -10 を減算しています。
	float sqr = 100. * (smoothstep(0., grd, vUv.x) - smoothstep(1.0 - grd, 1.0, vUv.x)) * (smoothstep(0., grd, vUv.y)  - smoothstep(1. - grd, 1., vUv.y)) -10.0;

	//
	// 円
	//

	// st はフラグメントシェーダー内の変数で、現在のフラグメントのテクスチャ座標（UV座標）を表します。
	// mouse は、先前のコードで計算されたマウスの位置情報です。uMouse の値を調整し、テクスチャ上の位置に対するマウスの影響を制御します。
	// この行は、st と mouse を加算して、新しいベクトル circlePos を生成します。これにより、テクスチャ上での円形エフェクトの中心位置が決まります。
	vec2 circlePos = st + mouse;

	// createCircle 関数は、与えられた位置 (circlePos) に対して円形のエフェクトを生成し、そのエフェクトの強度を返す関数です。
	//	この行では、circlePos を中心として、半径が 0.005 * uHover の円形エフェクトを生成し、その強度を circle という変数に代入しています。
	// uHover の値により、円形エフェクトの強度が制御されます。uHover の値が0の場合、circle は0に近づき、uHover の値が1に近づくほど circle の値も増加します。
	float circle = createCircle(circlePos, 0.005 * uHover, 2.0);

	// この行は、同様に circlePos を中心として、半径が 0.04 * uHover の円形エフェクトを生成し、その強度を sqrCircle という変数に代入しています。
	// さらに、sqrCircle の値を50倍しています。これにより、より強力な円形エフェクトが生成され、その影響が増幅されます。
	float sqrCircle = createCircle(circlePos, 0.04 * uHover, 2.0) * 50.0;

	//
	// カスタムノイズエフェクト
	//
	// UV座標 (vUv) と時間 (uTime) 

	// offx は、元のUV座標 vUv.x に対して、さらに sin 関数を用いて新しいX座標を計算します。
	// sin(vUv.y + uTime * 0.01) の部分は、vUv.y に uTime * 0.01 を加えた値に対して正弦を計算しています。これにより、時間の経過に応じてX座標が振動します。
	// 結果として、offx は元のX座標に振動成分が加わった新しいX座標を持つことになります。
	float offx = vUv.x + sin(vUv.y + uTime * 0.01);

	// offy は、元のUV座標 vUv.y から時間 (uTime) に応じた変化と、余弦 (cos) 関数を用いた変化を引いたY座標を計算します。
	// uTime * 0.1 は、時間の経過に伴ってY座標が変化する要素で、時間が経過するとY座標が減少します。
	// cos(uTime * 0.001) * 0.01 は、時間に応じて余弦関数を計算し、その値をY座標に加えることで、Y座標にサイン波のような変化を与えます。
	// これらの要素により、offy は元のY座標から時間に応じた変動を持つことになります。
	float offy = vUv.y - uTime * 0.1 - cos(uTime * 0.001) * 0.01;

	
	// noiseCircle は、3次元ベクトル (offx, offy, uTime * 0.1) * 8.0 を引数としてノイズ関数 snoise3 を呼び出し、その結果を格納します。
	// 引数として渡されるベクトル (offx, offy, uTime * 0.1) * 8.0 は、X座標の offx、Y座標の offy、および時間 uTime を使用して計算されます。このベクトルに8.0を乗算しています。
	// snoise3 関数は、与えられた3次元ベクトルに対してノイズ値を計算し、それを noiseCircle に格納します。
	// 最後に、ノイズの強度を uHover でスケーリングしています。
	float noiseCircle = snoise(vec3(offx, offy, uTime * 0.1) * 8.0) * uHover;

	// noiseHover は、3次元ベクトル (offx, offy, uTime * 0.1) * 2.0 を引数としてノイズ関数 snoise3 を呼び出し、その結果を格納します。
	// 引数として渡されるベクトル (offx, offy, uTime * 0.1) * 2.0 は、X座標の offx、Y座標の offy、および時間 uTime を使用して計算されます。このベクトルに2.0を乗算しています。
	// snoise3 関数は、与えられた3次元ベクトルに対してノイズ値を計算し、それを noiseHover に格納します。
	// 最後に、ノイズの強度を0.1でスケーリングしています。
	// （これらのノイズ値は、シェーダープログラム内でさまざまな効果やアニメーションに使用され、テクスチャの歪み、波紋、振動などをシミュレートするのに役立ちます。）
	float noiseHover = snoise(vec3(offx, offy, uTime * 0.1) * 2.0) * 0.1;

	// これは以前に計算された円形の形状を表す値です。createCircle 関数または類似の方法で計算されたものと仮定します。
	// 通常、circle は0から1の範囲の値を取り、円形の形状がどれだけ含まれているかを示します。
	// これは以前に計算されたノイズの値を表す変数です。ノイズ関数によって計算された値と仮定します。
	// 通常、ノイズはランダムな値を含むため、時間の経過に伴う変動が含まれています。
	// この式は、circle と noiseCircle を組み合わせて最終的な値を計算します。
	// circle は5倍され、noiseCircle は3倍されています。これにより、それぞれの影響を調整できます。
	// 1.0 が引かれているため、最終的な値は -1.0 から始まります。
	circle = smoothstep(0.1, 0.8, circle * 5.0 + noiseCircle * 3.0 - 1.0);

	// sqr は以前のコードの一部として計算された値です。具体的な計算方法はコード内で示されていませんが、おそらく vUv と uTime に関連しています。通常、sqr は特定の条件に基づいて0から1の範囲の値を取ります。この値は形状やパターンを表します。
	// sqrCircle は以前のコードの一部として計算された値です。おそらく vUv、uTime、およびノイズに関連しています。通常、sqrCircle は特定の条件に基づいて0から1の範囲の値を取ります。この値は形状やパターンを表すノイズと関連しています。
	// smoothstep(0.0, 0.1, sqr - sqrCircle):
	// この式は、sqr と sqrCircle の差を計算し、その差を指定された範囲 [0.0, 0.1] にスムージング（滑らかに変化）します。
	// sqr から sqrCircle を減算し、差が [0.0, 0.1] の範囲内にある場合、finalMask の値は0から1の範囲にスムージングされます。範囲外の場合、finalMask の値は0または1に近づくことがあります。
	float finalMask = smoothstep(0.0, 0.1, sqr - sqrCircle);

	// custom uv for img 
	// imageUv は、2次元のテクスチャ座標（UV座標）を表す変数です。
	// 通常、この座標はテクスチャをサンプリングするために使用されます。
	vec2 imageUv = vUv;

	// imageUv の値から (0.5, 0.5) を減算しています。これにより、UV座標が中心を原点とする座標系に変換されます。つまり、テクスチャの中心が (0, 0) になります。
	imageUv -= vec2(0.5);

	// uHover という変数を使用して、UV座標のスケールを変更しています。
	// uHover の値に応じて、UV座標のスケールが変動します。uHover が0の場合、スケールは元のままです。uHover が1の場合、スケールは0.8倍になります。つまり、テクスチャが縮小されます。
	imageUv *= 1.0 - uHover * 0.2;

	// mouse という変数を使用して、UV座標にマウス位置の影響を加えています。
	// mouse の値に応じて、UV座標が変化します。uHover が0の場合、変化はありません。uHover が1の場合、mouse の値がUV座標に追加され、テクスチャがマウスに対応して移動します。
	imageUv += mouse * 0.1 * uHover;

	// imageUv の値に (0.5, 0.5) を加算しています。これにより、UV座標が元の座標系に戻され、テクスチャの中心が (0.5, 0.5) になります。
	imageUv += vec2(0.5);

	// imageHoverUv は、2次元のテクスチャ座標（UV座標）を表す変数です。通常、この座標はテクスチャをサンプリングするために使用されます。
	vec2 imageHoverUv = vUv;

	// imageHoverUv の値から (0.5, 0.5) を減算しています。これにより、UV座標が中心を原点とする座標系に変換されます。つまり、テクスチャの中心が (0, 0) になります。
	imageHoverUv -= vec2(0.5);

	// uHover と uZoomed という変数を使用して、UV座標のスケールを変更しています。
	// uHover は、通常のスケール変更に関与し、uZoomed はズーム効果に関与します。
	// 式 1.0 * uHover * 0.1 + uZoomed の結果に基づいて、UV座標のスケールが変動します。uHover と uZoomed の値に応じて、スケールが変化します。
	imageHoverUv *= 1.0 * uHover * 0.1 + uZoomed;

	// imageHoverUv の値に (0.5, 0.5) を加算しています。これにより、UV座標が元の座標系に戻され、テクスチャの中心が (0.5, 0.5) になります。
	imageHoverUv += vec2(0.5);

	vec4 color = vec4(0.0314, 0.0314, 0.2235, 1.0);

	// img

	// テクスチャ uImage から imageUv で指定された座標の色情報を取得し、image 変数に格納します。これにより、元のイメージが取得されます。
	vec4 image = texture2D(uImage, imageUv);

	// vec4 imageHover = texture2D(uImageHover, imageHover + vec2(noiceHover) * uHover);：テクスチャ uImageHover から imageHover 変数の座標に色情報を取得し、 imageHover 変数に格納します。uHover と noiseHover はアルファブレンディングや拡大などの操作に使用されます。
	vec4 imageHover = texture2D(uImageHover, imageHoverUv + vec2(noiseHover) * uHover);

	// mix(imageHover, imageHover * color, 0.8 * (1.0 - uZoomed));：imageHover 変数に対して、色情報に color を乗算することで、色を変更します。また、この変更を uZoomed によって制御し、拡大時に透明度を調整します。
	imageHover = mix(imageHover, imageHover * color, 0.8 * (1.0 - uZoomed));

	// ：最終的な合成を行います。元のイメージ image と処理済みの imageHover を、circle と uZoomed の値に基づいてブレンドします。clamp 関数は値の範囲を指定し、結果が0から1の範囲に収まるようにします。これにより、最終的なイメージが合成されます。
	vec4 finalImage = mix(image, imageHover, clamp(circle + uZoomed, 0., 1.0));

	// この行では、gl_FragColor に最終的な出力色を設定しています。vec4 は4つの浮動小数点数からなるベクトルを表します。
	// finalImage.rgb は、前のステップで計算された最終的なイメージのRGBカラーです。
	// uAlpha は透明度を表すユニフォーム変数で、この色に適用される透明度を指定します。
	// finalMask はマスク（0から1の値）で、通常はアルファブレンディングを制御するために使用されます。この値によって、ピクセルの透明度が変更されます。
	gl_FragColor = vec4(finalImage.rgb, uAlpha * finalMask);
}`,$y=`precision mediump float;
#define GLSLIFY 1

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

uniform sampler2D uImage;
uniform sampler2D uImageHover;
uniform vec2 uMouse;
uniform float uTime;
uniform vec2 uRes;
uniform float uHover;
uniform float uAlpha;
uniform float uZoomed;
varying vec2 vUv;

float createCircle(in vec2 _st, in float _radius, in float blurriness){
	vec2 dist = _st;
	return 1.-smoothstep(_radius-(_radius*blurriness), _radius+(_radius*blurriness), dot(dist,dist)*4.0);
}

void main(){
	vec2 res = uRes * PR;
	vec2 st = gl_FragCoord.xy / res.xy - vec2(0.5);
	st.y *= uRes.y / uRes.x;

	vec2 mouse = uMouse * -0.5;
	mouse.y *= uRes.y / uRes.x;

 // circle 
  vec2 circlePos = (st + mouse) * 5.;
	float circle = createCircle(circlePos, 0.1 * uHover, 5.) * 1.5;

  // custom noise effect
  float offx = vUv.x + sin(vUv.y + uTime * .1);
  float offy = vUv.y - uTime * 0.1 - cos(uTime * .001) * .01;

  float noiseCircle = snoise(vec3(offx, offy, uTime * 0.1) * 8.) * uHover;
  float noiseHover = snoise(vec3(offx, offy, uTime * 0.1) * 2.) * 0.03;

  float finalMask = smoothstep(0.99, 1., pow(circle, 2.) * 4. + noiseCircle);

	// custom uv for img 
  vec2 imageUv = vUv;
  imageUv -= vec2(0.5);
  imageUv *= 1. - uHover * 0.2;
  imageUv += vec2(0.5);

	//  img 
  vec4 image = texture2D(uImageHover, vUv);
  vec4 imageDistorted = texture2D(uImage, imageUv + vec2(noiseHover) * uHover);
  vec4 finalImage = mix(imageDistorted, image, clamp(finalMask + uZoomed, 0., 1.));

	gl_FragColor = vec4(finalImage.rgb, uAlpha);
}`,Zy=`precision mediump float;
#define GLSLIFY 1

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

uniform sampler2D uImage;
uniform sampler2D uImageHover;
uniform vec2 uMouse;
uniform float uTime;
uniform vec2 uRes;
uniform float uHover;
uniform float uAlpha;
uniform float uZoomed;

varying vec2 vUv;

float createCircle(in vec2 _st, in float _radius, in float blurriness){
	vec2 dist = _st;
	return 1.-smoothstep(_radius-(_radius*blurriness), _radius+(_radius*blurriness), dot(dist,dist)*4.0);
}

void main(){
	vec2 res = uRes * PR;
	vec2 st = gl_FragCoord.xy / res.xy - vec2(0.5);
	st.y *= uRes.y / uRes.x;

	vec2 mouse = uMouse * -0.5;
	mouse.y *= uRes.y / uRes.x;

  vec2 circlePos = st + mouse;

	// rounded corner shape
	float grd = 0.1 * uHover;
	float sqr = 100. *(smoothstep(0., grd, vUv.x) - smoothstep(1. - grd, 1., vUv.x)) * (smoothstep(0., grd, vUv.y) - smoothstep(1. - grd, 1., vUv.y)) - 10.;

	float circle = createCircle(circlePos, 0.04 * uHover, 2.) * 50.;

	float finalMask = smoothstep(0., 0.1, sqr - circle);

	// transition shape
	float shape = (vUv.x + vUv.y - 2. + uHover * 3.) * 2.;
	float midShape = (vUv.x + vUv.y - 2. + 0.5 * 3.) * 3.;

	float offx = vUv.x + vUv.y;
	float offy = vUv.y - vUv.x;

	float noise = snoise(vec3(offx, offy, uTime) * 4.) * 0.75;

	float pct = smoothstep(0.99, 1., noise + shape);

	// custom uv for img 
	vec2 imageUv = vUv;
	imageUv -= vec2(0.5);
	imageUv *= 1. - uHover * 0.2;
	imageUv += vec2(0.5);

	vec2 imageHoverUv = vUv;
	imageHoverUv -= vec2(0.5);
	imageHoverUv *= 1. - uHover * 0.1;
	imageHoverUv += vec2(0.5);

	// img
	vec4 image = texture2D(uImage, imageUv);
	vec4 imageHover = texture2D(uImageHover, imageHoverUv + uMouse * 0.1 * uHover);

	vec4 finalImage = mix(image, imageHover, clamp(pct + uZoomed, 0., 1.));

	gl_FragColor = vec4(finalImage.rgb, uAlpha * finalMask);
}`,Ky=`precision mediump float;
#define GLSLIFY 1

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

uniform sampler2D uImage; // メインの画像テクスチャ。
uniform sampler2D uImageHover; // ホバー状態の画像テクスチャ。
uniform float uTime; // シェーダー内の時間の経過を制御するための時間変数。
uniform float uHover; // ホバー状態の強さを制御する変数。
uniform float uAlpha; // アルファ値（透明度）を制御する変数。
uniform float uZoomed; // ズーム状態を制御する変数。

varying vec2 vUv; // フラグメントシェーダーに渡されるUV座標。

void main(){
	float time = uTime * 0.05; // シェーダー内で使用する時間を計算します。

	// custom noise effect
	float offx = vUv.x * 0.3 - time * 0.3; // カスタムノイズエフェクトを生成するために、UV座標 (vUv) を基に offx と offy を計算しています。これらの値はノイズを生成するために使用されます。
	float offy = vUv.y + sin(vUv.x * 5.0) * 0.1 - sin(time * 0.5) + snoise(vec3(vUv.x, vUv.y, time) * 0.5);

	// snoise3() 関数を使用して、カスタムノイズを生成しています。
	// ノイズの生成には offx、offy、および time の組み合わせが使用されます。
	offx += snoise(vec3(offx, offy, time) * 5.0) * 0.3;
	offy += snoise(vec3(offx, offy, time) * 0.3) * 0.1;

	// nc と nh という変数にそれぞれ異なるノイズが格納されます。
	float nc = snoise(vec3(offx, offy, time * 0.5) * 8.0) * uHover;
	float nh = snoise(vec3(offx, offy, time * 0.5) * 2.0) * 0.03;

	nh *= smoothstep(nh, 0.5, 0.6);

	// 画像ブレンディング:
	// vec4 image と vec4 imageHover に、それぞれメイン画像テクスチャとホバー画像テクスチャの色情報が格納されます。
	vec4 image = texture2D(uImage, vUv + vec2(nc + nh) * uHover);
	vec4 imageHover = texture2D(uImageHover, vUv + vec2(nc + nh) * uHover);

	// 最終的な画像ブレンディング:
	// mix() 関数を使用して、メイン画像 (image) とホバー画像 (imageHover) の間でブレンディングが行われ、finalImage に格納されます。clamp() 関数を使用して、値が 0 から 1 までの範囲に制限されます。
	vec4 finalImage = mix(image, imageHover, clamp(nh + uHover + uZoomed, 0.0, 1.0));

	// gl_FragColor には、最終的なピクセルの色情報が設定されます。
	// vec4(finalImage.rgb, uAlpha) を使用して、RGBの色情報にアルファ値を適用しています。
	gl_FragColor = vec4(finalImage.rgb, uAlpha);

	// このシェーダーは、ホバー状態やカスタムノイズエフェクトなどを使用して、テクスチャをブレンディングして最終的なピクセルの色を生成します。このシェーダーを使用するコンテキストに応じて、異なるテクスチャやパラメータを設定することで、さまざまな視覚効果を実現できます。
}`,Jy=`precision mediump float;
#define GLSLIFY 1

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

uniform sampler2D uImage;
uniform sampler2D uImageHover;
uniform vec2 uMouse;
uniform float uTime;
uniform vec2 uRes;
uniform float uHover;
uniform sampler2D uShape;
uniform float uAlpha;
uniform float uZoomed;

varying vec2 vUv;

float createCircle(in vec2 _st, in float _radius, in float blurriness){
	vec2 dist = _st;
	return 1.-smoothstep(_radius-(_radius*blurriness), _radius+(_radius*blurriness), dot(dist,dist)*4.0);
}

void main(){
	vec2 res = uRes * PR;
	vec2 st = gl_FragCoord.xy / res.xy - vec2(0.5);
	st.y *= uRes.y / uRes.x;

	vec2 mouse = uMouse * -0.5;
	mouse.y *= uRes.y / uRes.x;

  vec2 circlePos = (st + mouse) * 5.;

	// create shape
	vec2 shapeUv = circlePos ;
	shapeUv *= 1.5 - uHover * 0.8;
	shapeUv /= uHover;
	shapeUv += vec2(0.5);

	vec4 shape = texture2D(uShape, shapeUv);

	float shapeX = shape.x * 3.;
	float offx = vUv.x + uTime;
	float offy = vUv.y + uTime * 0.1 * cos(uTime * 0.1);
	float noise = snoise(vec3(offx, offy, uTime * 0.005) * 2.5);

  float finalMask = 1. - smoothstep(0.99, 1., pow(shapeX, 3.) * 4. + noise);

	// custom uv for img 
	vec2 imageUv = vUv;
	imageUv -= vec2(0.5);
	imageUv *= 1. - uHover * 0.03;
	imageUv += vec2(0.5);

	vec2 imageHoverUv = vUv;
	imageHoverUv -= vec2(0.5);
	imageHoverUv *= 1. - uHover * 0.05;
	imageHoverUv += vec2(0.5);

	// img
	vec4 image = texture2D(uImage, imageUv + mouse * 0.05 * uHover );
	vec4 imageHover = texture2D(uImageHover, imageHoverUv  + mouse * 0.5 * uHover );

		vec4 finalImage = mix(image, imageHover, finalMask + uZoomed);

	gl_FragColor = vec4(finalImage.rgb, uAlpha);
}`;(()=>{function s(...n){const i=n.length;for(let r=0;r<i;r++){const a=n[r];a.nodeType===1||a.nodeType===11?this.appendChild(a):this.appendChild(document.createTextNode(String(a)))}}function e(...n){for(;this.lastChild;)this.removeChild(this.lastChild);n.length&&this.append(...n)}function t(...n){const i=this.parentNode;let r=n.length;if(i)for(r||i.removeChild(this);r--;){let a=n[r];typeof a!="object"?a=this.ownerDocument.createTextNode(a):a.parentNode&&a.parentNode.removeChild(a),r?i.insertBefore(this.previousSibling,a):i.replaceChild(a,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=s,DocumentFragment.prototype.append=s),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function sr(s,e){return Object.getOwnPropertyNames(Object(s)).reduce((t,n)=>{const i=Object.getOwnPropertyDescriptor(Object(s),n),r=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(t,n,r||i)},{})}function uo(s){return typeof s=="string"}function Oc(s){return Array.isArray(s)}function Wo(s={}){const e=sr(s);let t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(uo(t)||Oc(t)?String(t):"").split(",").map(n=>String(n).trim()).filter(n=>/((line)|(word)|(char))/i.test(n))),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(s.position)),e}function Fc(s){const e=uo(s)||Oc(s)?String(s):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Ca(s){return s!==null&&typeof s=="object"}function Qy(s){return Ca(s)&&/^(1|3|11)$/.test(s.nodeType)}function e1(s){return typeof s=="number"&&s>-1&&s%1===0}function t1(s){return Ca(s)&&e1(s.length)}function Mr(s){return Oc(s)?s:s==null?[]:t1(s)?Array.prototype.slice.call(s):[s]}function Oh(s){let e=s;return uo(s)&&(/^(#[a-z]\w+)$/.test(s.trim())?e=document.getElementById(s.trim().slice(1)):e=document.querySelectorAll(s)),Mr(e).reduce((t,n)=>[...t,...Mr(n).filter(Qy)],[])}const{entries:n1,keys:I1,values:z1}=Object,ga="_splittype",vi={};let i1=0;function Qn(s,e,t){if(!Ca(s))return console.warn("[data.set] owner is not an object"),null;const n=s[ga]||(s[ga]=++i1),i=vi[n]||(vi[n]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(vi[n]={...i,...e}):e!==void 0&&(i[e]=t),t}function or(s,e){const t=Ca(s)?s[ga]:null,n=t&&vi[t]||{};return e===void 0?n:n[e]}function Fd(s){const e=s&&s[ga];e&&(delete s[e],delete vi[e])}function r1(){n1(vi).forEach(([s,{isRoot:e,isSplit:t}])=>{(!e||!t)&&(vi[s]=null,delete vi[s])})}function s1(s,e=" "){return(s?String(s):"").trim().replace(/\s+/g," ").split(e)}const Uc="\\ud800-\\udfff",Ud="\\u0300-\\u036f\\ufe20-\\ufe23",Nd="\\u20d0-\\u20f0",kd="\\ufe0e\\ufe0f",o1=`[${Uc}]`,sc=`[${Ud}${Nd}]`,oc="\\ud83c[\\udffb-\\udfff]",a1=`(?:${sc}|${oc})`,Bd=`[^${Uc}]`,Gd="(?:\\ud83c[\\udde6-\\uddff]){2}",Hd="[\\ud800-\\udbff][\\udc00-\\udfff]",Vd="\\u200d",Wd=`${a1}?`,qd=`[${kd}]?`,l1="(?:"+Vd+"(?:"+[Bd,Gd,Hd].join("|")+")"+qd+Wd+")*",c1=qd+Wd+l1,u1=`(?:${[`${Bd}${sc}?`,sc,Gd,Hd,o1].join("|")}
)`,h1=RegExp(`${oc}(?=${oc})|${u1}${c1}`,"g"),f1=[Vd,Uc,Ud,Nd,kd],d1=RegExp(`[${f1.join("")}]`);function p1(s){return s.split("")}function Xd(s){return d1.test(s)}function m1(s){return s.match(h1)||[]}function g1(s){return Xd(s)?m1(s):p1(s)}function _1(s){return s==null?"":String(s)}function v1(s,e=""){return s=_1(s),s&&uo(s)&&!e&&Xd(s)?g1(s):s.split(e)}function ac(s,e){const t=document.createElement(s);return e&&Object.keys(e).forEach(n=>{const i=e[n],r=uo(i)?i.trim():i;r===null||r===""||(n==="children"?t.append(...Mr(r)):t.setAttribute(n,r))}),t}var Nc={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function x1(s,e){e=sr(Nc,e);const t=Fc(e.types),n=e.tagName,i=s.nodeValue,r=document.createDocumentFragment();let a=[],o=[];return/^\s/.test(i)&&r.append(" "),a=s1(i).reduce((l,c,u,d)=>{let h,p;return t.chars&&(p=v1(c).map(g=>{const f=ac(n,{class:`${e.splitClass} ${e.charClass}`,style:"display: inline-block;",children:g});return Qn(f,"isChar",!0),o=[...o,f],f})),t.words||t.lines?(h=ac(n,{class:`${e.wordClass} ${e.splitClass}`,style:`display: inline-block; ${t.words&&e.absolute?"position: relative;":""}`,children:t.chars?p:c}),Qn(h,{isWord:!0,isWordStart:!0,isWordEnd:!0}),r.appendChild(h)):p.forEach(g=>{r.appendChild(g)}),u<d.length-1&&r.append(" "),t.words?l.concat(h):l},[]),/\s$/.test(i)&&r.append(" "),s.replaceWith(r),{words:a,chars:o}}function Yd(s,e){const t=s.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(t))return n;if(t===3&&/\S/.test(s.nodeValue))return x1(s,e);const i=Mr(s.childNodes);if(i.length&&(Qn(s,"isSplit",!0),!or(s).isRoot)){s.style.display="inline-block",s.style.position="relative";const r=s.nextSibling,a=s.previousSibling,o=s.textContent||"",l=r?r.textContent:" ",c=a?a.textContent:" ";Qn(s,{isWordEnd:/\s$/.test(o)||/^\s/.test(l),isWordStart:/^\s/.test(o)||/\s$/.test(c)})}return i.reduce((r,a)=>{const{words:o,chars:l}=Yd(a,e);return{words:[...r.words,...o],chars:[...r.chars,...l]}},n)}function y1(s,e,t,n){if(!t.absolute)return{top:e?s.offsetTop:null};const i=s.offsetParent,[r,a]=n;let o=0,l=0;if(i&&i!==document.body){const f=i.getBoundingClientRect();o=f.x+r,l=f.y+a}const{width:c,height:u,x:d,y:h}=s.getBoundingClientRect(),p=h+a-l,g=d+r-o;return{width:c,height:u,top:p,left:g}}function jd(s){or(s).isWord?(Fd(s),s.replaceWith(...s.childNodes)):Mr(s.children).forEach(e=>jd(e))}const S1=()=>document.createDocumentFragment();function M1(s,e,t){const n=Fc(e.types),i=e.tagName,r=s.getElementsByTagName("*"),a=[];let o=[],l=null,c,u,d,h=[];const p=s.parentElement,g=s.nextElementSibling,f=S1(),m=window.getComputedStyle(s),_=m.textAlign,x=parseFloat(m.fontSize)*.2;return e.absolute&&(d={left:s.offsetLeft,top:s.offsetTop,width:s.offsetWidth},u=s.offsetWidth,c=s.offsetHeight,Qn(s,{cssWidth:s.style.width,cssHeight:s.style.height})),Mr(r).forEach(v=>{const M=v.parentElement===s,{width:C,height:E,top:y,left:b}=y1(v,M,e,t);/^br$/i.test(v.nodeName)||(n.lines&&M&&((l===null||y-l>=x)&&(l=y,a.push(o=[])),o.push(v)),e.absolute&&Qn(v,{top:y,left:b,width:C,height:E}))}),p&&p.removeChild(s),n.lines&&(h=a.map(v=>{const M=ac(i,{class:`${e.splitClass} ${e.lineClass}`,style:`display: block; text-align: ${_}; width: 100%;`});Qn(M,"isLine",!0);const C={height:0,top:1e4};return f.appendChild(M),v.forEach((E,y,b)=>{const{isWordEnd:D,top:B,height:F}=or(E),O=b[y+1];C.height=Math.max(C.height,F),C.top=Math.min(C.top,B),M.appendChild(E),D&&or(O).isWordStart&&M.append(" ")}),e.absolute&&Qn(M,{height:C.height,top:C.top}),M}),n.words||jd(f),s.replaceChildren(f)),e.absolute&&(s.style.width=`${s.style.width||u}px`,s.style.height=`${c}px`,Mr(r).forEach(v=>{const{isLine:M,top:C,left:E,width:y,height:b}=or(v),D=or(v.parentElement),B=!M&&D.isLine;v.style.top=`${B?C-D.top:C}px`,v.style.left=M?`${d.left}px`:`${E-(B?d.left:0)}px`,v.style.height=`${b}px`,v.style.width=M?`${d.width}px`:`${y}px`,v.style.position="absolute"})),p&&(g?p.insertBefore(s,g):p.appendChild(s)),h}let Gr=sr(Nc,{});class _a{static get data(){return vi}static get defaults(){return Gr}static set defaults(e){Gr=sr(Gr,Wo(e))}static setDefaults(e){return Gr=sr(Gr,Wo(e)),Nc}static revert(e){Oh(e).forEach(t=>{const{isSplit:n,html:i,cssWidth:r,cssHeight:a}=or(t);n&&(t.innerHTML=i,t.style.width=r||"",t.style.height=a||"",Fd(t))})}static create(e,t){return new _a(e,t)}constructor(e,t){this.isSplit=!1,this.settings=sr(Gr,Wo(t)),this.elements=Oh(e),this.split()}split(e){this.revert(),this.elements.forEach(i=>{Qn(i,"html",i.innerHTML)}),this.lines=[],this.words=[],this.chars=[];const t=[window.pageXOffset,window.pageYOffset];e!==void 0&&(this.settings=sr(this.settings,Wo(e)));const n=Fc(this.settings.types);n.none||(this.elements.forEach(i=>{Qn(i,"isRoot",!0);const{words:r,chars:a}=Yd(i,this.settings);this.words=[...this.words,...r],this.chars=[...this.chars,...a]}),this.elements.forEach(i=>{if(n.lines||this.settings.absolute){const r=M1(i,this.settings,t);this.lines=[...this.lines,...r]}}),this.isSplit=!0,window.scrollTo(t[0],t[1]),r1())}revert(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),_a.revert(this.elements)}}const Fh=(s,e)=>{s.forEach(t=>{const n=document.createElement(e);t.parentNode.appendChild(n),n.appendChild(t)})};class b1{constructor(){this.detailDom=document.querySelector(".detail"),this.pageTitleDom=document.querySelector(".page__title"),this.progressDom=document.querySelector(".slideshow__progress"),this.textDom=document.querySelectorAll(".detail__text"),this.buttonDom=document.querySelector(".close__detail"),this.titleDom=document.querySelectorAll(".detail__title span span"),this.splitText=[];for(const e of this.textDom){const t=new _a(e,{types:"lines",tagName:"span"});this.splitText.push(t),Fh(t.lines,"span")}window.addEventListener("resize",()=>{for(const e of this.splitText)e.split(),Fh(e.lines,"span")})}showDetail(e,t){const n=Gn.timeline();this.titleDom[0].innerHTML=e,this.titleDom[1].innerHTML=t,n.to(this.progressDom,{opacity:0,ease:"power2.inOut"}).to(this.pageTitleDom,{opacity:0,ease:"power3.inOut",onComplete:()=>{this.detailDom.classList.add("visible")}},1.5).fromTo(this.buttonDom,{opacity:0,scale:0},{opacity:1,scale:1,ease:"power3.inOut"}).fromTo(".line",{yPercent:100},{yPercent:0,ease:"power3.inOut",duration:.8,stagger:.05},"<").fromTo(this.titleDom,{yPercent:100},{yPercent:0,ease:"power3.inOut",duration:.8,stagger:.05},"<")}hideDetail(){Gn.timeline().to(this.pageTitleDom,{opacity:.1,ease:"power3.inOut"}).to(this.buttonDom,{opacity:0,scale:0,ease:"power3.inOut"},0).to(this.titleDom,{yPercent:1e3,ease:"power3.inOut",duration:.8,stagger:.05},0).to(".line",{yPercent:100,ease:"power3.inOut",duration:.8,stagger:.05},0).to(this.progressDom,{opacity:1,ease:"power2.inOut"})}}Gn.registerPlugin(He);const w1=[$y,Jy,jy,Ky,Zy];class T1{constructor(e,t){this.textures=t,this.container=e,[...this.tilesDom]=document.querySelectorAll(".slideshow__list__element"),this.scroll=0,this.scrollInit=!1,this.start()}start(){this.scene=new ax,this.width=window.innerWidth,this.height=window.innerHeight,this.scroll=0,this.previousScroll=0,this.tilesMaterial=[],this.renderer=new hc({canvas:this.container,antialias:!0,alpha:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.detail=new b1(this),this.initCamera(),this.initScroll(),this.initTiles(),this.initScrollAnimation(),this.onResize(),this.update()}initCamera(){this.perspective=800;const e=2*Math.atan(this.height/2/this.perspective)*(180/Math.PI);this.camera=new Ln(e,this.width/this.height,1,1e3),this.camera.position.z=this.perspective}initScroll(){const e=new mx({});function t(n){e.raf(n),requestAnimationFrame(t)}requestAnimationFrame(t),e.scrollTo(0),this.lenis=e,this.onScroll()}initTiles(){this.tiles=this.tilesDom.map((e,t)=>new Yy(e,this,t,w1[t]))}initScrollAnimation(){const e=document.querySelector(".slideshow__container"),t=document.querySelector(".page__title"),n=document.querySelector(".slideshow__progress--bar");this.hozizontalScrollX=this.tilesDom.reduce((r,a)=>r+a.offsetWidth,this.width>768?this.width*.1:-this.width*.1),Gn.timeline({scrollTrigger:{trigger:e,pin:!0,scrub:!0,invalidateOnRefresh:!0}}).to(e,{ease:"none",x:()=>-this.hozizontalScrollX}).to(t,{x:-100},0).to(n,{x:0},0)}onResize(){window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight;const e=2*Math.atan(this.height/2/this.perspective)*(180/Math.PI);this.camera.aspect=this.width/this.height,this.camera.fov=e,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.hozizontalScrollX=this.tilesDom.reduce((t,n)=>t+n.offsetWidth,this.width>768?this.width*.1:-this.width*.1),He.refresh();for(const t of this.tiles)t.onResize()})}onScroll(){this.lenis.on("scroll",e=>{He.update(),this.scroll=e.scroll;for(const t of this.tiles)t.onScroll({scroll:this.scroll,previousScroll:this.previousScroll});this.previousScroll=this.scroll})}update(){this.renderer.render(this.scene,this.camera);for(const e of this.tiles)e.update();requestAnimationFrame(this.update.bind(this))}}const E1=new Promise(s=>{new Nh("source-sans-pro").load().then(()=>{s()})}),C1=new Promise(s=>{new Nh("orpheuspro").load().then(()=>{s()})}),A1=new Promise(s=>{tp(document.querySelectorAll("img"),{background:!0},s)}),L1=new fx,$d={},D1=["/tiles/woods/base.jpg","/tiles/woods/hover.jpg","/tiles/rocks/base.jpg","/tiles/rocks/hover.jpg","/tiles/cities/base.jpg","/tiles/cities/hover.jpg","/tiles/deserts/base.jpg","/tiles/deserts/hover.jpg","/tiles/snow/base.jpg","/tiles/snow/hover.jpg","shape.jpg"],P1=Promise.all(D1.map(s=>new Promise(e=>{L1.load(s,t=>{$d[s]=t,e(t)})})));Promise.all([E1,C1,A1,P1]).then(()=>{new T1(document.getElementById("webgl"),$d),document.querySelector("body").classList.remove("loading")});
