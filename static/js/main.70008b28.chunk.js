(this.webpackJsonpmy_contacts=this.webpackJsonpmy_contacts||[]).push([[0],{439:function(e,t,n){},448:function(e,t,n){},449:function(e,t,n){},450:function(e,t,n){},453:function(e,t,n){},454:function(e,t,n){},455:function(e,t,n){},456:function(e,t,n){},458:function(e,t,n){},459:function(e,t,n){},460:function(e,t,n){},461:function(e,t,n){},462:function(e,t,n){},463:function(e,t,n){},464:function(e,t,n){},466:function(e,t,n){},467:function(e,t,n){},468:function(e,t,n){},469:function(e,t,n){},527:function(e,t,n){},530:function(e,t,n){},531:function(e,t,n){},532:function(e,t,n){},533:function(e,t,n){},534:function(e,t,n){},535:function(e,t,n){},536:function(e,t,n){},537:function(e,t,n){},538:function(e,t,n){},539:function(e,t,n){},571:function(e,t,n){},572:function(e,t,n){"use strict";n.r(t);var r=n(14),c=n(1),a=n(2),i=n(53),s=n(7),o=n(38),l=n(96),d=n(18),u=(n(439),n(10)),j=n.n(u),b=n(20),m=n(23),p=n(9),h=(n(448),function(e){var t=e.children;return Object(c.jsx)("div",{className:"container",children:t})}),f=function(e){var t=e.title,n=e.error,r=e.success,a=e.children,i=n?"form-container-feedback form-container-feedback--error form-container-feedback--show":".form-container-feedback",s=r?"form-container-feedback form-container-feedback--success form-container-feedback--show":".form-container-feedback";return Object(c.jsxs)("div",{className:"form-container",children:[Object(c.jsx)("h1",{className:"form-title",children:t}),a,Object(c.jsxs)("div",{className:"form-container-feedback-wrapper",children:[Object(c.jsx)("p",{className:i,children:n}),Object(c.jsx)("p",{className:s,children:r})]})]})},O=function(e){var t=e.open,n=e.onClick;return Object(c.jsx)("div",{className:t?"backdrop backdrop--show":"backdrop",onClick:n})},x=function(){return Object(c.jsxs)("div",{className:"lds-spinner",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})},v=n(19),y=(n(449),function(e){var t=Object(m.c)(e),n=Object(v.a)(t,2),a=n[0],i=n[1],s=i.touched&&i.error?"text-input-error text-input-error--show":"text-input-error";return Object(c.jsxs)("div",{className:"text-input-wrapper",children:[Object(c.jsx)("input",Object(r.a)(Object(r.a)({className:"text-input"},a),{},{placeholder:e.placeholder,type:e.type})),Object(c.jsx)("div",{className:s,children:i.error})]})}),g=(n(450),function(e){var t=e.type,n=e.variant,r=e.stretch,a=e.disabled,i=e.round,s=e.onClickHandler,o=e.children,l="button ".concat(n," ").concat(r?"stretch":""," ").concat(i?"round":"");return Object(c.jsx)("button",{className:l,type:t,disabled:a,onClick:s,children:o})}),N=n(58),w=n(136);n(577),n(451);w.a.initializeApp({apiKey:"AIzaSyCT7xbbz39YnskC-oKBejdGyOkAI239H0g",authDomain:"my-contacts-27cc7.firebaseapp.com",projectId:"my-contacts-27cc7",storageBucket:"my-contacts-27cc7.appspot.com",messagingSenderId:"323409419800",appId:"1:323409419800:web:38fac735d9ed1388642d6d"}),w.a.firestore();var k=w.a,C=Object(N.b)({name:"auth",initialState:{error:null,loading:!1,verificationSuccess:null,editProfileSuccess:null,deleteProfileError:null},reducers:{cleanUp:function(e){e.error=null,e.loading=!1,e.verificationSuccess=null,e.editProfileSuccess=null,e.deleteProfileError=null},authStart:function(e){e.loading=!0,e.error=null,e.verificationSuccess=null,e.editProfileSuccess=null,e.deleteProfileError=null},authSuccess:function(e){e.loading=!1},authFailure:function(e,t){e.loading=!1,e.error=t.payload},verificationSuccess:function(e){e.verificationSuccess=!0},editProfileSuccess:function(e){e.editProfileSuccess=!0},deleteProfileFailure:function(e,t){e.loading=!1,e.deleteProfileError=t.payload}}}),S=C.actions,F=S.cleanUp,P=S.authStart,H=S.authSuccess,I=S.authFailure,E=S.verificationSuccess,q=S.editProfileSuccess,L=S.deleteProfileFailure,M=C.reducer,D=function(e){return e.auth},B=function(e){var t=e.firstName,n=e.lastName,r=e.email,c=e.password;return function(){var e=Object(b.a)(j.a.mark((function e(a){var i,s,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(P()),e.next=4,k.auth().createUserWithEmailAndPassword(r,c);case 4:return s=e.sent,o=k.auth().currentUser,e.next=8,null===o||void 0===o?void 0:o.sendEmailVerification();case 8:return e.next=10,k.firestore().collection("users").doc(null===s||void 0===s||null===(i=s.user)||void 0===i?void 0:i.uid).set({firstName:t,lastName:n});case 10:a(H()),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),a(I(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()},V=function(e){var t=e.email,n=e.password;return function(){var e=Object(b.a)(j.a.mark((function e(r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(P()),e.next=4,k.auth().signInWithEmailAndPassword(t,n);case 4:r(H()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(I(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},U=function(e){var t=e.firstName,n=e.lastName,r=e.email,c=e.password;return function(){var e=Object(b.a)(j.a.mark((function e(a,i){var s,o,l,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a(P()),s=k.auth().currentUser,o=i().firebase.auth,l=o.email,d=o.uid,r===l){e.next=7;break}return e.next=7,null===s||void 0===s?void 0:s.updateEmail(r);case 7:return e.next=9,k.firestore().collection("users").doc(d).set({firstName:t,lastName:n});case 9:if(!c){e.next=12;break}return e.next=12,null===s||void 0===s?void 0:s.updatePassword(c);case 12:a(H()),a(q()),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),a(I(e.t0.message));case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,n){return e.apply(this,arguments)}}()},A=(n(453),p.b().shape({firstName:p.d().required("First name is required").min(2,"First name is too short").max(25,"First name is too long"),lastName:p.d().required("Last name is required").min(2,"Last name is too short").max(25,"Last name is too long"),email:p.d().email("Invalid e-mail").required("E-mail is required"),password:p.d().required("Password is required").min(8,"Password is too short"),confirmPassword:p.d().oneOf([p.c("password"),null],"Password does not match").required("You need to confirm the password")})),R=function(){var e=Object(s.c)(D),t=e.loading,n=e.error,r=Object(s.b)();return Object(c.jsx)(f,{title:"Signup",error:"string"===typeof n?n:"",children:Object(c.jsx)(m.b,{initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:""},onSubmit:function(){var e=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(B(t));case 2:n.setSubmitting(!1);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),validationSchema:A,children:Object(c.jsxs)(m.a,{children:[Object(c.jsx)(y,{type:"text",name:"firstName",placeholder:"First name *"}),Object(c.jsx)(y,{type:"text",name:"lastName",placeholder:"Last name *"}),Object(c.jsx)(y,{type:"email",name:"email",placeholder:"E-mail *"}),Object(c.jsx)(y,{type:"password",name:"password",placeholder:"Password *"}),Object(c.jsx)(y,{type:"password",name:"confirmPassword",placeholder:"Confirm password *"}),Object(c.jsx)("div",{className:"signup-form-button-wrapper",children:Object(c.jsx)(g,{type:"submit",variant:"primary",stretch:!0,disabled:t,children:t?"Signing Up...":"Sign Up"})})]})})})},T=function(){var e=Object(s.b)();Object(a.useEffect)((function(){return function(){e(F())}}),[e])},z=function(){return T(),Object(c.jsx)("div",{className:"signup-wrapper",children:Object(c.jsx)(R,{})})},J=(n(454),function(e){var t=e.children;return Object(c.jsx)("header",{className:"header",children:t})}),Y=(n(455),function(e){var t=e.children,n=e.isMobileMenuOpen?"mobile-menu mobile-menu--open":"mobile-menu";return Object(c.jsx)("div",{className:n,children:t})}),K=(n(456),function(e){var t=e.children,n=e.to,r=e.onNavItemClickHandler;return Object(c.jsx)(l.b,{to:n,className:"nav-item",activeClassName:"active",onClick:r,exact:!0,children:t})}),Q=(n(458),function(e){var t=e.children;return Object(c.jsx)("div",{className:"desktop-menu",children:t})}),W="/signup",_="/verify-email",G="/",X="/profile",Z="/signin",$="/signout",ee=function(e){var t,n=e.isMobileMenuOpen,r=e.onNavItemClickHandler,a=Object(s.c)((function(e){return e.firebase})).auth,i=a.uid,o=a.emailVerified;return t=i&&!o?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(K,{to:X,onNavItemClickHandler:r,children:"Profile"}),Object(c.jsx)(K,{to:$,onNavItemClickHandler:r,children:"Sign Out"})]}):i&&o?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(K,{to:G,onNavItemClickHandler:r,children:"Contacts"}),Object(c.jsx)(K,{to:X,onNavItemClickHandler:r,children:"Profile"}),Object(c.jsx)(K,{to:$,onNavItemClickHandler:r,children:"Sign Out"})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(K,{to:Z,onNavItemClickHandler:r,children:"Sign In"}),Object(c.jsx)(K,{to:W,onNavItemClickHandler:r,children:"Sign Up"})]}),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Y,{isMobileMenuOpen:n,children:t}),Object(c.jsx)(Q,{children:t})]})},te=n.p+"static/media/logo.b4e8e86e.png",ne=(n(459),function(e){var t=e.height;return Object(c.jsxs)("div",{className:"logo",children:[Object(c.jsx)("img",{src:te,style:{height:t},alt:"Logo."}),Object(c.jsx)("span",{className:"logo-text",children:"myContacts"})]})}),re=(n(460),function(e){var t=e.isOpen,n=e.onClickHandler,r=t?"humburger humburger--open":"humburger";return Object(c.jsxs)("div",{className:r,onClick:n,children:[Object(c.jsx)("span",{}),Object(c.jsx)("span",{}),Object(c.jsx)("span",{}),Object(c.jsx)("span",{})]})}),ce=(n(461),function(){var e=Object(a.useState)(!1),t=Object(v.a)(e,2),n=t[0],r=t[1];return Object(c.jsx)(J,{children:Object(c.jsx)(h,{children:Object(c.jsxs)("div",{className:"header-inner",children:[Object(c.jsx)(ne,{height:"4rem"}),Object(c.jsx)(ee,{isMobileMenuOpen:n,onNavItemClickHandler:function(){return r(!1)}}),Object(c.jsx)(re,{isOpen:n,onClickHandler:function(){return r((function(e){return!e}))}})]})})})}),ae=(n(462),function(e){var t=e.children;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(ce,{}),Object(c.jsx)("main",{className:"main",children:Object(c.jsx)(h,{children:t})})]})}),ie=(n(463),function(){var e=Object(s.c)(D),t=e.loading,n=e.error,r=e.verificationSuccess,a=Object(s.b)();return Object(c.jsxs)(f,{title:"Verify e-mail",error:"string"===typeof n?n:"",success:r?"Message sent successfully":"",children:[Object(c.jsx)("p",{className:"verify-email-text",children:"Verification email was successfully sent. After you've verified email, please sign in to get the most out of our application."}),Object(c.jsx)("p",{className:"verify-email-text",children:"If you see no email please check your spam. Still have no email? Try resending verification email."}),Object(c.jsx)("div",{className:"verify-email-button-wrapper",children:Object(c.jsx)(g,{type:"button",variant:"primary",stretch:!0,disabled:t,onClickHandler:function(){return a(function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(P()),n=k.auth().currentUser,e.next=5,null===n||void 0===n?void 0:n.sendEmailVerification();case 5:t(H()),t(E()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(I(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())},children:t?"Sending e-mail...":"Re-send e-mail"})})]})}),se=(n(464),function(){return T(),Object(c.jsx)("div",{className:"verify-email-wrapper",children:Object(c.jsx)(ie,{})})}),oe=n(284),le=n.n(oe),de=(n(466),function(e){var t=e.type,n=e.name,r=e.placeholder,a=e.value,i=e.onChangeHandler;return Object(c.jsx)("input",{className:"simple-input",type:t,name:n,placeholder:r,value:a,onChange:i})}),ue=n(128),je=n.n(ue),be=(n(263),n(467),function(e){var t=e.open,n=e.title,r=e.feedback,a=e.children,s=r?"modal-feedback modal-feedback--show":"modal-feedback";return Object(i.createPortal)(Object(c.jsxs)("div",{className:"".concat(t?"modal modal--open":"modal"),children:[Object(c.jsx)("h1",{className:"modal-title",children:n}),a,Object(c.jsx)("div",{className:"modal-feedback-wrapper",children:Object(c.jsx)("p",{className:s,children:r})})]}),document.getElementById("root-modal"))}),me=(n(468),function(e){var t=Object(m.c)(e),n=Object(v.a)(t,2),a=n[0],i=n[1],s=i.touched&&i.error?"formik-select-error formik-select-error--show":"formik-select-error";return Object(c.jsxs)("div",{className:"formik-select-wrapper",children:[Object(c.jsx)("select",Object(r.a)(Object(r.a)({className:"formik-select"},a),{},{children:e.children})),Object(c.jsx)("div",{className:s,children:i.error})]})}),pe=n(579),he=Object(N.b)({name:"contacts",initialState:{error:null,loading:!1},reducers:{contactsCleanUp:function(e){e.error=null,e.loading=!1},contactsStart:function(e){e.error=null,e.loading=!0},contactsSuccess:function(e){e.loading=!1},contactsFailure:function(e,t){e.loading=!1,e.error=t.payload}}}),fe=he.actions,Oe=fe.contactsCleanUp,xe=fe.contactsStart,ve=fe.contactsSuccess,ye=fe.contactsFailure,ge=he.reducer,Ne=function(e){return e.contacts},we=function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(c,a){var i,s,o;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=a().firebase.auth.uid,s=Object(r.a)({id:Object(pe.a)()},e),c(xe()),n.prev=3,n.next=6,k.firestore().collection("contacts").doc(i);case 6:return o=n.sent,n.next=9,o.get();case 9:if(n.sent.exists){n.next=15;break}return n.next=13,o.set({contacts:[s]});case 13:n.next=17;break;case 15:return n.next=17,o.update({contacts:k.firestore.FieldValue.arrayUnion(s)});case 17:t(),c(ve()),n.next=24;break;case 21:n.prev=21,n.t0=n.catch(3),c(ye(n.t0.message));case 24:case"end":return n.stop()}}),n,null,[[3,21]])})));return function(e,t){return n.apply(this,arguments)}}()},ke=function(e,t,n){return function(){var c=Object(b.a)(j.a.mark((function c(a,i){var s,o,l,d,u,b;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s=i().firebase.auth.uid,a(xe()),c.prev=2,c.next=5,k.firestore().collection("contacts").doc(s);case 5:return l=c.sent,c.next=8,l.get();case 8:return d=c.sent,u=null===(o=d.data())||void 0===o?void 0:o.contacts,b=u.map((function(n){return n.id===e?Object(r.a)(Object(r.a)({},n),t):n})),c.next=13,l.update({contacts:b});case 13:n(),a(ve()),c.next=20;break;case 17:c.prev=17,c.t0=c.catch(2),a(ye(c.t0.message));case 20:case"end":return c.stop()}}),c,null,[[2,17]])})));return function(e,t){return c.apply(this,arguments)}}()},Ce=(n(469),p.b().shape({firstName:p.d().required("First name is required").min(2,"First name is too short").max(25,"First name is too long"),lastName:p.d().min(2,"Last name is too short").max(25,"Last name is too long"),email:p.d().email("Invalid e-mail"),phone:p.d().required("Phone is required").min(9,"Phone is too short"),category:p.d().oneOf(["friends","job","family","other"],"Invalid category type"),birthday:p.a().nullable()})),Se=function(e){var t=e.open,n=e.onClickHandler,a=Object(s.c)(Ne),i=a.loading,o=a.error,l=Object(s.b)();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{open:t,onClick:n}),Object(c.jsx)(be,{title:"Add new contact",open:t,feedback:"string"===typeof o?o:"",children:Object(c.jsx)(m.b,{initialValues:{firstName:"",lastName:"",email:"",phone:"",category:"other",birthday:null},onSubmit:function(){var e=Object(b.a)(j.a.mark((function e(t,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(we(Object(r.a)(Object(r.a)({},t),{},{birthday:t.birthday?t.birthday.toISOString():""}),n));case 2:c.setSubmitting(!1),c.resetForm();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),validationSchema:Ce,children:function(e){var t=e.values,r=e.setFieldValue,a=e.resetForm;return Object(c.jsxs)(m.a,{children:[Object(c.jsx)(y,{type:"text",name:"firstName",placeholder:"First name *"}),Object(c.jsx)(y,{type:"text",name:"lastName",placeholder:"Last name"}),Object(c.jsx)(y,{type:"email",name:"email",placeholder:"E-mail"}),Object(c.jsx)(y,{type:"text",name:"phone",placeholder:"Phone *"}),Object(c.jsxs)(me,{name:"category",as:"select",children:[Object(c.jsx)("option",{value:"other",children:"Other"}),Object(c.jsx)("option",{value:"family",children:"Family"}),Object(c.jsx)("option",{value:"job",children:"Job"}),Object(c.jsx)("option",{value:"friends",children:"Friends"})]}),Object(c.jsx)("div",{children:Object(c.jsx)(je.a,{selected:t.birthday,dateFormat:"MMMM d, yyyy",className:"add-contact-birthday",name:"birthday",onChange:function(e){return r("birthday",e)},placeholderText:"Birthday",showYearDropdown:!0,showMonthDropdown:!0,isClearable:!0})}),Object(c.jsxs)("div",{className:"add-contact-buttons-wrapper",children:[Object(c.jsx)("div",{className:"add-contact-create-button-wrapper",children:Object(c.jsx)(g,{type:"submit",variant:"primary",stretch:!0,disabled:i,children:"Create"})}),Object(c.jsx)("div",{className:"add-contact-cancel-button-wrapper",children:Object(c.jsx)(g,{type:"button",variant:"secondary",stretch:!0,onClickHandler:function(){n(),a()},children:"Cancel"})})]})]})}})})]})},Fe=(n(527),function(e){var t=e.value,n=e.onNameFilterChangeHandler,r=Object(a.useState)(!1),i=Object(v.a)(r,2),s=i[0],o=i[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"contacts-controls",children:[Object(c.jsx)("div",{className:"contacts-controls-input-wrapper",children:Object(c.jsx)(de,{type:"text",name:"search",placeholder:"Search...",value:t,onChangeHandler:n})}),Object(c.jsx)(g,{type:"button",variant:"success",round:!0,onClickHandler:function(){return o(!0)},children:"+"})]}),Object(c.jsx)(Se,{open:s,onClickHandler:function(){return o(!1)}})]})}),Pe=n(55),He=n(56),Ie=(n(530),function(e){var t=e.firstName,n=e.lastName,r=e.email,a=e.phone,i=e.category,s=e.birthday,o=e.onEditButtonClickHandler,l=e.onDeleteButtonClickHandler;return Object(c.jsxs)("div",{className:"contact-card",children:[Object(c.jsx)("div",{className:"contact-card-left",children:Object(c.jsx)(Pe.a,{icon:He.a,size:"5x",color:"darkblue"})}),Object(c.jsxs)("div",{className:"contact-card-center",children:[Object(c.jsxs)("div",{className:"contact-card-data-item contact-card-fullName",children:[Object(c.jsx)("div",{className:"contact-card-icon-wrapper",children:Object(c.jsx)(Pe.a,{icon:He.h,color:"darkblue"})}),Object(c.jsxs)("div",{children:[t," ",n]})]}),Object(c.jsxs)("div",{className:"contact-card-data-item contact-card-phone",children:[Object(c.jsx)("div",{className:"contact-card-icon-wrapper",children:Object(c.jsx)(Pe.a,{icon:He.e,color:"darkblue"})}),Object(c.jsx)("div",{children:a})]}),Object(c.jsxs)("div",{className:"contact-card-data-item contact-card-email",children:[Object(c.jsx)("div",{className:"contact-card-icon-wrapper",children:Object(c.jsx)(Pe.a,{icon:He.d,color:"darkblue"})}),Object(c.jsx)("div",{children:r})]}),Object(c.jsxs)("div",{className:"contact-card-data-item contact-card-category",children:[Object(c.jsx)("div",{className:"contact-card-icon-wrapper",children:Object(c.jsx)(Pe.a,{icon:He.f,color:"darkblue"})}),Object(c.jsx)("div",{children:i})]}),Object(c.jsxs)("div",{className:"contact-card-data-item contact-card-birthday",children:[Object(c.jsx)("div",{className:"contact-card-icon-wrapper",children:Object(c.jsx)(Pe.a,{icon:He.b,color:"darkblue"})}),Object(c.jsx)("div",{children:s&&new Date(s).toDateString()})]})]}),Object(c.jsxs)("div",{className:"contact-card-right",children:[Object(c.jsx)("div",{className:"contact-card-button-wrapper",children:Object(c.jsx)(g,{type:"button",variant:"warning",round:!0,onClickHandler:o,children:Object(c.jsx)(Pe.a,{icon:He.c,color:"darkblue"})})}),Object(c.jsx)("div",{className:"contact-card-button-wrapper",children:Object(c.jsx)(g,{type:"button",variant:"danger",round:!0,onClickHandler:l,children:Object(c.jsx)(Pe.a,{icon:He.g,color:"darkblue"})})})]})]})}),Ee=(n(531),p.b().shape({firstName:p.d().required("First name is required").min(2,"First name is too short").max(25,"First name is too long"),lastName:p.d().min(2,"Last name is too short").max(25,"Last name is too long"),email:p.d().email("Invalid e-mail"),phone:p.d().required("Phone is required").min(9,"Phone is too short"),category:p.d().oneOf(["friends","job","family","other"],"Invalid category type"),birthday:p.a().nullable()})),qe=function(e){var t=e.open,n=e.onClickHandler,a=e.contact,i=Object(s.c)(Ne),o=i.loading,l=i.error,d=Object(s.b)(),u={firstName:a.firstName,lastName:a.lastName,email:a.email,phone:a.phone,category:a.category,birthday:a.birthday?new Date(a.birthday):null};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{open:t,onClick:n}),Object(c.jsx)(be,{title:"Edit contact",open:t,feedback:"string"===typeof l?l:"",children:Object(c.jsx)(m.b,{initialValues:u,onSubmit:function(){var e=Object(b.a)(j.a.mark((function e(t,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(ke(a.id,Object(r.a)(Object(r.a)({},t),{},{birthday:t.birthday?t.birthday.toISOString():""}),n));case 2:c.setSubmitting(!1),c.resetForm();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),validationSchema:Ee,children:function(e){var t=e.values,r=e.setFieldValue,a=e.resetForm;return Object(c.jsxs)(m.a,{children:[Object(c.jsx)(y,{type:"text",name:"firstName",placeholder:"First name *"}),Object(c.jsx)(y,{type:"text",name:"lastName",placeholder:"Last name"}),Object(c.jsx)(y,{type:"email",name:"email",placeholder:"E-mail"}),Object(c.jsx)(y,{type:"text",name:"phone",placeholder:"Phone *"}),Object(c.jsxs)(me,{name:"category",as:"select",children:[Object(c.jsx)("option",{value:"other",children:"Other"}),Object(c.jsx)("option",{value:"family",children:"Family"}),Object(c.jsx)("option",{value:"job",children:"Job"}),Object(c.jsx)("option",{value:"friends",children:"Friends"})]}),Object(c.jsx)("div",{children:Object(c.jsx)(je.a,{selected:t.birthday,dateFormat:"MMMM d, yyyy",className:"add-contact-birthday",name:"birthday",onChange:function(e){return r("birthday",e)},placeholderText:"Birthday",showYearDropdown:!0,isClearable:!0})}),Object(c.jsxs)("div",{className:"edit-contact-buttons-wrapper",children:[Object(c.jsx)("div",{className:"edit-contact-button-wrapper",children:Object(c.jsx)(g,{type:"submit",variant:"primary",stretch:!0,disabled:o,children:o?"Editing...":"Edit"})}),Object(c.jsx)("div",{className:"edit-contact-button-wrapper",children:Object(c.jsx)(g,{type:"button",variant:"secondary",stretch:!0,onClickHandler:function(){n(),a()},children:"Cancel"})})]})]})}})})]})},Le=(n(532),function(e){var t=e.open,n=e.onCancelButtonClickHandler,r=e.onDeleteButtonClickHandler,a=Object(s.c)(Ne),i=a.error,o=a.loading;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{open:t,onClick:n}),Object(c.jsx)(be,{title:"Delete contact",open:t,feedback:"string"===typeof i?i:"",children:Object(c.jsxs)("div",{className:"delete-contact-buttons",children:[Object(c.jsx)("div",{className:"delete-contact-button-wrapper",children:Object(c.jsx)(g,{type:"button",variant:"danger",onClickHandler:r,disabled:o,stretch:!0,children:o?"Deleting...":"Delete"})}),Object(c.jsx)("div",{className:"delete-contact-button-wrapper",children:Object(c.jsx)(g,{type:"button",variant:"secondary",onClickHandler:n,stretch:!0,children:"Cancel"})})]})})]})}),Me=(n(533),function(e){var t,n=e.searchQuery,i=Object(a.useState)(null),l=Object(v.a)(i,2),d=l[0],u=l[1],m=Object(a.useState)(null),p=Object(v.a)(m,2),h=p[0],f=p[1],O=Object(s.c)((function(e){return e.firebase.auth})).uid,y=Object(s.c)((function(e){var t,n;return null===(t=e.firestore.data.contacts)||void 0===t||null===(n=t[O])||void 0===n?void 0:n.contacts})),g=Object(s.c)((function(e){return e.firestore.status.requesting["contacts/".concat(O)]})),N=Object(s.c)((function(e){return e.firestore.status.requested["contacts/".concat(O)]})),w=Object(s.b)();Object(o.useFirestoreConnect)((function(){return["contacts/".concat(O)]})),g?t=Object(c.jsx)(x,{}):N&&!(null===y||void 0===y?void 0:y.length)&&(t=Object(c.jsx)("p",{className:"contact-list-text",children:"Add your first contact"}));var C=Object(a.useMemo)((function(){return null===y||void 0===y?void 0:y.filter((function(e){return"".concat(e.firstName).concat(e.lastName?e.lastName:"").toLocaleLowerCase().includes(n.toLocaleLowerCase())})).sort((function(e,t){var n="".concat(e.firstName).concat(e.lastName?e.lastName:""),r="".concat(t.firstName).concat(t.lastName?t.lastName:"");return n.localeCompare(r)}))}),[y,n]);return Object(c.jsxs)(c.Fragment,{children:[t,null===C||void 0===C?void 0:C.map((function(e){return Object(c.jsx)("div",{className:"contact-list-card-wrapper",children:Object(c.jsx)(Ie,Object(r.a)(Object(r.a)({},e),{},{onEditButtonClickHandler:function(){return u(e)},onDeleteButtonClickHandler:function(){return f(e)}}))},e.id)})),d&&Object(c.jsx)(qe,{open:Boolean(d),onClickHandler:function(){return u(null)},contact:d}),h&&Object(c.jsx)(Le,{open:Boolean(h),onCancelButtonClickHandler:function(){f(null),w(Oe())},onDeleteButtonClickHandler:function(){var e,t;w((e=h,t=function(){return f(null)},function(){var n=Object(b.a)(j.a.mark((function n(r,c){var a,i;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=c().firebase.auth.uid,r(xe()),n.prev=2,n.next=5,k.firestore().collection("contacts").doc(a);case 5:return i=n.sent,n.next=8,i.update({contacts:k.firestore.FieldValue.arrayRemove(e)});case 8:t(),r(ve()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),r(ye(n.t0.message));case 15:case"end":return n.stop()}}),n,null,[[2,12]])})));return function(e,t){return n.apply(this,arguments)}}()))}})]})}),De=(n(534),function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),s=Object(v.a)(i,2),o=s[0],l=s[1],d=Object(a.useCallback)(le()((function(e){return l(e)}),1e3),[]);return Object(c.jsx)("div",{className:"contacts",children:Object(c.jsxs)("div",{className:"contacts-wrapper",children:[Object(c.jsx)(Fe,{value:n,onNameFilterChangeHandler:function(e){var t=e.target;r(t.value),d(t.value)}}),Object(c.jsx)(Me,{searchQuery:o})]})})}),Be=(n(535),function(e){var t=e.open,n=e.onClickHandler,r=Object(s.c)(D),a=r.deleteProfileError,i=r.loading,o=Object(s.b)();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{open:t,onClick:n}),Object(c.jsx)(be,{title:"Delete account",open:t,feedback:"string"===typeof a?a:"",children:Object(c.jsxs)("div",{className:"delete-account-buttons",children:[Object(c.jsx)("div",{className:"delete-account-button-wrapper",children:Object(c.jsx)(g,{type:"button",variant:"danger",onClickHandler:function(){return o(function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(P()),r=k.auth().currentUser,c=n().firebase.auth.uid,k.firestore().collection("users").doc(c).delete(),k.firestore().collection("contacts").doc(c).delete(),e.next=8,null===r||void 0===r?void 0:r.delete();case 8:t(H()),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t(L(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}())},disabled:i,stretch:!0,children:"Delete"})}),Object(c.jsx)("div",{className:"delete-account-button-wrapper",children:Object(c.jsx)(g,{type:"button",variant:"secondary",onClickHandler:n,stretch:!0,children:"Cancel"})})]})})]})}),Ve=(n(536),p.b().shape({firstName:p.d().required("First name is required").min(2,"First name is too short").max(25,"First name is too long"),lastName:p.d().required("Last name is required").min(2,"Last name is too short").max(25,"Last name is too long"),email:p.d().email("Invalid e-mail").required("E-mail is required"),password:p.d().min(8,"Password is too short"),confirmPassword:p.d().oneOf([p.c("password"),null],"Password does not match")})),Ue=function(){var e=Object(a.useState)(!1),t=Object(v.a)(e,2),n=t[0],r=t[1],i=Object(s.c)((function(e){return e.firebase})),o=i.profile,l=o.firstName,d=o.lastName,u=o.isLoaded,p=i.auth.email,h=Object(s.c)(D),O=h.error,x=h.loading,N=h.editProfileSuccess,w=Object(s.b)(),k={firstName:l,lastName:d,email:p||"",password:"",confirmPassword:""};return u?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f,{title:"Edit Profile",error:"string"===typeof O?O:"",success:N?"Profile was successfully updated":"",children:Object(c.jsx)(m.b,{initialValues:k,onSubmit:function(){var e=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(U(t));case 2:n.setSubmitting(!1);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),validationSchema:Ve,children:Object(c.jsxs)(m.a,{children:[Object(c.jsx)(y,{type:"text",name:"firstName",placeholder:"First name"}),Object(c.jsx)(y,{type:"text",name:"lastName",placeholder:"Last name"}),Object(c.jsx)(y,{type:"email",name:"email",placeholder:"E-mail"}),Object(c.jsx)(y,{type:"password",name:"password",placeholder:"Password"}),Object(c.jsx)(y,{type:"password",name:"confirmPassword",placeholder:"Confirm password"}),Object(c.jsxs)("div",{className:"profile-form-buttons-wrapper",children:[Object(c.jsx)("div",{className:"profile-form-button-wrapper",children:Object(c.jsx)(g,{type:"submit",variant:"primary",stretch:!0,disabled:x,children:x?"Editing profile...":"Edit profile"})}),Object(c.jsx)("div",{className:"profile-form-button-wrapper",children:Object(c.jsx)(g,{type:"button",variant:"danger",stretch:!0,onClickHandler:function(){return r(!0)},children:"Delete account"})})]})]})})}),Object(c.jsx)(Be,{open:n,onClickHandler:function(){r(!1),w(F())}})]}):null},Ae=(n(537),function(){return T(),Object(c.jsx)("div",{className:"profile-wrapper",children:Object(c.jsx)(Ue,{})})}),Re=(n(538),p.b().shape({email:p.d().email("Invalid e-mail").required("E-mail is required"),password:p.d().required("Password is required").min(8,"Password is too short")})),Te=function(){var e=Object(s.c)(D),t=e.loading,n=e.error,r=Object(s.b)();return Object(c.jsx)(f,{title:"Signin",error:"string"===typeof n?n:"",children:Object(c.jsx)(m.b,{initialValues:{email:"",password:""},onSubmit:function(){var e=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(V(t));case 2:n.setSubmitting(!1);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),validationSchema:Re,children:Object(c.jsxs)(m.a,{children:[Object(c.jsx)(y,{type:"email",name:"email",placeholder:"E-mail *"}),Object(c.jsx)(y,{type:"password",name:"password",placeholder:"Password *"}),Object(c.jsx)("div",{className:"signin-form-button-wrapper",children:Object(c.jsx)(g,{type:"submit",variant:"primary",stretch:!0,disabled:t,children:t?"Signing In...":"Sign In"})})]})})})},ze=(n(539),function(){return T(),Object(c.jsx)("div",{className:"signin-wrapper",children:Object(c.jsx)(Te,{})})}),Je=function(){var e=Object(s.b)();return Object(a.useEffect)((function(){e(Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.auth().signOut();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])}))))}),[e]),null},Ye=function(){var e,t=Object(s.c)((function(e){return e.firebase})).auth,n=t.uid,r=t.emailVerified;return Object(o.isLoaded)(t)?(e=n&&!r?Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{path:_,exact:!0,component:se}),Object(c.jsx)(d.b,{path:X,exact:!0,component:Ae}),Object(c.jsx)(d.b,{path:$,exact:!0,component:Je}),Object(c.jsx)(d.a,{to:_})]}):n&&r?Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{path:G,exact:!0,component:De}),Object(c.jsx)(d.b,{path:X,exact:!0,component:Ae}),Object(c.jsx)(d.b,{path:$,exact:!0,component:Je}),Object(c.jsx)(d.a,{to:G})]}):Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{path:Z,exact:!0,component:ze}),Object(c.jsx)(d.b,{path:W,exact:!0,component:z}),Object(c.jsx)(d.a,{to:Z})]}),Object(c.jsx)(ae,{children:e})):Object(c.jsx)(x,{})},Ke=n(27),Qe=n(70),We=n(40),_e=Object(We.c)({auth:M,firebase:o.firebaseReducer,firestore:Qe.firestoreReducer,contacts:ge}),Ge=Object(Ke.a)(Object(N.c)({serializableCheck:{ignoredActions:[].concat(Object(Ke.a)(Object.keys(Qe.constants.actionTypes).map((function(e){return"".concat(Qe.constants.actionsPrefix,"/").concat(e)}))),Object(Ke.a)(Object.keys(o.actionTypes).map((function(e){return"@@reactReduxFirebase/".concat(e)})))),ignoredPaths:["firebase","firestore"]},thunk:{extraArgument:{getFirebase:o.getFirebase,getFirestore:Qe.getFirestore}}})),Xe=Object(N.a)({reducer:_e,middleware:Ge}),Ze={firebase:k,config:{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0},dispatch:Xe.dispatch,createFirestoreInstance:Qe.createFirestoreInstance},$e=Xe;n(571);Object(i.render)(Object(c.jsx)(a.StrictMode,{children:Object(c.jsx)(s.a,{store:$e,children:Object(c.jsx)(l.a,{children:Object(c.jsx)(o.ReactReduxFirebaseProvider,Object(r.a)(Object(r.a)({},Ze),{},{children:Object(c.jsx)(Ye,{})}))})})}),document.getElementById("root"))}},[[572,1,2]]]);
//# sourceMappingURL=main.70008b28.chunk.js.map