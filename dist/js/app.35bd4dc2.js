(function(t){function e(e){for(var n,c,r=e[0],o=e[1],l=e[2],d=0,f=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,r=1;r<i.length;r++){var o=i[r];0!==a[o]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=i[0]))}return t}var n={},a={app:0},s=[];function c(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=n,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(i,n,function(e){return t[e]}.bind(null,n));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=o;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"012e":function(t,e,i){},"034f":function(t,e,i){"use strict";i("85ec")},"055e":function(t,e,i){"use strict";i("adbf")},"0d38":function(t,e,i){},"1e64":function(t,e,i){},"1f6a":function(t,e,i){"use strict";i("7346")},2801:function(t,e,i){},"2b54":function(t,e,i){},3410:function(t,e,i){"use strict";i("2801")},3417:function(t,e,i){"use strict";i("cd77")},3593:function(t,e,i){},"3ce1":function(t,e,i){"use strict";i("c785")},"3db4":function(t,e,i){},"3fd9":function(t,e,i){},"404c":function(t,e,i){},"4eb8":function(t,e,i){},"4f57":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},s=[],c={name:"App"},r=c,o=(i("034f"),i("2877")),l=Object(o["a"])(r,a,s,!1,null,null,null),u=l.exports,d=(i("615f"),i("92e2")),f=(i("6894"),i("e11d")),p=(i("c194"),i("7744")),m=(i("6d73"),i("473d")),v=(i("d1cf"),i("ee83")),h=(i("0cc8"),i("3104")),_=(i("91d5"),i("f0ca")),b=(i("bda7"),i("5e46")),C=(i("5f1a"),i("a3e2")),g=(i("da3c"),i("0b33")),y=(i("e7e5"),i("d399")),L=(i("66b9"),i("b650")),w=(i("9cb7"),i("66fd")),S=(i("c3a6"),i("ad06")),O=(i("a52c"),i("2ed4")),x=(i("537a"),i("ac28")),j=i("8c4f"),$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Header",{attrs:{iSearch:t.inputSearch}}),i("List"),i("Swiper1",{attrs:{List:t.swiperList}}),i("Addr"),i("Icon",{attrs:{iList:t.iconList}}),i("div",{attrs:{id:"fixed"}}),i("keep-alive",[i("Footer")],1)],1)},k=[],E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"Title"},[t._v("同程旅行")]),i("div",{staticClass:"Header"},[i("router-link",{attrs:{to:"/search"}},[i("div",{staticClass:"header-input"},[i("i",{staticClass:"iconfont icon-sousuo"}),t._v(" "+t._s(this.iSearch)+" "),i("i",{staticClass:"iconfont icon-kefu r"})])])],1)])},I=[],H={name:"Header",props:{iSearch:String}},M=H,T=(i("1f6a"),Object(o["a"])(M,E,I,!1,null,"1eb37b30",null)),A=T.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-sticky",{attrs:{"offset-top":50}},[i("div",{staticClass:"list"},[i("p",{staticClass:"active"},[t._v("火车票")]),i("p",[t._v("机票")]),i("p",[t._v("酒店")]),i("p",[t._v("汽车船票")]),i("p",[t._v("打车")]),i("p",[t._v("门票")])])])],1)},D=[],P={name:"List"},R=P,B=(i("6391"),Object(o["a"])(R,F,D,!1,null,"24f0e6b0",null)),U=B.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[t.showList?i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[t._l(t.List,(function(t){return i("swiper-slide",{key:t.id},[i("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},J=[],N={name:"Swiper1",props:{List:Array},data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination"},loop:!0,autoplay:!0}}},computed:{showList:function(){return this.List.length}}},Y=N,W=(i("a57f"),Object(o["a"])(Y,z,J,!1,null,"56f1ec4e",null)),G=W.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Icons"},[t.isShow?i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},t._l(t.pages,(function(e,n){return i("swiper-slide",{key:n},t._l(e,(function(e){return i("div",{key:e.id,staticClass:"Icons-content"},[i("div",{class:e.iconClass}),i("p",[t._v(t._s(e.iconContent))])])})),0)})),1):t._e()],1)},Q=[],V=(i("d3b7"),i("159b"),{name:"Icon",props:{iList:Array},data:function(){return{swiperOptions:{autoplay:!0,loop:!0}}},computed:{pages:function(){var t=[];return this.iList.forEach((function(e,i){var n=Math.floor(i/8);t[n]||(t[n]=[]),t[n].push(e)})),t},isShow:function(){return this.iList.length}}}),X=V,Z=(i("91a4"),Object(o["a"])(X,K,Q,!1,null,"3228961b",null)),q=Z.exports,tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"address"},[i("router-link",{attrs:{to:"/searchCity"}},[i("div",{staticClass:"from"},[t._v(" "+t._s(this.$store.state.city1)+" ")])]),t._m(0),i("router-link",{attrs:{to:"/searchCity"}},[i("div",{staticClass:"dest"},[t._v(" "+t._s(this.$store.state.city2)+" ")])]),i("div",{staticClass:"time"},[i("van-cell",{attrs:{title:"选择出发日期",value:t.date,size:"large"},on:{click:function(e){t.show=!0}}}),i("van-calendar",{staticClass:"date-text",attrs:{"show-confirm":!1},on:{confirm:t.onConfirm},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1),i("button",[t._v("火车票查询")]),t._m(1)],1)])},et=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icon"},[i("i",{staticClass:"iconfont icon-huoche"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-history"},[i("p",[t._v("上海-西安")]),i("p",[t._v("中山-长沙")]),i("p",[t._v("中山-深圳北站")]),i("p",[t._v("中山-广州南站")]),i("p",[t._v("成都-陕西")])])}],it=(i("99af"),{name:"Addr",components:{},data:function(){return{date:"",show:!1}},methods:{formatDate:function(t){return"".concat(t.getMonth()+1,"/").concat(t.getDate())},onConfirm:function(t){this.show=!1,this.date=this.formatDate(t)}}}),nt=it,at=(i("be99"),Object(o["a"])(nt,tt,et,!1,null,"31d604e8",null)),st=at.exports,ct=i("bc3a"),rt=i.n(ct),ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("van-tabbar",{attrs:{"active-color":"#7b24db","inactive-color":"#B7BBC0"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tabbar-item",{attrs:{replace:"",to:"/home",icon:"wap-home",name:"home"}},[t._v("首页")]),i("van-tabbar-item",{attrs:{replace:"",to:"/mall",icon:"shop",name:"mall"}},[t._v("里程商城")]),i("van-tabbar-item",{attrs:{replace:"",to:"/order",icon:"balance-list",name:"order"}},[t._v("订单")]),i("van-tabbar-item",{attrs:{replace:"",to:"/mine",icon:"manager",name:"mine"}},[t._v("我的")])],1)],1)},lt=[],ut={name:"Footer",data:function(){return{active:"home"}}},dt=ut,ft=(i("78ed"),Object(o["a"])(dt,ot,lt,!1,null,"349e7cb0",null)),pt=ft.exports,mt={name:"Home",data:function(){return{inputSearch:"",iconList:[],swiperList:[]}},components:{Header:A,List:U,Swiper1:G,Icon:q,Footer:pt,Addr:st},methods:{getHomeInfo:function(){rt.a.get("/home.json").then(this.getHomeInfoSucc).catch((function(t){console.log(t)}))},getHomeInfoSucc:function(t){t=t.data,console.log(t),t.ret&&t.data&&(this.inputSearch=t.data.inputSearch,this.iconList=t.data.iconList,this.swiperList=t.data.swiperList)}},mounted:function(){this.getHomeInfo()}},vt=mt,ht=(i("3410"),Object(o["a"])(vt,$,k,!1,null,"138e5a42",null)),_t=ht.exports,bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("order-header"),i("van-tabs",{staticClass:"selectTab",attrs:{swipeable:"",color:"#07C782","line-height":"8px","title-style":"fontSize=20px"}},[i("van-tab",{attrs:{title:"待出行订单"}},[i("orderReady"),i("cheapList",{attrs:{cList:t.cheapList}})],1),i("van-tab",{attrs:{title:"全部订单"}},[i("orderTime"),i("orderList",{attrs:{oList:t.orderList}})],1)],1)],1)},Ct=[],gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},[i("div",{staticClass:"list-content  border-bottom"},[i("div",{staticClass:"header"},[i("router-link",{attrs:{to:"/home"}},[i("i",{staticClass:"iconfont icon-shouye"})]),i("p",[t._v("订单")])],1)])])},yt=[],Lt={name:"orderHeader"},wt=Lt,St=(i("fbd1"),Object(o["a"])(wt,gt,yt,!1,null,"0c229122",null)),Ot=St.exports,xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"book"},[i("p",[t._v("预订日期："+t._s(t._f("dateFormat")(t.time)))])])])},jt=[],$t=(i("4d90"),{name:"orderTime",data:function(){return{time:Date.now()}},filters:{dateFormat:function(t,e){var i=new Date(t),n=i.getFullYear()+"",a=i.getMonth()+1+"",s=i.getDate()+"",c=i.getHours()+"",r=i.getMinutes()+"",o=i.getSeconds()+"";return e&&"yyyy-mm-dd"===e?"".concat(n,"-").concat(a.padStart(2,"0"),"-").concat(s.padStart(2,"0")):"".concat(n,"-").concat(a.padStart(2,"0"),"-").concat(s.padStart(2,"0")," ").concat(c.padStart(2,"0"),":").concat(r.padStart(2,"0"),":").concat(o.padStart(2,"0"))}}}),kt=$t,Et=(i("bc7b"),Object(o["a"])(kt,xt,jt,!1,null,"755a5561",null)),It=Et.exports,Ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.oList,(function(e){return i("div",{key:e.id,staticClass:"List border-topbottom"},[i("div",{staticClass:"one"},[i("i",{staticClass:"l",class:e.iconClass}),i("p",{staticClass:"addr l"},[t._v(t._s(e.addrList))]),i("p",{staticClass:"price"},[t._v(t._s(e.priceList))])]),i("div",{staticClass:"two"},[i("p",{staticClass:"Type l"},[t._v(t._s(e.typeList))]),i("p",{staticClass:"Time l"},[t._v(t._s(e.timeList))]),i("p",{staticClass:"solution"},[t._v(t._s(e.solutionList))])]),t._m(0,!0)])})),0)},Mt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"btns"},[i("button",[t._v("删除订单")]),i("button",[t._v("在线咨询")]),i("button",[t._v("再次预订")])])}],Tt={name:"orderList",props:{oList:Array},data:function(){return{time:Date.now()}},filters:{dateFormat:function(t,e){var i=new Date(t),n=i.getFullYear()+"",a=i.getMonth()+1+"",s=i.getDate()+"",c=i.getHours()+"",r=i.getMinutes()+"",o=i.getSeconds()+"";return e&&"yyyy-mm-dd"===e?"".concat(n,"-").concat(a.padStart(2,"0"),"-").concat(s.padStart(2,"0")):e&&"mm-dd"===e?"".concat(a.padStart(2,"0"),"月").concat(s.padStart(2,"0"),"日"):"".concat(n,"-").concat(a.padStart(2,"0"),"-").concat(s.padStart(2,"0")," ").concat(c.padStart(2,"0"),":").concat(r.padStart(2,"0"),":").concat(o.padStart(2,"0"))}}},At=Tt,Ft=(i("6f8c"),Object(o["a"])(At,Ht,Mt,!1,null,"669911a7",null)),Dt=Ft.exports,Pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-empty",{attrs:{description:"暂无待出行订单"}}),t._m(0)],1)},Rt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("h3",[t._v("特价车票")]),i("div",{staticClass:"more"},[i("div",{staticClass:"more-content"},[i("p",[t._v("查看更多")]),i("i",{staticClass:"iconfont icon-fanhui"})])])])}],Bt={name:"orderReady"},Ut=Bt,zt=(i("5dcc"),Object(o["a"])(Ut,Pt,Rt,!1,null,"41151ed0",null)),Jt=zt.exports,Nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.cList,(function(e){return i("div",{key:e.id,staticClass:"cheap"},[i("div",{staticClass:"addr"},[i("div",{staticClass:"addr-list"},[t._v(" "+t._s(e.fromList)+" "),i("i",{staticClass:"iconfont ",class:e.iconClass}),t._v(" "+t._s(e.toList)+" ")]),i("h3",[t._v(t._s(e.timeList))])]),i("div",{staticClass:"price"},[i("p",[t._v(t._s(e.moneyList))]),i("p",[t._v(t._s(e.discountList))])])])})),0)},Yt=[],Wt={name:"cheapList",props:{cList:Array}},Gt=Wt,Kt=(i("3ce1"),Object(o["a"])(Gt,Nt,Yt,!1,null,"71eec5b4",null)),Qt=Kt.exports,Vt={name:"List",components:{orderHeader:Ot,orderTime:It,orderList:Dt,orderReady:Jt,cheapList:Qt},data:function(){return{orderList:[],cheapList:[]}},methods:{onClick:function(t,e){Object(y["a"])(e)},getOrderInfo:function(){rt.a.get("/order.json").then(this.getOrderInfoSucc).catch((function(t){console.log(t)}))},getOrderInfoSucc:function(t){t=t.data,t.ret&&t.data&&(this.orderList=t.data.orderList,this.cheapList=t.data.cheapList)}},mounted:function(){this.getOrderInfo()}},Xt=Vt,Zt=(i("c554"),Object(o["a"])(Xt,bt,Ct,!1,null,"578ea50a",null)),qt=Zt.exports,te=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("searchHeader"),i("searchList",{attrs:{mCities:t.Cities}})],1)},ee=[],ie=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"Header"},[i("router-link",{attrs:{to:"/"}},[i("i",{staticClass:"iconfont icon-fanhui"})]),i("div",{staticClass:"Title"},[t._v("同程旅行")])],1),t._m(0)])},ne=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search"},[i("input",{staticClass:"header-input",attrs:{type:"text",placeholder:"同程出行18会员日"}}),i("i",{staticClass:"iconfont icon-sousuo"}),i("i",{staticClass:"iconfont icon-kefu"}),i("button",[t._v("搜索")])])}],ae={name:"searchHeader",props:{iSearch:String}},se=ae,ce=(i("fa4e"),Object(o["a"])(se,ie,ne,!1,null,"3970e641",null)),re=ce.exports,oe=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.mCities,(function(e,n){return i("van-index-bar",{key:n,ref:n,refInFor:!0,attrs:{"index-list":t.indexList}},[i("van-index-anchor",{attrs:{index:"A"}},[t._v(t._s(n))]),t._l(e,(function(t){return i("div",{key:t.id},[i("van-cell",{attrs:{title:t.name}})],1)}))],2)})),1)},le=[],ue={name:"searchList",data:function(){return{indexList:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]}},props:{mCities:Object}},de=ue,fe=Object(o["a"])(de,oe,le,!1,null,"7adab580",null),pe=fe.exports,me={name:"Search",components:{searchHeader:re,searchList:pe},data:function(){return{Cities:{}}},methods:{getCityInfo:function(){rt.a.get("/city.json").then(this.getCityInfoSucc).catch((function(t){console.log(t)}))},getCityInfoSucc:function(t){console.log(t),t=t.data,t.ret&&t.data&&(this.Cities=t.data.cities)}},mounted:function(){this.getCityInfo()}},ve=me,he=Object(o["a"])(ve,te,ee,!1,null,"1f9fc2b4",null),_e=he.exports,be=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mineHeader"),i("mineList",{attrs:{mList:t.mineLists}}),i("mineOrder",{attrs:{mOrder:t.mineOrders}}),i("mineTool",{attrs:{tList:t.mineTools}}),t._m(0),i("keep-alive",[i("Footer")],1)],1)},Ce=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icon"},[i("i",{staticClass:"iconfont icon-mayijinfu"})])}],ge=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"header-bar"},[i("router-link",{attrs:{to:"/home"}},[i("i",{staticClass:"iconfont icon-shouye"})]),i("p",{staticClass:"wo"},[t._v("我的")])],1),t._m(0),i("div",{staticClass:"card"},[t._v(" 会员卡 ")])])},ye=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"useMsg"},[i("img",{attrs:{src:"https://img1.baidu.com/it/u=2041210536,1832675485&fm=26&fmt=auto",alt:"头像"}}),i("div",{staticClass:"useName"},[i("p",[t._v("昵称")]),i("div",{staticClass:"vip"},[i("span",{staticClass:"iconfont icon-huiyuan"}),i("p",[t._v("会员")])])]),i("div",{staticClass:"sign"},[t._v("签到")])])}],Le={name:"mineHeader"},we=Le,Se=(i("a7d2"),Object(o["a"])(we,ge,ye,!1,null,"15c91c4a",null)),Oe=Se.exports,xe=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"List border-bottom"},t._l(t.mList,(function(e){return i("div",{key:e.id,staticClass:"List-content"},[i("p",[t._v(t._s(e.titleList))]),i("div",[t._v(" "+t._s(e.contentList)+" "),i("i",{class:e.iconClass})])])})),0)},je=[],$e={name:"mineList",props:{mList:Array}},ke=$e,Ee=(i("3417"),Object(o["a"])(ke,xe,je,!1,null,"7fdeb935",null)),Ie=Ee.exports,He=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"list"},[i("h3",[t._v("我的订单")]),t._l(t.mOrder,(function(e){return i("div",{key:e.id},[i("i",{staticClass:"iconfont",class:e.iconClass}),i("p",[t._v(t._s(e.titleList))])])}))],2)])},Me=[],Te={name:"mineOrder",props:{mOrder:Array}},Ae=Te,Fe=(i("7b7f"),Object(o["a"])(Ae,He,Me,!1,null,"1880b4c8",null)),De=Fe.exports,Pe=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"list"},[t._m(0),t._l(t.tList,(function(e){return i("div",{key:e.id,staticClass:"toolList"},[i("i",{staticClass:"iconfont ",class:e.iconClass}),i("p",[t._v(t._s(e.titleList))])])}))],2)])},Re=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("h3",[t._v("出行工具")]),i("div",{staticClass:"more"},[i("div",{staticClass:"more-content"},[i("p",[t._v("更多")]),i("i",{staticClass:"iconfont icon-fanhui"})])])])}],Be={name:"mineTool",props:{tList:Array}},Ue=Be,ze=(i("dc04"),Object(o["a"])(Ue,Pe,Re,!1,null,"849d75a2",null)),Je=ze.exports,Ne={name:"Mine",data:function(){return{mineLists:[],mineOrders:[],mineTools:[]}},components:{mineHeader:Oe,mineList:Ie,mineOrder:De,mineTool:Je,Footer:pt},methods:{getMineInfo:function(){rt.a.get("/mine.json").then(this.getMineInfoSucc).catch((function(t){console.log(t)}))},getMineInfoSucc:function(t){t=t.data,console.log(t),t.ret&&t.data&&(this.mineLists=t.data.mineList,this.mineOrders=t.data.mineOrder,this.mineTools=t.data.mineTool)}},mounted:function(){this.getMineInfo()}},Ye=Ne,We=(i("b215"),Object(o["a"])(Ye,be,Ce,!1,null,"2947a86a",null)),Ge=We.exports,Ke=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mallHeader"),i("mallSearch"),i("mallSwipe",{attrs:{mSwipe:t.mallSwipe}}),i("mallMsg"),i("Recommend",{attrs:{rdList:t.recommendList}}),i("keep-alive",[i("Footer")],1)],1)},Qe=[],Ve=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"header"},[i("router-link",{attrs:{to:"/home"}},[i("van-icon",{attrs:{name:"wap-home-o",size:"0.4rem"}})],1),i("p",[t._v("里程商城")])],1)])},Xe=[],Ze={name:"mallHeader"},qe=Ze,ti=(i("7bc8"),Object(o["a"])(qe,Ve,Xe,!1,null,"eac6b052",null)),ei=ti.exports,ii=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"wrapper"},[t.showList?i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[t._l(t.mSwipe,(function(t){return i("swiper-slide",{key:t.id},[i("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)])},ni=[],ai=(i("66cf"),i("343b"));n["default"].use(ai["a"]);var si={name:"mallSwipe",props:{mSwipe:Array},data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination"},loop:!0,autoplay:!0}}},computed:{showList:function(){return this.mSwipe.length}}},ci=si,ri=(i("055e"),Object(o["a"])(ci,ii,ni,!1,null,"b4b3ce90",null)),oi=ri.exports,li=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ui=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{staticClass:"header-input",attrs:{type:"text",placeholder:"同程出行18会员日"}}),i("i",{staticClass:"iconfont icon-sousuo"}),i("p",[t._v("694里程")])])])}],di={name:"mallSearch"},fi=di,pi=(i("9bc5"),Object(o["a"])(fi,li,ui,!1,null,"147d173d",null)),mi=pi.exports,vi=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Msg"},[i("van-card",{attrs:{num:"2",tag:"HOT",price:"2.00",desc:"描述信息",title:"商品标题",thumb:"https://img1.baidu.com/it/u=3275206406,773753497&fm=26&fmt=auto","origin-price":"10.00"}}),i("van-card",{attrs:{num:"3",price:"20.00",desc:"描述信息",title:"商品标题",thumb:"https://img1.baidu.com/it/u=3275206406,773753497&fm=26&fmt=auto"},scopedSlots:t._u([{key:"tags",fn:function(){return[i("van-tag",{attrs:{type:"danger"}},[t._v("热卖")]),i("van-tag",{attrs:{plain:"",type:"danger"}},[t._v("满200-20")])]},proxy:!0}])})],1)},hi=[],_i={name:"mallMsg"},bi=_i,Ci=(i("7180"),Object(o["a"])(bi,vi,hi,!1,null,"8d0a051e",null)),gi=Ci.exports,yi=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rec"},[i("p",[t._v("每日推荐")]),t._l(t.rdList,(function(e){return i("div",{key:e.id,staticClass:"recommend border-bottom"},[i("img",{attrs:{src:e.imgUrl,alt:""}}),i("div",{staticClass:"item"},[i("div",{staticClass:"item-title"},[t._v(t._s(e.title))]),i("div",{staticClass:"item-content"},[t._v(t._s(e.content))]),i("button",{staticClass:"item-btn"},[t._v("查看详情")])])])}))],2)},Li=[],wi={name:"Recommend",props:{rdList:Array}},Si=wi,Oi=(i("ae1b"),Object(o["a"])(Si,yi,Li,!1,null,"563aa50a",null)),xi=Oi.exports,ji={name:"Mall",components:{mallHeader:ei,mallSwipe:oi,mallSearch:mi,Recommend:xi,Footer:pt,mallMsg:gi},data:function(){return{mallSwipe:[],recommendList:[]}},methods:{getMallInfo:function(){rt.a.get("/mall.json").then(this.getMallInfoSucc).catch((function(t){console.log(t)}))},getMallInfoSucc:function(t){console.log(t),t=t.data,t.ret&&t.data&&(this.mallSwipe=t.data.mallSwipe,this.recommendList=t.data.recommendList)}},mounted:function(){this.getMallInfo()}},$i=ji,ki=(i("8275"),Object(o["a"])($i,Ke,Qe,!1,null,"5fc2b5ab",null)),Ei=ki.exports,Ii=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("inputSearch"),i("alphabetList",{attrs:{alphabets:t.alphabetList,lists:t.moreCities},on:{changeLetter:t.handLetter}}),i("Cities",{attrs:{hLists:t.hotCities,mCities:t.moreCities,cLetter:t.letter}})],1)},Hi=[],Mi=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{ref:"wrapper",staticClass:"cities"},[i("div",[i("div",{attrs:{id:"current"}},[i("p",[t._v("当前城市")]),i("div",{staticClass:"currentCity"},[t._v(t._s(this.$store.state.city1))])]),i("div",{attrs:{id:"hot"}},[t._v("热门站点")]),t._l(t.hLists,(function(e){return i("div",{key:e.id,staticClass:"hotCities",on:{click:function(i){return t.cityClick(e.name)}}},[i("p",{staticClass:"hotCity"},[t._v(t._s(e.name))])])})),i("p",{staticClass:"citylist"},[t._v("城市列表")]),t._l(t.mCities,(function(e,n){return i("div",{key:n,ref:n,refInFor:!0},[i("div",{staticClass:"title"},[t._v(t._s(n))]),t._l(e,(function(e){return i("div",{key:e.id,staticClass:"city",on:{click:function(i){return t.cityClick(e.name)}}},[i("div",{staticClass:"cityName"},[t._v(t._s(e.name))])])}))],2)}))],2)])])},Ti=[],Ai=i("f40f"),Fi={name:"Cities",props:{hLists:Array,mCities:Object,cLetter:String},methods:{cityClick:function(t){this.$store.dispatch("changeCity",t)}},watch:{cLetter:function(){if(this.cLetter){var t=this.$refs[this.cLetter][0];this.scroll.scrollToElement(t)}}},updated:function(){this.scroll=new Ai["a"](this.$refs.wrapper,{mouseWheel:!0})}},Di=Fi,Pi=(i("b8a4"),Object(o["a"])(Di,Mi,Ti,!1,null,"ef486ee4",null)),Ri=Pi.exports,Bi=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"Header"},[i("router-link",{attrs:{to:"/"}},[i("i",{staticClass:"iconfont icon-fanhui"})]),i("div",{staticClass:"Title"},[t._v("城市选择")]),t._m(0)],1)])},Ui=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search"},[i("input",{staticClass:"header-input",attrs:{type:"text",placeholder:"北京/bj/beijing"}}),i("i",{staticClass:"iconfont icon-sousuo"})])}],zi={name:"inputSearch"},Ji=zi,Ni=(i("f56e"),Object(o["a"])(Ji,Bi,Ui,!1,null,"430f8fa8",null)),Yi=Ni.exports,Wi=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"alphabet"},t._l(t.lists,(function(e,n){return i("div",{key:n,on:{click:t.letterClick}},[t._v(t._s(n))])})),0)])},Gi=[],Ki={name:"alphabetList",props:{alphabets:Array,lists:Object},methods:{letterClick:function(t){this.$emit("changeLetter",t.target.innerText)}}},Qi=Ki,Vi=(i("8519"),Object(o["a"])(Qi,Wi,Gi,!1,null,"6a56a90a",null)),Xi=Vi.exports,Zi={name:"searchCity",data:function(){return{hotCities:[],moreCities:{},alphabetList:[],letter:""}},components:{Cities:Ri,inputSearch:Yi,alphabetList:Xi},methods:{getCityInfo:function(){rt.a.get("/city.json").then(this.getCityInfoSucc).catch((function(t){console.log(t)}))},getCityInfoSucc:function(t){console.log(t),t=t.data,t.ret&&t.data&&(this.hotCities=t.data.hotCityList,this.moreCities=t.data.cities,this.alphabetList=t.data.Alphabet)},handLetter:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},qi=Zi,tn=Object(o["a"])(qi,Ii,Hi,!1,null,"85fcd826",null),en=tn.exports;n["default"].use(x["a"]),n["default"].use(O["a"]),n["default"].use(S["a"]),n["default"].use(w["a"]),n["default"].use(L["a"]),n["default"].use(y["a"]),n["default"].use(g["a"]),n["default"].use(C["a"]),n["default"].use(b["a"]),n["default"].use(_["a"]),n["default"].use(h["a"]),n["default"].use(v["a"]),n["default"].use(m["a"]),n["default"].use(p["a"]),n["default"].use(f["a"]),n["default"].use(d["a"]),n["default"].use(j["a"]);var nn=new j["a"]({routes:[{path:"/",redirect:{name:"Home"}},{path:"/home",name:"Home",component:_t},{path:"/order",name:"Order",component:qt},{path:"/search",name:"Search",component:_e},{path:"/mine",name:"Mine",component:Ge},{path:"/mall",name:"Mall",component:Ei},{path:"/searchCity",name:"searchCity",component:en}]}),an=(i("3db4"),i("c8f4"),i("5bc9"),i("fe3c")),sn=i.n(an),cn=i("7212"),rn=i.n(cn),on=i("2f62");n["default"].use(on["a"]);var ln=new on["a"].Store({state:{city1:"中山",city2:"广州"},actions:{changeCity:function(t,e){t.commit("changeCityList",e)}},mutations:{changeCityList:function(t,e){t.city1=e}}}),un=(i("a7a3"),i("b1f4")),dn=i.n(un);n["default"].config.productionTip=!1,n["default"].prototype.$ajax=rt.a,sn.a.attach(document.body),n["default"].use(rn.a),n["default"].use(dn.a),new n["default"]({el:"#app",router:nn,store:ln,render:function(t){return t(u)}}).$mount("#app")},"5bc9":function(t,e,i){},"5dcc":function(t,e,i){"use strict";i("8ac4")},6130:function(t,e,i){},6391:function(t,e,i){"use strict";i("404c")},"6f8c":function(t,e,i){"use strict";i("3fd9")},"70a5":function(t,e,i){},7180:function(t,e,i){"use strict";i("2b54")},7346:function(t,e,i){},"78ed":function(t,e,i){"use strict";i("1e64")},"7b7f":function(t,e,i){"use strict";i("ec11")},"7bc8":function(t,e,i){"use strict";i("a768")},8275:function(t,e,i){"use strict";i("dd56")},8519:function(t,e,i){"use strict";i("4f57")},"85ec":function(t,e,i){},"8ac4":function(t,e,i){},"91a4":function(t,e,i){"use strict";i("c493")},"9bc5":function(t,e,i){"use strict";i("4eb8")},a046:function(t,e,i){},a06d:function(t,e,i){},a38c:function(t,e,i){},a57f:function(t,e,i){"use strict";i("012e")},a768:function(t,e,i){},a7d2:function(t,e,i){"use strict";i("b0d8")},adbf:function(t,e,i){},ae1b:function(t,e,i){"use strict";i("e0fe")},b0d8:function(t,e,i){},b215:function(t,e,i){"use strict";i("70a5")},b8a4:function(t,e,i){"use strict";i("a06d")},bc7b:function(t,e,i){"use strict";i("a38c")},be99:function(t,e,i){"use strict";i("fa7c")},c493:function(t,e,i){},c554:function(t,e,i){"use strict";i("a046")},c785:function(t,e,i){},c8f4:function(t,e,i){},cd77:function(t,e,i){},dc04:function(t,e,i){"use strict";i("3593")},dd56:function(t,e,i){},e0fe:function(t,e,i){},ec11:function(t,e,i){},eef1:function(t,e,i){},f56e:function(t,e,i){"use strict";i("eef1")},fa4e:function(t,e,i){"use strict";i("6130")},fa7c:function(t,e,i){},fbd1:function(t,e,i){"use strict";i("0d38")}});
//# sourceMappingURL=app.35bd4dc2.js.map