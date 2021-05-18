(this.webpackJsonpvaccineforbharat=this.webpackJsonpvaccineforbharat||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),i=n.n(c),o=(n(85),n(17)),s=n.n(o),u=n(23),d=n(9),O=n(49),h=n(13),j=n(8),b=n(4),l=n(150),f=n(149),g=n(10),p=n(19),I=n(151),E=function(){var e=Object(u.a)(s.a.mark((function e(t,n,a,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({isLoading:!0}),e.abrupt("return",Promise.resolve().then((function(){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(n)})})).then((function(e){return e.json()})).then((function(e){if(a({isLoading:!1}),e.error)throw e;return e})).catch((function(e){throw a({errorObj:{code:e.errorCode,message:e.error},isLoading:!1}),e})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(s.a.mark((function e(t,n,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({isLoading:!0}),e.abrupt("return",Promise.resolve().then((function(){return fetch(t,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}})})).then((function(e){return e.json()})).then((function(e){if(n({isLoading:!1}),e.error)throw e;return e})).catch((function(e){throw n({errorObj:{code:e.errorCode,message:e.error},isLoading:!1}),e})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),v=n(31),_=function(e,t){var n=Object(v.c)(e.name),a=e.id_type,r=e.id_number,c=(void 0===r?"":r).slice(-4),i=j.find(t,(function(e){var t=b.e[e.photo_id_type],n=j.get(e,"photo_id_number","").slice(-4);return a===t&&c===n}));return j.isEmpty(i)?j.find(t,(function(e){var t=e.name,a=Object(v.c)(t);return Object(v.b)(n,a)<b.a})):i},x=function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(b.b.FETCH_BENEFICIARY,n,t.token);case 3:if(a=e.sent,r=j.get(a,"beneficiaries",[]),c=_(t,r),!j.isEmpty(c)){e.next=9;break}return n({errorObj:{code:b.d.NO_BENEFICIARY,message:"No beneficiary with name match"}}),e.abrupt("return");case 9:if(j.isEmpty(c.dose1_date)){e.next=12;break}return n({stage:b.h.VACCINATED,beneficiaryDetails:c}),e.abrupt("return");case 12:if(j.isEmpty(c.appointments)){e.next=15;break}return n({stage:b.h.EXISTING_BOOKING,beneficiaryDetails:c}),e.abrupt("return");case 15:n({stage:b.h.FETCH_SLOTS,beneficiaryDetails:c}),e.next=20;break;case 18:e.prev=18,e.t0=e.catch(0);case 20:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,n){return e.apply(this,arguments)}}(),T=function(e){var t=void 0;return j.forEach(e,(function(e){var n=e.sessions,a=j.find(n,(function(e){var t=j.get(e,"available_capacity",0),n=j.get(e,"available_capacity_dose1",0);return t>0&&n>=b.k.MIN_CAPACITY&&e.min_age_limit===b.k.MIN_AGE}));if(a){var r=function(e){var t=e.date;return Object(v.a)()!==t?e.slots[0]:j.last(e.slots)}(a);return t=Object(d.a)(Object(d.a)(Object(d.a)({},e),a),{},{slot_time:r}),!1}})),t},N=function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a,r,c,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.district){e.next=4;break}return n({stage:b.h.REGISTERED}),e.abrupt("return");case 4:return r=Object(v.e)(),e.prev=5,e.next=8,m("".concat(b.b.FETCH_SLOTS,"?district_id=").concat(a,"&date=").concat(r),n,t.token);case 8:if(c=e.sent,i=j.get(c,"centers",[]),o=T(i),!j.isEmpty(o)){e.next=14;break}return n({errorObj:{code:b.d.NO_SLOT,message:"No available slot found for district ".concat(a)}}),e.abrupt("return");case 14:n({stage:b.h.TRIGGER_CAPTCHA,vaccineSlot:o}),e.next=19;break;case 17:e.prev=17,e.t0=e.catch(5);case 19:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(t,n){return e.apply(this,arguments)}}(),C=n(56);var A=function(e){var t,n=S(e),a=Object(d.a)(Object(d.a)({},n),{},{auth_key:e.auth_key,phone:e.phone,app_state:e.stage}),r=(t=a,C.stringify(t));window.setTimeout((function(){window.location.href="".concat(e.callback,"?").concat(r)}),3e3)},S=function(e){var t=e.beneficiaryDetails,n=void 0===t?{}:t,a=y(e),r={beneficiary_id:n.beneficiary_reference_id,name:n.name,vaccine:n.vaccine,vaccination_status:n.vaccination_status,dose_1_date:n.dose1_date,dose_2_date:n.dose2_date,err_code:a.code,err_message:a.message};switch(e.stage){case b.h.EXISTING_BOOKING:var c=n.appointments,i=void 0===c?[]:c,o=j.last(i)||{};return Object(d.a)(Object(d.a)({},r),{},{center_id:o.center_id,center_name:o.name,slot:o.slot,session_id:o.session_id,date:o.date,dose:o.dose,appointment_id:o.appointment_id});case b.h.SLOT_BOOKED:var s=e.vaccineSlot,u=void 0===s?{}:s,O=e.appointmentId;return Object(d.a)(Object(d.a)({},r),{},{appointment_id:O,center_id:u.center_id,center_name:u.name,center_address:u.address,center_district_name:u.district_name,center_pincode:u.pincode,slot:u.slot_time,session_id:u.session_id,date:u.date,dose:1});default:return r}},y=function(e){return e.stage===b.h.SLOT_BOOKED?{}:e.errorObj||{}},R=n.p+"static/media/build4bharat.06144520.jpg",L=n(20),B=n(28),D=n(2),G=n(108),k=Object(f.a)({root:{backgroundColor:"#B2EBFE",width:"100%"},image:{overflowY:"hidden",width:"100%"},card:{flexGrow:1,width:"90%",minHeight:"25%",margin:"auto",padding:"5%",position:"absolute",bottom:0},button:{marginTop:10},body:{marginTop:"5%"}});function F(){var e=parseInt(10*Math.random())%6;return b.i[e]}var w=Object(h.e)((function(e){var t,n=(t=e.location.search,C.parse(t,{ignoreQueryPrefix:!0})||{}),r=Object(a.useState)(Object(d.a)(Object(d.a)({},n),{},{stage:b.h.INIT,otp:"",captcha:""})),c=Object(O.a)(r,2),i=c[0],o=c[1],h=Object(a.useState)(b.g),f=Object(O.a)(h,2),m=f[0],v=f[1],_=Object(a.useState)(1),T=Object(O.a)(_,2),S=T[0],y=T[1],w=function(e){o(Object(d.a)(Object(d.a)({},i),e))},P=function(e){o(Object(d.a)(Object(d.a)({},i),{},{otp:e}))},W=function(e){o(Object(d.a)(Object(d.a)({},i),{},{captcha:e}))},H=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=F(),v(b.g),e.prev=2,e.next=5,E(b.b.INIT,{mobile:i.phone,secret:t},w);case 5:n=e.sent,o(Object(d.a)(Object(d.a)({},i),{},{txnId:n.txnId,stage:b.h.VALIDATE_OTP})),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=G("sha256").update(i.otp).digest("hex"),e.prev=1,e.next=4,E(b.b.VALIDATE_OTP,{otp:t,txnId:i.txnId},w);case 4:n=e.sent,o(Object(d.a)(Object(d.a)({},i),{},{token:n.token,errorObj:{},stage:b.h.FETCH_BENEFICIARY})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E(b.b.SCHEDULE,{captcha:i.captcha,beneficiaries:[i.beneficiaryDetails.beneficiary_reference_id],center_id:i.vaccineSlot.center_id,slot:i.vaccineSlot.slot_time,session_id:i.vaccineSlot.session_id,dose:j.isEmpty(i.beneficiaryDetails.dose1_date)?1:2},w,i.token);case 3:t=e.sent,n=j.get(t,"appointment_confirmation_no"),o(Object(d.a)(Object(d.a)({},i),{},{errorObj:{},stage:b.h.SLOT_BOOKED,appointmentId:n})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E(b.b.TRIGGER_CAPTCHA,{},w,i.token);case 3:t=e.sent,n=j.get(t,"captcha"),o(Object(d.a)(Object(d.a)({},i),{},{stage:b.h.SCHEDULE,svg:n})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),U=function(){if(o(Object(d.a)(Object(d.a)({},i),{},{errorObj:{},stage:b.h.BOOKING_FAILED})),S<b.f){var e=setTimeout((function(){console.log("Updating now"),y(S+1)}),3e3);return function(){return clearInterval(e)}}A(Object(d.a)(Object(d.a)({},i),{},{stage:b.h.BOOKING_FAILED}))};Object(a.useEffect)((function(){i.phone&&i.stage===b.h.INIT&&H()}),[]),Object(a.useEffect)((function(){switch(i.stage){case b.h.TRIGGER_CAPTCHA:Y();break;case b.h.FETCH_BENEFICIARY:x(i,w);break;case b.h.FETCH_SLOTS:N(i,w);break;case b.h.SLOT_BOOKED:case b.h.VACCINATED:case b.h.EXISTING_BOOKING:case b.h.REGISTERED:case b.h.ERROR:A(i)}}),[i.stage]),Object(a.useEffect)((function(){if(j.get(i.errorObj,"code"))switch(i.errorObj.code){case b.c[b.d.INVALID_OTP]:return;case b.c[b.d.INVALID_CAPTCHA]:return void Y();case b.c[b.d.EXISTING_BOOKING]:return void o(Object(d.a)(Object(d.a)({},i),{},{stage:b.h.EXISTING_BOOKING}));case b.d.NO_SLOT:return void U();default:return void(i.stage===b.h.SCHEDULE?U():o(Object(d.a)(Object(d.a)({},i),{},{stage:b.h.ERROR})))}}),[i.errorObj]),Object(a.useEffect)((function(){if(m){var e=setTimeout((function(){v(m-1)}),1e3);return function(){return clearInterval(e)}}}),[m]),Object(a.useEffect)((function(){i.stage===b.h.BOOKING_FAILED&&o(Object(d.a)(Object(d.a)({},i),{},{vaccineSlot:{},errorObj:{},captcha:"",stage:b.h.FETCH_SLOTS}))}),[S]);var X=k(),M=function(e){switch(i.stage){case b.h.FETCH_SLOTS:case b.h.SCHEDULE:return Object(B.b)(i,e,W,K);case b.h.SLOT_BOOKED:return Object(B.g)(e);case b.h.VACCINATED:return Object(B.h)(e);case b.h.EXISTING_BOOKING:return Object(B.d)(e);case b.h.BOOKING_FAILED:return Object(B.a)(i,S,e);case b.h.ERROR:return Object(B.c)(i,e);case b.h.REGISTERED:return Object(B.f)(e);default:return Object(B.e)({state:i,retryTime:m,classes:e,changeOtp:P,submitOtp:V,triggerOtp:H})}}(X),z=j.isEmpty(j.get(i.errorObj,"message"))?null:Object(D.jsx)(g.a,{alignItems:"center",justify:"center",children:Object(D.jsx)(g.a,{item:!0,lg:12,children:Object(D.jsx)(p.a,{color:"error",children:Object(D.jsx)(L.a,{fontWeight:"fontWeightBold",children:i.errorObj.message})})})});return Object(D.jsxs)("div",{className:X.root,children:[Object(D.jsx)("img",{src:"".concat(R),className:X.image}),Object(D.jsxs)(l.a,{className:X.card,children:[z,i.isLoading&&Object(D.jsx)(I.a,{}),M]})]})})),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},W=n(66);i.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(W.a,{children:Object(D.jsx)(h.a,{path:"/",component:w})})}),document.getElementById("root")),P()},28:function(e,t,n){"use strict";(function(e){n.d(t,"e",(function(){return b})),n.d(t,"b",(function(){return l})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return g})),n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return E})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return v}));var a=n(18),r=(n(0),n(8)),c=n(4),i=n(68),o=n(59),s=n(10),u=n(19),d=n(31),O=n(20),h=n(2),j=function(e){return Object(h.jsx)("div",{className:e.body,children:Object(h.jsx)(u.a,{children:"\u231b Taking you back..."})})},b=function(e){var t=e.state,n=e.retryTime,a=e.classes,r=e.changeOtp,c=e.submitOtp,j=e.triggerOtp,b=n<1,l=Object(d.d)(n);return Object(h.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(u.a,{variant:"body2",children:Object(h.jsx)(O.a,{fontWeight:"fontWeightBold",children:"LOGIN"})})}),Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(u.a,{variant:"h6",children:Object(h.jsx)(O.a,{fontWeight:"fontWeightBold",children:"Enter OTP"})})}),Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(i.a,{maxLength:6,type:"number",id:"otp",label:"6-digit OTP",variant:"outlined",value:t.otp,onChange:function(e){return r(e.target.value)}})}),Object(h.jsxs)(s.a,{container:!0,justify:"space-between",children:[Object(h.jsx)(s.a,{item:!0,lg:6,children:Object(h.jsx)(o.a,{className:a.button,id:"otp",variant:"contained",color:"primary",onClick:c,disabled:t.isLoading,children:"Submit OTP"})}),Object(h.jsx)(s.a,{item:!0,lg:6,children:Object(h.jsx)(o.a,{className:a.button,id:"otp",variant:"contained",color:b?"primary":"default",onClick:j,disabled:!b||t.isLoading,children:"Retry ".concat(b?"":"("+l+")")})})]})]})},l=function(t,n,r,c){var d;if(t.svg){var j=new e(t.svg).toString("base64");return Object(h.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(u.a,{variant:"body2",children:Object(h.jsx)(O.a,{fontWeight:"fontWeightBold",children:"Book Slot"})})}),Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(u.a,{variant:"h6",children:Object(h.jsx)(O.a,{fontWeight:"fontWeightBold",children:"Enter the characters you see in the image"})})}),Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)("img",{src:"data:image/svg+xml;base64,".concat(j)})}),Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(i.a,(d={maxLength:6,id:"captcha",variant:"outlined",type:"text"},Object(a.a)(d,"maxLength",6),Object(a.a)(d,"name","Enter Captcha"),Object(a.a)(d,"value",t.captcha),Object(a.a)(d,"onChange",(function(e){return r(e.target.value)})),d))}),Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(o.a,{className:n.button,id:"captcha",onClick:c,variant:"contained",color:"primary",disabled:t.isLoading,children:"Book Vaccination"})})]})}},f=function(e){return Object(h.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(u.a,{variant:"body2",children:Object(h.jsx)(O.a,{fontWeight:"fontWeightBold",color:"success.main",children:"SLOT BOOKED"})})}),Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(u.a,{variant:"h6",children:Object(h.jsx)(O.a,{fontWeight:"fontWeightBold",children:"Your vaccinated slot has been booked"})})}),Object(h.jsx)(s.a,{item:!0,lg:12,children:j(e)})]})},g=function(e){return Object(h.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(u.a,{variant:"body2",children:Object(h.jsx)(O.a,{fontWeight:"fontWeightBold",color:"success.main",children:"VACCINATED"})})}),Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(u.a,{variant:"h6",children:Object(h.jsx)(O.a,{fontWeight:"fontWeightBold",children:"You have been vaccinated"})})}),Object(h.jsx)(s.a,{item:!0,lg:12,children:j(e)})]})},p=function(e){return Object(h.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(u.a,{variant:"body2",children:Object(h.jsx)(O.a,{fontWeight:"fontWeightBold",color:"success.main",children:"SLOT BOOKED"})})}),Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(u.a,{variant:"h6",children:Object(h.jsx)(O.a,{fontWeight:"fontWeightBold",children:"You have a slot booking"})})}),Object(h.jsx)(s.a,{item:!0,lg:12,children:j(e)})]})},I=function(e,t){return e<c.f?function(e){return Object(h.jsx)("div",{className:e.body,children:Object(h.jsx)(u.a,{children:"\u231b Retrying some other slot..."})})}(t):j(t)},E=function(e,t,n){var a=I(t,n);return Object(h.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(u.a,{variant:"body2",children:Object(h.jsx)(O.a,{fontWeight:"fontWeightBold",color:"secondary.main",children:"BOOKING FAILED"})})}),Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(u.a,{variant:"h6",children:Object(h.jsx)(O.a,{fontWeight:"fontWeightBold",children:"All slots booked before your booking"})})}),Object(h.jsx)(s.a,{item:!0,lg:12,children:a})]})},m=function(e,t){var n=function(e){var t=r.get(e.errorObj,"code");return t===c.d.NO_BENEFICIARY||t===c.c.NO_BENEFICIARY?Object(h.jsx)(u.a,{variant:"h6",children:Object(h.jsx)(O.a,{fontWeight:"fontWeightBold",children:"Your registration on CoWin Portal is pending. Please register first so that you can book slots."})}):Object(h.jsx)(u.a,{variant:"body2",children:Object(h.jsx)(O.a,{fontWeight:"fontWeightBold",color:"secondary.main",children:"SOMETHING WENT WRONG"})})}(e);return Object(h.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(h.jsx)(s.a,{item:!0,lg:12,children:n}),Object(h.jsx)(s.a,{item:!0,lg:12,children:j(t)})]})},v=function(e){return Object(h.jsxs)(s.a,{alignItems:"center",justify:"center",children:[Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(u.a,{variant:"body2",children:Object(h.jsx)(O.a,{fontWeight:"fontWeightBold",color:"success.main",children:"STATUS CONFIRMED"})})}),Object(h.jsx)(s.a,{item:!0,lg:12,children:Object(h.jsx)(u.a,{variant:"h6",children:Object(h.jsx)(O.a,{fontWeight:"fontWeightBold",children:"You have registered on CoWin portal. Please book a slot for vaccination soon."})})}),Object(h.jsx)(s.a,{item:!0,lg:12,children:j(e)})]})}}).call(this,n(63).Buffer)},31:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return u}));var a=n(8),r=n(4),c=function(e){var t=a.toLower(e);return a.find(a.split(t,/\s/),(function(e){return a.size(e)>2}))},i=function(e,t){var n=a.size(e),r=a.size(t);if(r>50||n>50)return 50;var c=[];return a.forEach(a.range(0,n+1),(function(e){c[e]=[e]})),a.forEach(a.range(0,r+1),(function(e){c[0][e]=e})),a.forEach(a.range(1,n+1),(function(n){a.forEach(a.range(1,r+1),(function(a){e[n-1]===t[a-1]?c[n][a]=c[n-1][a-1]:c[n][a]=Math.min(c[n-1][a-1]+1,Math.min(c[n][a-1]+1,c[n-1][a]+1))}))})),c[n][r]},o=function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,a=e.getFullYear();return"".concat(t,"-").concat((n>9?"":"0")+n,"-").concat(a)},s=function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,a=e.getFullYear();return e.getHours()>r.j&&(t+=1),"".concat(t,"-").concat((n>9?"":"0")+n,"-").concat(a)},u=function(e){return new Date(1e3*e).toISOString().substr(14,5)}},4:function(e,t,n){"use strict";n.d(t,"i",(function(){return i})),n.d(t,"h",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"k",(function(){return d})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return h})),n.d(t,"g",(function(){return j})),n.d(t,"f",(function(){return b})),n.d(t,"e",(function(){return l})),n.d(t,"j",(function(){return f}));var a,r,c=n(18),i=["U2FsdGVkX1/fkazU2I2Rdz3hI7iWT6HRzThZj16rpyn4xYM6wcbd84k4CpJimxC0YpG3kFn9qog6LhmaRoS14g==","U2FsdGVkX19I0TpTI50qTW+0o+LEWSBPYIcivZR4gvANVyLhRhP+rwapNMmyE3tE7e2EeEIV8X6YVfOODlCUbg==","U2FsdGVkX181DnPRmCbp6NePNHeHRfh3dAO9dMMSApKdvNpIEcK11CYuqjyI04DU4TRuktcSduxWej8OGCz9ZA==","U2FsdGVkX19NYwIf1jzNr2ghhC7bH1/H36TLGsiUKSopzfhdHB4aSa2RczWmSdN35ZwZXJ18cha9qX1vLO1BpQ==","U2FsdGVkX18kqQVkl8zGUA8schCVAm6NWNM0q/bCV7dHyUJoy8JPbRms4IIsFNU4Ahx6ffx0FVYsOIatS98WjA==","U2FsdGVkX18y9RiV+sdQG+dNc09ETZfLddhx6sEu10zP07S14C9X4cdXXRtwJ+Pa+x2zycwllBLV9opSgQ9Cjg=="],o={INIT:"INIT",VALIDATE_OTP:"VALIDATE_OTP",FETCH_BENEFICIARY:"FETCH_BENEFICIARY",FETCH_SLOTS:"FETCH_SLOTS",TRIGGER_CAPTCHA:"TRIGGER_CAPTCHA",SCHEDULE:"SCHEDULE",SLOT_BOOKED:"SLOT_BOOKED",ERROR:"ERROR",EXISTING_BOOKING:"EXISTING_BOOKING",BOOKING_FAILED:"BOOKING_FAILED",VACCINATED:"VACCINATED",REGISTERED:"REGISTERED"},s=(a={},Object(c.a)(a,o.INIT,"https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP"),Object(c.a)(a,o.VALIDATE_OTP,"https://cdn-api.co-vin.in/api/v2/auth/validateMobileOtp"),Object(c.a)(a,o.FETCH_BENEFICIARY,"https://cdn-api.co-vin.in/api/v2/appointment/beneficiaries"),Object(c.a)(a,o.TRIGGER_CAPTCHA,"https://cdn-api.co-vin.in/api/v2/auth/getRecaptcha"),Object(c.a)(a,o.SCHEDULE,"https://cdn-api.co-vin.in/api/v2/appointment/schedule"),Object(c.a)(a,o.FETCH_SLOTS,"https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict"),a),u=3,d={MIN_AGE:18,MIN_CAPACITY:5},O={NO_BENEFICIARY:"NO_BENEFICIARY",NO_SLOT:"NO_SLOT",INVALID_OTP:"INVALID_OTP",INVALID_CAPTCHA:"INVALID_CAPTCHA",EXISTING_BOOKING:"EXISTING_BOOKING",UNKNOWN_ERROR:"UNKNOWN_ERROR"},h=(r={},Object(c.a)(r,O.EXISTING_BOOKING,"APPOIN0022"),Object(c.a)(r,O.INVALID_OTP,"USRAUT0014"),Object(c.a)(r,O.INVALID_CAPTCHA,"APPOIN0045"),Object(c.a)(r,O.NO_BENEFICIARY,"APPOIN0001"),r),j=120,b=2,l={"Aadhaar Card":"aadhaar_card","PAN Card":"pan_card"},f=15},85:function(e,t,n){},97:function(e,t){}},[[116,1,2]]]);
//# sourceMappingURL=main.0d5b4deb.chunk.js.map