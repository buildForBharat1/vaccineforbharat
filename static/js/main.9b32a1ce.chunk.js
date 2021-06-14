(this.webpackJsonpvaccineforbharat=this.webpackJsonpvaccineforbharat||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),i=n.n(c),o=(n(86),n(19)),s=n.n(o),d=n(23),u=n(7),O=n(47),l=n(15),j=n(6),b=n(3),h=n(153),f=n(152),g=n(10),E=n(13),I=n(154),m=function(){var e=Object(d.a)(s.a.mark((function e(t,n,a,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({isLoading:!0}),e.abrupt("return",Promise.resolve().then((function(){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(n)})})).then((function(e){return e.json()})).then((function(e){if(a({isLoading:!1}),e.error)throw e;return e})).catch((function(e){throw a({errorObj:{code:e.errorCode,message:e.error},isLoading:!1}),e})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(s.a.mark((function e(t,n,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({isLoading:!0}),e.abrupt("return",Promise.resolve().then((function(){return fetch(t,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}})})).then((function(e){return e.json()})).then((function(e){if(n({isLoading:!1}),e.error)throw e;return e})).catch((function(e){throw n({errorObj:{code:e.errorCode,message:e.error},isLoading:!1}),e})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),v=n(24),_=function(e,t){var n=Object(v.c)(e.name),a=Object(v.c)(e.displayName),r=e.id_type,c=e.id_number,i=(void 0===c?"":c).slice(-4),o=j.find(t,(function(e){var t=b.f[e.photo_id_type],n=j.get(e,"photo_id_number","").slice(-4);return r===t&&i===n}));if(!j.isEmpty(o))return o;var s=j.find(t,(function(e){var t=e.name,a=Object(v.c)(t);return Object(v.b)(n,a)<b.a}));return j.isEmpty(s)?j.find(t,(function(e){var t=e.name,n=Object(v.c)(t);return Object(v.b)(a,n)<b.a})):s},T=function(e){return j.map(e,(function(e){return{beneficiary_id:e.beneficiary_reference_id,name:e.name,vaccine:e.vaccine,vaccination_status:e.vaccination_status,dose1_date:e.dose1_date,dose2_date:e.dose2_date}}))},x=function(){var e=Object(d.a)(s.a.mark((function e(t,n){var a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(b.b.FETCH_BENEFICIARY,n,t.token);case 3:if(a=e.sent,r=j.get(a,"beneficiaries",[]),c=_(t,r),!j.isEmpty(c)){e.next=9;break}return n({stage:b.k.NOT_REGISTERED,registeredBeneficiaryList:T(r)}),e.abrupt("return");case 9:if(j.isEmpty(c.dose1_date)&&j.isEmpty(c.dose2_date)){e.next=12;break}return n({stage:b.k.VACCINATED,beneficiaryDetails:c}),e.abrupt("return");case 12:if(j.isEmpty(c.appointments)){e.next=15;break}return n({stage:b.k.EXISTING_BOOKING,beneficiaryDetails:c}),e.abrupt("return");case 15:n({stage:b.k.FETCH_SLOTS,beneficiaryDetails:c}),e.next=20;break;case 18:e.prev=18,e.t0=e.catch(0);case 20:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,n){return e.apply(this,arguments)}}(),N=function(e,t){var n=j.get(e,"vaccineSlot.session_id"),a=[];return j.forEach(t,(function(e){var t=e.sessions,r=j.filter(t,(function(e){var t=j.get(e,"available_capacity",0),a=j.get(e,"available_capacity_dose1",0);return t>0&&a>=b.m.MIN_CAPACITY&&e.min_age_limit===b.m.MIN_AGE&&e.session_id!==n})),c=j.maxBy(r,"available_capacity_dose1");if(c){var i=function(e){var t=e.date;return Object(v.a)()!==t?e.slots[0]:j.last(e.slots)}(c);a.push(Object(u.a)(Object(u.a)(Object(u.a)({},e),c),{},{slot_time:i}))}})),j.maxBy(a,"available_capacity_dose1")},k=function(){var e=Object(d.a)(s.a.mark((function e(t,n){var a,r,c,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.district){e.next=4;break}return n({stage:b.k.REGISTERED}),e.abrupt("return");case 4:return r=Object(v.e)(),e.prev=5,e.next=8,p("".concat(b.b.FETCH_SLOTS,"?district_id=").concat(a,"&date=").concat(r),n,t.token);case 8:if(c=e.sent,i=j.get(c,"centers",[]),o=N(t,i),!j.isEmpty(o)){e.next=14;break}return n({errorObj:{code:b.e.NO_SLOT,message:"No available slot found for district ".concat(a)}}),e.abrupt("return");case 14:n({stage:b.k.TRIGGER_CAPTCHA,vaccineSlot:o}),e.next=19;break;case 17:e.prev=17,e.t0=e.catch(5);case 19:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(t,n){return e.apply(this,arguments)}}(),A=n(58);function y(e){return A.stringify(e)}var S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,n=C(e),a=B(e.stage),r=Object(u.a)(Object(u.a)({},n),{},{auth_key:e.auth_key,phone:e.phone||e.registeredPhone,alternatePhone:e.registeredPhone,app_state:a}),c=y(r);window.setTimeout((function(){window.location.href="".concat(e.callback,"?").concat(c)}),t)},C=function(e){var t=e.beneficiaryDetails,n=void 0===t?{}:t,a=R(e),r=L(e),c={beneficiary_id:n.beneficiary_reference_id,name:n.name,vaccine:n.vaccine,vaccination_status:n.vaccination_status,dose_1_date:n.dose1_date,dose_2_date:n.dose2_date,err_code:a.code,err_message:a.message,meta_data:JSON.stringify(r)};switch(e.stage){case b.k.EXISTING_BOOKING:var i=n.appointments,o=void 0===i?[]:i,s=j.last(o)||{};return Object(u.a)(Object(u.a)({},c),{},{center_id:s.center_id,center_name:s.name,slot:s.slot,session_id:s.session_id,date:s.date,dose:s.dose,appointment_id:s.appointment_id});case b.k.SLOT_BOOKED:var d=e.vaccineSlot,O=void 0===d?{}:d,l=e.appointmentId,h=D(O);return Object(u.a)(Object(u.a)({},c),{},{appointment_id:l,center_id:O.center_id,center_name:O.name,center_address:O.address,center_district_name:O.district_name,center_pincode:O.pincode,slot:O.slot_time,session_id:O.session_id,date:O.date,vaccine_fee:h,vaccine:O.vaccine,dose:1});default:return c}},R=function(e){return e.stage===b.k.SLOT_BOOKED?{}:e.stage===b.k.NOT_REGISTERED?j.isEmpty(e.errorObj)?{code:b.e.NO_BENEFICIARY,message:j.join(j.map(e.registeredBeneficiaryList,"name"),",")}:e.errorObj:e.errorObj||{}},B=function(e){return e===b.k.NOT_REGISTERED?b.k.ERROR:e},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=j.get(e,"vaccine_fees",[]),n=j.find(t,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.vaccine===e.vaccine}));return j.get(n,"fee","0")},L=function(e){return e.stage===b.k.NOT_REGISTERED?{available_beneficiaries:j.slice(e.registeredBeneficiaryList,0,b.h)}:{}},P=n.p+"static/media/build4bharat.06144520.jpg",G=n(17),F=n(27),W=n(2),H=n(109),w=Object(f.a)({root:{backgroundColor:"#B2EBFE",width:"100%"},image:{overflowY:"hidden",width:"100%"},card:{flexGrow:1,width:"90%",minHeight:"25%",margin:"auto",padding:"5%",position:"absolute",bottom:0},button:{marginTop:10},goHomeButton:{marginTop:20},body:{marginTop:"5%"}});function V(){var e=parseInt(10*Math.random())%6;return b.l[e]}var K=Object(l.e)((function(e){var t,n=(t=e.location.search,A.parse(t,{ignoreQueryPrefix:!0})||{}),r=j.isEmpty(n.phone)?b.k.ALTERNATE_PHONE_INIT:b.k.INIT,c=Object(a.useState)(Object(u.a)(Object(u.a)({},n),{},{stage:r,otp:"",captcha:"",registeredPhone:j.get(n,"phone"),lastPhone:j.get(n,"phone"),registeredBeneficiaryList:[]})),i=Object(O.a)(c,2),o=i[0],l=i[1],f=Object(a.useState)(b.j),p=Object(O.a)(f,2),v=p[0],_=p[1],T=Object(a.useState)(1),N=Object(O.a)(T,2),y=N[0],C=N[1],R=Object(a.useState)(b.d),B=Object(O.a)(R,2),D=B[0],L=B[1],K=function(e){l(Object(u.a)(Object(u.a)({},o),e))},Y=function(e){l(Object(u.a)(Object(u.a)({},o),{},{otp:e}))},U=function(e){l(Object(u.a)(Object(u.a)({},o),{},{captcha:e}))},X=function(){var e=Object(d.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=V(),_(b.j),e.prev=2,e.next=5,m(b.b.INIT,{mobile:o.registeredPhone,secret:t},K);case 5:n=e.sent,l(Object(u.a)(Object(u.a)({},o),{},{txnId:n.txnId,stage:b.k.VALIDATE_OTP})),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(d.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=H("sha256").update(o.otp).digest("hex"),e.prev=1,e.next=4,m(b.b.VALIDATE_OTP,{otp:t,txnId:o.txnId},K);case 4:n=e.sent,l(Object(u.a)(Object(u.a)({},o),{},{token:n.token,errorObj:{},stage:b.k.FETCH_BENEFICIARY})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(d.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(b.b.SCHEDULE,{captcha:o.captcha,beneficiaries:[o.beneficiaryDetails.beneficiary_reference_id],center_id:o.vaccineSlot.center_id,slot:o.vaccineSlot.slot_time,session_id:o.vaccineSlot.session_id,dose:j.isEmpty(o.beneficiaryDetails.dose1_date)?1:2},K,o.token);case 3:t=e.sent,n=j.get(t,"appointment_confirmation_no"),j.isEmpty(n)?l(Object(u.a)(Object(u.a)({},o),{},{errorObj:{code:b.e.BOOKING_FAILED,message:"Appointment not confirmed"}})):l(Object(u.a)(Object(u.a)({},o),{},{errorObj:{},stage:b.k.SLOT_BOOKED,appointmentId:n})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(d.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(b.b.TRIGGER_CAPTCHA,{},K,o.token);case 3:t=e.sent,n=j.get(t,"captcha"),l(Object(u.a)(Object(u.a)({},o),{},{stage:b.k.SCHEDULE,svg:n})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),q=function(e){l(Object(u.a)(Object(u.a)({},o),{},{registeredPhone:e}))},Z=function(){var e=o.registeredPhone;10===j.size(e)?l(Object(u.a)(Object(u.a)({},o),{},{stage:b.k.INIT,lastPhone:o.registeredPhone})):l(Object(u.a)(Object(u.a)({},o),{},{errorObj:{code:b.e.INVALID_PHONE,message:b.g.DEFAULT}}))},Q=function(){l(Object(u.a)(Object(u.a)({},o),{},{stage:b.k.ALTERNATE_PHONE_INIT,otp:"",errorObj:null,registeredPhone:""}))},$=function(){S(o,0)},ee=function(){if(l(Object(u.a)(Object(u.a)({},o),{},{errorObj:{},stage:b.k.BOOKING_FAILED})),y<b.i){var e=setTimeout((function(){C(y+1)}),3e3);return function(){return clearInterval(e)}}S(Object(u.a)(Object(u.a)({},o),{},{stage:b.k.BOOKING_FAILED}))};Object(a.useEffect)((function(){switch(o.stage){case b.k.INIT:o.registeredPhone&&X();break;case b.k.TRIGGER_CAPTCHA:J();break;case b.k.FETCH_BENEFICIARY:x(o,K);break;case b.k.FETCH_SLOTS:k(o,K);break;case b.k.SLOT_BOOKED:case b.k.VACCINATED:case b.k.EXISTING_BOOKING:case b.k.REGISTERED:case b.k.ERROR:S(o);break;case b.k.NOT_REGISTERED:return void L(Object(u.a)(Object(u.a)({},b.d),{},{isTimerOn:!0}))}L(b.d)}),[o.stage]),Object(a.useEffect)((function(){if(j.get(o.errorObj,"code")){switch(o.stage){case b.k.FETCH_BENEFICIARY:return void l(Object(u.a)(Object(u.a)({},o),{},{stage:b.k.NOT_REGISTERED}))}switch(o.errorObj.code){case b.e.INVALID_PHONE:case b.c[b.e.INVALID_OTP]:return;case b.c[b.e.INVALID_CAPTCHA]:return void J();case b.c[b.e.EXISTING_BOOKING]:return void l(Object(u.a)(Object(u.a)({},o),{},{stage:b.k.EXISTING_BOOKING}));case b.c[b.e.NO_BENEFICIARY]:return void l(Object(u.a)(Object(u.a)({},o),{},{stage:b.k.NOT_REGISTERED}));case b.e.NO_SLOT:return void ee();case b.e.NO_BENEFICIARY:return;default:return void(o.stage===b.k.SCHEDULE?ee():l(Object(u.a)(Object(u.a)({},o),{},{stage:b.k.ERROR})))}}}),[o.errorObj]),Object(a.useEffect)((function(){if(v){var e=setTimeout((function(){_(v-1)}),1e3);return function(){return clearInterval(e)}}}),[v]),Object(a.useEffect)((function(){o.stage===b.k.BOOKING_FAILED&&l(Object(u.a)(Object(u.a)({},o),{},{errorObj:{},captcha:"",stage:b.k.FETCH_SLOTS}))}),[y]),Object(a.useEffect)((function(){if(D.isTimerOn){if(!(D.callBackDelayInSeconds<=0)){var e=setTimeout((function(){L(Object(u.a)(Object(u.a)({},D),{},{callBackDelayInSeconds:D.callBackDelayInSeconds-1}))}),1e3);return function(){return clearInterval(e)}}S(o,0)}}),[D]);var te=w(),ne=function(e){switch(o.stage){case b.k.FETCH_SLOTS:case b.k.SCHEDULE:return Object(F.c)(o,e,U,z);case b.k.SLOT_BOOKED:return Object(F.i)(e);case b.k.VACCINATED:return Object(F.j)(e);case b.k.EXISTING_BOOKING:return Object(F.e)(e);case b.k.BOOKING_FAILED:return Object(F.b)(o,y,e);case b.k.ERROR:return Object(F.d)(o,e);case b.k.REGISTERED:return Object(F.h)(e);case b.k.NOT_REGISTERED:return Object(F.f)({classes:e,registeredPhone:o.registeredPhone,enterAlternatePhoneInitStage:Q,goToHome:$,autoCallBackState:D});case b.k.ALTERNATE_PHONE_INIT:return Object(F.a)(e,o,Z,q);default:return Object(F.g)({state:o,retryTime:v,classes:e,changeOtp:Y,submitOtp:M,triggerOtp:X,enterAlternatePhoneInitStage:Q})}}(te),ae=j.isEmpty(j.get(o.errorObj,"message"))||j.get(o,"stage")===b.k.NOT_REGISTERED?null:Object(W.jsx)(g.a,{alignItems:"center",justify:"center",children:Object(W.jsx)(g.a,{item:!0,lg:12,children:Object(W.jsx)(E.a,{color:"error",children:Object(W.jsx)(G.a,{fontWeight:"fontWeightBold",children:o.errorObj.message})})})});return Object(W.jsxs)("div",{className:te.root,children:[Object(W.jsx)("img",{src:"".concat(P),className:te.image}),Object(W.jsxs)(h.a,{className:te.card,children:[ae,o.isLoading&&Object(W.jsx)(I.a,{}),ne]})]})})),Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,157)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},U=n(69);i.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(U.a,{children:Object(W.jsx)(l.a,{path:"/",component:K})})}),document.getElementById("root")),Y()},24:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return s}));var a=n(6),r=(n(3),function(e){var t=a.toLower(e);return a.find(a.split(t,/\s|\.|\,/),(function(e){return a.size(e)>2}))}),c=function(e,t){var n=a.size(e),r=a.size(t);if(r>50||n>50)return 50;var c=[];return a.forEach(a.range(0,n+1),(function(e){c[e]=[e]})),a.forEach(a.range(0,r+1),(function(e){c[0][e]=e})),a.forEach(a.range(1,n+1),(function(n){a.forEach(a.range(1,r+1),(function(a){e[n-1]===t[a-1]?c[n][a]=c[n-1][a-1]:c[n][a]=Math.min(c[n-1][a-1]+1,Math.min(c[n][a-1]+1,c[n-1][a]+1))}))})),c[n][r]},i=function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,a=e.getFullYear();return"".concat((t>9?"":"0")+t,"-").concat((n>9?"":"0")+n,"-").concat(a)},o=function(){var e=new Date,t=new Date(e);t.setDate(e.getDate()+1);var n=t.getDate(),a=t.getMonth()+1,r=t.getFullYear();return"".concat(n,"-").concat((a>9?"":"0")+a,"-").concat(r)},s=function(e){return new Date(1e3*e).toISOString().substr(14,5)}},27:function(e,t,n){"use strict";(function(e){n.d(t,"g",(function(){return h})),n.d(t,"c",(function(){return f})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return E})),n.d(t,"e",(function(){return I})),n.d(t,"b",(function(){return p})),n.d(t,"d",(function(){return v})),n.d(t,"h",(function(){return _})),n.d(t,"f",(function(){return T})),n.d(t,"a",(function(){return x}));var a=n(20),r=(n(0),n(6)),c=n(3),i=n(61),o=n(43),s=n(10),d=n(13),u=n(119),O=n(24),l=n(17),j=n(2),b=function(e){return Object(j.jsx)("div",{className:e.body,children:Object(j.jsx)(d.a,{children:"\u231b Taking you back..."})})},h=function(e){var t=e.state,n=e.retryTime,a=e.classes,r=e.changeOtp,c=e.submitOtp,b=e.triggerOtp,h=e.enterAlternatePhoneInitStage,f=n<1,g=Object(O.d)(n);return Object(j.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(d.a,{variant:"body2",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",children:"LOGIN"})})}),Object(j.jsxs)(s.a,{item:!0,lg:12,children:[Object(j.jsx)(d.a,{variant:"h6",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",children:"Enter OTP"})}),Object(j.jsx)(d.a,{variant:"subtitle2",children:Object(j.jsxs)(l.a,{my:2,children:[Object(j.jsxs)(l.a,{children:["OTP sent to ",t.registeredPhone]}),Object(j.jsx)(u.a,{onClick:h,children:"Vaccine registered on different number?"})]})})]}),Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(i.a,{maxLength:6,type:"number",id:"otp",label:"6-digit OTP",variant:"outlined",value:t.otp,onChange:function(e){return r(e.target.value)}})}),Object(j.jsxs)(s.a,{container:!0,justify:"space-between",children:[Object(j.jsx)(s.a,{item:!0,lg:6,children:Object(j.jsx)(o.a,{className:a.button,id:"otp",variant:"contained",color:"primary",onClick:c,disabled:t.isLoading,children:"Submit OTP"})}),Object(j.jsx)(s.a,{item:!0,lg:6,children:Object(j.jsx)(o.a,{className:a.button,id:"otp",variant:"contained",color:f?"primary":"default",onClick:b,disabled:!f||t.isLoading,children:"Retry ".concat(f?"":"("+g+")")})})]})]})},f=function(t,n,r,c){var u;if(t.svg){var O=new e(t.svg).toString("base64");return Object(j.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(d.a,{variant:"body2",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",children:"Book Slot"})})}),Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(d.a,{variant:"h6",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",children:"Enter the characters you see in the image"})})}),Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)("img",{src:"data:image/svg+xml;base64,".concat(O)})}),Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(i.a,(u={maxLength:6,id:"captcha",variant:"outlined",type:"text"},Object(a.a)(u,"maxLength",6),Object(a.a)(u,"name","Enter Captcha"),Object(a.a)(u,"value",t.captcha),Object(a.a)(u,"onChange",(function(e){return r(e.target.value)})),u))}),Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(o.a,{className:n.button,id:"captcha",onClick:c,variant:"contained",color:"primary",disabled:t.isLoading,children:"Book Vaccination"})})]})}},g=function(e){return Object(j.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(d.a,{variant:"body2",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",color:"success.main",children:"SLOT BOOKED"})})}),Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(d.a,{variant:"h6",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",children:"Your vaccinated slot has been booked"})})}),Object(j.jsx)(s.a,{item:!0,lg:12,children:b(e)})]})},E=function(e){return Object(j.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(d.a,{variant:"body2",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",color:"success.main",children:"VACCINATED"})})}),Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(d.a,{variant:"h6",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",children:"You have been vaccinated"})})}),Object(j.jsx)(s.a,{item:!0,lg:12,children:b(e)})]})},I=function(e){return Object(j.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(d.a,{variant:"body2",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",color:"success.main",children:"SLOT BOOKED"})})}),Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(d.a,{variant:"h6",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",children:"You have a slot booking"})})}),Object(j.jsx)(s.a,{item:!0,lg:12,children:b(e)})]})},m=function(e,t){return e<c.i?function(e){return Object(j.jsx)("div",{className:e.body,children:Object(j.jsx)(d.a,{children:"\u231b Retrying some other slot..."})})}(t):b(t)},p=function(e,t,n){var a=m(t,n);return Object(j.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(d.a,{variant:"body2",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",color:"secondary.main",children:"BOOKING FAILED"})})}),Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(d.a,{variant:"h6",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",children:"All slots booked before your booking"})})}),Object(j.jsx)(s.a,{item:!0,lg:12,children:a})]})},v=function(e,t){var n=function(e){var t=r.get(e.errorObj,"code");return t===c.e.NO_BENEFICIARY||t===c.c.NO_BENEFICIARY?Object(j.jsx)(d.a,{variant:"h6",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",children:"Your registration on CoWin Portal is pending. Please register first so that you can book slots."})}):Object(j.jsx)(d.a,{variant:"body2",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",color:"secondary.main",children:"SOMETHING WENT WRONG"})})}(e);return Object(j.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(j.jsx)(s.a,{item:!0,lg:12,children:n}),Object(j.jsx)(s.a,{item:!0,lg:12,children:b(t)})]})},_=function(e){return Object(j.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(d.a,{variant:"body2",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",color:"success.main",children:"STATUS CONFIRMED"})})}),Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(d.a,{variant:"h6",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",children:"You have registered on CoWin portal. Please book a slot for vaccination soon."})})}),Object(j.jsx)(s.a,{item:!0,lg:12,children:b(e)})]})},T=function(e){var t=e.classes,n=e.registeredPhone,a=e.enterAlternatePhoneInitStage,r=e.goToHome,c=e.autoCallBackState;return Object(j.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(d.a,{variant:"subtitle2",children:Object(j.jsx)(l.a,{color:"#FF0000",fontWeight:"fontWeightBold",children:"Vaccination pending"})})}),Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(d.a,{variant:"h6",children:Object(j.jsxs)(l.a,{fontWeight:"fontWeightBold",my:2,children:["No vaccination registration found for ",n,c.isTimerOn&&Object(j.jsxs)(d.a,{children:["\u231b Taking you back in ",c.callBackDelayInSeconds]})]})})}),Object(j.jsxs)(s.a,{container:!0,justify:"center",alignItems:"center",direction:"column",children:[Object(j.jsx)(o.a,{className:t.button,variant:"contained",color:"primary",fullWidth:!0,onClick:a,children:Object(j.jsx)(d.a,{variant:"subtitle2",children:"Vaccine registered on different number?"})}),Object(j.jsx)(o.a,{className:t.goHomeButton,variant:"contained",color:"primary",fullWidth:!0,onClick:r,children:Object(j.jsx)(d.a,{variant:"subtitle2",children:"Go to home"})})]})]})},x=function(e,t,n,a){return Object(j.jsxs)(s.a,{alignItems:"center",justify:"center",direction:"column",children:[Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(d.a,{variant:"h6",children:Object(j.jsx)(l.a,{fontWeight:"fontWeightBold",my:2,children:"Enter vaccination registration phone number"})})}),Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(i.a,{maxLength:10,fullWidth:!0,size:"small",type:"number",id:"alternatePhone",label:"Phone number",variant:"outlined",value:t.registeredPhone,onChange:function(e){return a(e.target.value)}})}),Object(j.jsx)(s.a,{item:!0,lg:12,children:Object(j.jsx)(o.a,{className:e.button,variant:"contained",color:"primary",fullWidth:!0,id:"submitRegisteredPhone",onClick:n,children:Object(j.jsx)(d.a,{variant:"subtitle1",children:"Send OTP"})})})]})}}).call(this,n(66).Buffer)},3:function(e,t,n){"use strict";n.d(t,"l",(function(){return i})),n.d(t,"k",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"m",(function(){return u})),n.d(t,"e",(function(){return O})),n.d(t,"c",(function(){return l})),n.d(t,"j",(function(){return j})),n.d(t,"i",(function(){return b})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return f})),n.d(t,"d",(function(){return g})),n.d(t,"h",(function(){return E}));var a,r,c=n(20),i=["U2FsdGVkX1/fkazU2I2Rdz3hI7iWT6HRzThZj16rpyn4xYM6wcbd84k4CpJimxC0YpG3kFn9qog6LhmaRoS14g==","U2FsdGVkX19I0TpTI50qTW+0o+LEWSBPYIcivZR4gvANVyLhRhP+rwapNMmyE3tE7e2EeEIV8X6YVfOODlCUbg==","U2FsdGVkX181DnPRmCbp6NePNHeHRfh3dAO9dMMSApKdvNpIEcK11CYuqjyI04DU4TRuktcSduxWej8OGCz9ZA==","U2FsdGVkX19NYwIf1jzNr2ghhC7bH1/H36TLGsiUKSopzfhdHB4aSa2RczWmSdN35ZwZXJ18cha9qX1vLO1BpQ==","U2FsdGVkX18kqQVkl8zGUA8schCVAm6NWNM0q/bCV7dHyUJoy8JPbRms4IIsFNU4Ahx6ffx0FVYsOIatS98WjA==","U2FsdGVkX18y9RiV+sdQG+dNc09ETZfLddhx6sEu10zP07S14C9X4cdXXRtwJ+Pa+x2zycwllBLV9opSgQ9Cjg=="],o={INIT:"INIT",VALIDATE_OTP:"VALIDATE_OTP",FETCH_BENEFICIARY:"FETCH_BENEFICIARY",FETCH_SLOTS:"FETCH_SLOTS",TRIGGER_CAPTCHA:"TRIGGER_CAPTCHA",SCHEDULE:"SCHEDULE",SLOT_BOOKED:"SLOT_BOOKED",ERROR:"ERROR",EXISTING_BOOKING:"EXISTING_BOOKING",BOOKING_FAILED:"BOOKING_FAILED",VACCINATED:"VACCINATED",REGISTERED:"REGISTERED",NOT_REGISTERED:"NOT_REGISTERED",ALTERNATE_PHONE_INIT:"ALTERNATE_PHONE_INIT"},s=(a={},Object(c.a)(a,o.INIT,"https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP"),Object(c.a)(a,o.VALIDATE_OTP,"https://cdn-api.co-vin.in/api/v2/auth/validateMobileOtp"),Object(c.a)(a,o.FETCH_BENEFICIARY,"https://cdn-api.co-vin.in/api/v2/appointment/beneficiaries"),Object(c.a)(a,o.TRIGGER_CAPTCHA,"https://cdn-api.co-vin.in/api/v2/auth/getRecaptcha"),Object(c.a)(a,o.SCHEDULE,"https://cdn-api.co-vin.in/api/v2/appointment/schedule"),Object(c.a)(a,o.FETCH_SLOTS,"https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict"),a),d=3,u={MIN_AGE:18,MIN_CAPACITY:5},O={NO_BENEFICIARY:"NO_BENEFICIARY",NO_SLOT:"NO_SLOT",INVALID_OTP:"INVALID_OTP",INVALID_CAPTCHA:"INVALID_CAPTCHA",EXISTING_BOOKING:"EXISTING_BOOKING",BOOKING_FAILED:"BOOKING_FAILED",UNKNOWN_ERROR:"UNKNOWN_ERROR",INVALID_PHONE:"INVALID_PHONE"},l=(r={},Object(c.a)(r,O.EXISTING_BOOKING,"APPOIN0022"),Object(c.a)(r,O.INVALID_OTP,"USRAUT0014"),Object(c.a)(r,O.INVALID_CAPTCHA,"APPOIN0045"),Object(c.a)(r,O.NO_BENEFICIARY,"APPOIN0001"),r),j=120,b=2,h={"Aadhaar Card":"aadhaar_card","PAN Card":"pan_card"},f={SAME_AS_LAST:"New phone number can't be same as last",DEFAULT:"Please enter a valid phone number"},g={callBackDelayInSeconds:15,isTimerOn:!1},E=5},86:function(e,t,n){},98:function(e,t){}},[[117,1,2]]]);
//# sourceMappingURL=main.9b32a1ce.chunk.js.map