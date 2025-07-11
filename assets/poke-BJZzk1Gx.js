import{B as y,j as w,k as _,c,o as m,D as b,y as g,J as P,e as S,t as x,W as p,X as v,Y as B,r as D,f as u}from"./index-CjjMKOSc.js";var z=`
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
`,$={root:function(n){var t=n.instance;return["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},A=y.extend({name:"progressbar",style:z,classes:$}),C={name:"BaseProgressBar",extends:w,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:A,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},M={name:"ProgressBar",extends:C,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"},dataP:function(){return _({determinate:this.determinate,indeterminate:this.indeterminate})}}},V=["aria-valuenow","data-p"],N=["data-p"],T=["data-p"],j=["data-p"];function E(e,n,t,a,i,r){return m(),c("div",g({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100","data-p":r.dataP},e.ptmi("root")),[r.determinate?(m(),c("div",g({key:0,class:e.cx("value"),style:r.progressStyle,"data-p":r.dataP},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(m(),c("div",g({key:0,class:e.cx("label"),"data-p":r.dataP},e.ptm("label")),[P(e.$slots,"default",{},function(){return[S(x(e.value+"%"),1)]})],16,T)):b("",!0)],16,N)):r.indeterminate?(m(),c("div",g({key:1,class:e.cx("value"),"data-p":r.dataP},e.ptm("value")),null,16,j)):b("",!0)],16,V)}M.render=E;function k(e){switch(e){case"paralysis":case"disable":case"freeze":return"skip";case"sleep":case"trap":return"neutralize";case"burn":case"poison":case"torment":return"dot";case"confusion":return"no-defense";case"infatuation":return"infatuation";case"nightmare":return"nightmare"}}function I(e){k(e.ailment.name)}let L;function q(e){const n=v();return n.loadingStack++,e}function F(e){const n=v();return n.loadingStack>0&&n.loadingStack--,e}function J(e,n){return e.length<n?e:[...e].sort(()=>Math.random()-.5).slice(0,n)}function f(e){return e.language.name=="ko"}async function h(e){return Promise.all(e.map(({url:n})=>p.get(n))).then(n=>n.map(({data:t})=>{var a;return{...t,ko:(a=t.names.find(f))==null?void 0:a.name}}))}async function X(e,n,t,a){var l,d;const i=(await p.get(e)).data,r=(await p.get(i.species.url)).data;n.name=r.name,n.ko=(l=r.names.find(f))==null?void 0:l.name,n.flavor_text=(d=r.flavor_text_entries.find(f))==null?void 0:d.flavor_text,n.sprites=i.sprites.front_default;const o=(await p.get(i.types[0].type.url)).data;n.types={name:o.name,ko:o.names.find(f).name,double_damage_from:await h(o.damage_relations.double_damage_from),double_damage_to:await h(o.damage_relations.double_damage_to)},n.stats={hp:i.stats.find(({stat:s})=>s.name=="hp").base_stat,attack:i.stats.find(({stat:s})=>s.name=="attack").base_stat,defense:i.stats.find(({stat:s})=>s.name=="defense").base_stat},n.move=(await h(J(i.moves.map(s=>s.move),5))).filter(({meta:s})=>s).map(s=>({...s,ailment:{name:s.meta.ailment.name,ailment_chance:s.meta.ailment_chance},category:s.meta.category.name}))}function Y(e,n,t){L=new R(e,n,t)}class R{constructor(n,t,a){this.p=n,this.l=t,this.toast=a,this.skip=0}getAttack(){return this.p.stats.attack*(1+this.l()/10)}getDefense(){return this.p.stats.defense*(1+this.l()/10)}getDamage(n){let t=this.getAttack();return this.p.types.double_damage_to.map(a=>a.name).some(a=>a==n.p.types.name)&&(t*=2),this.p.types.double_damage_from.map(a=>a.name).some(a=>a==n.p.types.name)&&(t*=2),t-=n.getDefense(),t=t>0?t:0,t}getChance(n){return n.category=="damage+ailment"?n.ailment.ailment_chance:n.category=="ailment"?100:0}getText(n){const t=Math.floor(((n.max_turns||2)+(n.min_turns||0))/2);switch(k(n.ailment.name)){case"skip":return`${this.getChance(n)}% 확률로 ${t}턴 생략`;case"neutralize":break;case"dot":return`${this.getChance(n)}% 확률로 ${t}턴간 지속 피해`}}getMoveList(n){return this.p.move.map(t=>({ko:t.ko,category:t.category,expectDamage:this.getDamage(n),used:!1,expectEffect:this.getText(t),select:a=>{const i=Math.random()*100;switch(t.category){case"damage":a.value-=this.getDamage(n);return;case"damage+ailment":a.value-=this.getDamage(n),i<t.ailment.ailment_chance&&(I(t),this.toast.add({detail:`${this.getChance(t)}% 확률로 상태 이상 공격 성공✔`,life:2e3}));return}}}))}}p.interceptors.request.use(q);p.interceptors.response.use(F);const G=B("Poke",()=>{const e=D({p:null,l:0,e:0}),n=u(()=>e.value.p),t=u(()=>e.value.p.ko+" Lv "+e.value.l),a=u(()=>e.value.p.sprites),i=u(()=>e.value.p.stats.hp),r=u(()=>e.value.l);return{loadable:n,name:t,sprite:a,hp:i,level:r,save(o,l,d){e.value={l:o,e:l,p:d}},load(o,l,d){o.value=e.value.l,l.value=e.value.e,d.value=e.value.p}}});export{R as B,Y as a,L as m,X as n,M as s,G as u};
