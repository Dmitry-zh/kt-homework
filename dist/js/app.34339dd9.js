(function(t){function e(e){for(var r,n,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],r=!0,n=1;n<s.length;n++){var c=s[n];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var r={},a={app:0},i=[];function n(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0bdb68":"0dbae10d"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=a[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,r){s=a[t]=[e,r]}));e.push(s[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=n(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var s=a[t];if(0!==s){if(s){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,s[1](l)}a[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(s,r,function(e){return t[e]}.bind(null,r));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0810":function(t,e,s){},"106b":function(t,e,s){"use strict";var r=s("1cca"),a=s.n(r);a.a},1112:function(t,e,s){"use strict";var r=s("8129"),a=s.n(r);a.a},"140e":function(t,e,s){"use strict";var r=s("b0cc"),a=s.n(r);a.a},"154c":function(t,e,s){"use strict";var r=s("fd07"),a=s.n(r);a.a},"15b1":function(t,e,s){},1612:function(t,e,s){"use strict";var r=s("1d86"),a=s.n(r);a.a},"1b20":function(t,e,s){},"1c47":function(t,e,s){"use strict";var r=s("1b20"),a=s.n(r);a.a},"1cca":function(t,e,s){},"1d86":function(t,e,s){},"250e":function(t,e,s){"use strict";var r=s("0810"),a=s.n(r);a.a},"2eae":function(t,e,s){"use strict";var r=s("4c17"),a=s.n(r);a.a},"3cde":function(t,e,s){"use strict";var r=s("a8bc"),a=s.n(r);a.a},4039:function(t,e,s){},4144:function(t,e,s){},"4c13":function(t,e,s){"use strict";var r=s("e8ae"),a=s.n(r);a.a},"4c17":function(t,e,s){},"4eb2":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e),s.d(e,"db",(function(){return Ge}));s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],n=(s("b0c0"),s("ac1f"),s("5319"),{name:"app",beforeMount:function(){var t=this;this.$store.getters.auth||this.$router.replace({name:"Home"}),this.$router.beforeEach((function(e,s,r){"Reg"!==e.name&&"Home"!==e.name||t.$store.getters.auth||r(),t.$store.getters.auth&&r()}))}}),o=n,c=s("2877"),l=Object(c["a"])(o,a,i,!1,null,null,null),u=l.exports,p=(s("d3b7"),s("8c4f")),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("Активити //будущая реализация "),s("bottom")],1)},f=[],g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom"},[s("router-link",{staticClass:"home",attrs:{"active-class":"active",tag:"div",to:{name:"Home"}}}),s("router-link",{staticClass:"interesting",attrs:{"active-class":"active",tag:"div",to:{name:"Interesting"}}}),s("router-link",{staticClass:"upload",attrs:{"active-class":"active",tag:"div",to:{name:"Upload"}}}),s("router-link",{staticClass:"activity",attrs:{"active-class":"active",tag:"div",to:{name:"Activity"}}}),s("router-link",{staticClass:"profile",attrs:{"active-class":"active",tag:"div",to:{name:"Profile"}}})],1)},m=[],h={name:"bottom",props:[]},v=h,w=(s("4c13"),Object(c["a"])(v,g,m,!1,null,"4337000b",null)),b=w.exports,_={data:function(){return{}},components:{bottom:b}},C=_,I=Object(c["a"])(C,d,f,!1,null,null,null),x=I.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Это директ")]),s("bottom")],1)},U=[],$={data:function(){return{}},components:{bottom:b}},k=$,P=Object(c["a"])(k,y,U,!1,null,null,null),S=P.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.checkAuth?s("div",[s("homeHeader"),s("stories"),s("bottom")],1):s("div",[s("auth")],1)])},L=[],T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"upper"},[s("div",{staticClass:"ico"},[s("img",{attrs:{src:t.cameraIco}})]),s("div",{staticClass:"logo"},[t._v("Instagram 2.0")]),s("div",{staticClass:"directButton"},[s("router-link",{staticClass:"profile",attrs:{tag:"img",src:t.letterIco,to:{name:"Direct"}}})],1)])},N=[],j={name:"homeHeader",data:function(){return{cameraIco:"./static/ico/camera.svg",letterIco:"./static/ico/letter.svg"}}},O=j,A=(s("1112"),Object(c["a"])(O,T,N,!1,null,"6c142fad",null)),D=A.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stories"},[s("div",{staticClass:"new story"},[s("img",{attrs:{src:t.user.avatar}}),s("div",{staticClass:"add"}),s("div",[t._v("Ваша история")])]),t._l(t.stories,(function(e,r){return s("div",{key:r,staticClass:"story"},[s("img",{attrs:{src:e.src}}),s("div",[t._v(t._s(e.author))])])}))],2)},R=[],H={name:"stories",data:function(){return{stories:[],user:{avatar:"./static/stories/user.jpg"}}},mounted:function(){var t=this;fetch("./static/stories.json").then((function(t){return t.json()})).then((function(e){return t.stories=e.stories}))}},V=H,F=(s("5b75"),Object(c["a"])(V,M,R,!1,null,"153bcb47",null)),B=F.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[t._m(0),s("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.checkAuth(t.login,t.password)}}},[s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],attrs:{placeholder:"Введите ваш логин"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}})]),s("div",{staticClass:"field pas"},[t.showPassword?s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",placeholder:"Введите ваш пароль"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Введите ваш пароль"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("div",{staticClass:"eye",class:{opened:t.showPassword},on:{click:function(e){t.showPassword=!t.showPassword}}})]),s("input",{attrs:{type:"submit",disabled:!t.emptyFields,value:"Вход"}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.errMessage,expression:"errMessage"}],staticClass:"err"},[t._v(t._s(t.errMessage))]),s("div",{staticClass:"register"},[t._v(" Еще нет аккаунта? "),s("router-link",{attrs:{tag:"a",to:{name:"Reg"}}},[t._v(" Зарегистрироваться ")])],1)])},Z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[t._v(" Instagram "),s("div",[t._v(" two point null ")])])}],J=(s("4de4"),{name:"auth",data:function(){return{login:"",password:"",errMessage:"",showPassword:!1,usrs:""}},firestore:function(){return{usrs:Ge.collection("users")}},computed:{emptyFields:function(){return this.login&&this.password}},methods:{checkAuth:function(t,e){var s=this.$store.getters.users.filter((function(e){return e.usr.login.toLowerCase()===t.toLowerCase()}));0===s.length?this.errMessage="Такого пользователя не существует":s[0].usr.password===e?this.$store.dispatch("commitSession",s[0].usr):this.errMessage="Неверный пароль"}},created:function(){this.$store.dispatch("commitUsers",this.usrs)}}),Y=J,q=(s("2eae"),Object(c["a"])(Y,z,Z,!1,null,"66984e10",null)),K=q.exports,G={data:function(){return{}},metaInfo:{title:"Инстаграм 2"},components:{bottom:b,homeHeader:D,stories:B,auth:K},computed:{checkAuth:function(){return this.$store.getters.auth}}},Q=G,W=(s("d989"),Object(c["a"])(Q,E,L,!1,null,"4397c8f2",null)),X=W.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("searchPanel",{directives:[{name:"show",rawName:"v-show",value:t.panelShown,expression:"panelShown"}],attrs:{searchText:t.searchText}}),s("interestsPanel",{class:{withPanel:t.panelShown},on:{pickedInterest:t.pickInterest}}),s("div",{staticClass:"gallery",class:{withPanel:t.panelShown}},t._l(t.imgs,(function(t,e){return s("div",{key:e},[s("img",{attrs:{src:t}})])})),0),s("loader",{directives:[{name:"show",rawName:"v-show",value:t.fetching,expression:"fetching"}]}),s("bottom")],1)},et=[],st=(s("d81d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)},changes:function(e){return t.changeText(t.text)}}},[s("button",{staticClass:"loupe",attrs:{type:"submit"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"text"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),s("img",{attrs:{src:t.cutawayImg}})])}),rt=[],at={props:["searchText"],name:"searchPanel",methods:{search:function(){console.log("Ищем ".concat(this.searchText))},changeText:function(t){console.log("Ищем ".concat(t)),this.searchText=t}},data:function(){return{loupeImg:"./static/ico/loupe.svg",cutawayImg:"./static/ico/cutaway.svg"}}},it=at,nt=(s("1c47"),Object(c["a"])(it,st,rt,!1,null,"6823caf4",null)),ot=nt.exports,ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"interests"},t._l(t.interests,(function(e){return s("div",{key:e,staticClass:"interest",on:{click:function(s){return t.pick(e)}}},[t._v(t._s(e))])})),0)},lt=[],ut={name:"interestsPanel",computed:{interests:function(){return this.$store.getters.interests}},methods:{pick:function(t){this.$store.dispatch("delImgs"),this.$emit("pickedInterest",t)}}},pt=ut,dt=(s("fcd7"),Object(c["a"])(pt,ct,lt,!1,null,"63832389",null)),ft=dt.exports,gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loader"},[t._v(" Loading... ")])},mt=[],ht={name:"loader"},vt=ht,wt=(s("140e"),Object(c["a"])(vt,gt,mt,!1,null,"a934085e",null)),bt=wt.exports,_t=s("bc3a"),Ct=s.n(_t),It={beforeMount:function(){this.$store.getters.auth||this.$router.push({name:"Home"})}},xt=It,yt={data:function(){return{scrollY:0,scrollNow:0,fetching:!0,panelShown:!0,count:25,selectedInt:"",offset:0,searchText:"Тест",pesHeaders:{"Ocp-Apim-Subscription-Key":"2037cc9985be4292a3aae7f12cafe423"}}},computed:{imgs:function(){return this.$store.getters.imgs}},methods:{pickInterest:function(t){var e=this;this.fetching=!0,this.selectedInt=t,Ct.a.get("https://api.cognitive.microsoft.com/bing/v7.0/images/search?q="+encodeURIComponent(t)+"&count="+this.count+"&offset="+this.offset,{headers:this.pesHeaders}).then((function(t){var s=t.data.value.map((function(t){e.imgs.push(t.contentUrl)}));e.$store.dispatch("newImgs",s),e.fetching=!1,panelShown=!0}))}},created:function(){var t=this;window.addEventListener("scroll",(function(){t.scrollNow=window.scrollY,t.scrollNow>t.scrollY?t.panelShown=!1:t.panelShown=!0,window.scrollY>=document.body.clientHeight-document.documentElement.clientHeight&&(t.offset+=25,t.pickInterest(t.selectedInt)),t.scrollY=t.scrollNow}))},mounted:function(){this.pickInterest("Сиськи")},metaInfo:function(){return{title:"Интересное"}},components:{bottom:b,searchPanel:ot,interestsPanel:ft,loader:bt},mixins:[xt]},Ut=yt,$t=(s("1612"),Object(c["a"])(Ut,tt,et,!1,null,"04f16f50",null)),kt=$t.exports,Pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("profileTop"),s("profileFeed"),s("div",{staticStyle:{top:"40vh"}},[t._v("РЕАЛИЗУЙ ПРИМЕСИ НА ЗАГРУЗКУ КАРТИНОК (ИСПОЛЬЗУЮ В ДВУХ КОМПОНЕНТАХ) ")]),s("bottom")],1)},St=[],Et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("div",{staticClass:"top"},[s("div",{staticClass:"profileName",class:{arrowDwn:t.showExit},on:{click:function(e){t.showExit=!t.showExit}}},[t._v(" "+t._s(t.user.login)+" ")]),t._m(0)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showExit,expression:"showExit"}],staticClass:"extBtn",on:{click:function(e){return t.exit()}}},[t._v(" Выйти ")]),s("div",{staticClass:"info",class:{mgnZero:t.showExit}},[s("div",{staticClass:"avatar"},[s("div",{staticClass:"avatarImg"},[s("img",{attrs:{src:t.user.info.avatarSrc}})])]),s("div",{staticClass:"publications"},[s("div",{staticClass:"count"},[t._v(t._s(t.user.publications))]),t._v("Publications ")]),s("div",{staticClass:"followers"},[s("div",{staticClass:"count"},[t._v(t._s(t.user.followers))]),t._v("Followers ")]),s("div",{staticClass:"following"},[s("div",{staticClass:"count"},[t._v(t._s(t.user.following))]),t._v("Following ")])]),s("div",{staticClass:"userName"},[t._v(t._s(t.user.info.name)+" "+t._s(t.user.info.surname))]),s("div",{staticClass:"about"},[t._v(" "+t._s(t.user.info.bio)+" ")]),s("div",{staticClass:"about"},[t._v(" "+t._s(t.user.info.website)+" ")]),s("router-link",{staticClass:"edit",attrs:{tag:"a",to:{name:"Edit"}}},[s("div",[t._v(" Edit profile ")])])],1)},Lt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu"},[s("img",{attrs:{src:"https://image.flaticon.com/icons/svg/545/545705.svg"}})])}],Tt={name:"profileTop",data:function(){return{showExit:!1}},computed:{user:function(){return this.$store.getters.auth}},methods:{exit:function(){this.$store.dispatch("commitSession",!1),this.$router.replace({name:"Home"})}}},Nt=Tt,jt=(s("3cde"),Object(c["a"])(Nt,Et,Lt,!1,null,"d2ecd248",null)),Ot=jt.exports,At=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("div",{staticClass:"feedButtons"},[s("div",{staticClass:"userFeed",class:{faded:t.taged},attrs:{tabindex:"1"},on:{focus:function(e){t.taged=!1}}}),s("div",{staticClass:"tagged",class:{faded:t.taged},attrs:{tabindex:"2"},on:{focus:function(e){t.taged=!0}}})]),s("div",{staticClass:"underline",class:{tagged:t.taged}}),t.taged?[s("transition",{attrs:{name:"slide-left",mode:"out-in"}},[s(t.currentView,{tag:"component"})],1)]:[s("transition",{attrs:{name:"slide-right",mode:"out-in"}},[s(t.currentView,{tag:"component"})],1)]],2)},Dt=[],Mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gallery"},t._l(t.userPhotos,(function(t,e){return s("div",{key:e,staticClass:"photo"},[s("img",{attrs:{src:t}})])})),0)},Rt=[],Ht={name:"profilePhotos",computed:{userPhotos:function(){return this.$store.getters.userPhotos}}},Vt=Ht,Ft=(s("e6b9"),Object(c["a"])(Vt,Mt,Rt,!1,null,"3604f18f",null)),Bt=Ft.exports,zt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gallery"},t._l(t.tagged,(function(t,e){return s("div",{key:e,staticClass:"photo"},[s("img",{attrs:{src:t.src}})])})),0)},Zt=[],Jt={name:"profileTaggedPhotos",computed:{tagged:function(){return this.$store.getters.taggedPhotos}}},Yt=Jt,qt=(s("154c"),Object(c["a"])(Yt,zt,Zt,!1,null,"aece4116",null)),Kt=qt.exports,Gt={name:"profileFeed",data:function(){return{taged:!1}},computed:{userPhotos:function(){return this.$store.getters.userPhotos},tagged:function(){return this.$store.getters.taggedPhotos},currentView:function(){return this.taged?Kt:Bt}},components:{profilePhotos:Bt,profileTaggedPhotos:Kt}},Qt=Gt,Wt=(s("8738"),Object(c["a"])(Qt,At,Dt,!1,null,"39fe5308",null)),Xt=Wt.exports,te={data:function(){return{}},metaInfo:{title:"Профиль"},components:{bottom:b,profileTop:Ot,profileFeed:Xt}},ee=te,se=(s("e414"),Object(c["a"])(ee,Pt,St,!1,null,"668e66f4",null)),re=se.exports,ae=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[t._v(" Загрузка // будущая реализация ")]),s("bottom")],1)},ie=[],ne=(s("99af"),s("8aa5")),oe=s.n(ne),ce={data:function(){return{imageData:null,picture:null,uploadValue:0}},methods:{previewImage:function(t){this.uploadValue=0,this.picture=null,this.imageData=t.target.files[0]},onUpload:function(){var t=this;this.picture=null;var e=oe.a.storage().ref("".concat(this.$store.getters.auth.login,"/").concat(this.imageData.name)).put(this.imageData);e.on("state_changed",(function(e){t.uploadValue=e.bytesTransferred/e.totalBytes*100}),(function(t){console.log(t.message)}),(function(){t.uploadValue=100,e.snapshot.ref.getDownloadURL().then((function(e){t.picture=e}))}))}},components:{bottom:b}},le=ce,ue=(s("a12a"),Object(c["a"])(le,ae,ie,!1,null,"0c2a4650",null)),pe=ue.exports,de=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"top"},[s("router-link",{staticClass:"cancel",attrs:{tag:"div",to:{name:"Profile"}}}),s("div",{staticClass:"topText"},[t._v(" Edit ur profile ")]),t.showLoader?s("acceptLoader"):s("div",{staticClass:"accept",on:{click:function(e){return t.confirm()}}})],1),s("div",{staticClass:"avatar"},[s("div",{staticClass:"avatarIco"},[s("img",{attrs:{src:this.$store.getters.auth.info.avatarSrc}})]),s("div",{staticClass:"changeAvatar"},[s("input",{attrs:{type:"file",id:"loadImg",accept:"image/*"},on:{change:t.previewImage}}),s("label",{attrs:{for:"loadImg"}},[t._v(t._s(t.labelText))])])]),s("div",{staticClass:"form"},[s("div",{staticClass:"fullName"},[s("div",[s("div",{staticClass:"fieldLabel"},[t._v(" Firstname ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.name,expression:"info.name"}],staticClass:"halfInput",domProps:{value:t.info.name},on:{input:function(e){e.target.composing||t.$set(t.info,"name",e.target.value)}}})]),s("div",[s("div",{staticClass:"fieldLabel"},[t._v(" Surname ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.surname,expression:"info.surname"}],staticClass:"halfInput",domProps:{value:t.info.surname},on:{input:function(e){e.target.composing||t.$set(t.info,"surname",e.target.value)}}})])]),s("div",{staticClass:"container"},[s("div",{staticClass:"fieldLabel"},[t._v(" Website ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.website,expression:"info.website"}],domProps:{value:t.info.website},on:{input:function(e){e.target.composing||t.$set(t.info,"website",e.target.value)}}})]),s("div",{staticClass:"container"},[s("div",{staticClass:"fieldLabel"},[t._v(" Bio ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.bio,expression:"info.bio"}],domProps:{value:t.info.bio},on:{input:function(e){e.target.composing||t.$set(t.info,"bio",e.target.value)}}})])])])},fe=[],ge=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loader"})},me=[],he={name:"acceptLoader"},ve=he,we=(s("fce6"),Object(c["a"])(ve,ge,me,!1,null,"7e032726",null)),be=we.exports,_e={data:function(){return{showLoader:!1,user:"",imageData:null,loadedPhoto:null}},metaInfo:function(){return{title:"Редактировать профиль"}},firestore:function(){return{user:Ge.collection("users").where("usr.login","==",this.$store.getters.auth.login)}},computed:{info:function(){return this.$store.getters.auth.info},labelText:function(){return this.loadedPhoto?"Фотография загружена":"Сменить фотографию"}},methods:{confirm:function(){var t=this;this.showLoader=!0,this.$store.dispatch("changeUserInfo",this.info);var e={usr:this.$store.getters.auth};Ge.collection("users").doc(this.user[0].id).set(e).then((function(){console.log("user updated!")})),setTimeout((function(){t.showLoader=!1,t.$router.push({name:"Profile"})}),500)},previewImage:function(t){this.imageData=t.target.files[0],this.uploadAvatar()},uploadAvatar:function(){var t=this;if(this.imageData){var e=oe.a.storage().ref("".concat(this.$store.getters.auth.login,"/").concat(this.imageData.name)).put(this.imageData);e.on("state_changed",(function(e){t.showLoader=!0}),(function(t){console.log(t.message)}),(function(){t.showLoader=!1,t.loadedPhoto=t.imageData,e.snapshot.ref.getDownloadURL().then((function(e){t.$store.dispatch("changeAvatar",e)}))}))}}},components:{acceptLoader:be}},Ce=_e,Ie=(s("106b"),Object(c["a"])(Ce,de,fe,!1,null,"61e1c5d6",null)),xe=Ie.exports,ye=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("router-link",{staticClass:"back",attrs:{tag:"div",to:{name:"Home"}}},[t._v(" ◁ Вернуться ")]),t._m(0),s("form",{on:{submit:function(e){return e.preventDefault(),t.addNewUser(t.newUser)}}},[s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.login,expression:"newUser.login"}],attrs:{placeholder:"Ваш логин"},domProps:{value:t.newUser.login},on:{input:[function(e){e.target.composing||t.$set(t.newUser,"login",e.target.value)},function(e){t.checkLoginFree(t.newUser.login),t.checkLoginCorrectSymbols(t.newUser.login),t.checkLoginLength(t.newUser.login)}]}}),t.loginBusy?s("div",{staticClass:"notChecked"},[t._v(" Пользователь уже существует ")]):t.wrongLoginSymbols?s("div",{staticClass:"notChecked"},[t._v(" Логин должен содержать только латинские буквы и цифры ")]):t.wrongLoginLength?s("div",{staticClass:"notChecked"},[t._v(" Длина логина должна быть от 4 до 12 символов ")]):t._e()]),s("div",{staticClass:"field pass"},[t.passwordIsVisible?s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{type:"text",placeholder:"Введите пароль"},domProps:{value:t.newUser.password},on:{input:[function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)},function(e){t.checkPasswordCorrectSymbols(t.newUser.password),t.checkPasswordLength(t.newUser.password)}]}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"Введите пароль"},domProps:{value:t.newUser.password},on:{input:[function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)},function(e){t.checkPasswordCorrectSymbols(t.newUser.password),t.checkPasswordLength(t.newUser.password)}]}}),s("div",{staticClass:"eye",class:{opened:t.passwordIsVisible},on:{click:function(e){return t.passwordShown()}}})]),t.wrongPasswordSymbols?s("div",{staticClass:"notChecked"},[t._v(" Пароль должен содержать только латинские буквы и хотя бы одну цифру ")]):t.wrongPasswordLength?s("div",{staticClass:"notChecked"},[t._v(" Длина пароля должна быть от 4 до 12 символов ")]):t._e(),s("div",{staticClass:"field"},[t.passwordIsVisible?s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.passwordTwice,expression:"newUser.passwordTwice"}],attrs:{type:"text",placeholder:"Повторите пароль"},domProps:{value:t.newUser.passwordTwice},on:{input:function(e){e.target.composing||t.$set(t.newUser,"passwordTwice",e.target.value)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.passwordTwice,expression:"newUser.passwordTwice"}],attrs:{type:"password",placeholder:"Повторите пароль"},domProps:{value:t.newUser.passwordTwice},on:{input:function(e){e.target.composing||t.$set(t.newUser,"passwordTwice",e.target.value)}}}),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.equalPasswords,expression:"!equalPasswords"}],staticClass:"notChecked"},[t._v(" Пароли не совпадают ")])]),s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newUser.info.name,expression:"newUser.info.name",modifiers:{trim:!0}}],attrs:{placeholder:"Ваше имя"},domProps:{value:t.newUser.info.name},on:{input:function(e){e.target.composing||t.$set(t.newUser.info,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newUser.info.surname,expression:"newUser.info.surname",modifiers:{trim:!0}}],attrs:{placeholder:"Ваша фамилия"},domProps:{value:t.newUser.info.surname},on:{input:function(e){e.target.composing||t.$set(t.newUser.info,"surname",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newUser.email,expression:"newUser.email",modifiers:{trim:!0}}],attrs:{placeholder:"Электронная почта"},domProps:{value:t.newUser.email},on:{input:[function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value.trim())},function(e){return t.checkMail(t.newUser.email)}],blur:function(e){return t.$forceUpdate()}}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.wrongMail,expression:"wrongMail"}],staticClass:"notChecked"},[t._v(" Укажите корректный электронный адрес ")])]),s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.newUser.age,expression:"newUser.age",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"Полных лет"},domProps:{value:t.newUser.age},on:{input:[function(e){e.target.composing||t.$set(t.newUser,"age",t._n(e.target.value))},function(e){return t.checkAge()}],blur:function(e){return t.$forceUpdate()}}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.wrongAge,expression:"wrongAge"}],staticClass:"notChecked"},[t._v(" Укажите корректный возраст ")])]),s("div",{staticClass:"rules"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.rules,expression:"rules"}],attrs:{type:"checkbox",id:"acceptRules"},domProps:{checked:Array.isArray(t.rules)?t._i(t.rules,null)>-1:t.rules},on:{change:function(e){var s=t.rules,r=e.target,a=!!r.checked;if(Array.isArray(s)){var i=null,n=t._i(s,i);r.checked?n<0&&(t.rules=s.concat([i])):n>-1&&(t.rules=s.slice(0,n).concat(s.slice(n+1)))}else t.rules=a}}}),s("label",{attrs:{for:"acceptRules"}},[t._v(" Принимаю условия пользовательского соглашения ")]),s("br")]),s("input",{attrs:{type:"submit",value:"Зарегистрироваться",disabled:!t.canReg}})])],1)},Ue=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"welcomeMessage"},[s("div",{staticClass:"logo"},[t._v(" Instagram "),s("br"),t._v(" two point null ")]),s("div",{staticClass:"txt"},[t._v(" Зарегистрируйтесь, что бы"),s("br"),t._v(" смотреть на попы ваших подруг"),s("br"),t._v(" и милых котиков ")])])}],$e=(s("1276"),{name:"Reg",metaInfo:{title:"Регистрация"},data:function(){return{newUser:{login:"",password:"",passwordTwice:"",info:{name:"",surname:"",bio:"",website:"",avatarSrc:"./static/ico/standardProfile.png"},age:"",email:"",registered:"",followers:0,following:0,publications:0,photos:{profile:["./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png","./static/profile/profile.png"],tagged:[{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123},{src:"./static/profile/tagged.png",authorId:123}]}},passwordIsVisible:!1,rules:!1,wrongAge:!1,loginBusy:!1,wrongLoginSymbols:!1,wrongLoginLength:!1,wrongPasswordSymbols:!1,wrongPasswordLength:!1,capsLock:"",wrongMail:!1}},methods:{passwordShown:function(){this.passwordIsVisible=!this.passwordIsVisible},checkAge:function(){this.wrongAge=this.newUser.age<=9||this.newUser.age>110||!this.newUser.age},checkLoginFree:function(t){var e=this.$store.getters.users.filter((function(e){return e.usr.login.toLowerCase()===t.toLowerCase()}));this.loginBusy=e.length>0},checkLoginCorrectSymbols:function(t){this.wrongLoginSymbols=!/^[a-zA-Z0-9]+$/.test(t)},checkLoginLength:function(t){this.wrongLoginLength=t.length<4||t.length>12},checkMail:function(t){2===t.split("@").length&&t.split("@")[1]&&2===t.split("@")[1].split(".").length&&t.split("@")[1].split(".")[1]&&/^[a-zA-Z]+$/.test(t.split("@")[1].split(".")[1])&&/^[a-zA-Z0-9.]+$/.test(t.split("@")[0])&&/^[a-zA-Z0-9.]+$/.test(t.split("@")[1].split(".")[0])?this.wrongMail=!1:this.wrongMail=!0},checkPasswordCorrectSymbols:function(t){this.wrongPasswordSymbols=!/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(t)},checkPasswordLength:function(t){this.wrongPasswordLength=t.length<4||t.length>12},addNewUser:function(t){t.registered=new Date,Ge.collection("users").add({usr:t}),this.newUser="",this.$store.commit("SET_SESSION",t),this.$router.push({path:"/home",params:this.$store.getters.auth})}},computed:{equalPasswords:function(){return this.newUser.password===this.newUser.passwordTwice||!this.newUser.passwordTwice},canReg:function(){return this.rules&&!this.wrongAge&&!this.loginBusy&&!this.wrongLoginSymbols&&!this.wrongLoginLength&&!this.wrongPasswordSymbols&&!this.wrongPasswordLength&&!this.wrongMail&&this.newUser.login&&this.newUser.password&&this.newUser.info.name&&this.newUser.info.surname&&this.newUser.age&&this.newUser.email}},firestore:function(){return{usrs:Ge.collection("users")}},created:function(){this.$store.commit("SET_USERS",this.usrs)}}),ke=$e,Pe=(s("250e"),Object(c["a"])(ke,ye,Ue,!1,null,"790351bc",null)),Se=Pe.exports,Ee=s("58ca");r["a"].use(Ee["a"]),r["a"].use(p["a"]);var Le=[{path:"/home",name:"Home",component:X},{path:"/activity",name:"Activity",component:x},{path:"/direct",name:"Direct",component:S},{path:"/interesting",name:"Interesting",component:kt},{path:"/profile",name:"Profile",component:re},{path:"/upload",name:"Upload",component:pe},{path:"/edit",name:"Edit",component:xe},{path:"/registration",name:"Reg",component:Se},{path:"/user/:login",name:"UserPage",component:function(){return s.e("chunk-2d0bdb68").then(s.bind(null,"2cbc"))},props:!0},{path:"*",redirect:"/home"}],Te=new p["a"]({mode:"history",base:"/",routes:Le}),Ne=Te,je=s("2f62"),Oe={users:{}},Ae={users:function(t){return t.users}},De={SET_USERS:function(t,e){t.users=e}},Me={commitUsers:function(t,e){var s=t.commit;s("SET_USERS",e)}},Re={state:Oe,getters:Ae,mutations:De,actions:Me},He={auth:!1},Ve={auth:function(t){return t.auth}},Fe={SET_SESSION:function(t,e){t.auth=e},mutateUserInfo:function(t,e){t.auth.info=e},mutateUserAvatar:function(t,e){t.auth.info.avatarSrc=e}},Be={commitSession:function(t,e){var s=t.commit;s("SET_SESSION",e)},changeUserInfo:function(t,e){var s=t.commit;s("mutateUserInfo",e)},changeAvatar:function(t,e){var s=t.commit;s("mutateUserAvatar",e)}},ze={state:He,getters:Ve,mutations:Fe,actions:Be},Ze=s("0e44");r["a"].use(je["a"]);var Je=new je["a"].Store({modules:{users:Re,session:ze},plugins:[Object(Ze["a"])()]}),Ye=s("0ff2"),qe=s("59ca"),Ke=s.n(qe);s("e71f");r["a"].use(Ye["a"]),Ke.a.initializeApp({apiKey:"AIzaSyD2dLgyNJYoJykGpQo1fZntsCJv934AoJk",authDomain:"kt-homework.firebaseapp.com",databaseURL:"https://kt-homework.firebaseio.com",projectId:"kt-homework",storageBucket:"kt-homework.appspot.com",messagingSenderId:"474849699714",appId:"1:474849699714:web:f2d04a1a912a24e891119b"});var Ge=Ke.a.firestore();r["a"].config.productionTip=!1,new r["a"]({router:Ne,store:Je,render:function(t){return t(u)}}).$mount("#app")},"5b75":function(t,e,s){"use strict";var r=s("f77c"),a=s.n(r);a.a},8129:function(t,e,s){},8738:function(t,e,s){"use strict";var r=s("15b1"),a=s.n(r);a.a},"91c2":function(t,e,s){},a12a:function(t,e,s){"use strict";var r=s("4eb2"),a=s.n(r);a.a},a8bc:function(t,e,s){},b0cc:function(t,e,s){},cf9e:function(t,e,s){},d989:function(t,e,s){"use strict";var r=s("4039"),a=s.n(r);a.a},dbee:function(t,e,s){},e414:function(t,e,s){"use strict";var r=s("4144"),a=s.n(r);a.a},e6b9:function(t,e,s){"use strict";var r=s("91c2"),a=s.n(r);a.a},e8ae:function(t,e,s){},f77c:function(t,e,s){},fcd7:function(t,e,s){"use strict";var r=s("cf9e"),a=s.n(r);a.a},fce6:function(t,e,s){"use strict";var r=s("dbee"),a=s.n(r);a.a},fd07:function(t,e,s){}});
//# sourceMappingURL=app.34339dd9.js.map