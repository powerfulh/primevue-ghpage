import{B as k,j as y,k as w,c as m,o as c,D as v,y as b,J as P,e as S,t as _,V as p,W as h,X as B,r as x,f as u}from"./index-RfvxWBIL.js";var A=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`,V={root:function(n){var t=n.instance;return["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},z=k.extend({name:"progressbar",style:A,classes:V}),D={name:"BaseProgressBar",extends:y,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:z,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},M={name:"ProgressBar",extends:D,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"},dataP:function(){return w({determinate:this.determinate,indeterminate:this.indeterminate})}}},N=["aria-valuenow","data-p"],j=["data-p"],C=["data-p"],I=["data-p"];function $(e,n,t,i,r,s){return c(),m("div",b({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100","data-p":s.dataP},e.ptmi("root")),[s.determinate?(c(),m("div",b({key:0,class:e.cx("value"),style:s.progressStyle,"data-p":s.dataP},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(c(),m("div",b({key:0,class:e.cx("label"),"data-p":s.dataP},e.ptm("label")),[P(e.$slots,"default",{},function(){return[S(_(e.value+"%"),1)]})],16,C)):v("",!0)],16,j)):s.indeterminate?(c(),m("div",b({key:1,class:e.cx("value"),"data-p":s.dataP},e.ptm("value")),null,16,I)):v("",!0)],16,N)}M.render=$;let q;function E(e){const n=h();return n.loadingStack++,e}function F(e){const n=h();return n.loadingStack>0&&n.loadingStack--,e}function J(e,n){return e.length<n?e:[...e].sort(()=>Math.random()-.5).slice(0,n)}function g(e){return e.language.name=="ko"}async function f(e){return Promise.all(e.map(({url:n})=>p.get(n))).then(n=>n.map(({data:t})=>{var i;return{...t,ko:(i=t.names.find(g))==null?void 0:i.name}}))}async function T(e,n,t,i){var l,d;const r=(await p.get(e)).data,s=(await p.get(r.species.url)).data;n.name=s.name,n.ko=(l=s.names.find(g))==null?void 0:l.name,n.flavor_text=(d=s.flavor_text_entries.find(g))==null?void 0:d.flavor_text,n.sprites=r.sprites.front_default;const o=(await p.get(r.types[0].type.url)).data;n.types={name:o.name,ko:o.names.find(g).name,double_damage_from:await f(o.damage_relations.double_damage_from),double_damage_to:await f(o.damage_relations.double_damage_to)},n.stats={hp:r.stats.find(({stat:a})=>a.name=="hp").base_stat,attack:r.stats.find(({stat:a})=>a.name=="attack").base_stat,defense:r.stats.find(({stat:a})=>a.name=="defense").base_stat},n.move=(await f(J(r.moves.map(a=>a.move),5))).filter(({meta:a})=>a).map(a=>({...a,ailment:{name:a.meta.ailment.name,ailment_chance:a.meta.ailment_chance},category:a.meta.category.name}))}function W(e,n,t){q=new L(e,n,t)}class L{constructor(n,t,i){this.p=n,this.l=t,this.e=i}getAttack(){return this.p.stats.attack*(1+this.l()/10)}getDefense(){return this.p.stats.defense*(1+this.l()/10)}}p.interceptors.request.use(E);p.interceptors.response.use(F);const X=B("Poke",()=>{const e=x({p:null,l:0,e:0}),n=u(()=>e.value.p),t=u(()=>e.value.p.ko+" Lv "+e.value.l),i=u(()=>e.value.p.sprites),r=u(()=>e.value.p.stats.hp),s=u(()=>e.value.l);return{loadable:n,name:t,sprite:i,hp:r,level:s,save(o,l,d){e.value={l:o,e:l,p:d}},load(o,l,d){o.value=e.value.l,l.value=e.value.e,d.value=e.value.p}}});export{W as a,q as m,T as n,M as s,X as u};
