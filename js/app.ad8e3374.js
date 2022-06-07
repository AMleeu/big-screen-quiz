(function(){"use strict";var e={6553:function(e,t,n){var r=n(8935),s=n(8262),i=n(3266),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{correctAnswers:e.correctAnswers,totalAnswers:e.totalAnswers}}),n("b-container",[n("b-row",[n("b-col",{attrs:{md:"6","offset-md":"3"}},[e.questions.length?n("QuestionBox",{attrs:{currentQuestion:e.questions[e.index],next:e.next,indexofCurrentQuestion:e.index,calcScore:e.calcScore}}):e._e()],1)],1)],1)],1)},u=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-jumbotron",{scopedSlots:e._u([{key:"lead",fn:function(){return[n("span",{domProps:{innerHTML:e._s(e.currentQuestion.question)}})]},proxy:!0}])},[n("hr",{staticClass:"my-4"}),n("b-list-group",{staticClass:"mb-4"},e._l(e.answers,(function(t,r){return n("b-list-group-item",{key:r,class:e.answeredClass(r),domProps:{innerHTML:e._s(t)},on:{click:function(t){return e.selectAnswer(r)}}})})),1),n("b-button",{staticClass:"mr-3",attrs:{variant:"info",disabled:null===e.selectedIndex||e.submitted},on:{click:e.submitAnswer}},[e._v("SUBMIT")]),n("b-button",{directives:[{name:"show",rawName:"v-show",value:!e.hideNEXT,expression:"!hideNEXT"}],attrs:{variant:"secondary",disabled:!e.submitted},on:{click:e.next}},[e._v("NEXT")]),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"my-modal",expression:"'my-modal'"},{name:"show",rawName:"v-show",value:e.hideNEXT,expression:"hideNEXT"}],attrs:{variant:"secondary",disabled:!e.submitted}},[e._v("FINISH")]),n("b-modal",{attrs:{id:"my-modal","ok-only":""}},[e._v(" 💥 WELL DONE, see RESULTS IN HEADER!! 🎉 ")])],1)},a=[],l=n(2196),d=n.n(l),f={props:{currentQuestion:Object,next:Function,indexofCurrentQuestion:Number,calcScore:Function},data(){return{answers:[],selectedIndex:null,correctIndex:null,submitted:!1,hideNEXT:!1}},methods:{shuffleAnswers(){let e=[...this.currentQuestion.incorrect_answers];e.push(this.currentQuestion.correct_answer),this.answers=d().shuffle(e)},selectAnswer(e){this.selectedIndex=e},submitAnswer(){this.submitted=!0,this.correctIndex=this.answers.indexOf(this.currentQuestion.correct_answer);let e=!1;this.selectedIndex===this.correctIndex&&(e=!0),this.calcScore(e)},answeredClass(e){return this.submitted||this.selectedIndex!==e?this.submitted&&this.correctIndex===e?"correct":this.submitted&&this.selectedIndex===e&&this.selectedIndex!==this.correctIndex?"incorrect":void 0:"selected"}},watch:{currentQuestion:{immediate:!0,handler(){this.shuffleAnswers(),this.selectedIndex=null,this.submitted=!1}},indexofCurrentQuestion(){4===this.indexofCurrentQuestion&&(this.hideNEXT=!0)}}},h=f,b=n(1001),m=(0,b.Z)(h,c,a,!1,null,"b77f7b3a",null),p=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-nav",{attrs:{tabs:""}},[n("b-nav-item",{staticClass:"mt-2",attrs:{disabled:""}},[n("h3",{attrs:{id:"logo"}},[e._v("BIG SCREEN Quiz")])]),n("b-nav-item",{staticClass:"mt-1",attrs:{disabled:""}},[n("b-button",{attrs:{variant:"secondary"}},[e._v(" correct ("+e._s(e.correctAnswers)+")   |   total "),n("b-badge",{staticClass:"lead",attrs:{variant:"light"}},[e._v(e._s(e.totalAnswers))])],1)],1)],1)},w=[],x={props:{correctAnswers:Number,totalAnswers:Number}},_=x,y=(0,b.Z)(_,v,w,!1,null,"1be211ca",null),g=y.exports,A={name:"App",components:{Header:g,QuestionBox:p},data(){return{questions:[],index:0,totalAnswers:0,correctAnswers:0}},methods:{next(){this.index++},calcScore(e){e&&this.correctAnswers++,this.totalAnswers++}},mounted:function(){fetch("https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple",{method:"GET"}).then((e=>{let t=e.json();return t})).then((e=>{this.questions=e.results}))}},E=A,I=(0,b.Z)(E,o,u,!1,null,null,null),N=I.exports;n(44);r["default"].config.productionTip=!1,r["default"].use(s.XG7),r["default"].use(i.A7),new r["default"]({render:e=>e(N)}).$mount("#app")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,i){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],s=e[l][1],i=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<o&&(o=i));if(u){e.splice(l--,1);var a=s();void 0!==a&&(t=a)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,s,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,i,o=r[0],u=r[1],c=r[2],a=0;if(o.some((function(t){return 0!==e[t]}))){for(s in u)n.o(u,s)&&(n.m[s]=u[s]);if(c)var l=c(n)}for(t&&t(r);a<o.length;a++)i=o[a],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkbig_screen_quiz"]=self["webpackChunkbig_screen_quiz"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6553)}));r=n.O(r)})();
//# sourceMappingURL=app.ad8e3374.js.map