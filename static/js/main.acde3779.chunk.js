(this.webpackJsonpvaccineforbharat=this.webpackJsonpvaccineforbharat||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var a,r,i=n(0),c=n.n(i),o=n(13),s=n.n(o),l=(n(81),n(15)),d=n.n(l),u=n(18),j=n(6),b=n(40),h=n(12),f=n(4),O=n(19),g=["U2FsdGVkX1/fkazU2I2Rdz3hI7iWT6HRzThZj16rpyn4xYM6wcbd84k4CpJimxC0YpG3kFn9qog6LhmaRoS14g==","U2FsdGVkX19I0TpTI50qTW+0o+LEWSBPYIcivZR4gvANVyLhRhP+rwapNMmyE3tE7e2EeEIV8X6YVfOODlCUbg==","U2FsdGVkX181DnPRmCbp6NePNHeHRfh3dAO9dMMSApKdvNpIEcK11CYuqjyI04DU4TRuktcSduxWej8OGCz9ZA==","U2FsdGVkX19NYwIf1jzNr2ghhC7bH1/H36TLGsiUKSopzfhdHB4aSa2RczWmSdN35ZwZXJ18cha9qX1vLO1BpQ==","U2FsdGVkX18kqQVkl8zGUA8schCVAm6NWNM0q/bCV7dHyUJoy8JPbRms4IIsFNU4Ahx6ffx0FVYsOIatS98WjA==","U2FsdGVkX18y9RiV+sdQG+dNc09ETZfLddhx6sEu10zP07S14C9X4cdXXRtwJ+Pa+x2zycwllBLV9opSgQ9Cjg=="],p="INIT",m="VALIDATE_OTP",v="FETCH_BENEFICIARY",x="FETCH_SLOTS",y="SCHEDULE",_="SLOT_BOOKED",I="ERROR",E="EXISTING_BOOKING",k="BOOKING_FAILED",C="VACCINATED",T="REGISTERED",S="NOT_REGISTERED",P="ALTERNATE_PHONE_INIT",B="CONFIRM_PHONE",N=(a={},Object(O.a)(a,p,"https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP"),Object(O.a)(a,m,"https://cdn-api.co-vin.in/api/v2/auth/validateMobileOtp"),Object(O.a)(a,v,"https://cdn-api.co-vin.in/api/v2/appointment/beneficiaries"),Object(O.a)(a,y,"https://cdn-api.co-vin.in/api/v2/appointment/schedule"),Object(O.a)(a,x,"https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict"),Object(O.a)(a,"RESCHEDULE","https://cdn-api.co-vin.in/api/v2/appointment/reschedule"),a),w=18,W=5,A="NO_BENEFICIARY",D="NO_SLOT",L="INVALID_OTP",R="EXISTING_BOOKING",F="BOOKING_FAILED",V="INVALID_PHONE",H=(r={},Object(O.a)(r,R,"APPOIN0022"),Object(O.a)(r,L,"USRAUT0014"),Object(O.a)(r,A,"APPOIN0001"),r),G={"Aadhaar Card":"aadhaar_card","PAN Card":"pan_card"},M="Free",Y="Please enter a valid phone number",U={callBackDelayInSeconds:15,isTimerOn:!1},z=n(150),X=n(149),K=n(146),J=n(113),Z=n(151),q=function(){var e=Object(u.a)(d.a.mark((function e(t,n,a,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({isLoading:!0}),e.abrupt("return",Promise.resolve().then((function(){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(n)})})).then((function(e){return 204===e.status?{}:e.json()})).then((function(e){if(a({isLoading:!1}),e.error)throw e;return e})).catch((function(e){throw a({errorObj:{code:e.errorCode,message:e.error},isLoading:!1}),e})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),Q=function(){var e=Object(u.a)(d.a.mark((function e(t,n,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({isLoading:!0}),e.abrupt("return",Promise.resolve().then((function(){return fetch(t,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}})})).then((function(e){return e.json()})).then((function(e){if(n({isLoading:!1}),e.error)throw e;return e})).catch((function(e){throw n({errorObj:{code:e.errorCode,message:e.error},isLoading:!1}),e})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),$=n(51),ee=n.n($),te=n(62),ne=function(e){var t=f.toLower(e);return f.find(f.split(t,/\s|\.|\,/),(function(e){return f.size(e)>2}))},ae=function(e,t){var n=f.size(e),a=f.size(t);if(a>50||n>50)return 50;var r=[];return f.forEach(f.range(0,n+1),(function(e){r[e]=[e]})),f.forEach(f.range(0,a+1),(function(e){r[0][e]=e})),f.forEach(f.range(1,n+1),(function(n){f.forEach(f.range(1,a+1),(function(a){e[n-1]===t[a-1]?r[n][a]=r[n-1][a-1]:r[n][a]=Math.min(r[n-1][a-1]+1,Math.min(r[n][a-1]+1,r[n-1][a]+1))}))})),r[n][a]},re=function(){var e=new Date,t=new Date(e);t.setDate(e.getDate()+1);var n=t.getDate(),a=t.getMonth()+1,r=t.getFullYear();return"".concat(n,"-").concat((a>9?"":"0")+a,"-").concat(r)},ie=function(e,t){var n=ne(e.name),a=ne(e.displayName),r=e.id_type,i=e.id_number,c=(void 0===i?"":i).slice(-4),o=f.find(t,{beneficiary_reference_id:e.beneficiaryId});if(!f.isEmpty(o))return o;var s=f.find(t,(function(e){var t=G[e.photo_id_type],n=f.get(e,"photo_id_number","").slice(-4);return r===t&&c===n}));if(!f.isEmpty(s))return s;var l=function(e,t){if(!f.isEmpty(e)){var n=f.map(e,(function(e){var t=e.name;return f.toLower(t)})),a=f.toLower(t),r=te.findBestMatch(a,n),i=r.bestMatch,c=void 0===i?{}:i,o=r.bestMatchIndex,s=c.rating;return(void 0===s?0:s)>.7?e[o]:void 0}}(t,e.name);if(!f.isEmpty(l))return l;var d=f.find(t,(function(e){var t=e.name,a=ne(t);return ae(n,a)<3}));return f.isEmpty(d)?f.find(t,(function(e){var t=e.name,n=ne(t);return ae(a,n)<3})):d},ce=function(e){return f.map(e,(function(e){return{beneficiary_id:e.beneficiary_reference_id,name:e.name,vaccine:e.vaccine,vaccination_status:e.vaccination_status,dose1_date:e.dose1_date,dose2_date:e.dose2_date}}))},oe=function(e,t){return!f.isEmpty(e)&&!f.isEmpty(t)&&ee.a.utc().diff(ee.a.utc(t,"DD-MM-YYYY"),"days")>=2},se=function(){var e=Object(u.a)(d.a.mark((function e(t,n){var a,r,i,c,o,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q(N.FETCH_BENEFICIARY,n,t.token);case 3:if(a=e.sent,r=f.get(a,"beneficiaries",[]),i=ie(t,r),!f.isEmpty(i)){e.next=9;break}return n({stage:S,registeredBeneficiaryList:ce(r)}),e.abrupt("return");case 9:if(f.isEmpty(i.dose1_date)&&f.isEmpty(i.dose2_date)){e.next=12;break}return n({stage:C,beneficiaryDetails:i}),e.abrupt("return");case 12:if(f.isEmpty(i.appointments)){e.next=21;break}if(c=f.maxBy(i.appointments,"date"),o=f.get(c,"appointment_id",""),s=f.get(c,"date",""),!oe(o,s)){e.next=19;break}return n({stage:x,beneficiaryDetails:i,appointmentId:o}),e.abrupt("return");case 19:return n({stage:E,beneficiaryDetails:i}),e.abrupt("return");case 21:n({stage:x,beneficiaryDetails:i}),e.next=26;break;case 24:e.prev=24,e.t0=e.catch(0);case 26:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(t,n){return e.apply(this,arguments)}}(),le=function(e){var t=e.date;return function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,a=e.getFullYear();return"".concat((t>9?"":"0")+t,"-").concat((n>9?"":"0")+n,"-").concat(a)}()!==t?e.slots[0]:f.last(e.slots)},de=function(e,t){var n=f.get(e,"vaccineSlot.session_id"),a=[];return f.forEach(t,(function(e){var t=e.sessions,r=f.filter(t,(function(e){var t=f.get(e,"available_capacity",0),a=f.get(e,"available_capacity_dose1",0);return t>0&&a>=W&&e.min_age_limit===w&&e.session_id!==n})),i=f.maxBy(r,"available_capacity_dose1");if(i){var c=le(i);a.push(Object(j.a)(Object(j.a)(Object(j.a)({},e),i),{},{slot_time:c}))}})),function(e){var t=f.filter(e,(function(e){return f.get(e,"fee_type")==M&&f.get(e,"available_capacity_dose1")>=30}));return f.isEmpty(t)?f.maxBy(e,"available_capacity_dose1"):f.maxBy(t,"available_capacity_dose1")}(a)},ue=function(){var e=Object(u.a)(d.a.mark((function e(t,n){var a,r,i,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.district){e.next=4;break}return n({stage:T}),e.abrupt("return");case 4:return r=re(),e.prev=5,e.next=8,Q("".concat(N.FETCH_SLOTS,"?district_id=").concat(a,"&date=").concat(r),n,t.token);case 8:if(i=e.sent,c=f.get(i,"centers",[]),o=de(t,c),!f.isEmpty(o)){e.next=14;break}return n({errorObj:{code:D,message:"No available slot found for district ".concat(a)}}),e.abrupt("return");case 14:n({stage:y,vaccineSlot:o}),e.next=19;break;case 17:e.prev=17,e.t0=e.catch(5);case 19:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(t,n){return e.apply(this,arguments)}}(),je=n(52);function be(e){return je.stringify(e)}var he,fe,Oe,ge=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,n=pe(e),a=ve(e.stage),r=Object(j.a)(Object(j.a)({},n),{},{auth_key:e.auth_key,phone:e.phone||e.registeredPhone,alternatePhone:e.registeredPhone,app_state:a}),i=be(r);window.setTimeout((function(){window.location.href="".concat(e.callback,"?").concat(i)}),t)},pe=function(e){var t=e.beneficiaryDetails,n=void 0===t?{}:t,a=me(e),r=ye(e),i={beneficiary_id:n.beneficiary_reference_id,name:n.name,vaccine:n.vaccine,vaccination_status:n.vaccination_status,dose_1_date:n.dose1_date,dose_2_date:n.dose2_date,err_code:a.code,err_message:a.message,meta_data:JSON.stringify(r)};switch(e.stage){case E:var c=n.appointments,o=void 0===c?[]:c,s=f.last(o)||{};return Object(j.a)(Object(j.a)({},i),{},{center_id:s.center_id,center_name:s.name,slot:s.slot,session_id:s.session_id,date:s.date,dose:s.dose,appointment_id:s.appointment_id});case _:var l=e.vaccineSlot,d=void 0===l?{}:l,u=e.appointmentId,b=xe(d);return Object(j.a)(Object(j.a)({},i),{},{appointment_id:u,center_id:d.center_id,center_name:d.name,center_address:d.address,center_district_name:d.district_name,center_pincode:d.pincode,slot:d.slot_time,session_id:d.session_id,date:d.date,vaccine_fee:b,vaccine:d.vaccine,dose:1});default:return i}},me=function(e){return e.stage===_?{}:e.stage===S?f.isEmpty(e.errorObj)?{code:A,message:f.join(f.map(e.registeredBeneficiaryList,"name"),",")}:e.errorObj:e.errorObj||{}},ve=function(e){return e===S?I:e},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=f.get(e,"vaccine_fees",[]),n=f.find(t,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.vaccine===e.vaccine}));return f.get(n,"fee","0")},ye=function(e){return e.stage===S?{available_beneficiaries:f.slice(e.registeredBeneficiaryList,0,5)}:{}},_e=n.p+"static/media/build4bharat.06144520.jpg",Ie=n(153);function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ke(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ce(e,t){var n=e.title,a=e.titleId,r=ke(e,["title","titleId"]);return i.createElement("svg",Ee({width:42,height:42,viewBox:"0 0 42 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},r),n?i.createElement("title",{id:a},n):null,he||(he=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 4C11.6177 4 4 11.6177 4 21C4 30.384 11.6177 38 21 38C30.3823 38 38 30.384 38 21C38 11.6177 30.3823 4 21 4Z",fill:"#EFFAFC"})),fe||(fe=i.createElement("path",{d:"M22.75 29.3333C22.75 28.4133 21.966 27.6667 21 27.6667C20.034 27.6667 19.25 28.4133 19.25 29.3333C19.25 30.2533 20.034 31 21 31C21.966 31 22.75 30.2533 22.75 29.3333Z",fill:"#0992AE"})),Oe||(Oe=i.createElement("path",{d:"M21 21C20.034 21 19.25 21.7467 19.25 22.6667V24.3333C19.25 25.2533 20.034 26 21 26C21.966 26 22.75 25.2533 22.75 24.3333V24.1233C25.767 23.3833 28 20.7717 28 17.6667C28 13.9883 24.864 11 21 11C17.136 11 14 13.9883 14 17.6667C14 18.5867 14.784 19.3333 15.75 19.3333C16.716 19.3333 17.5 18.5867 17.5 17.6667C17.5 15.8283 19.068 14.3333 21 14.3333C22.932 14.3333 24.5 15.8283 24.5 17.6667C24.5 19.5067 22.932 21 21 21Z",fill:"#0992AE"})))}var Te=i.forwardRef(Ce),Se=(n.p,n(152)),Pe=n(154),Be=n(147),Ne=n(148),we=n(2),We=function(e){return Object(we.jsx)("div",{className:e.body,children:Object(we.jsx)(J.a,{children:"\u231b Taking you back..."})})},Ae=function(e,t,n){return Object(we.jsx)("div",{children:Object(we.jsxs)(K.a,{container:!0,justify:"center",alignItems:"center",direction:"column",children:[Object(we.jsx)(Pe.a,{className:e.button,variant:"contained",color:"primary",fullWidth:!0,onClick:t,children:Object(we.jsx)(J.a,{variant:"subtitle2",children:"Vaccinated on different number?"})}),Object(we.jsx)(Pe.a,{className:e.goHomeButton,variant:"outlined",color:"primary",fullWidth:!0,onClick:n,children:Object(we.jsx)(J.a,{variant:"subtitle2",children:"Go to home"})})]})})},De=function(e){var t=e.state,n=e.retryTime,a=e.classes,r=e.changeOtp,i=e.submitOtp,c=e.triggerOtp,o=e.enterAlternatePhoneInitStage,s=n<1,l=new Date(1e3*n).toISOString().substr(14,5);return Object(we.jsxs)(K.a,{alignItems:"center",justify:"center",children:[Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(J.a,{variant:"body2",children:Object(we.jsx)(Ie.a,{fontWeight:"fontWeightBold",children:"LOGIN"})})}),Object(we.jsxs)(K.a,{item:!0,lg:12,children:[Object(we.jsx)(J.a,{variant:"h6",children:Object(we.jsx)(Ie.a,{fontWeight:"fontWeightBold",children:"Enter OTP"})}),Object(we.jsx)(J.a,{variant:"subtitle2",children:Object(we.jsxs)(Ie.a,{my:2,children:[Object(we.jsxs)(Ie.a,{children:["OTP sent to ",t.registeredPhone]}),Object(we.jsx)(Be.a,{onClick:o,children:"Vaccine registered on different number?"})]})})]}),Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(Se.a,{maxLength:6,type:"number",id:"otp",label:"6-digit OTP",variant:"outlined",value:t.otp,onChange:function(e){return r(e.target.value)}})}),Object(we.jsxs)(K.a,{container:!0,justify:"space-between",children:[Object(we.jsx)(K.a,{item:!0,lg:6,children:Object(we.jsx)(Pe.a,{className:a.button,id:"otp",variant:"contained",color:"primary",onClick:i,disabled:t.isLoading,children:"Submit OTP"})}),Object(we.jsx)(K.a,{item:!0,lg:6,children:Object(we.jsx)(Pe.a,{className:a.button,id:"otp",variant:"contained",color:s?"primary":"default",onClick:c,disabled:!s||t.isLoading,children:"Retry ".concat(s?"":"("+l+")")})})]})]})},Le=function(e,t){return e<2?function(e){return Object(we.jsx)("div",{className:e.body,children:Object(we.jsx)(J.a,{children:"\u231b Retrying some other slot..."})})}(t):We(t)},Re=function(e,t){var n=function(e){var t=f.get(e.errorObj,"code");return t===A||t===H.NO_BENEFICIARY?Object(we.jsx)(J.a,{variant:"h6",children:Object(we.jsx)(Ie.a,{fontWeight:"fontWeightBold",children:"Your registration on CoWin Portal is pending. Please register first so that you can book slots."})}):Object(we.jsx)(J.a,{variant:"body2",children:Object(we.jsx)(Ie.a,{fontWeight:"fontWeightBold",color:"secondary.main",children:"SOMETHING WENT WRONG"})})}(e);return Object(we.jsxs)(K.a,{alignItems:"center",justify:"center",children:[Object(we.jsx)(K.a,{item:!0,lg:12,children:n}),Object(we.jsx)(K.a,{item:!0,lg:12,children:We(t)})]})},Fe=n(100),Ve=Object(X.a)({root:{backgroundColor:"#B2EBFE",width:"100%"},image:{overflowY:"hidden",width:"100%"},card:{flexGrow:1,width:"90%",minHeight:"25%",margin:"auto",padding:"5%",position:"absolute",bottom:0},button:{marginTop:10,borderRadius:12},goHomeButton:{marginTop:20},body:{marginTop:"5%"}});function He(){var e=parseInt(10*Math.random())%6;return g[e]}var Ge=Object(h.e)((function(e){var t,n=(t=e.location.search,je.parse(t,{ignoreQueryPrefix:!0})||{}),a=f.isEmpty(n.phone)?P:p,r=Object(i.useState)(Object(j.a)(Object(j.a)({},n),{},{stage:a,otp:"",registeredPhone:f.get(n,"phone"),lastPhone:f.get(n,"phone"),registeredBeneficiaryList:[]})),c=Object(b.a)(r,2),o=c[0],s=c[1],l=Object(i.useState)(120),h=Object(b.a)(l,2),O=h[0],g=h[1],w=Object(i.useState)(1),W=Object(b.a)(w,2),G=W[0],M=W[1],X=Object(i.useState)(U),Q=Object(b.a)(X,2),$=Q[0],ee=Q[1],te=function(e){s(Object(j.a)(Object(j.a)({},o),e))},ne=function(e){s(Object(j.a)(Object(j.a)({},o),{},{otp:e}))},ae=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=He(),g(120),e.prev=2,e.next=5,q(N.INIT,{mobile:o.registeredPhone,secret:t},te);case 5:n=e.sent,s(Object(j.a)(Object(j.a)({},o),{},{txnId:n.txnId,stage:m})),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Fe("sha256").update(o.otp).digest("hex"),e.prev=1,e.next=4,q(N.VALIDATE_OTP,{otp:t,txnId:o.txnId},te);case 4:n=e.sent,s(Object(j.a)(Object(j.a)({},o),{},{token:n.token,errorObj:{},stage:v})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q(N.RESCHEDULE,{appointment_id:t,session_id:o.vaccineSlot.session_id,slot:o.vaccineSlot.slot_time},te,o.token);case 3:s(Object(j.a)(Object(j.a)({},o),{},{errorObj:{},stage:_,appointmentId:t})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),s(Object(j.a)(Object(j.a)({},o),{},{errorObj:{code:F,message:"Appointment not confirmed"}}));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=f.get(o,"appointmentId",""),f.isEmpty(t)){e.next=5;break}return e.next=4,ie(t);case 4:return e.abrupt("return");case 5:return e.prev=5,e.next=8,q(N.SCHEDULE,{beneficiaries:[o.beneficiaryDetails.beneficiary_reference_id],center_id:o.vaccineSlot.center_id,slot:o.vaccineSlot.slot_time,session_id:o.vaccineSlot.session_id,dose:f.isEmpty(o.beneficiaryDetails.dose1_date)?1:2},te,o.token);case 8:n=e.sent,a=f.get(n,"appointment_confirmation_no"),f.isEmpty(a)?s(Object(j.a)(Object(j.a)({},o),{},{errorObj:{code:F,message:"Appointment not confirmed"}})):s(Object(j.a)(Object(j.a)({},o),{},{errorObj:{},stage:_,appointmentId:a})),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(5);case 15:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(){return e.apply(this,arguments)}}(),oe=function(e){s(Object(j.a)(Object(j.a)({},o),{},{registeredPhone:e}))},le=function(){var e=o.registeredPhone;10===f.size(e)?s(Object(j.a)(Object(j.a)({},o),{},{stage:p,lastPhone:o.registeredPhone})):s(Object(j.a)(Object(j.a)({},o),{},{errorObj:{code:V,message:Y}}))},de=function(){s(Object(j.a)(Object(j.a)({},o),{},{stage:P,otp:"",errorObj:null,registeredPhone:""}))},be=function(){s(Object(j.a)(Object(j.a)({},o),{},{stage:B}))},he=function(){ge(o,0)},fe=function(){if(s(Object(j.a)(Object(j.a)({},o),{},{errorObj:{},stage:k})),G<2){var e=setTimeout((function(){M(G+1)}),3e3);return function(){return clearInterval(e)}}ge(Object(j.a)(Object(j.a)({},o),{},{stage:k}))};Object(i.useEffect)((function(){switch(o.stage){case p:o.registeredPhone&&ae();break;case v:se(o,te);break;case x:ue(o,te);break;case y:ce(o,te);break;case _:case C:case I:ge(o);break;case S:case T:case E:return void ee(Object(j.a)(Object(j.a)({},U),{},{isTimerOn:!0}))}ee(U)}),[o.stage]),Object(i.useEffect)((function(){if(f.get(o.errorObj,"code")){switch(o.stage){case v:return void s(Object(j.a)(Object(j.a)({},o),{},{stage:S}))}switch(o.errorObj.code){case V:case H[L]:return;case H[R]:return void s(Object(j.a)(Object(j.a)({},o),{},{stage:E}));case H[A]:return void s(Object(j.a)(Object(j.a)({},o),{},{stage:S}));case D:return void fe();case A:return;default:return void(o.stage===y?fe():s(Object(j.a)(Object(j.a)({},o),{},{stage:I})))}}}),[o.errorObj]),Object(i.useEffect)((function(){if(O){var e=setTimeout((function(){g(O-1)}),1e3);return function(){return clearInterval(e)}}}),[O]),Object(i.useEffect)((function(){o.stage===k&&s(Object(j.a)(Object(j.a)({},o),{},{errorObj:{},captcha:"",stage:x}))}),[G]),Object(i.useEffect)((function(){if($.isTimerOn){if(!($.callBackDelayInSeconds<=0)){var e=setTimeout((function(){ee(Object(j.a)(Object(j.a)({},$),{},{callBackDelayInSeconds:$.callBackDelayInSeconds-1}))}),1e3);return function(){return clearInterval(e)}}ge(o,0)}}),[$]);var Oe=Ve(),pe=function(e){switch(o.stage){case _:return function(e){return Object(we.jsxs)(K.a,{alignItems:"center",justify:"center",children:[Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(J.a,{variant:"body2",children:Object(we.jsx)(Ie.a,{fontWeight:"fontWeightBold",color:"success.main",children:"SLOT BOOKED"})})}),Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(J.a,{variant:"h6",children:Object(we.jsx)(Ie.a,{fontWeight:"fontWeightBold",children:"Your vaccinated slot has been booked"})})}),Object(we.jsx)(K.a,{item:!0,lg:12,children:We(e)})]})}(e);case C:return function(e){return Object(we.jsxs)(K.a,{alignItems:"center",justify:"center",children:[Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(J.a,{variant:"body2",children:Object(we.jsx)(Ie.a,{fontWeight:"fontWeightBold",color:"success.main",children:"VACCINATED"})})}),Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(J.a,{variant:"h6",children:Object(we.jsx)(Ie.a,{fontWeight:"fontWeightBold",children:"You have been vaccinated"})})}),Object(we.jsx)(K.a,{item:!0,lg:12,children:We(e)})]})}(e);case E:return function(e){var t=e.classes,n=e.enterAlternatePhoneInitStage,a=e.goToHome,r=e.autoCallBackState,i=Ae(t,n,a);return Object(we.jsxs)(K.a,{alignItems:"center",justify:"center",children:[Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(J.a,{variant:"body2",children:Object(we.jsx)(Ie.a,{fontWeight:"fontWeightBold",color:"success.main",children:"SLOT BOOKED"})})}),Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(J.a,{variant:"h6",children:Object(we.jsx)(Ie.a,{fontWeight:"fontWeightBold",children:"You have a slot booking"})})}),Object(we.jsx)(K.a,{item:!0,lg:12,children:r.isTimerOn&&Object(we.jsxs)(J.a,{children:["\u231b Taking you back in ",r.callBackDelayInSeconds]})}),i]})}({classes:e,enterAlternatePhoneInitStage:de,goToHome:he,autoCallBackState:$});case k:return function(e,t,n){var a=Le(t,n);return Object(we.jsxs)(K.a,{alignItems:"center",justify:"center",children:[Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(J.a,{variant:"body2",children:Object(we.jsx)(Ie.a,{fontWeight:"fontWeightBold",color:"secondary.main",children:"BOOKING FAILED"})})}),Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(J.a,{variant:"h6",children:Object(we.jsx)(Ie.a,{fontWeight:"fontWeightBold",children:"All slots booked before your booking"})})}),Object(we.jsx)(K.a,{item:!0,lg:12,children:a})]})}(0,G,e);case I:return Re(o,e);case T:return function(e){var t=e.classes,n=e.enterAlternatePhoneInitStage,a=e.goToHome,r=e.autoCallBackState,i=Ae(t,n,a);return Object(we.jsxs)(K.a,{alignItems:"center",justify:"center",children:[Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(J.a,{variant:"body2",children:Object(we.jsx)(Ie.a,{fontWeight:"fontWeightBold",color:"success.main",children:"STATUS CONFIRMED"})})}),Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(J.a,{variant:"h6",children:Object(we.jsx)(Ie.a,{fontWeight:"fontWeightBold",children:"You have registered on CoWin portal. Please book a slot for vaccination soon."})})}),Object(we.jsx)(K.a,{item:!0,lg:12,children:r.isTimerOn&&Object(we.jsxs)(J.a,{children:["\u231b Taking you back in ",r.callBackDelayInSeconds]})}),i]})}({classes:e,registeredPhone:o.registeredPhone,enterAlternatePhoneInitStage:de,goToHome:he,autoCallBackState:$});case S:return function(e){var t=e.classes,n=e.registeredPhone,a=e.enterAlternatePhoneInitStage,r=e.goToHome,i=e.autoCallBackState,c=Ae(t,a,r);return Object(we.jsxs)(K.a,{alignItems:"center",justify:"center",children:[Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(J.a,{variant:"subtitle2",children:Object(we.jsx)(Ie.a,{color:"#FF0000",fontWeight:"fontWeightBold",children:"Vaccination pending"})})}),Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(J.a,{variant:"h6",children:Object(we.jsxs)(Ie.a,{fontWeight:"fontWeightBold",my:2,children:["No vaccination registration found for ",n,i.isTimerOn&&Object(we.jsxs)(J.a,{children:["\u231b Taking you back in ",i.callBackDelayInSeconds]})]})})}),c]})}({classes:e,registeredPhone:o.registeredPhone,enterAlternatePhoneInitStage:de,goToHome:he,autoCallBackState:$});case P:return function(e,t,n,a,r){return Object(we.jsxs)(K.a,{alignItems:"center",justify:"center",direction:"column",children:[Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(J.a,{variant:"h6",children:Object(we.jsx)(Ie.a,{fontWeight:"fontWeightBold",my:2,children:"Enter phone number used for Vaccination"})})}),Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(Se.a,{maxLength:10,fullWidth:!0,size:"small",type:"number",id:"alternatePhone",label:"Vaccination Phone Number",variant:"outlined",value:t.registeredPhone,onChange:function(e){return a(e.target.value)}})}),Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(Pe.a,{className:e.button,variant:"contained",color:"primary",fullWidth:!0,id:"confirmRegisteredPhone",onClick:r,children:Object(we.jsx)(J.a,{variant:"subtitle1",children:"Send OTP"})})})]})}(e,o,0,oe,be);case B:return function(e,t,n,a){return Object(we.jsxs)(K.a,{container:!0,alignItems:"center",justify:"center",direction:"column",children:[Object(we.jsx)(K.a,{item:!0,lg:12,justify:"center",children:Object(we.jsx)(Ne.a,{component:Te,overflow:"visible"})}),Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(J.a,{variant:"h6",children:Object(we.jsxs)(Ie.a,{fontWeight:"fontWeightBold",my:2,children:["Are you sure you used ",t.registeredPhone," for Vaccination?"]})})}),Object(we.jsxs)(K.a,{container:!0,direction:"row",justify:"space-between",spacing:1,children:[Object(we.jsx)(K.a,{item:!0,xs:6,children:Object(we.jsx)(Pe.a,{className:e.button,variant:"outlined",color:"primary",fullWidth:!0,id:"submitRegisteredPhone",onClick:n,children:Object(we.jsx)(J.a,{variant:"subtitle2",children:"Yes"})})}),Object(we.jsx)(K.a,{item:!0,xs:6,children:Object(we.jsx)(Pe.a,{className:e.button,variant:"outlined",color:"primary",fullWidth:!0,id:"declineRegisteredPhone",onClick:a,children:Object(we.jsx)(J.a,{variant:"subtitle2",children:"No"})})})]})]})}(e,o,le,de);default:return De({state:o,retryTime:O,classes:e,changeOtp:ne,submitOtp:re,triggerOtp:ae,enterAlternatePhoneInitStage:de})}}(Oe),me=f.isEmpty(f.get(o.errorObj,"message"))||f.get(o,"stage")===S?null:Object(we.jsx)(K.a,{alignItems:"center",justify:"center",children:Object(we.jsx)(K.a,{item:!0,lg:12,children:Object(we.jsx)(J.a,{color:"error",children:Object(we.jsx)(Ie.a,{fontWeight:"fontWeightBold",children:o.errorObj.message})})})});return Object(we.jsxs)("div",{className:Oe.root,children:[Object(we.jsx)("img",{src:"".concat(_e),className:Oe.image}),Object(we.jsxs)(z.a,{className:Oe.card,children:[me,o.isLoading&&Object(we.jsx)(Z.a,{}),pe]})]})})),Me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,157)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},Ye=n(63);s.a.render(Object(we.jsx)(c.a.StrictMode,{children:Object(we.jsx)(Ye.a,{children:Object(we.jsx)(h.a,{path:"/",component:Ge})})}),document.getElementById("root")),Me()},81:function(e,t,n){},92:function(e,t){}},[[112,1,2]]]);
//# sourceMappingURL=main.acde3779.chunk.js.map