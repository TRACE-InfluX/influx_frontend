(function(e){function t(t){for(var a,o,u=t[0],c=t[1],s=t[2],p=0,d=[];p<u.length;p++)o=u[p],r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},1943:function(e,t,n){"use strict";var a=n("4013"),r=n.n(a);r.a},4013:function(e,t,n){},"4dd8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/register"}},[e._v("Register")]),e._v("\n         \n        "),n("router-link",{attrs:{to:"/login"}},[e._v("Login")]),e._v("\n         \n    ")],1),e._v("\n     \n    "),n("h1",[e._v("Welcome to InfluX")]),n("div",{attrs:{id:"links"}},[n("router-link",{attrs:{to:"/influencers/influencerindex"}},[e._v("Influencers")]),e._v("\n         \n        "),n("router-link",{attrs:{to:"/accounts/accountindex"}},[e._v("Accounts")])],1),n("router-view")],1)},i=[],o={name:"app",components:{}},u=o,c=(n("034f"),n("2877")),s=Object(c["a"])(u,r,i,!1,null,null,null),l=s.exports,p=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",[n("li",[n("h2",[e._v("Name: "+e._s(e.influencer.name))]),n("p",[e._v("Description: "+e._s(e.influencer.description))]),n("p",[e._v("Activity: "+e._s(e.influencer.activity))]),n("p",[e._v("Relevance: "+e._s(e.influencer.relevance))]),n("p",[e._v("Engagement: "+e._s(e.influencer.engagement))])])])])},m=[],v=n("bc3a"),f=n.n(v),h={data:function(){return{influencer:{}}},mounted:function(){var e=this,t=this.$router.currentRoute.params.id,n="http://localhost:4000/v0/influencers/"+t;f.a.get(n).then(function(t){e.influencer=t.data.data}).catch(alert)}},g=h,_=(n("e996"),Object(c["a"])(g,d,m,!1,null,"3ffa8081",null)),w=_.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("h1",[e._v("Influencers")]),e._l(e.influencers,function(t){return n("li",{key:t.id},[n("h2",[e._v("Name: "),n("router-link",{attrs:{to:"/influencers/"+t.id}},[e._v(e._s(t.name))])],1),n("p",[e._v("Description: "+e._s(t.description))]),n("p",[e._v("Activity: "+e._s(t.activity))]),n("p",[e._v("Relevance: "+e._s(t.relevance))]),n("p",[e._v("Engagement: "+e._s(t.engagement))]),n("router-link",{attrs:{to:"/influencers/"+t.id+"/influenceredit",tag:"button"}},[e._v("Edit")]),n("input",{attrs:{type:"button",value:"Delete"},on:{click:function(n){return e.deleteRecord(t.id)}}})],1)}),n("h1",[e._v(" Add New Influencer ")]),n("form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.addRecord()}}},[n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_influencer.name,expression:"new_influencer.name"}],attrs:{type:"text",required:"",placeholder:"Enter name"},domProps:{value:e.new_influencer.name},on:{input:function(t){t.target.composing||e.$set(e.new_influencer,"name",t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_influencer.description,expression:"new_influencer.description"}],attrs:{type:"text",required:"",placeholder:"Enter description"},domProps:{value:e.new_influencer.description},on:{input:function(t){t.target.composing||e.$set(e.new_influencer,"description",t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_influencer.activity,expression:"new_influencer.activity"}],attrs:{type:"text",required:"",placeholder:"Enter activity (number)"},domProps:{value:e.new_influencer.activity},on:{input:function(t){t.target.composing||e.$set(e.new_influencer,"activity",t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_influencer.relevance,expression:"new_influencer.relevance"}],attrs:{type:"text",required:"",placeholder:"Enter relevance (number)"},domProps:{value:e.new_influencer.relevance},on:{input:function(t){t.target.composing||e.$set(e.new_influencer,"relevance",t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_influencer.engagement,expression:"new_influencer.engagement"}],attrs:{type:"text",required:"",placeholder:"Enter engagement (number)"},domProps:{value:e.new_influencer.engagement},on:{input:function(t){t.target.composing||e.$set(e.new_influencer,"engagement",t.target.value)}}})]),n("input",{attrs:{type:"submit",value:"Add"}}),n("input",{attrs:{type:"reset",value:"Clear"},on:{click:e.resetRecord}})])],2)},y=[],x=(n("55dd"),{data:function(){return{influencers:[],new_influencer:{}}},mounted:function(){this.loadInfluencers()},methods:{loadInfluencers:function(){var e=this;f.a.get("http://localhost:4000/v0/influencers").then(function(t){e.influencers=t.data.data.sort(function(e,t){return(t.activity+t.relevance+t.engagement)/3-(e.activity+e.relevance+e.engagement)/3})}).catch(alert)},deleteRecord:function(e){f.a.delete("http://localhost:4000/v0/influencers/"+e).then(this.loadInfluencers).catch(alert)},resetRecord:function(){this.new_influencer={}},addRecord:function(){var e=this.new_influencer;f.a.post("http://localhost:4000/v0/influencers",{influencer:e}).then(this.resetRecord).then(this.loadInfluencers).catch(alert)}}}),$=x,P=(n("1943"),Object(c["a"])($,b,y,!1,null,"512941e0",null)),E=P.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{id:"form"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("p",[n("label",{attrs:{for:"name"}},[e._v("Name: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.influencer.name,expression:"influencer.name"}],attrs:{id:"name",type:"text",name:"name"},domProps:{value:e.influencer.name},on:{input:function(t){t.target.composing||e.$set(e.influencer,"name",t.target.value)}}})]),n("p",[n("label",{attrs:{for:"description"}},[e._v("Description: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.influencer.description,expression:"influencer.description"}],attrs:{id:"description",type:"text",name:"description"},domProps:{value:e.influencer.description},on:{input:function(t){t.target.composing||e.$set(e.influencer,"description",t.target.value)}}})]),n("p",[n("label",{attrs:{for:"activity"}},[e._v("Activity: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.influencer.activity,expression:"influencer.activity"}],attrs:{id:"activity",type:"text",name:"activity"},domProps:{value:e.influencer.activity},on:{input:function(t){t.target.composing||e.$set(e.influencer,"activity",t.target.value)}}})]),n("p",[n("label",{attrs:{for:"relevance"}},[e._v("Relevance: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.influencer.relevance,expression:"influencer.relevance"}],attrs:{id:"relevance",type:"text",name:"relevance"},domProps:{value:e.influencer.relevance},on:{input:function(t){t.target.composing||e.$set(e.influencer,"relevance",t.target.value)}}})]),n("p",[n("label",{attrs:{for:"engagement"}},[e._v("Engagement: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.influencer.engagement,expression:"influencer.engagement"}],attrs:{id:"engagement",type:"text",name:"engagement"},domProps:{value:e.influencer.engagement},on:{input:function(t){t.target.composing||e.$set(e.influencer,"engagement",t.target.value)}}})]),e._m(0)])},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("input",{attrs:{type:"submit",value:"Submit"}})])}],k={name:"influencerForm",data:function(){return{influencer:{}}},mounted:function(){var e=this;f.a.get("http://localhost:4000/v0/influencers/"+this.$route.params.id).then(function(t){e.influencer=t.data.data}).catch(alert)},methods:{submit:function(){var e=this;f.a.put("http://localhost:4000/v0/influencers/"+this.$route.params.id,{influencer:this.influencer}).then(function(t){alert("saved"),e.influencer=t.data.data}).catch(alert)}}},O=k,j=Object(c["a"])(O,N,R,!1,null,"07df83e8",null),A=j.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Accounts")]),n("ul",e._l(e.accounts,function(t){return n("li",{key:t.id},[n("h2",[e._v("Name: "),n("router-link",{attrs:{to:"/accounts/account/"+t.id}},[e._v(e._s(t.name))])],1),e._v("\n            Email: "+e._s(t.email)),n("br"),e._v("\n            Website: "+e._s(t.website)),n("br"),n("router-link",{attrs:{to:"/accounts/"+t.id+"/accountedit",tag:"button"}},[e._v("Edit")]),n("input",{attrs:{type:"button",value:"Delete"},on:{click:function(n){return e.deleteRecord(t.id)}}})],1)}),0),n("h1",[e._v(" Add New Account ")]),n("form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.send(t)}}},[n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_account.email,expression:"new_account.email"}],attrs:{type:"text",required:"",placeholder:"Enter email"},domProps:{value:e.new_account.email},on:{input:function(t){t.target.composing||e.$set(e.new_account,"email",t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_account.name,expression:"new_account.name"}],attrs:{type:"text",required:"",placeholder:"Enter name"},domProps:{value:e.new_account.name},on:{input:function(t){t.target.composing||e.$set(e.new_account,"name",t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_account.website,expression:"new_account.website"}],attrs:{type:"text",required:"",placeholder:"Enter website"},domProps:{value:e.new_account.website},on:{input:function(t){t.target.composing||e.$set(e.new_account,"website",t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_account.password,expression:"new_account.password"}],attrs:{type:"password",required:"",placeholder:"Enter password"},domProps:{value:e.new_account.password},on:{input:function(t){t.target.composing||e.$set(e.new_account,"password",t.target.value)}}})]),n("input",{attrs:{type:"submit",name:"Add"}}),n("input",{attrs:{type:"reset",value:"Clear"},on:{click:e.resetRecord}})])])},D=[],I={data:function(){return{accounts:[],new_account:{}}},mounted:function(){this.loadAccounts()},methods:{loadAccounts:function(){var e=this;f.a.get("http://localhost:4000/v0/accounts").then(function(t){e.accounts=t.data.data}).catch(alert)},deleteRecord:function(e){f.a.delete("http://localhost:4000/v0/accounts/"+e).then(this.loadAccounts).catch(alert)},resetRecord:function(){this.new_account={}},send:function(){var e="http://localhost:4000/v0/accounts",t=this.new_account;f.a.post(e,{account:t}).then(this.resetRecord).then(this.loadAccounts)}}},S=I,L=(n("d009"),Object(c["a"])(S,q,D,!1,null,"a94ab636",null)),M=L.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",[n("li",[n("h2",[e._v("Name: "+e._s(e.account.name))]),n("p",[e._v("Email: "+e._s(e.account.email))]),n("p",[e._v("Website: "+e._s(e.account.website))])])])])},C=[],T={data:function(){return{account:{}}},mounted:function(){var e=this,t=this.$router.currentRoute.params.id,n="http://localhost:4000/v0/accounts/"+t;f.a.get(n).then(function(t){e.account=t.data.data}).catch(alert)}},F=T,J=(n("be86"),Object(c["a"])(F,W,C,!1,null,"e59aab16",null)),X=J.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{id:"form"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("p",[n("label",{attrs:{for:"name"}},[e._v("Name: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.account.name,expression:"account.name"}],attrs:{id:"name",type:"text",name:"name"},domProps:{value:e.account.name},on:{input:function(t){t.target.composing||e.$set(e.account,"name",t.target.value)}}})]),n("p",[n("label",{attrs:{for:"email"}},[e._v("Email: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.account.email,expression:"account.email"}],attrs:{id:"email",type:"text",name:"email"},domProps:{value:e.account.email},on:{input:function(t){t.target.composing||e.$set(e.account,"email",t.target.value)}}})]),n("p",[n("label",{attrs:{for:"website"}},[e._v("Website: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.account.website,expression:"account.website"}],attrs:{id:"website",type:"text",name:"website"},domProps:{value:e.account.website},on:{input:function(t){t.target.composing||e.$set(e.account,"website",t.target.value)}}})]),n("p",[n("label",{attrs:{for:"password"}},[e._v("Password: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.account.password,expression:"account.password"}],attrs:{id:"password",type:"text",name:"password"},domProps:{value:e.account.password},on:{input:function(t){t.target.composing||e.$set(e.account,"password",t.target.value)}}})]),e._m(0)])},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("input",{attrs:{type:"submit",value:"Submit"}})])}],G={name:"accountform",data:function(){return{account:{}}},mounted:function(){var e=this;f.a.get("http://localhost:4000/v0/accounts/"+this.$route.params.id).then(function(t){e.account=t.data.data}).catch(alert)},methods:{submit:function(){var e=this;f.a.patch("http://localhost:4000/v0/accounts/"+this.$route.params.id,{account:this.account}).then(function(t){alert("saved"),e.account=t.data.data}).catch(alert)}}},H=G,K=Object(c["a"])(H,z,B,!1,null,"407fe0bd",null),Q=K.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Register"},[n("h2",[e._v("Register")]),n("form",{attrs:{id:"form"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.email,expression:"input.email"}],attrs:{type:"text",required:"",placeholder:"Email"},domProps:{value:e.input.email},on:{input:function(t){t.target.composing||e.$set(e.input,"email",t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],attrs:{type:"password",required:"",placeholder:"Password"},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value)}}})]),n("button",{attrs:{type:"button"},on:{click:function(t){return e.register()}}},[e._v("Register")])])])},V=[],Y={name:"Register",data:function(){return{input:{email:"",password:""}}},methods:{register:function(){var e=this.input;f.a.post("http://localhost:3000/v0/accounts",{email:e.email,password:e.password})}}},Z=Y,ee=Object(c["a"])(Z,U,V,!1,null,"ee92f3c2",null),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Login")]),n("form",{attrs:{id:"form"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.username,expression:"input.username"}],attrs:{type:"text",required:"",placeholder:"Email"},domProps:{value:e.input.username},on:{input:function(t){t.target.composing||e.$set(e.input,"username",t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],attrs:{type:"password",required:"",placeholder:"Password"},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value)}}})]),n("input",{attrs:{type:"submit",value:"Forgot Password"}}),n("button",{attrs:{type:"button"},on:{click:function(t){return e.login()}}},[e._v("Login")])])])},ae=[],re={name:"Login",data:function(){return{input:{username:"",password:""}}},methods:{login:function(){""!=this.input.username&&""!=this.input.password?f.a.post("http://localhost:3000/v0/auth",{email:this.input.username,password:this.input.password}):alert("A username and password must be present")}}},ie=re,oe=Object(c["a"])(ie,ne,ae,!1,null,"717de560",null),ue=oe.exports,ce=[{path:"/register",component:te},{path:"/login",component:ue},{path:"/influencers/influencerindex",component:E},{path:"/influencers/:id",component:w},{path:"/influencers/:id/influenceredit",component:A},{path:"/accounts/accountindex",component:M},{path:"/accounts/account/:id",component:X},{path:"/accounts/:id/accountedit",component:Q}],se=new p["a"]({routes:ce});a["a"].config.productionTip=!1,a["a"].use(p["a"]),new a["a"]({render:function(e){return e(l)},router:se}).$mount("#app")},"64a9":function(e,t,n){},"854f":function(e,t,n){},be86:function(e,t,n){"use strict";var a=n("ef19"),r=n.n(a);r.a},d009:function(e,t,n){"use strict";var a=n("854f"),r=n.n(a);r.a},e996:function(e,t,n){"use strict";var a=n("4dd8"),r=n.n(a);r.a},ef19:function(e,t,n){}});
//# sourceMappingURL=app.68b0414c.js.map