import{B as w,s as M,c as k,g as P,i as R,a as G,b as N,d as D,e as m,f as g,h as K,j as p,o as l,F as d,r as z,k as S,l as U,m as B,n as v,p as c,q as O,t as _,u as x,v as $,w as j,x as y,y as C,z as F,A as E}from"./index-CQ1tHsAX.js";import{s as H}from"./index-DgJ-mhS3.js";var V=`
    .p-splitter {
        display: flex;
        flex-wrap: nowrap;
        border: 1px solid dt('splitter.border.color');
        background: dt('splitter.background');
        border-radius: dt('border.radius.md');
        color: dt('splitter.color');
    }

    .p-splitter-vertical {
        flex-direction: column;
    }

    .p-splitter-gutter {
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        background: dt('splitter.gutter.background');
    }

    .p-splitter-gutter-handle {
        border-radius: dt('splitter.handle.border.radius');
        background: dt('splitter.handle.background');
        transition:
            outline-color dt('splitter.transition.duration'),
            box-shadow dt('splitter.transition.duration');
        outline-color: transparent;
    }

    .p-splitter-gutter-handle:focus-visible {
        box-shadow: dt('splitter.handle.focus.ring.shadow');
        outline: dt('splitter.handle.focus.ring.width') dt('splitter.handle.focus.ring.style') dt('splitter.handle.focus.ring.color');
        outline-offset: dt('splitter.handle.focus.ring.offset');
    }

    .p-splitter-horizontal.p-splitter-resizing {
        cursor: col-resize;
        user-select: none;
    }

    .p-splitter-vertical.p-splitter-resizing {
        cursor: row-resize;
        user-select: none;
    }

    .p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
        height: dt('splitter.handle.size');
        width: 100%;
    }

    .p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
        width: dt('splitter.handle.size');
        height: 100%;
    }

    .p-splitter-horizontal > .p-splitter-gutter {
        cursor: col-resize;
    }

    .p-splitter-vertical > .p-splitter-gutter {
        cursor: row-resize;
    }

    .p-splitterpanel {
        flex-grow: 1;
        overflow: hidden;
    }

    .p-splitterpanel-nested {
        display: flex;
    }

    .p-splitterpanel .p-splitter {
        flex-grow: 1;
        border: 0 none;
    }
`,X={root:function(e){var n=e.props;return["p-splitter p-component","p-splitter-"+n.layout]},gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},W=w.extend({name:"splitter",style:V,classes:X}),Y={name:"BaseSplitter",extends:M,props:{layout:{type:String,default:"horizontal"},gutterSize:{type:Number,default:4},stateKey:{type:String,default:null},stateStorage:{type:String,default:"session"},step:{type:Number,default:5}},style:W,provide:function(){return{$pcSplitter:this,$parentInstance:this}}};function f(t){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(t)}function L(t,e,n){return(e=J(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function J(t){var e=q(t,"string");return f(e)=="symbol"?e:e+""}function q(t,e){if(f(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(f(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function T(t){return te(t)||ee(t)||Z(t)||Q()}function Q(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(t,e){if(t){if(typeof t=="string")return b(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}function ee(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function te(t){if(Array.isArray(t))return b(t)}function b(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var I={name:"Splitter",extends:Y,inheritAttrs:!1,emits:["resizestart","resizeend","resize"],dragging:!1,mouseMoveListener:null,mouseUpListener:null,touchMoveListener:null,touchEndListener:null,size:null,gutterElement:null,startPos:null,prevPanelElement:null,nextPanelElement:null,nextPanelSize:null,prevPanelSize:null,panelSizes:null,prevPanelIndex:null,timer:null,data:function(){return{prevSize:null}},mounted:function(){this.initializePanels()},beforeUnmount:function(){this.clear(),this.unbindMouseListeners()},methods:{isSplitterPanel:function(e){return e.type.name==="SplitterPanel"},initializePanels:function(){var e=this;if(this.panels&&this.panels.length){var n=!1;if(this.isStateful()&&(n=this.restoreState()),!n){var r=T(this.$el.children).filter(function(i){return i.getAttribute("data-pc-name")==="splitterpanel"}),s=[];this.panels.map(function(i,a){var o=i.props&&K(i.props.size)?i.props.size:null,u=o??100/e.panels.length;s[a]=u,r[a].style.flexBasis="calc("+u+"% - "+(e.panels.length-1)*e.gutterSize+"px)"}),this.panelSizes=s,this.prevSize=parseFloat(s[0]).toFixed(4)}}},onResizeStart:function(e,n,r){this.gutterElement=e.currentTarget||e.target.parentElement,this.size=this.horizontal?N(this.$el):D(this.$el),r||(this.dragging=!0,this.startPos=this.layout==="horizontal"?e.pageX||e.changedTouches[0].pageX:e.pageY||e.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,r?(this.prevPanelSize=this.horizontal?m(this.prevPanelElement,!0):g(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal?m(this.nextPanelElement,!0):g(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal?m(this.prevPanelElement,!0):g(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal?m(this.nextPanelElement,!0):g(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=n,this.$emit("resizestart",{originalEvent:e,sizes:this.panelSizes}),this.$refs.gutter[n].setAttribute("data-p-gutter-resizing",!0),this.$el.setAttribute("data-p-resizing",!0)},onResize:function(e,n,r){var s,i,a;r?this.horizontal?(i=100*(this.prevPanelSize+n)/this.size,a=100*(this.nextPanelSize-n)/this.size):(i=100*(this.prevPanelSize-n)/this.size,a=100*(this.nextPanelSize+n)/this.size):(this.horizontal?G(this.$el)?s=(this.startPos-e.pageX)*100/this.size:s=(e.pageX-this.startPos)*100/this.size:s=(e.pageY-this.startPos)*100/this.size,i=this.prevPanelSize+s,a=this.nextPanelSize-s),this.validateResize(i,a)||(i=Math.min(Math.max(this.prevPanelMinSize,i),100-this.nextPanelMinSize),a=Math.min(Math.max(this.nextPanelMinSize,a),100-this.prevPanelMinSize)),this.prevPanelElement.style.flexBasis="calc("+i+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+a+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.panelSizes[this.prevPanelIndex]=i,this.panelSizes[this.prevPanelIndex+1]=a,this.prevSize=parseFloat(i).toFixed(4),this.$emit("resize",{originalEvent:e,sizes:this.panelSizes})},onResizeEnd:function(e){this.isStateful()&&this.saveState(),this.$emit("resizeend",{originalEvent:e,sizes:this.panelSizes}),this.$refs.gutter.forEach(function(n){return n.setAttribute("data-p-gutter-resizing",!1)}),this.$el.setAttribute("data-p-resizing",!1),this.clear()},repeat:function(e,n,r){this.onResizeStart(e,n,!0),this.onResize(e,r,!0)},setTimer:function(e,n,r){var s=this;this.timer||(this.timer=setInterval(function(){s.repeat(e,n,r)},40))},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},onGutterKeyUp:function(){this.clearTimer(),this.onResizeEnd()},onGutterKeyDown:function(e,n){switch(e.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(e,n,this.step*-1),e.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(e,n,this.step),e.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(e,n,this.step*-1),e.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(e,n,this.step),e.preventDefault();break}}},onGutterMouseDown:function(e,n){this.onResizeStart(e,n),this.bindMouseListeners()},onGutterTouchStart:function(e,n){this.onResizeStart(e,n),this.bindTouchListeners(),e.preventDefault()},onGutterTouchMove:function(e){this.onResize(e),e.preventDefault()},onGutterTouchEnd:function(e){this.onResizeEnd(e),this.unbindTouchListeners(),e.preventDefault()},bindMouseListeners:function(){var e=this;this.mouseMoveListener||(this.mouseMoveListener=function(n){return e.onResize(n)},document.addEventListener("mousemove",this.mouseMoveListener)),this.mouseUpListener||(this.mouseUpListener=function(n){e.onResizeEnd(n),e.unbindMouseListeners()},document.addEventListener("mouseup",this.mouseUpListener))},bindTouchListeners:function(){var e=this;this.touchMoveListener||(this.touchMoveListener=function(n){return e.onResize(n.changedTouches[0])},document.addEventListener("touchmove",this.touchMoveListener)),this.touchEndListener||(this.touchEndListener=function(n){e.resizeEnd(n),e.unbindTouchListeners()},document.addEventListener("touchend",this.touchEndListener))},validateResize:function(e,n){return!(e>100||e<0||n>100||n<0||this.prevPanelMinSize>e||this.nextPanelMinSize>n)},unbindMouseListeners:function(){this.mouseMoveListener&&(document.removeEventListener("mousemove",this.mouseMoveListener),this.mouseMoveListener=null),this.mouseUpListener&&(document.removeEventListener("mouseup",this.mouseUpListener),this.mouseUpListener=null)},unbindTouchListeners:function(){this.touchMoveListener&&(document.removeEventListener("touchmove",this.touchMoveListener),this.touchMoveListener=null),this.touchEndListener&&(document.removeEventListener("touchend",this.touchEndListener),this.touchEndListener=null)},clear:function(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null},isStateful:function(){return this.stateKey!=null},getStorage:function(){switch(this.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}},saveState:function(){R(this.panelSizes)&&this.getStorage().setItem(this.stateKey,JSON.stringify(this.panelSizes))},restoreState:function(){var e=this,n=this.getStorage(),r=n.getItem(this.stateKey);if(r){this.panelSizes=JSON.parse(r);var s=T(this.$el.children).filter(function(i){return i.getAttribute("data-pc-name")==="splitterpanel"});return s.forEach(function(i,a){i.style.flexBasis="calc("+e.panelSizes[a]+"% - "+(e.panels.length-1)*e.gutterSize+"px)"}),!0}return!1},resetState:function(){this.initializePanels()}},computed:{panels:function(){var e=this,n=[];return this.$slots.default().forEach(function(r){e.isSplitterPanel(r)?n.push(r):r.children instanceof Array&&r.children.forEach(function(s){e.isSplitterPanel(s)&&n.push(s)})}),n},gutterStyle:function(){return this.horizontal?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}},horizontal:function(){return this.layout==="horizontal"},getPTOptions:function(){var e;return{context:{nested:(e=this.$parentInstance)===null||e===void 0?void 0:e.nestedState}}},prevPanelMinSize:function(){var e=P(this.panels[this.prevPanelIndex],"minSize");return this.panels[this.prevPanelIndex].props&&e?e:0},nextPanelMinSize:function(){var e=P(this.panels[this.prevPanelIndex+1],"minSize");return this.panels[this.prevPanelIndex+1].props&&e?e:0},dataP:function(){var e;return k(L(L({},this.layout,this.layout),"nested",((e=this.$parentInstance)===null||e===void 0?void 0:e.nestedState)!=null))}}},ne=["data-p"],ie=["onMousedown","onTouchstart","onTouchmove","onTouchend","data-p"],re=["aria-orientation","aria-valuenow","onKeydown","data-p"];function se(t,e,n,r,s,i){return l(),p("div",v({class:t.cx("root"),"data-p-resizing":!1,"data-p":i.dataP},t.ptmi("root",i.getPTOptions)),[(l(!0),p(d,null,z(i.panels,function(a,o){return l(),p(d,{key:o},[(l(),S(B(a),{tabindex:"-1"})),o!==i.panels.length-1?(l(),p("div",v({key:0,ref_for:!0,ref:"gutter",class:t.cx("gutter"),role:"separator",tabindex:"-1",onMousedown:function(h){return i.onGutterMouseDown(h,o)},onTouchstart:function(h){return i.onGutterTouchStart(h,o)},onTouchmove:function(h){return i.onGutterTouchMove(h,o)},onTouchend:function(h){return i.onGutterTouchEnd(h,o)},"data-p-gutter-resizing":!1,"data-p":i.dataP},{ref_for:!0},t.ptm("gutter")),[c("div",v({class:t.cx("gutterHandle"),tabindex:"0",style:[i.gutterStyle],"aria-orientation":t.layout,"aria-valuenow":s.prevSize,onKeyup:e[0]||(e[0]=function(){return i.onGutterKeyUp&&i.onGutterKeyUp.apply(i,arguments)}),onKeydown:function(h){return i.onGutterKeyDown(h,o)},"data-p":i.dataP},{ref_for:!0},t.ptm("gutterHandle")),null,16,re)],16,ie)):U("",!0)],64)}),128))],16,ne)}I.render=se;var ae={root:function(e){var n=e.instance;return["p-splitterpanel",{"p-splitterpanel-nested":n.isNested}]}},oe=w.extend({name:"splitterpanel",classes:ae}),le={name:"BaseSplitterPanel",extends:M,props:{size:{type:Number,default:null},minSize:{type:Number,default:null}},style:oe,provide:function(){return{$pcSplitterPanel:this,$parentInstance:this}}},A={name:"SplitterPanel",extends:le,inheritAttrs:!1,data:function(){return{nestedState:null}},computed:{isNested:function(){var e=this;return this.$slots.default().some(function(n){return e.nestedState=n.type.name==="Splitter"?!0:null,e.nestedState})},getPTOptions:function(){return{context:{nested:this.isNested}}}}};function ue(t,e,n,r,s,i){return l(),p("div",v({ref:"container",class:t.cx("root")},t.ptmi("root",i.getPTOptions)),[O(t.$slots,"default")],16)}A.render=ue;const he={style:{"margin-top":"0"}},pe={style:{"margin-top":"auto"}},ce=_({__name:"ListItem",props:{item:{}},setup(t){return(e,n)=>(l(),p(d,null,[c("h1",he,x(e.item.t),1),c("article",null,x(e.item.b),1),c("div",pe,[$(y(H)),n[0]||(n[0]=j('<footer style="display:flex;"><div style="margin-right:4px;">Company</div> · <div style="margin-right:4px;margin-left:4px;">Nick</div> · <div style="margin-left:4px;">Channel</div><div style="margin-left:auto;">Date</div></footer>',1))])],64))}}),de={class:"card"},ge=_({__name:"Index",setup(t){const e=[{t:"이별 3갤 접어드는데도 힘들어",b:"맘이 식었대 언제부터였는지모르겠어 상대가 전문직이었는데 첨엔 모르고 만났고 늘 그에 비하면 부족하고 모자란 나라서 상대가 날 연애로만 생각하고 만날수도있겠다 생각하며 나도 첫연애라 크게 다치고싶지않아서 맘 크게 안열려했는데  연애가 길어질수록 나도 모르게 맘이 커져서 너무 의지를 했고 가족처럼 여겼나봐 헤어지자는데 정말 살점이 떨어지는거같았어 처음엔 모든게 내잘못같아서 시시티비 돌려보듯 날 계속 검열하고… 내가 덜서운하겠다고 덜 의존하겠다했는데 내가 잘못한게없대 난 너무 좋은사람이래 그게 더 아파  잘못한게있더라면 고쳐보겠는데 잘못"},{t:"연락한지",b:"3주됐고 3번 만났어 분위기 좋았고 재밌었는데 연락할 때 항상 보고식이야..뭐하는중~이런식으로 출퇴근 잘했냐 끼니는 먹었냐 이런 질문이 별로 없는데 이거 쫑난거? 나도 점점 흥미가 떨어지고 그러네ㅠ참고로 여자야"},{t:"얼굴 잘생긴 건 필요없으니까 성격 좋고 연락 잘되고 다정하고 좀 알콩달콩 한 일년 연애하다 결혼하고 싶다",b:"와 다들 결혼 어캐햇냐 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ 아 물론 나이는 90년생 위로 넘어가면 안되고 키는 180 이상이어야하고 배 안나오고 여사친 없고 돌싱 안되고 술 유흥 안좋아해야함"},{t:"이런 사람 고칠 수 있어?",b:"20대 후반 남자인데 가족끼리 엄청 화목함 근데 엄마가 간섭을 너무 많이 하는 바람에 연애사실을 한 번도 알린적이 없어서 모솔인줄 아신대 누나도 남친 있는거 몇번 들켰는데 꼬치꼬치 캐묻고 헤어지라고 난리치다가, 누나 남친이 선물을 갖다바쳤더니 그래도 놈팽이가 아닌 이름으로 불러주기 시작했대  내가 차로 집 앞 픽업갈때도 가족들이 보면 큰일난다고 멀리로 데리러오라고 하더라고 크리스마스나 연휴때도 무조건 가족들이랑 시간보내야지 안그러면 부모님 서운해하신다고 하네  가정이 화목하면 원래 이러는건지 아니면 그냥 마마보이인건지 모르겠음ㅋㅋㅋ"},{t:"외모 별로라 생각했던 여자가 예뻐 보였던 터닝포인트",b:"뭐가 있었어?"},{t:"하루에 2~3시간밖에 못자면",b:"한방에 훅갈 수 있는 거야?"}],n=C(()=>e.reduce((r,s)=>(r.at(-1).push(s),r.at(-1).length==2&&r.push([]),r),[[]]));return(r,s)=>(l(),p("main",null,[s[0]||(s[0]=F(" 검색어 todo ")),c("div",de,[(l(!0),p(d,null,z(n.value,(i,a)=>(l(),S(y(I),{key:a,style:{"margin-bottom":"4px"}},{default:E(()=>[(l(!0),p(d,null,z(i,(o,u)=>(l(),S(y(A),{key:u,class:"items-center justify-center",style:{padding:"8px",display:"flex","flex-direction":"column"}},{default:E(()=>[$(ce,{item:o},null,8,["item"])]),_:2},1024))),128))]),_:2},1024))),128))])]))}});export{ge as default};
