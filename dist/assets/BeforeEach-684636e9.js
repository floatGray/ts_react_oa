import{z as h,B as d,j as o,N as n,F as y}from"./render-d5b6b10e.js";import{u as c,b as A,a as g,y as j,z as k}from"./index-c4545837.js";import{_ as x}from"./lodash-6097c51b.js";function F(u){const a=c(s=>s.users.token),e=c(s=>s.users.infos),r=A(),i=h(),t=d(g,i);if(Array.isArray(t)){const s=t[t.length-1].route.meta,f=t[t.length-1].route.name;if(s!=null&&s.auth&&x.isEmpty(e))if(a)r(j()).then(p=>{const{errcode:m,infos:l}=p.payload.data;m===0&&r(k(l))});else return o(n,{to:"/login"});else if(Array.isArray(e.permission)&&!e.permission.includes(f))return o(n,{to:"/403"})}return a&&i.pathname==="/login"?o(n,{to:"/"}):o(y,{children:u.children})}export{F as default};