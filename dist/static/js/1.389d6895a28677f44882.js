webpackJsonp([1],{378:function(n,e,r){r(403);var o=r(22)(r(396),r(411),null,null);n.exports=o.exports},379:function(n,e,r){"use strict";e.a={login:{username:"Please input the username",password:"Please input the password",button:"Log in",authFail:"Username or password is not correct"}}},380:function(n,e,r){"use strict";var o=r(379),t=r(381);e.a={"zh-CN":t.a,en:o.a}},381:function(n,e,r){"use strict";e.a={login:{username:"请输入用户名",password:"请输入密码",button:"登录",authFail:"用户名或密码错误"}}},396:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(16),t=r.n(o),i=r(39),a=r(380);e.default={locales:a.a,data:function(){return{form:{username:"",password:""},rules:{username:[{required:!0,message:this.$t("login.username"),trigger:"blur"}],password:[{required:!0,message:this.$t("login.password"),trigger:"blur"}]},loading:!1,loginError:!1}},computed:t()({},r.i(i.a)(["loggedIn","globalConfig"])),methods:t()({},r.i(i.b)(["login","changeLang"]),{onSubmit:function(){var n=this;this.$refs.form.validate(function(e){e&&(n.loading=!0,n.login({username:n.form.username,password:n.form.password}).then(function(e){n.loading=!1,n.$router.push(n.$route.query.redirect||"/")}).catch(function(e){n.$notify({title:n.$t("message.error"),message:e.message||n.$t("login.authFail"),type:"error",duration:1500}),n.loading=!1,n.loginError=!0,setTimeout(function(){n.loginError=!1},500)}))})}})}},398:function(n,e,r){e=n.exports=r(372)(!0),e.push([n.i,".login-wrapper{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.login-wrapper .bg{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;background-size:cover;background-position:100%;background-image:url("+r(407)+")}.login-wrapper>h1{position:relative;margin:0 0 1rem;text-align:center;z-index:1}.login-wrapper>form{width:15rem;margin:0 auto}.login-wrapper>form .el-input__inner{color:#475669;border-color:#99a9bf;background-color:transparent}.login-wrapper>form .el-input__inner:focus{color:#1f2d3d;border-color:#1f2d3d}.login-wrapper .login-button{width:100%}.login-wrapper .login-button.error{animation:shake .5s}","",{version:3,sources:["/home/travis/build/erguotou520/vf-mock/src/view/auth/Login.vue"],names:[],mappings:"AACA,eACE,2BAA4B,AACxB,0BAA2B,AAC3B,iBAAmB,CAkBxB,AACD,mBACE,kBAAmB,AACnB,OAAQ,AACR,QAAS,AACT,MAAO,AACP,SAAU,AACV,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,yBAA0B,AAC1B,8CAA0D,CAC3D,AACD,kBACE,kBAAmB,AACnB,gBAAiB,AACjB,kBAAmB,AACnB,SAAW,CACZ,AACD,oBACE,YAAa,AACb,aAAe,CAChB,AACD,qCACE,cAAe,AACf,qBAAsB,AACtB,4BAA8B,CAC/B,AACD,2CACE,cAAe,AACf,oBAAsB,CACvB,AACD,6BACE,UAAY,CACb,AACD,mCACE,mBAAsB,CACvB",file:"Login.vue",sourcesContent:['\n.login-wrapper {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n/*.lang\n    position fixed\n    right 1.5rem\n    bottom @right\n    width 5rem\n    .el-input__icon\n      display none\n    input\n      height 1.75rem\n      border none\n      padding-right 10px\n      text-align center\n      color $color-white-dark\n      background-color rgba(255,255,255,.4)\n      &:hover\n        color $color-white\n        background-color rgba(255,255,255,.25)*/\n}\n.login-wrapper .bg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: 100%;\n  background-image: url("../../assets/images/login-bg.jpg");\n}\n.login-wrapper > h1 {\n  position: relative;\n  margin: 0 0 1rem;\n  text-align: center;\n  z-index: 1;\n}\n.login-wrapper > form {\n  width: 15rem;\n  margin: 0 auto;\n}\n.login-wrapper > form .el-input__inner {\n  color: #475669;\n  border-color: #99a9bf;\n  background-color: transparent;\n}\n.login-wrapper > form .el-input__inner:focus {\n  color: #1f2d3d;\n  border-color: #1f2d3d;\n}\n.login-wrapper .login-button {\n  width: 100%;\n}\n.login-wrapper .login-button.error {\n  animation: shake 0.5s;\n}'],sourceRoot:""}])},403:function(n,e,r){var o=r(398);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);r(373)("2daafdb8",o,!0)},407:function(n,e,r){n.exports=r.p+"static/img/login-bg.bd93cbf.jpg"},411:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:!n.loggedIn,expression:"!loggedIn"}],staticClass:"login-wrapper"},[r("div",{staticClass:"bg"}),n._v(" "),r("h1",[n._v(n._s(n.$t("title")))]),n._v(" "),r("el-form",{ref:"form",attrs:{model:n.form,rules:n.rules},nativeOn:{submit:function(e){e.preventDefault(),n.onSubmit(e)}}},[r("el-form-item",[r("el-select",{attrs:{value:n.globalConfig.lang},on:{input:function(e){n.changeLang(arguments[0])}}},n._l(n.globalConfig.langs,function(n){return r("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})}))],1),n._v(" "),r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:n.$t("login.username")},model:{value:n.form.username,callback:function(e){n.$set(n.form,"username",e)},expression:"form.username"}})],1),n._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:n.$t("login.password")},model:{value:n.form.password,callback:function(e){n.$set(n.form,"password",e)},expression:"form.password"}})],1),n._v(" "),r("el-form-item",[r("el-button",{staticClass:"login-button",class:{error:n.loginError},attrs:{type:"success","native-type":"submit",loading:n.loading}},[n._v(n._s(n.$t("login.button")))])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=1.389d6895a28677f44882.js.map