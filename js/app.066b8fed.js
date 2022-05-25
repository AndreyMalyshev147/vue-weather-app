(function(e){function t(t){for(var a,i,o=t[0],s=t[1],u=t[2],b=0,d=[];b<o.length;b++)i=o[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(d.length)d.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,o=1;o<r.length;o++){var s=r[o];0!==c[s]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},c={app:0},n=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-weather-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=s;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2e62":function(e,t,r){"use strict";r("5c28")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("e9c4");var a=r("7a23"),c={class:"header"};function n(e,t,r,n,i,o){var s=Object(a["v"])("Header"),u=Object(a["v"])("CurrentLocation"),l=Object(a["v"])("CityWeatherList"),b=Object(a["v"])("router-view");return Object(a["q"])(),Object(a["e"])(a["a"],null,[Object(a["f"])("div",{class:Object(a["m"])("main-container main-container__".concat(e.getTimeOfDay.toLowerCase()))},[Object(a["f"])("header",c,[Object(a["g"])(s)]),Object(a["f"])("main",null,[Object(a["g"])(u),Object(a["g"])(l)])],2),Object(a["g"])(b)],64)}var i=r("5530"),o=r("5502"),s={class:"header__search"};function u(e,t,r,c,n,i){return Object(a["q"])(),Object(a["e"])("div",s,[Object(a["f"])("form",{class:"header__form",onSubmit:t[2]||(t[2]=Object(a["C"])((function(){}),["prevent"]))},[Object(a["B"])(Object(a["f"])("input",{type:"text",placeholder:"Enter the city...","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.city=e})},null,512),[[a["z"],n.city]]),Object(a["f"])("button",{onClick:t[1]||(t[1]=function(){return i.addCityToList&&i.addCityToList.apply(i,arguments)})},"ADD CITY")],32)])}var l={name:"Header",data:function(){return{city:""}},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["getCitiesWeather"])),{},{addCityToList:function(){this.getCitiesWeather(this.city),this.city=""}})},b=r("6b0d"),d=r.n(b);const f=d()(l,[["render",u]]);var h=f,p=(r("b0c0"),r("b680"),r("a4d3"),r("e01a"),{key:0,class:"big-card"}),O={class:"big-card__city"},j={class:"big-card__country"},g={class:"big-card__temperature"},m={class:"big-card__description"},_={class:"big-card__temperature big-card__temperature--min-max"},v={class:"big-card__temperature big-card__temperature--other"},w={class:"big-card__temperature big-card__temperature--other big-card__temperature--feels-like"},y=Object(a["f"])("span",null,"feels like",-1),C={class:"big-card__temperature big-card__temperature--other big-card__temperature--feels-like"},W=Object(a["f"])("span",null,"humidity",-1);function x(e,t,r,c,n,i){return 0!==e.getCurLocWeather.length?(Object(a["q"])(),Object(a["e"])("div",p,[Object(a["f"])("div",{class:Object(a["m"])("big-card__wrap big-card__wrap--".concat(e.getMainWeather))},[Object(a["f"])("div",{class:Object(a["m"])("big-card__weather-icon big-card__weather-icon--".concat(e.getMainWeather))},null,2),Object(a["f"])("div",O,[Object(a["f"])("span",null,Object(a["x"])(e.getCurLocWeather.name),1)]),Object(a["f"])("div",j,[Object(a["f"])("span",null,Object(a["x"])(e.getCurLocWeather.sys.country),1)]),Object(a["f"])("div",g,[Object(a["f"])("span",null,Object(a["x"])(e.getCurLocWeather.main.temp.toFixed(1))+"°",1)]),Object(a["f"])("div",m,[Object(a["f"])("span",null,Object(a["x"])(e.getCurLocWeather.weather[0].description),1)]),Object(a["f"])("div",_,[Object(a["f"])("span",null,Object(a["x"])(e.getCurLocWeather.main.temp_min.toFixed(1))+"°",1),Object(a["f"])("span",null,Object(a["x"])(e.getCurLocWeather.main.temp_max.toFixed(1))+"°",1)]),Object(a["f"])("div",v,[Object(a["f"])("div",w,[Object(a["f"])("span",null,Object(a["x"])(e.getCurLocWeather.main.feels_like.toFixed(1))+"°",1),y]),Object(a["f"])("div",C,[Object(a["f"])("span",null,Object(a["x"])(e.getCurLocWeather.main.humidity)+"%",1),W])])],2)])):Object(a["d"])("",!0)}var L={name:"CurrentLocation",computed:Object(i["a"])({},Object(o["c"])(["getCurLocWeather","getMainWeather"]))};const k=d()(L,[["render",x]]);var P=k,M={class:"weather__list-wrap"},S={class:"weather__list"},D={class:"card__delete"},T=["onClick"],q=Object(a["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 92 92",fill:"#f00"},[Object(a["f"])("path",{d:"M70.7 64.3c1.8 1.8 1.8 4.6 0 6.4-.9.9-2 1.3-3.2 1.3-1.2 0-2.3-.4-3.2-1.3L46 52.4 27.7 70.7c-.9.9-2 1.3-3.2 1.3s-2.3-.4-3.2-1.3c-1.8-1.8-1.8-4.6 0-6.4L39.6 46 21.3 27.7c-1.8-1.8-1.8-4.6 0-6.4 1.8-1.8 4.6-1.8 6.4 0L46 39.6l18.3-18.3c1.8-1.8 4.6-1.8 6.4 0 1.8 1.8 1.8 4.6 0 6.4L52.4 46l18.3 18.3z"})],-1),I=[q],F={class:"card__city"},B={class:"card__country"},J={class:"card__temperature"},H={key:0,class:"weather__btn-box"},N=["disabled"],z=Object(a["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"14",viewBox:"0 0 18 14"},[Object(a["f"])("g",{fill:"none","fill-rule":"evenodd",stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",transform:"translate(1 1)"},[Object(a["f"])("path",{d:"M0 6h16M10 0l6 6-6 6"})])],-1),R=[z],A=["disabled"],E=Object(a["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"14",viewBox:"0 0 18 14"},[Object(a["f"])("g",{fill:"none","fill-rule":"evenodd",stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",transform:"translate(1 1)"},[Object(a["f"])("path",{d:"M0 6h16M10 0l6 6-6 6"})])],-1),U=[E];function V(e,t,r,c,n,i){return Object(a["q"])(),Object(a["e"])("div",M,[Object(a["f"])("ul",S,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["u"])(i.filteredList,(function(t){return Object(a["q"])(),Object(a["e"])("li",{class:"weather__list-item",key:t.id},[Object(a["f"])("div",{class:Object(a["m"])("card__wrap card__wrap--".concat(t.weather[0].main))},[Object(a["f"])("div",D,[Object(a["f"])("button",{onClick:Object(a["C"])((function(r){return e.removeCities(t)}),["stop"])},I,8,T)]),Object(a["f"])("div",F,[Object(a["f"])("span",null,Object(a["x"])(t.name),1)]),Object(a["f"])("div",B,[Object(a["f"])("span",null,Object(a["x"])(t.sys.country),1)]),Object(a["f"])("div",J,[Object(a["f"])("span",null,Object(a["x"])(t.main.temp.toFixed(1))+"°",1)]),Object(a["f"])("div",{class:Object(a["m"])("card__weather card__weather--".concat(t.weather[0].main))},null,2)],2)])})),128))]),e.citiesList.length>5?(Object(a["q"])(),Object(a["e"])("div",H,[Object(a["f"])("button",{class:"weather__btn weather__btn--prev",disabled:1===n.currentPage,onClick:t[0]||(t[0]=function(e){return i.changePage(-1)})},R,8,N),Object(a["f"])("button",{class:"weather__btn weather__btn--next",disabled:n.currentPage===Math.ceil(e.citiesList.length/n.perPage),onClick:t[1]||(t[1]=function(e){return i.changePage(1)})},U,8,A)])):Object(a["d"])("",!0)])}r("fb6a");var Y={data:function(){return{perPage:5,currentPage:1,pageCount:null}},computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])(["citiesList","getCurLocWeather"])),{},{filteredList:function(){var e=(this.currentPage-1)*this.perPage,t=this.currentPage*this.perPage,r=this.citiesList.slice(e,t);return r}}),methods:Object(i["a"])(Object(i["a"])({},Object(o["d"])(["removeCities"])),{},{changePage:function(e){this.currentPage=this.currentPage+e}})};const $=d()(Y,[["render",V]]);var G=$,K={components:{Header:h,CurrentLocation:P,CityWeatherList:G},data:function(){return{timeOfDay:!0}},beforeCreate:function(){this.$store.commit("initialiseStore")},computed:Object(i["a"])({},Object(o["c"])(["getTimeOfDay"])),methods:Object(i["a"])({},Object(o["b"])(["fetchWeatherInCurrentLocation"])),created:function(){this.fetchWeatherInCurrentLocation()}};r("2e62");const Q=d()(K,[["render",n]]);var X=Q,Z=r("6c02"),ee=[],te=Object(Z["a"])({history:Object(Z["b"])("/vue-weather-app/"),routes:ee}),re=te,ae=r("c7eb"),ce=r("1da1"),ne=(r("ac1f"),r("1276"),r("99af"),r("caad"),r("2532"),r("bc3a")),ie=r.n(ne),oe={weather:{},isDay:"",mainWeather:""},se={getCurLocWeather:function(e){return e.weather},getTimeOfDay:function(e){return e.isDay},getMainWeather:function(e){return e.mainWeather}},ue={fetchWeatherInCurrentLocation:function(e){return Object(ce["a"])(Object(ae["a"])().mark((function t(){var r,a,c,n,i,o;return Object(ae["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,ie.a.get("https://ipinfo.io");case 4:return a=t.sent,c=a.data.loc.split(","),n={lat:c[0],lon:c[1]},t.next=9,ie.a.get("https://api.openweathermap.org/data/2.5/weather?units=metric&lat=".concat(n.lat,"&lon=").concat(n.lon,"&appid=8ad1811ee44e3fe3020912cc0d2ef4e0"));case 9:i=t.sent,o=i.data,r("updateWeather",o),r("checkDay",o),r("checkMainWeather",o),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](1),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[1,16]])})))()}},le={initialiseStore:function(e){localStorage.getItem("store")&&this.replaceState(Object.assign(e,JSON.parse(localStorage.getItem("store"))))},updateWeather:function(e,t){e.weather=t},checkDay:function(e,t){t.weather[0].icon.includes("n")?e.isDay="Night":e.isDay="Day"},checkMainWeather:function(e,t){var r=t.weather[0].main;r.includes("Clouds")&&(e.mainWeather="Clouds"),r.includes("Thunderstorm")&&(e.mainWeather="Thunderstorm"),r.includes("Rain")&&(e.mainWeather="Rain"),r.includes("Clear")&&(e.mainWeather="Clear"),r.includes("Snow")&&(e.mainWeather="Snow")}},be={state:oe,getters:se,actions:ue,mutations:le},de=(r("c740"),r("a434"),{citiesWeather:[]}),fe={citiesList:function(e){return e.citiesWeather}},he={getCitiesWeather:function(e,t){return Object(ce["a"])(Object(ae["a"])().mark((function r(){var a,c,n;return Object(ae["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.next=3,ie.a.get("https://api.openweathermap.org/data/2.5/weather?units=metric&q=".concat(t,"&appid=8ad1811ee44e3fe3020912cc0d2ef4e0"));case 3:c=r.sent,n=c.data,a("addCitiesWeather",n);case 6:case"end":return r.stop()}}),r)})))()}},pe={addCitiesWeather:function(e,t){e.citiesWeather.push(t)},removeCities:function(e,t){var r=e.citiesWeather.findIndex((function(e){return e.id===t.id}));e.citiesWeather.splice(r,1)}},Oe={state:de,getters:fe,mutations:pe,actions:he},je=Object(o["a"])({modules:{CurrentLocWeather:be,CitiesWeather:Oe}});je.subscribe((function(e,t){localStorage.setItem("store",JSON.stringify(t))})),Object(a["c"])(X).use(je).use(re).mount("#app")},"5c28":function(e,t,r){}});
//# sourceMappingURL=app.066b8fed.js.map