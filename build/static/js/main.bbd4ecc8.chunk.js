(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],{26:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/loader.5177165e.gif"},31:function(e,t,a){e.exports=a(45)},36:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c);a(36),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(8),l=a(7),o=a(30),u=(Object(l.c)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_NEW_CONTACT":return e.length>0&&(e=[]),[].concat(Object(o.a)(e),[Object.assign({},t.contact)]);case"REMOVE_CONTACT":return e.filter((function(e,a){return a!==t.id}));default:return e}}}),a(28)),h=a(13),d={city:"",restaurants:[],loader:!0},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET_STATE":return d;case"SET_CITY":return Object(h.a)(Object(h.a)({},e),{},{city:t.city});case"FETCH_RESTAURANTS":return Object(h.a)(Object(h.a)({},e),{},{restaurants:t.restaurant,loader:t.loader});default:return e}},p=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,E=a(10),f=a(2),v=(a(41),a(16)),b=a(17),y=a(12),g=a(19),O=a(18),T=void 0,j=function(e,t){return{type:"FETCH_RESTAURANTS",restaurant:e,loader:t}},S=(a(26),function(e){Object(g.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(y.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(y.a)(n)),n.state={city:""},n}return Object(b.a)(a,[{key:"handleChange",value:function(e){e.preventDefault(),this.setState({city:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.dispatch({type:"RESET_STATE"}),this.props.dispatch({type:"SET_CITY",city:this.state.city}),this.props.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(t,a){fetch("https://opentable.herokuapp.com/api/restaurants?city="+e).then((function(e){return e.json()})).then((function(e){console.log("resultAction "+e.restaurants),t(j(e.restaurants,!1))}),(function(e){T.setState({})}))}}(this.state.city,1)),this.props.history.push("/listing")}},{key:"render",value:function(){return r.a.createElement("div",{className:"content-container content"},r.a.createElement("div",{className:"page-header"},r.a.createElement("h2",{className:"page-header__title"},"Find your restaurant")),r.a.createElement("div",{class:"search-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"Search by city",name:"city",onChange:this.handleChange,value:this.state.city,required:!0}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{class:"fa fa-search"})))))}}]),a}(n.Component)),_=Object(s.b)()(S),C=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(_,e))},N=a(29),A=a.n(N),k=(a(42),function(e){Object(g.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={start:1,restaurants:[]},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return console.log("renderCity "+this.props.city),console.log("renderLength "+this.props.restaurants.length),r.a.createElement("div",null,this.props.loader?r.a.createElement("div",{className:"loader"},r.a.createElement("img",{src:A.a,alt:"loading.."})):r.a.createElement("div",null,r.a.createElement("h3",null,"Restaurants in ",this.props.city),r.a.createElement("hr",null),r.a.createElement("ul",null,this.props.restaurants.map((function(e,t){return r.a.createElement("li",{key:t},e.name," --- ",e.address," --- ",e.price)})))))}}]),a}(n.Component)),w=Object(s.b)((function(e,t){var a=e.restaurants,n=e.city;e.error;return{restaurants:a,city:n,loader:e.loader}}))(k);a(43);function R(){return r.a.createElement("div",{className:"App-name"},r.a.createElement("div",{className:"App-symbol"},r.a.createElement("i",{className:"fa fa-cutlery fa-2x black","aria-hidden":"true"})),r.a.createElement("div",{className:"App-title"},r.a.createElement(E.b,{className:"App-title__link",to:"/"},r.a.createElement("h1",null,"Restaurant Finder"))))}var x=function(e){return r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/",component:C,exact:!0}),r.a.createElement(f.a,{path:"/listing",component:w}))))},D=Object(l.e)(m,p(Object(l.a)(u.a)));i.a.render(r.a.createElement(s.a,{store:D},r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.bbd4ecc8.chunk.js.map