import{B as S,j as x,k as $,c,o as p,D as k,y as g,J as z,e as D,t as B,X as d,Y as w,$ as C,r as A,f as u}from"./index-ChqMJAs5.js";var M=`
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
`,T={root:function(e){var n=e.instance;return["p-progressbar p-component",{"p-progressbar-determinate":n.determinate,"p-progressbar-indeterminate":n.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},V=S.extend({name:"progressbar",style:M,classes:T}),N={name:"BaseProgressBar",extends:x,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:V,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},j={name:"ProgressBar",extends:N,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"},dataP:function(){return $({determinate:this.determinate,indeterminate:this.indeterminate})}}},E=["aria-valuenow","data-p"],I=["data-p"],L=["data-p"],U=["data-p"];function q(t,e,n,a,r,i){return p(),c("div",g({role:"progressbar",class:t.cx("root"),"aria-valuemin":"0","aria-valuenow":t.value,"aria-valuemax":"100","data-p":i.dataP},t.ptmi("root")),[i.determinate?(p(),c("div",g({key:0,class:t.cx("value"),style:i.progressStyle,"data-p":i.dataP},t.ptm("value")),[t.value!=null&&t.value!==0&&t.showValue?(p(),c("div",g({key:0,class:t.cx("label"),"data-p":i.dataP},t.ptm("label")),[z(t.$slots,"default",{},function(){return[D(B(t.value+"%"),1)]})],16,L)):k("",!0)],16,I)):i.indeterminate?(p(),c("div",g({key:1,class:t.cx("value"),"data-p":i.dataP},t.ptm("value")),null,16,U)):k("",!0)],16,E)}j.render=q;function P(t){switch(t){case"paralysis":case"disable":case"freeze":return"skip";case"sleep":case"trap":return"neutralize";case"burn":case"poison":case"torment":return"dot";case"confusion":return"no-defense";case"infatuation":return"infatuation";case"nightmare":return"nightmare"}}function y(t,e,n,a){for(let r=0;r<e;r++)switch(P(t.ailment.name)){case"skip":n.skip++;break;case"neutralize":n.neutralize++,n.neutralize==1&&n.neutralize++;break;case"dot":n.dot.push(a);break}}const F=["damage","damage+ailment","ailment","net-good-stats"],_=2;let J;function R(t){const e=w();return e.loadingStack++,t}function X(t){const e=w();return e.loadingStack>0&&e.loadingStack--,t}function Y(t,e){return t.length<e?t:[...t].sort(()=>Math.random()-.5).slice(0,e)}function h(t){return t.language.name=="ko"}async function f(t,e){return Promise.all(t.map(({url:n})=>d.get(n))).then(n=>n.map(({data:a})=>{var r;return{...a,ko:(r=a.names.find(h))==null?void 0:r.name}}))}async function O(t,e,n){var o,l;const a=(await d.get(t)).data,r=(await d.get(a.species.url)).data;e.name=r.name,e.ko=(o=r.names.find(h))==null?void 0:o.name,e.flavor_text=(l=r.flavor_text_entries.find(h))==null?void 0:l.flavor_text,e.sprites=a.sprites.front_default;const i=(await d.get(a.types[0].type.url)).data;e.types={name:i.name,ko:i.names.find(h).name,double_damage_from:await f(i.damage_relations.double_damage_from),double_damage_to:await f(i.damage_relations.double_damage_to)},e.stats={hp:a.stats.find(({stat:s})=>s.name=="hp").base_stat,attack:a.stats.find(({stat:s})=>s.name=="attack").base_stat,defense:a.stats.find(({stat:s})=>s.name=="defense").base_stat},e.move=(await f(Y(a.moves.map(s=>s.move),5))).filter(({meta:s})=>s).filter(({meta:s})=>F.includes(s.category.name)).map(s=>{var b,v;return{name:s.name,ko:s.ko,ailment:{name:s.meta.ailment.name,ailment_chance:s.meta.ailment_chance},category:s.meta.category.name,max_turns:s.meta.max_turns,min_turns:s.meta.min_turns,change:(b=s.stat_changes[0])==null?void 0:b.change,stat:(v=s.stat_changes[0])==null?void 0:v.stat.name}})}function Q(t,e,n){J=new G(t,e,n)}function m(t,e){t.value-=e>t.value?t.value:e}class G{constructor(e,n,a){this.p=e,this.l=n,this.toast=a,this.ailment={dot:[],skip:0,neutralize:0},this.stat={evasion:0,attack:100,defense:100}}getAttack(){return this.p.stats.attack*(1+this.l()/10)}getDefense(){return this.p.stats.defense*(1+this.l()/10)}getDamage(e,n=0){let a=this.getAttack()*(this.stat.attack/100);return this.p.types.double_damage_to.map(r=>r.name).some(r=>r==e.p.types.name)&&(a*=2),this.p.types.double_damage_from.map(r=>r.name).some(r=>r==e.p.types.name)&&(a*=2),n==0&&(a-=e.getDefense()*(e.stat.defense/100)),a=a>0?a:0,a}getChance(e){return e.category=="damage+ailment"?e.ailment.ailment_chance:e.category=="ailment"?100:0}getPeriod(e){return Math.floor(((e.max_turns||2)+(e.min_turns||0))/2)}getAilmentText(e){const n=this.getPeriod(e);switch(P(e.ailment.name)){case"skip":return`${this.getChance(e)}% 확률로 ${n}턴 생략`;case"neutralize":return`${this.getChance(e)}% 확률로 ${n}턴간 방어 무효`;case"dot":return`${this.getChance(e)}% 확률로 ${n}턴간 지속 피해`}}getStatText(e){return`${e.change>0?"":"적의 "} ${e.stat} 능력치를 ${e.change*_}% 증감시킨다`}getText(e){switch(e.category){case"ailment":case"damage+ailment":return this.getAilmentText(e);case"net-good-stats":return this.getStatText(e)}return""}getMoveList(e){return this.p.move.map(n=>({ko:n.ko,category:n.category,expectDamage:this.getDamage(e),used:!1,expectEffect:this.getText(n),select:a=>{const r=Math.random()*100;switch(n.category){case"damage":m(a,this.getDamage(e,e.ailment.neutralize));return;case"damage+ailment":m(a,this.getDamage(e,e.ailment.neutralize)),r<n.ailment.ailment_chance&&(y(n,this.getPeriod(n),e.ailment,()=>m(a,this.getDamage(e))),this.toast.add({detail:`${this.getChance(n)}% 확률로 상태 이상 공격 성공✔`,life:2e3}));return;case"net-good-stats":e.stat[n.stat]+=n.change*_,this.toast.add({detail:`증감된 ${n.stat} 능력치: ${e.stat[n.stat]}✔`,life:2e3});return;case"ailment":r<n.ailment.ailment_chance,y(n,this.getPeriod(n),e.ailment,()=>m(a,this.getDamage(e))),this.toast.add({detail:`${this.getChance(n)}% 확률로 상태 이상 공격 성공✔`,life:2e3});return}}}))}}d.interceptors.request.use(R);d.interceptors.response.use(X);const W=C("Poke",()=>{const t=A({p:null,l:0,e:0}),e=u(()=>t.value.p),n=u(()=>t.value.p.ko+" Lv "+t.value.l),a=u(()=>t.value.p.sprites),r=u(()=>t.value.p.stats.hp),i=u(()=>t.value.l);return{loadable:e,name:n,sprite:a,hp:r,level:i,save(o,l,s){t.value={l:o,e:l,p:s}},load(o,l,s){o.value=t.value.l,l.value=t.value.e,s.value=t.value.p}}});export{G as B,Q as a,J as m,O as n,j as s,W as u};
