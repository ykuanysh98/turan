import{d as c,b as u,o as i,c as s,t as n,m as l,n as r,p as d}from"./DVShB6SZ.js";const m={key:0},f={key:1},_={key:2},p=c({__name:"index",props:{title:{type:String,default:""},subtitle:{type:String,default:""},discount:{type:String,default:""},main:{type:Boolean,default:!1},variant:{type:String,default:""},size:{type:String,default:"md"},block:{type:Boolean,default:!1}},setup(t){const e=t,o=u(()=>{let a=["atom-title"];return e.variant&&a.push(`atom-title__variant--${e.variant}`),e.size&&a.push(`atom-title__size--${e.size}`),e.block&&a.push("atom-title__block"),a});return(a,y)=>(i(),s("div",{class:r(o.value)},[t.main?(i(),s("h1",m,n(t.title),1)):t.title?(i(),s("h2",f,n(t.title),1)):l("",!0),t.subtitle?(i(),s("h3",_,n(t.subtitle),1)):l("",!0)],2))}}),b=d(p,[["__scopeId","data-v-54afb6c1"]]);export{b as _};