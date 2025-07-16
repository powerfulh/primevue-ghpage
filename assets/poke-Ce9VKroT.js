import{B as P,j as $,k as S,c as u,o as p,D as k,y as g,J as x,e as C,t as B,Y as d,$ as w,a0 as D,r as A,f as c}from"./index-DMeQVgSp.js";var M=`
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
`,T={root:function(e){var n=e.instance;return["p-progressbar p-component",{"p-progressbar-determinate":n.determinate,"p-progressbar-indeterminate":n.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},z=P.extend({name:"progressbar",style:M,classes:T}),E={name:"BaseProgressBar",extends:$,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:z,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},V={name:"ProgressBar",extends:E,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"},dataP:function(){return S({determinate:this.determinate,indeterminate:this.indeterminate})}}},N=["aria-valuenow","data-p"],j=["data-p"],I=["data-p"],L=["data-p"];function R(t,e,n,a,s,o){return p(),u("div",g({role:"progressbar",class:t.cx("root"),"aria-valuemin":"0","aria-valuenow":t.value,"aria-valuemax":"100","data-p":o.dataP},t.ptmi("root")),[o.determinate?(p(),u("div",g({key:0,class:t.cx("value"),style:o.progressStyle,"data-p":o.dataP},t.ptm("value")),[t.value!=null&&t.value!==0&&t.showValue?(p(),u("div",g({key:0,class:t.cx("label"),"data-p":o.dataP},t.ptm("label")),[x(t.$slots,"default",{},function(){return[C(B(t.value+"%"),1)]})],16,I)):k("",!0)],16,j)):o.indeterminate?(p(),u("div",g({key:1,class:t.cx("value"),"data-p":o.dataP},t.ptm("value")),null,16,L)):k("",!0)],16,N)}V.render=R;function _(t){switch(t){case"paralysis":case"disable":case"freeze":return"skip";case"sleep":case"trap":case"no-type-immunity":return"neutralize";case"burn":case"poison":case"torment":return"dot";case"confusion":return"no-defense";case"infatuation":return"infatuation";case"nightmare":return"nightmare"}}function y(t,e,n,a){for(let s=0;s<e;s++)switch(_(t.ailment.name)){case"skip":n.skip++;break;case"neutralize":n.skip++,n.defenseless++,n.defenseless==1&&n.defenseless++;break;case"dot":n.dot.push(a);break;case"no-defense":n.defenseless++,n.defenseless==1&&n.defenseless++;break;case"infatuation":n.infatuation++;break;case"nightmare":n.skip++,n.dot.push(a);break}}const U=["damage","damage+ailment","ailment","net-good-stats"],q=2;let F;function J(t){const e=w();return e.loadingStack++,t}function Y(t){const e=w();return e.loadingStack>0&&e.loadingStack--,t}function G(t,e){return t.length<e?t:[...t].sort(()=>Math.random()-.5).slice(0,e)}function f(t){return t.language.name=="ko"}async function h(t,e){return Promise.all(t.map(({url:n})=>d.get(n))).then(n=>n.map(({data:a})=>{var s;return{...a,ko:(s=a.names.find(f))==null?void 0:s.name}}))}async function W(t,e,n){var r,l;const a=(await d.get(t)).data,s=(await d.get(a.species.url)).data;e.name=s.name,e.ko=(r=s.names.find(f))==null?void 0:r.name,e.flavor_text=(l=s.flavor_text_entries.find(f))==null?void 0:l.flavor_text,e.sprites=a.sprites.front_default;const o=(await d.get(a.types[0].type.url)).data;e.types={name:o.name,ko:o.names.find(f).name,double_damage_from:await h(o.damage_relations.double_damage_from),double_damage_to:await h(o.damage_relations.double_damage_to)},e.stats={hp:a.stats.find(({stat:i})=>i.name=="hp").base_stat,attack:a.stats.find(({stat:i})=>i.name=="attack").base_stat,defense:a.stats.find(({stat:i})=>i.name=="defense").base_stat},e.move=(await h(G(a.moves.map(i=>i.move),5))).filter(({meta:i})=>i).filter(({meta:i})=>U.includes(i.category.name)).map(i=>{var b,v;return{name:i.name,ko:i.ko,ailment:{name:i.meta.ailment.name,ailment_chance:i.meta.ailment_chance},category:i.meta.category.name,max_turns:i.meta.max_turns,min_turns:i.meta.min_turns,change:(b=i.stat_changes[0])==null?void 0:b.change,stat:(v=i.stat_changes[0])==null?void 0:v.stat.name,accuracy:i.accuracy}})}function X(t,e,n){F=new O(t,e,n)}function m(t,e){t.value-=e>t.value?t.value:e}function K(){return new Promise(t=>setTimeout(t,1e3))}class O{constructor(e,n,a){this.p=e,this.l=n,this.toast=a,this.ailment={dot:[],skip:0,defenseless:0,infatuation:0},this.stat={evasion:0,attack:100,defense:100,speed:0,accuracy:0}}init(){this.ailment={dot:[],skip:0,defenseless:0,infatuation:0},this.stat={evasion:0,attack:100,defense:100,speed:0,accuracy:0}}getAttack(){return this.p.stats.attack*(1+this.l()/10)}getDefense(){return this.p.stats.defense*(1+this.l()/10)}getDamage(e,n=0){let a=this.getAttack()*(this.stat.attack/100);return this.p.types.double_damage_to.map(s=>s.name).some(s=>s==e.p.types.name)&&(a*=2),this.p.types.double_damage_from.map(s=>s.name).some(s=>s==e.p.types.name)&&(a*=2),n==0&&(a-=e.getDefense()*(e.stat.defense/100)),a=a>0?a:0,a}getChance(e){return e.category=="damage+ailment"?e.ailment.ailment_chance:e.category=="ailment"?100:0}getPeriod(e){return Math.floor(((e.max_turns||2)+(e.min_turns||0))/2)}getAilmentText(e){const n=this.getPeriod(e);switch(_(e.ailment.name)){case"skip":return`${this.getChance(e)}% 확률로 ${n}턴 생략`;case"neutralize":return`${this.getChance(e)}% 확률로 ${n}턴 생략 및 방어 무효`;case"dot":return`${this.getChance(e)}% 확률로 ${n}턴간 지속 피해`;case"no-defense":return`${this.getChance(e)}% 확률로 ${n}턴간 방어 무효`;case"infatuation":return`${this.getChance(e)}% 확률로 ${n}턴간 매혹`;case"nightmare":return`${this.getChance(e)}% 확률로 ${n}턴 생략 및 지속 피해`}}getMultiply(e){let n=q;return e.stat=="special-attack"&&(e.stat="attack",n*=2),e.stat=="special-defense"&&(e.stat="defense",n*=2),n}getStatText(e){const n=e.change>0;let a=this.getMultiply(e);return`${n?"":"적의 "} ${e.stat} 능력치를 ${e.change*a}% 증감시킨다`}getText(e){switch(e.category){case"ailment":case"damage+ailment":return this.getAilmentText(e);case"net-good-stats":return this.getStatText(e)}return""}getAccuracy(e){return(e.accuracy??100)+this.stat.speed+this.stat.accuracy}getEvasion(){return this.stat.speed+this.stat.evasion}getMoveList(e){return this.p.move.map(n=>({ko:n.ko,category:n.category,used:!1,expectEffect:this.getText(n),expectRate:this.getAccuracy(n),select:async a=>{let s;const o=new Promise(i=>s=i);let r=e;this.ailment.infatuation&&(this.toast.add({detail:"매혹을 당해 스스로를 공격 목표로 삼습니다🤩",life:2e3}),r=this,await K());const l=Math.random()*100;if(l>this.getAccuracy(n)){this.toast.add({detail:"공격이 빗나가 무효화😥",life:2e3}),s("");return}if(l<e.getEvasion()){this.toast.add({detail:"공격을 회피했다😎",life:2e3}),s("");return}switch(n.category){case"damage":m(a,this.getDamage(r,r.ailment.defenseless)),s("");break;case"damage+ailment":m(a,this.getDamage(r,r.ailment.defenseless)),l<this.getChance(n)&&(y(n,this.getPeriod(n),r.ailment,()=>m(a,this.getDamage(r))),this.toast.add({detail:`${this.getChance(n)}% 확률로 상태 이상 공격 성공✔`,life:2e3})),s("");break;case"net-good-stats":n.change>0&&(r=this),r.stat[n.stat]+=n.change*this.getMultiply(n),this.toast.add({detail:`증감된 ${n.stat} 능력치: ${r.stat[n.stat]}✔`,life:2e3}),s("");break;case"ailment":l<this.getChance(n)&&(y(n,this.getPeriod(n),r.ailment,()=>m(a,this.getDamage(r))),this.toast.add({detail:`${this.getChance(n)}% 확률로 상태 이상 공격 성공✔`,life:2e3})),s("");break}return o}}))}}d.interceptors.request.use(J);d.interceptors.response.use(Y);const Z=D("Poke",()=>{const t=A({p:null,l:0,e:0}),e=c(()=>t.value.p),n=c(()=>t.value.p.ko+" Lv "+t.value.l),a=c(()=>t.value.p.sprites),s=c(()=>t.value.p.stats.hp),o=c(()=>t.value.l);return{loadable:e,name:n,sprite:a,hp:s,level:o,save(r,l,i){t.value={l:r,e:l,p:i}},load(r,l,i){r.value=t.value.l,l.value=t.value.e,i.value=t.value.p},earnExp(r){t.value.e+=r,t.value.e>=100&&(t.value.e=t.value.e-100,t.value.l++),this.save(t.value.l,t.value.e,t.value.p)}}});export{O as B,X as a,F as m,W as n,V as s,Z as u};
