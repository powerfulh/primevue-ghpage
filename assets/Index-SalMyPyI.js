import{B as te,E as ne,R as ie,an as oe,s as re,O as E,af as le,G as se,H as ae,aW as de,K as ue,I as ce,a9 as R,aX as pe,at as ve,Z as x,J as fe,T as ye,P as be,k as he,o as v,C,v as k,U as me,n as I,Q as A,l as $,j as y,q as U,t as q,aY as H,aZ as M,F as S,p as s,x as h,r as Q,u as m,w as f,a0 as Z,S as g,_ as Y,z as O,A as N,aU as ge}from"./index-mhY6HLVb.js";import{s as V}from"./index-Mqc1Sbvo.js";var Ce=`
    .p-popover {
        margin-block-start: dt('popover.gutter');
        background: dt('popover.background');
        color: dt('popover.color');
        border: 1px solid dt('popover.border.color');
        border-radius: dt('popover.border.radius');
        box-shadow: dt('popover.shadow');
    }

    .p-popover-content {
        padding: dt('popover.content.padding');
    }

    .p-popover-flipped {
        margin-block-start: calc(dt('popover.gutter') * -1);
        margin-block-end: dt('popover.gutter');
    }

    .p-popover-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-popover-leave-to {
        opacity: 0;
    }

    .p-popover-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-popover-leave-active {
        transition: opacity 0.1s linear;
    }

    .p-popover:after,
    .p-popover:before {
        bottom: 100%;
        left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-popover:after {
        border-width: calc(dt('popover.gutter') - 2px);
        margin-left: calc(-1 * (dt('popover.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.background');
    }

    .p-popover:before {
        border-width: dt('popover.gutter');
        margin-left: calc(-1 * dt('popover.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.border.color');
    }

    .p-popover-flipped:after,
    .p-popover-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-popover.p-popover-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('popover.background');
    }

    .p-popover.p-popover-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('popover.border.color');
    }
`,ke={root:"p-popover p-component",content:"p-popover-content"},Le=te.extend({name:"popover",style:Ce,classes:ke}),we={name:"BasePopover",extends:re,props:{dismissable:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null},closeOnEscape:{type:Boolean,default:!0}},style:Le,provide:function(){return{$pcPopover:this,$parentInstance:this}}},G={name:"Popover",extends:we,inheritAttrs:!1,emits:["show","hide"],data:function(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler:function(e){e?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,documentKeydownListener:null,beforeUnmount:function(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&x.clear(this.container),this.overlayEventListener&&(E.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{toggle:function(e,i){this.visible?this.hide():this.show(e,i)},show:function(e,i){this.visible=!0,this.eventTarget=e.currentTarget,this.target=i||e.currentTarget},hide:function(){this.visible=!1},onContentClick:function(){this.selfClick=!0},onEnter:function(e){var i=this;fe(e,{position:"absolute",top:"0"}),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&x.set("overlay",e,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=function(r){i.container.contains(r.target)&&(i.selfClick=!0)},this.focus(),E.on("overlay-click",this.overlayEventListener),this.$emit("show"),this.closeOnEscape&&this.bindDocumentKeyDownListener()},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.unbindDocumentKeyDownListener(),E.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&x.clear(e)},alignOverlay:function(){ce(this.container,this.target,!1);var e=R(this.container),i=R(this.target),r=0;e.left<i.left&&(r=i.left-e.left),this.container.style.setProperty(pe("popover.arrow.left").name,"".concat(r,"px")),e.top<i.top&&(this.container.setAttribute("data-p-popover-flipped","true"),!this.isUnstyled&&ve(this.container,"p-popover-flipped"))},onContentKeydown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.hide(),ue(this.target))},onButtonKeydown:function(e){switch(e.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":e.preventDefault()}},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.visible=!1)},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var e=this;!this.outsideClickListener&&de()&&(this.outsideClickListener=function(i){e.visible&&!e.selfClick&&!e.isTargetClicked(i)&&(e.visible=!1),e.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new ae(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!se()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked:function(e){return this.eventTarget&&(this.eventTarget===e.target||this.eventTarget.contains(e.target))},containerRef:function(e){this.container=e},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",le(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var i="";for(var r in this.breakpoints)i+=`
                        @media screen and (max-width: `.concat(r,`) {
                            .p-popover[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[r],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=i}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick:function(e){E.emit("overlay-click",{originalEvent:e,target:this.target})}},directives:{focustrap:oe,ripple:ie},components:{Portal:ne}},Ee=["aria-modal"];function Oe(t,e,i,r,a,o){var d=ye("Portal"),n=be("focustrap");return v(),he(d,{appendTo:t.appendTo},{default:C(function(){return[k(me,I({name:"p-popover",onEnter:o.onEnter,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave},t.ptm("transition")),{default:C(function(){return[a.visible?A((v(),y("div",I({key:0,ref:o.containerRef,role:"dialog","aria-modal":a.visible,onClick:e[3]||(e[3]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),class:t.cx("root")},t.ptmi("root")),[t.$slots.container?U(t.$slots,"container",{key:0,closeCallback:o.hide,keydownCallback:function(b){return o.onButtonKeydown(b)}}):(v(),y("div",I({key:1,class:t.cx("content"),onClick:e[0]||(e[0]=function(){return o.onContentClick&&o.onContentClick.apply(o,arguments)}),onMousedown:e[1]||(e[1]=function(){return o.onContentClick&&o.onContentClick.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onContentKeydown&&o.onContentKeydown.apply(o,arguments)})},t.ptm("content")),[U(t.$slots,"default")],16))],16,Ee)),[[n]]):$("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])}G.render=Oe;const J=[{name:"oxygen",state:"gas",heatCapacity:.918,conductivity:1},{name:"carbon dioxide",state:"gas",heatCapacity:.844,conductivity:1},{name:"hydrogen",state:"gas",heatCapacity:14.3,conductivity:1},{name:"metal tile",state:"solid",heatCapacity:1,conductivity:5},{name:"wood tile",state:"solid",heatCapacity:1,conductivity:.5}].map(t=>({...t,heatCapacity:t.heatCapacity}));function j(t){return J.find(e=>e.name==t)}function Se(t,e,i){return t.direction=="u"&&e.up==i||t.direction=="d"&&e.down==i||t.direction=="l"&&e.left==i||t.direction=="r"&&e.right==i}function F(t){t.forEach((i,r)=>{if(i.deactivate)return;const a={up:r-4<0?void 0:t[r-4],down:t[r+4],left:r%4==0?void 0:t[r-1],right:r%4==3?void 0:t[r+1]};Object.keys(a).map(o=>a[o]).filter(o=>o&&o.deactivate!=!0).forEach(o=>{if(i.el.name==o.el.name&&Math.abs(i.g-o.g)>2){const[L,w]=[i,o].sort((z,K)=>z.g>K.g?1:-1);L.g++,w.g--,Se(i,a,o)&&(o.g++,i.g--)}const d=i.temper-o.temper;if(d<1)return;const u=(i.el.conductivity+o.el.conductivity)/2*d,b=-u/(i.g*i.el.heatCapacity),D=u/(o.g*o.el.heatCapacity);i.temper+=b,o.temper+=D})})}function De(){return J.map(t=>t.name)}const ze=["value","disabled"],Ke=["checked"],xe={style:{"font-size":"small"}},Ie=["disabled"],Me=["disabled"],Ae={class:"direction"},Be=q({__name:"TileDetail",props:H({tileList:{},currentCell:{},playing:{type:Boolean}},{temper:{},temperModifiers:{},g:{},gModifiers:{},dir:{},dirModifiers:{}}),emits:H(["change-el","change-activate"],["update:temper","update:g","update:dir"]),setup(t,{emit:e}){const i=M(t,"temper"),r=M(t,"g"),a=M(t,"dir"),o=e;return(d,n)=>(v(),y(S,null,[s("select",{value:d.tileList[d.currentCell].el.name,disabled:d.playing,style:{"font-size":"large"},onChange:n[0]||(n[0]=u=>o("change-el",u))},[(v(!0),y(S,null,Q(f(De)(),(u,b)=>(v(),y("option",{key:b},m(u),1))),128))],40,ze),s("input",{checked:d.tileList[d.currentCell].deactivate!=!0,type:"checkbox",style:{transform:"scale(2)",float:"right"},onChange:n[1]||(n[1]=u=>o("change-activate",u))},null,40,Ke),s("div",xe,[h(" CP: "+m(d.tileList[d.currentCell].el.heatCapacity)+" ",1),n[9]||(n[9]=s("br",null,null,-1)),h(" TC: "+m(d.tileList[d.currentCell].el.conductivity),1)]),n[15]||(n[15]=h(" Temper: ")),A(s("input",{"onUpdate:modelValue":n[2]||(n[2]=u=>i.value=u),type:"number",disabled:d.playing},null,8,Ie),[[Z,i.value]]),n[16]||(n[16]=s("br",null,null,-1)),n[17]||(n[17]=h(" Mass: ")),A(s("input",{"onUpdate:modelValue":n[3]||(n[3]=u=>r.value=u),type:"number",disabled:d.playing},null,8,Me),[[Z,r.value]]),s("div",Ae,[n[10]||(n[10]=s("div",{style:{position:"absolute","font-size":"large",left:"var(--p-popover-content-padding)"}},"Direction",-1)),n[11]||(n[11]=s("div",null,null,-1)),s("div",{class:g({active:a.value=="u"}),onClick:n[4]||(n[4]=u=>a.value="u")},"⬆",2),n[12]||(n[12]=s("div",null,null,-1)),s("div",{class:g({active:a.value=="l"}),onClick:n[5]||(n[5]=u=>a.value="l")},"⬅",2),s("div",{class:g({active:!a.value}),onClick:n[6]||(n[6]=u=>a.value="")},null,2),s("div",{class:g({active:a.value=="r"}),onClick:n[7]||(n[7]=u=>a.value="r")},"➡",2),n[13]||(n[13]=s("div",null,null,-1)),s("div",{class:g({active:a.value=="d"}),onClick:n[8]||(n[8]=u=>a.value="d")},"⬇",2),n[14]||(n[14]=s("div",null,null,-1))])],64))}}),Te=Y(Be,[["__scopeId","data-v-2e4f453a"]]),Pe={style:{display:"flex","flex-wrap":"wrap","justify-content":"center"}},Re=["onClick"],Ue=["disabled"],He=["disabled"],Ze=["disabled"],Ne=["disabled"],Ve=q({__name:"Index",setup(t){const e=O([]),i=O(!1),r=O(0);let a,o=!1,d=!1,n;const u=N(()=>e.value.map(l=>({...l,rgb:[(l.temper-50)*3,255-Math.abs(25-l.temper)*3,(25-l.temper)*3].map(D)}))),b=N(()=>e.value.some(l=>typeof l.temper!="number"||typeof l.g!="number"));function D(l){return l>255?255:l<0?0:l}function L(l=!1){o=l,clearInterval(a),i.value=!0,a=setInterval(()=>{d=!d,!(o==!1&&d)&&(F(e.value),r.value++)},250)}function w(){e.value.length=0;for(let l=0;l<16;l++)e.value.push({n:l,el:j("oxygen"),g:500,temper:25})}function z(){B(),r.value=0,w()}function K(){F(e.value),r.value++}function W({target:l}){e.value[n].el=j(l.value)}function X({target:l}){e.value[n].deactivate=l.checked!=!0}function B(){clearInterval(a),i.value=!1}w();const T=O();function _(l,p){n=p,T.value.toggle(l)}return(l,p)=>(v(),y("main",null,[k(f(V),null,{content:C(()=>[s("div",Pe,[(v(!0),y(S,null,Q(u.value,(c,P)=>(v(),y("div",{key:P,class:g(["tile",{deactivate:c.deactivate}]),style:ge(`background-color: rgb(${c.rgb[0]}, ${c.rgb[1]}, ${c.rgb[2]}); color: rgb(${255-c.rgb[0]}, ${255-c.rgb[1]}, ${255-c.rgb[2]})`),onClick:ee=>_(ee,P)},[c.deactivate!=!0?(v(),y(S,{key:0},[h(m(c.el.name)+" ",1),p[5]||(p[5]=s("br",null,null,-1)),h(" "+m(Number(c.temper).toFixed(1))+" 🌡 ",1),p[6]||(p[6]=s("br",null,null,-1)),h(" "+m(c.g)+"g ",1)],64)):$("",!0)],14,Re))),128))])]),_:1}),k(f(V),null,{title:C(()=>[h("Step: "+m(r.value),1)]),content:C(()=>[s("button",{disabled:b.value,onClick:p[0]||(p[0]=c=>L())},"▶",8,Ue),s("button",{disabled:b.value,onClick:p[1]||(p[1]=c=>L(!0))},"⏩",8,He),i.value?(v(),y("button",{key:0,disabled:b.value,onClick:B},"⏸",8,Ze)):(v(),y("button",{key:1,disabled:b.value,onClick:K},"👞",8,Ne)),s("button",{onClick:z},"🔄")]),_:1}),k(f(G),{ref_key:"popover",ref:T},{default:C(()=>[k(Te,{temper:e.value[f(n)].temper,"onUpdate:temper":p[2]||(p[2]=c=>e.value[f(n)].temper=c),g:e.value[f(n)].g,"onUpdate:g":p[3]||(p[3]=c=>e.value[f(n)].g=c),dir:e.value[f(n)].direction,"onUpdate:dir":p[4]||(p[4]=c=>e.value[f(n)].direction=c),"tile-list":e.value,"current-cell":f(n),playing:i.value,onChangeEl:W,onChangeActivate:X},null,8,["temper","g","dir","tile-list","current-cell","playing"])]),_:1},512)]))}}),$e=Y(Ve,[["__scopeId","data-v-8554f341"]]);export{$e as default};
