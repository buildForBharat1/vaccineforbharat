(this.webpackJsonpvaccineforbharat=this.webpackJsonpvaccineforbharat||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),i=n.n(c),o=(n(86),n(19)),s=n.n(o),d=n(23),j=n(7),u=n(47),O=n(15),l=n(6),b=n(3),h=n(153),f=n(152),g=n(10),I=n(13),E=n(154),p=function(){var e=Object(d.a)(s.a.mark((function e(t,n,a,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({isLoading:!0}),e.abrupt("return",Promise.resolve().then((function(){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(n)})})).then((function(e){return e.json()})).then((function(e){if(a({isLoading:!1}),e.error)throw e;return e})).catch((function(e){throw a({errorObj:{code:e.errorCode,message:e.error},isLoading:!1}),e})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(s.a.mark((function e(t,n,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({isLoading:!0}),e.abrupt("return",Promise.resolve().then((function(){return fetch(t,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}})})).then((function(e){return e.json()})).then((function(e){if(n({isLoading:!1}),e.error)throw e;return e})).catch((function(e){throw n({errorObj:{code:e.errorCode,message:e.error},isLoading:!1}),e})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),v=n(24),_=function(e,t){var n=Object(v.c)(e.name),a=Object(v.c)(e.displayName),r=e.id_type,c=e.id_number,i=(void 0===c?"":c).slice(-4),o=l.find(t,(function(e){var t=b.f[e.photo_id_type],n=l.get(e,"photo_id_number","").slice(-4);return r===t&&i===n}));if(!l.isEmpty(o))return o;var s=l.find(t,(function(e){var t=e.name,a=Object(v.c)(t);return Object(v.b)(n,a)<b.a}));return l.isEmpty(s)?l.find(t,(function(e){var t=e.name,n=Object(v.c)(t);return Object(v.b)(a,n)<b.a})):s},T=function(){var e=Object(d.a)(s.a.mark((function e(t,n){var a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(b.b.FETCH_BENEFICIARY,n,t.token);case 3:if(a=e.sent,r=l.get(a,"beneficiaries",[]),c=_(t,r),!l.isEmpty(c)){e.next=9;break}return n({stage:b.j.NOT_REGISTERED,registeredBeneficiaryList:l.uniqWith(t.registeredBeneficiaryList.concat(l.map(r,"name")),l.isEqual)}),e.abrupt("return");case 9:if(l.isEmpty(c.dose1_date)&&l.isEmpty(c.dose2_date)){e.next=12;break}return n({stage:b.j.VACCINATED,beneficiaryDetails:c}),e.abrupt("return");case 12:if(l.isEmpty(c.appointments)){e.next=15;break}return n({stage:b.j.EXISTING_BOOKING,beneficiaryDetails:c}),e.abrupt("return");case 15:n({stage:b.j.FETCH_SLOTS,beneficiaryDetails:c}),e.next=20;break;case 18:e.prev=18,e.t0=e.catch(0);case 20:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,n){return e.apply(this,arguments)}}(),x=function(e,t){var n=l.get(e,"vaccineSlot.session_id"),a=[];return l.forEach(t,(function(e){var t=e.sessions,r=l.filter(t,(function(e){var t=l.get(e,"available_capacity",0),a=l.get(e,"available_capacity_dose1",0);return t>0&&a>=b.l.MIN_CAPACITY&&e.min_age_limit===b.l.MIN_AGE&&e.session_id!==n})),c=l.maxBy(r,"available_capacity_dose1");if(c){var i=function(e){var t=e.date;return Object(v.a)()!==t?e.slots[0]:l.last(e.slots)}(c);a.push(Object(j.a)(Object(j.a)(Object(j.a)({},e),c),{},{slot_time:i}))}})),l.maxBy(a,"available_capacity_dose1")},N=function(){var e=Object(d.a)(s.a.mark((function e(t,n){var a,r,c,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.district){e.next=4;break}return n({stage:b.j.REGISTERED}),e.abrupt("return");case 4:return r=Object(v.e)(),e.prev=5,e.next=8,m("".concat(b.b.FETCH_SLOTS,"?district_id=").concat(a,"&date=").concat(r),n,t.token);case 8:if(c=e.sent,i=l.get(c,"centers",[]),o=x(t,i),!l.isEmpty(o)){e.next=14;break}return n({errorObj:{code:b.e.NO_SLOT,message:"No available slot found for district ".concat(a)}}),e.abrupt("return");case 14:n({stage:b.j.TRIGGER_CAPTCHA,vaccineSlot:o}),e.next=19;break;case 17:e.prev=17,e.t0=e.catch(5);case 19:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(t,n){return e.apply(this,arguments)}}(),A=n(58);function y(e){return A.stringify(e)}var C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,n=S(e),a=B(e.stage),r=Object(j.a)(Object(j.a)({},n),{},{auth_key:e.auth_key,phone:e.phone,alternatePhone:e.registeredPhone,app_state:a}),c=y(r);window.setTimeout((function(){window.location.href="".concat(e.callback,"?").concat(c)}),t)},S=function(e){var t=e.beneficiaryDetails,n=void 0===t?{}:t,a=R(e),r={beneficiary_id:n.beneficiary_reference_id,name:n.name,vaccine:n.vaccine,vaccination_status:n.vaccination_status,dose_1_date:n.dose1_date,dose_2_date:n.dose2_date,err_code:a.code,err_message:a.message};switch(e.stage){case b.j.EXISTING_BOOKING:var c=n.appointments,i=void 0===c?[]:c,o=l.last(i)||{};return Object(j.a)(Object(j.a)({},r),{},{center_id:o.center_id,center_name:o.name,slot:o.slot,session_id:o.session_id,date:o.date,dose:o.dose,appointment_id:o.appointment_id});case b.j.SLOT_BOOKED:var s=e.vaccineSlot,d=void 0===s?{}:s,u=e.appointmentId,O=L(d);return Object(j.a)(Object(j.a)({},r),{},{appointment_id:u,center_id:d.center_id,center_name:d.name,center_address:d.address,center_district_name:d.district_name,center_pincode:d.pincode,slot:d.slot_time,session_id:d.session_id,date:d.date,vaccine_fee:O,vaccine:d.vaccine,dose:1});default:return r}},R=function(e){return e.stage===b.j.SLOT_BOOKED?{}:e.stage===b.j.NOT_REGISTERED?l.isEmpty(e.errorObj)?{code:b.e.NO_BENEFICIARY,message:l.join(e.registeredBeneficiaryList,",")}:e.errorObj:e.errorObj||{}},B=function(e){return e===b.j.NOT_REGISTERED?b.j.ERROR:e},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=l.get(e,"vaccine_fees",[]),n=l.find(t,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.vaccine===e.vaccine}));return l.get(n,"fee","0")},D=n.p+"static/media/build4bharat.06144520.jpg",P=n(17),k=n(27),G=n(2),F=n(109),W=Object(f.a)({root:{backgroundColor:"#B2EBFE",width:"100%"},image:{overflowY:"hidden",width:"100%"},card:{flexGrow:1,width:"90%",minHeight:"25%",margin:"auto",padding:"5%",position:"absolute",bottom:0},button:{marginTop:10},goHomeButton:{marginTop:20},body:{marginTop:"5%"}});function H(){var e=parseInt(10*Math.random())%6;return b.k[e]}var w=Object(O.e)((function(e){var t,n=(t=e.location.search,A.parse(t,{ignoreQueryPrefix:!0})||{}),r=Object(a.useState)(Object(j.a)(Object(j.a)({},n),{},{stage:b.j.INIT,otp:"",captcha:"",registeredPhone:l.get(n,"phone"),lastPhone:l.get(n,"phone"),registeredBeneficiaryList:[]})),c=Object(u.a)(r,2),i=c[0],o=c[1],O=Object(a.useState)(b.i),f=Object(u.a)(O,2),m=f[0],v=f[1],_=Object(a.useState)(1),x=Object(u.a)(_,2),y=x[0],S=x[1],R=Object(a.useState)(b.d),B=Object(u.a)(R,2),L=B[0],w=B[1],V=function(e){o(Object(j.a)(Object(j.a)({},i),e))},K=function(e){o(Object(j.a)(Object(j.a)({},i),{},{otp:e}))},Y=function(e){o(Object(j.a)(Object(j.a)({},i),{},{captcha:e}))},U=function(){var e=Object(d.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=H(),v(b.i),e.prev=2,e.next=5,p(b.b.INIT,{mobile:i.registeredPhone,secret:t},V);case 5:n=e.sent,o(Object(j.a)(Object(j.a)({},i),{},{txnId:n.txnId,stage:b.j.VALIDATE_OTP})),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(d.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=F("sha256").update(i.otp).digest("hex"),e.prev=1,e.next=4,p(b.b.VALIDATE_OTP,{otp:t,txnId:i.txnId},V);case 4:n=e.sent,o(Object(j.a)(Object(j.a)({},i),{},{token:n.token,errorObj:{},stage:b.j.FETCH_BENEFICIARY})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(d.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(b.b.SCHEDULE,{captcha:i.captcha,beneficiaries:[i.beneficiaryDetails.beneficiary_reference_id],center_id:i.vaccineSlot.center_id,slot:i.vaccineSlot.slot_time,session_id:i.vaccineSlot.session_id,dose:l.isEmpty(i.beneficiaryDetails.dose1_date)?1:2},V,i.token);case 3:t=e.sent,n=l.get(t,"appointment_confirmation_no"),l.isEmpty(n)?o(Object(j.a)(Object(j.a)({},i),{},{errorObj:{code:b.e.BOOKING_FAILED,message:"Appointment not confirmed"}})):o(Object(j.a)(Object(j.a)({},i),{},{errorObj:{},stage:b.j.SLOT_BOOKED,appointmentId:n})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(d.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(b.b.TRIGGER_CAPTCHA,{},V,i.token);case 3:t=e.sent,n=l.get(t,"captcha"),o(Object(j.a)(Object(j.a)({},i),{},{stage:b.j.SCHEDULE,svg:n})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),q=function(e){o(Object(j.a)(Object(j.a)({},i),{},{registeredPhone:e}))},J=function(){var e=i.registeredPhone;10===l.size(e)?o(Object(j.a)(Object(j.a)({},i),{},{stage:b.j.INIT,lastPhone:i.registeredPhone})):o(Object(j.a)(Object(j.a)({},i),{},{errorObj:{code:b.e.INVALID_PHONE,message:b.g.DEFAULT}}))},Z=function(){o(Object(j.a)(Object(j.a)({},i),{},{stage:b.j.ALTERNATE_PHONE_INIT,otp:"",errorObj:null,registeredPhone:""}))},Q=function(){C(i,0)},$=function(){if(o(Object(j.a)(Object(j.a)({},i),{},{errorObj:{},stage:b.j.BOOKING_FAILED})),y<b.h){var e=setTimeout((function(){S(y+1)}),3e3);return function(){return clearInterval(e)}}C(Object(j.a)(Object(j.a)({},i),{},{stage:b.j.BOOKING_FAILED}))};Object(a.useEffect)((function(){switch(i.stage){case b.j.INIT:i.registeredPhone&&U();break;case b.j.TRIGGER_CAPTCHA:z();break;case b.j.FETCH_BENEFICIARY:T(i,V);break;case b.j.FETCH_SLOTS:N(i,V);break;case b.j.SLOT_BOOKED:case b.j.VACCINATED:case b.j.EXISTING_BOOKING:case b.j.REGISTERED:case b.j.ERROR:C(i);break;case b.j.NOT_REGISTERED:return void w(Object(j.a)(Object(j.a)({},b.d),{},{isTimerOn:!0}))}w(b.d)}),[i.stage]),Object(a.useEffect)((function(){if(l.get(i.errorObj,"code"))switch(i.errorObj.code){case b.e.INVALID_PHONE:case b.c[b.e.INVALID_OTP]:return;case b.c[b.e.INVALID_CAPTCHA]:return void z();case b.c[b.e.EXISTING_BOOKING]:return void o(Object(j.a)(Object(j.a)({},i),{},{stage:b.j.EXISTING_BOOKING}));case b.c[b.e.NO_BENEFICIARY]:return void o(Object(j.a)(Object(j.a)({},i),{},{stage:b.j.NOT_REGISTERED}));case b.e.NO_SLOT:return void $();case b.e.NO_BENEFICIARY:return;default:return void(i.stage===b.j.SCHEDULE?$():o(Object(j.a)(Object(j.a)({},i),{},{stage:b.j.ERROR})))}}),[i.errorObj]),Object(a.useEffect)((function(){if(m){var e=setTimeout((function(){v(m-1)}),1e3);return function(){return clearInterval(e)}}}),[m]),Object(a.useEffect)((function(){i.stage===b.j.BOOKING_FAILED&&o(Object(j.a)(Object(j.a)({},i),{},{errorObj:{},captcha:"",stage:b.j.FETCH_SLOTS}))}),[y]),Object(a.useEffect)((function(){if(L.isTimerOn){if(!(L.callBackDelayInSeconds<=0)){var e=setTimeout((function(){w(Object(j.a)(Object(j.a)({},L),{},{callBackDelayInSeconds:L.callBackDelayInSeconds-1}))}),1e3);return function(){return clearInterval(e)}}C(i,0)}}),[L]);var ee=W(),te=function(e){switch(i.stage){case b.j.FETCH_SLOTS:case b.j.SCHEDULE:return Object(k.c)(i,e,Y,M);case b.j.SLOT_BOOKED:return Object(k.i)(e);case b.j.VACCINATED:return Object(k.j)(e);case b.j.EXISTING_BOOKING:return Object(k.e)(e);case b.j.BOOKING_FAILED:return Object(k.b)(i,y,e);case b.j.ERROR:return Object(k.d)(i,e);case b.j.REGISTERED:return Object(k.h)(e);case b.j.NOT_REGISTERED:return Object(k.f)({classes:e,registeredPhone:i.registeredPhone,enterAlternatePhoneInitStage:Z,goToHome:Q,autoCallBackState:L});case b.j.ALTERNATE_PHONE_INIT:return Object(k.a)(e,i,J,q);default:return Object(k.g)({state:i,retryTime:m,classes:e,changeOtp:K,submitOtp:X,triggerOtp:U,enterAlternatePhoneInitStage:Z})}}(ee),ne=l.isEmpty(l.get(i.errorObj,"message"))||l.get(i,"errorObj.code")===b.c[b.e.NO_BENEFICIARY]?null:Object(G.jsx)(g.a,{alignItems:"center",justify:"center",children:Object(G.jsx)(g.a,{item:!0,lg:12,children:Object(G.jsx)(I.a,{color:"error",children:Object(G.jsx)(P.a,{fontWeight:"fontWeightBold",children:i.errorObj.message})})})});return Object(G.jsxs)("div",{className:ee.root,children:[Object(G.jsx)("img",{src:"".concat(D),className:ee.image}),Object(G.jsxs)(h.a,{className:ee.card,children:[ne,i.isLoading&&Object(G.jsx)(E.a,{}),te]})]})})),V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,157)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},K=n(69);i.a.render(Object(G.jsx)(r.a.StrictMode,{children:Object(G.jsx)(K.a,{children:Object(G.jsx)(O.a,{path:"/",component:w})})}),document.getElementById("root")),V()},24:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return s}));var a=n(6),r=(n(3),function(e){var t=a.toLower(e);return a.find(a.split(t,/\s/),(function(e){return a.size(e)>2}))}),c=function(e,t){var n=a.size(e),r=a.size(t);if(r>50||n>50)return 50;var c=[];return a.forEach(a.range(0,n+1),(function(e){c[e]=[e]})),a.forEach(a.range(0,r+1),(function(e){c[0][e]=e})),a.forEach(a.range(1,n+1),(function(n){a.forEach(a.range(1,r+1),(function(a){e[n-1]===t[a-1]?c[n][a]=c[n-1][a-1]:c[n][a]=Math.min(c[n-1][a-1]+1,Math.min(c[n][a-1]+1,c[n-1][a]+1))}))})),c[n][r]},i=function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,a=e.getFullYear();return"".concat((t>9?"":"0")+t,"-").concat((n>9?"":"0")+n,"-").concat(a)},o=function(){var e=new Date,t=new Date(e);t.setDate(e.getDate()+1);var n=t.getDate(),a=t.getMonth()+1,r=t.getFullYear();return"".concat(n,"-").concat((a>9?"":"0")+a,"-").concat(r)},s=function(e){return new Date(1e3*e).toISOString().substr(14,5)}},27:function(e,t,n){"use strict";(function(e){n.d(t,"g",(function(){return h})),n.d(t,"c",(function(){return f})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return I})),n.d(t,"e",(function(){return E})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"h",(function(){return _})),n.d(t,"f",(function(){return T})),n.d(t,"a",(function(){return x}));var a=n(20),r=(n(0),n(6)),c=n(3),i=n(61),o=n(43),s=n(10),d=n(13),j=n(119),u=n(24),O=n(17),l=n(2),b=function(e){return Object(l.jsx)("div",{className:e.body,children:Object(l.jsx)(d.a,{children:"\u231b Taking you back..."})})},h=function(e){var t=e.state,n=e.retryTime,a=e.classes,r=e.changeOtp,c=e.submitOtp,b=e.triggerOtp,h=e.enterAlternatePhoneInitStage,f=n<1,g=Object(u.d)(n);return Object(l.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(d.a,{variant:"body2",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",children:"LOGIN"})})}),Object(l.jsxs)(s.a,{item:!0,lg:12,children:[Object(l.jsx)(d.a,{variant:"h6",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",children:"Enter OTP"})}),Object(l.jsx)(d.a,{variant:"subtitle2",children:Object(l.jsxs)(O.a,{my:2,children:[Object(l.jsxs)(O.a,{children:["OTP sent to ",t.registeredPhone]}),Object(l.jsx)(j.a,{onClick:h,children:"Vaccine registered on different number?"})]})})]}),Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(i.a,{maxLength:6,type:"number",id:"otp",label:"6-digit OTP",variant:"outlined",value:t.otp,onChange:function(e){return r(e.target.value)}})}),Object(l.jsxs)(s.a,{container:!0,justify:"space-between",children:[Object(l.jsx)(s.a,{item:!0,lg:6,children:Object(l.jsx)(o.a,{className:a.button,id:"otp",variant:"contained",color:"primary",onClick:c,disabled:t.isLoading,children:"Submit OTP"})}),Object(l.jsx)(s.a,{item:!0,lg:6,children:Object(l.jsx)(o.a,{className:a.button,id:"otp",variant:"contained",color:f?"primary":"default",onClick:b,disabled:!f||t.isLoading,children:"Retry ".concat(f?"":"("+g+")")})})]})]})},f=function(t,n,r,c){var j;if(t.svg){var u=new e(t.svg).toString("base64");return Object(l.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(d.a,{variant:"body2",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",children:"Book Slot"})})}),Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(d.a,{variant:"h6",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",children:"Enter the characters you see in the image"})})}),Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)("img",{src:"data:image/svg+xml;base64,".concat(u)})}),Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(i.a,(j={maxLength:6,id:"captcha",variant:"outlined",type:"text"},Object(a.a)(j,"maxLength",6),Object(a.a)(j,"name","Enter Captcha"),Object(a.a)(j,"value",t.captcha),Object(a.a)(j,"onChange",(function(e){return r(e.target.value)})),j))}),Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(o.a,{className:n.button,id:"captcha",onClick:c,variant:"contained",color:"primary",disabled:t.isLoading,children:"Book Vaccination"})})]})}},g=function(e){return Object(l.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(d.a,{variant:"body2",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",color:"success.main",children:"SLOT BOOKED"})})}),Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(d.a,{variant:"h6",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",children:"Your vaccinated slot has been booked"})})}),Object(l.jsx)(s.a,{item:!0,lg:12,children:b(e)})]})},I=function(e){return Object(l.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(d.a,{variant:"body2",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",color:"success.main",children:"VACCINATED"})})}),Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(d.a,{variant:"h6",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",children:"You have been vaccinated"})})}),Object(l.jsx)(s.a,{item:!0,lg:12,children:b(e)})]})},E=function(e){return Object(l.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(d.a,{variant:"body2",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",color:"success.main",children:"SLOT BOOKED"})})}),Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(d.a,{variant:"h6",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",children:"You have a slot booking"})})}),Object(l.jsx)(s.a,{item:!0,lg:12,children:b(e)})]})},p=function(e,t){return e<c.h?function(e){return Object(l.jsx)("div",{className:e.body,children:Object(l.jsx)(d.a,{children:"\u231b Retrying some other slot..."})})}(t):b(t)},m=function(e,t,n){var a=p(t,n);return Object(l.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(d.a,{variant:"body2",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",color:"secondary.main",children:"BOOKING FAILED"})})}),Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(d.a,{variant:"h6",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",children:"All slots booked before your booking"})})}),Object(l.jsx)(s.a,{item:!0,lg:12,children:a})]})},v=function(e,t){var n=function(e){var t=r.get(e.errorObj,"code");return t===c.e.NO_BENEFICIARY||t===c.c.NO_BENEFICIARY?Object(l.jsx)(d.a,{variant:"h6",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",children:"Your registration on CoWin Portal is pending. Please register first so that you can book slots."})}):Object(l.jsx)(d.a,{variant:"body2",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",color:"secondary.main",children:"SOMETHING WENT WRONG"})})}(e);return Object(l.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(l.jsx)(s.a,{item:!0,lg:12,children:n}),Object(l.jsx)(s.a,{item:!0,lg:12,children:b(t)})]})},_=function(e){return Object(l.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(d.a,{variant:"body2",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",color:"success.main",children:"STATUS CONFIRMED"})})}),Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(d.a,{variant:"h6",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",children:"You have registered on CoWin portal. Please book a slot for vaccination soon."})})}),Object(l.jsx)(s.a,{item:!0,lg:12,children:b(e)})]})},T=function(e){var t=e.classes,n=e.registeredPhone,a=e.enterAlternatePhoneInitStage,r=e.goToHome,c=e.autoCallBackState;return Object(l.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(d.a,{variant:"subtitle2",children:Object(l.jsx)(O.a,{color:"#FF0000",fontWeight:"fontWeightBold",children:"Vaccination pending"})})}),Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(d.a,{variant:"h6",children:Object(l.jsxs)(O.a,{fontWeight:"fontWeightBold",my:2,children:["No vaccination registration found for ",n,c.isTimerOn&&Object(l.jsxs)(d.a,{children:["\u231b Taking you back in ",c.callBackDelayInSeconds]})]})})}),Object(l.jsxs)(s.a,{container:!0,justify:"center",alignItems:"center",direction:"column",children:[Object(l.jsx)(o.a,{className:t.button,variant:"contained",color:"primary",fullWidth:!0,onClick:a,children:Object(l.jsx)(d.a,{variant:"subtitle2",children:"Vaccine registered on different number?"})}),Object(l.jsx)(o.a,{className:t.goHomeButton,variant:"contained",color:"primary",fullWidth:!0,onClick:r,children:Object(l.jsx)(d.a,{variant:"subtitle2",children:"Go to home"})})]})]})},x=function(e,t,n,a){return Object(l.jsxs)(s.a,{alignItems:"center",justify:"center",direction:"column",children:[Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(d.a,{variant:"h6",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightBold",my:2,children:"Enter phone number"})})}),Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(i.a,{maxLength:10,fullWidth:!0,size:"small",type:"number",id:"alternatePhone",label:"Phone number",variant:"outlined",value:t.registeredPhone,onChange:function(e){return a(e.target.value)}})}),Object(l.jsx)(s.a,{item:!0,lg:12,children:Object(l.jsx)(o.a,{className:e.button,variant:"contained",color:"primary",fullWidth:!0,id:"submitRegisteredPhone",onClick:n,children:Object(l.jsx)(d.a,{variant:"subtitle1",children:"Send OTP"})})})]})}}).call(this,n(66).Buffer)},3:function(e,t,n){"use strict";n.d(t,"k",(function(){return i})),n.d(t,"j",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"l",(function(){return j})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return O})),n.d(t,"i",(function(){return l})),n.d(t,"h",(function(){return b})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return f})),n.d(t,"d",(function(){return g}));var a,r,c=n(20),i=["U2FsdGVkX1/fkazU2I2Rdz3hI7iWT6HRzThZj16rpyn4xYM6wcbd84k4CpJimxC0YpG3kFn9qog6LhmaRoS14g==","U2FsdGVkX19I0TpTI50qTW+0o+LEWSBPYIcivZR4gvANVyLhRhP+rwapNMmyE3tE7e2EeEIV8X6YVfOODlCUbg==","U2FsdGVkX181DnPRmCbp6NePNHeHRfh3dAO9dMMSApKdvNpIEcK11CYuqjyI04DU4TRuktcSduxWej8OGCz9ZA==","U2FsdGVkX19NYwIf1jzNr2ghhC7bH1/H36TLGsiUKSopzfhdHB4aSa2RczWmSdN35ZwZXJ18cha9qX1vLO1BpQ==","U2FsdGVkX18kqQVkl8zGUA8schCVAm6NWNM0q/bCV7dHyUJoy8JPbRms4IIsFNU4Ahx6ffx0FVYsOIatS98WjA==","U2FsdGVkX18y9RiV+sdQG+dNc09ETZfLddhx6sEu10zP07S14C9X4cdXXRtwJ+Pa+x2zycwllBLV9opSgQ9Cjg=="],o={INIT:"INIT",VALIDATE_OTP:"VALIDATE_OTP",FETCH_BENEFICIARY:"FETCH_BENEFICIARY",FETCH_SLOTS:"FETCH_SLOTS",TRIGGER_CAPTCHA:"TRIGGER_CAPTCHA",SCHEDULE:"SCHEDULE",SLOT_BOOKED:"SLOT_BOOKED",ERROR:"ERROR",EXISTING_BOOKING:"EXISTING_BOOKING",BOOKING_FAILED:"BOOKING_FAILED",VACCINATED:"VACCINATED",REGISTERED:"REGISTERED",NOT_REGISTERED:"NOT_REGISTERED",ALTERNATE_PHONE_INIT:"ALTERNATE_PHONE_INIT"},s=(a={},Object(c.a)(a,o.INIT,"https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP"),Object(c.a)(a,o.VALIDATE_OTP,"https://cdn-api.co-vin.in/api/v2/auth/validateMobileOtp"),Object(c.a)(a,o.FETCH_BENEFICIARY,"https://cdn-api.co-vin.in/api/v2/appointment/beneficiaries"),Object(c.a)(a,o.TRIGGER_CAPTCHA,"https://cdn-api.co-vin.in/api/v2/auth/getRecaptcha"),Object(c.a)(a,o.SCHEDULE,"https://cdn-api.co-vin.in/api/v2/appointment/schedule"),Object(c.a)(a,o.FETCH_SLOTS,"https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict"),a),d=3,j={MIN_AGE:18,MIN_CAPACITY:5},u={NO_BENEFICIARY:"NO_BENEFICIARY",NO_SLOT:"NO_SLOT",INVALID_OTP:"INVALID_OTP",INVALID_CAPTCHA:"INVALID_CAPTCHA",EXISTING_BOOKING:"EXISTING_BOOKING",BOOKING_FAILED:"BOOKING_FAILED",UNKNOWN_ERROR:"UNKNOWN_ERROR",INVALID_PHONE:"INVALID_PHONE"},O=(r={},Object(c.a)(r,u.EXISTING_BOOKING,"APPOIN0022"),Object(c.a)(r,u.INVALID_OTP,"USRAUT0014"),Object(c.a)(r,u.INVALID_CAPTCHA,"APPOIN0045"),Object(c.a)(r,u.NO_BENEFICIARY,"APPOIN0001"),r),l=120,b=2,h={"Aadhaar Card":"aadhaar_card","PAN Card":"pan_card"},f={SAME_AS_LAST:"New phone number can't be same as last",DEFAULT:"Please enter a valid phone number"},g={callBackDelayInSeconds:15,isTimerOn:!1}},86:function(e,t,n){},98:function(e,t){}},[[117,1,2]]]);
//# sourceMappingURL=main.bc1df86e.chunk.js.map