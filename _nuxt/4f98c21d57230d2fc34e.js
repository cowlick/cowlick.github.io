(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(t,e){},154:function(t,e,n){"use strict";n.r(e);var o,r=n(5),c=(n(35),n(7)),l=n(62),f=n(152),d=n.n(f),v=(o=function(t,b){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),_=function(t,e,n,desc){var o,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(r.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(c<3?o(l):c>3?o(e,n,l):o(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},y=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(r.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}var n;return v(e,t),_([l.State,y("design:type","function"==typeof(n=void 0!==d.a&&d.a)?n:Object)],e.prototype,"tutorial",void 0),e=_([Object(c.Component)({head:function(){return{title:"チュートリアル"}}})],e)}(c.Vue),m=n(14),component=Object(m.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("h1",[t._v("チュートリアル")]),t._v(" "),n("p",[t._v("\n    Cowlickを使ったノベルゲーム作成について簡単に紹介します。"),n("br"),t._v("\n    ここで作成するゲームの完成形はデモをご覧ください。\n  ")]),t._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"768"},model:{value:t.tutorial.dialog,callback:function(e){t.$set(t.tutorial,"dialog",e)},expression:"tutorial.dialog"}},[n("v-btn",{attrs:{slot:"activator",color:"primary",dark:""},on:{click:function(e){return t.$store.commit("tutorial/open")}},slot:"activator"},[t._v(" デモをみる ")]),t._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("チュートリアル デモ")])]),t._v(" "),n("iframe",{staticStyle:{height:"432px"},attrs:{src:"/tutorial/demo/index.html",width:"100%"}}),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(e){return t.$store.commit("tutorial/close")}}},[t._v("閉じる")])],1)],1)],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);