(this["webpackJsonpassignment-2"]=this["webpackJsonpassignment-2"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredients_BreadBottom__IIjp7",BreadTop:"BurgerIngredients_BreadTop__3b7FS",Seeds1:"BurgerIngredients_Seeds1__2RpKb",Seeds2:"BurgerIngredients_Seeds2__10cem",Meat:"BurgerIngredients_Meat__17I7l",Cheese:"BurgerIngredients_Cheese__1BEvk",Salad:"BurgerIngredients_Salad__3zpcy",Bacon:"BurgerIngredients_Bacon__3uI-I"}},function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3box2",Open:"SideDrawer_Open__1tFfw",Close:"SideDrawer_Close__2WlqE",Logo:"SideDrawer_Logo__Ww9Y3"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__am8Ab",Label:"BuildControl_Label__28KUn",Less:"BuildControl_Less__iu2nF",More:"BuildControl_More__xi_7C"}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2P-UZ",Logo:"Toolbar_Logo__14GyM",DesktopOnly:"Toolbar_DesktopOnly__1m8Aq"}},function(e,t,n){e.exports={NavingationItem:"NavigationItem_NavingationItem__1DK55",NavigationItem:"NavigationItem_NavigationItem__3KMsN",active:"NavigationItem_active__9IIQP"}},function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__27bpk",OrderButton:"BuildControls_OrderButton__lc1dx",enable:"BuildControls_enable__bzEah"}},function(e,t,n){e.exports={Button:"Button_Button__3r15l",Success:"Button_Success__158g1",Danger:"Button_Danger__3DyJU"}},,,function(e,t,n){e.exports={Content:"Layout_Content__2Y887"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__1XC-z"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__2rdRl"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__2MQ_b"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__1_iRv"}},function(e,t,n){e.exports={Burger:"Burger_Burger__2apOA"}},function(e,t,n){e.exports={Modal:"Modal_Modal__2Rms5"}},,,function(e,t,n){e.exports=n(31)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),i=n.n(o),l=(n(30),n(1)),c=n(2),s=n(4),u=n(3),d=n(5),m=n(15),p=n.n(m),g=n(9),h=n.n(g),_=n(16),b=n.n(_),f=n(17),v=n.n(f),E=function(e){return r.a.createElement("div",{className:v.a.Logo},r.a.createElement("img",{src:b.a,alt:"My Burger"}))},w=n(18),B=n.n(w),y=n(10),k=n.n(y),C=function(e){return r.a.createElement("li",{className:k.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?k.a.active:null},e.children))},O=function(e){return r.a.createElement("ul",{className:B.a.NavigationItems},r.a.createElement(C,{link:"/",active:!0},"Burger Builder"),r.a.createElement(C,{link:"/"},"Checkout"))},N=n(19),I=n.n(N),S=function(e){return r.a.createElement("div",{className:I.a.DrawerToggle,onClick:e.click},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},j=function(e){return r.a.createElement("header",{className:h.a.Toolbar},r.a.createElement(S,{click:e.opensidebar}),r.a.createElement("div",{className:h.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",{className:h.a.DesktopOnly},r.a.createElement(O,null)))},D=n(7),x=n.n(D),L=n(20),T=n.n(L),P=function(e){return e.show?r.a.createElement("div",{onClick:e.clicked,className:T.a.Backdrop}):null},M=function(e){var t=[x.a.SideDrawer];return e.open?t.push(x.a.Open):t.push(x.a.Close),r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:x.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",null,r.a.createElement(O,null))))},A=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.sideDrawerCloseHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerOpenHandler=function(){n.setState({showSideDrawer:!0})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{opensidebar:this.sideDrawerOpenHandler}),r.a.createElement(M,{open:this.state.showSideDrawer,closed:this.sideDrawerCloseHandler}),r.a.createElement("main",{className:p.a.Content},this.props.children))}}]),t}(a.Component),W=n(24),F=n(23),R=n(21),H=n.n(R),U=n(6),Y=n.n(U),z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:Y.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:Y.a.BreadTop},r.a.createElement("div",{className:Y.a.Seeds1}),r.a.createElement("div",{className:Y.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:Y.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:Y.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:Y.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:Y.a.Bacon});break;default:e=null}return e}}]),t}(a.Component),K=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return Object(F.a)(Array(e.props.ingredients[t])).map((function(e,n){return r.a.createElement(z,{key:t+n,type:t})}))}));return 0===(t=t.filter((function(e){return e.length}))).length&&(t="Please start adding ingredients!"),r.a.createElement("div",{className:H.a.Burger},r.a.createElement(z,{type:"bread-top"}),t,r.a.createElement(z,{type:"bread-bottom"}))}}]),t}(a.Component),J=n(11),q=n.n(J),Q=n(8),G=n.n(Q),X=function(e){return r.a.createElement("div",{className:G.a.BuildControl},r.a.createElement("div",{className:G.a.Label},e.label),r.a.createElement("button",{"data-type":e.type,className:G.a.Less,onClick:e.removeIngredient,disabled:e.disabledInfo[e.type]},"Less"),r.a.createElement("button",{"data-type":e.type,className:G.a.More,onClick:e.addIngredient},"More"))},Z=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],$=function(e){return r.a.createElement("div",{className:q.a.BuildControls},r.a.createElement("div",null,"Current Price: ",e.totalPrice.toFixed(2)||0),Z.map((function(t){return r.a.createElement(X,{type:t.type,key:t.label,label:t.label,addIngredient:e.addIngredient,removeIngredient:e.removeIngredient,disabledInfo:e.disabledInfo})})),r.a.createElement("button",{disabled:!e.purchasable,className:q.a.OrderButton,onClick:e.ordered},"ORDER NOW"))},V=n(22),ee=n.n(V),te=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{show:e.purchasing,clicked:e.modalClosed}),r.a.createElement("div",{style:{transform:e.purchasing?"translateY(0)":"translateY(-100vh)",opactity:e.purchasing?1:0},className:ee.a.Modal},e.children))},ne=n(12),ae=n.n(ne),re=function(e){return r.a.createElement("button",{onClick:e.clicked,className:[ae.a.Button,ae.a[e.btnType]].join(" ")},e.children)},oe=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t+1},r.a.createElement("span",{style:{textTransform:"capitalize"}},t,":")," ",e.ingredients[t])}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Your Order:"),r.a.createElement("p",null,"A delicious burger with the following ingredeints:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(re,{clicked:e.cancel,btnType:"Danger"},"Cancel"),r.a.createElement(re,{clicked:e.continue,btnType:"Success"},"Continue"))},ie={salad:.5,cheese:.4,meat:1.3,bacon:.7},le=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},n.purchaseHandler=function(){n.setState({purchasing:!0})},n.purchaseCancel=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){alert("You Continue")},n.updatePurchaseState=function(){n.setState((function(e){var t=e.ingredients;return{purchasable:Object.values(t).reduce((function(e,t){return e+t}))>0}}))},n.addIngredient=function(e){var t=e.target.dataset.type;n.setState((function(e){var n=e.ingredients;return n[t]+=1,{ingredients:n,totalPrice:e.totalPrice+ie[t]}}),n.updatePurchaseState)},n.removeIngredient=function(e){var t=e.target.dataset.type;n.setState((function(e){var n=e.ingredients;return 0===n[t]?{}:(n[t]-=1,{ingredients:n,totalPrice:e.totalPrice-ie[t]})}),n.updatePurchaseState)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=Object(W.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{purchasing:this.state.purchasing,modalClosed:this.purchaseCancel},r.a.createElement(oe,{continue:this.purchaseContinueHandler,cancel:this.purchaseCancel,ingredients:this.state.ingredients,price:this.state.totalPrice})),r.a.createElement(K,{ingredients:this.state.ingredients}),r.a.createElement($,{disabledInfo:e,addIngredient:this.addIngredient,removeIngredient:this.removeIngredient,totalPrice:this.state.totalPrice,purchasable:this.state.purchasable,ordered:this.purchaseHandler}))}}]),t}(a.Component),ce=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A,null,r.a.createElement(le,null)))}}]),t}(r.a.Component),se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(ce,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/burger",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/burger","/service-worker.js");se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ue(t,e)}))}}()}],[[25,1,2]]]);
//# sourceMappingURL=main.f6b59bc3.chunk.js.map