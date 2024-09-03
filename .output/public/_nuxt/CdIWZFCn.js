import{_ as re}from"./f4aoV4J4.js";import{m as p,a as ue,b as z,u as R,c as M,d as ce,V as A,g as E,e as oe,f as me,h as ve,i as fe,R as ye,j as ge,k as be,l as ke,n as _e,L as Ce,o as Ve,p as he,q as w,_ as xe,r as S}from"./BSbdV1Qr.js";import{n as f,q as Se,s as Ie,u as Ae,v as Pe,b as n,x as y,I as k,y as F,z as j,F as P,A as N,B as pe,C as De,D as Be,E as we,r as Ne,G as Te,H as T,o as I,w as u,c as Le,J as He,a as c,K as ze,t as L}from"./Cuo58k3J.js";import{V as q,a as Re}from"./3_iadYhr.js";import{m as g,u as b,a as h,b as O,c as J,d as G,e as K,V,f as Me,g as Ee,h as Fe,i as je}from"./BC9C3FqC.js";function qe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return f()({name:a??Se(Ie(e.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...g()},setup(t,i){let{slots:d}=i;return()=>{var s;return Ae(t.tag,{class:[e,t.class],style:t.style},(s=d.default)==null?void 0:s.call(d))}}})}const Oe=f()({name:"VCardActions",props:g(),setup(e,l){let{slots:a}=l;return Pe({VBtn:{slim:!0,variant:"text"}}),b(()=>{var t;return n("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),Je=y({opacity:[Number,String],...g(),...h()},"VCardSubtitle"),Ge=f()({name:"VCardSubtitle",props:Je(),setup(e,l){let{slots:a}=l;return b(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},a)),{}}}),Ke=qe("v-card-title"),$e=y({start:Boolean,end:Boolean,icon:k,image:String,text:String,...O(),...g(),...p(),...J(),...ue(),...h(),...F(),...z({variant:"flat"})},"VAvatar"),H=f()({name:"VAvatar",props:$e(),setup(e,l){let{slots:a}=l;const{themeClasses:t}=j(e),{borderClasses:i}=G(e),{colorClasses:d,colorStyles:s,variantClasses:o}=R(e),{densityClasses:r}=M(e),{roundedClasses:v}=K(e),{sizeClasses:m,sizeStyles:x}=ce(e);return b(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,i.value,d.value,r.value,v.value,m.value,o.value,e.class],style:[s.value,x.value,e.style]},{default:()=>[a.default?n(V,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[a.default()]}):e.image?n(q,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(A,{key:"icon",icon:e.icon},null):e.text,E(!1,"v-avatar")]})),{}}}),Qe=y({appendAvatar:String,appendIcon:k,prependAvatar:String,prependIcon:k,subtitle:[String,Number],title:[String,Number],...g(),...p()},"VCardItem"),Ue=f()({name:"VCardItem",props:Qe(),setup(e,l){let{slots:a}=l;return b(()=>{var v;const t=!!(e.prependAvatar||e.prependIcon),i=!!(t||a.prepend),d=!!(e.appendAvatar||e.appendIcon),s=!!(d||a.append),o=!!(e.title!=null||a.title),r=!!(e.subtitle!=null||a.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[i&&n("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?n(V,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},a.prepend):n(P,null,[e.prependAvatar&&n(H,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(A,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[o&&n(Ke,{key:"title"},{default:()=>{var m;return[((m=a.title)==null?void 0:m.call(a))??e.title]}}),r&&n(Ge,{key:"subtitle"},{default:()=>{var m;return[((m=a.subtitle)==null?void 0:m.call(a))??e.subtitle]}}),(v=a.default)==null?void 0:v.call(a)]),s&&n("div",{key:"append",class:"v-card-item__append"},[a.append?n(V,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},a.append):n(P,null,[e.appendIcon&&n(A,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(H,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),We=y({opacity:[Number,String],...g(),...h()},"VCardText"),$=f()({name:"VCardText",props:We(),setup(e,l){let{slots:a}=l;return b(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},a)),{}}}),Xe=y({appendAvatar:String,appendIcon:k,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:k,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...O(),...g(),...p(),...Me(),...Ee(),...oe(),...me(),...ve(),...J(),...fe(),...h(),...F(),...z({variant:"elevated"})},"VCard"),Ye=f()({name:"VCard",directives:{Ripple:ye},props:Xe(),setup(e,l){let{attrs:a,slots:t}=l;const{themeClasses:i}=j(e),{borderClasses:d}=G(e),{colorClasses:s,colorStyles:o,variantClasses:r}=R(e),{densityClasses:v}=M(e),{dimensionStyles:m}=Fe(e),{elevationClasses:x}=je(e),{loaderClasses:Q}=ge(e),{locationStyles:U}=be(e),{positionClasses:W}=ke(e),{roundedClasses:X}=K(e),_=_e(e,a),Y=N(()=>e.link!==!1&&_.isLink.value),C=N(()=>!e.disabled&&e.link!==!1&&(e.link||_.isClickable.value));return b(()=>{const Z=Y.value?"a":e.tag,ee=!!(t.title||e.title!=null),ae=!!(t.subtitle||e.subtitle!=null),te=ee||ae,ne=!!(t.append||e.appendAvatar||e.appendIcon),le=!!(t.prepend||e.prependAvatar||e.prependIcon),se=!!(t.image||e.image),ie=te||le||ne,de=!!(t.text||e.text!=null);return pe(n(Z,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":C.value},i.value,d.value,s.value,v.value,x.value,Q.value,W.value,X.value,r.value,e.class],style:[o.value,m.value,U.value,e.style],href:_.href.value,onClick:C.value&&_.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var D;return[se&&n("div",{key:"image",class:"v-card__image"},[t.image?n(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(q,{key:"image-img",cover:!0,src:e.image},null)]),n(Ce,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),ie&&n(Ue,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),de&&n($,{key:"text"},{default:()=>{var B;return[((B=t.text)==null?void 0:B.call(t))??e.text]}}),(D=t.default)==null?void 0:D.call(t),t.actions&&n(Oe,null,{default:t.actions}),E(C.value,"v-card")]}}),[[De("ripple"),C.value&&e.ripple]])}),{}}}),Ze=y({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function ea(e,l){let a=()=>{};function t(s){a==null||a();const o=Number(s?e.openDelay:e.closeDelay);return new Promise(r=>{a=Be(o,()=>{l==null||l(s),r(s)})})}function i(){return t(!0)}function d(){return t(!1)}return{clearDelay:a,runOpenDelay:i,runCloseDelay:d}}const aa=y({disabled:Boolean,modelValue:{type:Boolean,default:null},...Ze()},"VHover"),ta=f()({name:"VHover",props:aa(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const t=we(e,"modelValue"),{runOpenDelay:i,runCloseDelay:d}=ea(e,s=>!e.disabled&&(t.value=s));return()=>{var s;return(s=a.default)==null?void 0:s.call(a,{isHovering:t.value,props:{onMouseenter:i,onMouseleave:d}})}}}),na=c("div",{class:"mt-3 mb-3 text-center text-h5 font-weight-bold"},[c("h2",null,"松山市五明地区")],-1),la=c("tbody",null,[c("tr",null,[c("td",{class:"rain text-center py-1 text-subtitle-1 font-weight-black",style:{backgroundColor:"#ffffff"}},"通常 "),c("td",{class:"rain text-center py-1 text-subtitle-1 font-weight-black",style:{backgroundColor:"#ffff00"}},"注意 "),c("td",{class:"rain text-center py-1 text-subtitle-1 font-weight-black",style:{color:"#fff",backgroundColor:"#ff0000"}},"警戒 "),c("td",{class:"rain text-center py-1 text-subtitle-1 font-weight-black",style:{color:"#fff",backgroundColor:"#6c0f6c"}},"危険 "),c("td",{class:"rain text-center py-1 text-subtitle-1 font-weight-black",style:{color:"#fff",backgroundColor:"#000"}},"切迫 ")])],-1),sa={class:"mt-1 text-left"},oa={__name:"index",setup(e){const l=Ne([{area:"浅野",id:56,name:"五明小学校",rainfalls:0},{area:"浅野",id:56,name:"菅沢公民館",rainfalls:0}]),a=i=>i>=40?"bg-black":i>=35?"bg-purple":i>=30?"bg-red":i>=20?"bg-yellow":"bg-white";Te(async()=>{await t()});const t=async()=>{const{data:i}=await Ve("/rainfalls_latest/2",{});console.log(i.value.body),JSON.parse(i.value.body).forEach(d=>{console.log(d.station_id);const s=l.value.findIndex(o=>o.id===d.station_id);s!==-1&&(l.value[s].rainfalls=d.hour1)})};return(i,d)=>{const s=re,o=xe;return I(),T(o,null,{default:u(()=>[na,n(he,{class:"mb-5",dense:""},{default:u(()=>[la]),_:1}),n(Re,{fluid:""},{default:u(()=>[n(w,{class:"justify-center"},{default:u(()=>[(I(!0),Le(P,null,He(l.value,r=>(I(),T(S,{cols:"12",md:"6",key:r},{default:u(()=>[n(s,{to:{name:"station",query:{id:r.id,station:r.name,rainfalls:r.rainfalls,area:r.area}},class:"nuxt-link--no-underline"},{default:u(()=>[n(ta,null,{default:u(({isHovering:v,props:m})=>[n(Ye,ze(m,{color:v?"info":void 0,class:a(r.rainfalls)}),{default:u(()=>[n($,null,{default:u(()=>[c("div",sa,[n(w,null,{default:u(()=>[n(S,{cols:"6",sm:"6",md:"6",lg:"6",xl:"6",id:"name_font",class:"text-h6 font-weight-bold"},{default:u(()=>[c("span",null,L(r.name),1)]),_:2},1024),n(S,{cols:"6",sm:"6",md:"6",lg:"6",xl:"6",id:"rainfall_font",class:"text-h6 font-weight-bold text-center"},{default:u(()=>[c("span",null,L(r.rainfalls)+"mm/h",1)]),_:2},1024)]),_:2},1024)])]),_:2},1024)]),_:2},1040,["color","class"])]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}}};export{oa as default};
