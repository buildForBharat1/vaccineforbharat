(this.webpackJsonpvaccineforbharat=this.webpackJsonpvaccineforbharat||[]).push([[0],{113:function(e,t,n){"use strict";n.r(t);var a,r,i=n(0),c=n.n(i),o=n(13),s=n.n(o),l=(n(82),n(15)),d=n.n(l),u=n(18),j=n(6),b=n(42),f=n(12),h=n(3),O=n(19),g=["U2FsdGVkX1/fkazU2I2Rdz3hI7iWT6HRzThZj16rpyn4xYM6wcbd84k4CpJimxC0YpG3kFn9qog6LhmaRoS14g==","U2FsdGVkX19I0TpTI50qTW+0o+LEWSBPYIcivZR4gvANVyLhRhP+rwapNMmyE3tE7e2EeEIV8X6YVfOODlCUbg==","U2FsdGVkX181DnPRmCbp6NePNHeHRfh3dAO9dMMSApKdvNpIEcK11CYuqjyI04DU4TRuktcSduxWej8OGCz9ZA==","U2FsdGVkX19NYwIf1jzNr2ghhC7bH1/H36TLGsiUKSopzfhdHB4aSa2RczWmSdN35ZwZXJ18cha9qX1vLO1BpQ==","U2FsdGVkX18kqQVkl8zGUA8schCVAm6NWNM0q/bCV7dHyUJoy8JPbRms4IIsFNU4Ahx6ffx0FVYsOIatS98WjA==","U2FsdGVkX18y9RiV+sdQG+dNc09ETZfLddhx6sEu10zP07S14C9X4cdXXRtwJ+Pa+x2zycwllBLV9opSgQ9Cjg=="],p="INIT",m="VALIDATE_OTP",v="FETCH_BENEFICIARY",x="FETCH_SLOTS",y="SCHEDULE",_="SLOT_BOOKED",I="ERROR",E="EXISTING_BOOKING",k="BOOKING_FAILED",T="VACCINATED",C="REGISTERED",S="NOT_REGISTERED",B="ALTERNATE_PHONE_INIT",P="CONFIRM_PHONE",N=(a={},Object(O.a)(a,p,"https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP"),Object(O.a)(a,m,"https://cdn-api.co-vin.in/api/v2/auth/validateMobileOtp"),Object(O.a)(a,v,"https://cdn-api.co-vin.in/api/v2/appointment/beneficiaries"),Object(O.a)(a,y,"https://cdn-api.co-vin.in/api/v2/appointment/schedule"),Object(O.a)(a,x,"https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict"),Object(O.a)(a,"RESCHEDULE","https://cdn-api.co-vin.in/api/v2/appointment/reschedule"),a),w=18,D=5,W={COVISHIELD:84,COVAXIN:28,"SPUTNIK V":21},A=1,L=2,R="NO_BENEFICIARY",V="NO_SLOT",F="INVALID_OTP",H="EXISTING_BOOKING",Y="BOOKING_FAILED",G="INVALID_PHONE",M=(r={},Object(O.a)(r,H,"APPOIN0022"),Object(O.a)(r,F,"USRAUT0014"),Object(O.a)(r,R,"APPOIN0001"),r),U={"Aadhaar Card":"aadhaar_card","PAN Card":"pan_card"},z="Free",X="Paid",K="Please enter a valid phone number",J={callBackDelayInSeconds:15,isTimerOn:!1},Z=n(151),q=n(150),Q=n(147),$=n(114),ee=n(152),te=function(){var e=Object(u.a)(d.a.mark((function e(t,n,a,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({isLoading:!0}),e.abrupt("return",Promise.resolve().then((function(){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(n)})})).then((function(e){return 204===e.status?{}:e.json()})).then((function(e){if(a({isLoading:!1}),e.error)throw e;return e})).catch((function(e){throw a({errorObj:{code:e.errorCode,message:e.error},isLoading:!1}),e})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),ne=function(){var e=Object(u.a)(d.a.mark((function e(t,n,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({isLoading:!0}),e.abrupt("return",Promise.resolve().then((function(){return fetch(t,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}})})).then((function(e){return e.json()})).then((function(e){if(n({isLoading:!1}),e.error)throw e;return e})).catch((function(e){throw n({errorObj:{code:e.errorCode,message:e.error},isLoading:!1}),e})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),ae=n(41),re=n.n(ae),ie=n(63),ce=function(e){var t=h.toLower(e);return h.find(h.split(t,/\s|\.|\,/),(function(e){return h.size(e)>2}))},oe=function(e,t){var n=h.size(e),a=h.size(t);if(a>50||n>50)return 50;var r=[];return h.forEach(h.range(0,n+1),(function(e){r[e]=[e]})),h.forEach(h.range(0,a+1),(function(e){r[0][e]=e})),h.forEach(h.range(1,n+1),(function(n){h.forEach(h.range(1,a+1),(function(a){e[n-1]===t[a-1]?r[n][a]=r[n-1][a-1]:r[n][a]=Math.min(r[n-1][a-1]+1,Math.min(r[n][a-1]+1,r[n-1][a]+1))}))})),r[n][a]},se=function(){var e=new Date,t=new Date(e);t.setDate(e.getDate()+1);var n=t.getDate(),a=t.getMonth()+1,r=t.getFullYear();return"".concat(n,"-").concat((a>9?"":"0")+a,"-").concat(r)},le=function(e,t){var n=ce(e.name),a=ce(e.displayName),r=e.id_type,i=e.id_number,c=(void 0===i?"":i).slice(-4),o=h.find(t,{beneficiary_reference_id:e.beneficiaryId});if(!h.isEmpty(o))return o;var s=h.find(t,(function(e){var t=U[e.photo_id_type],n=h.get(e,"photo_id_number","").slice(-4);return r===t&&c===n}));if(!h.isEmpty(s))return s;var l=function(e,t){if(!h.isEmpty(e)){var n=h.map(e,(function(e){var t=e.name;return h.toLower(t)})),a=h.toLower(t),r=ie.findBestMatch(a,n),i=r.bestMatch,c=void 0===i?{}:i,o=r.bestMatchIndex,s=c.rating;return(void 0===s?0:s)>.7?e[o]:void 0}}(t,e.name);if(!h.isEmpty(l))return l;var d=h.find(t,(function(e){var t=e.name,a=ce(t);return oe(n,a)<3}));return h.isEmpty(d)?h.find(t,(function(e){var t=e.name,n=ce(t);return oe(a,n)<3})):d},de=function(e){return h.map(e,(function(e){return{beneficiary_id:e.beneficiary_reference_id,name:e.name,vaccine:e.vaccine,vaccination_status:e.vaccination_status,dose1_date:e.dose1_date,dose2_date:e.dose2_date}}))},ue=function(e,t){return!h.isEmpty(e)&&!h.isEmpty(t)&&re.a.utc().diff(re.a.utc(t,"DD-MM-YYYY"),"days")>=2},je=function(e){var t=h.get(e,"dose1_date",""),n=h.get(e,"vaccine","");return!h.isEmpty(t)&&re.a.utc().diff(re.a.utc(t,"DD-MM-YYYY"),"days")>=W[n]},be=function(){var e=Object(u.a)(d.a.mark((function e(t,n){var a,r,i,c,o,s,l,u,j;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne(N.FETCH_BENEFICIARY,n,t.token);case 3:if(a=e.sent,r=h.get(a,"beneficiaries",[]),i=le(t,r),!h.isEmpty(i)){e.next=9;break}return n({stage:S,registeredBeneficiaryList:de(r)}),e.abrupt("return");case 9:if(h.isEmpty(i.dose2_date)){e.next=12;break}return n({stage:T,beneficiaryDetails:i}),e.abrupt("return");case 12:if(c=je(i),o=c?L:A,c||h.isEmpty(i.dose1_date)){e.next=17;break}return n({stage:T,beneficiaryDetails:i}),e.abrupt("return");case 17:if(s=h.get(i,"vaccine",""),h.isEmpty(i.appointments)){e.next=27;break}if(l=h.maxBy(i.appointments,"date"),u=h.get(l,"appointment_id",""),j=h.get(l,"date",""),!ue(u,j)){e.next=25;break}return n({stage:x,beneficiaryDetails:i,appointmentId:u,doseToBook:o,firstDoseVaccine:s}),e.abrupt("return");case 25:return n({stage:E,beneficiaryDetails:i}),e.abrupt("return");case 27:n({stage:x,beneficiaryDetails:i,doseToBook:o,firstDoseVaccine:s}),e.next=32;break;case 30:e.prev=30,e.t0=e.catch(0);case 32:case"end":return e.stop()}}),e,null,[[0,30]])})));return function(t,n){return e.apply(this,arguments)}}(),fe=function(e){var t=e.date;return function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,a=e.getFullYear();return"".concat((t>9?"":"0")+t,"-").concat((n>9?"":"0")+n,"-").concat(a)}()!==t?e.slots[0]:h.last(e.slots)},he=function(e,t,n,a){var r=h.get(e,"vaccineSlot.session_id"),i=n===L?"available_capacity_dose2":"available_capacity_dose1",c=[];return h.forEach(t,(function(e){var t=e.sessions,o=h.filter(t,(function(e){var t=h.get(e,"available_capacity",0),c=h.get(e,[i],0),o=h.get(e,"vaccine",""),s=t>0&&c>=D&&e.min_age_limit===w&&e.session_id!==r;return n!==L||h.isEmpty(o)||h.isEmpty(a)?n===A?s&&"COVISHIELD"===o:s:s&&o===a})),s=h.maxBy(o,(function(e){return e[i]}));if(s){var l=fe(s);c.push(Object(j.a)(Object(j.a)(Object(j.a)({},e),s),{},{slot_time:l}))}})),function(e,t,n){var a=h.filter(e,(function(e){return h.get(e,"fee_type")==z&&h.get(e,[t])>=5}));if(!h.isEmpty(a))return h.maxBy(a,(function(e){return e[t]}));if(n===L)return h.maxBy(e,(function(e){return e[t]}));var r=h.filter(e,(function(e){var t=h.get(e,"vaccine_fees",[]),n=h.get(e,"vaccine"),a=h.filter(t,(function(e){return h.get(e,"vaccine")===n}));return!h.isEmpty(a)&&h.get(e,"fee_type")===X&&h.toNumber(a[0].fee)<=1e3}));return h.maxBy(r,(function(e){return e[t]}))}(c,i,n)},Oe=function(){var e=Object(u.a)(d.a.mark((function e(t,n){var a,r,i,c,o,s,l,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.district,r=t.doseToBook,i=t.firstDoseVaccine,c=t.beneficiaryDetails,a){e.next=4;break}return n(r===L?{stage:T,beneficiaryDetails:c}:{stage:C}),e.abrupt("return");case 4:return o=se(),e.prev=5,e.next=8,ne("".concat(N.FETCH_SLOTS,"?district_id=").concat(a,"&date=").concat(o),n,t.token);case 8:if(s=e.sent,l=h.get(s,"centers",[]),u=he(t,l,r,i),!h.isEmpty(u)){e.next=14;break}return n({errorObj:{code:V,message:"No available slot found for district ".concat(a)}}),e.abrupt("return");case 14:n({stage:y,vaccineSlot:u}),e.next=19;break;case 17:e.prev=17,e.t0=e.catch(5);case 19:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(t,n){return e.apply(this,arguments)}}(),ge=n(53);function pe(e){return ge.stringify(e)}var me,ve,xe,ye=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,n=_e(e),a=Ee(e.stage),r=Object(j.a)(Object(j.a)({},n),{},{auth_key:e.auth_key,phone:e.phone||e.registeredPhone,alternatePhone:e.registeredPhone,app_state:a}),i=pe(r);window.setTimeout((function(){window.location.href="".concat(e.callback,"?").concat(i)}),t)},_e=function(e){var t=e.beneficiaryDetails,n=void 0===t?{}:t,a=Ie(e),r=Te(e),i={beneficiary_id:n.beneficiary_reference_id,name:n.name,vaccine:n.vaccine,vaccination_status:n.vaccination_status,dose_1_date:n.dose1_date,dose_2_date:n.dose2_date,err_code:a.code,err_message:a.message,meta_data:JSON.stringify(r)};switch(e.stage){case E:var c=n.appointments,o=void 0===c?[]:c,s=h.last(o)||{};return Object(j.a)(Object(j.a)({},i),{},{center_id:s.center_id,center_name:s.name,slot:s.slot,session_id:s.session_id,date:s.date,dose:s.dose,appointment_id:s.appointment_id});case _:var l=e.vaccineSlot,d=void 0===l?{}:l,u=e.appointmentId,b=ke(d);return Object(j.a)(Object(j.a)({},i),{},{appointment_id:u,center_id:d.center_id,center_name:d.name,center_address:d.address,center_district_name:d.district_name,center_pincode:d.pincode,slot:d.slot_time,session_id:d.session_id,date:d.date,vaccine_fee:b,vaccine:d.vaccine,dose:e.doseToBook});default:return i}},Ie=function(e){return e.stage===_?{}:e.stage===S?h.isEmpty(e.errorObj)?{code:R,message:h.join(h.map(e.registeredBeneficiaryList,"name"),",")}:e.errorObj:e.errorObj||{}},Ee=function(e){return e===S?I:e},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=h.get(e,"vaccine_fees",[]),n=h.find(t,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.vaccine===e.vaccine}));return h.get(n,"fee","0")},Te=function(e){return e.stage===S?{available_beneficiaries:h.slice(e.registeredBeneficiaryList,0,5)}:{}},Ce=n.p+"static/media/build4bharat.06144520.jpg",Se=n(154),Be=["title","titleId"];function Pe(){return(Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Ne(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function we(e,t){var n=e.title,a=e.titleId,r=Ne(e,Be);return i.createElement("svg",Pe({width:42,height:42,viewBox:"0 0 42 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},r),n?i.createElement("title",{id:a},n):null,me||(me=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 4C11.6177 4 4 11.6177 4 21C4 30.384 11.6177 38 21 38C30.3823 38 38 30.384 38 21C38 11.6177 30.3823 4 21 4Z",fill:"#EFFAFC"})),ve||(ve=i.createElement("path",{d:"M22.75 29.3333C22.75 28.4133 21.966 27.6667 21 27.6667C20.034 27.6667 19.25 28.4133 19.25 29.3333C19.25 30.2533 20.034 31 21 31C21.966 31 22.75 30.2533 22.75 29.3333Z",fill:"#0992AE"})),xe||(xe=i.createElement("path",{d:"M21 21C20.034 21 19.25 21.7467 19.25 22.6667V24.3333C19.25 25.2533 20.034 26 21 26C21.966 26 22.75 25.2533 22.75 24.3333V24.1233C25.767 23.3833 28 20.7717 28 17.6667C28 13.9883 24.864 11 21 11C17.136 11 14 13.9883 14 17.6667C14 18.5867 14.784 19.3333 15.75 19.3333C16.716 19.3333 17.5 18.5867 17.5 17.6667C17.5 15.8283 19.068 14.3333 21 14.3333C22.932 14.3333 24.5 15.8283 24.5 17.6667C24.5 19.5067 22.932 21 21 21Z",fill:"#0992AE"})))}var De=i.forwardRef(we),We=(n.p,n(153)),Ae=n(155),Le=n(148),Re=n(149),Ve=n(2),Fe=function(e){return Object(Ve.jsx)("div",{className:e.body,children:Object(Ve.jsx)($.a,{children:"\u231b Taking you back..."})})},He=function(e,t,n){return Object(Ve.jsx)("div",{children:Object(Ve.jsxs)(Q.a,{container:!0,justify:"center",alignItems:"center",direction:"column",children:[Object(Ve.jsx)(Ae.a,{className:e.button,variant:"contained",color:"primary",fullWidth:!0,onClick:t,children:Object(Ve.jsx)($.a,{variant:"subtitle2",children:"Vaccinated on different number?"})}),Object(Ve.jsx)(Ae.a,{className:e.goHomeButton,variant:"outlined",color:"primary",fullWidth:!0,onClick:n,children:Object(Ve.jsx)($.a,{variant:"subtitle2",children:"Go to home"})})]})})},Ye=function(e){var t=e.state,n=e.retryTime,a=e.classes,r=e.changeOtp,i=e.submitOtp,c=e.triggerOtp,o=e.enterAlternatePhoneInitStage,s=n<1,l=new Date(1e3*n).toISOString().substr(14,5);return Object(Ve.jsxs)(Q.a,{alignItems:"center",justify:"center",children:[Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)($.a,{variant:"body2",children:Object(Ve.jsx)(Se.a,{fontWeight:"fontWeightBold",children:"LOGIN"})})}),Object(Ve.jsxs)(Q.a,{item:!0,lg:12,children:[Object(Ve.jsx)($.a,{variant:"h6",children:Object(Ve.jsx)(Se.a,{fontWeight:"fontWeightBold",children:"Enter OTP"})}),Object(Ve.jsx)($.a,{variant:"subtitle2",children:Object(Ve.jsxs)(Se.a,{my:2,children:[Object(Ve.jsxs)(Se.a,{children:["OTP sent to ",t.registeredPhone]}),Object(Ve.jsx)(Le.a,{onClick:o,children:"Vaccine registered on different number?"})]})})]}),Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)(We.a,{maxLength:6,type:"number",id:"otp",label:"6-digit OTP",variant:"outlined",value:t.otp,onChange:function(e){return r(e.target.value)}})}),Object(Ve.jsxs)(Q.a,{container:!0,justify:"space-between",children:[Object(Ve.jsx)(Q.a,{item:!0,lg:6,children:Object(Ve.jsx)(Ae.a,{className:a.button,id:"otp",variant:"contained",color:"primary",onClick:i,disabled:t.isLoading,children:"Submit OTP"})}),Object(Ve.jsx)(Q.a,{item:!0,lg:6,children:Object(Ve.jsx)(Ae.a,{className:a.button,id:"otp",variant:"contained",color:s?"primary":"default",onClick:c,disabled:!s||t.isLoading,children:"Retry ".concat(s?"":"("+l+")")})})]})]})},Ge=function(e,t){return e<2?function(e){return Object(Ve.jsx)("div",{className:e.body,children:Object(Ve.jsx)($.a,{children:"\u231b Retrying some other slot..."})})}(t):Fe(t)},Me=function(e,t){var n=function(e){var t=h.get(e.errorObj,"code");return t===R||t===M.NO_BENEFICIARY?Object(Ve.jsx)($.a,{variant:"h6",children:Object(Ve.jsx)(Se.a,{fontWeight:"fontWeightBold",children:"Your registration on CoWin Portal is pending. Please register first so that you can book slots."})}):Object(Ve.jsx)($.a,{variant:"body2",children:Object(Ve.jsx)(Se.a,{fontWeight:"fontWeightBold",color:"secondary.main",children:"SOMETHING WENT WRONG"})})}(e);return Object(Ve.jsxs)(Q.a,{alignItems:"center",justify:"center",children:[Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:n}),Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Fe(t)})]})},Ue=n(101),ze=Object(q.a)({root:{backgroundColor:"#B2EBFE",width:"100%"},image:{overflowY:"hidden",width:"100%"},card:{flexGrow:1,width:"90%",minHeight:"25%",margin:"auto",padding:"5%",position:"absolute",bottom:0},button:{marginTop:10,borderRadius:12},goHomeButton:{marginTop:20},body:{marginTop:"5%"}});function Xe(){var e=parseInt(10*Math.random())%6;return g[e]}var Ke=Object(f.e)((function(e){var t,n=(t=e.location.search,ge.parse(t,{ignoreQueryPrefix:!0})||{}),a=h.isEmpty(n.phone)?B:p,r=Object(i.useState)(Object(j.a)(Object(j.a)({},n),{},{stage:a,otp:"",registeredPhone:h.get(n,"phone"),lastPhone:h.get(n,"phone"),registeredBeneficiaryList:[]})),c=Object(b.a)(r,2),o=c[0],s=c[1],l=Object(i.useState)(120),f=Object(b.a)(l,2),O=f[0],g=f[1],w=Object(i.useState)(1),D=Object(b.a)(w,2),W=D[0],A=D[1],L=Object(i.useState)(J),U=Object(b.a)(L,2),z=U[0],X=U[1],q=function(e){s(Object(j.a)(Object(j.a)({},o),e))},ne=function(e){s(Object(j.a)(Object(j.a)({},o),{},{otp:e}))},ae=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Xe(),g(120),e.prev=2,e.next=5,te(N.INIT,{mobile:o.registeredPhone,secret:t},q);case 5:n=e.sent,s(Object(j.a)(Object(j.a)({},o),{},{txnId:n.txnId,stage:m})),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Ue("sha256").update(o.otp).digest("hex"),e.prev=1,e.next=4,te(N.VALIDATE_OTP,{otp:t,txnId:o.txnId},q);case 4:n=e.sent,s(Object(j.a)(Object(j.a)({},o),{},{token:n.token,errorObj:{},stage:v})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te(N.RESCHEDULE,{appointment_id:t,session_id:o.vaccineSlot.session_id,slot:o.vaccineSlot.slot_time},q,o.token);case 3:s(Object(j.a)(Object(j.a)({},o),{},{errorObj:{},stage:_,appointmentId:t})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),s(Object(j.a)(Object(j.a)({},o),{},{errorObj:{code:Y,message:"Appointment not confirmed"}}));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=h.get(o,"appointmentId",""),h.isEmpty(t)){e.next=5;break}return e.next=4,ie(t);case 4:return e.abrupt("return");case 5:return e.prev=5,e.next=8,te(N.SCHEDULE,{beneficiaries:[o.beneficiaryDetails.beneficiary_reference_id],center_id:o.vaccineSlot.center_id,slot:o.vaccineSlot.slot_time,session_id:o.vaccineSlot.session_id,dose:o.doseToBook},q,o.token);case 8:n=e.sent,a=h.get(n,"appointment_confirmation_no"),h.isEmpty(a)?s(Object(j.a)(Object(j.a)({},o),{},{errorObj:{code:Y,message:"Appointment not confirmed"}})):s(Object(j.a)(Object(j.a)({},o),{},{errorObj:{},stage:_,appointmentId:a})),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(5);case 15:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(){return e.apply(this,arguments)}}(),oe=function(e){s(Object(j.a)(Object(j.a)({},o),{},{registeredPhone:e}))},se=function(){var e=o.registeredPhone;10===h.size(e)?s(Object(j.a)(Object(j.a)({},o),{},{stage:p,lastPhone:o.registeredPhone})):s(Object(j.a)(Object(j.a)({},o),{},{errorObj:{code:G,message:K}}))},le=function(){s(Object(j.a)(Object(j.a)({},o),{},{stage:B,otp:"",errorObj:null,registeredPhone:""}))},de=function(){s(Object(j.a)(Object(j.a)({},o),{},{stage:P}))},ue=function(){ye(o,0)},je=function(){if(s(Object(j.a)(Object(j.a)({},o),{},{errorObj:{},stage:k})),W<2){var e=setTimeout((function(){A(W+1)}),3e3);return function(){return clearInterval(e)}}ye(Object(j.a)(Object(j.a)({},o),{},{stage:k}))};Object(i.useEffect)((function(){switch(o.stage){case p:o.registeredPhone&&ae();break;case v:be(o,q);break;case x:Oe(o,q);break;case y:ce(o,q);break;case _:case T:case I:ye(o);break;case S:case C:case E:return void X(Object(j.a)(Object(j.a)({},J),{},{isTimerOn:!0}))}X(J)}),[o.stage]),Object(i.useEffect)((function(){if(h.get(o.errorObj,"code")){switch(o.stage){case v:return void s(Object(j.a)(Object(j.a)({},o),{},{stage:S}))}switch(o.errorObj.code){case G:case M[F]:return;case M[H]:return void s(Object(j.a)(Object(j.a)({},o),{},{stage:E}));case M[R]:return void s(Object(j.a)(Object(j.a)({},o),{},{stage:S}));case V:return void je();case R:return;default:return void(o.stage===y?je():s(Object(j.a)(Object(j.a)({},o),{},{stage:I})))}}}),[o.errorObj]),Object(i.useEffect)((function(){if(O){var e=setTimeout((function(){g(O-1)}),1e3);return function(){return clearInterval(e)}}}),[O]),Object(i.useEffect)((function(){o.stage===k&&s(Object(j.a)(Object(j.a)({},o),{},{errorObj:{},captcha:"",stage:x}))}),[W]),Object(i.useEffect)((function(){if(z.isTimerOn){if(!(z.callBackDelayInSeconds<=0)){var e=setTimeout((function(){X(Object(j.a)(Object(j.a)({},z),{},{callBackDelayInSeconds:z.callBackDelayInSeconds-1}))}),1e3);return function(){return clearInterval(e)}}ye(o,0)}}),[z]);var fe=ze(),he=function(e){switch(o.stage){case _:return function(e){return Object(Ve.jsxs)(Q.a,{alignItems:"center",justify:"center",children:[Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)($.a,{variant:"body2",children:Object(Ve.jsx)(Se.a,{fontWeight:"fontWeightBold",color:"success.main",children:"SLOT BOOKED"})})}),Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)($.a,{variant:"h6",children:Object(Ve.jsx)(Se.a,{fontWeight:"fontWeightBold",children:"Your vaccinated slot has been booked"})})}),Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Fe(e)})]})}(e);case T:return function(e){return Object(Ve.jsxs)(Q.a,{alignItems:"center",justify:"center",children:[Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)($.a,{variant:"body2",children:Object(Ve.jsx)(Se.a,{fontWeight:"fontWeightBold",color:"success.main",children:"VACCINATED"})})}),Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)($.a,{variant:"h6",children:Object(Ve.jsx)(Se.a,{fontWeight:"fontWeightBold",children:"You have been vaccinated"})})}),Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Fe(e)})]})}(e);case E:return function(e){var t=e.classes,n=e.enterAlternatePhoneInitStage,a=e.goToHome,r=e.autoCallBackState,i=He(t,n,a);return Object(Ve.jsxs)(Q.a,{alignItems:"center",justify:"center",children:[Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)($.a,{variant:"body2",children:Object(Ve.jsx)(Se.a,{fontWeight:"fontWeightBold",color:"success.main",children:"SLOT BOOKED"})})}),Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)($.a,{variant:"h6",children:Object(Ve.jsx)(Se.a,{fontWeight:"fontWeightBold",children:"You have a slot booking"})})}),Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:r.isTimerOn&&Object(Ve.jsxs)($.a,{children:["\u231b Taking you back in ",r.callBackDelayInSeconds]})}),i]})}({classes:e,enterAlternatePhoneInitStage:le,goToHome:ue,autoCallBackState:z});case k:return function(e,t,n){var a=Ge(t,n);return Object(Ve.jsxs)(Q.a,{alignItems:"center",justify:"center",children:[Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)($.a,{variant:"body2",children:Object(Ve.jsx)(Se.a,{fontWeight:"fontWeightBold",color:"secondary.main",children:"BOOKING FAILED"})})}),Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)($.a,{variant:"h6",children:Object(Ve.jsx)(Se.a,{fontWeight:"fontWeightBold",children:"All slots booked before your booking"})})}),Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:a})]})}(0,W,e);case I:return Me(o,e);case C:return function(e){var t=e.classes,n=e.enterAlternatePhoneInitStage,a=e.goToHome,r=e.autoCallBackState,i=He(t,n,a);return Object(Ve.jsxs)(Q.a,{alignItems:"center",justify:"center",children:[Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)($.a,{variant:"body2",children:Object(Ve.jsx)(Se.a,{fontWeight:"fontWeightBold",color:"success.main",children:"STATUS CONFIRMED"})})}),Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)($.a,{variant:"h6",children:Object(Ve.jsx)(Se.a,{fontWeight:"fontWeightBold",children:"You have registered on CoWin portal. Please book a slot for vaccination soon."})})}),Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:r.isTimerOn&&Object(Ve.jsxs)($.a,{children:["\u231b Taking you back in ",r.callBackDelayInSeconds]})}),i]})}({classes:e,registeredPhone:o.registeredPhone,enterAlternatePhoneInitStage:le,goToHome:ue,autoCallBackState:z});case S:return function(e){var t=e.classes,n=e.registeredPhone,a=e.enterAlternatePhoneInitStage,r=e.goToHome,i=e.autoCallBackState,c=He(t,a,r);return Object(Ve.jsxs)(Q.a,{alignItems:"center",justify:"center",children:[Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)($.a,{variant:"subtitle2",children:Object(Ve.jsx)(Se.a,{color:"#FF0000",fontWeight:"fontWeightBold",children:"Vaccination pending"})})}),Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)($.a,{variant:"h6",children:Object(Ve.jsxs)(Se.a,{fontWeight:"fontWeightBold",my:2,children:["No vaccination registration found for ",n,i.isTimerOn&&Object(Ve.jsxs)($.a,{children:["\u231b Taking you back in ",i.callBackDelayInSeconds]})]})})}),c]})}({classes:e,registeredPhone:o.registeredPhone,enterAlternatePhoneInitStage:le,goToHome:ue,autoCallBackState:z});case B:return function(e,t,n,a,r){return Object(Ve.jsxs)(Q.a,{alignItems:"center",justify:"center",direction:"column",children:[Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)($.a,{variant:"h6",children:Object(Ve.jsx)(Se.a,{fontWeight:"fontWeightBold",my:2,children:"Enter phone number used for Vaccination"})})}),Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)(We.a,{maxLength:10,fullWidth:!0,size:"small",type:"number",id:"alternatePhone",label:"Vaccination Phone Number",variant:"outlined",value:t.registeredPhone,onChange:function(e){return a(e.target.value)}})}),Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)(Ae.a,{className:e.button,variant:"contained",color:"primary",fullWidth:!0,id:"confirmRegisteredPhone",onClick:r,children:Object(Ve.jsx)($.a,{variant:"subtitle1",children:"Send OTP"})})})]})}(e,o,0,oe,de);case P:return function(e,t,n,a){return Object(Ve.jsxs)(Q.a,{container:!0,alignItems:"center",justify:"center",direction:"column",children:[Object(Ve.jsx)(Q.a,{item:!0,lg:12,justify:"center",children:Object(Ve.jsx)(Re.a,{component:De,overflow:"visible"})}),Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)($.a,{variant:"h6",children:Object(Ve.jsxs)(Se.a,{fontWeight:"fontWeightBold",my:2,children:["Are you sure you used ",t.registeredPhone," for Vaccination?"]})})}),Object(Ve.jsxs)(Q.a,{container:!0,direction:"row",justify:"space-between",spacing:1,children:[Object(Ve.jsx)(Q.a,{item:!0,xs:6,children:Object(Ve.jsx)(Ae.a,{className:e.button,variant:"outlined",color:"primary",fullWidth:!0,id:"submitRegisteredPhone",onClick:n,children:Object(Ve.jsx)($.a,{variant:"subtitle2",children:"Yes"})})}),Object(Ve.jsx)(Q.a,{item:!0,xs:6,children:Object(Ve.jsx)(Ae.a,{className:e.button,variant:"outlined",color:"primary",fullWidth:!0,id:"declineRegisteredPhone",onClick:a,children:Object(Ve.jsx)($.a,{variant:"subtitle2",children:"No"})})})]})]})}(e,o,se,le);default:return Ye({state:o,retryTime:O,classes:e,changeOtp:ne,submitOtp:re,triggerOtp:ae,enterAlternatePhoneInitStage:le})}}(fe),pe=h.isEmpty(h.get(o.errorObj,"message"))||h.get(o,"stage")===S?null:Object(Ve.jsx)(Q.a,{alignItems:"center",justify:"center",children:Object(Ve.jsx)(Q.a,{item:!0,lg:12,children:Object(Ve.jsx)($.a,{color:"error",children:Object(Ve.jsx)(Se.a,{fontWeight:"fontWeightBold",children:o.errorObj.message})})})});return Object(Ve.jsxs)("div",{className:fe.root,children:[Object(Ve.jsx)("img",{src:"".concat(Ce),className:fe.image}),Object(Ve.jsxs)(Z.a,{className:fe.card,children:[pe,o.isLoading&&Object(Ve.jsx)(ee.a,{}),he]})]})})),Je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,158)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},Ze=n(64);s.a.render(Object(Ve.jsx)(c.a.StrictMode,{children:Object(Ve.jsx)(Ze.a,{children:Object(Ve.jsx)(f.a,{path:"/",component:Ke})})}),document.getElementById("root")),Je()},82:function(e,t,n){},93:function(e,t){}},[[113,1,2]]]);
//# sourceMappingURL=main.f10a328f.chunk.js.map