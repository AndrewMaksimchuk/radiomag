import{aI as ke,R as p,aJ as Ke,a8 as Fe,p as V,aK as J,A as Z,aL as je,ax as We,aM as we,B as Ue,aN as Ye,aq as ae,aO as Se,as as oe,d as Pe,aP as Xe,aA as Je,aQ as Ze,aR as qe,au as Ge,aS as Qe,C as Ce,aT as et,aU as tt,aV as at,az as ot,af as P,z as nt,H as st,w as lt,aW as rt,o as v,c as S,E as m,F as ne,n as h,h as t,I as U,a as T,g as I,T as $,a6 as Y,a2 as L,J as se,m as it,aX as ut,y as ct,aY as dt,t as X,aF as pt,G as ft,aZ as Ie,L as vt}from"./index-e707bf7d.js";import{m as mt,U as le,i as yt,d as Ee}from"./typescript-acce6f1e.js";const ht=()=>ke&&/firefox/i.test(window.navigator.userAgent),gt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),bt=["class","style"],xt=/^on[A-Z]/,wt=(o={})=>{const{excludeListeners:f=!1,excludeKeys:u}=o,a=p(()=>((u==null?void 0:u.value)||[]).concat(bt)),r=Fe();return r?p(()=>{var i;return Ke(Object.entries((i=r.proxy)==null?void 0:i.$attrs).filter(([c])=>!a.value.includes(c)&&!(f&&xt.test(c))))}):p(()=>({}))};function St(o){const f=V();function u(){if(o.value==null)return;const{selectionStart:r,selectionEnd:i,value:c}=o.value;if(r==null||i==null)return;const g=c.slice(0,Math.max(0,r)),d=c.slice(Math.max(0,i));f.value={selectionStart:r,selectionEnd:i,value:c,beforeTxt:g,afterTxt:d}}function a(){if(o.value==null||f.value==null)return;const{value:r}=o.value,{beforeTxt:i,afterTxt:c,selectionStart:g}=f.value;if(i==null||c==null||g==null)return;let d=r.length;if(r.endsWith(c))d=r.length-c.length;else if(r.startsWith(i))d=i.length;else{const b=i[g-1],w=r.indexOf(b,g-1);w!==-1&&(d=w+1)}o.value.setSelectionRange(d,d)}return[u,a]}function Ct(o,{afterFocus:f,beforeBlur:u,afterBlur:a}={}){const r=Fe(),{emit:i}=r,c=J(),g=V(!1),d=s=>{g.value||(g.value=!0,i("focus",s),f==null||f())},b=s=>{var N;We(u)&&u(s)||s.relatedTarget&&((N=c.value)!=null&&N.contains(s.relatedTarget))||(g.value=!1,i("blur",s),a==null||a())},w=()=>{var s;(s=o.value)==null||s.focus()};return Z(c,s=>{s&&s.setAttribute("tabindex","-1")}),je(c,"click",w),{wrapperRef:c,isFocused:g,handleFocus:d,handleBlur:b}}let x;const It=`
  height:0 !important;
  visibility:hidden !important;
  ${ht()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Et=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function zt(o){const f=window.getComputedStyle(o),u=f.getPropertyValue("box-sizing"),a=Number.parseFloat(f.getPropertyValue("padding-bottom"))+Number.parseFloat(f.getPropertyValue("padding-top")),r=Number.parseFloat(f.getPropertyValue("border-bottom-width"))+Number.parseFloat(f.getPropertyValue("border-top-width"));return{contextStyle:Et.map(c=>`${c}:${f.getPropertyValue(c)}`).join(";"),paddingSize:a,borderSize:r,boxSizing:u}}function ze(o,f=1,u){var a;x||(x=document.createElement("textarea"),document.body.appendChild(x));const{paddingSize:r,borderSize:i,boxSizing:c,contextStyle:g}=zt(o);x.setAttribute("style",`${g};${It}`),x.value=o.value||o.placeholder||"";let d=x.scrollHeight;const b={};c==="border-box"?d=d+i:c==="content-box"&&(d=d-r),x.value="";const w=x.scrollHeight-r;if(we(f)){let s=w*f;c==="border-box"&&(s=s+r+i),d=Math.max(s,d),b.minHeight=`${s}px`}if(we(u)){let s=w*u;c==="border-box"&&(s=s+r+i),d=Math.min(s,d)}return b.height=`${d}px`,(a=x.parentNode)==null||a.removeChild(x),x=void 0,b}const kt=Ue({id:{type:String,default:void 0},size:Ye,disabled:Boolean,modelValue:{type:ae([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ae([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Se},prefixIcon:{type:Se},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ae([Object,Array,String]),default:()=>mt({})},autofocus:{type:Boolean,default:!1}}),Ft={[le]:o=>oe(o),input:o=>oe(o),change:o=>oe(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Pt=["role"],Tt=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Vt=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Nt=Pe({name:"ElInput",inheritAttrs:!1}),Rt=Pe({...Nt,props:kt,emits:Ft,setup(o,{expose:f,emit:u}){const a=o,r=Xe(),i=Je(),c=p(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),g=p(()=>[a.type==="textarea"?ie.b():l.b(),l.m(re.value),l.is("disabled",z.value),l.is("exceed",Re.value),{[l.b("group")]:i.prepend||i.append,[l.bm("group","append")]:i.append,[l.bm("group","prepend")]:i.prepend,[l.m("prefix")]:i.prefix||a.prefixIcon,[l.m("suffix")]:i.suffix||a.suffixIcon||a.clearable||a.showPassword,[l.bm("suffix","password-clear")]:j.value&&Q.value},r.class]),d=p(()=>[l.e("wrapper"),l.is("focus",G.value)]),b=wt({excludeKeys:p(()=>Object.keys(c.value))}),{form:w,formItem:s}=Ze(),{inputId:N}=qe(a,{formItemContext:s}),re=Ge(),z=Qe(),l=Ce("input"),ie=Ce("textarea"),O=J(),C=J(),q=V(!1),R=V(!1),H=V(!1),ue=V(),D=J(a.inputStyle),k=p(()=>O.value||C.value),{wrapperRef:Te,isFocused:G,handleFocus:_,handleBlur:K}=Ct(k,{afterBlur(){var e;a.validateEvent&&((e=s==null?void 0:s.validate)==null||e.call(s,"blur").catch(n=>Ee()))}}),ce=p(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),B=p(()=>(s==null?void 0:s.validateState)||""),de=p(()=>B.value&&et[B.value]),Ve=p(()=>H.value?tt:at),Ne=p(()=>[r.style,a.inputStyle]),pe=p(()=>[a.inputStyle,D.value,{resize:a.resize}]),E=p(()=>yt(a.modelValue)?"":String(a.modelValue)),j=p(()=>a.clearable&&!z.value&&!a.readonly&&!!E.value&&(G.value||q.value)),Q=p(()=>a.showPassword&&!z.value&&!a.readonly&&!!E.value&&(!!E.value||G.value)),F=p(()=>a.showWordLimit&&!!b.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),ee=p(()=>E.value.length),Re=p(()=>!!F.value&&ee.value>Number(b.value.maxlength)),Be=p(()=>!!i.suffix||!!a.suffixIcon||j.value||a.showPassword||F.value||!!B.value&&ce.value),[Ae,Me]=St(O);ot(C,e=>{if($e(),!F.value||a.resize!=="both")return;const n=e[0],{width:y}=n.contentRect;ue.value={right:`calc(100% - ${y+15+6}px)`}});const A=()=>{const{type:e,autosize:n}=a;if(!(!ke||e!=="textarea"||!C.value))if(n){const y=Ie(n)?n.minRows:void 0,W=Ie(n)?n.maxRows:void 0,xe=ze(C.value,y,W);D.value={overflowY:"hidden",...xe},P(()=>{C.value.offsetHeight,D.value=xe})}else D.value={minHeight:ze(C.value).minHeight}},$e=(e=>{let n=!1;return()=>{var y;if(n||!a.autosize)return;((y=C.value)==null?void 0:y.offsetParent)===null||(e(),n=!0)}})(A),M=()=>{const e=k.value,n=a.formatter?a.formatter(E.value):E.value;!e||e.value===n||(e.value=n)},te=async e=>{Ae();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!R.value){if(n===E.value){M();return}u(le,n),u("input",n),await P(),M(),Me()}},fe=e=>{u("change",e.target.value)},ve=e=>{u("compositionstart",e),R.value=!0},me=e=>{var n;u("compositionupdate",e);const y=(n=e.target)==null?void 0:n.value,W=y[y.length-1]||"";R.value=!gt(W)},ye=e=>{u("compositionend",e),R.value&&(R.value=!1,te(e))},Le=()=>{H.value=!H.value,he()},he=async()=>{var e;await P(),(e=k.value)==null||e.focus()},Oe=()=>{var e;return(e=k.value)==null?void 0:e.blur()},He=e=>{q.value=!1,u("mouseleave",e)},De=e=>{q.value=!0,u("mouseenter",e)},ge=e=>{u("keydown",e)},_e=()=>{var e;(e=k.value)==null||e.select()},be=()=>{u(le,""),u("change",""),u("clear"),u("input","")};return Z(()=>a.modelValue,()=>{var e;P(()=>A()),a.validateEvent&&((e=s==null?void 0:s.validate)==null||e.call(s,"change").catch(n=>Ee()))}),Z(E,()=>M()),Z(()=>a.type,async()=>{await P(),M(),A()}),nt(()=>{!a.formatter&&a.parser,M(),P(A)}),f({input:O,textarea:C,ref:k,textareaStyle:pe,autosize:st(a,"autosize"),focus:he,blur:Oe,select:_e,clear:be,resizeTextarea:A}),(e,n)=>lt((v(),S("div",se(t(c),{class:t(g),style:t(Ne),role:e.containerRole,onMouseenter:De,onMouseleave:He}),[m(" input "),e.type!=="textarea"?(v(),S(ne,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),S("div",{key:0,class:h(t(l).be("group","prepend"))},[U(e.$slots,"prepend")],2)):m("v-if",!0),T("div",{ref_key:"wrapperRef",ref:Te,class:h(t(d))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),S("span",{key:0,class:h(t(l).e("prefix"))},[T("span",{class:h(t(l).e("prefix-inner"))},[U(e.$slots,"prefix"),e.prefixIcon?(v(),I(t(L),{key:0,class:h(t(l).e("icon"))},{default:$(()=>[(v(),I(Y(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),T("input",se({id:t(N),ref_key:"input",ref:O,class:t(l).e("inner")},t(b),{type:e.showPassword?H.value?"text":"password":e.type,disabled:t(z),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,autofocus:a.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:ye,onInput:te,onFocus:n[0]||(n[0]=(...y)=>t(_)&&t(_)(...y)),onBlur:n[1]||(n[1]=(...y)=>t(K)&&t(K)(...y)),onChange:fe,onKeydown:ge}),null,16,Tt),m(" suffix slot "),t(Be)?(v(),S("span",{key:1,class:h(t(l).e("suffix"))},[T("span",{class:h(t(l).e("suffix-inner"))},[!t(j)||!t(Q)||!t(F)?(v(),S(ne,{key:0},[U(e.$slots,"suffix"),e.suffixIcon?(v(),I(t(L),{key:0,class:h(t(l).e("icon"))},{default:$(()=>[(v(),I(Y(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(j)?(v(),I(t(L),{key:1,class:h([t(l).e("icon"),t(l).e("clear")]),onMousedown:ct(t(dt),["prevent"]),onClick:be},{default:$(()=>[it(t(ut))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(Q)?(v(),I(t(L),{key:2,class:h([t(l).e("icon"),t(l).e("password")]),onClick:Le},{default:$(()=>[(v(),I(Y(t(Ve))))]),_:1},8,["class"])):m("v-if",!0),t(F)?(v(),S("span",{key:3,class:h(t(l).e("count"))},[T("span",{class:h(t(l).e("count-inner"))},X(t(ee))+" / "+X(t(b).maxlength),3)],2)):m("v-if",!0),t(B)&&t(de)&&t(ce)?(v(),I(t(L),{key:4,class:h([t(l).e("icon"),t(l).e("validateIcon"),t(l).is("loading",t(B)==="validating")])},{default:$(()=>[(v(),I(Y(t(de))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),S("div",{key:1,class:h(t(l).be("group","append"))},[U(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),S(ne,{key:1},[m(" textarea "),T("textarea",se({id:t(N),ref_key:"textarea",ref:C,class:t(ie).e("inner")},t(b),{tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(pe),"aria-label":e.label,placeholder:e.placeholder,form:a.form,autofocus:a.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:ye,onInput:te,onFocus:n[2]||(n[2]=(...y)=>t(_)&&t(_)(...y)),onBlur:n[3]||(n[3]=(...y)=>t(K)&&t(K)(...y)),onChange:fe,onKeydown:ge}),null,16,Vt),t(F)?(v(),S("span",{key:0,style:pt(ue.value),class:h(t(l).e("count"))},X(t(ee))+" / "+X(t(b).maxlength),7)):m("v-if",!0)],64))],16,Pt)),[[rt,e.type!=="hidden"]])}});var Bt=ft(Rt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Lt=vt(Bt);export{Lt as E};
