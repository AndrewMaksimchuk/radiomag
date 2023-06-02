import{d as h,u as C,a as x,o as n,c,b as e,t as o,P as L,e as u,F as v,r as $,f as k,g as y,_ as p,h as A,i as w,j as g,G as B,n as E,k as P,l as M,m,p as N}from"./index.ca7a8b15.js";const V={class:"catalog-of-products__list-item"},z={class:"catalog-of-products__image-container"},O=["src","alt"],W={class:"catalog-of-products__item-header"},G=h({__name:"CatalogShortItemComponent",props:{data:null},setup(t){const s=t,a=C(),l=x(),r=async i=>{const _=await a.useMenuGroups(i);L.ping({action:"open window",window:"ModalWindow",payload:_}),Array.isArray(_)&&l.show(_,s.data.name)};return(i,_)=>(n(),c("li",V,[e("button",{class:"catalog-of-products__link",onClick:_[0]||(_[0]=S=>r(t.data.id))},[e("div",z,[e("img",{src:"/images/catalog/"+t.data.img,alt:t.data.name,class:"catalog-of-products__image"},null,8,O)]),e("h3",W,o(t.data.name),1)])]))}}),H={key:0,class:"catalog-of-products"},I={class:"catalog-of-products__header"},Q={class:"catalog-of-products__list"},F=h({__name:"CatalogShortComponent",setup(t){const s=C();return s.useMenu(),(a,l)=>u(s).length?(n(),c("nav",H,[e("h2",I,o(a.$t("catalogComponents")),1),e("ul",Q,[(n(!0),c(v,null,$(u(s).catalog,(r,i)=>(n(),k(G,{key:i,data:r},null,8,["data"]))),128))])])):y("",!0)}});const j={},q={class:"linecard borders m-hide"},D=e("h2",{class:"linecard__header-text"},"Linecard",-1),R={class:"linecard__form",action:"#"},T={class:"linecard__form-label"},U={name:"productions",class:"linecard__form-select"},J={value:"",class:"linecard__form-option"},K={name:"categories",class:"linecard__form-select"},X={value:"",class:"linecard__form-option"},Y={class:"linecard__form-submit cursor-pointer",type:"submit"};function Z(t,s){return n(),c("article",q,[D,e("form",R,[e("label",T,o(t.$t("linecard.label")),1),e("select",U,[e("option",J,o(t.$t("linecard.productions")),1)]),e("select",K,[e("option",X,o(t.$t("linecard.categories")),1)]),e("button",Y,o(t.$t("linecard.submit")),1)])])}const ee=p(j,[["render",Z]]),b=A("slider",()=>{const s=w(5),a=w([]),l=w(1),r=g(()=>a.value.length),i=g(()=>Math.ceil(a.value.length/s.value)),_=g(()=>{const d=(l.value-1)*s.value,f=d+s.value;return a.value.slice(d,f)});return{data:a,length:r,activeButton:l,numberOfButtons:i,toShow:_,active:d=>l.value=d,load:async()=>{const[d,f]=await B.slider();return d?"":a.value=f},numberOfShowedCards:s,setNumberShowedCards:(d=5)=>s.value=d}}),te=()=>window.innerWidth,se=document.documentElement,ae=getComputedStyle(se),ne=t=>ae.getPropertyValue(t),oe={class:"small-goods-card"},ce=["src","alt"],ie={class:"small-goods-card__header-text"},le={class:"reset-text-decor color-black-light",href:"#"},_e={class:"small-goods-card__description"},re=h({__name:"CardSmallComponent",props:{data:null},setup(t){return(s,a)=>(n(),c("article",oe,[e("img",{class:"small-goods-card__image",src:t.data.imgsrc,alt:t.data.title},null,8,ce),e("h3",ie,[e("a",le,o(t.data.title),1)]),e("p",_e,o(t.data.description),1)]))}});const de=h({__name:"SliderButton",props:{isActive:{type:Boolean}},setup(t){return(s,a)=>(n(),c("div",{class:E([{"slider__controls-button_active":t.isActive},"slider__controls-button"])},null,2))}}),me={class:"slider"},ue={class:"slider__cards"},he={class:"slider__controls"},pe=h({__name:"SliderComponent",setup(t){const s=b(),a=()=>{const l=te(),r=parseInt(ne("--breakpoint-tablet"));l<=r&&s.numberOfShowedCards!==2&&s.setNumberShowedCards(2),l>r&&s.numberOfShowedCards===2&&s.setNumberShowedCards()};return P(()=>{a(),window.addEventListener("resize",a)}),M(()=>window.removeEventListener("resize",a)),(l,r)=>(n(),c("article",me,[e("div",ue,[(n(!0),c(v,null,$(u(s).toShow,(i,_)=>(n(),k(re,{key:_,data:i},null,8,["data"]))),128))]),e("div",he,[(n(!0),c(v,null,$(u(s).numberOfButtons,i=>(n(),k(de,{key:i,isActive:u(s).activeButton===i,onClick:_=>u(s).active(i)},null,8,["isActive","onClick"]))),128))])]))}});const fe={key:0,class:"popular-products"},we={class:"popular-products__heaer-text"},ge=h({__name:"PopularProductsComponent",setup(t){const s=b();return s.load(),(a,l)=>u(s).length?(n(),c("div",fe,[e("h2",we,o(a.$t("popularProducts")),1),m(pe)])):y("",!0)}});const ve={},$e={class:"news"},ke={class:"news__header-text"},Ce=N('<div class="news__container"><article class="news__item"><time class="news__item-time"><img src="" alt=""> 16/03/2017 </time><h3 class="news__item-header-text"> \u041C\u0430\u043A\u0435\u0442\u043D\u0456 \u043F\u043B\u0430\u0442\u0438, \u0437\u0454\u0434\u043D\u0443\u0432\u0430\u0447\u0456 \u0442\u0430 \u043A\u043E\u0440\u043F\u0443\u0441\u0430 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u043A\u0430 E-CALL </h3><p class="news__item-text-description"> \u0420\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F \u0430\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442\u0443 \u043F\u043E \u043C\u0430\u043A\u0435\u0442\u043D\u0438\u043C \u043F\u043B\u0430\u0442\u0430\u043C, \u0437\u0454\u0434\u043D\u0443\u0432\u0430\u0447\u0430\u043C \u0434\u043E \u043D\u0438\u0445 \u0442\u0430 \u043A\u043E\u0440\u043F\u0443\u0441\u0430\u0445 \u0432\u0456\u0434 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u043A\u0430 <a href="#" class="news__item-text-description-link">E-CALL</a></p><p class="news__item-links"><a class="news__item-links-item" href="">\u041A\u043E\u0440\u043F\u0443\u0441\u0430</a><a class="news__item-links-item" href="">\u0417\u0454\u0434\u043D\u0443\u0432\u0430\u0447\u0456</a><a class="news__item-links-item" href="">\u041C\u0430\u043A\u0435\u0442\u043D\u0456 \u043F\u043B\u0430\u0442\u0438</a></p><p class="news__item-footer"> \u041F\u043E\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044F \u043F\u043E\u0432\u043D\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A \u043C\u043E\u0436\u043D\u0430 \u0437\u0430 <a class="common-link news__item-footer-link" href="">\u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C</a> \u0430\u0431\u043E \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430\u0445 \u043D\u0430\u0448\u043E\u0433\u043E <a class="common-link news__item-footer-link" href="">\u0441\u0430\u0439\u0442\u0430</a>. </p></article><article class="news__item"><time class="news__item-time"><img src="" alt=""> 16/03/2017 </time><h3 class="news__item-header-text"> \u041C\u0430\u043A\u0435\u0442\u043D\u0456 \u043F\u043B\u0430\u0442\u0438, \u0437\u0454\u0434\u043D\u0443\u0432\u0430\u0447\u0456 \u0442\u0430 \u043A\u043E\u0440\u043F\u0443\u0441\u0430 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u043A\u0430 E-CALL </h3><p class="news__item-text-description"> \u0420\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F \u0430\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442\u0443 \u043F\u043E \u043C\u0430\u043A\u0435\u0442\u043D\u0438\u043C \u043F\u043B\u0430\u0442\u0430\u043C, \u0437\u0454\u0434\u043D\u0443\u0432\u0430\u0447\u0430\u043C \u0434\u043E \u043D\u0438\u0445 \u0442\u0430 \u043A\u043E\u0440\u043F\u0443\u0441\u0430\u0445 \u0432\u0456\u0434 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u043A\u0430 <a href="#" class="news__item-text-description-link">E-CALL</a></p><p class="news__item-links"><a class="news__item-links-item" href="">\u041A\u043E\u0440\u043F\u0443\u0441\u0430</a><a class="news__item-links-item" href="">\u0417\u0454\u0434\u043D\u0443\u0432\u0430\u0447\u0456</a><a class="news__item-links-item" href="">\u041C\u0430\u043A\u0435\u0442\u043D\u0456 \u043F\u043B\u0430\u0442\u0438</a></p><p class="news__item-footer"> \u041F\u043E\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044F \u043F\u043E\u0432\u043D\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A \u043C\u043E\u0436\u043D\u0430 \u0437\u0430 <a class="common-link news__item-footer-link" href="">\u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C</a> \u0430\u0431\u043E \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430\u0445 \u043D\u0430\u0448\u043E\u0433\u043E <a class="common-link news__item-footer-link" href="">\u0441\u0430\u0439\u0442\u0430</a>. </p></article><article class="news__item"><time class="news__item-time"><img src="" alt=""> 16/03/2017 </time><h3 class="news__item-header-text"> \u041C\u0430\u043A\u0435\u0442\u043D\u0456 \u043F\u043B\u0430\u0442\u0438, \u0437\u0454\u0434\u043D\u0443\u0432\u0430\u0447\u0456 \u0442\u0430 \u043A\u043E\u0440\u043F\u0443\u0441\u0430 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u043A\u0430 E-CALL </h3><p class="news__item-text-description"> \u0420\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F \u0430\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442\u0443 \u043F\u043E \u043C\u0430\u043A\u0435\u0442\u043D\u0438\u043C \u043F\u043B\u0430\u0442\u0430\u043C, \u0437\u0454\u0434\u043D\u0443\u0432\u0430\u0447\u0430\u043C \u0434\u043E \u043D\u0438\u0445 \u0442\u0430 \u043A\u043E\u0440\u043F\u0443\u0441\u0430\u0445 \u0432\u0456\u0434 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u043A\u0430 <a href="#" class="news__item-text-description-link">E-CALL</a></p><p class="news__item-links"><a class="news__item-links-item" href="">\u041A\u043E\u0440\u043F\u0443\u0441\u0430</a><a class="news__item-links-item" href="">\u0417\u0454\u0434\u043D\u0443\u0432\u0430\u0447\u0456</a><a class="news__item-links-item" href="">\u041C\u0430\u043A\u0435\u0442\u043D\u0456 \u043F\u043B\u0430\u0442\u0438</a></p><p class="news__item-footer"> \u041F\u043E\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044F \u043F\u043E\u0432\u043D\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A \u043C\u043E\u0436\u043D\u0430 \u0437\u0430 <a class="common-link news__item-footer-link" href="">\u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C</a> \u0430\u0431\u043E \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430\u0445 \u043D\u0430\u0448\u043E\u0433\u043E <a class="common-link news__item-footer-link" href="">\u0441\u0430\u0439\u0442\u0430</a>. </p></article><article class="news__item"><time class="news__item-time"><img src="" alt=""> 16/03/2017 </time><h3 class="news__item-header-text"> \u041C\u0430\u043A\u0435\u0442\u043D\u0456 \u043F\u043B\u0430\u0442\u0438, \u0437\u0454\u0434\u043D\u0443\u0432\u0430\u0447\u0456 \u0442\u0430 \u043A\u043E\u0440\u043F\u0443\u0441\u0430 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u043A\u0430 E-CALL </h3><p class="news__item-text-description"> \u0420\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F \u0430\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442\u0443 \u043F\u043E \u043C\u0430\u043A\u0435\u0442\u043D\u0438\u043C \u043F\u043B\u0430\u0442\u0430\u043C, \u0437\u0454\u0434\u043D\u0443\u0432\u0430\u0447\u0430\u043C \u0434\u043E \u043D\u0438\u0445 \u0442\u0430 \u043A\u043E\u0440\u043F\u0443\u0441\u0430\u0445 \u0432\u0456\u0434 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u043A\u0430 <a href="#" class="news__item-text-description-link">E-CALL</a></p><p class="news__item-links"><a class="news__item-links-item" href="">\u041A\u043E\u0440\u043F\u0443\u0441\u0430</a><a class="news__item-links-item" href="">\u0417\u0454\u0434\u043D\u0443\u0432\u0430\u0447\u0456</a><a class="news__item-links-item" href="">\u041C\u0430\u043A\u0435\u0442\u043D\u0456 \u043F\u043B\u0430\u0442\u0438</a></p><p class="news__item-footer"> \u041F\u043E\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044F \u043F\u043E\u0432\u043D\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A \u043C\u043E\u0436\u043D\u0430 \u0437\u0430 <a class="common-link news__item-footer-link" href="">\u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C</a> \u0430\u0431\u043E \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430\u0445 \u043D\u0430\u0448\u043E\u0433\u043E <a class="common-link news__item-footer-link" href="">\u0441\u0430\u0439\u0442\u0430</a>. </p></article></div>',1),ye={class:"news__footer"},be={class:"news__footer-link",href:"#"};function Se(t,s){return n(),c("article",$e,[e("h2",ke,o(t.$t("news.header")),1),Ce,e("div",ye,[e("a",be,o(t.$t("news.readAll")),1)])])}const xe=p(ve,[["render",Se]]);const Le={},Ae={class:"linecard borders manufacturers"},Be={class:"linecard__header-text"},Ee=e("div",{class:"manufacturers__list"},[e("img",{class:"manufacturers__image",src:"https://www.ti.com/etc/designs/ti/images/ui/ic-logo.svg",alt:""}),e("img",{class:"manufacturers__image",src:"https://www.st.com/etc/clientlibs/st-site-cx/media/app/images/st-logo.svg",alt:""}),e("img",{class:"manufacturers__image manufacturers__image_size-small",src:"https://www.vishay.com/images/vishay-logo.png",alt:""})],-1);function Pe(t,s){return n(),c("article",Ae,[e("h2",Be,o(t.$t("manufacturers")),1),Ee])}const Me=p(Le,[["render",Pe]]);const Ne={},Ve={class:"linecard borders m-hide"},ze={class:"linecard__header-text"},Oe={class:"linecard__form",action:"#"},We={class:"linecard__form-label",for:"email"},Ge=["placeholder"],He={class:"linecard__form-submit cursor-pointer",type:"submit"};function Ie(t,s){return n(),c("article",Ve,[e("h2",ze,o(t.$t("bulletin.header")),1),e("form",Oe,[e("label",We,o(t.$t("bulletin.label")),1),e("input",{type:"email",required:"",name:"email",id:"email",class:"linecard__form-select bulletin__input",placeholder:t.$t("bulletin.placeholder")},null,8,Ge),e("button",He,o(t.$t("bulletin.submit")),1)])])}const Qe=p(Ne,[["render",Ie],["__scopeId","data-v-89553a67"]]),Fe={class:"content"},Re=h({__name:"HomePage",setup(t){return(s,a)=>(n(),c("main",Fe,[e("div",null,[m(F),m(ee)]),e("div",null,[m(ge),m(xe)]),e("div",null,[m(Me),m(Qe)])]))}});export{Re as default};