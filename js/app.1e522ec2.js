(function(e){function t(t){for(var n,c,s=t[0],h=t[1],o=t[2],b=0,l=[];b<s.length;b++)c=s[b],i[c]&&l.push(i[c][0]),i[c]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(e[n]=h[n]);u&&u(t);while(l.length)l.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var h=a[s];0!==i[h]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},i={app:0},r=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/pixelart-runner/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],h=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var u=h;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],c=(a("7faf"),a("2877")),s={},h=Object(c["a"])(s,i,r,!1,null,null,null),o=h.exports,u=a("8c4f"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("MainScene"),e._m(0)],1)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home__info"},[a("span",[e._v("Controlls:")]),a("br"),a("span",[e._v("  Left Arrow - Move Left")]),a("br"),a("span",[e._v("  Right Arrow - Move Right")]),a("br"),a("span",[e._v("  Spacebar - Jump")]),a("br")])}],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"scene"})},j=[],f=(a("ac6a"),a("5df3"),a("10ad"),a("96cf"),a("3b8d")),p=(a("6c7b"),a("d225")),d=a("b0b4"),w=a("a52d"),v=a("ab0e"),m=a("b047"),g=a.n(m),k=function(){function e(t,a,n){Object(p["a"])(this,e),y.set(this,{writable:!0,value:document.createElement("canvas")}),M.set(this,{writable:!0,value:null}),R.set(this,{writable:!0,value:64}),W.set(this,{writable:!0,value:64}),S.set(this,{writable:!0,value:null}),Object(v["a"])(this,y).width=Object(w["a"])(this,R,t),Object(v["a"])(this,y).height=Object(w["a"])(this,W,a),Object(v["a"])(this,y).style["object-fit"]="contain",Object(v["a"])(this,y).style.width="100%",Object(v["a"])(this,y).style.height="100%",Object(v["a"])(this,y).style["image-rendering"]="pixelated",Object(w["a"])(this,S,n),Object(w["a"])(this,M,Object(v["a"])(this,y).getContext("2d")),Object(v["a"])(this,M).imageSmoothingEnabled=!1}return Object(d["a"])(e,[{key:"element",get:function(){return Object(v["a"])(this,y)}}]),Object(d["a"])(e,[{key:"clear",value:function(){Object(v["a"])(this,M).clearRect(0,0,Object(v["a"])(this,R),Object(v["a"])(this,W)),this.fill(Object(v["a"])(this,S).defaultColor)}},{key:"fill",value:function(e){Object(v["a"])(this,M).save(),Object(v["a"])(this,M).fillStyle=e,Object(v["a"])(this,M).fillRect(0,0,Object(v["a"])(this,R),Object(v["a"])(this,W)),Object(v["a"])(this,M).restore()}},{key:"renderImage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:0,y:0},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;Object(v["a"])(this,M).drawImage(e,0,0,e.width,e.height,t.x,t.y,e.width/a,e.height/a)}}]),e}(),y=new WeakMap,M=new WeakMap,R=new WeakMap,W=new WeakMap,S=new WeakMap,x=a("308d"),T=a("6bb5"),P=a("013f"),_=a("4e2b"),I=(a("1c4c"),a("84b4"),function(e){return new Promise(function(t,a){var n=new Image;n.onload=function(){return t(n)},n.onerror=a,n.src=e})}),E=function(){function e(t,a){Object(p["a"])(this,e),F.set(this,{writable:!0,value:null}),C.set(this,{writable:!0,value:[]}),H.set(this,{writable:!0,value:[]}),A.set(this,{writable:!0,value:0}),L.set(this,{writable:!0,value:[]}),D.set(this,{writable:!0,value:-1}),G.set(this,{writable:!0,value:0}),Object(w["a"])(this,F,a),Object(w["a"])(this,C,t.framesOrder),Object(w["a"])(this,H,t.frames),Object(v["a"])(this,C).length<Object(v["a"])(this,F).frameRate&&Object(w["a"])(this,A,Math.trunc(Object(v["a"])(this,F).frameRate/(Object(v["a"])(this,C).length*Object(v["a"])(this,F).animationSpeed)))}return Object(d["a"])(e,[{key:"frame",get:function(){if(0===Object(v["a"])(this,L))return null;if(1===Object(v["a"])(this,L))return Object(v["a"])(this,L)[0];Object(w["a"])(this,G,+Object(v["a"])(this,G)-1)<0&&(Object(w["a"])(this,G,Object(v["a"])(this,A)),Object(w["a"])(this,D,1+ +Object(v["a"])(this,D)),Object(v["a"])(this,F).onChangeFrame instanceof Function&&Object(v["a"])(this,F).onChangeFrame(Object(v["a"])(this,D),Object(v["a"])(this,C).length),Object(v["a"])(this,D)>=Object(v["a"])(this,C).length&&Object(w["a"])(this,D,0));return Object(v["a"])(this,L)[Object(v["a"])(this,C)[Object(v["a"])(this,D)]]}},{key:"size",get:function(){var e=Object(v["a"])(this,D)>-1?Object(v["a"])(this,D):0;return{width:Object(v["a"])(this,L)[Object(v["a"])(this,C)[e]].width,height:Object(v["a"])(this,L)[Object(v["a"])(this,C)[e]].height}}}],[{key:"create",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(t,a){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=new this(t,a),e.next=3,n.loadFrames();case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));function t(t,a){return e.apply(this,arguments)}return t}()}]),Object(d["a"])(e,[{key:"loadFrames",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=w["a"],e.t1=this,e.t2=L,e.next=5,Promise.all(Array.from(Object(v["a"])(this,H),I));case 5:e.t3=e.sent,(0,e.t0)(e.t1,e.t2,e.t3);case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]),e}(),F=new WeakMap,C=new WeakMap,H=new WeakMap,A=new WeakMap,L=new WeakMap,D=new WeakMap,G=new WeakMap,J=a("9a04"),U=function(){function e(){Object(p["a"])(this,e),B.set(this,{writable:!0,value:null})}return Object(d["a"])(e,null,[{key:"create",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,a,n,i,r=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(t=r.length,a=new Array(t),n=0;n<t;n++)a[n]=r[n];return i=Object(J["a"])(this,a),e.next=4,i.load();case 4:return e.abrupt("return",i);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]),e}(),B=new WeakMap,N=["LEFT","STOP","RIGHT"],$=function(e){function t(e){var a;return Object(p["a"])(this,t),a=Object(x["a"])(this,Object(T["a"])(t).call(this,e)),z.set(Object(P["a"])(a),{writable:!0,value:0}),q.set(Object(P["a"])(a),{writable:!0,value:0}),Q.set(Object(P["a"])(a),{writable:!0,value:null}),Y.set(Object(P["a"])(a),{writable:!0,value:null}),Z.set(Object(P["a"])(a),{writable:!0,value:0}),K.set(Object(P["a"])(a),{writable:!0,value:0}),V.set(Object(P["a"])(a),{writable:!0,value:null}),X.set(Object(P["a"])(a),{writable:!0,value:null}),ee.set(Object(P["a"])(a),{writable:!0,value:{framesOrder:[0],frames:["https://lh3.google.com/u/0/d/1ldJ5Z5rstgaRncGB2tMmje9oQeDJYHUs=w2072-h1576-iv1"]}}),Object(w["a"])(Object(P["a"])(a),Z,e.width),Object(w["a"])(Object(P["a"])(a),K,e.height),Object(w["a"])(Object(P["a"])(a),V,e),Object(w["a"])(Object(P["a"])(a),Q,new OffscreenCanvas(2*Object(v["a"])(Object(P["a"])(a),Z),Object(v["a"])(Object(P["a"])(a),K))),Object(w["a"])(Object(P["a"])(a),Y,Object(v["a"])(Object(P["a"])(a),Q).getContext("2d")),Object(v["a"])(Object(P["a"])(a),Y).imageSmoothingEnabled=!1,a}return Object(_["a"])(t,e),Object(d["a"])(t,[{key:"shiftDirection",get:function(){return N[Object(v["a"])(this,q)+1]},set:function(e){Object(w["a"])(this,q,N.indexOf(e)-1)}}]),Object(d["a"])(t,[{key:"load",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=w["a"],e.t1=this,e.t2=X,e.next=5,E.create(Object(v["a"])(this,ee),{frameRate:Object(v["a"])(this,V).frameRate});case 5:e.t3=e.sent,(0,e.t0)(e.t1,e.t2,e.t3);case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"render",value:function(){Object(v["a"])(this,Y).clearRect(0,0,Object(v["a"])(this,Z),Object(v["a"])(this,K)),Object(w["a"])(this,z,Object(v["a"])(this,z)+Object(v["a"])(this,q));var e=Object(v["a"])(this,Z)/2;return Object(v["a"])(this,z)<-e&&Object(w["a"])(this,z,e),Object(v["a"])(this,z)>e&&Object(w["a"])(this,z,-e),Object(v["a"])(this,Y).drawImage(Object(v["a"])(this,X).frame,e,0,e,Object(v["a"])(this,K),-e+Object(v["a"])(this,z),0,e,Object(v["a"])(this,K)),Object(v["a"])(this,Y).drawImage(Object(v["a"])(this,X).frame,0,0,Object(v["a"])(this,Z),Object(v["a"])(this,K),Object(v["a"])(this,z),0,Object(v["a"])(this,Z),Object(v["a"])(this,K)),Object(v["a"])(this,Y).drawImage(Object(v["a"])(this,X).frame,0,0,e,Object(v["a"])(this,K),Object(v["a"])(this,Z)+Object(v["a"])(this,z),0,e,Object(v["a"])(this,K)),Object(v["a"])(this,Q)}}]),t}(U),z=new WeakMap,q=new WeakMap,Q=new WeakMap,Y=new WeakMap,Z=new WeakMap,K=new WeakMap,V=new WeakMap,X=new WeakMap,ee=new WeakMap,te=function(e){function t(e){var a;return Object(p["a"])(this,t),a=Object(x["a"])(this,Object(T["a"])(t).call(this,e)),ae.set(Object(P["a"])(a),{writable:!0,value:0}),ne.set(Object(P["a"])(a),{writable:!0,value:0}),ie.set(Object(P["a"])(a),{writable:!0,value:256}),re.set(Object(P["a"])(a),{writable:!0,value:256}),ce.set(Object(P["a"])(a),{writable:!0,value:"STOP"}),se.set(Object(P["a"])(a),{writable:!0,value:"STOP"}),he.set(Object(P["a"])(a),{writable:!0,value:"RIGHT"}),oe.set(Object(P["a"])(a),{writable:!0,value:null}),ue.set(Object(P["a"])(a),{writable:!0,value:null}),be.set(Object(P["a"])(a),{writable:!0,value:null}),le.set(Object(P["a"])(a),{writable:!0,value:null}),Oe.set(Object(P["a"])(a),{writable:!0,value:{framesOrder:[0,1,0,2],frames:["/pixelart-runner/img/runner/runner-run-left-0.png","/pixelart-runner/img/runner/runner-run-left-1.png","/pixelart-runner/img/runner/runner-run-left-2.png"]}}),je.set(Object(P["a"])(a),{writable:!0,value:null}),fe.set(Object(P["a"])(a),{writable:!0,value:{framesOrder:[0,0,0,1],frames:["/pixelart-runner/img/runner/runner-standing-left.png","/pixelart-runner/img/runner/runner-standing-left-closed-eyes.png"]}}),pe.set(Object(P["a"])(a),{writable:!0,value:null}),de.set(Object(P["a"])(a),{writable:!0,value:{framesOrder:[0,1,1,1,1,1,1,1,0],frames:["/pixelart-runner/img/runner/runner-standing-left.png","/pixelart-runner/img/runner/runner-jumping-left.png"]}}),Object(w["a"])(Object(P["a"])(a),ie,e.width),Object(w["a"])(Object(P["a"])(a),re,e.height),Object(w["a"])(Object(P["a"])(a),ae,e.x),Object(w["a"])(Object(P["a"])(a),ne,e.y),Object(w["a"])(Object(P["a"])(a),be,e),Object(w["a"])(Object(P["a"])(a),oe,new OffscreenCanvas(Object(v["a"])(Object(P["a"])(a),ie),Object(v["a"])(Object(P["a"])(a),re))),Object(w["a"])(Object(P["a"])(a),ue,Object(v["a"])(Object(P["a"])(a),oe).getContext("2d")),Object(v["a"])(Object(P["a"])(a),ue).imageSmoothingEnabled=!1,a}return Object(_["a"])(t,e),Object(d["a"])(t,[{key:"position",get:function(){return{x:Object(v["a"])(this,ae),y:Object(v["a"])(this,ne)}}},{key:"actionType",get:function(){return Object(v["a"])(this,se)},set:function(e){Object(v["a"])(this,se)!==e&&(Object(v["a"])(this,ce)!==Object(v["a"])(this,se)&&Object(w["a"])(this,ce,Object(v["a"])(this,se)),"STOP"===e&&Object(v["a"])(this,be).onStop instanceof Function&&Object(v["a"])(this,be).onStop(),Object(w["a"])(this,se,e))}}]),Object(d["a"])(t,[{key:"load",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=w["a"],e.t1=this,e.t2=le,e.next=5,E.create(Object(v["a"])(this,Oe),{frameRate:Object(v["a"])(this,be).frameRate,animationSpeed:2});case 5:return e.t3=e.sent,(0,e.t0)(e.t1,e.t2,e.t3),e.t4=w["a"],e.t5=this,e.t6=je,e.next=12,E.create(Object(v["a"])(this,fe),{frameRate:Object(v["a"])(this,be).frameRate,animationSpeed:.5});case 12:return e.t7=e.sent,(0,e.t4)(e.t5,e.t6,e.t7),e.t8=w["a"],e.t9=this,e.t10=pe,e.next=19,E.create(Object(v["a"])(this,de),{frameRate:Object(v["a"])(this,be).frameRate,animationSpeed:1,onChangeFrame:function(e,a){e>0&&e<4&&Object(w["a"])(t,ne,Object(v["a"])(t,ne)-8),e>4&&e<8&&Object(w["a"])(t,ne,Object(v["a"])(t,ne)+8),e===a&&(t.actionType=Object(v["a"])(t,ce))}});case 19:e.t11=e.sent,(0,e.t8)(e.t9,e.t10,e.t11);case 21:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"stop",value:function(){"JUMP"===this.actionType?Object(w["a"])(this,ce,"STOP"):this.actionType="STOP"}},{key:"run",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"RIGHT";"JUMP"===this.actionType?Object(w["a"])(this,ce,"RUN"):this.actionType="RUN",Object(v["a"])(this,he)!==e&&Object(w["a"])(this,he,e)}},{key:"jump",value:function(){"JUMP"!==this.actionType&&(this.actionType="JUMP")}},{key:"move",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(v["a"])(this,be).checkPosition(this.position.x+e,this.position.y+t,Object(v["a"])(this,ie),Object(v["a"])(this,re))&&(Object(w["a"])(this,ae,Object(v["a"])(this,ae)+e),Object(w["a"])(this,ne,Object(v["a"])(this,ne)+t)),Object(v["a"])(this,be).onMove instanceof Function&&Object(v["a"])(this,be).onMove(Object(v["a"])(this,he))}},{key:"renderSprite",value:function(e){var t="RIGHT"===Object(v["a"])(this,he);Object(v["a"])(this,ue).clearRect(0,0,Object(v["a"])(this,ie),Object(v["a"])(this,re)),t&&Object(v["a"])(this,ue).scale(-1,1),Object(v["a"])(this,ue).drawImage(e.frame,0,0,e.size.width,e.size.height,0,0,Object(v["a"])(this,ie)*(t?-1:1),Object(v["a"])(this,re)),t&&Object(v["a"])(this,ue).setTransform(1,0,0,1,0,0)}},{key:"render",value:function(){return"RUN"===Object(v["a"])(this,se)?("RIGHT"===Object(v["a"])(this,he)&&(this.move(1),this.renderSprite(Object(v["a"])(this,le))),"LEFT"===Object(v["a"])(this,he)&&(this.move(-1),this.renderSprite(Object(v["a"])(this,le)))):"STOP"===Object(v["a"])(this,se)?this.renderSprite(Object(v["a"])(this,je)):"JUMP"===Object(v["a"])(this,se)&&("RUN"===Object(v["a"])(this,ce)&&("RIGHT"===Object(v["a"])(this,he)&&this.move(1),"LEFT"===Object(v["a"])(this,he)&&this.move(-1)),this.renderSprite(Object(v["a"])(this,pe))),Object(v["a"])(this,oe)}}]),t}(U),ae=new WeakMap,ne=new WeakMap,ie=new WeakMap,re=new WeakMap,ce=new WeakMap,se=new WeakMap,he=new WeakMap,oe=new WeakMap,ue=new WeakMap,be=new WeakMap,le=new WeakMap,Oe=new WeakMap,je=new WeakMap,fe=new WeakMap,pe=new WeakMap,de=new WeakMap,we=function(){function e(t){Object(p["a"])(this,e),ve.set(this,{writable:!0,value:null}),me.set(this,{writable:!0,value:320}),ge.set(this,{writable:!0,value:256}),ke.set(this,{writable:!0,value:new k(Object(v["a"])(this,me),Object(v["a"])(this,ge),{defaultColor:"hsl(196, 100%, 47%)"})}),ye.set(this,{writable:!0,value:null}),Me.set(this,{writable:!0,value:null}),Re.set(this,{writable:!0,value:60}),Object(w["a"])(this,ve,t),Object(v["a"])(this,ke).fill("hsl(196, 100%, 47%)"),Object(v["a"])(this,ve).appendChild(Object(v["a"])(this,ke).element),this.tick=this.tick.bind(this),this.checkPosition=this.checkPosition.bind(this),this.updateDirectionShiftBackground=this.updateDirectionShiftBackground.bind(this),this.run(),this.actionHandler=g()(this.actionHandler.bind(this),64),window.addEventListener("keydown",this.actionHandler,{passive:!0}),window.addEventListener("keyup",this.actionHandler,{passive:!0})}return Object(d["a"])(e,[{key:"run",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadAssets();case 2:this.tick();case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"checkPosition",value:function(e,t,a,n){return!(e<=0)&&(!(e+a>=Object(v["a"])(this,me))&&(!(t<=0)&&!(t+n>=Object(v["a"])(this,ge))))}},{key:"updateDirectionShiftBackground",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"STOP";null!=Object(v["a"])(this,Me)&&("LEFT"===e&&(Object(v["a"])(this,Me).shiftDirection="RIGHT"),"RIGHT"===e&&(Object(v["a"])(this,Me).shiftDirection="LEFT"),"STOP"===e&&(Object(v["a"])(this,Me).shiftDirection="STOP"))}},{key:"loadAssets",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=w["a"],e.t1=this,e.t2=ye,e.next=5,te.create({width:64,height:64,x:0,y:160,frameRate:Object(v["a"])(this,Re),animationSpeed:2,checkPosition:this.checkPosition,onMove:this.updateDirectionShiftBackground,onStop:this.updateDirectionShiftBackground});case 5:return e.t3=e.sent,(0,e.t0)(e.t1,e.t2,e.t3),e.t4=w["a"],e.t5=this,e.t6=Me,e.next=12,$.create({width:Object(v["a"])(this,me),height:Object(v["a"])(this,ge),frameRate:Object(v["a"])(this,Re)});case 12:e.t7=e.sent,(0,e.t4)(e.t5,e.t6,e.t7);case 14:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"tick",value:function(){requestAnimationFrame(this.tick),Object(v["a"])(this,ke).clear(),Object(v["a"])(this,ke).renderImage(Object(v["a"])(this,Me).render()),Object(v["a"])(this,ke).renderImage(Object(v["a"])(this,ye).render(),Object(v["a"])(this,ye).position)}},{key:"stop",value:function(){Object(v["a"])(this,ye).stop()}},{key:"actionHandler",value:function(e){null!=Object(v["a"])(this,ye)&&null!=Object(v["a"])(this,Me)&&("keyup"!==e.type||"ArrowRight"!==e.code&&"ArrowLeft"!==e.code?("ArrowRight"===e.code&&Object(v["a"])(this,ye).run("RIGHT"),"ArrowLeft"===e.code&&Object(v["a"])(this,ye).run("LEFT"),"Space"===e.code&&Object(v["a"])(this,ye).jump()):this.stop())}}]),e}(),ve=new WeakMap,me=new WeakMap,ge=new WeakMap,ke=new WeakMap,ye=new WeakMap,Me=new WeakMap,Re=new WeakMap,We={name:"MainScene",props:{},data:function(){return{scene:null}},mounted:function(){var e=this;this.$nextTick(function(){e.scene=new we(e.$el)})}},Se=We,xe=(a("fc95"),Object(c["a"])(Se,O,j,!1,null,"18a08120",null)),Te=xe.exports,Pe={name:"home",components:{MainScene:Te}},_e=Pe,Ie=(a("64ac"),Object(c["a"])(_e,b,l,!1,null,"b3211dd4",null)),Ee=Ie.exports;n["a"].use(u["a"]);var Fe=new u["a"]({mode:"history",base:"/pixelart-runner/",routes:[{path:"/",name:"home",component:Ee}]}),Ce=a("2f62");n["a"].use(Ce["a"]);var He=new Ce["a"].Store({state:{},mutations:{},actions:{}}),Ae=a("9483");Object(Ae["a"])("".concat("/pixelart-runner/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,new n["a"]({router:Fe,store:He,render:function(e){return e(o)}}).$mount("#app")},"64ac":function(e,t,a){"use strict";var n=a("c308"),i=a.n(n);i.a},"7faf":function(e,t,a){"use strict";var n=a("8fba"),i=a.n(n);i.a},"8fba":function(e,t,a){},"9a0f":function(e,t,a){},c308:function(e,t,a){},fc95:function(e,t,a){"use strict";var n=a("9a0f"),i=a.n(n);i.a}});
//# sourceMappingURL=app.1e522ec2.js.map