import{B as E,s as L,c as u,o as l,a as A,m as h,r as I,i as K,b as O,g as U,d as B,e as g,f as y,h as C,F as f,j as b,k as S,l as F,n as c,p as D,t as T,q as R,u as H,v as P,w as V,x as X,y as $}from"./index-8HWNnA5-.js";function w(...t){if(t){let e=[];for(let n=0;n<t.length;n++){const i=t[n];if(!i)continue;const s=typeof i;if(s==="string"||s==="number")e.push(i);else if(s==="object"){const r=Array.isArray(i)?[w(...i)]:Object.entries(i).map(([o,a])=>a?o:void 0);e=r.length?e.concat(r.filter(o=>!!o)):e}}return e.join(" ").trim()}}function M(t,e){if(t){var n=t.props;if(n){var i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),s=Object.prototype.hasOwnProperty.call(n,i)?i:e;return t.type.extends.props[e].type===Boolean&&n[s]===""?!0:n[s]}}return null}var W=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`,Y={root:function(e){var n=e.props;return{justifyContent:n.layout==="horizontal"?n.align==="center"||n.align===null?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null,alignItems:n.layout==="vertical"?n.align==="center"||n.align===null?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null}}},J={root:function(e){var n=e.props;return["p-divider p-component","p-divider-"+n.layout,"p-divider-"+n.type,{"p-divider-left":n.layout==="horizontal"&&(!n.align||n.align==="left")},{"p-divider-center":n.layout==="horizontal"&&n.align==="center"},{"p-divider-right":n.layout==="horizontal"&&n.align==="right"},{"p-divider-top":n.layout==="vertical"&&n.align==="top"},{"p-divider-center":n.layout==="vertical"&&(!n.align||n.align==="center")},{"p-divider-bottom":n.layout==="vertical"&&n.align==="bottom"}]},content:"p-divider-content"},q=E.extend({name:"divider",style:W,classes:J,inlineStyles:Y}),Z={name:"BaseDivider",extends:L,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:q,provide:function(){return{$pcDivider:this,$parentInstance:this}}};function v(t){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(t)}function z(t,e,n){return(e=Q(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Q(t){var e=ee(t,"string");return v(e)=="symbol"?e:e+""}function ee(t,e){if(v(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(v(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var G={name:"Divider",extends:Z,inheritAttrs:!1,computed:{dataP:function(){return w(z(z(z({},this.align,this.align),this.layout,this.layout),this.type,this.type))}}},te=["aria-orientation","data-p"],ne=["data-p"];function ie(t,e,n,i,s,r){return l(),u("div",h({class:t.cx("root"),style:t.sx("root"),role:"separator","aria-orientation":t.layout,"data-p":r.dataP},t.ptmi("root")),[t.$slots.default?(l(),u("div",h({key:0,class:t.cx("content"),"data-p":r.dataP},t.ptm("content")),[I(t.$slots,"default")],16,ne)):A("",!0)],16,te)}G.render=ie;var re=`
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
`,se={root:function(e){var n=e.props;return["p-splitter p-component","p-splitter-"+n.layout]},gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},oe=E.extend({name:"splitter",style:re,classes:se}),ae={name:"BaseSplitter",extends:L,props:{layout:{type:String,default:"horizontal"},gutterSize:{type:Number,default:4},stateKey:{type:String,default:null},stateStorage:{type:String,default:"session"},step:{type:Number,default:5}},style:oe,provide:function(){return{$pcSplitter:this,$parentInstance:this}}};function m(t){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(t)}function _(t,e,n){return(e=le(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function le(t){var e=ue(t,"string");return m(e)=="symbol"?e:e+""}function ue(t,e){if(m(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(m(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function k(t){return ce(t)||he(t)||pe(t)||de()}function de(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(t,e){if(t){if(typeof t=="string")return x(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}function he(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ce(t){if(Array.isArray(t))return x(t)}function x(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var N={name:"Splitter",extends:ae,inheritAttrs:!1,emits:["resizestart","resizeend","resize"],dragging:!1,mouseMoveListener:null,mouseUpListener:null,touchMoveListener:null,touchEndListener:null,size:null,gutterElement:null,startPos:null,prevPanelElement:null,nextPanelElement:null,nextPanelSize:null,prevPanelSize:null,panelSizes:null,prevPanelIndex:null,timer:null,data:function(){return{prevSize:null}},mounted:function(){this.initializePanels()},beforeUnmount:function(){this.clear(),this.unbindMouseListeners()},methods:{isSplitterPanel:function(e){return e.type.name==="SplitterPanel"},initializePanels:function(){var e=this;if(this.panels&&this.panels.length){var n=!1;if(this.isStateful()&&(n=this.restoreState()),!n){var i=k(this.$el.children).filter(function(r){return r.getAttribute("data-pc-name")==="splitterpanel"}),s=[];this.panels.map(function(r,o){var a=r.props&&C(r.props.size)?r.props.size:null,d=a??100/e.panels.length;s[o]=d,i[o].style.flexBasis="calc("+d+"% - "+(e.panels.length-1)*e.gutterSize+"px)"}),this.panelSizes=s,this.prevSize=parseFloat(s[0]).toFixed(4)}}},onResizeStart:function(e,n,i){this.gutterElement=e.currentTarget||e.target.parentElement,this.size=this.horizontal?U(this.$el):B(this.$el),i||(this.dragging=!0,this.startPos=this.layout==="horizontal"?e.pageX||e.changedTouches[0].pageX:e.pageY||e.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,i?(this.prevPanelSize=this.horizontal?g(this.prevPanelElement,!0):y(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal?g(this.nextPanelElement,!0):y(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal?g(this.prevPanelElement,!0):y(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal?g(this.nextPanelElement,!0):y(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=n,this.$emit("resizestart",{originalEvent:e,sizes:this.panelSizes}),this.$refs.gutter[n].setAttribute("data-p-gutter-resizing",!0),this.$el.setAttribute("data-p-resizing",!0)},onResize:function(e,n,i){var s,r,o;i?this.horizontal?(r=100*(this.prevPanelSize+n)/this.size,o=100*(this.nextPanelSize-n)/this.size):(r=100*(this.prevPanelSize-n)/this.size,o=100*(this.nextPanelSize+n)/this.size):(this.horizontal?O(this.$el)?s=(this.startPos-e.pageX)*100/this.size:s=(e.pageX-this.startPos)*100/this.size:s=(e.pageY-this.startPos)*100/this.size,r=this.prevPanelSize+s,o=this.nextPanelSize-s),this.validateResize(r,o)||(r=Math.min(Math.max(this.prevPanelMinSize,r),100-this.nextPanelMinSize),o=Math.min(Math.max(this.nextPanelMinSize,o),100-this.prevPanelMinSize)),this.prevPanelElement.style.flexBasis="calc("+r+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+o+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.panelSizes[this.prevPanelIndex]=r,this.panelSizes[this.prevPanelIndex+1]=o,this.prevSize=parseFloat(r).toFixed(4),this.$emit("resize",{originalEvent:e,sizes:this.panelSizes})},onResizeEnd:function(e){this.isStateful()&&this.saveState(),this.$emit("resizeend",{originalEvent:e,sizes:this.panelSizes}),this.$refs.gutter.forEach(function(n){return n.setAttribute("data-p-gutter-resizing",!1)}),this.$el.setAttribute("data-p-resizing",!1),this.clear()},repeat:function(e,n,i){this.onResizeStart(e,n,!0),this.onResize(e,i,!0)},setTimer:function(e,n,i){var s=this;this.timer||(this.timer=setInterval(function(){s.repeat(e,n,i)},40))},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},onGutterKeyUp:function(){this.clearTimer(),this.onResizeEnd()},onGutterKeyDown:function(e,n){switch(e.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(e,n,this.step*-1),e.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(e,n,this.step),e.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(e,n,this.step*-1),e.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(e,n,this.step),e.preventDefault();break}}},onGutterMouseDown:function(e,n){this.onResizeStart(e,n),this.bindMouseListeners()},onGutterTouchStart:function(e,n){this.onResizeStart(e,n),this.bindTouchListeners(),e.preventDefault()},onGutterTouchMove:function(e){this.onResize(e),e.preventDefault()},onGutterTouchEnd:function(e){this.onResizeEnd(e),this.unbindTouchListeners(),e.preventDefault()},bindMouseListeners:function(){var e=this;this.mouseMoveListener||(this.mouseMoveListener=function(n){return e.onResize(n)},document.addEventListener("mousemove",this.mouseMoveListener)),this.mouseUpListener||(this.mouseUpListener=function(n){e.onResizeEnd(n),e.unbindMouseListeners()},document.addEventListener("mouseup",this.mouseUpListener))},bindTouchListeners:function(){var e=this;this.touchMoveListener||(this.touchMoveListener=function(n){return e.onResize(n.changedTouches[0])},document.addEventListener("touchmove",this.touchMoveListener)),this.touchEndListener||(this.touchEndListener=function(n){e.resizeEnd(n),e.unbindTouchListeners()},document.addEventListener("touchend",this.touchEndListener))},validateResize:function(e,n){return!(e>100||e<0||n>100||n<0||this.prevPanelMinSize>e||this.nextPanelMinSize>n)},unbindMouseListeners:function(){this.mouseMoveListener&&(document.removeEventListener("mousemove",this.mouseMoveListener),this.mouseMoveListener=null),this.mouseUpListener&&(document.removeEventListener("mouseup",this.mouseUpListener),this.mouseUpListener=null)},unbindTouchListeners:function(){this.touchMoveListener&&(document.removeEventListener("touchmove",this.touchMoveListener),this.touchMoveListener=null),this.touchEndListener&&(document.removeEventListener("touchend",this.touchEndListener),this.touchEndListener=null)},clear:function(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null},isStateful:function(){return this.stateKey!=null},getStorage:function(){switch(this.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}},saveState:function(){K(this.panelSizes)&&this.getStorage().setItem(this.stateKey,JSON.stringify(this.panelSizes))},restoreState:function(){var e=this,n=this.getStorage(),i=n.getItem(this.stateKey);if(i){this.panelSizes=JSON.parse(i);var s=k(this.$el.children).filter(function(r){return r.getAttribute("data-pc-name")==="splitterpanel"});return s.forEach(function(r,o){r.style.flexBasis="calc("+e.panelSizes[o]+"% - "+(e.panels.length-1)*e.gutterSize+"px)"}),!0}return!1},resetState:function(){this.initializePanels()}},computed:{panels:function(){var e=this,n=[];return this.$slots.default().forEach(function(i){e.isSplitterPanel(i)?n.push(i):i.children instanceof Array&&i.children.forEach(function(s){e.isSplitterPanel(s)&&n.push(s)})}),n},gutterStyle:function(){return this.horizontal?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}},horizontal:function(){return this.layout==="horizontal"},getPTOptions:function(){var e;return{context:{nested:(e=this.$parentInstance)===null||e===void 0?void 0:e.nestedState}}},prevPanelMinSize:function(){var e=M(this.panels[this.prevPanelIndex],"minSize");return this.panels[this.prevPanelIndex].props&&e?e:0},nextPanelMinSize:function(){var e=M(this.panels[this.prevPanelIndex+1],"minSize");return this.panels[this.prevPanelIndex+1].props&&e?e:0},dataP:function(){var e;return w(_(_({},this.layout,this.layout),"nested",((e=this.$parentInstance)===null||e===void 0?void 0:e.nestedState)!=null))}}},fe=["data-p"],ve=["onMousedown","onTouchstart","onTouchmove","onTouchend","data-p"],me=["aria-orientation","aria-valuenow","onKeydown","data-p"];function ge(t,e,n,i,s,r){return l(),u("div",h({class:t.cx("root"),"data-p-resizing":!1,"data-p":r.dataP},t.ptmi("root",r.getPTOptions)),[(l(!0),u(f,null,b(r.panels,function(o,a){return l(),u(f,{key:a},[(l(),S(F(o),{tabindex:"-1"})),a!==r.panels.length-1?(l(),u("div",h({key:0,ref_for:!0,ref:"gutter",class:t.cx("gutter"),role:"separator",tabindex:"-1",onMousedown:function(p){return r.onGutterMouseDown(p,a)},onTouchstart:function(p){return r.onGutterTouchStart(p,a)},onTouchmove:function(p){return r.onGutterTouchMove(p,a)},onTouchend:function(p){return r.onGutterTouchEnd(p,a)},"data-p-gutter-resizing":!1,"data-p":r.dataP},{ref_for:!0},t.ptm("gutter")),[c("div",h({class:t.cx("gutterHandle"),tabindex:"0",style:[r.gutterStyle],"aria-orientation":t.layout,"aria-valuenow":s.prevSize,onKeyup:e[0]||(e[0]=function(){return r.onGutterKeyUp&&r.onGutterKeyUp.apply(r,arguments)}),onKeydown:function(p){return r.onGutterKeyDown(p,a)},"data-p":r.dataP},{ref_for:!0},t.ptm("gutterHandle")),null,16,me)],16,ve)):A("",!0)],64)}),128))],16,fe)}N.render=ge;var ye={root:function(e){var n=e.instance;return["p-splitterpanel",{"p-splitterpanel-nested":n.isNested}]}},ze=E.extend({name:"splitterpanel",classes:ye}),be={name:"BaseSplitterPanel",extends:L,props:{size:{type:Number,default:null},minSize:{type:Number,default:null}},style:ze,provide:function(){return{$pcSplitterPanel:this,$parentInstance:this}}},j={name:"SplitterPanel",extends:be,inheritAttrs:!1,data:function(){return{nestedState:null}},computed:{isNested:function(){var e=this;return this.$slots.default().some(function(n){return e.nestedState=n.type.name==="Splitter"?!0:null,e.nestedState})},getPTOptions:function(){return{context:{nested:this.isNested}}}}};function Se(t,e,n,i,s,r){return l(),u("div",h({ref:"container",class:t.cx("root")},t.ptmi("root",r.getPTOptions)),[I(t.$slots,"default")],16)}j.render=Se;const Pe={style:{"margin-top":"0"}},xe={style:{"margin-top":"auto"}},Ee=D({__name:"ListItem",props:{item:{}},setup(t){return(e,n)=>(l(),u(f,null,[c("h1",Pe,T(e.item.t),1),c("article",null,T(e.item.b),1),c("div",xe,[R(P(G)),n[0]||(n[0]=H('<footer style="display:flex;"><div style="margin-right:4px;">Company</div> · <div style="margin-right:4px;margin-left:4px;">Nick</div> · <div style="margin-left:4px;">Channel</div><div style="margin-left:auto;">Date</div></footer>',1))])],64))}}),Le={class:"card"},Te=D({__name:"Index",setup(t){const e=[{t:"이별 3갤 접어드는데도 힘들어",b:"맘이 식었대 언제부터였는지모르겠어 상대가 전문직이었는데 첨엔 모르고 만났고 늘 그에 비하면 부족하고 모자란 나라서 상대가 날 연애로만 생각하고 만날수도있겠다 생각하며 나도 첫연애라 크게 다치고싶지않아서 맘 크게 안열려했는데  연애가 길어질수록 나도 모르게 맘이 커져서 너무 의지를 했고 가족처럼 여겼나봐 헤어지자는데 정말 살점이 떨어지는거같았어 처음엔 모든게 내잘못같아서 시시티비 돌려보듯 날 계속 검열하고… 내가 덜서운하겠다고 덜 의존하겠다했는데 내가 잘못한게없대 난 너무 좋은사람이래 그게 더 아파  잘못한게있더라면 고쳐보겠는데 잘못"},{t:"연락한지",b:"3주됐고 3번 만났어 분위기 좋았고 재밌었는데 연락할 때 항상 보고식이야..뭐하는중~이런식으로 출퇴근 잘했냐 끼니는 먹었냐 이런 질문이 별로 없는데 이거 쫑난거? 나도 점점 흥미가 떨어지고 그러네ㅠ참고로 여자야"},{t:"얼굴 잘생긴 건 필요없으니까 성격 좋고 연락 잘되고 다정하고 좀 알콩달콩 한 일년 연애하다 결혼하고 싶다",b:"와 다들 결혼 어캐햇냐 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ 아 물론 나이는 90년생 위로 넘어가면 안되고 키는 180 이상이어야하고 배 안나오고 여사친 없고 돌싱 안되고 술 유흥 안좋아해야함"},{t:"이런 사람 고칠 수 있어?",b:"20대 후반 남자인데 가족끼리 엄청 화목함 근데 엄마가 간섭을 너무 많이 하는 바람에 연애사실을 한 번도 알린적이 없어서 모솔인줄 아신대 누나도 남친 있는거 몇번 들켰는데 꼬치꼬치 캐묻고 헤어지라고 난리치다가, 누나 남친이 선물을 갖다바쳤더니 그래도 놈팽이가 아닌 이름으로 불러주기 시작했대  내가 차로 집 앞 픽업갈때도 가족들이 보면 큰일난다고 멀리로 데리러오라고 하더라고 크리스마스나 연휴때도 무조건 가족들이랑 시간보내야지 안그러면 부모님 서운해하신다고 하네  가정이 화목하면 원래 이러는건지 아니면 그냥 마마보이인건지 모르겠음ㅋㅋㅋ"},{t:"외모 별로라 생각했던 여자가 예뻐 보였던 터닝포인트",b:"뭐가 있었어?"},{t:"하루에 2~3시간밖에 못자면",b:"한방에 훅갈 수 있는 거야?"}],n=V(()=>e.reduce((i,s)=>(i.at(-1).push(s),i.at(-1).length==2&&i.push([]),i),[[]]));return(i,s)=>(l(),u("main",null,[s[0]||(s[0]=X(" 검색어 todo ")),c("div",Le,[(l(!0),u(f,null,b(n.value,(r,o)=>(l(),S(P(N),{key:o,style:{"margin-bottom":"4px"}},{default:$(()=>[(l(!0),u(f,null,b(r,(a,d)=>(l(),S(P(j),{key:d,class:"items-center justify-center",style:{padding:"8px",display:"flex","flex-direction":"column"}},{default:$(()=>[R(Ee,{item:a},null,8,["item"])]),_:2},1024))),128))]),_:2},1024))),128))])]))}});export{Te as default};
