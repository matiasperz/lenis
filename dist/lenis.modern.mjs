import{TinyEmitter as t}from"tiny-emitter";import i from"virtual-scroll";function e(){return e=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},e.apply(this,arguments)}function s(t,i){let e=t%i;return(i>0&&e<0||i<0&&e>0)&&(e+=i),e}const o=["duration","easing"];class r{to(t,i={}){let{duration:s=1,easing:r=(t=>t)}=i,n=function(t,i){if(null==t)return{};var e,s,o={},r=Object.keys(t);for(s=0;s<r.length;s++)i.indexOf(e=r[s])>=0||(o[e]=t[e]);return o}(i,o);this.target=t,this.fromKeys=e({},n),this.toKeys=e({},n),this.keys=Object.keys(e({},n)),this.keys.forEach(i=>{this.fromKeys[i]=t[i]}),this.duration=s,this.easing=r,this.currentTime=0,this.isRunning=!0}stop(){this.isRunning=!1}raf(t){if(!this.isRunning)return;this.currentTime=Math.min(this.currentTime+t,this.duration);const i=this.progress>=1?1:this.easing(this.progress);this.keys.forEach(t=>{const e=this.fromKeys[t];this.target[t]=e+(this.toKeys[t]-e)*i}),1===i&&this.stop()}get progress(){return this.currentTime/this.duration}}class n extends t{constructor({duration:t=1.2,easing:e=(t=>Math.min(1,1.001-Math.pow(2,-10*t))),smooth:s=!0,mouseMultiplier:o=1,smoothTouch:n=!1,touchMultiplier:h=2,direction:l="vertical",gestureDirection:c="vertical",infinite:a=!1,wrapper:p=window,content:d=document.body}={}){var u,w,g;super(),this.onWindowResize=()=>{this.wrapperWidth=window.innerWidth,this.wrapperHeight=window.innerHeight},this.onWrapperResize=([t])=>{if(t){const i=t.contentRect;this.wrapperWidth=i.width,this.wrapperHeight=i.height}},this.onContentResize=([t])=>{if(t){const i=t.contentRect;this.contentWidth=i.width,this.contentHeight=i.height}},this.onVirtualScroll=({deltaY:t,deltaX:i,originalEvent:e})=>{const s=!!e.composedPath().find(t=>t.hasAttribute&&t.hasAttribute("data-lenis-prevent"));if(e.ctrlKey||s)return;if(this.smooth=e.changedTouches?this.smoothTouch:this.options.smooth,this.stopped)return void e.preventDefault();if(!this.smooth)return;if(4===e.buttons)return;this.smooth&&e.preventDefault();let o=0;o="both"===this.gestureDirection?i+t:"horizontal"===this.gestureDirection?i:t,this.targetScroll-=o,this.scrollTo(this.targetScroll)},this.onScroll=t=>{this.isScrolling&&this.smooth||(this.targetScroll=this.scroll=this.lastScroll=this.wrapperNode[this.scrollProperty],this.notify())},window.lenisVersion="0.2.25",this.options={duration:t,easing:e,smooth:s,mouseMultiplier:o,smoothTouch:n,touchMultiplier:h,direction:l,gestureDirection:c,infinite:a,wrapper:p,content:d},this.duration=t,this.easing=e,this.smooth=s,this.mouseMultiplier=o,this.smoothTouch=n,this.touchMultiplier=h,this.direction=l,this.gestureDirection=c,this.infinite=a,this.wrapperNode=p,this.contentNode=d,this.wrapperNode.addEventListener("scroll",this.onScroll),this.wrapperNode===window?(this.wrapperNode.addEventListener("resize",this.onWindowResize),this.onWindowResize()):(this.wrapperHeight=this.wrapperNode.offsetHeight,this.wrapperWidth=this.wrapperNode.offsetWidth,this.wrapperObserver=new ResizeObserver(this.onWrapperResize),this.wrapperObserver.observe(this.wrapperNode)),this.contentHeight=this.contentNode.offsetHeight,this.contentWidth=this.contentNode.offsetWidth,this.contentObserver=new ResizeObserver(this.onContentResize),this.contentObserver.observe(this.contentNode),this.targetScroll=this.scroll=this.lastScroll=this.wrapperNode[this.scrollProperty],this.animate=new r;const m=(null==(u=navigator)||null==(w=u.userAgentData)?void 0:w.platform)||(null==(g=navigator)?void 0:g.platform)||"unknown";this.virtualScroll=new i({el:this.wrapperNode,firefoxMultiplier:50,mouseMultiplier:this.mouseMultiplier*(m.includes("Win")?.84:.4),touchMultiplier:this.touchMultiplier,passive:!1,useKeyboard:!1,useTouch:!0}),this.virtualScroll.on(this.onVirtualScroll)}get scrollProperty(){let t;return t=this.wrapperNode===window?"horizontal"===this.direction?"scrollX":"scrollY":"horizontal"===this.direction?"scrollLeft":"scrollTop",t}start(){let t=this.wrapperNode;this.wrapperNode===window&&(t=document.documentElement),t.classList.remove("lenis-stopped"),this.stopped=!1}stop(){let t=this.wrapperNode;this.wrapperNode===window&&(t=document.documentElement),t.classList.add("lenis-stopped"),this.stopped=!0,this.animate.stop()}destroy(){var t;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize),this.wrapperNode.removeEventListener("scroll",this.onScroll),this.virtualScroll.destroy(),null==(t=this.wrapperObserver)||t.disconnect(),this.contentObserver.disconnect()}get limit(){return"horizontal"===this.direction?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}raf(t){const i=t-(this.now||0);this.now=t,!this.stopped&&this.smooth&&(this.lastScroll=this.scroll,this.animate.raf(.001*i),this.scroll===this.targetScroll&&(this.lastScroll=this.scroll),this.isScrolling&&(this.setScroll(this.scroll),this.notify()),this.isScrolling=this.scroll!==this.targetScroll)}get velocity(){return this.scroll-this.lastScroll}setScroll(t){let i=this.infinite?s(t,this.limit):t;"horizontal"===this.direction?this.wrapperNode.scrollTo(i,0):this.wrapperNode.scrollTo(0,i)}notify(){let t=this.infinite?s(this.scroll,this.limit):this.scroll;this.emit("scroll",{scroll:t,limit:this.limit,velocity:this.velocity,direction:0===this.velocity?0:this.velocity>0?1:-1,progress:t/this.limit})}scrollTo(t,{offset:i=0,immediate:e=!1,duration:s=this.duration,easing:o=this.easing}={}){if(null==t||this.stopped)return;let r;if("number"==typeof t)r=t;else if("top"===t||"#top"===t)r=0;else if("bottom"===t)r=this.limit;else{let i;if("string"==typeof t)i=document.querySelector(t);else{if(null==t||!t.nodeType)return;i=t}if(!i)return;let e=0;if(this.wrapperNode!==window){const t=this.wrapperNode.getBoundingClientRect();e="horizontal"===this.direction?t.left:t.top}const s=i.getBoundingClientRect();r=("horizontal"===this.direction?s.left:s.top)+this.scroll-e}r+=i,this.targetScroll=this.infinite?r:Math.max(0,Math.min(r,this.limit)),!this.smooth||e?(this.animate.stop(),this.scroll=this.lastScroll=this.targetScroll,this.setScroll(this.targetScroll)):this.animate.to(this,{duration:s,easing:o,scroll:this.targetScroll})}}export{n as default};
//# sourceMappingURL=lenis.modern.mjs.map
