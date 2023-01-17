import{createNanoEvents as t}from"nanoevents";function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},e.apply(this,arguments)}var i=0;function n(t){return"__private_"+i+++"_"+t}function o(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}function s(t,e,i){return Math.max(t,Math.min(e,i))}var r=/*#__PURE__*/function(){function t(){}var e=t.prototype;return e.advance=function(t){var e;if(this.isRunning){var i;this.value===this.from&&(null==(i=this.onStart)||i.call(this,this.from));var n,o,r=!1;if(this.lerp)this.value=(1-(n=this.lerp))*this.value+n*this.to,Math.round(this.value)===this.to&&(this.value=this.to,r=!0);else{this.currentTime+=t;var l=s(0,this.currentTime/this.duration,1),h=(r=l>=1)?1:this.easing(l);this.value=this.from+(this.to-this.from)*h}null==(e=this.onUpdate)||e.call(this,this.value),r&&(null==(o=this.onComplete)||o.call(this,this.to),this.stop())}},e.stop=function(){this.isRunning=!1},e.fromTo=function(t,e,i){var n=i.lerp,o=void 0===n?.1:n,s=i.duration,r=void 0===s?1:s,l=i.easing,h=void 0===l?function(t){return t}:l,a=i.onStart,u=i.onUpdate,c=i.onComplete;this.from=this.value=t,this.to=e,this.lerp=o,this.duration=r,this.easing=h,this.currentTime=0,this.isRunning=!0,this.onStart=a,this.onUpdate=u,this.onComplete=c},t}(),l=/*#__PURE__*/n("resizeObserver"),h=/*#__PURE__*/n("onResize"),a=/*#__PURE__*/n("onWindowResize"),u=/*#__PURE__*/function(){function t(t){var e=this;Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,h,{writable:!0,value:function(t){var i=t[0];if(i){var n=i.contentRect,o=n.height;e.width=n.width,e.height=o}}}),Object.defineProperty(this,a,{writable:!0,value:function(){e.width=window.innerWidth,e.height=window.innerHeight}}),this.element=t,t===window?(window.addEventListener("resize",o(this,a)[a]),o(this,a)[a]()):(this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,o(this,l)[l]=new ResizeObserver(o(this,h)[h]),o(this,l)[l].observe(this.element))}return t.prototype.destroy=function(){window.removeEventListener("resize",this.onWindowResize),o(this,l)[l].disconnect()},t}(),c=/*#__PURE__*/n("wheelMultiplier"),d=/*#__PURE__*/n("touchMultiplier"),v=/*#__PURE__*/n("touchStart"),p=/*#__PURE__*/n("emitter"),f=/*#__PURE__*/n("onTouchStart"),m=/*#__PURE__*/n("onTouchMove"),w=/*#__PURE__*/n("onWheel"),b=/*#__PURE__*/function(){function e(e,i){var n=this,s=i.wheelMultiplier,r=void 0===s?1:s,l=i.touchMultiplier,h=void 0===l?2:l;Object.defineProperty(this,c,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,v,{writable:!0,value:void 0}),Object.defineProperty(this,p,{writable:!0,value:void 0}),Object.defineProperty(this,f,{writable:!0,value:function(t){var e=t.targetTouches?t.targetTouches[0]:t,i=e.pageX,s=e.pageY;o(n,v)[v].x=i,o(n,v)[v].y=s}}),Object.defineProperty(this,m,{writable:!0,value:function(t){var e=t.targetTouches?t.targetTouches[0]:t,i=e.pageX,s=e.pageY,r=-(i-o(n,v)[v].x)*o(n,d)[d],l=-(s-o(n,v)[v].y)*o(n,d)[d];o(n,v)[v].x=i,o(n,v)[v].y=s,o(n,p)[p].emit("scroll",{type:"touch",deltaX:r,deltaY:l,event:t})}}),Object.defineProperty(this,w,{writable:!0,value:function(t){var e=t.deltaX,i=t.deltaY;e*=o(n,c)[c],i*=o(n,c)[c],o(n,p)[p].emit("scroll",{type:"wheel",deltaX:e,deltaY:i,event:t})}}),this.element=e,o(this,c)[c]=r,o(this,d)[d]=h,o(this,v)[v]={x:null,y:null},o(this,p)[p]=t(),this.element.addEventListener("wheel",o(this,w)[w],{passive:!1}),this.element.addEventListener("touchstart",o(this,f)[f],{passive:!1}),this.element.addEventListener("touchmove",o(this,m)[m],{passive:!1})}var i=e.prototype;return i.on=function(t,e){return o(this,p)[p].on(t,e)},i.destroy=function(){o(this,p)[p].events={},this.element.removeEventListener("wheel",o(this,w)[w],{passive:!1}),this.element.removeEventListener("touchstart",o(this,f)[f],{passive:!1}),this.element.removeEventListener("touchmove",o(this,m)[m],{passive:!1})},e}(),g=/*#__PURE__*/n("options"),y=/*#__PURE__*/n("wrapper"),O=/*#__PURE__*/n("content"),j=/*#__PURE__*/n("animate"),P=/*#__PURE__*/n("emitter"),S=/*#__PURE__*/n("virtualScroll"),M=/*#__PURE__*/n("time"),L=/*#__PURE__*/n("velocity"),T=/*#__PURE__*/n("direction"),z=/*#__PURE__*/n("animatedScroll"),E=/*#__PURE__*/n("targetScroll"),k=/*#__PURE__*/n("isScrolling"),R=/*#__PURE__*/n("isStopped"),W=/*#__PURE__*/n("isLocked"),C=/*#__PURE__*/n("isSmooth"),H=/*#__PURE__*/n("setScroll"),x=/*#__PURE__*/n("onVirtualScroll"),X=/*#__PURE__*/n("onScroll"),Y=/*#__PURE__*/n("classElement"),D=/*#__PURE__*/n("actualScroll"),U=/*#__PURE__*/function(){function i(e){var i=this,n=void 0===e?{}:e,s=n.direction,l=n.gestureDirection,h=n.mouseMultiplier,a=n.smooth,c=n.wrapper,d=void 0===c?window:c,v=n.content,p=void 0===v?document.documentElement:v,f=n.smoothWheel,m=void 0===f?null==a||a:f,w=n.smoothTouch,U=void 0!==w&&w,B=n.duration,V=n.easing,F=void 0===V?function(t){return Math.min(1,1.001-Math.pow(2,-10*t))}:V,K=n.lerp,G=void 0===K?B?null:.1:K,I=n.infinite,J=void 0!==I&&I,N=n.orientation,Q=void 0===N?null!=s?s:"vertical":N,Z=n.gestureOrientation,$=void 0===Z?null!=l?l:"vertical":Z,tt=n.touchMultiplier,et=void 0===tt?2:tt,it=n.wheelMultiplier,nt=void 0===it?null!=h?h:1:it;Object.defineProperty(this,D,{get:q,set:void 0}),Object.defineProperty(this,Y,{get:A,set:void 0}),Object.defineProperty(this,H,{value:_}),Object.defineProperty(this,g,{writable:!0,value:void 0}),Object.defineProperty(this,y,{writable:!0,value:void 0}),Object.defineProperty(this,O,{writable:!0,value:void 0}),Object.defineProperty(this,j,{writable:!0,value:void 0}),Object.defineProperty(this,P,{writable:!0,value:void 0}),Object.defineProperty(this,S,{writable:!0,value:void 0}),Object.defineProperty(this,M,{writable:!0,value:void 0}),Object.defineProperty(this,L,{writable:!0,value:void 0}),Object.defineProperty(this,T,{writable:!0,value:void 0}),Object.defineProperty(this,z,{writable:!0,value:void 0}),Object.defineProperty(this,E,{writable:!0,value:void 0}),Object.defineProperty(this,k,{writable:!0,value:void 0}),Object.defineProperty(this,R,{writable:!0,value:void 0}),Object.defineProperty(this,W,{writable:!0,value:void 0}),Object.defineProperty(this,C,{writable:!0,value:void 0}),Object.defineProperty(this,x,{writable:!0,value:function(t){var e=t.type,n=t.deltaX,s=t.deltaY,r=t.event;if(!r.ctrlKey&&!("vertical"===o(i,g)[g].gestureOrientation&&0===s||"horizontal"===o(i,g)[g].gestureOrientation&&0===n||r.composedPath().find(function(t){return null==t||null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent")})))if(i.isStopped||o(i,W)[W])r.preventDefault();else if(i.isSmooth=o(i,g)[g].smoothTouch&&"touch"===e||o(i,g)[g].smoothWheel&&"wheel"===e,i.isSmooth){r.preventDefault();var l=s;"both"===o(i,g)[g].gestureOrientation?l=n+s:"horizontal"===o(i,g)[g].gestureOrientation&&(l=n),i.scrollTo(o(i,E)[E]+l,{},!1)}}}),Object.defineProperty(this,X,{writable:!0,value:function(){if(!i.isScrolling){var t=o(i,z)[z];o(i,z)[z]=o(i,E)[E]=o(i,D)[D],o(i,L)[L]=0,o(i,T)[T]=Math.sign(o(i,z)[z]-t),i.emit()}}}),s&&console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),l&&console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),h&&console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),a&&console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),window.lenisVersion="1.0.0-dev.3",d!==document.documentElement&&d!==document.body||(d=window),o(this,g)[g]={wrapper:d,content:p,smoothWheel:m,smoothTouch:U,duration:B,easing:F,lerp:G,infinite:J,gestureOrientation:$,orientation:Q,touchMultiplier:et,wheelMultiplier:nt},o(this,y)[y]=new u(d),o(this,O)[O]=new u(p),o(this,Y)[Y].classList.add("lenis"),o(this,L)[L]=0,this.isStopped=!1,this.isSmooth=m||U,this.isScrolling=!1,o(this,E)[E]=o(this,z)[z]=o(this,D)[D],o(this,j)[j]=new r,o(this,P)[P]=t(),o(this,y)[y].element.addEventListener("scroll",o(this,X)[X],{passive:!1}),o(this,S)[S]=new b(d,{touchMultiplier:et,wheelMultiplier:nt}),o(this,S)[S].on("scroll",o(this,x)[x])}var n,l,h=i.prototype;return h.destroy=function(){o(this,P)[P].events={},o(this,y)[y].element.removeEventListener("scroll",o(this,X)[X],{passive:!1}),o(this,S)[S].destroy()},h.on=function(t,e){return o(this,P)[P].on(t,e)},h.emit=function(){o(this,P)[P].emit("scroll",this)},h.start=function(){this.isStopped=!1},h.stop=function(){this.isStopped=!0},h.raf=function(t){var e=t-(o(this,M)[M]||t);o(this,M)[M]=t,o(this,j)[j].advance(.001*e)},h.scrollTo=function(t,e,i){var n=this,r=void 0===e?{}:e,l=r.offset,h=void 0===l?0:l,a=r.immediate,u=void 0!==a&&a,c=r.lock,d=void 0!==c&&c,v=r.duration,p=void 0===v?o(this,g)[g].duration:v,f=r.easing,m=void 0===f?o(this,g)[g].easing:f,w=r.lerp,b=void 0===w?o(this,g)[g].lerp:w,O=r.onComplete;if(void 0===i&&(i=!0),["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var P,S;if("string"==typeof t?S=document.querySelector(t):null!=(P=t)&&P.nodeType&&(S=t),S){if(o(this,y)[y].element!==window){var M=o(this,y)[y].element.getBoundingClientRect();h-=this.isHorizontal?M.left:M.top}var k=S.getBoundingClientRect();t=(this.isHorizontal?k.left:k.top)+o(this,z)[z]}}if("number"==typeof t)if(t+=h,o(this,g)[g].infinite?i&&(o(this,E)[E]=o(this,z)[z]=this.scroll):t=s(0,t,this.limit),o(this,z)[z]!==t){if(u)return o(this,z)[z]=o(this,E)[E]=t,o(this,H)[H](t),this.emit(),void(null==O||O());i||(o(this,E)[E]=t),o(this,j)[j].fromTo(o(this,z)[z],t,{duration:p,easing:m,lerp:b,onStart:function(){d&&(o(n,W)[W]=!0),n.isScrolling=!0},onUpdate:function(t){o(n,L)[L]=t-o(n,z)[z],o(n,T)[T]=Math.sign(o(n,L)[L]),o(n,z)[z]=t,o(n,H)[H](t),i&&(o(n,E)[E]=t),n.emit()},onComplete:function(t){d&&(o(n,W)[W]=!1),requestAnimationFrame(function(){n.isScrolling=!1}),o(n,L)[L]=0,n.emit(),null==O||O()}})}else null==O||O()},n=i,(l=[{key:"options",get:function(){return e({},o(this,g)[g])}},{key:"limit",get:function(){return this.isHorizontal?o(this,O)[O].width-o(this,y)[y].width:o(this,O)[O].height-o(this,y)[y].height}},{key:"isHorizontal",get:function(){return"horizontal"===o(this,g)[g].orientation}},{key:"scroll",get:function(){return e=o(this,z)[z]%(t=this.limit),(t>0&&e<0||t<0&&e>0)&&(e+=t),e;var t,e}},{key:"progress",get:function(){return this.scroll/this.limit}},{key:"velocity",get:function(){return o(this,L)[L]}},{key:"direction",get:function(){return o(this,T)[T]}},{key:"isSmooth",get:function(){return o(this,C)[C]},set:function(t){o(this,C)[C]=t,o(this,Y)[Y].classList.toggle("lenis-smooth",t)}},{key:"isScrolling",get:function(){return o(this,k)[k]},set:function(t){o(this,k)[k]=t,o(this,Y)[Y].classList.toggle("lenis-scrolling",t)}},{key:"isStopped",get:function(){return o(this,R)[R]},set:function(t){o(this,R)[R]=t,o(this,Y)[Y].classList.toggle("lenis-stopped",t)}}])&&function(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(n.prototype,l),Object.defineProperty(n,"prototype",{writable:!1}),i}();function _(t){o(this,g)[g].infinite&&(t=this.scroll),this.isHorizontal?o(this,Y)[Y].scrollLeft=t:o(this,Y)[Y].scrollTop=t}function A(){return o(this,y)[y].element===window?o(this,O)[O].element:o(this,y)[y].element}function q(){return o(this,Y)[Y].scrollTop}export{U as default};
//# sourceMappingURL=lenis.mjs.map
