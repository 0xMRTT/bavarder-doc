import{d as b,r as l,a3 as m,b as a,c as s,F as v,ak as g,e as u,f as x,$ as y,n as k,t as I,p as T,j as S,R as $,l as C}from"./entry.ef9f6d77.js";const w=t=>(T("data-v-11acbdc3"),t=t(),S(),t),B={class:"tabs-header"},H=["onClick"],N=w(()=>u("span",{class:"tab"},null,-1)),R=[N],U=b({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:_}){const p=t,n=l(),r=l(),c=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},h=(e,i)=>{_("update:activeTabIndex",i),$(()=>c(e.target))};return m(n,e=>{e&&setTimeout(()=>{c(n.value.children[p.activeTabIndex])},50)},{immediate:!0}),(e,i)=>(a(),s("div",B,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(v,null,g(t.tabs,({label:d},o)=>(a(),s("button",{key:`${o}${d}`,class:k([t.activeTabIndex===o?"active":"not-active"]),onClick:f=>h(f,o)},I(d),11,H))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},R,512)],512)):x("",!0),y(e.$slots,"footer",{},void 0,!0)]))}});const F=C(U,[["__scopeId","data-v-11acbdc3"]]);export{F as default};
