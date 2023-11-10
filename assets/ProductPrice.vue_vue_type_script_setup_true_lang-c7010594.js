import{A as y,e as P,d,p as _,o as s,c as u,I as m,a as c,t as i,E as C,y as l,w as T,x as $,U as p,_ as k,F as g,r as h,R as I,m as O}from"./index-e707bf7d.js";const Q=t=>t instanceof HTMLInputElement,V=t=>{t.target&&Q(t.target)&&t.target.select()},q=({props:t,inputValue:e})=>{y(t,n=>{e.value=n.quantityOfProduct}),y(e,n=>typeof n=="string"?e.value=parseInt(n,10):void 0)},A=({props:t,inputValue:e})=>{P(()=>e.value=t.quantityOfProduct)},N=t=>0<t,w=({props:t,inputValue:e})=>()=>N(e.value)?e.value:e.value=t.quantityOfProduct,S=(t,e)=>{const n=()=>{t.value=!0,setTimeout(()=>{t.value=!1},1e3)};return()=>{e("addToCart"),n()}},F=(t,e,n)=>()=>{n(),e("changeQuantityOfProduct",t.value)},M=t=>t===0,B=(t,e)=>r=>{let a=0;return r==="+"?a=t.value+1:a=t.value-1,M(a)?void 0:e("changeQuantityOfProduct",a)},E=d({props:{quantityOfProduct:{required:!0,type:Number}},emits:["addToCart","changeQuantityOfProduct"],setup(t,{emit:e}){const n=_(1),r=_(!1),a={props:t,inputValue:n};q(a),A(a);const f=w(a),o=F(n,e,f),v=S(r,e),b=B(n,e);return{inputValue:n,isAddedToCart:r,changeQuantityOfProduct:b,changeInputValue:o,addToCart:v,selectText:V}}}),H={class:"card-line__right"},L={class:"card-line__right-form"},U={key:0,class:"notification-added-to-cart"},D={class:"card-line__right-form-line"};function W(t,e,n,r,a,f){return s(),u("div",H,[m(t.$slots,"default"),c("form",L,[t.isAddedToCart?(s(),u("span",U,i(t.$t("card.addedCart")),1)):C("",!0),c("section",D,[c("button",{"aria-label":"Subtract one unit of quantity",class:"card-line__right-button",onClick:e[0]||(e[0]=l(o=>t.changeQuantityOfProduct("-"),["prevent"]))}," - "),T(c("input",{"aria-label":"Write quantity of product you want to add in cart",type:"text",inputmode:"numeric",enterkeyhint:"done",class:"card-line__right-input","onUpdate:modelValue":e[1]||(e[1]=o=>t.inputValue=o),onInput:e[2]||(e[2]=o=>t.changeInputValue()),onClick:e[3]||(e[3]=(...o)=>t.selectText&&t.selectText(...o))},null,544),[[$,t.inputValue,void 0,{number:!0}]]),c("button",{"aria-label":"Add one quantity unit",class:"card-line__right-button",onClick:e[4]||(e[4]=l(o=>t.changeQuantityOfProduct("+"),["prevent"]))}," + ")]),c("button",{"aria-label":"Add to cart",class:"card-line__right-button-buy",onClick:e[5]||(e[5]=l((...o)=>t.addToCart&&t.addToCart(...o),["prevent"]))},[m(t.$slots,"button",{},()=>[p(i(t.$t("card.buy")),1)])])])])}const J=k(E,[["render",W]]),Z={class:"product-availability"},G={class:"product-availability__item_dark-color"},K=d({__name:"ProductAvailability",props:{inStock:{},unit:{}},setup(t){return(e,n)=>(s(),u("ul",Z,[(s(!0),u(g,null,h(e.inStock,(r,a)=>(s(),u("li",{class:"product-availability__item",key:a},[c("span",G,i(r.stockName),1),p(" - "+i(r.stock)+" "+i(e.unit),1)]))),128))]))}}),R=d({__name:"PriceItem",props:{price:{},currency:{default:"грн"}},setup(t){const e=t,n=I(()=>e.price.toFixed(2));return(r,a)=>(s(),u("span",null,i(n.value)+" "+i(r.currency),1))}}),j={class:"product-price"},X=d({__name:"ProductPrice",props:{productPriceArray:{}},setup(t){return(e,n)=>(s(),u("ul",j,[(s(!0),u(g,null,h(e.productPriceArray,(r,a)=>(s(),u("li",{class:"product-price__item",key:a},[p(i(r.q)+"+ ",1),O(R,{price:r.p},null,8,["price"])]))),128))]))}});export{J as Q,K as _,X as a};
