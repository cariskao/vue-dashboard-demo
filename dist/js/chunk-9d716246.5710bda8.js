(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d716246"],{"4e03":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-110 text-white"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a(t.cartStatus,{tag:"div",attrs:{cart:t.cart}})],1),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"block-header text-center py-3 bg-white text-dark"},[t._v("訂單摘要")]),a("div",{staticClass:"block-body"},[a("ul",{staticClass:"list-unstyled"},[a("li",{staticClass:"d-flex justify-content-between align-items-center p-4"},[a("span",[t._v("小計")]),a("span",[t._v(t._s(t._f("currency")(t.cart.total)))])]),a("li",{staticClass:"d-flex justify-content-between align-items-center p-4 border-top"},[a("span",{staticClass:"text-uppercase"},[t._v("total")]),a("span",[t._v(t._s(t._f("currency")(t.cart.final_total)))])]),a("li",[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"try test","aria-label":"Recipient's username","aria-describedby":"basic-addon2"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-light",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v("使用 Coupon")])])])]),a("li",{staticClass:"d-flex"},["Checkout"==t.cartStatus?a("button",{staticClass:"btn btn-outline-light ml-auto",on:{click:function(e){t.cartStatus="Checkinfo"}}},[t._v("確認，下一步")]):t._e(),"Checkinfo"==t.cartStatus?a("button",{staticClass:"btn btn-outline-light ml-auto",on:{click:function(e){t.cartStatus="Checkout"}}},[t._v("返回，上一步")]):t._e()])])])])])])])},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"cart-body px-4"},t._l(t.cart.carts,function(e,s){return a("div",{key:s,staticClass:"cart-item py-3 border-bottom"},[a("div",{staticClass:"row text-center align-items-center"},[a("div",{staticClass:"col-md-5"},[a("div",{staticClass:"d-flex align-items-center"},[a("router-link",{attrs:{to:"/movieinfo/"+e.product_id}},[a("img",{staticClass:"cart-item-img",attrs:{src:e.product.imageUrl,alt:""}})]),a("div",{staticClass:"text-left ml-3"},[a("router-link",{staticClass:"text-white",attrs:{to:"/movieinfo/"+e.product_id}},[t._v(t._s(e.product.title))]),a("br"),a("span",{staticClass:"badge badge-light"},[t._v(t._s(e.product.category))]),e.coupon?[a("div",{staticClass:"text-danger"},[t._v("以套用 "+t._s(e.coupon.percent)+" % 優惠券")])]:t._e()],2)],1)]),a("div",{staticClass:"col-md-2"},[t._v(t._s(e.product.price))]),a("div",{staticClass:"col-md-2"},[t._v(t._s(e.qty)+" / "+t._s(e.product.unit))]),e.coupon?a("div",{staticClass:"col-md-2"},[t._v(t._s(t._f("currency")(e.final_total)))]):a("div",{staticClass:"col-md-2"},[t._v(t._s(t._f("currency")(e.product.price)))]),a("div",{staticClass:"col-md-1",on:{click:function(a){t.removeCart(e.id)}}},[a("i",{staticClass:"far fa-trash-alt"})])])])}),0)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart-header text-center px-1 py-3 bg-white text-dark"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5"},[t._v("ITEM")]),a("div",{staticClass:"col-md-2"},[t._v("PRICE")]),a("div",{staticClass:"col-md-2"},[t._v("QUANTITY")]),a("div",{staticClass:"col-md-2"},[t._v("TOTAL")]),a("div",{staticClass:"col-md-1"})])])}],c={computed:{cart:function(){return this.$store.state.cart}},methods:{removeCart:function(t){this.$store.dispatch("removeCart",t)}}},n=c,l=(a("f505"),a("2877")),d=Object(l["a"])(n,i,o,!1,null,"5a8f5a11",null);d.options.__file="Checkout.vue";var u=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h1",{staticClass:"display-4"},[t._v("收件人資訊")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useremail"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t.errors.has("email")?a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t.errors.has("name")?a("span",{staticClass:"text-danger"},[t._v("姓名必須輸入")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^([0-9]+)$/},expression:"{required:true, regex: /^([0-9]+)$/}"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("tel")},attrs:{type:"tel",name:"tel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),t.errors.has("tel")?a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("tel")))]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("address")},attrs:{type:"address",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t.errors.has("address")?a("span",{staticClass:"text-danger"},[t._v("地址欄位不得留空")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._m(0)])])])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-danger"},[t._v("送出訂單")])])}],p={data:function(){return{form:{user:{}}}},methods:{createOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("gx7879","/order"),a=this;this.$validator.validate().then(function(s){s?t.$http.post(e,{data:a.form}).then(function(t){console.log(t.data),t.data.success&&a.$router.push("/check_out_payment/".concat(t.data.orderId))}):a.$bus.$emit("message:push","欄位不完整","danger")})}}},f=p,_=Object(l["a"])(f,m,v,!1,null,null,null);_.options.__file="Checkinfo.vue";var C=_.exports,h={data:function(){return{cartStatus:"Checkout",coupon_code:""}},computed:{cart:function(){return this.$store.state.cart}},methods:{addCouponCode:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("gx7879","/coupon"),e=this,a={code:e.coupon_code};this.$http.post(t,{data:a}).then(function(t){console.log(t.data),t.data.success?e.getCart():e.$bus.$emit("message:push",t.data.message,"danger")})},getCart:function(){this.$store.dispatch("getCart")}},components:{Checkout:u,Checkinfo:C}},g=h,b=Object(l["a"])(g,s,r,!1,null,null,null);b.options.__file="Cart.vue";e["default"]=b.exports},"9d1b":function(t,e,a){},f505:function(t,e,a){"use strict";var s=a("9d1b"),r=a.n(s);r.a}}]);
//# sourceMappingURL=chunk-9d716246.5710bda8.js.map